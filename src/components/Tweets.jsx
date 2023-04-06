import { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import Spinner from '../components/Spinner';




const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const {user, renderImage} = UserAuth();


    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setTweets(doc.data()?.savedTweets);
        });
    }, [user?.email]);



    const tweetRef = doc(db, 'users', `${user?.email}`)

    const deleteTweet = async (passedID) => {
        try {
            const result = tweets.filter((tweet, index) => `${tweet}-${index}` !== passedID)
            await updateDoc(tweetRef, {
            savedTweets: result
        })
        } catch (error) {
            console.log(error)
        }
    }



    if (user?.email && tweets !== undefined) {
        return (
            <>
                {tweets.map((tweet, index) => (
                    <section 
                        key={`${tweet}-${index}`}
                        className="w-full flex items-start bg-[#3b4e5f] py-3 px-5 rounded-md mx-auto relative mb-2.5"
                    >
                        {renderImage('sm:w-10 w-8 sm:h-10 h-8')}

                        <p 
                            onClick={()=> deleteTweet(`${tweet}-${index}`)} 
                            className='absolute text-gray-300 top-2 right-2 cursor-pointer hover:bg-[#15202b]'
                        >
                            <AiOutlineClose />
                        </p>
        
                        <div 
                            className='w-full h-full text-white ml-3 flex flex-col items-start justify-start space-y-8'
                        >
                            <h3 className="text-xs font-bold text-[#1DA1F2]">{user ? user.email : null}</h3>
                            <p className='text-xs md:text-sm'>
                                {tweet}
                            </p>
                        </div>
                    </section>
                ))}
            </>
        )
    } 
    
    else if (user?.email && tweets === undefined) {
        return (
            <>
                <div className="w-full flex justify-center mt-5">
                    <Spinner />
                </div>
            </>
        )
    }
    

    else if (user?.email && tweets.length === 0) {
        return (
            <>
                <h3 className="w-full mt-5 text-center md:text-xl text-base text-white">
                    Hey there, you have not made a tweet yet.
                </h3>
            </>
        )
    }
    
    else {
        return (
            <>
                <h3 className="w-full mt-5 text-center md:text-xl text-base text-white">
                    Hey there, please you have to be logged in to post a tweet.
                </h3>
            </>
        )
    }
};

export default Tweets;