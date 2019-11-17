module MainTests exposing (..)

import Expect exposing (Expectation)
import Html exposing (..)
import List exposing (range)
import Main exposing (Flags, Model, Msg(..), init, loadUrlFromUrlRequest, renderKey, renderKeys, subscriptions, update, view)
import ProgramTest exposing (ProgramTest, clickButton, expectViewHas, simulateDomEvent, start)
import String exposing (fromInt)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector


startProgramForTesting : String -> Flags -> ProgramTest Model Msg (Cmd Msg)
startProgramForTesting initialUrl flags =
    ProgramTest.createApplication
        { init = init
        , view = view
        , update = update
        , onUrlRequest = loadUrlFromUrlRequest
        , onUrlChange = ChangeUrl
        }
        |> ProgramTest.withBaseUrl initialUrl
        |> ProgramTest.start flags


testPageHasTwelveKeys : Test
testPageHasTwelveKeys =
    test "pageHasTwelveKeys" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> expectViewHas (range 0 11 |> List.map getKeySelector)


testKeyClickSendsKeyPressedMessage : Test
testKeyClickSendsKeyPressedMessage =
    test "keyClickSendsKeyPressedMessage" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> mouseDown (Query.find [ Selector.id "key-11" ])
                |> expectViewHas [ Selector.id "key-11", Selector.text "Ti" ]


testRenderKeysRendersTheCorrectNumberOfKeys =
    test "renderKeysRendersTheCorrectNumberOfKeys" <|
        \() ->
            renderKeys 3
                |> Query.fromHtml
                |> Query.findAll [ Selector.class "key" ]
                |> Query.count (Expect.equal 3)


testKeyRenders : Test
testKeyRenders =
    test "keyRenders" <|
        \() ->
            renderKey 57
                |> Query.fromHtml
                |> Query.has [ Selector.id "key-57" ]



-- Helper functions


mouseDown : (Query.Single msg -> Query.Single msg) -> ProgramTest model msg effect -> ProgramTest model msg effect
mouseDown query =
    simulateDomEvent query Event.mouseDown


getKeySelector : Int -> Selector.Selector
getKeySelector i =
    Selector.id ("key-" ++ fromInt i)
