module KeyboardKey exposing (KeyboardKey(..), keyDecoder, toString)

import Json.Decode as Decode


type KeyboardKey
    = CharacterKey String
    | Shift
    | Meta
    | Alt
    | Control


toString : KeyboardKey -> String
toString key =
    case key of
        CharacterKey s ->
            s

        Shift ->
            "Shift"

        Meta ->
            "Meta"

        Alt ->
            "Alt"

        Control ->
            "Control"


keyDecoder : Decode.Decoder KeyboardKey
keyDecoder =
    Decode.map toKey (Decode.field "key" Decode.string)


toKey : String -> KeyboardKey
toKey s =
    case s of
        "Alt" ->
            Alt

        "Control" ->
            Control

        "Meta" ->
            Meta

        "Shift" ->
            Shift

        _ ->
            CharacterKey s
