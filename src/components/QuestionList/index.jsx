import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { Link } from 'react-router-dom';
import MyPagination from '../Pagination';

QuestionList.propTypes = {
    data: PropTypes.array,
};

QuestionList.defaultProps = {
    data: [
        {
            id: 1,
            title: "cau hoi 1"
        },
        {
            id: 2,
            title: "cau hoi 2"
        },
        {
            id: 3,
            title: "cau hoi 3"
        },
        {
            id: 4,
            title: "cau hoi 4"
        },
        {
            id: 5,
            title: "cau hoi 1"
        },
        {
            id: 6,
            title: "cau hoi 2"
        },
        {
            id: 7,
            title: "cau hoi 3"
        },
        {
            id: 8,
            title: "cau hoi 4"
        },
        {
            id: 9,
            title: "cau hoi 1"
        },
        {
            id: 10,
            title: "cau hoi 2"
        },
        {
            id: 11,
            title: "cau hoi 3"
        },
        {
            id: 12,
            title: "cau hoi 4"
        },
    ],
}

const handleOnclick = () => {

}


function QuestionList({ data, ...props }) {
    console.log(data)
    return (
        <div className="list">
            <ul>
                {data.length > 0 ? (
                    data.map((question, index) => (
                        <li
                            key={question.id}
                            onClick={handleOnclick}
                        >
                            <div className="list__question">
                                <Link to={`question/${question.id}`}>
                                    <li>{question.title}</li>
                                </Link>
                            </div>
                        </li>
                    ))
                ) : (
                        <p>Chưa có dữ liệu</p>
                    )}
            </ul>
            <MyPagination firstPagiShow={6} />
        </div>
    );
}

export default QuestionList;