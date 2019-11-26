module NoteTests exposing (..)

import Expect exposing (Expectation)
import Html exposing (..)
import Note exposing (..)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector


testIntToString : Test
testIntToString =
    test "testPitchClassFromIntAndFromIntAgree" <|
        \() ->
            List.range 0 11
                |> List.map Note.fromInt
                |> Expect.equal (List.range 0 11 |> List.map (Note.pitchClassFromInt >> Note.fromPitchClass))


testToIntHandlesOctaves : Test
testToIntHandlesOctaves =
    test "testToIntHandlesOctaves" <|
        \() ->
            [ ( A, 3 ), ( C, 4 ) ]
                |> List.map Note.toInt
                |> Expect.equal [ 0, 3 ]


testToIntAndFromIntAreInverses : Test
testToIntAndFromIntAreInverses =
    test "toIntAndFromIntAreInverses" <|
        \() ->
            List.range 0 30
                |> List.map Note.fromInt
                |> List.map Note.toInt
                |> Expect.equal (List.range 0 30)
