import React from "react";
import CoinInfo from "./components/CoinInfo";

const CoinPage = ({ coinId }) => {
  return (
    <div>
      <div className="w-full lg:w-4/6 ">
        <CoinInfo coinId={coinId} />
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
