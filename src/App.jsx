// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";


// const App = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // Set isVisible to false after 2 seconds
//     const timeoutId = setTimeout(() => {
//       setIsVisible(false);
//     }, 3500);

//     // Clear the timeout if the component unmounts before the timeout completes
//     return () => clearTimeout(timeoutId);
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Render your Text components conditionally based on the isVisible state */}
//       {isVisible && (
//         <>
//           <motion.div
//             className="text"
//             style={{ marginRight: '20px' }} // Adjust margin as needed
//             initial={{ x: -500, opacity: 0 }}
//             animate={{ x: 515, opacity: 1 }}
//             transition={{ duration: 0.5, staggerChildren: 0.5 }}
//           >
//             <img src="./gdsc1.png" alt="" />
//             {/* <Text /> */}
//           </motion.div>

//           <motion.div
//             className="text"
//             style={{ marginRight: '20px' }} // Adjust margin as needed
//             initial={{ x: 1000, opacity: 0 }}
//             animate={{ x: 500, opacity: 1 }}
//             transition={{ duration: 0.5, staggerChildren: 0.5 }}
//           >
//             <img src="./gdsc2.png" alt="" />
//             {/* <Text /> */}
//           </motion.div>
//         </>
//       )}
//       {!isVisible && <h1>Hello</h1>}
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const App = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // Set isVisible to false after 2 seconds
//     const timeoutId = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000);

//     // Clear the timeout if the component unmounts before the timeout completes
//     return () => clearTimeout(timeoutId);
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {/* Render your Text components conditionally based on the isVisible state */}
//       {isVisible && (
//         <>
//           <motion.div
//             className="text mx-2"
//             initial={{ x: -500, opacity: 0 }}
//             animate={{ x: 515, opacity: 1 }}
//             transition={{ duration: 0.5, staggerChildren: 0.5 }}
//           >
//             <img src="./gdsc1.png" alt="" />
//           </motion.div>

//           <motion.div
//             className="text mx-2"
//             initial={{ x: 1000, opacity: 0 }} // Adjusted initial x value
//             animate={{ x: 0, opacity: 1 }} // Adjusted animate x value
//             transition={{ duration: 0.5, staggerChildren: 0.5 }}
//           >
//             <img src="./gdsc2.png" alt="" />
//           </motion.div>
//         </>
//       )}
//       {!isVisible && <h1>Hello</h1>}
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const App = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [variants, setVariants] = useState(null);
//   const [otherDivVariants, setOtherDivVariants] = useState(null);

//   useEffect(() => {
//     // Set isVisible to false after 2 seconds
//     const timeoutId = setTimeout(() => {
//       setIsVisible(false);
//     }, 3500);

//     // Clear the timeout if the component unmounts before the timeout completes
//     return () => clearTimeout(timeoutId);
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   useEffect(() => {
//     // Set variants based on device width
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width <= 767) {
//         setVariants({
//           initial: { x: -250, opacity: 0 },
//           animate: { x: 100, opacity: 1 }
//         });
//         setOtherDivVariants({
//           initial: { x: 250, opacity: 0 },
//           animate: { x: 110, opacity: 1 }
//         });
//       } else {
//         setVariants({
//           initial: { x: -500, opacity: 0 },
//           animate: { x: 515, opacity: 1 }
//         });
//         setOtherDivVariants({
//           initial: { x: 1000, opacity: 0 },
//           animate: { x: 515, opacity: 1 }
//         });
//       }
//     };

//     // Call handleResize initially and add event listener for window resize
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     // Clean up event listener on unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Render your Text components conditionally based on the isVisible state */}
//       {isVisible && (
//         <>
//           <motion.div
//             className="text"
//             style={{ marginRight: '20px' }} // Adjust margin as needed
//             initial={variants ? variants.initial : null}
//             animate={variants ? variants.animate : null}
//             transition={{ duration: 0.5, staggerChildren: 0.5 }}
//           >
//             <img src="./gdsc1.png" alt="" />
//             {/* <Text /> */}
//           </motion.div>

//           <motion.div
//             className="text"
//             style={{ marginRight: '20px' }} // Adjust margin as needed
//             initial={otherDivVariants ? otherDivVariants.initial : null}
//             animate={otherDivVariants ? otherDivVariants.animate : null}
//             transition={{ duration: 0.5, staggerChildren: 0.5 }}
//           >
//             <img src="./gdsc2.png" alt="" />
//             {/* <Text /> */}
//           </motion.div>
//         </>
//       )}
//       {!isVisible && <h1>Hello</h1>}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css"

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set isVisible to false after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 120000);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div style={{ display: 'flex' }}>
      {/* Render your Text components conditionally based on the isVisible state */}
      {isVisible && (
        <>
          <motion.div
            className="text-container"
            style={{ marginRight: '20px' }}
            initial={{ x: window.innerWidth <= 767 ? -240 : -500, opacity: 0 }}
            animate={{ x: window.innerWidth <= 767 ? 40 : 515, opacity: 1 }} // Adjust margin as needed
            transition={{ duration: 1, staggerChildren: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="./gdsc1.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            {/* <Text /> */}
          </motion.div>

          <motion.div
            className="text-container"
            style={{ marginRight: '20px' }} // Adjust margin as needed
            initial={{ x: window.innerWidth <= 767 ? 480 : 1000, opacity: 0 }}
            animate={{ x: window.innerWidth <= 767 ? 35 : 500, opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="./gdsc2.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            {/* <Text /> */}
          </motion.div>
        </>
      )}
      {!isVisible && <h1>Hello</h1>}
    </div>
  );
};

export default App;





