module Test.Generated.Main582126265 exposing (main)

import PageTests
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
    [     Test.describe "PageTests" [PageTests.testShowTextShowsAlternateTextWhenFalse,
    PageTests.testKeyClickDisplaysSolfege,
    PageTests.testPageHasScaleNoteSelector,
    PageTests.testPageHasTwelveKeys,
    PageTests.testRenderKeysRendersTheCorrectNumberOfKeys,
    PageTests.testKeyboardKeyPressDisplaysSolfege,
    PageTests.testShowTextShowsTextWhenTrue,
    PageTests.testPageHasScaleTypeSelector,
    PageTests.testKeyRenders,
    PageTests.testPressKeyOnModel],     Test.describe "SolfegeTests" [SolfegeTests.testSolfegeGets,
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
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 58441826303563, processes = 4, paths = ["/Users/christopherdugan/elm_projects/solfeger/tests/KeyboardKeyTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/NoteTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/PageTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/ScaleTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/SolfegeTests.elm"]}