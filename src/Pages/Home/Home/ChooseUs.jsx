import React from "react";
import img1 from "../../../assets/Banner/1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const ChooseUs = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });

    return animation.stop;
  }, []);

  return (
    <div
      className="hero  h-[500px] my-10"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80 "></div>
      <div className="hero-content text-center text-neutral-content w-4/5 p-10 border-2">
        <div className="max-w-lg">
          <SectionTitle title={"Why Students Choose Us"}></SectionTitle>
          <p className="mb-5">
            Students choose us because we offer a comprehensive language
            learning experience that combines interactive lessons, personalized
            guidance, and immersive practice. Our dedicated team of experienced
            instructors ensures effective language acquisition through engaging
            activities and real-world simulations. With our user-friendly
            platform and flexible scheduling options, students gain the
            confidence and skills needed to communicate fluently in their target
            language.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex flex-row text-5xl font-bold">
              
                  <motion.h1>{rounded}</motion.h1>
           
                <p>00+</p>
              </div>
              <p>Our Students</p>
            </div>
            <div>
              <div className="flex flex-row text-5xl font-bold">
              
                  <motion.h1>{rounded}</motion.h1>
                
                <p>0+</p>
              </div>
              <p>Our Teachers</p>
            </div>
            <div>
              <div className="flex flex-row text-5xl font-bold">
            
                  <motion.h1>{rounded}</motion.h1>
             
                <p>+</p>
              </div>
              <p>Our Certificates</p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
