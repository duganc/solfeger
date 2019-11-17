module Test.Generated.Main1822631538 exposing (main)

import MainTests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "MainTests" [MainTests.testPageHasTwelveKeys,
    MainTests.testRenderKeysRendersTheCorrectNumberOfKeys,
    MainTests.testKeyRenders] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 272928049895009, processes = 4, paths = ["/Users/christopherdugan/elm_projects/solfeger/tests/MainTests.elm"]}