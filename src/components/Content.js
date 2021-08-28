import React from 'react';
import mt09_1 from '../images/MT09-4.jpg';
import mt09_2 from '../images/MT09-2.jpg';
const Content = () => {
	return (
		<>
			<div className=" flex flex-col justify-center items-center bg-white h-screen font-nmono py-48">
				<img
					src={mt09_1}
					alt=""
					className="h-full rounded mb-20 shadow"
				/>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl mb-2">MT09</h2>
					<p className="mb-2">CC:847 ,pawer : 117 ph</p>
				</div>
			</div>
			<div className=" flex flex-col justify-center items-center bg-white h-screen font-nmono py-48">
				<img
					src={mt09_2}
					alt=""
					className="h-full rounded mb-20 shadow"
				/>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl mb-2">MT09</h2>
					<p className="mb-2">CC:847 ,pawer : 117 ph</p>
				</div>
			</div>
		</>
	);
};

export default Content;
