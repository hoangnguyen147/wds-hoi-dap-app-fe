import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './styles.scss';
import { useParams } from 'react-router-dom';
import QuestionPost from '../../components/QuestionPost';


function Question(props) {
    const params = useParams();
    const id = params.id;

    return (
        <div className="question">
            <Header />
            <QuestionPost id={id} />
            <p>scd</p>
        </div>
    );
}

export default Question;