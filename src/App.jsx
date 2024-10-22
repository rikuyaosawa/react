import UserGreeting from "./UserGreeting";

function App() {
    return (
        <>
            <UserGreeting username="Rikuya" isLoggedIn={true} />
            <UserGreeting />
        </>
    );
}

export default App;
