interface Props {
  className?: string;
  name: string;
  typeB?: "submit" | "reset" | "button";
}

const Button = ({ className, name, typeB = "button" }: Props) => {
  return (
    <button
      type={typeB}
      className={`${className} bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[18px] h-[52px] md:h-[60px]`}
    >
      {name}
    </button>
  );
};

export default Button;
