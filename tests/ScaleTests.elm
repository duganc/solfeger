module ScaleTests exposing (..)

import Expect exposing (..)
import Html exposing (..)
import Note exposing (..)
import Scale exposing (..)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector


testScaleGetsCorrectNotes : Test
testScaleGetsCorrectNotes =
    describe "Scales get correct notes"
        [ test "cChromaticScaleHasTheRightNotes" <|
            \() -> Scale.notes ( C, Chromatic ) |> Expect.equal (List.range 3 15)
        , test "eMinorScaleHasTheRightNotes" <|
            \() -> Scale.notes ( E, Minor ) |> Expect.equal [ 7, 9, 10, 12, 14, 15, 17 ]
        , test "gSharpMajorScaleHasTheRightNotes" <|
            \() -> Scale.notes ( GSharp, Major ) |> Expect.equal [ 11, 13, 15, 16, 18, 20, 22 ]
        , test "bDorianHasARaisedSixth" <|
            -- Major 6 == 9, B == 2 => 11
            \() -> Scale.notes ( B, Dorian ) |> List.take 6 |> List.reverse |> List.head |> Expect.equal (Just 11)
        , test "ePhrygianHasAFlatTwo" <|
            -- Minor 2 == 1, E == 7 => 8
            \() -> Scale.notes ( E, Phrygian ) |> List.take 2 |> List.reverse |> List.head |> Expect.equal (Just 8)
        , test "cSharpLydianHasARaisedFourth" <|
            -- Augmented 4th == 6, CSharp == 4 => 10
            \() -> Scale.notes ( CSharp, Lydian ) |> List.take 4 |> List.reverse |> List.head |> Expect.equal (Just 10)
        , test "DMixolydianHasAFlatSeven" <|
            -- Minor 7th == 10, CSharp == 5 => 15
            \() -> Scale.notes ( D, Mixolydian ) |> List.take 7 |> List.reverse |> List.head |> Expect.equal (Just 15)
        ]
