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
    test "testIntToStringIsSameAsToAbsoluteString" <|
        \() ->
            List.range 0 11
                |> List.map Note.intToAbsoluteString
                |> Expect.equal (List.range 0 11 |> List.map (Note.fromInt >> Note.toAbsoluteString))
