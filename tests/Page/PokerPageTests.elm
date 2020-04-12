module Page.PokerPageTests exposing (..)

import Dict
import Expect exposing (Expectation)
import Html exposing (..)
import Json.Decode as Decode exposing (map)
import Json.Encode as Encode exposing (Value)
import KeyboardKey exposing (..)
import List exposing (range)
import Main exposing (Model(..), Msg(..), init, loadUrlFromUrlRequest, update, view)
import Page.PokerPage as PokerPage exposing (..)
import ProgramTest exposing (ProgramTest, SimulatedSub, clickButton, ensureViewHas, expectViewHas, simulateDomEvent, start)
import SimulatedEffect.Ports
import SimulatedEffect.Sub
import String exposing (fromInt, toLower)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector
import Tuple exposing (first)
import Url exposing (Protocol(..), Url)


startProgramForTesting : String -> Flags -> ProgramTest Main.Model Main.Msg (Cmd Main.Msg)
startProgramForTesting initialUrl flags =
    ProgramTest.createApplication
        { init = Main.init
        , view = Main.view
        , update = Main.update
        , onUrlRequest = loadUrlFromUrlRequest
        , onUrlChange = ChangeUrl
        }
        |> ProgramTest.withBaseUrl initialUrl
        |> ProgramTest.withSimulatedSubscriptions simulateSubscriptions
        |> ProgramTest.start flags



--testPageHasTwelveKeys : Test
--testPageHasTwelveKeys =
--    test "pageHasTwelveKeys" <|
--        \() ->
--            startProgramForTesting "http://www.mypokerapp.com" ()
--                |> expectViewHas (range 0 11 |> List.map getKeySelector)
--testKeyClickDisplaysSolfege : Test
--testKeyClickDisplaysSolfege =
--    test "keyClickDisplaysSolfege" <|
--        \() ->
--            startProgramForTesting "http://www.mysolfegeapp.com" ()
--                |> mouseDown (Query.find [ Selector.id "key-11" ])
--                |> ensureViewHas [ Selector.id "key-11", Selector.text "Ti" ]
--                |> mouseUp (Query.find [ Selector.id "key-11" ])
--                |> ensureViewHas [ Selector.id "key-11", Selector.text "" ]
--                |> mouseDown (Query.find [ Selector.id "scale-note-6" ])
--                |> mouseUp (Query.find [ Selector.id "scale-note-6" ])
--                |> ensureViewHas [ Selector.id "scale-note-6", Selector.class "bg-white" ]
--                |> mouseDown (Query.find [ Selector.id "key-10" ])
--                |> ensureViewHas [ Selector.id "key-10", Selector.text "Te" ]
--                |> mouseUp (Query.find [ Selector.id "key-10" ])
--                |> expectViewHas [ Selector.id "key-10", Selector.text "" ]
-- Helper functions


stubInitModel : ( Main.Model, Cmd Main.Msg )
stubInitModel =
    Main.init () (Url Http "mystubbedtestpokerapp.com" Nothing "" Nothing Nothing) ()


stubPageModel : ( PokerPage.Model, Cmd PokerPage.Msg )
stubPageModel =
    PokerPage.init () (Url Http "mystubbedtestpokerapp.com" Nothing "" Nothing Nothing) ()


simulateSubscriptions : Main.Model -> SimulatedSub Main.Msg
simulateSubscriptions _ =
    SimulatedEffect.Sub.batch
        ([ SimulatedEffect.Ports.subscribe
            "keydown"
            keyDecoder
            KeyDownOn
         , SimulatedEffect.Ports.subscribe
            "keyup"
            keyDecoder
            KeyUpOn
         ]
            |> List.map (SimulatedEffect.Sub.map PokerMsg)
        )


mouseDown : (Query.Single msg -> Query.Single msg) -> ProgramTest model msg effect -> ProgramTest model msg effect
mouseDown query =
    simulateDomEvent query Event.mouseDown


mouseUp : (Query.Single msg -> Query.Single msg) -> ProgramTest model msg effect -> ProgramTest model msg effect
mouseUp query =
    simulateDomEvent query Event.mouseUp


keyboardKeyDown : KeyboardKey -> ProgramTest model msg effect -> ProgramTest model msg effect
keyboardKeyDown key =
    simulateDomEvent identity (Event.custom "keydown" (keyboardKeyObject key))


keyboardKeyUp : KeyboardKey -> ProgramTest model msg effect -> ProgramTest model msg effect
keyboardKeyUp key =
    simulateDomEvent identity (Event.custom "keyup" (keyboardKeyObject key))


keyboardKeyObject : KeyboardKey -> Value
keyboardKeyObject key =
    Encode.object
        [ ( "key", Encode.string (KeyboardKey.toString key) ) ]



--getKeySelector : Int -> Selector.Selector
--getKeySelector =
--    getIdSelector "key"
