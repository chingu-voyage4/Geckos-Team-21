import React from "react";
import PropTypes from "prop-types";

import { Grid } from "material-ui";

import Item from "../Item/Item";

const ItemsList = ({ items }) => (
  <Grid container spacing={8} style={{ padding: 20 }}>
    {items.map((item, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        <Item item={item} />
      </Grid>
    ))}
  </Grid>
);

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;
