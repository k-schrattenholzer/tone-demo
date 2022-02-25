import { useState } from 'react';
import * as Tone from 'tone';
import './App.css';

function App() {
// state
//human input sequence
//CPU sequence
//being played state toggle with start button 

let synthBuffer;

const [start, setStart] = useState(false)
const [currentNote, setCurrentNote] = useState('')

const playFunctions = ['playC4', 'playE4', 'playF4','playG4' ,'playC5' ,'playF6' ,'playA4' ,'playB4' ,'playD2' ,'playE3','playF2','playD5']
const CPUNote='C4'
const noteFreq = Tone.Frequency(CPUNote)

	const limiter = new Tone.Limiter(-2);
  const loop = new Tone.Loop((time) => {
    // triggered every eighth note.
    // console.log(time);
  }, "8n").start(0);

  const synthSounds = {
    oscillator: {
      type: "triangle2"
    },
    envelope: {
      attack: 0.001,
      decay: 1.5,
      sustain: 0.20,
      release: .80
    }
  }

  const synth = new Tone.Synth(synthSounds).chain(limiter, Tone.Master);


  // function startGame() {
  //   setStart(true)
  //   playInterval(CPUSeq)
  // }

  function playInterval(notes) {
    var synth = new Tone.Synth(synthSounds).toDestination();
    var interval = new Tone.Sequence(function(time, note){
        synth.triggerAttackRelease(note, 1);
    }, notes, "2n");

    //begin at the beginning
    interval.loop = false;
    interval.start(0);    
    Tone.Transport.start("+0.1");
}

  function onClick() {
    setCurrentNote()
  
  }

  function playNote(id) {
    const noteFreq = Tone.Frequency(id)
    synth.triggerAttackRelease(noteFreq, '2n');
  }

  // function playE4() {
  //   synth.triggerAttackRelease(400, '2n');
  // }

  // function playF4() {
  //   synth.triggerAttackRelease("F4", '2n');
  // }

  // function playG4() {
  //   synth.triggerAttackRelease("G4", '2n');
  // }

  // function playC5() {
  //   synth.triggerAttackRelease("C5", '2n');
  // }

  // function playF6() {
  //   synth.triggerAttackRelease("F6", '2n');
  // }

  // function playA4() {
  //   synth.triggerAttackRelease("A4", '2n');
  // }
  // function playB4() {
  //   synth.triggerAttackRelease("B4", '2n');
  // }
  // function playD2() {
  //   synth.triggerAttackRelease("D2", '2n');
  // }
  // function playE3() {
  //   synth.triggerAttackRelease("E3", '2n');
  // }
  // function playF2() {
  //   synth.triggerAttackRelease("F2", '2n');
  // }
  // function playD5() {
  //   synth.triggerAttackRelease("D5", '2n');
  // }

  return (
    <div className="App">
      <div className="main">
        <div className="container Synth">
          <div onClick={playNote()} className={"C4"}></div>
          {/* <div onClick={playE4} on={false}></div>
          <div onClick={playF4} on={false}></div>
          <div onClick={playG4} on={false}></div>
          <div onClick={playC5} on={false}></div>
          <div onClick={playF6} on={false}></div>
          <div onClick={playA4} on={false}></div>
          <div onClick={playB4} on={false}></div>
          <div onClick={playD2} on={false}></div>
          <div onClick={playE3} on={false}></div>
          <div onClick={playF2} on={false}></div>
          <div onClick={playD5} on={false}></div> */}
        </div>
        {/* <button onClick={startGame}>start</button> */}
      </div>
    </div>
  );
}

export default App;
