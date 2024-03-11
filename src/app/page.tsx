"use client"
import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  BulbOutlined,
  MoonOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const Portfolio = () => {
  const introSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-jollyblue min-h-screen bg-blend-luminosity">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-gray-950 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex justify-between">
            <li className="text-white text-[30px] py-4 hover:text-green-900 h-full border-l border-yellow-100 pl-28">
              <button onClick={() => scrollToSection(introSectionRef)}>HOME</button>
            </li>
            <li className="text-white text-[30px] py-4 hover:text-green-900 h-full border-l border-yellow-100 pl-28">
              <button onClick={() => scrollToSection(aboutSectionRef)}>ABOUT ME</button>
            </li>
            <li className="text-white text-[30px] py-4 hover:text-green-900 h-full border-l border-yellow-100 pl-28">
              <button onClick={() => scrollToSection(portfolioSectionRef)}>PORTFOLIO</button>
            </li>
            <li className="text-white text-[30px] py-4 hover:text-green-900 h-full border-l border-yellow-100 pl-28">
              <a href="https://drive.google.com/file/d/19pqNb9LgQtWlnHsfRgAquKERR4OmBxZK/view?usp=drive_link" target="_blank">
                RESUME
              </a>
            </li>
            <li className="h-full border-l border-yellow-100 py-[27px]">&nbsp;&nbsp; </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between py-16 px-8 md:px-48" ref={introSectionRef}>
        {/* Introduction section */}
        <div className="text-center mb-8 md:mb-0">
          <h1 className="font-bold text-[4vw] md:text-[100px] text-gray-200 animate-bounce">WENDELL S. </h1>
          <h1 className="font-bold text-[4vw] md:text-[100px] text-gray-200 animate-bounce">RIOFLORIDO</h1>
          <div className="container bg-golden w-[100%]">
            <p className="text-[16px] md:text-lg text-gray-200 text-center animate-pulse">Bachelor of Science in Information Technology</p>
            <p className="text-[16px] md:text-lg text-gray-200 text-center animate-pulse">with Specialization in Web and Mobile Application</p>
            <p className="text-[16px] md:text-lg text-gray-200 text-center animate-pulse">Web Developer</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg w-full md:w-[400px]">
          <Image src="/assets/2.JPG" alt="Project 1" width={400} height={100} className="object-cover" />
        </div>
      </div>
      <hr className="border-t-4 border-yellow-100" />
      <div className="container mx-auto flex flex-col md:flex-row px-4 py-16 md:py-64" ref={aboutSectionRef}>
        <div className="md:px-8 max-w-[70%]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 py-4 text-left max-w-[80%]">ABOUT ME</h1>
          <p className="text-[16px] md:text-[18px] max-w-[80%] bg-golden px-4 py-4 text-justify">
            A versatile professional recognized for my ability to adapt quickly and work smartly. I excel in fast-paced environments where I can leverage my adaptability to navigate change with ease. My approach to work is rooted in efficiency and effectiveness—I believe in finding the most strategic and efficient way to achieve goals while maintaining high standards of quality. I bring a positive attitude and collaborative spirit to every team I work with. I enjoy brainstorming and problem-solving alongside colleagues, valuing diverse perspectives and fostering an inclusive environment where everyone feels empowered to contribute their best ideas. Driven by a passion for making a difference, I'm always eager to take on new challenges and explore innovative solutions. Whether it's optimizing processgit push -u origin main, tackling complex projects, or supporting my team members, I'm committed to delivering exceptional results and creating value in everything I do. Let's connect and explore how we can work together to achieve our goals and make a positive impact!
          </p>
        </div>
        <div className="container flex md:px-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 py-4 text-left">SKILLS</h1>
            <div className="flex bg-cranberry px-4 py-12">
              <ul className="justify-between text-[16px] md:text-[18px]">
                <li>Microsoft Word</li>
                <li>Microsoft Powerpoint</li>
                <li>Microsoft Excel</li>
                <li>Microsoft Visual STudio</li>
                <li>Visual Studio Code</li>
                <li>SSMS</li>
                <li>Android Studio</li>
                <li>R Studio</li>
                <li>PowerShell</li>
                <li>PL/SQL</li>
              </ul>
              <ul className="justify-between pl-8 text-[16px] md:text-[18px]">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Supabase</li>
                <li>C#</li>
                <li>SQL</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-4 border-yellow-100" />
      <div className="container mx-auto px-4 py-16 md:py-60" ref={portfolioSectionRef}>
        {/* Portfolio section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">PORTFOLIO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items */}
          <div className="bg-cranberry shadow-md rounded-lg overflow-hidden">
            <a href="https://todolistapp-nextjs.netlify.app/">
              <Image src="/assets/Screenshot 2024-03-09 014316.png" alt="Project 1" width={500} height={300} className="object-cover hover:animate-ping" />
            </a>
            <div className="p-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">TodolistApp</h3>
              <p className="text-gray-200 bg">ReactJS NextJS TailwindCSS Supabase</p>
            </div>
          </div>

          {/* Add more portfolio items here */}

        </div>
      </div>
      <footer className="bg-gray-950 fixed bottom-0 left-0 w-full z-10 py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <ul className="flex space-x-4">
            <li className="flex">
              <MailOutlined style={{ fontSize: '40px', color: 'red' }} />
              <p className="pl-4 pt-2">wenrioflorido09@gmail.com</p>
            </li>
            <li className="flex">
              <PhoneOutlined style={{ fontSize: '40px', color: 'green' }} />
              <p className="pl-4 pt-2">+639613390759</p>
            </li>
            <li className="flex">
              <a href="https://www.facebook.com/wendell.rioflorido/" target="_blank">
                <FacebookOutlined style={{ fontSize: '40px', color: '#4267B2' }} />
              </a>
              <p className="pl-4 pt-2">Wendell Rioflorido</p>
            </li>
            <li className="flex">
              <a href="https://www.linkedin.com/in/wendell-rioflorido-6392b3274/" target="_blank">
                <LinkedinOutlined style={{ fontSize: '40px', color: 'blue' }} />
              </a>
              <p className="pl-4 pt-2">Wendell Rioflorido</p>
            </li>
            <li className="flex">
              <a href="https://www.linkedin.com/in/wendell-rioflorido-6392b3274/" target="_blank">
                <GithubOutlined style={{ fontSize: '40px', color: 'black' }} />
              </a>
              <p className="pl-4 pt-2">wrioflorido</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
