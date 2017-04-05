import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './components/tasklist';
import NavigationBar from './components/navigationBar';
import ProgressBar from './components/progressBar';

const categories = [
  {
    name: 'category122',
    childCategory: [
      {
        name: 'childCategory1',
        list: [
          'listChild 1',
          'listChild 2',
        ],
      },
      {
        name: 'childCategory2',
        list: [
          'listChild 3',
          'listChild 4',
        ],
      },
    ],
    list: [
      'list 1',
      'list 2',
      'list 3',
    ],
  },
  {
    name: 'category2',
    list: [
      'list 4',
      'list 5',
      'list 6',
    ],
  },
];

ReactDOM.render(
  <div className="container">
    <NavigationBar />
    <ProgressBar />
    <TaskList data={categories} />
  </div>,
  document.getElementById('root'),
);
