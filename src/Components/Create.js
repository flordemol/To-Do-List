import List from "./List"

import { useState } from "react";
import { Button } from "react-bootstrap";

const Create = () => {
    const initialState = {
        id : "",
        work : "",
        state : false,
    };

    const handleWork = (e) => {
        const { name, value } = e.target;
        setWork({
            ...work,
            [name] : value, // [] para variables
        })
    }

    const [ work, setWork ] = useState(initialState);

    return (
        <>
            <h3>Create</h3>
            <input type="text" name="work" onChange={handleWork} value={work.work}/>
            <Button variant="primary" block>
                Agregar tarea
            </Button>
        </>
    )
}

export default Create;