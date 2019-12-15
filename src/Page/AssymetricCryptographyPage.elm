module Page.AssymetricCryptographyPage exposing (..)

import Browser exposing (Document, UrlRequest(..), application)
import Browser.Events exposing (onKeyDown, onKeyUp)
import Browser.Navigation exposing (Key, load, pushUrl)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode exposing (Value)
import Url exposing (Protocol(..), Url, fromString, toString)



-- MODEL


type alias Model =
    { stub : ()
    }


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init _ _ _ =
    ( Model (), Cmd.none )


type alias Flags =
    ()



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( Model (), Cmd.none )



-- SUBSCRIPTIONS


subscriptions : model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


type Msg
    = Stub


view : Model -> List (Html Msg)
view model =
    [ div [] [ text "Stub" ] ]
