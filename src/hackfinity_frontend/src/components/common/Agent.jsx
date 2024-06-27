import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../../declarations/backend/";
import { Principal } from "@dfinity/principal";

const agent = new HttpAgent({ host: "https://ic0.app" }); // Ensure to use the correct IC host
const canisterId = "your-canister-id"; // Replace with your canister ID
const actor = Actor.createActor(idlFactory, { agent, canisterId });
