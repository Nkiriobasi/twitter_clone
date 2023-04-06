import TwitterLogo from '../assets/twitter-logo.png'

import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Navbar = () => {
    const { user, logOut } = UserAuth();
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
    <nav className='w-full'>
        <div className="flex items-center justify-between pt-5 pb-8">
            <div className="flex items-start w-10 h-10 cursor-pointer">
                <span className="block">
                   <Link to='/'>
                        <img 
                            src={TwitterLogo} 
                            alt="logo" 
                            className='block object-cover'
                        />
                    </Link>
                </span>
            </div>

            {user ? (
                <div>
                    <Link to='/account'>
                        <button className='text-white hover:text-[#1DA1F2] pr-4'>My Account</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className='bg-[#1DA1F2] px-6 py-2 rounded cursor-pointer text-white'
                    >
                        Logout
                    </button>
                </div>
              ) : (
                <div>
                    <Link to='/login'>
                        <button className='text-white hover:text-[#1DA1F2] pr-4'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-[#1DA1F2] px-6 py-2 rounded cursor-pointer text-white'>
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