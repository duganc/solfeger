module Main exposing (..)

import Browser exposing (Document, UrlRequest(..), application)
import Browser.Navigation exposing (Key, load, pushUrl)
import Html exposing (..)
import Html.Attributes exposing (..)
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
        , onUrlChange = loadUrl
        }



-- MODEL


type alias Model =
    String


init : Flags -> Url -> key -> ( Model, Cmd msg )
init _ _ _ =
    ( "Testing!", Cmd.none )


type alias Flags =
    ()



-- UPDATE


update : msg -> Model -> ( Model, Cmd msg )
update _ model =
    ( model, Cmd.none )


loadUrl : Url -> Cmd msg
loadUrl url =
    load <| toString url


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


loadUrlFromUrlRequest : UrlRequest -> Cmd msg
loadUrlFromUrlRequest =
    urlRequestToUrl >> loadUrl



-- SUBSCRIPTIONS


subscriptions : model -> Sub msg
subscriptions model =
    Sub.none



-- VIEW


type alias Msg =
    String


view : Model -> Document msg
view model =
    Document "Solfeger" [ div [ class "table" ] [ renderKeys 12 ] ]


renderKeys : Int -> Html msg
renderKeys n =
    range 0 (n - 1) |> List.map renderKey |> div []


renderKey : Int -> Html msg
renderKey n =
    div [ class "key", id ("key-" ++ fromInt n) ] [ text ("key-" ++ fromInt n) ]
