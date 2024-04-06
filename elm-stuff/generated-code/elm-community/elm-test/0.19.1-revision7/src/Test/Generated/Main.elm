module Test.Generated.Main exposing (main)

import KeyboardKeyTests
import NoteTests
import Page.SolfegePageTests
import ScaleTests
import SolfegeTests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    Test.Runner.Node.run
        { runs = 100
        , report = ConsoleReport UseColor
        , seed = 8185938298568
        , processes = 12
        , globs =
            []
        , paths =
            [ "C:\\Users\\cmsdu\\repos\\solfeger\\tests\\KeyboardKeyTests.elm"
            , "C:\\Users\\cmsdu\\repos\\solfeger\\tests\\NoteTests.elm"
            , "C:\\Users\\cmsdu\\repos\\solfeger\\tests\\Page\\SolfegePageTests.elm"
            , "C:\\Users\\cmsdu\\repos\\solfeger\\tests\\ScaleTests.elm"
            , "C:\\Users\\cmsdu\\repos\\solfeger\\tests\\SolfegeTests.elm"
            ]
        }
        [ ( "KeyboardKeyTests"
          , [ Test.Runner.Node.check KeyboardKeyTests.stub
            ]
          )
        , ( "NoteTests"
          , [ Test.Runner.Node.check NoteTests.testIntToString
            , Test.Runner.Node.check NoteTests.testToIntHandlesOctaves
            , Test.Runner.Node.check NoteTests.testToIntAndFromIntAreInverses
            ]
          )
        , ( "Page.SolfegePageTests"
          , [ Test.Runner.Node.check Page.SolfegePageTests.testPageHasTwelveKeys
            , Test.Runner.Node.check Page.SolfegePageTests.testPageHasScaleNoteSelector
            , Test.Runner.Node.check Page.SolfegePageTests.testPageHasScaleTypeSelector
            , Test.Runner.Node.check Page.SolfegePageTests.testKeyClickDisplaysSolfege
            , Test.Runner.Node.check Page.SolfegePageTests.testKeyboardKeyPressDisplaysSolfege
            , Test.Runner.Node.check Page.SolfegePageTests.testRenderKeysRendersTheCorrectNumberOfKeys
            , Test.Runner.Node.check Page.SolfegePageTests.testPressKeyOnModel
            , Test.Runner.Node.check Page.SolfegePageTests.testKeyRenders
            , Test.Runner.Node.check Page.SolfegePageTests.testShowTextShowsTextWhenTrue
            , Test.Runner.Node.check Page.SolfegePageTests.testShowTextShowsAlternateTextWhenFalse
            , Test.Runner.Node.check Page.SolfegePageTests.stubInitModel
            , Test.Runner.Node.check Page.SolfegePageTests.stubPageModel
            , Test.Runner.Node.check Page.SolfegePageTests.getKeySelector
            , Test.Runner.Node.check Page.SolfegePageTests.getScaleTypeSelector
            , Test.Runner.Node.check Page.SolfegePageTests.getScaleNoteSelector
            ]
          )
        , ( "ScaleTests"
          , [ Test.Runner.Node.check ScaleTests.testScaleGetsCorrectNotes
            , Test.Runner.Node.check ScaleTests.testKeyClickHandlesHighDo
            , Test.Runner.Node.check ScaleTests.testGetsAbsoluteStringFromValidKeyboardKey
            , Test.Runner.Node.check ScaleTests.testGetsAbsoluteStringFromHighDo
            , Test.Runner.Node.check ScaleTests.testGetsAbsoluteStringReturnsErrorForNonKey
            , Test.Runner.Node.check ScaleTests.testGetsSolfegeFromNoteAndScale
            , Test.Runner.Node.check ScaleTests.testGetsSolfegeAgreesWithFromInt
            ]
          )
        , ( "SolfegeTests"
          , [ Test.Runner.Node.check SolfegeTests.testSolfegeGets
            , Test.Runner.Node.check SolfegeTests.testSolfegeGetsNames
            ]
          )
        ]