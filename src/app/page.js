// "use client";
// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/component/navbar";
// import Intro from "@/component/intro";
// import WorkExperience from "@/component/WorkExperience";
// import GlareCardDemo from "@/component/GlareCardDemo";
// import Services from "@/component/Services";
// import Footer from "@/component/footer"

// function Page() {
//   const introObserverRef = useRef(null);
//   const [isIntroVisible, setIsIntroVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsIntroVisible(entry.isIntersecting),
//       { threshold: 0.5 }
//     );

//     const current = introObserverRef.current;
//     if (current) observer.observe(current);

//     return () => {
//       if (current) observer.unobserve(current);
//     };
//   }, []);

//   return (
//     <main>
//       <div>
//         <Navbar />
//       </div>

//       {/* ✅ Attach ref to a regular div, not the <Intro /> component */}
//       <div className="pt-[70px] ">
//         <div ref={introObserverRef}>
//           <Intro isVisible={isIntroVisible} />
//         </div>
//       </div>

//       <div>
//         <WorkExperience />
//       </div>

//       <div>
//         <Services />
//       </div>

//       <div className="mt-[100px]">
//         <GlareCardDemo />
//       </div>
//       <div className="mt-[100px]">
//         <Footer/>
//       </div>

//     </main>
//   );
// }

// export default Page;
"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/component/navbar";
import Intro from "@/component/intro";
import WorkExperience from "@/component/WorkExperience";
import GlareCardDemo from "@/component/GlareCardDemo";
import Services from "@/component/Services";
import Footer from "@/component/footer";

function Page() {
  const introObserverRef = useRef(null);
  const [isIntroVisible, setIsIntroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntroVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const current = introObserverRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <main className="overflow-x-hidden"> {/* ✅ Fix horizontal scroll globally */}
      <div>
        <Navbar />
      </div>

      <div className="pt-[70px]">
        <div ref={introObserverRef}>
          <Intro isVisible={isIntroVisible} />
        </div>
      </div>

      <div>
        <WorkExperience />
      </div>

      <div>
        <Services />
      </div>

      <div className="mt-[100px]">
        <GlareCardDemo />
      </div>

      <div className="mt-[100px]">
        <Footer />
      </div>
    </main>
  );
}

export default Page;
