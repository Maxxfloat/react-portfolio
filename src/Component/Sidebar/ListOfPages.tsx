import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { title: "صفحه اصلی", link: "/" },
  { title: "مهارت ها", link: "skills" },
  { title: "پروژه ها", link: "projects" },
  { title: "تماس با من", link: "contact" },
];

const ListOfPages: React.FC = () => {
  return (
    <nav className=" border-t-2 border-[#282828] items-center">
      <ul className="flex flex-col items-center justify-center ">
        {pages.map((item) => (
          <React.Fragment key={item.title}>
            <Link
              to={item.link}
              className="text-[#909096] border-b-2 border-[#282828] leading-[5rem] w-full h-full text-center"
            >
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default ListOfPages;
