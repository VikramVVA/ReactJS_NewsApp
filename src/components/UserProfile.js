import React from 'react'

export default function UserProfile() {
  return (
    <>
      <div className="bg-slate-300">
          <div className='flex gap-5 flex-cols'>
            <div>
                <img className='rounded-xl flex justify-center' src="assets/images/user.png" alt="User" />
            </div>
            <div>
                <div>Name</div>
                <div>Last Name</div>
                <div>DOB</div>
                <div>Email Id</div>
                <div>Gender</div>
                <div>Intro</div>
            </div>
          </div>
      </div>
    </>
  )
}

