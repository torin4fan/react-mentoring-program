import React, { PropTypes } from 'react';
import shortid from 'shortid';

import Categories from './categories';

const CategoryItem = ({ name, childCategory }) => (
  <div key={shortid.generate()}>
    <a className="list-group-item">{name}</a>
    <div className="list-group">{childCategory && <Categories data={childCategory} />}</div>
  </div>
);

const ChildCategory = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
});

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  childCategory: PropTypes.arrayOf(ChildCategory).isRequired,
};

export default CategoryItem;
