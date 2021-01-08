import Item from './Item';

const items = [
    { id: 1, work: "Aprende react ", state: false },
    { id: 2, work: "Alimentar a obi wan", state: true },
    { id: 3, work: "Comprar google", state: false },
];

  
const List = () => {

    return (
        <>
            <h3>List</h3>

            {items.map((item) => (
               <Item key={item.id} {...item}/> // Key siempre va en el padre
               // Reemplazar item={item} por {...item} para pasar el contenido, y no el item como objeto
            ))}
        </>
    )
}

export default List;

