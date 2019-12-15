module Test.Generated.Main3483709984 exposing (main)

import Page.SolfegePageTests
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
    [     Test.describe "Page.SolfegePageTests" [Page.SolfegePageTests.testShowTextShowsAlternateTextWhenFalse,
    Page.SolfegePageTests.testKeyClickDisplaysSolfege,
    Page.SolfegePageTests.testPageHasScaleNoteSelector,
    Page.SolfegePageTests.testPageHasTwelveKeys,
    Page.SolfegePageTests.testRenderKeysRendersTheCorrectNumberOfKeys,
    Page.SolfegePageTests.testKeyboardKeyPressDisplaysSolfege,
    Page.SolfegePageTests.testShowTextShowsTextWhenTrue,
    Page.SolfegePageTests.testPageHasScaleTypeSelector,
    Page.SolfegePageTests.testKeyRenders,
    Page.SolfegePageTests.testPressKeyOnModel],     Test.describe "SolfegeTests" [SolfegeTests.testSolfegeGets,
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
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 43473768004653, processes = 4, paths = ["/Users/christopherdugan/elm_projects/solfeger/tests/KeyboardKeyTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/NoteTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/Page/SolfegePageTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/ScaleTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/SolfegeTests.elm"]}