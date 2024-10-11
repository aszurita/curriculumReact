import { profile } from "../../../data/Profile"
import SocialMedia from "../HomeDiv/components/socialmedia.jsx";

function Profile() {
  return (
    <div className="flex flex-col place-content-center place-items-center">
      <div >
        <img src="assets/profile/profile.jpg" alt="profile" className="w-40 h-40" />
      </div>
      <div className="flex flex-col place-content-center place-items-center text-center">
        <h1 className="font-bold font-roboto-slab text-2xl py-3">Angelo Saul Zurita Guerrero</h1>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gray-400 font-montserrat">{profile.areas}</p>
          <p className="text-gray-400 font-montserrat">{profile.gmail}</p>
          <div className="font-roboto-slab text-[#808080] px-5 pt-4 pb-6 gap-5">
            <p className="px-10">
              <i>" {profile.phrase} "</i>
            </p>
          </div>
        </div>
        <div className="flex place-content-center place-items-center gap-10  max-sm:gap-5">
          <SocialMedia sm={true} type='github' />
          <SocialMedia sm={true} type='linkedin' />
          <SocialMedia sm={true} type='X' />
        </div>
      </div>
    </div>
  )
}
export default Profile;