import React , {useState} from "react";

const MyUseState = () => {
    const [myName , setMyName] = useState("Ruturaj")

    return(
        
        <div>
            <h1>useState</h1>
            <h1>{myName}</h1>
            <button onClick = {() => setMyName("Tony")}>Change Name</button>
        </div>
        
    );
}

export default MyUseState;