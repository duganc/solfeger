
function playTone(note) {
	console.log("playTone(" + note + ")")
	var synth = new Tone.Synth().toMaster();
	if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
	synth.triggerAttackRelease(note, "8n");
}
