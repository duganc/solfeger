module MainTests exposing (..)

import Expect exposing (Expectation)
import Html exposing (..)
import Main exposing (Flags, Model, Msg, init, loadUrl, loadUrlFromUrlRequest, subscriptions, update, view)
import ProgramTest exposing (ProgramTest, clickButton, expectViewHas, start)
import Test exposing (..)
import Test.Html.Selector


startProgramForTesting : String -> Flags -> ProgramTest Model (Cmd msg) (Cmd (Cmd msg))
startProgramForTesting initialUrl flags =
    ProgramTest.createApplication
        { init = init
        , view = view
        , update = update
        , onUrlRequest = loadUrlFromUrlRequest
        , onUrlChange = loadUrl
        }
        |> ProgramTest.withBaseUrl initialUrl
        |> ProgramTest.start flags


suite : Test
suite =
    test "initsToHelloWorld" <|
        \() ->
            startProgramForTesting "http://www.google.com" ()
                |> expectViewHas [ Test.Html.Selector.text "Hello World!" ]
