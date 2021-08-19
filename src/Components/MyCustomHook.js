import React , {useState} from "react";
import useTitle from "./useTitle";

const MyCustomHook = () => {
    const [count , setCount] = useState(0);
    useTitle(count)
    return (
        <div>
            <h1>My Custom Hook</h1>
            <button onClick = {() => setCount(count+1)}>Click Me</button>
        </div>
    );
}

export default MyCustomHook;