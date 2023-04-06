import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { signInWithEmail, signInWithGoogle } = UserAuth();
    const navigate = useNavigate();
    

    const handleSignInWithEmail = async (event) => {
        event.preventDefault();

        setIsSubmitted(true);

        try {
            await signInWithEmail(email, password);
        } catch (error) {
            setError(error.message);
        }
    };
    

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        navigate('/')
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
                    <h1 className={`text-3xl font-bold ${error ? 'pb-4' : 'pb-0'}`}>Login</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}

                    <div
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

                        <button className='bg-[#1DA1F2] py-3 mt-6 mb-4 rounded font-bold' onClick={handleSignInWithEmail}>
                            Login 
                        </button> 

                        <button className="bg-red-400 py-3 mb-4 rounded font-bold" onClick={handleSignInWithGoogle}>
                            Login with Google
                        </button>

                        <p className='pt-8'>
                            <span className='text-white text-sm'>
                                Are you new to Twitter?
                            </span>{' '}
                            <Link to='/signup' className='font-bold'>Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;

