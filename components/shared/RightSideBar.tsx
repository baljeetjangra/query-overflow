import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const hotQuestios = [
    { _id: 1, title: "How to create a new project in Figma?" },
    { _id: 2, title: "How to deploy a website on vercel?" },
    { _id: 3, title: "How to create a new project in Figma?" },
    { _id: 4, title: "How to create a new project in Figma?" },
  ];

  const popularTags = [
    {
      _id: "1",
      name: "React",
      totalQuestions: 3,
    },
    {
      _id: "2",
      name: "Javascript",
      totalQuestions: 1,
    },
    {
      _id: "3",
      name: "Redux",
      totalQuestions: 3,
    },
    {
      _id: "4",
      name: "Typescript",
      totalQuestions: 5,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestios.map((item) => (
            <Link
              href={`/questions/${item._id}`}
              key={item._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{item.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => (
            <RenderTag
              key={item._id}
              _id={item._id}
              name={item.name}
              totalQuestions={item.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
