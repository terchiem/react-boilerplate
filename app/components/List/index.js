import React from 'react';
import PropTypes from 'prop-types';
import generateId from 'utils/generateId';
import Ul from './Ul';
import Wrapper from './Wrapper';

/**
 *
 * List
 *
 * Presentational ul component
 * A unique id is generated for each list item
 *
 */

function List({ component, items }) {
  const ComponentToRender = component;
  let content = <div />;

  // If we have items, render them
  if (items) {
    content = items.map(item => (
      <ComponentToRender key={generateId()} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
