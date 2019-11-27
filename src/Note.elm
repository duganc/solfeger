module Note exposing (Error(..), Note, Octave, PitchClass(..), fromInt, fromPitchClass, octave, pitchClass, pitchClassFromInt, pitchClassFromString, pitchClassToInt, pitchClassToString, toInt, toString)

import Solfege exposing (..)
import Tuple exposing (..)


type alias Note =
    ( PitchClass, Octave )


type PitchClass
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


type alias Octave =
    Int


type Error
    = InvalidNote String


pitchClass : Note -> PitchClass
pitchClass =
    Tuple.first


octave : Note -> Octave
octave =
    Tuple.second


toString : Note -> String
toString note =
    (Tuple.first note |> pitchClassToString) ++ (Tuple.second note |> String.fromInt)


toInt : Note -> Int
toInt note =
    (pitchClass note |> pitchClassToInt) + ((octave note - defaultOctave (pitchClass note)) * 12)


pitchClassToString : PitchClass -> String
pitchClassToString pc =
    case pc of
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


fromInt : Int -> Note
fromInt i =
    ( pitchClassFromInt i, octaveFromInt i )


octaveFromInt : Int -> Octave
octaveFromInt i =
    i // 12 |> (+) (modBy 12 i |> pitchClassFromInt |> defaultOctave)


fromPitchClass : PitchClass -> Note
fromPitchClass pc =
    ( pc, defaultOctave pc )


defaultOctave : PitchClass -> Octave
defaultOctave pc =
    if pitchClassToInt pc >= pitchClassToInt C then
        4

    else
        3


pitchClassFromString : String -> Result Error PitchClass
pitchClassFromString s =
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
            Err (InvalidNote s)


pitchClassToInt : PitchClass -> Int
pitchClassToInt n =
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


pitchClassFromInt : Int -> PitchClass
pitchClassFromInt i =
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
