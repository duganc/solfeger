module Page.AssymetricCryptographyPageTests exposing (..)

import Dict
import Expect exposing (Expectation)
import Html exposing (..)
import Json.Decode as Decode exposing (map)
import Json.Encode as Encode exposing (Value)
import List exposing (range)
import Main exposing (Model(..), Msg(..), init, loadUrlFromUrlRequest, update, view)
import Note exposing (..)
import Page.AssymetricCryptographyPage as CryptogrphyPage exposing (..)
import ProgramTest exposing (ProgramTest, SimulatedSub, clickButton, ensureViewHas, expectViewHas, simulateDomEvent, start)
import Scale exposing (Scale, ScaleType(..), default, scaleTypeFromInt, scaleTypeToString)
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
        |> ProgramTest.start flags


helloWorldTest : Test
helloWorldTest =
    test "helloWorld" <|
        \() ->
            startProgramForTesting "http://www.mysolfegeapp.com" ()
                |> expectViewHas [ Selector.id "key-10", Selector.text "" ]
