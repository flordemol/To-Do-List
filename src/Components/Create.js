import List from "./List"

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";

const Create = ({addActivity}) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("enviado");
      
        // 1. Verificar que la tarea tenga algo
        const {work : task} = work;
        if(task.trim() === "") return;
        const workObject = {
            ...work, // {id : "", work:"tarea", state:false}
            id : shortid(), // genera id aleatorio
        };
        //console.log(workObject);
        setWork(initialState);
        addActivity(workObject);
    }


    const [ work, setWork ] = useState(initialState);

    return (
        <>
            <h4>Create</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" name="work" onChange={handleWork} value={work.work}/>
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    Agregar tarea
                </Button>
            </Form>
        </>
    )
}

export default Create;