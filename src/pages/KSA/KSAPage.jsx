import React from 'react'
import {motion} from 'framer-motion'
const ksapage = () => {
  return (
    <motion.div
    className="flex items-center justify-center mt-20"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
    
    <h1 className="text-black text-5xl mt-50">
        ...جاري الإنشاء
    </h1>
    </motion.div>
  )
}

export default ksapage