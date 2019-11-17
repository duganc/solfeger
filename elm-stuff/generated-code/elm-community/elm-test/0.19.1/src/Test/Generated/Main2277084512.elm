module Test.Generated.Main2277084512 exposing (main)

import MainTests
import SolfegeTests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "MainTests" [MainTests.testShowTextShowsAlternateTextWhenFalse,
    MainTests.testPageHasTwelveKeys,
    MainTests.testKeyClickSendsKeyPressedMessage,
    MainTests.testRenderKeysRendersTheCorrectNumberOfKeys,
    MainTests.testShowTextShowsTextWhenTrue,
    MainTests.testKeyRenders],     Test.describe "SolfegeTests" [SolfegeTests.testSolfegeGetsNames] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 92110062106810, processes = 4, paths = ["/Users/christopherdugan/elm_projects/solfeger/tests/MainTests.elm","/Users/christopherdugan/elm_projects/solfeger/tests/SolfegeTests.elm"]}