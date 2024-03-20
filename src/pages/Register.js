import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);

    const toogleShowPassword = () =>{
        setIsShowPassword(!isShowPassword);
    };
    
    const onLogin = () => {
        if (!email) {
			return alert('Nhập Email');
		}
		if (!emailRegex.test(email)) {
			return alert('Email phải đúng form');
		}
		if (!password) {
			return alert('Nhập Password');
		}
		if (password?.length < 8) {
			return alert('Password phải 8 ký tự');
		}
		if (email !== 'toy@gmail.com' || password !== 'adim3110!') {
			return alert('Email or Password incorrect');
		}

		alert('Đăng nhập thành công: ' + email + ' | ' + password);
		navigate('/');
    };

    return (
        <div>
            <form 
                onSubmit={onLogin}
            >
                <input 
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div>
                    <input 
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                        type={isShowPassword ? 'text' : 'password'}
                     />
                    <button
                        type="button"
                        onClick={toogleShowPassword}
                    >
                        {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
                    </button>
                </div>
                <button
                    type="submit"
                >
                    Đăng Ký
                </button>
                <p>
                    Bạn đã có Tài Khoản{' '}
                    <Link to="/login">
                        {''}
                        Đăng nhập
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login;