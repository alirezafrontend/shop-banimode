const BtnMin = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="p-[5px] border-[1px] border-[#d6d5d5] rounded-[6px] cursor-pointer"
    >
      <img className="w-[15px]" src="/icons/min.svg" alt="" />
    </button>
  );
};

export default BtnMin;
