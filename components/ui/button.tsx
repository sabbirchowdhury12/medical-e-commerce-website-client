const Button = ({ children }: any) => {
  return (
    <div className="flex gap-4">
      <button className="relative flex h-[60px] w-40 items-center justify-center  hover:border-black overflow-hidden bg-secondary_1 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  hover:text-black before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
        <span className="relative z-10 font-sans text-lg font-semibold">
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;
