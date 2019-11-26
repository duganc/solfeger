module Solfege exposing (Solfege(..), fromInt, toInt, toString)


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


toInt : Solfege -> Int
toInt s =
    case s of
        Do ->
            0

        Di ->
            1

        Re ->
            2

        Me ->
            3

        Mi ->
            4

        Fa ->
            5

        Fi ->
            6

        Sol ->
            7

        Le ->
            8

        La ->
            9

        Te ->
            10

        Ti ->
            11


fromInt : Int -> Solfege
fromInt i =
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


toString : Solfege -> String
toString s =
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
