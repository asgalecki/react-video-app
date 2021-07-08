import React, { useState, useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { UserContext } from "../../contexts/UserContext";
import { faTrashAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarToggler,
	NavItem,
	NavLink,
	UncontrolledDropdown,
} from "reactstrap";
import "./styles/Navigation.css";

const Navigation = () => {
	// || Context
	const { dispatchVideo } = useContext(VideoContext);
	const { dispatchUser } = useContext(UserContext);

	// || State
	const [isOpen, setIsOpen] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);

	// || Event handler
	const handleOpen = (): void => {
		setIsOpen(!isOpen);
	};

	const handleRemoveAll = (): void => {
		dispatchVideo({ type: "REMOVE_ALL_VIDEOS" });
	};

	const handleFilter = (e: any): void => {
		const sortFilter = e.target.innerHTML.toLowerCase();
		dispatchVideo({ type: "SORT_VIDEOS", sortFilter });
	};

	const handleFavourite = () => {
		dispatchUser({
			type: "TOGGLE_FAVOURITE",
			isFavourite: !isFavourite,
		});
		setIsFavourite(!isFavourite);
	};

	// || Render
	return (
		<Navbar expand='md' className='navbar navbar-dark navigation'>
			<NavbarToggler onClick={handleOpen} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className='ml-auto' navbar>
					<NavItem onClick={handleRemoveAll}>
						<NavLink href='#'>
							<FontAwesomeIcon icon={faTrashAlt} /> Remove All
						</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Filter by:
						</DropdownToggle>
						<DropdownMenu right className='navigation__dropdown'>
							<DropdownItem
								className='navigation__dropdown'
								onClick={(e) => handleFilter(e)}
							>
								Latest
							</DropdownItem>
							<DropdownItem
								className='navigation__dropdown'
								onClick={(e) => handleFilter(e)}
							>
								Oldest
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<NavItem>
						<NavLink>
							<FontAwesomeIcon
								icon={faStar}
								onClick={handleFavourite}
								className={`navigation__icon ${
									isFavourite ? "navigation__icon--active" : ""
								}`}
								data-testid='filter-favourite'
							/>
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Navigation;
