import { motion } from "framer-motion"; // fix incorrect import

type CardProps = {
  taskName: string;
  taskDescription: string;
};

function Card({ taskName, taskDescription }: CardProps) {
  return (
    <motion.div
      className="bg-white border border-white border-2 rounded-2xl shadow-md p-6 max-w-sm w-full mx-auto hover:shadow-xl transition-transform duration-300"
      whileHover={{scale: 1.05}}

    
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{taskName}</h2>
      <p className="text-gray-600 text-sm">{taskDescription}</p>
    </motion.div>
  );
}

export default Card;
