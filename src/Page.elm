module Page exposing (viewFooter, viewHeader)

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
import String exposing (fromInt)
import Url exposing (Protocol(..), Url, fromString, toString)


viewHeader : Html msg
viewHeader =
    div []
        [ div
            [ class "tooltip", class "float-right", class "information-icon" ]
            [ text "?"
            , span [ class "tooltip-text" ]
                [ text "Stub Tooltip!"
                ]
            ]
        ]


viewFooter : Html msg
viewFooter =
    p [ class "color-white", class "font-very-small" ]
        [ text "This work is licensed under a "
        , a [ href "http://creativecommons.org/licenses/by-nc/4.0/" ] [ text "Creative Commons Attribution-NonCommercial 4.0 License" ]
        , text "."
        ]
