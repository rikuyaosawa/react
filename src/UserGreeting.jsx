import PropTypes from "prop-types";
function UserGreeting({ username = "Guest", isLoggedIn = false }) {
    if (isLoggedIn) {
        return <h2>Welcome {username}!</h2>;
    } else {
        return <h2>Please login to continue</h2>;
    }
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
};

export default UserGreeting;
