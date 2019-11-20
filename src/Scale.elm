module Scale exposing (Scale, ScaleType(..), scaleTypeFromInt, scaleTypeToString)

import Note exposing (Note(..))


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


scaleTypeFromInt : Int -> Result String ScaleType
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
            Err "Invalid integer representation of ScaleType"


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
