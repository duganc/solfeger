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
    , octaveAdjustment : Int
    , selectedScale : Scale
    }


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init _ _ _ =
    ( Model (Dict.fromList (range 0 12 |> List.map (\i -> ( i, False )))) 0 Scale.default, Cmd.none )


type alias Flags =
    ()



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeUrl url ->
            ( model, Url.toString url |> load )

        MouseDownOn b ->
            case b of
                Key i ->
                    ( pressKeyOnModel model (Note.fromInt (i + (Scale.pitchClass model.selectedScale |> pitchClassToInt)))
                    , playTone (fromKeyClick model.selectedScale i |> Note.toString)
                    )

                ScaleSelector i ->
                    ( { model | selectedScale = ( Scale.pitchClass model.selectedScale, scaleTypeFromInt i |> Result.withDefault (Scale.scaleType model.selectedScale) ) }, Cmd.none )

                NoteSelector i ->
                    ( { model | selectedScale = ( pitchClassFromInt i, Scale.scaleType model.selectedScale ) }, Cmd.none )

        MouseUpOn b ->
            case b of
                Key i ->
                    ( releaseKeyOnModel model (Note.fromInt (i + (Scale.pitchClass model.selectedScale |> pitchClassToInt))), Cmd.none )

                _ ->
                    ( model, Cmd.none )

        KeyDownOn keyboardKey ->
            case keyboardKey of
                CharacterKey _ ->
                    case fromKeyboardKey model.selectedScale keyboardKey of
                        Ok note ->
                            ( pressKeyOnModel model note, playTone (note |> adjustOctave model.octaveAdjustment |> Note.toString) )

                        Err s ->
                            ( model, Cmd.none )

                Shift ->
                    ( setOctaveAdjustment 1 model, Cmd.none )

                Control ->
                    ( setOctaveAdjustment -1 model, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        KeyUpOn keyboardKey ->
            case keyboardKey of
                CharacterKey _ ->
                    case fromKeyboardKey model.selectedScale keyboardKey of
                        Ok note ->
                            ( releaseKeyOnModel model note, Cmd.none )

                        Err s ->
                            ( model, Cmd.none )

                _ ->
                    ( resetOctaveAdjustment model, Cmd.none )


adjustOctave : Int -> Note -> Note
adjustOctave adjustment note =
    ( Note.pitchClass note, Note.octave note + adjustment )


resetOctaveAdjustment : Model -> Model
resetOctaveAdjustment =
    setOctaveAdjustment 0


setOctaveAdjustment : Int -> Model -> Model
setOctaveAdjustment i model =
    { model | octaveAdjustment = i }


pressKeyOnModel : Model -> Note -> Model
pressKeyOnModel =
    pressOrReleaseKeyOnModel True


releaseKeyOnModel : Model -> Note -> Model
releaseKeyOnModel =
    pressOrReleaseKeyOnModel False


pressOrReleaseKeyOnModel : Bool -> Model -> Note -> Model
pressOrReleaseKeyOnModel isPress model note =
    { model | isKeyPressed = Dict.insert (Note.toInt note - (Scale.pitchClass model.selectedScale |> pitchClassToInt)) isPress model.isKeyPressed }


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
    | MouseDownOn Button
    | MouseUpOn Button
    | KeyDownOn KeyboardKey
    | KeyUpOn KeyboardKey


type Button
    = Key Int
    | ScaleSelector Int
    | NoteSelector Int


view : Model -> Document Msg
view model =
    Document "Solfeger"
        [ viewHeader
        , div [ class "table" ] [ renderKeys model 13 ]
        , div [ class "table" ] (renderScaleSelector model.selectedScale)
        , viewFooter
        ]


viewHeader : Html Msg
viewHeader =
    div []
        [ div
            [ class "tooltip", class "float-right", class "information-icon" ]
            [ text "?"
            , span [ class "tooltip-text" ]
                [ text "To play notes, either click them or use the number row on your keyboard from the backtick key to the =.  \n\nFor instance, 4 will be Mi, the fifth note of the chromatic scale (because backtick is Do, 1 is Di, etc.).  The Q through \\ keys will also work.  \n\nShift can be used to raise the tone by an octave and Control can be used to lower it."
                ]
            ]
        ]


viewFooter : Html Msg
viewFooter =
    p [ class "color-white", class "font-very-small" ]
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
        , activeKeyInScale model.selectedScale n
        , id (getKeyName n)
        , onMouseDown (MouseDownOn (Key n))
        , onMouseUp (MouseUpOn (Key n))
        ]
        [ text (getLabelFromKey model.selectedScale model.isKeyPressed n) ]


activeKeyInScale : Scale -> Int -> Attribute Msg
activeKeyInScale scale i =
    case keyIsInScale scale i of
        True ->
            class "black-on-white"

        False ->
            class "white-on-dark"


keyIsInScale : Scale -> Int -> Bool
keyIsInScale scale i =
    -- No need to shift for the note since the keys are already shifted
    notes ( A, Scale.scaleType scale ) |> List.member (modBy 12 i)


getKeyName : Int -> String
getKeyName n =
    "key-" ++ String.fromInt n


getLabelFromKey : Scale -> Dict Int Bool -> Int -> String
getLabelFromKey scale isKeyPressed key =
    getNoteLabelFromKey scale key
        ++ "\n"
        ++ (case Dict.get key isKeyPressed of
                Nothing ->
                    "Error!"

                Just switch ->
                    showTextOrNothing (Solfege.fromInt key |> Solfege.toString) switch
           )


getNoteLabelFromKey : Scale -> Int -> String
getNoteLabelFromKey scale i =
    (i + pitchClassToInt (Scale.pitchClass scale)) |> pitchClassFromInt |> pitchClassToString


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


renderScaleSelector : Scale -> List (Html Msg)
renderScaleSelector scale =
    [ div [ class "table" ] (getAllNoteSelectors (Scale.pitchClass scale))
    , div [ class "table" ] (getAllScaleTypeSelectors (Scale.scaleType scale))
    ]


getAllNoteSelectors : PitchClass -> List (Html Msg)
getAllNoteSelectors pc =
    range 0 11 |> List.map (renderNoteSelector pc)


renderNoteSelector : PitchClass -> Int -> Html Msg
renderNoteSelector pc i =
    div
        [ class "scale-selector"
        , activeBackgroundFromPitchClass pc i
        , id ("scale-note-" ++ String.fromInt i)
        , onMouseDown (MouseDownOn (NoteSelector i))
        , onMouseUp (MouseUpOn (NoteSelector i))
        ]
        [ i
            |> Note.fromInt
            |> Note.toString
            |> text
        ]


activeBackgroundFromPitchClass : PitchClass -> Int -> Attribute Msg
activeBackgroundFromPitchClass pc i =
    if pc == (i |> Note.pitchClassFromInt) then
        class "bg-white"

    else
        class "bg-medium"


activeBackgroundFromScaleType : ScaleType -> Int -> Attribute Msg
activeBackgroundFromScaleType t i =
    if t == (i |> Scale.scaleTypeFromInt |> Result.withDefault Chromatic) then
        class "bg-white"

    else
        class "bg-medium"


getAllScaleTypeSelectors : ScaleType -> List (Html Msg)
getAllScaleTypeSelectors t =
    range 0 7 |> List.map (renderScaleTypeSelector t)


renderScaleTypeSelector : ScaleType -> Int -> Html Msg
renderScaleTypeSelector t i =
    div
        [ class "scale-selector"
        , activeBackgroundFromScaleType t i
        , id ("scale-type-" ++ String.fromInt i)
        , onMouseDown (MouseDownOn (ScaleSelector i))
        , onMouseUp (MouseUpOn (ScaleSelector i))
        ]
        [ i
            |> Scale.scaleTypeFromInt
            |> Result.map Scale.scaleTypeToString
            |> Result.withDefault "ERROR!"
            |> text
        ]
