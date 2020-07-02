import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

/**
 *
 * ListItem
 *
 * Presentational li component
 *
 */

function ListItem({ item }) {
  return (
    <Wrapper>
      <Item>{item}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
