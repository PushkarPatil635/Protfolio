import { GlareCard } from "@/component/ui/glare-card";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { BsClipboard2DataFill, BsDatabaseFill } from "react-icons/bs";

function GlareCardDemo() {
  return (
    <div>

      <div className="flex justify-center items-center min-h-screen ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-full max-w-7xl  ">
          <GlareCard className="flex flex-col items-center justify-start text-center p-4 h-full">
            <h1 className="font-bold flex gap-3 text-xl text-amber-300">
              <FaCode className=" text-3xl"/>

              Web Development
            </h1>
            <p className="text-gray-300 text-sm mt-24">
              Creating fast, responsive, and scalable websites using modern web technologies like
              HTML, CSS, JavaScript, React.js, and Node.js. Focused on delivering smooth user
              experiences and robust functionality.
            </p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-start text-center p-4 h-full">
            <h1 className="text-amber-300 font-bold flex gap-3 text-xl">
              <FaCode className=" text-3xl"/>

              Front-End Development
            </h1>
            <p className="text-gray-300 text-sm mt-24">
              Crafting visually appealing and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React.js and Angular.
            </p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-start text-center p-4 h-full">
            <h1 className="text-amber-300 font-bold flex gap-3 text-xl">
              <FaCode className=" text-3xl"/>

              Responsive Web Design
            </h1>
            <p className="text-gray-300 text-sm mt-24">
              Designing and developing websites that look and function beautifully on any device, from desktops to smartphones. I focus on creating adaptive layouts that provide a consistent user experience across different screen sizes.
            </p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-start text-center p-4 h-full">
            <h1 className="text-amber-300 font-bold flex gap-3 text-xl">
              <FaCode className=" text-3xl"/>

              Single-Page Application
            </h1>
            <p className="text-gray-300 text-sm mt-24">
              Building fast, interactive, and seamless single-page applications (SPAs) using modern JavaScript frameworks like React.js and Angular. My SPAs are designed for performance, offering a native app-like experience in the browser.
            </p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-start text-center p-4 h-full">
            <h1 className="text-amber-300 font-bold flex gap-3 text-xl">
              <BsClipboard2DataFill className=" text-3xl"/>

              Data Visualization & Dashboards
            </h1>
            <p className="text-gray-300 text-sm mt-24">
             Turn your data into meaningful insights with interactive dashboards using libraries like Recharts, Chart.js, and real-time data integration with WebSockets.
            </p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-start text-center p-4 h-full">
            <h1 className="text-amber-300 font-bold flex gap-3 text-xl">
              <BsDatabaseFill className=" text-3xl"/>

              Database Management
            </h1>
            <p className="text-gray-300 text-sm mt-24">
              Creating fast, responsive, and scalable websites using modern web technologies like
              HTML, CSS, JavaScript, React.js, and Node.js. Focused on delivering smooth user
              experiences and robust functionality.
            </p>
          </GlareCard>

          
        </div>
      </div>
    </div>
  );
}
export default GlareCardDemo;