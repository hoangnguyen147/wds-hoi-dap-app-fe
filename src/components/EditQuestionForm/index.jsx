import React, { useEffect, useState } from 'react';
import { FastField, Form, Formik } from "formik";
import InputField from '../FormControl/InputField';
import * as Yup from "yup";
import { Container, Button } from "reactstrap";
import CategoryField from '../FormControl/CategoryField';
import list from '../../category';
import { addQuestion, getQuestionById } from '../../api/question';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required("Tiêu đề không được để trống"),
    description: Yup.string()
        .required("Mô tả câu hỏi không được để trống"),
    categoryName: Yup.string()
        .required("Chủ đề không được để trống")
});

function EditQuestinForm({ questionId, ...props }) {

    const [initialValues, setInitialValues] = useState()

    useEffect(() => {
        async function getContentQuestion(id) {
            const res = await getQuestionById(id);
            const { userId, title, description } = res;
            if(props.userId != userId) {
                return null;
            }
            setInitialValues({
                title: title,
                description: description,
                categoryName: "",
            });
        };
        getContentQuestion(questionId);
    }, []);

    const onSubmit = async (values, submitProps) => {
        console.log(values);
        submitProps.setSubmitting(true);
        await addQuestion(values)
            .then(() => {
                toast.success("Đặt câu hỏi thành công", {
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
                toast.error("Đặt câu hỏi thất bại", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    }

    if (!initialValues) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="edit-question__form">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {(formikProps) => {
                        const {
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            handleSubmit,
                        } = formikProps;


                        return (
                            <Container fluid>
                                <Form className="form" onSubmit={handleSubmit}>
                                    <h2>Đặt câu hỏi</h2>
                                    <FastField
                                        name="title"
                                        component={InputField}
                                        type="text"
                                        label="Tiêu đề"
                                    />

                                    <FastField
                                        name="description"
                                        component={InputField}
                                        type="textarea"
                                        label="Mô tả"
                                        rows={5}
                                    />

                                    <FastField
                                        name="categoryName"
                                        component={CategoryField}
                                        label="Chọn chủ đề"
                                        list={list}
                                    />

                                    <Button
                                        outline
                                        className="btn my-4 ml-auto d-block"
                                        color="success"
                                        size="lg"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                </Button>
                                </Form>
                            </Container>
                        );
                    }}
                </Formik>
            </div>
        )
    }
}

    export default EditQuestinForm;