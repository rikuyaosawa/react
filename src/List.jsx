import { OrderedList, ListItem } from "@chakra-ui/react";

function ItemList(props) {
    // default props
    const { items = [{ id: 0, name: "Peach" }], category = "None" } = props;

    const listItems = items.map((item) => (
        <ListItem key={item.id}>{item.name}</ListItem>
    ));

    return (
        <>
            <h1>{category}</h1>
            <OrderedList>{listItems}</OrderedList>
        </>
    );
}

export default ItemList;
