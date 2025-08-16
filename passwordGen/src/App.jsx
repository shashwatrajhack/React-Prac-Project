import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_=+[]{};:',.<>/?|~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex-shadow flex rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />

        <button
          className="outline bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
          onClick={copyPasswordToClip()}
        >
          Copy
        </button>
      </div>

      <div className="flex gap-x-1 item-center">
        <input
          value={length}
          type="range"
          min={6}
          max={100}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length: {length}</label>
        <input
          type="checkbox"
          value={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label>Numbers</label>

        <input
          type="checkbox"
          value={characterAllowed}
          id="numberInput"
          onChange={() => {
            setCharacterAllowed((prev) => !prev);
          }}
        />
        <label>Characters</label>
      </div>
    </div>
  );
}

export default App;
