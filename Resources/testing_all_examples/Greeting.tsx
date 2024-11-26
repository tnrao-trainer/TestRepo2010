// Component: Greeting.tsx
import React, { useState } from 'react';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC  = () => {

const [result, setResult]    = useState<string>("");
const [uname, setUname]    = useState<string>("");
const [password, setPassword]    = useState<string>("");

const buttonClick = () => {
    setResult("Welcome to " + uname);
};

  return ( <>        
            User Name  : <input type="text" id="t1" onChange={(e) => setUname(e.target.value)}  />           
           Password : <input type="text" id="t1" onChange={(e) => setUname(e.target.value)}  />           
           <button onClick={buttonClick}>Get Data</button>
            <h1 id="x">{result}</h1>;
  
  </>);
  
};

export default Greeting;

