import { Link } from 'react-router-dom';
import { RiHome2Line, RiHome2Fill } from 'react-icons/ri';
import { AiOutlineAccountBook, AiFillAccountBook } from 'react-icons/ai';
import { MdOutlineMore, MdMore } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Sidebar = () => {
    const {user} = UserAuth();
    const locationPath = useLocation();

  return (
    <header 
        className={`rounded-md h-auto xl:w-[250px] w-auto ml-3 p-2.5 fixed top-0 left-0 z-10 overflow-x-hidden mt-[104px] 
        bg-[#3b4e5f] space-y-2 ${locationPath.pathname === '/login' || locationPath.pathname === '/signup' ? 'hidden' : null}`}
    >
        <Link 
            to='/' 
            className={`flex items-center sm:justify-start justify-center space-x-3 p-2.5 
            hover:bg-[#15202b] rounded-md tooltip ${locationPath.pathname === '/' ? 'bg-[#15202b]' : 'bg-[#3b4e5f]'}`}
        >
            {locationPath.pathname === '/' 
            ? 
            <RiHome2Fill className='sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]' />
            :
            <RiHome2Line className='sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]' />
            }
            <span className='xl:inline-block hidden font-semibold text-lg tooltiptext'>Home</span>
        </Link>

        <span className="block">
            {!user 
            ?
            <span  
                className={`flex items-center sm:justify-start justify-center space-x-3 p-2.5 
                hover:bg-[#15202b] rounded-md tooltip opacity-25 cursor-not-allowed`}
            >
                <AiOutlineAccountBook className='sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]' />
                <span className='xl:inline-block hidden font-semibold text-lg tooltiptext'>Account</span>
            </span>
            :
            <Link 
                to='/account' 
                className={`flex items-center sm:justify-start justify-center space-x-3 p-2.5 
                hover:bg-[#15202b] rounded-md tooltip opacity-100 cursor-pointer ${locationPath.pathname === '/account' ? 'bg-[#15202b]' : 'bg-[#3b4e5f]'}`}
            >
                {locationPath.pathname === '/account' 
                ? 
                <AiFillAccountBook className='sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]' />
                :
                <AiOutlineAccountBook className='sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]' />
                }
                <span className='xl:inline-block hidden font-semibold text-lg tooltiptext'>Account</span>
            </Link>
            }
        </span>

        <Link 
            to='/more' 
            className={`flex items-center justify-start space-x-3 p-2.5 
            hover:bg-[#15202b] rounded-md tooltip ${locationPath.pathname === '/more' ? 'bg-[#15202b]' : 'bg-[#3b4e5f]'}`}
        >
            {locationPath.pathname === '/more' 
                ? 
                <MdMore className='sm:w-[28px] w-[18px] sm:h-[28px] h-[18px]' />
                :
                <MdOutlineMore className='sm:w-[28px] w-[18px] sm:h-[28px] h-[18px]' />
            }
            <span className='xl:inline-block hidden font-semibold text-lg tooltiptext'>More</span>
        </Link>
    </header>
  )
}

export default Sidebar