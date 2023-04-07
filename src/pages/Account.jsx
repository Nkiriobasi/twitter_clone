import Tweets from "../components/Tweets"
import Profile from '../components/Profile';


const Account = () => {
  return (
    <>
      <div className="flex flex-col xl:ml-[262px] sm:ml-[82px] ml-[72px] px-3 pt-3 items-start justify-start space-y-12 mt-[92px]">
        <Profile className='flex w-full' />

        <section className="flex flex-col items-center justify-start w-full">
          <h3 className='mb-4 text-lg text-white font-bold text-center'>My Tweets</h3>
          <Tweets />
        </section>
      </div>
    </>
  )
}

export default Account