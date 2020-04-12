port module Page.PokerPage exposing (Action, Flags, Model, Msg(..), Player, TableAction, init, playTone, showText, subscriptions, update, view)

import Browser exposing (Document, UrlRequest(..), application)
import Browser.Events exposing (onKeyDown, onKeyUp)
import Browser.Navigation exposing (Key, load, pushUrl)
import Dict exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode exposing (Value)
import KeyboardKey exposing (..)
import List exposing (range)
import Platform.Sub exposing (batch)
import String exposing (fromInt)
import Url exposing (Protocol(..), Url, fromString, toString)


port playTone : String -> Cmd msg



-- MODEL


type alias Model =
    { holeCards : List Card
    , communityCards : List Card
    , pot : Int
    , players : List Player
    , availableActions : List Action
    , availableTableActions : List TableAction
    , isSatOut : Bool
    }


init : Flags -> Url -> key -> ( Model, Cmd Msg )
init _ _ _ =
    ( Model [] [] 0 [] [] [] False, Cmd.none )


type alias Flags =
    ()


type alias Player =
    { id : Int
    , handle : String
    , lastAction : Action
    , stack : Int
    , liveChips : Int
    , isSittingOut : Bool
    , totalWon : Int
    }


type Action
    = Fold
    | Check
    | Call
    | Bet Int
    | Raise Int


actionToString : Action -> String
actionToString action =
    case action of
        Fold ->
            "Fold"

        Check ->
            "Check"

        Call ->
            "Call"

        Bet i ->
            "Bet " ++ String.fromInt i

        Raise i ->
            "Raise " ++ String.fromInt i


type TableAction
    = SitOut
    | SitIn
    | AddChips
    | Leave


tableActionToString : TableAction -> String
tableActionToString action =
    case action of
        SitOut ->
            "Sit Out"

        SitIn ->
            "Sit In"

        AddChips ->
            "Add Chips"

        Leave ->
            "Leave"


type alias Card =
    { rank : Rank
    , suit : Suit
    }


type Rank
    = Ace
    | Two
    | Three
    | Four
    | Five
    | Six
    | Seven
    | Eight
    | Nine
    | Ten
    | Jack
    | Queen
    | King


type Suit
    = Spade
    | Heart
    | Club
    | Diamond



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        MouseDownOn b ->
            case b of
                TableActionSelector a ->
                    ( model, Cmd.none )

                ActionSelector a ->
                    ( model, Cmd.none )

        MouseUpOn b ->
            case b of
                TableActionSelector a ->
                    ( model, Cmd.none )

                ActionSelector a ->
                    ( model, Cmd.none )

        KeyDownOn keyboardKey ->
            case keyboardKey of
                CharacterKey _ ->
                    ( model, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        KeyUpOn keyboardKey ->
            case keyboardKey of
                CharacterKey _ ->
                    ( model, Cmd.none )

                _ ->
                    ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : model -> Sub Msg
subscriptions model =
    batch
        [ Browser.Events.onKeyDown keyDownDecoder
        , Browser.Events.onKeyUp keyUpDecoder
        ]


keyDownDecoder : Decode.Decoder Msg
keyDownDecoder =
    Decode.map KeyDownOn keyDecoder


keyUpDecoder : Decode.Decoder Msg
keyUpDecoder =
    Decode.map KeyUpOn keyDecoder



-- VIEW


type Msg
    = MouseDownOn Button
    | MouseUpOn Button
    | KeyDownOn KeyboardKey
    | KeyUpOn KeyboardKey


type Button
    = ActionSelector Action
    | TableActionSelector Action


view : Model -> List (Html Msg)
view model =
    [ div [ class "history" ] [ renderHistory model.players ]
    , div [ class "table-actions" ] [ renderTableActions model.availableTableActions ]
    , div [ class "table" ] [ renderSeats model ]
    , div [ class "actions" ] [ renderActions model.availableActions ]
    ]


viewTooltip : Html Msg
viewTooltip =
    div
        [ class "tooltip", class "float-right", class "information-icon" ]
        [ text "?"
        , span [ class "tooltip-text" ]
            [ text "Stub tooltip!"
            ]
        ]


renderHistory : List Player -> Html Msg
renderHistory players =
    players |> List.map renderHistoryEntry |> div []


renderHistoryEntry : Player -> Html Msg
renderHistoryEntry player =
    div
        [ class "history-entry" ]
        [ text (player.handle ++ ": " ++ String.fromInt player.totalWon) ]


renderTableActions : List TableAction -> Html Msg
renderTableActions actions =
    actions |> List.map renderTableAction |> div []


renderTableAction : TableAction -> Html Msg
renderTableAction action =
    div
        [ class "table-action" ]
        [ text (tableActionToString action) ]


renderSeats : Model -> Html Msg
renderSeats model =
    model.players |> List.map renderSeat |> div []


renderSeat : Player -> Html Msg
renderSeat player =
    div
        [ class "seat" ]
        [ text ("Seat: " ++ player.handle) ]


renderActions : List Action -> Html Msg
renderActions actions =
    actions |> List.map renderAction |> div []


renderAction : Action -> Html Msg
renderAction action =
    div
        [ class "action" ]
        [ text (actionToString action) ]


showTextOrNothing : String -> Bool -> String
showTextOrNothing ifTrue switch =
    showText ifTrue "" switch


showText : String -> String -> Bool -> String
showText ifTrue ifFalse switch =
    case switch of
        True ->
            ifTrue

        False ->
            ifFalse
