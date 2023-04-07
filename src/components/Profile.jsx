import { UserAuth } from '../context/AuthContext';


const Profile = ({className}) => {
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
        <section className={`flex-col items-center justify-start rounded-md bg-[#3b4e5f] ${className}`}>
            <div className="px-2 pt-8 pb-4 flex flex-col items-center">
                {renderImage('lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] mb-4')}
            
                <h3 className="text-white lg:text-lg text-base text-center">
                    {handleDisplayName()}
                </h3>
                <h3 className="text-slate-400 text-sm text-center">{user ? user.email : null}</h3>
                <p className="text-slate-300 text-sm max-w-[200px] mx-auto text-center">{user ? user.phoneNumber : null}</p>
            </div>
            
            <h3 className="text-[#1DA1F2] py-8 px-2 text-base w-full text-center border-t border-slate-500 border-solid">My profile</h3>
        </section>
    </>
  )
}

export default Profile