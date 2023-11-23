import React from "react";
import { useState } from "react";
import Authenticate from "./Authenticate";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState(null);
  const [token, setToken] = useState(null);
  async function handleSubmit(e) {
      e.preventDefault();

      try {
        const response = await fetch("localhost:8080/users");
        const result = await response.json();
          console.log(result);
      } catch (error) {
        setError(error.message);
      }
  }; 

    return <> <Authenticate token={token} setToken={setToken} />
            
            
            <form onSubmit={handleSubmit}>
              <label>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
              </label>
              <label><br />
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
              </label><br />
              <button>Submit</button>
            </form></>
            
        
    
};
