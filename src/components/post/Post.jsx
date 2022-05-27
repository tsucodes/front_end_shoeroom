import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from "../../action/post";
import postStyles from './postStyles';
import noImage from '../../images/No_Img_Avail.jpeg'

const Post = ({ post, setUserId }) => {
    const dispatch = useDispatch();
    const classes = postStyles();

  return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.image || noImage} title={post.title} />
        <div className={classes.overlay}>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setUserId(updatePost(post._id))}>
            <MoreHorizIcon fontSize="default" /></Button>
      </div>
   
      <Typography className={classes.details} gutterBottom variant="h5" component="h2">{post.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.brand} sz {post.size}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{post.condition}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete </Button>
      </CardActions>
    </Card>
  );
};

export default Post;