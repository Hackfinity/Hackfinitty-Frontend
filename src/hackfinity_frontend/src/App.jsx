import { useState } from 'react';
import {canisterId,createActor,idlFactory} from "../../declarations/backend"
function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const actor = createActor(canisterId,{})

    actor.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      IC Hackerthon Platform
    </main>
  );
}

export default App;
