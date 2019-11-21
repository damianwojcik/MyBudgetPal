import React from 'react';

import Diary from '../containers/Diary/Diary';
import classes from './PageContent.module.css';

const PageContent = props => {
  return (
    <div className={classes.PageContent}>
      <Diary />
    </div>
  );
};

export default PageContent;
