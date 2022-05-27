import { TextField, Typography, Paper, Button } from "@material-ui/core";
import formStyles from "./formStyles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/post";


const ShoeForm = (userID, setUserID) =>{
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
    const dispatch = useDispatch();
    const card = useSelector((state) =>(
        userID ? state.cards.find((brand)=> brand._id === userID) : null));
    // once user clicks submit card request is sent with data passed from state
    
    useEffect(() => {
        if (card) setCardData(card);
      }, [card]);
    
      const clear = () => {
        setUserID(0);
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
    
        if (userID === 0) {
          dispatch(createPost(cardData));
          clear();
        } else {
          dispatch(updatePost(userID, cardData));
          clear();
        }
      };
    
    return(
      <Paper className={style.paper}>
          <form noValidate className={`${style.root} ${style.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>{ userID ? `Edit"${card.name}"` : 'blah lblah'} </Typography>
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
            {/* <div>
                <FileBase type="file" multiple={false} 
                  onDone={({ base64 }) => setCardData({ ...cardData, image: base64 })} />
            </div> */}
            <Button className={style.buttonSubmit} variant="conatin" 
                    size="large"  type="submit">Submit</Button>
            <Button variant="conatin" size="large"  onClick={clear}>Clear</Button>
          </form>
      </Paper>
    );
}
export default ShoeForm;







