import { Card } from "antd"
const { Meta } = Card;
import proj from "../../assets/proj.png";
import quiz from "../../assets/quiz.jpg";
import quote from "../../assets/quote.jpg";
import weather from "../../assets/weather.jpg";
import ecom from "../../assets/ecom.jpg";
import "../../assets/CSS/IntroBody.css"
const Projects = () => {
  return (
    <div className="sm:ms-[100px] ms-[70px] me-[70px] mt-[60px]" id="2">
          <div className="title mb-[80px] text-center tracking-widest text-4xl font-extrabold">PROJECTS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-10">
          <Card
               className="sm:w-[280px] w-[240px]"
               hoverable
              
               cover={<img alt="example" src={proj} className="h-[190px]"/>}
               >
               <Meta title="Project Management " description="Streamline your team's workflow and boost productivity with our all-in-one project management platform."/>
          </Card>
          <Card
               className="sm:w-[280px] w-[240px]"
               hoverable
              
               cover={<img alt="example" src={ecom} className="h-[190px]"/>}
               >
               <Meta title="Ecommerce Website description" description="An eCommerce website built with React facilitating seamless browsing, shopping, and checkout experiencesww.instagram.com" />
          </Card>
          <Card
               className="sm:w-[280px] w-[240px]"
               hoverable
               
               cover={<img alt="example" src={weather} className="h-[190px]"/>}
               >
               <Meta title="Weather App" description="A weather app using React provides users with real-time weather information in a user friendly way" />
          </Card>
          <Card
               className="sm:w-[280px] w-[240px]"
               hoverable
               
               cover={<img alt="example" src={quiz} className="h-[190px]"/>}
               >
               <Meta title="Quiz" description="A quiz app using React oers interactive quizzes with dynamic questions and options" />
          </Card>
          <Card
               className="sm:w-[280px] w-[240px]"
               hoverable
               
               cover={<img alt="example" src={quote} className="h-[190px]"/>}
               >
               <Meta title="Quote Generator" description="A Quote Generator website which allow user to generate random quote along with the authors name" />
          </Card>
          </div>
    </div>
  )
}

export default Projects
