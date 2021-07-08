import React, { useState, useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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

	// || State
	const [isOpen, setIsOpen] = useState(false);

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
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Navigation;
