
function playTone(note) {
	console.log("playTone(" + note + ")")
	var synth = new Tone.Synth(
		{
		  oscillator: {
		    type: 'sine'
		  },
		  envelope: {
		    attack: 2,
		    sustain: 2,
		    release: 0.1
		  }
		}
	).toMaster();
	if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
	synth.triggerAttackRelease(note, "8n");
}
