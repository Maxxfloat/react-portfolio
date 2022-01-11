import React from "react";
import ListOfPages from "./ListOfPages";

import SidebarToggleBtn from "./SidebarToggleBtn";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full lg:w-32 bg-[#181818] h-screen fixed">
      <SidebarToggleBtn
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div>
        <div className="text-white bg-black h-52 lg:h-48">logo</div>
        <ListOfPages />
      </div>
    </div>
  );
};

export default Index;
