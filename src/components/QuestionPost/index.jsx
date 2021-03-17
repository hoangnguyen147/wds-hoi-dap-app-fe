import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

QuestionPost.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
};

function QuestionPost(props) {
    return (
        <div className="post">
            <p>scd</p>
        </div>
    );
}

export default QuestionPost;