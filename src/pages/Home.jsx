import React, { useEffect, useState } from 'react';
import alldata from '../components/Projectedata';

const Home = () => {
  const [data, updata] = useState(alldata);
  


  // ==========Animation start from here
  const resetAnimation = () => {
    let cardOne = document.querySelectorAll('.cardOne');
    cardOne.forEach((item) => {
      item.classList.remove('animetion');
      void item.offsetWidth; 
      item.classList.add('animetion');
    });
  };
  // ==========Animation and the




  // ===========Filter function
  const navigat = (studantCatagury) => {
    const FilterCatagury = alldata.filter((filterControl) => {
      return filterControl.category === studantCatagury;
    });
    updata(FilterCatagury);
    resetAnimation(); 
  };

  useEffect(() => {
    resetAnimation();
  }, [data]);

  


  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-[80%] h-[80px] flex justify-end bg-[#47cf82] mt-10">
          <ul className='flex items-center gap-6 pr-10'>
            <li>
              <button
                onClick={() => { updata(alldata); resetAnimation(); }}
                className='hover:text-[#fff] active:scale-110 transition-all font-medium text-[20px]'
              >
                Everybody
              </button>
            </li>
            <li>
              <button
                onClick={() => { navigat('male'); resetAnimation(); }}
                className='hover:text-[#fff] active:scale-110 transition-all font-medium text-[20px]'
              >
                Male
              </button>
            </li>
            <li>
              <button
                onClick={() => { navigat('female'); resetAnimation(); }}
                className='hover:text-[#fff] active:scale-110 transition-all font-medium text-[20px]'
              >
                Female
              </button>
            </li>
            <li>
              <button
                onClick={() => { navigat('kid'); resetAnimation(); }}
                className='hover:text-[#fff] active:scale-110 transition-all font-medium text-[20px]'
              >
                Kid
              </button>
            </li>
            <li>
              <button
                onClick={() => { navigat('elder'); resetAnimation(); }}
                className='hover:text-[#fff] active:scale-110 transition-all font-medium text-[20px]'
              >
                Elder
              </button>
            </li>
          </ul>
        </div>
        <div className="w-[80%] flex flex-wrap gap-10 justify-evenly pt-5 h-full bg-[#44ff2b] mt-5">
          {data.map((prity, ex) => (
            <div key={ex} className="cardOne w-[250px] h-[400px] bg-[#6bc3fa] rounded-2xl flex flex-col items-center animetion">
              <div className="w-[200px] h-[200px]">
                <img className='w-[200px] h-[200px] rounded-full' src={prity.image} alt="student profile" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-center">
                  <h2 className='text-[17px] text-[#fff]'>Name: {prity.name}</h2>
                </div>
                <p className='text-[#dddddd] text-center'>Address :{prity.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
