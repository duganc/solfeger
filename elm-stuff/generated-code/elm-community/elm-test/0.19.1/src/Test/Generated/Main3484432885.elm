module Test.Generated.Main3484432885 exposing (main)

import MainTests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "MainTests" [MainTests.testPageHasTwelveKeys,
    MainTests.testKeyClickSendsKeyPressedMessage,
    MainTests.testRenderKeysRendersTheCorrectNumberOfKeys,
    MainTests.testKeyRenders] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 366286193350994, processes = 4, paths = ["/Users/christopherdugan/elm_projects/solfeger/tests/MainTests.elm"]}