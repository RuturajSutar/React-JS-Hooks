import React , {useState ,useEffect} from "react";

const MyUseEffect = () => {
    const [num , setNum] = useState(0);
    const [nums , setNums] = useState(0);
    useEffect(() => alert("Num is " + num +"\nNums is " + nums) , [num]);
    return (
        <div>
            <h1>useEffect</h1>
        <button onClick = {() => setNum(num+1)}>Click me {num}</button>
        <br/>
        <br/>
        <button onClick = {() => setNums(nums+1)}>Click me {nums}</button>

        </div>
    );
}

export default MyUseEffect;