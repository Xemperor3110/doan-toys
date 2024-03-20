import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
			<div className="grid grid-cols-2 ">
				<Outlet />
			</div>
		</div>
	);
}