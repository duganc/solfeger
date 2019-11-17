module Solfege exposing (Solfege(..), getSolfege, getSolfegeName)


type Solfege
    = Do
    | Di
    | Re
    | Me
    | Mi
    | Fa
    | Fi
    | Sol
    | Le
    | La
    | Te
    | Ti


getSolfege : Int -> Solfege
getSolfege i =
    case modBy 12 i of
        0 ->
            Do

        1 ->
            Di

        2 ->
            Re

        3 ->
            Me

        4 ->
            Mi

        5 ->
            Fa

        6 ->
            Fi

        7 ->
            Sol

        8 ->
            Le

        9 ->
            La

        10 ->
            Te

        11 ->
            Ti

        _ ->
            Do


getSolfegeName : Solfege -> String
getSolfegeName s =
    case s of
        Do ->
            "Do"

        Di ->
            "Di"

        Re ->
            "Re"

        Me ->
            "Me"

        Mi ->
            "Mi"

        Fa ->
            "Fa"

        Fi ->
            "Fi"

        Sol ->
            "Sol"

        Le ->
            "Le"

        La ->
            "La"

        Te ->
            "Te"

        Ti ->
            "Ti"



-- Should be unreachable
