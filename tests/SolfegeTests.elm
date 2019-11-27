module SolfegeTests exposing (..)

import Expect exposing (Expectation)
import Html exposing (..)
import KeyboardKey exposing (..)
import List exposing (range)
import Note exposing (..)
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
                |> List.map Solfege.fromInt
                |> Expect.equal [ Do, Di, Re, Me, Mi, Fa, Fi, Sol, Le, La, Te, Ti, Do, Di, Re, Me ]


testSolfegeGetsNames : Test
testSolfegeGetsNames =
    test "solfegeGetsNames" <|
        \() ->
            range 0 15
                |> List.map (Solfege.fromInt >> Solfege.toString)
                |> Expect.equal [ "Do", "Di", "Re", "Me", "Mi", "Fa", "Fi", "Sol", "Le", "La", "Te", "Ti", "Do", "Di", "Re", "Me" ]
