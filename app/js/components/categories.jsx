import React, { PropTypes } from 'react';

import CategoryItem from './categoryItem';

const Categories = ({ data }) => (
  <div className="list-group">{data.map(CategoryItem)}</div>
);

const ChildCategory = PropTypes.shape({
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
});

const Category = PropTypes.shape({
  childCategory: PropTypes.arrayOf(ChildCategory),
  ChildCategory,
});

Categories.propTypes = {
  data: PropTypes.arrayOf(Category).isRequired,
};

export default Categories;
