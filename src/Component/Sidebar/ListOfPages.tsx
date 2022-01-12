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
    <nav className=" border-t-[1px] border-[#282828] w-full my-auto">
      <ul className="flex flex-col w-full h-full">
        {pages.map((item) => (
          <React.Fragment key={item.title}>
            <Link
              to={item.link}
              className="text-[#909096] border-b-[1px] border-[#282828] leading-[3.2rem] w-full h-full text-center"
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
