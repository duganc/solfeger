module Test.Generated.Main3895975167 exposing (main)

import KeyboardKeyTests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "KeyboardKeyTests" [KeyboardKeyTests.stub] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 20547922143599, processes = 4, paths = ["/Users/christopherdugan/elm_projects/poker-app/tests/KeyboardKeyTests.elm","/Users/christopherdugan/elm_projects/poker-app/tests/Page/PokerPageTests.elm"]}