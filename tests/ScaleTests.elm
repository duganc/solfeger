module ScaleTests exposing (..)

import Expect exposing (..)
import Html exposing (..)
import KeyboardKey exposing (..)
import Note exposing (..)
import Scale exposing (..)
import Solfege exposing (..)
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


testKeyClickHandlesHighDo : Test
testKeyClickHandlesHighDo =
    test "keyClickHandlesHighDo" <|
        \() ->
            12
                |> fromKeyClick ( A, Chromatic )
                |> Expect.equal ( A, 4 )


testGetsAbsoluteStringFromValidKeyboardKey : Test
testGetsAbsoluteStringFromValidKeyboardKey =
    test "getsAbsoluteStringFromValidKeyboardKey" <|
        \() ->
            CharacterKey "7"
                |> fromKeyboardKey ( C, Phrygian )
                |> Expect.equal (Ok ( G, 4 ))


testGetsAbsoluteStringFromHighDo : Test
testGetsAbsoluteStringFromHighDo =
    test "getsAbsoluteStringFromHighDo" <|
        \() ->
            CharacterKey "="
                |> fromKeyboardKey ( CSharp, Minor )
                |> Expect.equal (Ok ( CSharp, 5 ))


testGetsAbsoluteStringReturnsErrorForNonKey : Test
testGetsAbsoluteStringReturnsErrorForNonKey =
    test "getSolfegeReturnsErrorForNonKey" <|
        \() ->
            CharacterKey "d"
                |> fromKeyboardKey ( A, Chromatic )
                |> Expect.equal (Err (Scale.UnassignedKey (CharacterKey "d")))


testGetsSolfegeFromNoteAndScale : Test
testGetsSolfegeFromNoteAndScale =
    test "getsSolfegeFromNoteAndScale" <|
        \() ->
            Scale.toSolfege ( D, Minor ) ( DSharp, 4 )
                |> Expect.equal Di


testGetsSolfegeAgreesWithFromInt : Test
testGetsSolfegeAgreesWithFromInt =
    test "getsSolfegeAgreesWithFromInt" <|
        \() ->
            List.range 0 12
                |> List.map Note.fromInt
                |> List.map (Scale.toSolfege ( A, Chromatic ))
                |> Expect.equal (List.range 0 12 |> List.map Solfege.fromInt)
