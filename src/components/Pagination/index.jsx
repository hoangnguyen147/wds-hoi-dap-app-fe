import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './styles.scss';

const customNumberPagination = (firstPagiShow) => {
    return (
        <React.Fragment>
            <PaginationItem>
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

const MyPagination = ({firstPagiShow, ...props}) => {
    return (
        <Pagination size="lg" aria-label="Page navigation example" className="pagination">
            <PaginationItem>
                <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            {customNumberPagination(firstPagiShow)}
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    );
}

export default MyPagination;