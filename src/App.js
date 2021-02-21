import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts'
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import radioApp from './images/radio-app.jpg';


const App = () => {

    const [currentId, setCurrentId] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [setCurrentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={ classes.appBar } position="static" color="inherit">
                <Typography className={ classes.heading } variant="h3" align="center">Add A Story</Typography>
                <img className={ classes.image } src={ radioApp } alt="memo" height="50"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={ classes.mainContainer } justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={ setCurrentId } />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={ currentId } setCurrentId={ setCurrentId } />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;