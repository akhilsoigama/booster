'use client'
import { motion } from 'framer-motion';
import { Home, People, Notifications, Mail, Settings } from '@mui/icons-material';
import { bounce, fadeIn, slideInLeft } from './motion/motion';

const BottomNavbar = () => {
  const Navbaar = [
    { icon: <Home /> },
    { icon: <People /> },
    { icon: <Notifications /> },
    { icon: <Mail /> },
    { icon: <Settings /> },
  ];

  return (
    <motion.div
      variants={fadeIn} 
      initial="hidden" 
      animate="visible" 
      className="fixed bottom-0 w-full shadow-md backdrop-blur-md bg-white/70 dark:bg-gray-800/70 transition-all duration-300 md:hidden z-50"
    >
      <motion.div
        variants={slideInLeft} 
        initial="hidden"
        animate="visible" 
        className="flex justify-around px-2 py-1"
      >
        {Navbaar.map((item, index) => (
          <motion.div
            key={index}
            variants={bounce} 
            whileHover="hover" 
            whileTap="tap" 
            className="p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
          >
            <span className="dark:text-white text-gray-700">
              {item.icon}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BottomNavbar;