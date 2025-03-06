import "./style.css";

interface ChildrenType {
  children: React.ReactNode;
}

const Menu = ({ children }: ChildrenType) => {
  return (
    <div className=" hidden lg:block MenuCont absolute">
      <div className="cont relative">{children}</div>
    </div>
  );
};

export default Menu;