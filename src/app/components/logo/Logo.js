'use client';
import { ModeToggle } from '@/app/ModeToggle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInUp } from '../motion/motion';

import { DropdownMenuDemo } from '../profile/Profile';

const Logo = () => {
    return (
        <motion.div
            className="md:hidden p-4 flex items-center justify-between"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
        >
            <Image
                src="/logo-transparent-svg.svg"
                alt="Booster"
                width={150}
                height={90}
                priority
            />
            <motion.div
                className="md:hidden p-4 flex gap-2 items-center justify-between"
                variants={slideInUp}
                initial="hidden"
                animate="visible"   
            >
                <ModeToggle />
                <DropdownMenuDemo />

            </motion.div>
        </motion.div>
    );
};

export default Logo;