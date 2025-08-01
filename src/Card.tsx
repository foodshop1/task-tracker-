import { motion } from "motion/react";

//onDelete is a function type that will be eventually used to call another function
type CardProps = {
  taskName: string;
  taskDescription: string;
  onDelete: () => void;
};

function Card({ taskName, taskDescription, onDelete }: CardProps) {
  return (
    <motion.div
      className="bg-white border border-white border-2 rounded-2xl shadow-md p-6 max-w-sm w-full mx-auto hover:shadow-xl transition-transform duration-300"
      whileHover={{scale: 1.05}}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2 break-words overflow-hidden">{taskName}</h2>
      <p className="text-gray-600 text-sm break-words overflow-hidden mb-4">{taskDescription}</p>
      <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">Delete</button>
    </motion.div>
  );
}

export default Card;
