
function playTone() {
	var synth = new Tone.Synth().toMaster();
	if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
	synth.triggerAttackRelease("C4", "8n");
}
