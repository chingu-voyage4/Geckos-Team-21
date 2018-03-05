import React from "react";
import PropTypes from "prop-types";

import { Grid } from "material-ui";

import Item from "./Item";

const ListItems = ({ items }) => (
  <Grid container spacing={8} style={{ padding: 20 }}>
    {items.map((item, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        <Item item={item} />
      </Grid>
    ))}
    {/* <Grid item xs={12} sm={6} md={3}>
      <Item />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Item />
    </Grid> */}
  </Grid>
);

ListItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default ListItems;
