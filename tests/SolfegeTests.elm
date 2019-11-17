module SolfegeTests exposing (..)

import Expect exposing (Expectation)
import Html exposing (..)
import List exposing (range)
import Solfege exposing (..)
import String exposing (fromInt)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector


testSolfegeGets : Test
testSolfegeGets =
    test "getsSolfege" <|
        \() ->
            range 0 15
                |> List.map getSolfege
                |> Expect.equal [ Do, Di, Re, Me, Mi, Fa, Fi, Sol, Le, La, Te, Ti, Do, Di, Re, Me ]


testSolfegeGetsNames : Test
testSolfegeGetsNames =
    test "solfegeGetsNames" <|
        \() ->
            range 0 15
                |> List.map (getSolfege >> getSolfegeName)
                |> Expect.equal [ "Do", "Di", "Re", "Me", "Mi", "Fa", "Fi", "Sol", "Le", "La", "Te", "Ti", "Do", "Di", "Re", "Me" ]
