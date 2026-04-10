import { motion } from "framer-motion";
import { useEffect } from "react";
import "./../styles/loader.css"

function YourComponent() {
  useEffect(() => {
    // Disable scrolling during animation
    document.documentElement.style.overflow = 'hidden';
  
    // Enable scrolling after animation completes (adjust the delay + duration accordingly)
    const timeout = setTimeout(() => {
      document.documentElement.style.overflow = 'auto';
    }, 1500); // Adjust the delay (delay + duration) as needed
  
    // Clear timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <motion.div
      animate={{ y: "-100vh" }} 
      transition={{ duration: 0.5, delay: 1.5 }}
      id="load"
      className='initialTransition'
    >
      Welcome
    </motion.div>
  );
}

export default YourComponent;
