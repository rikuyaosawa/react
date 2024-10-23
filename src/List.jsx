function List() {
    const fruits = [
        { id: 1, name: "apple" },
        { id: 2, name: "orange" },
        { id: 3, name: "banana" },
    ];

    const listItems = fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
    ));
    return <ol>{listItems}</ol>;
}

export default List;
