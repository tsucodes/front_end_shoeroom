import React from "react";
const AddPost = (props) => {
    return (
        <div onClick={props.handleShow} className="add-shoe">
            Add Shoe
        </div>
    )
}

export default AddPost;