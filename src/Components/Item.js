import {Alert, Row, Col} from "react-bootstrap";

// Style Component
const pointer = {
    cursor: "pointer",
};

// Si viene el objeto item entero a (props) lo destructuro ({item})
// Como se envió solo el contenido de item con {...item} puedo acceder directamente a las propiedades
const Item = ({id, work, state, deleteActivity}) => { 
    const deleteWork = (e) => {
        //console.log(e);
        const {id} = e.target;
        deleteActivity(id);
    }
   
    return (
        <Alert key={id} variant={"secondary"}>
           <Row>
               <Col md={10}>
                   <input type="checbox"/> {work}
               </Col>
               <Col md={2}>
                <p style={pointer} id={id} onClick={deleteWork}>🗑</p>
               </Col>
           

            </Row> 
        </Alert>
    )
};

export default Item;