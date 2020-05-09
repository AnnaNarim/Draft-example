import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import DeletePost from "./PostDelete";
import UpdatePost from "./PostEdit";
import PublishPost from "./PostPublish";

const useStyles = makeStyles({
    root  : {
        margin : 15
    }
});

export default function Post({isPublished, post,refresh}) {
    const classes = useStyles();


    const {title, id, content, author} = post;

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea component={Link} to={`/post/${id}`}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" noWrap>
                        {title}

                        {/*{author.name}*/}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent : "flex-end"}}>
                {/*<PublishPost id={id} isPublished={isPublished} refresh={refresh} />*/}
                <DeletePost title={title} id={id} refresh={refresh}/>
                <UpdatePost  title={title} id={id}  content={content} refresh={refresh}/>
            </CardActions>
        </Card>
    );
}
