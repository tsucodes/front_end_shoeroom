import { TextField, Typography, Paper, Button } from "@material-ui/core";
import formStyles from "./formStyles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/post";


const ShoeForm = ({userId, setUserId}) =>{
    const dispatch = useDispatch();
    const style = formStyles();
    const [cardData, setCardData] = useState({
        Owner: '',
        name: '', 
        brand: '',
        size: '',
        condition: '',
        // convert images into string using redux64
        image: ''
    })

    const card = useSelector((state) =>(
        userId ? state.cards.find((post)=> post._id === userId) : null));
    // once user clicks submit card request is sent with data passed from state
    
    useEffect(() => {
        if (card) setCardData(card);
      }, [card]);
    
      const clear = () => {
        setUserId(0);
        setCardData({  
            Owner: '',
            name: '', 
            brand: '',
            size: '',
            condition: '',
            image: '' 
    });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (userId === 0) {
          dispatch(createPost(cardData));
          clear();
        } else {
          dispatch(updatePost(userId, cardData));
          clear();
        }
      };
    
    return(
      <Paper className={style.paper}>
          <form noValidate className={`${style.root} ${style.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>{ userId ? `Edit"${card.name}"` : 'Add a shoe'} </Typography>
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
            <TextField name="image" variant="outlined" label="image" 
                    fullWidth value={cardData.image} 
                    onChange={(e)=> setCardData({ ...cardData, image: e.target.value})}></TextField>
        
            <Button className={style.buttonSubmit} variant="contained" 
                    size="large"  type="submit">Submit</Button>
            <Button variant="contained" size="large" color="primary" onClick={clear}>Clear</Button>
          </form>
      </Paper>
    );
}
export default ShoeForm;







