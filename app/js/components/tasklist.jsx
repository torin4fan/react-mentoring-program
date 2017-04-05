import React, { PropTypes } from 'react';

import Categories from './categories';
import Tasks from './tasks';

const TaskList = ({ data }) => (
  <div className="row">
    <div className="col-md-6">
      <form className="form-inline">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail2"
            placeholder="Enter category title"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      <div className="just-padding">
        <div className="list-group list-group-root well">
          <Categories data={data} />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <form className="form-inline">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Add item"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      <Tasks />
    </div>
  </div>
);

const ChildCategory = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
});

const Category = PropTypes.shape({
  childCategory: PropTypes.arrayOf(ChildCategory),
  ChildCategory,
});

TaskList.propTypes = {
  data: PropTypes.arrayOf(Category).isRequired,
};

export default TaskList;

