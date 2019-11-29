module Main exposing (..)

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
import Page as SolfegePage
import Platform.Sub exposing (batch)
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


type Model
    = Solfege SolfegePage.Model
    | Error String


type alias Flags =
    ()


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init flags url key =
    SolfegePage.init flags url key |> tupleMap Solfege (Cmd.map SolfegeMsg)



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg mainModel =
    case msg of
        ChangeUrl url ->
            ( mainModel, Url.toString url |> load )

        SolfegeMsg message ->
            case mainModel of
                Solfege m ->
                    tupleMap Solfege (Cmd.map SolfegeMsg) (SolfegePage.update message m)

                _ ->
                    ( Error "Update received SolfegeMsg but model wasn't Solfege.", Cmd.none )


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


tupleMap : (a -> c) -> (b -> d) -> ( a, b ) -> ( c, d )
tupleMap f g ( a, b ) =
    ( f a, g b )


loadUrlFromUrlRequest : UrlRequest -> Msg
loadUrlFromUrlRequest =
    urlRequestToUrl >> ChangeUrl



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    case model of
        Solfege m ->
            Sub.map (\a -> SolfegeMsg a) (SolfegePage.subscriptions m)

        _ ->
            Sub.none



-- VIEW


type Msg
    = ChangeUrl Url
    | SolfegeMsg SolfegePage.Msg


view : Model -> Document Msg
view model =
    Document "Solfeger" <|
        case model of
            Solfege m ->
                SolfegePage.view m |> List.map (Html.map SolfegeMsg)

            Error errorMessage ->
                [ div [] [ text ("Error: " ++ errorMessage) ] ]
