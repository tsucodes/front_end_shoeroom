import { TextField, Typography, Paper, Button } from "@material-ui/core";
import formStyles from "./formStyles";
import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/post";


const ShoeForm = (userID, setUserID) =>{
    const style = formStyles();
    const [cardData, setCardData] = useState({
        name: '', 
        brand: '',
        size: '',
        condition: '',
        // convert images into string using redux64
        image: ''
    })
    const dispatch = useDispatch();
    const post = useSelector((state) =>(userID ? state.posts.find((brand)=> brand._id === userID) : null))
    const user = JSON.parse(localStorage.getItem('profile'))
    // once user clicks submit post request is sent with data passed from state
    useEffect(()=>{
        if(post) setUserID(post);
    }, [post]);
    const handleSubmit = (e)=> {
        e.preventDefault();
        if (userID === 0) {
            dispatch(createPost({ ...cardData, name: user?.result?.name }));
            clear();
          } else {
            dispatch(updatePost(userID, { ...cardData, name: user?.result?.name }));
            clear();
          }
    }

    const clear = ()=> {
        setUserID(0);
        setCardData({name: '', 
        brand: '',
        size: '',
        condition: '',
        image: '',})

    }

    if (!user?.result?.name) {
        return (
          <Paper className={style.paper}>
            <Typography variant="h6" align="center">
              Sneaker enthusiasts can keep an inventory of the shoes in their sneaker collection. This app will give you the tools you need to view, track and mange your entire sneaker collection in one place. Please Sign in to get started!
    
            </Typography>
          </Paper>
        );
      }

    return(
      <Paper className={style.paper}>
          <form noValidate className={`${style.root} ${style.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>{ userID ? `Edit"${post.name}"` : 'blah lblah'} </Typography>
            <TextField name="name" variant="outlined" label="name"
                 fullWidth value={cardData.name} 
                onChange={(e)=> setCardData({ ...cardData, name: e.target.value})}></TextField>
            <TextField name="brand" variant="outlined" label="brand" 
                    fullWidth value={cardData.brand} 
                    onChange={(e)=> setCardData({ ...cardData, brand: e.target.value})}></TextField>
            <TextField name="size" variant="outlined" label="size" 
                    fullWidth value={cardData.size} 
                    onChange={(e)=> setCardData({ ...cardData, size: e.target.value})}></TextField>
            <TextField name="condition" variant="outlined" label="condition" 
                    fullWidth value={cardData.condition} 
                    onChange={(e)=> setCardData({ ...cardData, condition: e.target.value})}></TextField>
            {/* <TextField name="image" variant="outlined" label="image" 
                    fullWidth value={cardData.image} 
                    onChange={(e)=> setCardData({ ...cardData, image: e.target.value})}></TextField> */}
            <div>
                <FileBase type="file" multiple={false} 
                  onDone={({ base64 }) => setCardData({ ...cardData, image: base64 })} />
            </div>
            <Button className={style.buttonSubmit} variant="conatin" 
                    size="large"  type="submit">Submit</Button>
            <Button variant="conatin" size="large"  onClick={clear}>Clear</Button>
          </form>
      </Paper>
    );
}
export default ShoeForm;







