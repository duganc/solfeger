module MainTests exposing (..)

import Dict
import Expect exposing (Expectation)
import Html exposing (..)
import Json.Decode as Decode exposing (map)
import Json.Encode as Encode exposing (Value)
import KeyboardKey exposing (..)
import List exposing (range)
import Main exposing (Flags, Model, Msg(..), init, loadUrlFromUrlRequest, pressKeyOnModel, releaseKeyOnModel, renderKey, renderKeys, showText, subscriptions, update, view)
import ProgramTest exposing (ProgramTest, clickButton, ensureViewHas, expectViewHas, simulateDomEvent, start)
import Solfege exposing (..)
import String exposing (fromInt)
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
        |> ProgramTest.start flags


testPageHasTwelveKeys : Test
testPageHasTwelveKeys =
    test "pageHasTwelveKeys" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> expectViewHas (range 0 11 |> List.map getKeySelector)


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
                |> keyboardKeyDown (CharacterKey "5")
                |> ensureViewHas [ Selector.id "key-5", Selector.text "Fa" ]
                |> keyboardKeyUp (CharacterKey "5")
                |> expectViewHas [ Selector.id "key-5", Selector.text "" ]


testRenderKeysRendersTheCorrectNumberOfKeys =
    test "renderKeysRendersTheCorrectNumberOfKeys" <|
        \() ->
            renderKeys (Model Dict.empty) 3
                |> Query.fromHtml
                |> Query.findAll [ Selector.class "key" ]
                |> Query.count (Expect.equal 3)


testPressKeyOnModel =
    test "pressesKeyOnModel" <|
        \() ->
            pressKeyOnModel (stubInitModel |> first) Fa
                |> .isKeyPressed
                |> Dict.get 5
                |> Expect.equal (Just True)


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


stubInitModel : ( Model, Cmd Msg )
stubInitModel =
    init () (Url Http "mystubbedtestsolfegeapp.com" Nothing "" Nothing Nothing) ()


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
getKeySelector i =
    Selector.id ("key-" ++ String.fromInt i)
