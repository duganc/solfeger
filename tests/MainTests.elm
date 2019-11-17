module MainTests exposing (..)

import Dict
import Expect exposing (Expectation)
import Html exposing (..)
import List exposing (range)
import Main exposing (Flags, Model, Msg(..), init, loadUrlFromUrlRequest, renderKey, renderKeys, showText, subscriptions, update, view)
import ProgramTest exposing (ProgramTest, clickButton, expectViewHas, simulateDomEvent, start)
import Solfege exposing (..)
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


testKeyClickAndReleaseResultsInNoText : Test
testKeyClickAndReleaseResultsInNoText =
    test "keyClickAndReleaseResultsInNoText" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> mouseDown (Query.find [ Selector.id "key-4" ])
                |> mouseUp (Query.find [ Selector.id "key-4" ])
                |> expectViewHas [ Selector.id "key-4", Selector.text "" ]


testRenderKeysRendersTheCorrectNumberOfKeys =
    test "renderKeysRendersTheCorrectNumberOfKeys" <|
        \() ->
            renderKeys (Model Dict.empty) 3
                |> Query.fromHtml
                |> Query.findAll [ Selector.class "key" ]
                |> Query.count (Expect.equal 3)


testKeyRenders : Test
testKeyRenders =
    test "keyRenders" <|
        \() ->
            renderKey (Model Dict.empty) 57
                |> Query.fromHtml
                |> Query.has [ Selector.id "key-57" ]


testShowTextShowsTextWhenTrue : Test
testShowTextShowsTextWhenTrue =
    test "showTextShowsTextWhenTrue" <|
        \() ->
            showText "Here's some text" "Alternative text" True
                |> Expect.equal "Here's some text"


testShowTextShowsAlternateTextWhenFalse : Test
testShowTextShowsAlternateTextWhenFalse =
    test "showTextShowsAlternateTextWhenFalse" <|
        \() ->
            showText "Here's some text" "Alternative text" False
                |> Expect.equal "Alternative text"



-- Helper functions


mouseDown : (Query.Single msg -> Query.Single msg) -> ProgramTest model msg effect -> ProgramTest model msg effect
mouseDown query =
    simulateDomEvent query Event.mouseDown


mouseUp : (Query.Single msg -> Query.Single msg) -> ProgramTest model msg effect -> ProgramTest model msg effect
mouseUp query =
    simulateDomEvent query Event.mouseUp


getKeySelector : Int -> Selector.Selector
getKeySelector i =
    Selector.id ("key-" ++ fromInt i)
