import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav
			className="flex justify-between item-center h-16 text-pink-700 relative shadow-sm front-mono"
			role="navigation"
		>
			<Link to="/" className="pl-4">
				MT-09
			</Link>
			<div className="px-4 curser-pointer md:hidden">
				<svg
					className="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="pr-8 md:block">
				<Link className="p-4" to="/">
					Home
				</Link>
				<Link className="p-4" to="/Menu">
					Menu
				</Link>
				<Link className="p-4" to="/About">
					About
				</Link>
				<Link className="p-4" to="/Contract">
					Contract
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
