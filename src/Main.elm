module Main exposing (..)

import Browser exposing (Document, UrlRequest(..), application)
import Browser.Navigation exposing (Key, load, pushUrl)
import Dict exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import List exposing (range)
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
            ( model, toString url |> load )

        MouseDownOn key ->
            ( { model | isKeyPressed = Dict.insert key True model.isKeyPressed }, Cmd.none )

        MouseUpOn key ->
            ( { model | isKeyPressed = Dict.insert key False model.isKeyPressed }, Cmd.none )


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
    Sub.none



-- VIEW


type Msg
    = ChangeUrl Url
    | MouseDownOn Int
    | MouseUpOn Int


view : Model -> Document Msg
view model =
    Document "Solfeger" [ div [ class "table" ] [ renderKeys model 12 ] ]


renderKeys : Model -> Int -> Html Msg
renderKeys model n =
    range 0 (n - 1) |> List.map (renderKey model) |> div []


renderKey : Model -> Int -> Html Msg
renderKey model n =
    div [ class "key", id (getKeyName n), onMouseDown (MouseDownOn n), onMouseUp (MouseUpOn n) ] [ text (getLabelFromKey model.isKeyPressed n) ]


getKeyName : Int -> String
getKeyName n =
    "key-" ++ fromInt n


getLabelFromKey : Dict Int Bool -> Int -> String
getLabelFromKey isKeyPressed key =
    case Dict.get key isKeyPressed of
        Nothing ->
            "Error!"

        Just switch ->
            showTextOrNothing (getSolfege key |> getSolfegeName) switch


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
