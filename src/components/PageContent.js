import React from 'react';

import Diary from '../containers/Diary/Diary';
import StyledPageContent from '../components/styles/StyledPageContent';

const PageContent = () => {
  return (
    <StyledPageContent>
      <Diary />
    </StyledPageContent>
  );
};

export default PageContent;
