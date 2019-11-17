module Main exposing (..)

import Browser exposing (Document, UrlRequest(..), application)
import Browser.Navigation exposing (Key, load, pushUrl)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import List exposing (range)
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
    String


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init _ _ _ =
    ( "Testing!", Cmd.none )


type alias Flags =
    ()



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeUrl url ->
            ( model, toString url |> load )

        MouseDownOn key ->
            ( model, Cmd.none )

        MouseUpOn key ->
            ( model, Cmd.none )


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
    | MouseDownOn String
    | MouseUpOn String


view : Model -> Document Msg
view model =
    Document "Solfeger" [ div [ class "table" ] [ renderKeys 12 ] ]


renderKeys : Int -> Html Msg
renderKeys n =
    range 0 (n - 1) |> List.map renderKey |> div []


renderKey : Int -> Html Msg
renderKey n =
    div [ class "key", id (getKeyName n), onMouseDown (MouseDownOn (getKeyName n)) ] [ text (getKeyName n) ]


getKeyName : Int -> String
getKeyName n =
    "key-" ++ fromInt n
