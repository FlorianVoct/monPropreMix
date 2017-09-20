/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from 'components/Footer';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s "
        defaultTitle="Mon propre Mix énergétique"
        meta={[
          { name: 'description', content: 'un simulateur de mix énergétique' },
        ]}
      />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
