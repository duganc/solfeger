module Test.Generated.Main690232937 exposing (main)

import MainTests
import SolfegeTests
import KeyboardKeyTests
import ScaleTests
import NoteTests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "MainTests" [MainTests.testShowTextShowsAlternateTextWhenFalse,
    MainTests.testKeyClickDisplaysSolfege,
    MainTests.testPageHasScaleNoteSelector,
    MainTests.testPageHasTwelveKeys,
    MainTests.testRenderKeysRendersTheCorrectNumberOfKeys,
    MainTests.testKeyboardKeyPressDisplaysSolfege,
    MainTests.testShowTextShowsTextWhenTrue,
    MainTests.testPageHasScaleTypeSelector,
    MainTests.testKeyRenders,
    MainTests.testPressKeyOnModel],     Test.describe "SolfegeTests" [SolfegeTests.testSolfegeGets,
    SolfegeTests.testSolfegeGetsNames],     Test.describe "KeyboardKeyTests" [KeyboardKeyTests.stub],     Test.describe "ScaleTests" [ScaleTests.testGetsSolfegeFromNoteAndScale,
    ScaleTests.testGetsAbsoluteStringFromHighDo,
    ScaleTests.testGetsAbsoluteStringReturnsErrorForNonKey,
    ScaleTests.testScaleGetsCorrectNotes,
    ScaleTests.testGetsSolfegeAgreesWithFromInt,
    ScaleTests.testGetsAbsoluteStringFromValidKeyboardKey,
    ScaleTests.testKeyClickHandlesHighDo],     Test.describe "NoteTests" [NoteTests.testIntToString,
    NoteTests.testToIntHandlesOctaves,
    NoteTests.testToIntAndFromIntAreInverses] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 176179238750059, processes = 4, paths = ["/Users/christopherdugan/elm_projects/solfeger/tests/KeyboardKeyTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/MainTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/NoteTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/ScaleTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/SolfegeTests.elm"]}