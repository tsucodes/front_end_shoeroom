import { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const BlogForm = (props) => {
    const axios = require('axios');
    const baseURL = 'http://localhost:8000/';
    const textInput = useRef();
    const titleInput = useRef();
    const imageInput = useRef();

    const newPost = () => {
        axios.post(baseURL,{
            // title: titleInput.current,
            // image: imageInput.current,
            // text: textInput.current
        })
        .then(response=>{
            console.log(response.data);
        })
    }

    const updatePost = () => {
        axios.put(baseURL+'/'+props.currentPost.current._id,{
            // title: titleInput.current,
            // image: imageInput.current,
            // text: textInput.current
        })
        .then(response=>{
            console.log(response.data);
        })
    }
    
    const deletePost = () => {
          axios.delete(baseURL+'/'+props.currentPost.current._id)
    }


    return (
        <div className='form'>
               <Form method='POST'>
                   <Form.Group>
                       <Form.Label>Title:</Form.Label>
                       <Form.Control
                        type='text'
                        placeholder='Title'
                        defaultValue={props.currentPost.current?props.currentPost.current.title:""}
                        onChange={(e)=>titleInput.current = e.target.value}
                        required
                       />
                        <Form.Label>Image:</Form.Label>
                       <Form.Control
                        type='text'
                        placeholder='Image URL'
                        defaultValue={props.currentPost.current?props.currentPost.current.image:""}
                        onChange={(e)=>imageInput.current = e.target.value}
                        required
                       />
                        <Form.Label>Content:</Form.Label>
                       <Form.Control
                        as='textarea'
                        placeholder='Text'
                        defaultValue={props.currentPost.current?props.currentPost.current.text:""}
                        onChange={(e)=>textInput.current = e.target.value}
                        required
                       />

                <Button type="submit" variant="primary" onClick={(e) => {
                    e.preventDefault();
                    if (props.currentPost.current) {
                        updatePost();
                    } else {
                        newPost();
                    }
                    props.setPostChange(old => true);
                    props.handleClose();
                }}>
                    Submit
                </Button>
                <Button type="submit" variant="danger" onClick={(e) => {
                    e.preventDefault();
                    deletePost();
                    props.setPostChange(old => true);
                    props.handleClose();
                }}>
                    Delete
                </Button>
                </Form.Group>
               </Form>
        </div>
    )
}

export default BlogForm;
