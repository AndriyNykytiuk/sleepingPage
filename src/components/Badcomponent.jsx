import React from 'react';
import { motion } from 'framer-motion';
import Bad from '../img/bed.png';
import Feather1 from '../img/feather5.png';
import Feather2 from '../img/feather5.png';
import Feather3 from '../img/feather3.png';
import Feather5 from '../img/feather5.png';
import Feather6 from '../img/feather3.png';
import Cloud from '../img/cloud.png';
import Cloud1 from '../img/cloud.png';
import '../css/feathres.css';

const BadComponent = () => {
  return (
    <div className="relative mx-auto w-full max-w-200">
      <motion.img
      src={Cloud}
        alt="Image"
        className='cloud'
      
      />

      <motion.img
        src={Cloud1}
        alt="Image"
        className='cloud1'

        
        />
        <motion.img
        src={Bad}
        alt="Image"
        className="mx-auto w-full object-contain"
        initial={{ x:0,y: 0,}}
        animate={{ y: [-3, 3, -3] , x: [-3, 3, -3]}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={Feather1}
        alt="feather"
        className="feather1"
        initial={{ x:5,y: 0,rotateY: 0}}
        animate={{ y: [-10, 10, -10], x: [-10, 10, -10],rotateY: [-40, 40, -40] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={Feather2}
        alt="feather"
        className="feather2"
        initial={{ y: 0 , x:0,rotateX: 0}}
        animate={{ y: [10, -10, 10],x:[0,10,0] , rotateX: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={Feather3}
        alt="feather"
        className="feather3"
        initial={{ y: 0, x:0,rotateY: 0 }}
        animate={{ y: [-15, 10, -15],x:[20,15,20], rotateY: [30, 50, 30] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={Feather5}
        alt="feather"
        className="feather5"
        initial={{ x:0,y: 0,rotateX: 0 }}
        animate={{ y: [-5, 5, -5] , x: [-15, 5, -15], rotateX: [20, 50, 20] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
          <motion.img
        src={Feather6}
        alt="feather"
        className="feather6"
        initial={{ x:0,y: 0,rotateX: 0 }}
        animate={{ y: [-5, 5, -5] , x: [-15, 5, -15], rotateX: [20, 50, 20] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BadComponent;
