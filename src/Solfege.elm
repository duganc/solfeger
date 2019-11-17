module Solfege exposing (Solfege(..), getSolfegeName)


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


getSolfegeName : Int -> Solfege
getSolfegeName i =
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



-- Should be unreachable
