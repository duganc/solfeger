module KeyboardKey exposing (KeyboardKey(..), keyDecoder, toString)

import Json.Decode as Decode


type KeyboardKey
    = CharacterKey String


toString : KeyboardKey -> String
toString key =
    case key of
        CharacterKey s ->
            s


keyDecoder : Decode.Decoder KeyboardKey
keyDecoder =
    Decode.field "key" Decode.string |> Decode.map CharacterKey
