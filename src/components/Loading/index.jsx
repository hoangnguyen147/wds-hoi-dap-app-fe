import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

Loading.propTypes = {
    isLoading: PropTypes.bool
};

Loading.defaultProps = {
    isLoading: false
}

function Loading(props) {
    if(!isLoading) return null;
    return (
        <div>
            Loading
        </div>
    );
}

export default Loading;