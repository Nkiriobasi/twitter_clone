import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import Tweets from '../components/Tweets';
import Profile from '../components/Profile';
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from '../firebase';



const Home = () => {
  const [message, setMessage] = useState('');
  const {user, renderImage} = UserAuth();
  
  
  //Handle input change function
  const handleChange = (event) => {
    event.preventDefault();

    setMessage(event.target.value);
  }
  

  const tweetRef = doc(db, 'users', `${user?.email}`);
  //Handle submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await updateDoc(tweetRef, {
        savedTweets: arrayUnion(message)
      });
    } catch (error) {
      console.log(error);
    }

    setMessage('');
  };


  return (
    <>      
      <div className='flex xl:ml-[262px] sm:ml-[82px] ml-[72px] px-3 pt-3 mt-[92px] items-start justify-start space-x-3'>
        <div className="flex flex-col justify-start items-start lg:w-[70%] md:w-2/3 w-full">
          <section className='w-full flex items-start justify-center py-3 sm:px-5 px-2.5 rounded-md bg-[#3b4e5f] mb-5'>
            {renderImage('sm:w-10 w-8 sm:h-10 h-8')}
      
            <div className="flex flex-col items-end justify-start w-full ml-3">
              <span className="block flex-initial w-full">
                <form onSubmit={handleSubmit} className="flex flex-col items-end justify-start">
                  <input 
                    onChange={handleChange}
                    value={message}
                    type="text" 
                    className={`w-full py-2 px-3 bg-[#22303c] rounded-md outline-none border-none
                  placeholder:text-[#d5d8dc] text-[#d5d8dc] md:placeholder:text-[16px] placeholder:text-[14px]`} 
                    placeholder="What's happening?" 
                  />

                  <button
                    className={`bg-[#1DA1F2] px-6 py-2 mt-3 rounded text-white sm:text-base text-sm 
                      ${!user || (user && message === '') ? 'opacity-25 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                    disabled={!user || (user && message === '') ? true : false}
                  >
                    Tweet
                  </button>
                </form>
              </span>        
            </div>
          </section>

          <Tweets /> 
        </div>

        <Profile className='md:flex hidden lg:w-[30%] w-1/3' />
      </div>
    </>
  )
}

export default Home