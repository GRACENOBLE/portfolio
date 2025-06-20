const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="
        text-sm px-8
        bg-noble-green text-white border border-black rounded
        transition duration-200
        hover:bg-accent hover:text-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_black]
        active:translate-x-0 active:translate-y-0 active:shadow-none
        cursor-pointer
      "
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
