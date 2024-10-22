import PropTypes from "prop-types";

// default parameters
function Student({ name = "Guest", age = 0, isStudent = false }) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "yes" : "no"}</p>
        </div>
    );
}

// any misalignment with types will be printed on browser console
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

export default Student;
