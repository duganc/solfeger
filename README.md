# Poker App

A simple, *completely unsecured* poker client for use with trusted friends for home games.

## Installation

At the moment, this isn't being served anywhere so the best option is to clone the repo and run a local web server.  This can be done using the following steps:

1. Clone the repository using the `Clone or Download` button in Github or the command line
1. Navigate to the repository's root directory in the terminal.
1. Run python's simple `http.server` using `python3 -m http.server`.  If it doesn't run, you may need to [install it first](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server).
1. Navigate to the appropriate port on `localhost` (`8000` by default) in your browser.  e.g. `localhost:8000`.
1. The page should load and you should see a login page.

## API

* `/sit`
	* `POST`
	* Request: handle
	* Response: id, token, seat
* `/state`
	* `GET`
	* Request: id
	* Response: state (available to id)
* `/chips/add`
	* `POST`
	* Request: id, amount
	* Response: amount_added
* `/history`
	* `GET`
* `/history/reset`
	* `POST`
* `/sitout`
	* `POST`
	* Request: id
* `/sitin`
	* `POST`
	* Request: id
* `/fold`
	* `POST`
	* Request: id
* `/check`
	* `POST`
	* Request: id
* `/call`
	* `POST`
	* Request: id
* `/bet`
	* `POST`
	* Request: id, amount
* `/raise`
	* `POST`
	* Request: id, amount


## State

* Hole Cards
* Community Cards
* Pot
* Players
	* Stack
	* Live money
	* Last action
	* Is Sitting Out
* Available Actions


## Todo

- [ ] API
	- [ ] Stub
	- [ ] Implement Endpoints
- [ ] Tokens
- [ ] Views
	- [ ] Login
		- [ ] Name
	- [ ] In game
		- [ ] Seats for 9 players}
		- [ ] State
		- [ ] History
			- [ ] Total wins/losses by player
	- [ ] Sat out
		- Same as In-Game but with UI that indicates sat out

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 License](http://creativecommons.org/licenses/by-nc/4.0/).