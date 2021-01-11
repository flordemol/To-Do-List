import Item from './Item';
  
const List = ({activities, deleteActivity}) => {

    return (
        <>
            <h3>List</h3>

            {activities.length === 0 ? <h4>No hay tareas</h4> : ""} {/* ternario*/}
            {/*activities.length === 0 && <h4>No hay tareas</h4>*/} 
            
            {activities.map((item) => (
               <Item key={item.id} {...item} deleteActivity={deleteActivity}/> // Key siempre va en el padre
               // Reemplazar item={item} por {...item} para pasar el contenido(key/value), y no el item como objeto
            ))}
        </>
    )
}

export default List;

