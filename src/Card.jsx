import profilePic from "./assets/earth.jpg";
function Card() {
    return (
        <div className="card">
            <img
                className="card-img"
                alt="profile picture"
                src={profilePic}
            ></img>
            <h2 className="card-title">Rikuya Osawa</h2>
            <p className="card-text">
                Software Developer exploring the face of software
            </p>
        </div>
    );
}

export default Card;
