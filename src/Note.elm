module Note exposing (Note(..), fromInt, fromString, toString)


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
            "A3"

        ASharp ->
            "A#3"

        B ->
            "B3"

        C ->
            "C4"

        CSharp ->
            "C#4"

        D ->
            "D4"

        DSharp ->
            "D#4"

        E ->
            "E4"

        F ->
            "F4"

        FSharp ->
            "F#4"

        G ->
            "G4"

        GSharp ->
            "G#4"


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


fromInt : Int -> Result String Note
fromInt i =
    case i of
        0 ->
            Ok A

        1 ->
            Ok ASharp

        2 ->
            Ok B

        3 ->
            Ok C

        4 ->
            Ok CSharp

        5 ->
            Ok D

        6 ->
            Ok DSharp

        7 ->
            Ok E

        8 ->
            Ok F

        9 ->
            Ok FSharp

        10 ->
            Ok G

        11 ->
            Ok GSharp

        _ ->
            Err (String.fromInt i)
