import {useEffect} from "react";

const useTitle = (props) => {
    useEffect(() => {
        document.title = props + " clicks on button";
    })
}

export default useTitle;