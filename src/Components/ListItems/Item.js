import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, Button } from "material-ui";
import { CardMedia, CardContent, CardActions } from "material-ui/Card";
import { withStyles } from "material-ui/styles";

const styles = {
  card: {
    margin: 10
  },
  media: {
    height: 200
  }
};

const Item = ({ classes, item }) => (
  <Card className={classes.card} raised={true}>
    <CardMedia
      className={classes.media}
      //image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      image={item.imageUrl.split(",")[0]}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="headline" component="h2">
        {item.title}
      </Typography>
      <Typography component="p">{item.description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withStyles(styles)(Item);
