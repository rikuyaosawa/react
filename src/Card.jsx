import profilePic from "./assets/earth.jpg";
function Card() {
    // Inline Styling
    const imgStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        marginBottom: "10px",
    };
    return (
        <div className="card">
            <img style={imgStyle} alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Rikuya Osawa</h2>
            <p className="card-text">
                Software Developer exploring the face of software
            </p>
        </div>
    );
}

export default Card;
