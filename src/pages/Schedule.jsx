import React from "react";
import TicketsSection from "../components/tickets-section";
import Gallery from "../components/Gallery";
import YTDisplay from "../components/YTDisplay";
import ScheduleComponent from "../components/2024/Schedule/ScheduleComponent";

const Schedule = () => {
  return (
    <main className="emboss-bg">
      <section className="pt-24  w-full text-sealBrown ">
        <div className="w-[90%] mx-auto xl:max-w-[1200px]">
          <h2 className="oswald-font capitalize text-4xl font-bold md:text-5xl lg:text-6xl py-6 md:py-10 border-b border-b-[rgba(204,195,200,1)]">
            schedule
          </h2>

          <ScheduleComponent />
        </div>
        <TicketsSection />
        <Gallery />
        <YTDisplay />
      </section>
    </main>
  );
};

export default Schedule;
// import { ScheduleTable } from "../components/Schedule";
// import { Marquee } from "../components/Marquee";
// import gear from "../assets/images/gear.svg";
// import gear2 from "../assets/images/gear2.svg";
// import gearFull from "../assets/images/gear-full.svg";
// import curves from "../assets/images/curved-line.svg";
// import wavy from "../assets/images/wavy.svg";
// import arrowDown from "../assets/icons/arrow-down.svg";

// const Schedule = () => {
//   const goToSchedule = () => {
//     window.scrollTo({
//       top: 720,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <>
//       <div className="hero sm:pt-8 min-h-[670px] flex justify-center items-center relative">
//         <div className="text-center">
//           <h1 className=" text-4xl lg:text-[64px] font-extrabold">
//             Schedule
//             <img src={wavy} alt="" className="mx-auto opacity-10" />
//           </h1>
//           <p className="uppercase text-primary-pink font-semibold text-sm sm:text-base lg:text-[18px] mt-3 mb-1.5">
//             Dive into a Day of Inspiration and Learning
//           </p>
//           <p className="max-w-2xl leading-7 text-sm sm:text-base lg:text-[18px] font-medium text-[#210D15]">
//             The summit schedule consists of empowering sessions and enlightening
//             discussions that pave the way for exploration, connection, and
//             growth.
//           </p>
//         </div>
//         <div className="absolute z-0 opacity-50">
//           <img src={curves} alt="" />
//         </div>
//         <img
//           src={gear}
//           alt=""
//           className="absolute -right-8 top-3 w-24 h-24 sm:w-32 sm:h-36 lg:w-44 lg:h-44 xl:w-auto xl:h-auto"
//         />
//         <img
//           src={gear2}
//           alt=""
//           className="absolute right-0 top-24 sm:top-32 lg:top-44 xl:top-52 w-24 h-24 sm:w-32 sm:h-36 lg:w-44 lg:h-44 xl:w-auto xl:h-auto"
//         />
//         <img
//           src={gearFull}
//           alt=""
//           className="absolute -left-3 md:-left-10 bottom-24 w-24 h-24 sm:w-32 sm:h-36 lg:w-44 lg:h-44 xl:w-auto xl:h-auto"
//         />
//         <button
//           onClick={goToSchedule}
//           className="absolute bottom-6 right-[10%] md:right-[5%] hover:scale-105 transition-transform duration-300 ease-in-out"
//         >
//           <img src={arrowDown} alt="" />
//         </button>
//       </div>
//       <Marquee />
//       <ScheduleTable />
//     </>
//   );
// };

// export default Schedule;
