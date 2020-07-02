import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import Button from './Button';

/*
 * NewPostPage
 *
 * Displays a form for a user to create a new post, at the '/new' route
 *
 */

function NewPostPage({ newPost, handleChange, handleSubmit }) {
  return (
    <section>
      <h2>New Post</h2>
      <Form onSubmit={handleSubmit}>
        <input
          id="newPost"
          value={newPost}
          onChange={handleChange}
          aria-label="newPost"
          placeholder="Say something..."
        />
        <Button type="submit">Submit</Button>
      </Form>
    </section>
  );
}

NewPostPage.propTypes = {
  newPost: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

// TODO: map state/dispatch to props

export default NewPostPage;
