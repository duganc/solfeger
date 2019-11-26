module Note exposing (Note(..), fromInt, fromString, intToAbsoluteString, toAbsoluteString, toInt, toString)

import Solfege exposing (..)


type Note
    = A
    | ASharp
    | B
    | C
    | CSharp
    | D
    | DSharp
    | E
    | F
    | FSharp
    | G
    | GSharp


toString : Note -> String
toString note =
    case note of
        A ->
            "A"

        ASharp ->
            "A#"

        B ->
            "B"

        C ->
            "C"

        CSharp ->
            "C#"

        D ->
            "D"

        DSharp ->
            "D#"

        E ->
            "E"

        F ->
            "F"

        FSharp ->
            "F#"

        G ->
            "G"

        GSharp ->
            "G#"


intToAbsoluteString : Int -> String
intToAbsoluteString i =
    (modBy 12 i |> fromInt |> toString)
        ++ (i // 12 |> (+) (modBy 12 i |> fromInt |> toDefaultOctave) |> String.fromInt)


toAbsoluteString : Note -> String
toAbsoluteString note =
    toString note ++ (toDefaultOctave >> String.fromInt) note


toDefaultOctave : Note -> Int
toDefaultOctave note =
    if toInt note >= toInt C then
        4

    else
        3


fromString : String -> Result String Note
fromString s =
    case s of
        "Ab" ->
            Ok GSharp

        "A" ->
            Ok A

        "A#" ->
            Ok ASharp

        "Bb" ->
            Ok ASharp

        "B" ->
            Ok B

        "B#" ->
            Ok C

        "Cb" ->
            Ok B

        "C" ->
            Ok C

        "C#" ->
            Ok CSharp

        "Db" ->
            Ok CSharp

        "D" ->
            Ok D

        "D#" ->
            Ok DSharp

        "Eb" ->
            Ok DSharp

        "E" ->
            Ok E

        "E#" ->
            Ok F

        "Fb" ->
            Ok E

        "F" ->
            Ok F

        "F#" ->
            Ok FSharp

        "Gb" ->
            Ok FSharp

        "G" ->
            Ok G

        "G#" ->
            Ok GSharp

        _ ->
            Err s


toInt : Note -> Int
toInt n =
    case n of
        A ->
            0

        ASharp ->
            1

        B ->
            2

        C ->
            3

        CSharp ->
            4

        D ->
            5

        DSharp ->
            6

        E ->
            7

        F ->
            8

        FSharp ->
            9

        G ->
            10

        GSharp ->
            11


fromInt : Int -> Note
fromInt i =
    case modBy 12 i of
        0 ->
            A

        1 ->
            ASharp

        2 ->
            B

        3 ->
            C

        4 ->
            CSharp

        5 ->
            D

        6 ->
            DSharp

        7 ->
            E

        8 ->
            F

        9 ->
            FSharp

        10 ->
            G

        11 ->
            GSharp

        _ ->
            A
