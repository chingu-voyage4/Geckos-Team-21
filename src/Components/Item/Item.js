import React from "react";
import PropTypes from "prop-types";
import { Card, Typography, Button } from "material-ui";
import { CardMedia, CardContent, CardActions } from "material-ui/Card";
import { withStyles } from "material-ui/styles";

import { styles } from "./styles";

const Item = ({ classes, item }) => (
  <Card className={classes.card} raised={true}>
    <CardMedia
      className={classes.media}
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
