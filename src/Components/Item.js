// Si viene el objeto item entero a (props) lo destructuro ({item})
// Como se envió solo el contenido de item con {...item} puedo acceder directamente a las propiedades
const Item = ({id, work, state}) => { 
    const deleteWork = (e) => {
        console.log(e)
    }
   
    return (
        <h4 onDoubleClick={deleteWork}>
            {id} - {work} - {state ? "Cumplido" : "Pendiente"}
        </h4>
    )
};

export default Item;