// // pages/[coinId].tsx

// // import CoinInfo from "./components/CoinInfo";

// // const CoinPage = ({ coinId }) => {
// //   return (
// //     <div>
// //       <CoinInfo coinId={coinId} />
// //     </div>
// //   );
// // };

// // export async function getServerSideProps(context) {
// //   const { coinId } = context.query;
// //   return {
// //     props: {
// //       coinId,
// //     },
// //   };
// // }

// // export default CoinPage;

// // ============================

// import React from "react";
// import CoinInfo from "./components/CoinInfo";
// import GetStartedCard from "./components/GetStartedCard";

// const CoinPage = ({ coinId }) => {
//   return (
//     <div className="flex justify-between">
//       {/* <div className="w-3/4"> */}
//       <div className="w-4/6 bg-blue-300">
//         <CoinInfo coinId={coinId} />
//       </div>

//       {/* <div className="w-1/4 pt-11 ml-5"> */}
//       {/* <div className="w-2/6  pt-11 ml-5 mr-12"> */}
//       <div className="w-2/6 bg-red-300">
//         <GetStartedCard />
//       </div>
//     </div>
//   );
// };

// export async function getServerSideProps(context) {
//   const { coinId } = context.query;
//   return {
//     props: {
//       coinId,
//     },
//   };
// }

// export default CoinPage;

// ==========================================

import React from "react";
import CoinInfo from "./components/CoinInfo";
import GetStartedCard from "./components/GetStartedCard";

const CoinPage = ({ coinId }) => {
  return (
    <div className="flex flex-col justify-between h-screen md:flex-row">
      <div className="md:w-4/6 bg-blue-300">
        <CoinInfo coinId={coinId} />
      </div>
      {/* <div className="md:w-2/6 bg-red-300 md:self-end">
        <GetStartedCard />
      </div> */}
      <div className="w-full lg:w-2/6 bg-red-300">
        <GetStartedCard />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { coinId } = context.query;
  return {
    props: {
      coinId,
    },
  };
}

export default CoinPage;
