import React from "react";
import { Jumbotron } from "reactstrap";
import "./styles/Header.css";

const Header = () => {
	return (
		<Jumbotron className='mb-0 header'>
			<header className='text-center'>
				<h1 className='my-4 text-center'>
					<a href='/' className='header__link'>
						Video App
					</a>
				</h1>
			</header>
		</Jumbotron>
	);
};

export default Header;
