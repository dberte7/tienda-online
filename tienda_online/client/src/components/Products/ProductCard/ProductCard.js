import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    // height: 0,
    paddingTop: '56.25%', // 16:9
    width: '340px',
    height: '200px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = async () => {
    setExpanded(!expanded);
    let res = await axios.get('http://localhost:3001/api')
    // setExpanded(res.data)
  };

  return (
    <Grid item xs={12} >
      <Card className={classes.root}>
        <CardHeader
          title={props.product.name}
        />
        <CardMedia
          className={classes.media}
          image={props.product.url}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            Precio: {props.product.price}€
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            Rating: {props.product.relevance}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Fabricante: {props.product.manufacter}
            </Typography>
            <Typography paragraph>
              CIF: {props.product.cif}
            </Typography>
            <Typography paragraph>
              Dirección: {props.product.address}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Box m={4}/>
    </Grid>
  );
}