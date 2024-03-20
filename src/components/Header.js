/* eslint-disable no-restricted-globals */
import Logo from '../assets/image/logo.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../stores/reducer/usersReducer';

function Header (){
    const email = useSelector((state) => state.users.email);
    const dispacth = useDispatch();
    const onLogout = () => {
        if(confirm('Bạn muốn thoát?')) {
			dispacth(logoutRequest());
		}
    };
    return (
        <header 
        	className={'h-[70px] w-[1440px] max-w-full flex flex-row items-center justify-between'}
		>
            <Link to="/">
                <image scr={Logo} alt="" className="h-[50px] w-[150px]" />
            </Link>
            <div className="space-x-[80px]">
				<Menu href="/contact" label="Contact" />
				<Menu href="/about-us" label="About Us" />
			</div>

            {!!email ? (
				<div className="flex flex-row items-center justify-center gap-4">
					<p className="text-[#FA8443]">{email}</p>
					<button
						onClick={onLogout}
						className="bg-[#FA8443] rounded-lg h-[46px] px-4 text-white flex items-center justify-center	"
					>
						Thoát
					</button>
				</div>
			) : (
				<Link
					to="/login"
					className="bg-[#FA8443] rounded-lg h-[46px] px-4 text-white flex items-center justify-center	"
				>
					<span>Đăng nhập {email}</span>
				</Link>
			)}
        </header>
    );
}
export default Header;