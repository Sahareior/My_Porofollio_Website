import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { fadeIn } from "./utils/motion";
import { SectionWrapper } from "./hoc";

AOS.init();

const Works = () => {
  const projects = [
    {
      name: "Toyman",
      description:
        "It's a kids toy shop where you can buy kid’s toy and can do payment through stripe also can browse sections by your favorite categories.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image:
        "https://img.freepik.com/premium-photo/shop-toy-store-babies-soft-toy-closeup-shopping-trip-with-blurry-background_73683-3602.jpg?w=740",
      source_code_link: "https://stately-narwhal-c8ff78.netlify.app",
    },
    {
      name: "Art&joy",
      description:
        "Art&Joy is a educational site where you can buy art related courses to enhance y your artist mindset it has lot’s of instructor and they will Provide proper guidance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express js",
          color: "green-text-gradient",
        },
        {
          name: "Daisy ui",
          color: "pink-text-gradient",
        },
      ],
      image:
        "https://img.freepik.com/premium-photo/acrylic-colors-mixing-water-colorful-acrylic-paint-mixing-watergenerative-ai_841229-2059.jpg?w=740",
      source_code_link: "https://stalwart-mousse-690e22.netlify.app",
    },
    {
      name: "Foodie",
      description:
        "Foodie is a chef recipe website, any user can view recipes of specific chef recipes and add favorite recipes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:
        "https://img.freepik.com/free-vector/hand-drawn-recipe-book-template_52683-81933.jpg?w=740&t=st=1687887947~exp=1687888547~hmac=8118b7ec6c998fad4249f3f6140de12967bdd31880375612a3292cd56d8eba6e",
      source_code_link: "https://resilient-semolina-b205c7.netlify.app",
    },
  ];


  return (
    <div id="works" className="text-center mt-20">
      <p className={styles.sectionSubText}>My recent work</p>
      <h2 className={styles.sectionHeadText}>My Projects.</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 3)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      </motion.p>
      <div className="md:grid grid-cols-2 gap-9 mt-10 ml-">
        {projects.map((data) => (
          <div
            data-aos="zoom-in"
            key={data.name}
            className="group relative cursor-pointer mt-5 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="relative  h-96 w-full">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={data.image}
                alt=""
              />
              <div
                className="absolute top-0 text-3xl font-bold w-full h-14 bg-slate-900 "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h1 className="mt-2 text-white">{data.name}</h1>
              </div>
              <div className="absolute inset-0 text-3xl text-white border  bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[1000%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xs md:text-2xl font-bold text-white">
                  {data.description}
                </h1>
                <div className="flex">
                  {data.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-${tag.color}`}
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                      <span className="ml-1 text-red-500">{tag.name}</span>
                    </span>
                  ))}
                </div>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
                <h1 className="rounded-full bg-neutral-900 hover:text-red-600 hover:text-xl py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  <a href={data.source_code_link}><p>Click to visit</p></a>
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
