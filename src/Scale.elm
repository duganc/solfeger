module Scale exposing (Scale, ScaleType(..), default, notes, scaleTypeFromInt, scaleTypeToString)

import Note exposing (Note(..), toInt)


type alias Scale =
    ( Note, ScaleType )


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


default : Scale
default =
    ( A, Chromatic )


notes : Scale -> List Int
notes ( note, scale ) =
    List.map ((+) (Note.toInt note))
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
            Ok Locrian

        2 ->
            Ok Major

        3 ->
            Ok Dorian

        4 ->
            Ok Phrygian

        5 ->
            Ok Lydian

        6 ->
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
