import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { Link } from 'react-router-dom';
import MyPagination from '../Pagination';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import list from '../../category';
import { getQuestion } from '../../api/question';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const customNumberPagination = (firstPagiShow) => {
    return (
        <React.Fragment>
            <PaginationItem active={false}>
                <PaginationLink href="#" onClick={()=> {console.log("a")}} >
                    {firstPagiShow}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    {firstPagiShow+1}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    {firstPagiShow+2}
                </PaginationLink>
            </PaginationItem>
        </React.Fragment>
    )
}

function QuestionList(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [category, setCategory] = useState("");
    const [listQuestion, setListQuestion] = useState([]);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    useEffect(() => {
        async function getQuestionList(category) {
            const res = await getQuestion(category);
            console.log(res);
            setListQuestion(res);
        };
        getQuestionList(category)
    }, [category]);

    return (
        <div className="list">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="list__dropdown" size="lg">
                <DropdownToggle className="list__dropdown-item">
                    {category || "Tất cả"}
                </DropdownToggle>
                <DropdownMenu container="body">
                    <DropdownItem onClick={() => setCategory("")} className="list__dropdown-item" >All</DropdownItem>
                    {list.map((item) => (
                        <DropdownItem onClick={() => setCategory(item)} className="list__dropdown-item" >{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <ul>
                {listQuestion.length > 0 ? (
                    listQuestion.map((question, index) => (
                        <li
                            key={question.id}
                        >
                            <div className="list__question">
                                <Link to={`question/${question.id}`} >
                                    <div className="list__question-title">{question.title}</div>
                                    <div className="list__question-user">{question.userId}</div>
                                </Link>
                            </div>
                        </li>
                    ))
                ) : (
                        <p>Chưa có dữ liệu</p>
                    )}
            </ul>
            <Pagination size="lg" aria-label="Page navigation example" className="pagination">
                <PaginationItem>
                    <PaginationLink first href="" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {customNumberPagination(2)}
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>
    );
}

export default QuestionList;