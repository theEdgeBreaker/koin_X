// pages/[coinId].tsx

// import CoinInfo from "./components/CoinInfo";

// const CoinPage = ({ coinId }) => {
//   return (
//     <div>
//       <CoinInfo coinId={coinId} />
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

// ============================

import React from "react";
import CoinInfo from "./components/CoinInfo";

const CoinPage = ({ coinId }) => {
  return (
    <div>
      <CoinInfo coinId={coinId} />
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
