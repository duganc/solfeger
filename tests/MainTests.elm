module MainTests exposing (..)

import Dict
import Expect exposing (Expectation)
import Html exposing (..)
import Json.Decode as Decode exposing (map)
import Json.Encode as Encode exposing (Value)
import KeyboardKey exposing (..)
import List exposing (range)
import Main exposing (Flags, Model, Msg(..), init, loadUrlFromUrlRequest, pressKeyOnModel, releaseKeyOnModel, renderKey, renderKeys, showText, subscriptions, update, view)
import Note exposing (..)
import ProgramTest exposing (ProgramTest, SimulatedSub, clickButton, ensureViewHas, expectViewHas, simulateDomEvent, start)
import Scale exposing (Scale, ScaleType(..), default, scaleTypeFromInt, scaleTypeToString)
import SimulatedEffect.Ports
import SimulatedEffect.Sub
import Solfege exposing (..)
import String exposing (fromInt, toLower)
import Test exposing (..)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector as Selector
import Tuple exposing (first)
import Url exposing (Protocol(..), Url)


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
        |> ProgramTest.withSimulatedSubscriptions simulateSubscriptions
        |> ProgramTest.start flags


testPageHasTwelveKeys : Test
testPageHasTwelveKeys =
    test "pageHasTwelveKeys" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> expectViewHas (range 0 11 |> List.map getKeySelector)


testPageHasScaleNoteSelector : Test
testPageHasScaleNoteSelector =
    test "pageHasScaleNoteSelector" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> expectViewHas (range 0 11 |> List.map getScaleNoteSelector)


testPageHasScaleTypeSelector : Test
testPageHasScaleTypeSelector =
    test "pageHasScaleTypeSelector" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> expectViewHas (range 0 6 |> List.map getScaleTypeSelector)


testKeyClickDisplaysSolfege : Test
testKeyClickDisplaysSolfege =
    test "keyClickDisplaysSolfege" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> mouseDown (Query.find [ Selector.id "key-11" ])
                |> ensureViewHas [ Selector.id "key-11", Selector.text "Ti" ]
                |> mouseUp (Query.find [ Selector.id "key-4" ])
                |> expectViewHas [ Selector.id "key-4", Selector.text "" ]


testKeyboardKeyPressDisplaysSolfege : Test
testKeyboardKeyPressDisplaysSolfege =
    test "keyboardKeyPressDisplaysSolfege" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> ProgramTest.simulateIncomingPort
                    "keydown"
                    (keyboardKeyObject (CharacterKey "5"))
                |> ensureViewHas [ Selector.id "key-5", Selector.text "Fa" ]
                |> ProgramTest.simulateIncomingPort
                    "keyup"
                    (keyboardKeyObject (CharacterKey "5"))
                |> ensureViewHas [ Selector.id "key-5", Selector.text "" ]
                |> ProgramTest.simulateIncomingPort
                    "keyup"
                    (keyboardKeyObject (CharacterKey "6"))
                |> expectViewHas [ Selector.id "key-6", Selector.text "" ]


testRenderKeysRendersTheCorrectNumberOfKeys : Test
testRenderKeysRendersTheCorrectNumberOfKeys =
    test "renderKeysRendersTheCorrectNumberOfKeys" <|
        \() ->
            renderKeys (Model Dict.empty Scale.default) 3
                |> Query.fromHtml
                |> Query.findAll [ Selector.class "key" ]
                |> Query.count (Expect.equal 3)


testPressKeyOnModel : Test
testPressKeyOnModel =
    test "pressesKeyOnModel" <|
        \() ->
            pressKeyOnModel (stubInitModel |> first) ( D, 4 )
                |> .isKeyPressed
                |> Dict.get 5
                |> Expect.equal (Just True)


testKeyRenders : Test
testKeyRenders =
    test "keyRenders" <|
        \() ->
            renderKey (Model Dict.empty Scale.default) 57
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


stubInitModel : ( Model, Cmd Msg )
stubInitModel =
    init () (Url Http "mystubbedtestsolfegeapp.com" Nothing "" Nothing Nothing) ()


simulateSubscriptions : Model -> SimulatedSub Msg
simulateSubscriptions _ =
    SimulatedEffect.Sub.batch
        [ SimulatedEffect.Ports.subscribe
            "keydown"
            keyDecoder
            KeyDownOn
        , SimulatedEffect.Ports.subscribe
            "keyup"
            keyDecoder
            KeyUpOn
        ]


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


getKeySelector : Int -> Selector.Selector
getKeySelector =
    getIdSelector "key"


getScaleTypeSelector : Int -> Selector.Selector
getScaleTypeSelector =
    getIdSelector "scale-type"


getScaleNoteSelector : Int -> Selector.Selector
getScaleNoteSelector =
    getIdSelector "scale-note"


getIdSelector : String -> Int -> Selector.Selector
getIdSelector s i =
    (s ++ "-" ++ String.fromInt i) |> Selector.id
