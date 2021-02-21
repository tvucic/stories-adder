import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#884ee5',
        borderRadius: '10px',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        // color: 'rgba(0,183,255, 1)',
        color: 'white',
      },
      image: {
        marginLeft: '15px',
        borderRadius: '15px'
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse",
        }
      }
}));