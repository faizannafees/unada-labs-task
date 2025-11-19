
import { motion } from "framer-motion";

const Planet = ({ planet, isActive, onClick }) => {
  const orbitSize = isActive ? 80 : 68;

  return (
    <motion.button
      type="button"
      layoutId={`planet-${planet.id}`}
      onClick={() => onClick(planet.id)}
      initial={false}
      animate={{
        zIndex: isActive ? 40 : 10,
        scale: isActive ? 1.15 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="cursor-pointer absolute"
      style={{
        left: planet.pos.left,
        top: planet.pos.top,
        transform: "translate(-50%, -50%)",
        width: orbitSize,
        height: orbitSize,
      }}
    >
      <div className="relative w-full h-full">
        {/* glow */}
        <div
          className="absolute inset-0 rounded-full opacity-80 blur-xl"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.45), transparent 60%)",
          }}
        />
        {/* small planet */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img
            src={planet.image || planet.image}
            alt={planet.name}
            className="w-fit h-fit object-cover"
          />
        </div>
      </div>
    </motion.button>
  );
}

export default Planet;
