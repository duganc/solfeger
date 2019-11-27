module Scale exposing (Error(..), Scale, ScaleType(..), default, fromKeyClick, fromKeyboardKey, notes, pitchClass, scaleType, scaleTypeFromInt, scaleTypeToString, toSolfege)

import KeyboardKey exposing (..)
import Note exposing (..)
import Solfege exposing (..)
import Tuple exposing (first)


type alias Scale =
    ( PitchClass, ScaleType )


type ScaleType
    = Chromatic
    | Minor
    | Locrian
    | Major
    | Dorian
    | Phrygian
    | Lydian
    | Mixolydian


type Error
    = InvalidScale String
    | UnassignedKey KeyboardKey


default : Scale
default =
    ( A, Chromatic )


pitchClass : Scale -> PitchClass
pitchClass =
    Tuple.first


scaleType : Scale -> ScaleType
scaleType =
    Tuple.second


notes : Scale -> List Int
notes ( note, scale ) =
    List.map ((+) (Note.pitchClassToInt note))
        (case scale of
            Chromatic ->
                List.range 0 12

            Minor ->
                [ 0, 2, 3, 5, 7, 8, 10 ]

            Locrian ->
                [ 0, 1, 3, 5, 6, 8, 10 ]

            Major ->
                [ 0, 2, 4, 5, 7, 9, 11 ]

            Dorian ->
                [ 0, 2, 3, 5, 7, 9, 10 ]

            Phrygian ->
                [ 0, 1, 3, 5, 7, 8, 10 ]

            Lydian ->
                [ 0, 2, 4, 6, 7, 9, 11 ]

            Mixolydian ->
                [ 0, 2, 4, 5, 7, 9, 10 ]
        )


scaleTypeFromInt : Int -> Result Error ScaleType
scaleTypeFromInt i =
    case i of
        0 ->
            Ok Chromatic

        1 ->
            Ok Minor

        2 ->
            Ok Locrian

        3 ->
            Ok Major

        4 ->
            Ok Dorian

        5 ->
            Ok Phrygian

        6 ->
            Ok Lydian

        7 ->
            Ok Mixolydian

        _ ->
            Err (String.fromInt i |> InvalidScale)


scaleTypeToString : ScaleType -> String
scaleTypeToString t =
    case t of
        Chromatic ->
            "Chromatic"

        Minor ->
            "Minor"

        Locrian ->
            "Locrian"

        Major ->
            "Major"

        Dorian ->
            "Dorian"

        Phrygian ->
            "Phrygian"

        Lydian ->
            "Lydian"

        Mixolydian ->
            "Mixolydian"


fromKeyClick : Scale -> Int -> Note
fromKeyClick scale i =
    i + adjustForScale scale |> Note.fromInt


fromKeyboardKey : Scale -> KeyboardKey -> Result Error Note
fromKeyboardKey scale key =
    keyboardKeyToInt key |> Result.map (fromKeyClick scale)


adjustForScale : Scale -> Int
adjustForScale =
    Tuple.first >> Note.pitchClassToInt


keyboardKeyToInt : KeyboardKey -> Result Error Int
keyboardKeyToInt key =
    case key of
        CharacterKey "`" ->
            Ok 0

        CharacterKey "1" ->
            Ok 1

        CharacterKey "2" ->
            Ok 2

        CharacterKey "3" ->
            Ok 3

        CharacterKey "4" ->
            Ok 4

        CharacterKey "5" ->
            Ok 5

        CharacterKey "6" ->
            Ok 6

        CharacterKey "7" ->
            Ok 7

        CharacterKey "8" ->
            Ok 8

        CharacterKey "9" ->
            Ok 9

        CharacterKey "0" ->
            Ok 10

        CharacterKey "-" ->
            Ok 11

        CharacterKey "=" ->
            Ok 12

        CharacterKey "q" ->
            Ok 0

        CharacterKey "w" ->
            Ok 1

        CharacterKey "e" ->
            Ok 2

        CharacterKey "r" ->
            Ok 3

        CharacterKey "t" ->
            Ok 4

        CharacterKey "y" ->
            Ok 5

        CharacterKey "u" ->
            Ok 6

        CharacterKey "i" ->
            Ok 7

        CharacterKey "o" ->
            Ok 8

        CharacterKey "p" ->
            Ok 9

        CharacterKey "[" ->
            Ok 10

        CharacterKey "]" ->
            Ok 11

        CharacterKey "\\" ->
            Ok 12

        _ ->
            Err (UnassignedKey key)


toSolfege : Scale -> Note -> Solfege
toSolfege scale note =
    (Note.pitchClass note |> pitchClassToInt)
        - (pitchClass scale |> pitchClassToInt)
        |> Solfege.fromInt
