import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostCreate() {
	const navigate = useNavigate();
	const params = useParams();
	const postId = params.postId;
	const [name, setName] = useState('');
	const [photo, setPhoto] = useState('');
	const [money, setMoney] = useState('');
	const [type, setType] = useState('')

	useEffect(() => {
		getPostById();
	}, []);

	const getPostById = () => {
		fetch('http://localhost:3110/posts/' + postId)
			.then((raw) => raw.json())
			.then((response) => {
				setName(response.name);
				setPhoto(response.photo);
				setMoney(response.money);
				setType(response.type);
			})
			.catch((error) => {});
	};

	const onSubmit = () => {
		if (!name) {
			return alert('Name is required');
		}

		if (!photo) {
			return alert('Photo is required');
		}

		fetch(`http://localhost:3110/posts/` + postId, {
			method: 'PATCH',
			body: JSON.stringify({
				type,
				name,
				photo,
				money,
			}),
		})
			.then((raw) => raw.json())
			.then((response) => {
				if (response) {
					alert('Update Post Successful');
					navigate('/admin/posts');
				}
			})
			.catch((error) => {
				return alert(error.message);
			});
	};

	return (
		<div className="flex items-center justify-center">
			<form className="w-[420px] min-h-[580px] p-[40px] ">
				<input 
					className="w-full h-10 border-gray-300 rounded px-[14px]"
					placeholder="Loại"
					value={type}
					onChange={(event) => setType(event.target.value)}
				/>
				<input
					className="w-full h-10 border border-gray-300 rounded px-[14px]"
					placeholder="Name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<input
					className="w-full h-10 mt-4 border border-gray-300 rounded px-[14px]"
					placeholder="Photo"
					value={photo}
					onChange={(event) => setPhoto(event.target.value)}
				/>
				<input 
					className="w-full h-10 border border-gray-300 rounded px-[14px]"
					placeholder="Giá"
					value={money}
					onChange={(event) => setMoney(event.target.value)}
				/>

				<button
					className="w-full h-10 bg-[#42A7C3] rounded mt-[32px]"
					type="button"
					onClick={onSubmit}
				>
					Update
				</button>
			</form>
		</div>
	);
}
