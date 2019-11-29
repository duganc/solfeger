# Solfeger

A simple elm app for Solfege ear training.  

## Installation

At the moment, this isn't being served anywhere so the best option is to clone the repo and run a local web server.  This can be done using the following steps:

1. Clone the repository using the `Clone or Download` button in Github or the command line
1. Navigate to the repository's root directory in the terminal.
1. Run python's simple `http.server` using `python3 -m http.server`.  If it doesn't run, you may need to [install it first](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server).
1. Navigate to the appropriate port on `localhost` (`8000` by default) in your browser.  e.g. `localhost:8000`.
1. The page should load and you should see a keyboard ready to go.

## Usage

To play notes, either click them or use the number row on your keyboard from the backtick key to the `=`.  For instance, 4 will be `Mi`, the fifth note of the chromatic scale (because backtick is `Do`, 1 is `Di`, etc.).  The `Q` through `\` keys will also work.  `Shift` can be used to raise the tone by an octave and `Control` can be used to lower it.

## Todo

 - [ ] User Stories
	 - [x] v0 - Chromatic keyboard
		 - [x] Hit page
		 - [x] View keyboard (12 keys)
		 - [x] Click on keys
			 - [x] Shows solfege
			 - [x] Plays note
		 - [x] Top row of keyboard (tilda through equals sign) map to the 12 keys
	 - [ ] v1 - Alternate scales
		 - [x] Buttons to pick scales
		 - [ ] 0-7 or other subset map to the keys
		 - [x] Unused keys are faded out
		 - [x] Shift raises note
		 - [x] Control lowers note
	     - [x] Overlay scale on piano keys
	     - [ ] Figure out how to capture control during control click
	 - [ ] v2 - Content
	 	 - [ ] Melodies in qwerty
	 	 - [x] Tooltips
	 	 - [ ] Blog post
	 - [ ] Nice-to-haves
	 	 - [ ] Logo
		 - [ ] Hold note and key display for some minimum time to keep it from being too fast to see
		 - [ ] Holding multiple notes has weird behavior
		 - [ ] Right clicking keeps the text showing
		 - [ ] Toggle for piano keys
		 - [ ] Sustain

- [ ] Design
	- [ ] Page Structure
		- [x] Header & Footer
		- [x] Integrate into SPA
	- [ ] Grayscale Design
	- [ ] Full design

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 License](http://creativecommons.org/licenses/by-nc/4.0/).