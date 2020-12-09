
import p5 from '../node_modules/p5'
function SoundSketch(p) {
    let osc, playing, freq, amp;

    p.setup = function() {
        let cnv = p.createCanvas(100, 100);
        cnv.mousePressed(p.playOscillator);
        // osc = new p5.Oscillator('sine');
        p.osc = new p5.constructor.Oscillator('sine');
    }

    p.draw = function() {
        p.background(220)
        freq = p.constrain(p.map(p.mouseX, 0, p.width, 100, 500), 100, 500);
        amp = p.constrain(p.map(p.mouseY, p.height, 0, 0, 1), 0, 1);

        p.text('tap to play', 20, 20);
        p.text('freq: ' + freq, 20, 40);
        p.text('amp: ' + amp, 20, 60);

        if (playing) {
            // smooth the transitions by 0.1 seconds
            p.osc.freq(freq, 0.1);
            p.osc.amp(amp, 0.1);
        }
    }

    p.playOscillator = function() {
        // starting an oscillator on a user gesture will enable audio
        // in browsers that have a strict autoplay policy.
        // See also: userStartAudio();
        p.osc.start();
        playing = true;
    }

    p.mouseReleased = function() {
        // ramp amplitude to 0 over 0.5 seconds
        p.osc.amp(0, 0.5);
        playing = false;
    }
};


export default SoundSketch;