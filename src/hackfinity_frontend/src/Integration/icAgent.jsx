// src/icAgent.js
import { Actor, HttpAgent } from "@dfinity/agent";
// Import your canister ID and interface
import { idlFactory as backend_idl, canisterId as backend_id } from "../../declarations/backend";

const agent = new HttpAgent();
if (process.env.NODE_ENV !== "production") {
  agent.fetchRootKey();
}

const backendActor = Actor.createActor(backend_idl, {
  agent,
  canisterId: backend_id,
});

export { backendActor };
