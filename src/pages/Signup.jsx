import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { signUp } = UserAuth();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitted(true);

        try {
            await signUp(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (isSubmitted === true) {
            navigate('/');
        }
    }, [isSubmitted, navigate]);


  return (
    <>
        <div className='w-full h-auto'>
            <div className='max-w-[450px] mx-auto bg-[#3b4e5f] text-white'>
                <div className='max-w-[320px] mx-auto py-10'>
                    <h1 className={`text-3xl font-bold ${error ? 'pb-4' : 'pb-0'}`}>Sign Up</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col py-4'
                    >
                        <input
                            onChange={event => setEmail(event.target.value)}
                            className='p-3 my-2 bg-gray-700 rouded'
                            type='email'
                            placeholder='Email'
                            autoComplete='email'
                        />
                        <input
                            onChange={event => setPassword(event.target.value)}
                            className='p-3 my-2 bg-gray-700 rouded'
                            type='password'
                            placeholder='Password'
                            autoComplete='current-password'
                        />

                        <button className='bg-[#1DA1F2] py-3 my-6 rounded font-bold'>
                            Sign Up
                        </button>
                        
                        <div className='flex justify-between items-center text-sm text-white'>
                            <p>
                                <input className='mr-2' type='checkbox' />
                                Remember me
                            </p>
                            <p>Need Help?</p>
                        </div>
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

