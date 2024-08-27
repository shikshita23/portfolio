import { Card } from "antd"
import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
import "../../assets/CSS/IntroBody.css"
const Contact = () => {
  return (
    <div className="mt-[50px] mb-[100px]" id="4">
          <div className="text-center mb-[170px] title  tracking-widest text-4xl font-extrabold">CHAT WITH ME</div>
          <div className="text-center text-xl mt-[100px] mb-[70px] mx-20">If you have any questions , or just want to say hello, feel free to contact me.</div>
          <div className="flex flex-wrap justify-around gap-y-6 gap-x-5">
          <Card
               style={{
                    width: 300,
               }}
               className="hover:scale-110"
               >
               <img src={email} className="w-[50px] h-[50px] m-auto"/>
               <p className="text-center mt-3">shikshitasubedi1@gmail.com</p>
               </Card>
               <Card
               style={{
                    width: 300,
               }}
                className="hover:scale-110"
               >
              <img src={phone} className="w-[50px] h-[50px] m-auto"/>
               <p className="text-center mt-3">+977 9840217070</p>
          </Card>
          </div>
    </div>
  )
}

export default Contact
