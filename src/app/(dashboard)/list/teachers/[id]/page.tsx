import Image from "next/image"

const SingleTeacherPage = () => {
  return (
    <div className='flex p4 flex-1 flex-col gap-4 xl:flex-row'>
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User info card */}
          <div className="bg-Sky px-6 py-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Teacher" height={144} width={144} className="w-36 h-36 rounded-full object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Nurul Amin</h1>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati maiores quisquam accusamus corrupti enim.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="Blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="Blood" width={14} height={14} />
                  <span>Jan 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="Mail" width={14} height={14} />
                  <span>user@mail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="Phone" width={14} height={14} />
                  <span>01712 568741</span>
                </div>
              </div>
            </div>
          </div>
          {/* Samll Card */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="">
              <Image src="/singleAttendance.png" alt="Attendance" height={24} width={24} className="w-6 h-6"/>
            </div>
            <div className="">
              <h1>90%</h1>
              <span>Attendance</span>
           </div>
          </div>
        </div>
        {/*  */}
        <div className="">Schedule</div>
      </div>
      {/*  */}
      <div className="w-full xl:w-1/3">right</div>
    </div>
  )
}

export default SingleTeacherPage