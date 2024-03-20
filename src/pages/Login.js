import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../stores/reducer/usersReducer';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login(){
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);

    const toogleShowPassword = () =>{
        setIsShowPassword(!isShowPassword);
    };
 
    const onLogin = () => {
        if (!email) {
			return alert('Vui lòng nhập Email');
		}
		if (!emailRegex.test(email)) {
			return alert('Sai Email');
		}
		if (!password) {
			return alert('Vui lòng nhập Mật Khẩu');
		}
		if (password?.length < 8) {
			return alert('Mật khẩu tối thiểu 8 ký(gồm chữ thường, số và ký tự đặc biệt )');
		}

        fetch(`http://localhost:3110/users?email=${email}&password=${password}`)
            .then((raw) => raw.json)
            .then((response) => {

                if(response >0){
                    dispacth(loginRequest({email}));
                    alert('Đăng Nhập Thành Công')
                    navigate('/')
                }else{
                    return alert('Email hoặc Mật Khẩu không đúng')
                }
            })
            .catch((error) => {
                return alert(error.message);
            });
    };
    return (
        <div>
            <form>
                <input 
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div>
                    <input 
                        placeholder="Password"
                        value={password}
                        type={isShowPassword ? 'text' : 'password'}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        onClick={toogleShowPassword}
						type="button"
                    >{isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}</button>
                </div>

                <button
                    type="button"
					onClick={onLogin}
                >Login</button>
                <p>
                    Bạn đã có Tài Khoản
                    <Link
						className="text-[#42A7C3] font-semibold"
						to="/register"
					>
						{' '}
						Register
					</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;