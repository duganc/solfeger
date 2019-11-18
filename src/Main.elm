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
import Platform.Sub exposing (batch)
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
    { isKeyPressed : Dict Int Bool }


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init _ _ _ =
    ( Model (Dict.fromList (range 0 11 |> List.map (\i -> ( i, False )))), Cmd.none )


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
                    ( pressKeyOnModel model key, playTone (Solfege.getSolfegeName key) )

        MouseUpOn i ->
            case Solfege.fromInt i of
                key ->
                    ( releaseKeyOnModel model key, Cmd.none )

        KeyDownOn keyboardKey ->
            case fromKeyboardKey keyboardKey of
                Ok key ->
                    ( pressKeyOnModel model key, playTone (Solfege.getSolfegeName key) )

                Err s ->
                    ( model, Cmd.none )

        KeyUpOn keyboardKey ->
            case fromKeyboardKey keyboardKey of
                Ok key ->
                    ( releaseKeyOnModel model key, Cmd.none )

                Err s ->
                    ( model, Cmd.none )


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
            case fromString s of
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
    Document "Solfeger" [ div [ class "table" ] [ renderKeys model 12 ] ]


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
