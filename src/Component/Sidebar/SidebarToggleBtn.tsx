import React from "react";
import { animated, useTransition } from "@react-spring/web";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface SidebarOpen {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SidebarToggleBtn: React.FC<SidebarOpen> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const Transition = useTransition(sidebarOpen, {
    from: { opacity: 1 },
    enter: { opacity: 1, delay: 300 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });
  const handleSidebarToggleIcon = () => {
    const MyIoMdClose = animated(IoMdClose);
    const MyFiMenu = animated(FiMenu);
    return Transition((style, item) =>
      item ? (
        <MyIoMdClose
          className="absolute w-full h-full text-white"
          style={style}
        />
      ) : (
        <MyFiMenu className="absolute w-4/5 text-white h-4/5" style={style} />
      )
    );
  };

  return (
    <div
      className={
        " fixed flex items-center justify-center w-12 h-12 bg-gray-800 rounded-sm lg:hidden top-6 right-6 text-white"
      }
      onClick={() => {
        setSidebarOpen((value) => !value);
      }}
    >
      {handleSidebarToggleIcon()}
    </div>
  );
};

export default SidebarToggleBtn;
