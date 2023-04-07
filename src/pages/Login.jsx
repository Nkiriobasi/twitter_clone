import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { signInWithEmail, signInWithGoogle } = UserAuth();
    const navigate = useNavigate();
    

    const handleSignInWithEmail = async (event) => {
        event.preventDefault();

        try {
            await signInWithEmail(email, password);
            toast.success('Logged in Successfully');

            setTimeout(function(){
                setIsSubmitted(true);
           }, 5000); //Time before execution
        } catch (error) {
            if(error.code === 'auth/wrong-password'){
                toast.error('Please check the Password');
            }
            if(error.code === 'auth/user-not-found'){
                toast.error('Please check the Email');
            }
            setIsSubmitted(false);
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
        <ToastContainer />
        <div className='w-full h-auto mt-[92px] pt-3'>
            <div className='max-w-[450px] mx-auto bg-[#3b4e5f] text-white'>
                <div className='max-w-[320px] mx-auto py-10'>
                    <h1 className={`text-3xl font-bold`}>Login</h1>

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

                        <button 
                            className="bg-red-400 py-3 mb-4 rounded font-bold opacity-25 cursor-not-allowed" 
                            onClick={handleSignInWithGoogle}
                            disabled={true}
                        >
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

