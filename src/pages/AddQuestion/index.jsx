import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import AddQuestionForm from '../../components/AddQuestionForm';
import './styles.scss';
import { Redirect } from 'react-router';
import { connect } from "react-redux";

AddQuestion.propTypes = {
    
};


function AddQuestion({user}) {

    if(!user) return <Redirect to="/home"/>

    return (
        <div className="add-question">
            <Header />
            <AddQuestionForm />
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps,null)(AddQuestion);