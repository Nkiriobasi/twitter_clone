import { UserAuth } from '../context/AuthContext';


const Profile = () => {
    const {user, renderImage} = UserAuth();

    const handleDisplayName = () => {
        if(!user){
            return <span>{'Anonymous'}</span>
        }
        if(user && user.displayName === null){
            return null
        }else {
            return <span>{user.displayName}</span>
        }
    }

  return (
    <>
        <section className='flex flex-col items-center justify-start rounded-md w-1/3 bg-[#3b4e5f] pt-8'>
            {renderImage('md:w-[80px] w-[60px] md:h-[80px] h-[60px] mb-4')}
            
            <h3 className="text-white text-lg text-center">
                {handleDisplayName()}
            </h3>
            <h3 className="text-slate-400 text-sm text-center">{user ? user.email : null}</h3>
            <p className="text-slate-300 text-sm max-w-[200px] mx-auto text-center mb-4">{user ? user.phoneNumber : null}</p>

            
            <h3 className="text-[#1DA1F2] py-8 text-base w-full text-center border-t border-slate-500 border-solid">My profile</h3>
        </section>
    </>
  )
}

export default Profile