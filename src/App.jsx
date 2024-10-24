import ItemList from "./List.jsx";

function App() {
    const fruits = [
        { id: 1, name: "apple" },
        { id: 2, name: "orange" },
        { id: 3, name: "banana" },
    ];

    const vegetables = [
        { id: 1, name: "potato" },
        { id: 2, name: "broccoli" },
        { id: 3, name: "corn" },
    ];

    return (
        <>
            <ItemList items={fruits} category="Fruits" />
            <ItemList items={vegetables} category="Vegetables" />
        </>
    );
}

export default App;
