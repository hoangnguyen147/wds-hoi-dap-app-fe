import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './styles.scss';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { parseFullTime } from '../../utils/parseTime';
import { deleteQuestionById, getQuestionById } from '../../api/question';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { createAnswer } from '../../api/answer';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Question({ user, ...props }) {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState({});
    const [controlRender, setControlRender] = useState(false);
    const history = useHistory();
    const [answer, setAnswer] = useState("")

    const handleOnChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();
        await createAnswer({
            answerText: answer,
            questionId: id
        })
            .then(() => {
                toast.success("Gửi câu trả lời thành công", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(() => {
                toast.error("Gửi câu trả lời thất bại", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        setControlRender(!controlRender);
    }

    const handleDeleteQuestion = async () => {
        await deleteQuestionById(id)
        .then(() => {
            toast.success("Xóa câu hỏi thành công", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push("/home");
        })
        .catch(() => {
            toast.error("Xóa câu hỏi thất bại", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
        
    }

    const handleUpdateQuestion = () => {
        history.push("/edit-question/" + id)
    }

    useEffect(() => {
        async function fetchQuestionData(id) {
            const res = await getQuestionById(id);
            console.log("a");
            setData(res);
        };
        fetchQuestionData(id);
    }, [controlRender]);
    
    return (
        <div className="question">
            <Header />
            <div className="question__post">
                <div className="question__post-info">
                    <div className="question__post-create">
                        <div className="question__post-username">
                            {data.user ? data.user.name : ""}
                        </div>
                        <div className="question__post-time">
                            {"đăng vào " + parseFullTime(data.createdAt)}
                        </div>
                    </div>
                    <div className="question__post-content">
                        <div className="question__post-title">
                            <span>Tiêu đề : </span>
                            {data.title}
                        </div>
                        <div className="question__post-description">
                            {data.description}
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <ul>
                        {data.answers ? (
                            data.answers.length > 0 ? (
                                data.answers
                                    .map((item, index) => (
                                        <li key={item.id} className="question__post-answers">
                                            <div className="question__post-username" style={{ color: "orange" }}>{item.user.name}</div>
                                            <div className="question__post-description" style={{ paddingLeft: "15px" }}>{item.answerText}</div>
                                        </li>
                                    ))
                            ) : (<div> </div>)
                        ) : (<div></div>)}
                    </ul>
                </div>

                {user ? (
                    <div className="form">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    name="answer"
                                    rows={3}
                                    placeholder="Nhập câu trả lời của bạn"
                                    onChange={handleOnChange}
                                    innerRef={answer}
                                />
                                <Button color="primary" type="submit">Gửi</Button>
                            </FormGroup>
                        </Form>
                    </div>
                ) : <Button onClick={() => { history.push("/login") }}>Đăng nhập để trả lời</Button>}
                {user.id == data.userId || user.isAdmin ? (
                    <Button color="danger" onClick={handleDeleteQuestion} style={{ width: "100%" }}>Xóa câu hỏi</Button>
                ) : (
                    null
                )}
                {user.id == data.userId ? (
                    <Button color="warning" onClick={handleUpdateQuestion} style={{ width: "100%", marginTop: "20px" }}>Sửa câu hỏi</Button>
                ) : (
                    null
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});


export default connect(mapStateToProps)(Question);