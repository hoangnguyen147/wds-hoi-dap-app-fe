import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import EditQuestionForm from '../../components/EditQuestionForm';
import './styles.scss';
import { Redirect, useParams } from 'react-router';
import { connect } from "react-redux";

EditQuestion.propTypes = {
    
};


function EditQuestion({user}) {

    const params = useParams();
    const questionId = params.id;

    if(!user) return <Redirect to="/login" />

    return (
        <div className="add-question">
            <Header />
            <EditQuestionForm questionId={questionId} userId={user.id} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps,null)(EditQuestion);