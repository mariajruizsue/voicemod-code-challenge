import { useGlobalState, store } from 'state-pool';
import { VoiceSelector } from "./components/VoiceSelector/VoiceSelector";
import './resources/GlobalState';

import './App.css';

export default function App() {
  const [voices] = useGlobalState("voices");
  const [voicesFav] = useGlobalState("voicesFav");

  return (
    <>
      <div className="App">
        <VoiceSelector voices={voices} voicesFav={voicesFav} />
      </div>
    </>
  );
}

