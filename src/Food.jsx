function Food() {
    const food1 = "🍕 Pizza";
    const food2 = "🍜 Ramen";

    return (
        <ul>
            <li>{food1.toUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;
