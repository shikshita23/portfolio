import shiks from "../../assets/shiks.jpg"
import js from "../../assets/js.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import react from "../../assets/react.png"
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSquareGithub, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import "../../assets/CSS/IntroBody.css"
const Intro = () => {
  return (
    <div className="mt-[50px] pb-10 px-4 md:px-8 lg:px-4 lg:h-screen h-auto" id="1">
       <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="relative w-full lg:w-1/2 lg:mb-0 mt-[80px]">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <img src={shiks} className="w-full h-full rounded-full object-cover" alt="Profile" />
            <img src={js} className="absolute w-12 h-12 sm:left-[-20px] top-0  left-[-20px] rounded-full " alt="JavaScript" />
            <img src={bootstrap} className="absolute w-12 h-12 rounded-full bottom-0 sm:left-[-20px] left-[-20px] " alt="Bootstrap" />
            <img src={react} className="absolute w-12 h-12 rounded-full top-1/4 sm:right-[265px] right-[260px] md:right-[330px]" alt="React" />
            <img src={tailwind} className="absolute w-12 h-12 rounded-full bottom-1/4 right-[325px] sm:left-[-55px] left-[-50px] " alt="Tailwind" />
          </div>
        </div>
      <div className="   flex justify-end pb-0 sm:pt-7 m-auto">
          <div className="xl:w-[600px] sm:w-[450px] w-auto  my-auto text-white text-lg body tracking-widest  ms-[40px] sm:ms-0">

          <p className="text-center mt-7 sm:mt-0">Hello Iam </p>
          {/* <p className="text-[#96edf3] font-bold text-4xl mt-3 text-center">Shikshita Subedi Khatri</p> */}
          <div                className="text-[#96edf3] font-bold  text-2xl md:text-4xl mt-3 text-center">

          <Typewriter

                options={{
                  strings: ["Shikshita Subedi Khatri", "React Learner"],
                  autoStart: true,
                  loop: true,
                }}
              />
          </div>
          <p className="mt-3">Iam CSIT graduate.I am knowledgeable in C, HTML, CSS , Bootstrap,Tailwind, ReactJs.I possess the ability to work independently or in a team. I am eager to apply my skills and knowledge to an IT industry.
          </p>
          <div className="flex justify-center">

          <button className="bg-[#96edf3] rounded text-black px-3 py-2 mt-10 "><a
                className="btn btn-danger btn-resume"
                href="./Cv.pdf"
                download="Cv.pdf"
              >
               Download Cv
              </a></button>
          </div>
          <div className="mt-2 flex justify-center">
               <a href="https://www.instagram.com/shikshita_subedi/"> <FontAwesomeIcon icon={faSquareInstagram} size="2xl" className="me-6"/></a>
               <a href="https://www.linkedin.com/in/shikshita-subedi-9990522bb/"><FontAwesomeIcon icon={faLinkedin} size="2xl" className="me-6"/></a>
               
               <a href="https://github.com/shikshita23"> <FontAwesomeIcon icon={faSquareGithub} size="2xl" /></a>
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Intro
