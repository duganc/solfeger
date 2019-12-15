module Page.AssymetricCryptographyPage exposing (Flags, Model, Msg(..), decrypt, encrypt, generateKeyPair, init, subscriptions, update, view)

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


type alias PublicKey =
    ( Int, Int )


type alias PrivateKey =
    ( Int, Int )


type alias Plaintext =
    Int


type alias Cyphertext =
    Int


generateKeyPair : Int -> Int -> Int -> Maybe ( PublicKey, PrivateKey )
generateKeyPair p q exponent =
    case invertMod ((p - 1) * (q - 1)) exponent of
        Nothing ->
            Nothing

        Just inverse ->
            Just ( ( exponent, p * q ), ( inverse, p * q ) )


invertMod : Int -> Int -> Maybe Int
invertMod modulus a =
    case a of
        0 ->
            Nothing

        new_r ->
            let
                t =
                    invertModIter ( modulus, new_r ) ( 0, 1 )
            in
            if t < 0 then
                Just (t + modulus)

            else
                Just t


invertModIter :
    ( Int, Int )
    -> ( Int, Int )
    -> Int
invertModIter rs ts =
    let
        ( r, new_r ) =
            rs

        ( t, new_t ) =
            ts
    in
    case new_r of
        0 ->
            t

        _ ->
            let
                q =
                    r // new_r
            in
            invertModIter ( new_r, r - q * new_r ) ( new_t, t - q * new_t )


encrypt : PublicKey -> Plaintext -> Cyphertext
encrypt k message =
    let
        ( exponent, modulus ) =
            k
    in
    exponentiateModBy modulus message exponent


decrypt : PrivateKey -> Cyphertext -> Plaintext
decrypt k message =
    let
        ( exponent, modulus ) =
            k
    in
    exponentiateModBy modulus message exponent


exponentiateModBy : Int -> Int -> Int -> Int
exponentiateModBy modulus base exponent =
    case exponent of
        0 ->
            1

        _ ->
            modBy modulus (base * exponentiateModBy modulus base (exponent - 1))



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
