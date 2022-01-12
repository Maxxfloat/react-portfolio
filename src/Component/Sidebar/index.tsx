import React from "react";
import ListOfPages from "./ListOfPages";

import SidebarToggleBtn from "./SidebarToggleBtn";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  return (
    <>
      <SidebarToggleBtn
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div
        className={
          (sidebarOpen ? "w-full" : "hidden") +
          " lg:flex lg:w-32 bg-[#181818] h-screen fixed flex flex-col"
        }
      >
        <div className="flex-grow-0 text-white bg-black h-52 lg:h-48">logo</div>
        <ListOfPages />
        <div className="w-full h-32">footer</div>
      </div>
    </>
  );
};

export default Index;
