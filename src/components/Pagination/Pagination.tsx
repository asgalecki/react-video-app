import React, { useContext } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { UserContext } from "../../contexts/UserContext";
import paginationEventHandler from "../../service/pagination/paginationEventHandler";
import "./styles/Pagination.css";

const VideoPagination = () => {
	// || Context
	const { user, dispatchUser } = useContext(UserContext);
	const { pages, selected } = user;

	// || Event handler
	const handleClick = (e: any): void => {
		const order = e.target.lastChild.data || e.target.innerText[0];
		const paginate = paginationEventHandler(order, selected, pages);
		dispatchUser({ type: "SELECT", select: paginate });
	};

	// || Service
	const renderPageNumbers = pages.map((page: string) => {
		return (
			<PaginationItem
				className={page === selected ? "pagination__selected" : ""}
				key={`pagination-item-${page}`}
			>
				<PaginationLink
					className='pagination__item'
					key={`pagination-${page}`}
					id={page}
					href='#'
				>
					{page}
				</PaginationLink>
			</PaginationItem>
		);
	});

	// || Render
	if (!renderPageNumbers.length) {
		return <div className='p-5' data-testid='no-pagination' />;
	}

	return (
		<section className='my-2 d-flex justify-content-center'>
			<Pagination aria-label='Page navigation' onClick={handleClick}>
				<PaginationItem>
					<PaginationLink className='pagination__item' first href='#' />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink className='pagination__item' previous href='#' />
				</PaginationItem>
				{renderPageNumbers}
				<PaginationItem>
					<PaginationLink className='pagination__item' next href='#' />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink className='pagination__item' last href='#' />
				</PaginationItem>
			</Pagination>
		</section>
	);
};

export default VideoPagination;
