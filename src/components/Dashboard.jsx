// src/components/Dashboard.js
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { VscRepoClone } from "react-icons/vsc";




const Dashboard = () => {
  return (
    <>
    <h1 className="text-2xl font-bold px-5 p-2 mt-2 " >Dashboard</h1>
      <div className="p-4">
          <div className="flex rounded-2xl  w-full gap-4  ">
              {/* Total Students */}
              <div  className="w-[65%] flex flex-col  gap-4 rounded-2xl ">
                <div className="bg-white rounded-2xl " >            
               <div className="bg-white relative p-6 flex rounded-lg ">
                   <div className="mt-2 bg-orange-50 p-4 rounded">
                   <FaPeopleGroup className="text-5xl text-orange-300"/>
                   </div>
                   <div className="px-3 flex flex-col justify-center " >
                  <h2 className="font-semibold text-xl">Total Students</h2> 
                  <p className="text-4xl">1,290</p>
                  </div>
                  <div className="absolute right-8 top-[30%] ">
                  <FaArrowRightLong className="text-5xl text-orange-200" />

                  </div>
              </div>
              <div className="px-4 py-2 mx-4 bg-gray-100 text-gray-900 font-semibold ">
                Statuses
              </div>
              <div className="flex justify-evenly items-center py-4">
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <h1 className="text-gray-600 text-lg font-semibold">Suspended</h1>
                      <h1 className="text-black text-2xl">1,234</h1>
                    </div>

                    <hr className="h-14 border-l border-gray-300 mx-4" />

                    <div className="flex flex-col gap-2 justify-center items-center">
                      <h1 className="text-gray-600 text-lg font-semibold">Struck off</h1>
                      <h1 className="text-black text-2xl">50</h1>
                    </div>

                    <hr className="h-14 border-l border-gray-300 mx-4" />

                    <div className="flex flex-col gap-2 justify-center items-center">
                      <h1 className="text-gray-600 text-lg font-semibold">Pending</h1>
                      <h1 className="text-black text-2xl">6</h1>
                    </div>
                  </div>
                  <div className="px-4 py-2 mx-4 bg-gray-100 text-gray-900 font-semibold ">
                  Attendencs
              </div>
              <div className="flex justify-evenly items-center py-4">
                <div className="flex flex-col gap-2 justify-center items-center ">
                  <h1 className="text-gray-600 text-lg font-semibold" >Suspended</h1>
                  <h1 className="text-black text-2xl">1,234</h1>
                  </div>
                  <hr className="h-14 border-l border-gray-300 mx-4" />

                <div className="flex flex-col justify-center gap-2 items-center">
                  <h1 className="text-gray-600 text-lg font-semibold">Struck off</h1>
                  <h1 className="text-black text-2xl font-">50</h1>
                  </div>
                  <hr className="h-14 border-l border-gray-300 mx-4" />

                <div className="flex flex-col  justify-center gap-2 items-center">
                  <h1 className="text-gray-600 text-lg font-semibold">Pending</h1>
                  <h1 className="text-black text-2xl">6</h1>
                  </div>

              </div>
     
              </div>

              <div className=" w-full  flex gap-4 rounded-2xl">
                <div className=" flex flex-col gap-4 w-[50%] bg-white rounded-2xl">

                <div className="bg-white rounded-2xl relative p-6 flex ">
                   <div className="mt-2 bg-blue-100 p-4 rounded-2xl">
                   <TbReportSearch className="text-5xl text-blue-800"/>
                   </div>
                   <div className="px-3 flex flex-col justify-center " >
                  <h2 className="font-semibold text-xl">Accounts (Total Fee)</h2> 
                  <p className="text-4xl">Rs. 12930.00/-</p>
                  </div>
                  <div className="absolute right-8 top-[33%] ">
                  <FaArrowRightLong className="text-5xl text-blue-800" />
                  </div>
                </div>
                <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">Received Amount</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-orange-300 h-2 rounded" style={{ width: '60%' }}></div>

                          </div>
                          <span className="ml-2" >Rs. 124.00</span>

                          
                      </div>
                  </div>
                  <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">Pending Amount</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-blue-700 h-2 rounded" style={{ width: '40%' }}></div>

                          </div>
                          <span className="ml-2" >Rs. 12134.00</span>

                          
                      </div>
                  </div>
               
                </div>

                <div className=" w-[50%] flex flex-col gap-4">
                
                <div className="bg-white relative p-6 flex rounded-2xl ">
                   <div className="mt-2 bg-orange-50 p-4 rounded">
                   <FaPeopleGroup className="text-5xl text-green-300"/>
                   </div>
                   <div className="px-3 flex flex-col justify-center " >
                  <h2 className="font-semibold text-xl">Total Teachers</h2> 
                  <p className="text-4xl">30</p>
                  </div>
                  <div className="absolute right-8 top-[33%] ">
                  <FaArrowRightLong className="text-5xl text-green-600" />

                  </div>
                 </div>

                 <div className="bg-white relative p-6 flex rounded-2xl ">
                   <div className="mt-2 bg-orange-50 p-4 rounded">
                   <CiFlag1 className="text-5xl text-red-800"/>
                   </div>
                   <div className="px-3 flex flex-col justify-center " >
                  <h2 className="font-semibold text-xl">Upcoming Events</h2> 
                  <p className="text-4xl">30</p>
                  </div>
                  <div className="absolute right-8 top-[33%] ">
                  <FaArrowRightLong className="text-5xl text-red-800" />
    

                  </div>
                </div>


                </div>
              </div>
              </div>

              {/* Exam Percentage */}
              <div className="w-[35%]">
              <div className="bg-white  p-6 rounded-lg shadow">
              <div className="bg-white relative p-4 flex gap-4 rounded-2xl ">
                   <div className="mt-2 bg-green-100 p-4 rounded">
                   <VscRepoClone className="text-5xl text-green-900"/>

                   </div>
                   <div className="px-3 flex flex-col gap-0 justify-center " >
                  <h2 className="font-semibold text-xl">Exam Total percentage</h2> 
                  <p className="text-4xl">80%</p>
                  </div>
                  <div className="absolute right-6 top-[33%] ">
                  <FaArrowRightLong className="text-5xl text-green-900" />

                  </div>
                 </div>
                 <div className=" flex flex-col gap-2">
                 <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">10th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex  bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-green-700 h-2 rounded" style={{ width: '80%' }}></div>

                          </div>
                          <span className="ml-2" >80%</span>

                          
                      </div>
                  </div>
                  <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">9th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                          <div className="bg-green-700 h-2 rounded" style={{ width: '80%' }}></div>

                          </div>
                          <span className="ml-2" >80%</span>

                          
                      </div>
                  </div><div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">8th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                          <div className="bg-green-700 h-2 rounded" style={{ width: '80%' }}></div>

                          </div>
                          <span className="ml-2" >80%</span>

                          
                      </div>
                  </div><div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">7th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-orange-300 h-2 rounded" style={{ width: '40%' }}></div>

                          </div>
                          <span className="ml-2" >40%</span>

                          
                      </div>
                  </div><div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">6th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-orange-300 h-2 rounded" style={{ width: '70%' }}></div>

                          </div>
                          <span className="ml-2" >70%</span>

                          
                      </div>
                  </div><div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">5th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-orange-300 h-2 rounded" style={{ width: '50%' }}></div>

                          </div>
                          <span className="ml-2" >50%</span>

                          
                      </div>
                  </div><div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">4th</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-orange-300 h-2 rounded" style={{ width: '60%' }}></div>

                          </div>
                          <span className="ml-2" >60%</span>

                          
                      </div>
                  </div>
                  <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">3rd</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-orange-300 h-2 rounded" style={{ width: '30%' }}></div>

                          </div>
                          <span className="ml-2" >30%</span>

                          
                      </div>
                  </div>
                  <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">2nd</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-red-500 h-2 rounded" style={{ width: '10%' }}></div>

                          </div>
                          <span className="ml-2" >10%</span>

                          
                      </div>
                  </div>
                  <div className="bg-white">
                  <h1 className="px-4 font-semibold text-gray=800 ">1st</h1>
                      <div className="flex  items-center">
                          
                          <div className="w-[75%] flex bg-gray-200  h-2 rounded ml-2">
                              <div className="bg-red-500 h-2 rounded" style={{ width: '20%' }}></div>

                          </div>
                          <span className="ml-2" >20%</span>

                          
                      </div>
                  </div>
                  </div>
              </div>
            </div>
              {/* Add other sections (Statuses, Attendance, Accounts, etc.) */}
          </div>
      </div>
      </>
  );
};

export default Dashboard;
