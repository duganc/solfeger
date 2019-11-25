port module Main exposing (..)

import Browser exposing (Document, UrlRequest(..), application)
import Browser.Events exposing (onKeyDown, onKeyUp)
import Browser.Navigation exposing (Key, load, pushUrl)
import Dict exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode exposing (Value)
import KeyboardKey exposing (..)
import List exposing (range)
import Note exposing (..)
import Platform.Sub exposing (batch)
import Scale exposing (..)
import Solfege exposing (..)
import String exposing (fromInt)
import Url exposing (Protocol(..), Url, fromString, toString)


main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = loadUrlFromUrlRequest
        , onUrlChange = ChangeUrl
        }


port playTone : String -> Cmd msg



-- MODEL


type alias Model =
    { isKeyPressed : Dict Int Bool
    , selectedScale : Scale
    }


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init _ _ _ =
    ( Model (Dict.fromList (range 0 11 |> List.map (\i -> ( i, False )))) Scale.default, Cmd.none )


type alias Flags =
    ()



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeUrl url ->
            ( model, Url.toString url |> load )

        MouseDownOn i ->
            case Solfege.fromInt i of
                key ->
                    ( pressKeyOnModel model key, playTone (getAbsoluteNoteString key) )

        MouseUpOn i ->
            case Solfege.fromInt i of
                key ->
                    ( releaseKeyOnModel model key, Cmd.none )

        KeyDownOn keyboardKey ->
            case fromKeyboardKey keyboardKey of
                Ok key ->
                    ( pressKeyOnModel model key, playTone (getAbsoluteNoteString key) )

                Err s ->
                    ( model, Cmd.none )

        KeyUpOn keyboardKey ->
            case fromKeyboardKey keyboardKey of
                Ok key ->
                    ( releaseKeyOnModel model key, Cmd.none )

                Err s ->
                    ( model, Cmd.none )


getAbsoluteNoteString : Solfege -> String
getAbsoluteNoteString solfege =
    case Solfege.toInt solfege |> Note.fromInt |> Result.map Note.toAbsoluteString of
        Ok s ->
            s

        Err s ->
            s


pressKeyOnModel : Model -> Solfege -> Model
pressKeyOnModel model solfege =
    { model | isKeyPressed = Dict.insert (Solfege.toInt solfege) True model.isKeyPressed }


releaseKeyOnModel : Model -> Solfege -> Model
releaseKeyOnModel model solfege =
    { model | isKeyPressed = Dict.insert (Solfege.toInt solfege) False model.isKeyPressed }


urlRequestToUrl : UrlRequest -> Url
urlRequestToUrl request =
    case request of
        External s ->
            case Url.fromString s of
                Nothing ->
                    Url Http "google.com" Nothing "" Nothing Nothing

                Just u ->
                    u

        Internal url ->
            url


loadUrlFromUrlRequest : UrlRequest -> Msg
loadUrlFromUrlRequest =
    urlRequestToUrl >> ChangeUrl



-- SUBSCRIPTIONS


subscriptions : model -> Sub Msg
subscriptions model =
    batch
        [ Browser.Events.onKeyDown keyDownDecoder
        , Browser.Events.onKeyUp keyUpDecoder
        ]


keyDownDecoder : Decode.Decoder Msg
keyDownDecoder =
    Decode.map KeyDownOn keyDecoder


keyUpDecoder : Decode.Decoder Msg
keyUpDecoder =
    Decode.map KeyUpOn keyDecoder



-- VIEW


type Msg
    = ChangeUrl Url
    | MouseDownOn Int
    | MouseUpOn Int
    | KeyDownOn KeyboardKey
    | KeyUpOn KeyboardKey


view : Model -> Document Msg
view model =
    Document "Solfeger"
        [ viewHeader
        , div [ class "table" ] [ renderKeys model 12 ]
        , div [ class "table" ] renderScaleSelector
        , viewFooter
        ]


viewHeader : Html Msg
viewHeader =
    div [] []


viewFooter : Html Msg
viewFooter =
    p [ class "text-color-white" ]
        [ text "This work is licensed under a "
        , a [ href "http://creativecommons.org/licenses/by-nc/4.0/" ] [ text "Creative Commons Attribution-NonCommercial 4.0 License" ]
        , text "."
        ]


renderKeys : Model -> Int -> Html Msg
renderKeys model n =
    range 0 (n - 1) |> List.map (renderKey model) |> div []


renderKey : Model -> Int -> Html Msg
renderKey model n =
    div
        [ class "key"
        , id (getKeyName n)
        , onMouseDown (MouseDownOn n)
        , onMouseUp (MouseUpOn n)
        ]
        [ text (getLabelFromKey model.isKeyPressed n) ]


getKeyName : Int -> String
getKeyName n =
    "key-" ++ String.fromInt n


getLabelFromKey : Dict Int Bool -> Int -> String
getLabelFromKey isKeyPressed key =
    case Dict.get key isKeyPressed of
        Nothing ->
            "Error!"

        Just switch ->
            showTextOrNothing (Solfege.fromInt key |> getSolfegeName) switch


showTextOrNothing : String -> Bool -> String
showTextOrNothing ifTrue switch =
    showText ifTrue "" switch


showText : String -> String -> Bool -> String
showText ifTrue ifFalse switch =
    case switch of
        True ->
            ifTrue

        False ->
            ifFalse


renderScaleSelector : List (Html Msg)
renderScaleSelector =
    [ div [ class "table" ] getAllNoteSelectors
    , div [ class "table" ] getAllScaleTypeSelectors
    ]


getAllNoteSelectors : List (Html Msg)
getAllNoteSelectors =
    range 0 11 |> List.map renderNoteSelector


renderNoteSelector : Int -> Html Msg
renderNoteSelector i =
    div [ class "scale-selector", id ("scale-note-" ++ String.fromInt i) ] [ i |> Note.fromInt |> Result.map Note.toString |> Result.withDefault "ERROR!" |> text ]


getAllScaleTypeSelectors : List (Html Msg)
getAllScaleTypeSelectors =
    range 0 6 |> List.map renderScaleTypeSelector


renderScaleTypeSelector : Int -> Html Msg
renderScaleTypeSelector i =
    div [ class "scale-selector", id ("scale-type-" ++ String.fromInt i) ] [ i |> Scale.scaleTypeFromInt |> Result.map Scale.scaleTypeToString |> Result.withDefault "ERROR!" |> text ]
