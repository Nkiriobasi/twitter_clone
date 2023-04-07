import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { signUp } = UserAuth();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signUp(email, password);
            toast.success('Registration Successful');

            setTimeout(function(){
                setIsSubmitted(true);
           }, 5000); //Time before execution
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email Already in Use');
            }
            setIsSubmitted(false);
        }
    };

    useEffect(() => {
        if (isSubmitted === true) {
            navigate('/home');
        }
    }, [isSubmitted, navigate]);


  return (
    <>
        <ToastContainer />
        <div className='w-full h-auto mt-[92px] pt-3'>
            <div className='max-w-[450px] mx-auto bg-[#3b4e5f] text-white'>
                <div className='max-w-[320px] mx-auto py-10'>
                    <h1 className={`text-3xl font-bold`}>Sign Up</h1>
    
                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col py-4'
                    >
                        <input
                            onChange={event => setEmail(event.target.value)}
                            className='p-3 my-2 bg-gray-700 rounded'
                            type='email'
                            placeholder='Email'
                            autoComplete='email'
                        />
                        <input
                            onChange={event => setPassword(event.target.value)}
                            className='p-3 my-2 bg-gray-700 rounded'
                            type='password'
                            placeholder='Password'
                            autoComplete='current-password'
                        />

                        <button className='bg-[#1DA1F2] py-3 mt-6 mb-4 rounded font-bold'>
                            Sign Up
                        </button>
                        
                        <p className='pt-8'>
                            <span className='text-white text-sm'>
                                Subscribed to Twitter?
                            </span>{' '}
                            <Link to='/login' className='font-bold'>Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default Signup;

