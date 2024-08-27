import js from "../../assets/js.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import react from "../../assets/react.png"
import c from "../../assets/c.png"
import css from "../../assets/css.png"

import { Steps } from "antd"
import "../../assets/CSS/IntroBody.css"
const Exp = () => {
  return (
     <div className="pt-[100px] h-auto lg:h-screen" id="3">
     <div className="title text-center mb-36 tracking-widest text-4xl font-extrabold">SKILLS AND EXPERIENCE</div>
     <div className="flex justify-between grid lg:grid-cols-2 grid-cols-1 ">
          <div className="px-auto ps-[30px] sm:ps-[100px] lg:ps-[200px] ">
                    <div className="skills lg:flex-nowrap flex flex-wrap gap-10 justify-center">
                    <img src={js} className=" h-[80px] w-[80px] rounded-full "/>
                    <img src={bootstrap} className=" h-[80px] w-[80px] rounded-full  "/>
                    <img src={react} className=" h-[80px] w-[80px] rounded-full  "/>
                    <img src={tailwind} className=" h-[80px] w-[80px] rounded-full "/>
                    <img src={css} className=" h-[80px] w-[80px] rounded-full "/>
                    </div>
                    <div className="mt-24 flex justify-center">

                         <img src={c} className=" h-[80px] w-[80px] rounded-full "/>
                    </div>
                    <div>
                    {/* <img src={git} className=" h-[80px] w-[80px] rounded-full "/> */}
                    </div>
          </div>
          <div className="experience ps-[30px] md:ps-[100px] sm:ps-64 lg:ps-80 m-auto lg:m-0 mt-16 lg:mt-0 text-2xl">
          <Steps
          className="text-3xl font-semibold text-black"
               // progressDot
               current={2}
               direction="vertical"
               items={[
               {
                   
                    title: 'PortPro Pvt. Ltd. ',
                    status:'finish',
                    description: "Frontend Intern",
               },
               {
                    title: 'Codavatar',
                    status:'finish',
                    description: 'React Intern',
               },
               {
                    title: 'Inspire',
                    status:'inprogress',
                    description: 'Solution Developer',
               }
               
               ]}
          />
          </div>
     </div>
     </div>
  )
}

export default Exp
