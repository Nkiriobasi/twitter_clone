import TwitterLogo from '../assets/twitter-logo.png'

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Navbar = () => {
    const { user, logOut } = UserAuth();
    const locationPath = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await logOut();
          navigate('/');
        } catch (error) {
          console.log(error);
        }
    };

  return (
    <nav 
        className={`max-w-[1366px] z-50 fixed top-0 right-0 left-0 bg-[#15202b] 
        ${locationPath.pathname === '/login' || locationPath.pathname === '/signup' ? 'hidden' : null}`}
    >
        <div className="flex items-center justify-between pt-5 px-3 pb-8">
            <div className="flex items-start sm:w-10 w-8 sm:h-10 h-8 cursor-pointer">
                {user ? (
                    <Link to='/home'>
                        <img 
                            src={TwitterLogo} 
                            alt="logo" 
                            className='inline-block object-cover'
                        />
                    </Link>
                ) : (
                    <Link to='/'>
                        <img 
                            src={TwitterLogo} 
                            alt="logo" 
                            className='inline-block object-cover'
                        />
                    </Link>
                )}
            </div>

            {user ? (
                <div>
                    <Link to='/account'>
                        <button className='text-white hover:text-[#1DA1F2] pr-4 sm:text-base text-sm'>My Account</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className='bg-[#1DA1F2] px-6 py-2 rounded cursor-pointer text-white sm:text-base text-sm'
                    >
                        Logout
                    </button>
                </div>
              ) : (
                <div>
                    <Link to='/login'>
                        <button className='text-white hover:text-[#1DA1F2] pr-4 sm:text-base text-sm'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-[#1DA1F2] px-6 py-2 rounded cursor-pointer text-white sm:text-base text-sm'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar