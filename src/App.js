import { useState } from "react";
import "./App.css";
function App() {
  const [user,setUser] = useState("");
  const [userName,setUserName] = useState("");
  const [rnd, setRnd] = useState();
  const [role,setRole] = useState("");
  const [playe1,setPlayer1] = useState("");
  const [playe2,setPlayer2] = useState("");
  const [playe3,setPlayer3] = useState("");
  const [playe4,setPlayer4] = useState("");
  const [amount,setAmount] = useState("");


  return (
  <div>
    <form onSubmit={createName}>
      <input type="text" name="player"  onChange={(e) => {setUser(e.target.value)}} placeholder="Enter your player name"/>
      <button type="submit">Create</button>
    </form>
    <table>
  <tr>
    <div>
    <th>Player 1</th>
    <p>{user}</p>
    </div>
</tr>
    {/* <div>
    <th>Player 2</th>
    <p>{playe2}</p>
    </div>

    <div>
    <th>Player 3</th>
    <p>{playe3}</p>
    </div>

    <div>
    <th>Player 4</th>
    <p>{playe4}</p>
    </div>
    </tr>

  <tr>
    <td>{userName ? <p>{userName}</p> : null}</td>
  </tr>
  <tr>
  
  </tr>
  <tr>

  </tr>
  <tr>

  </tr>
  <tr>

  </tr>
  <tr>
  </tr>
  <tr>
    
  </tr> */}
</table>
    
    <button onClick={getRole}>Choose</button>
    <h3>{role}</h3>
  </div>
      );

function getRole() {
  setRnd(Math.floor(Math.random() * 4))
  if (rnd == 0) {
  setRole("King")
  setAmount("1000")
  }
  if (rnd == 1) {
    setRole("Queen")
    }
    setAmount("800")
  if (rnd == 2) {
    setRole("Police")
    setAmount("100")
    }
  
  if (rnd == 3) {
    setRole("Thief")
  setAmount("0")
    }
}


function createName(e) {
e.preventDefault();
setUserName(user);
}
}
export default App;
