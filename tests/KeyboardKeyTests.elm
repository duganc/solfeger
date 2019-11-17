module KeyboardKeyTests exposing (..)

import Expect exposing (Expectation)
import Html exposing (..)
import KeyboardKey exposing (..)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector


stub : Test
stub =
    test "Stub test" <| \() -> (2 + 2) |> Expect.equal 4
