import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import QuestionList from '../../components/QuestionList';
import './styles.scss';

Home.propTypes = {
    
};


function Home(props) {
    console.log(process.env.APP_API)
    return (
        <div className="home">
            <Header />
            <QuestionList />
        </div>
    );
}

export default Home;