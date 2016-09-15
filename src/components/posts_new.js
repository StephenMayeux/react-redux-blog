import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

// we can get aceess to Router from this.props.context
class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  // this argument is properties from the form
  onSubmit(props) {
    // this action creator returns a promise
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-danger">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-danger">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-danger">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter at least one category';
  }

  if (!values.content) {
    errors.content = 'Write something!';
  }

  return errors;
}

// reduxForm and connect are nearly identical!
// connect(mapStateToProps, mapDispatchToProps)
// reduxForm(config object, mapStateToProps, mapDispatchToProps)

// REMEMBER: you can also pass in the action creator as an object
// instead of creating the mapStateToProps or mapDispatchToProps functions

// now action creators are available as props
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
