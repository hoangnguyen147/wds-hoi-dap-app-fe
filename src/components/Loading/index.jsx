import React from 'react';
import PropTypes from 'prop-types';

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
}

function Loading({isLoading}) {
  if(!isLoading) return null;
  return (
    <div>
      Loading...
    </div>
  );
}

export default Loading;