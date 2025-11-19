
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Planet from "./Planet";
import { PLANETS } from "../utils/planets";
import OrbitRings from "./OrbitRings";

const SolarSystem = () => {
    
    const [activeId, setActiveId] = useState(PLANETS[0].id);
    const activePlanet = PLANETS.find((p) => p.id === activeId);

    const others = PLANETS.filter((p) => p.id !== activePlanet.id);

    const planetSize = `clamp(12rem, 35vw, ${activePlanet.size || 480}px)`;
    const auraSize = `calc(${planetSize} + 5rem)`;

    return (
        <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
            
            <div className="stars" aria-hidden />
            <OrbitRings />

            <div className="absolute left-1/2 -translate-x-1/2 text-center z-30">
                <h1 className="font-display font-medium bg-[linear-gradient(90deg,rgba(237,237,237,1),rgba(182,182,182,1))]
     bg-clip-text text-transparent
     text-3xl sm:text-4xl md:text-[3rem] lg:text-[4rem]
     tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em]">
                    {activePlanet.name}
                </h1>

                <div className="mt-4 flex flex-wrap gap-12 sm:gap-10 md:gap-14
 justify-center text-[0.8rem]">
                    <div className="text-left">
                        <div className="text-[0.65rem] tracking-[0.2em] text-[rgba(189,197,226,0.7)] font-medium">
                            GALAXY
                        </div>
                        <div className="mt-1 text-[rgba(255, 255, 255, 0.9)] font-medium">{activePlanet.galaxy}</div>
                    </div>

                    <div className="text-left">
                        <div className="text-[0.65rem] tracking-[0.2em] text-[rgba(189,197,226,0.7)] font-medium">
                            DIAMETER
                        </div>
                        <div className="mt-1 text-[rgba(255, 255, 255, 0.9)] font-medium">{activePlanet.diameter}</div>
                    </div>

                    <div className="text-left">
                        <div className="text-[0.65rem] tracking-[0.2em] text-[rgba(189,197,226,0.7)] font-medium">
                            DAY LENGTH
                        </div>
                        <div className="mt-1 text-[rgba(255, 255, 255, 0.9)] font-medium">{activePlanet.dayLength}</div>
                    </div>

                    <div className="text-left">
                        <div className="text-[0.65rem] tracking-[0.2em] text-[rgba(189,197,226,0.7)] font-medium">
                            AVG TEMPERATURE
                        </div>
                        <div className="mt-1 text-[rgba(255, 255, 255, 0.9)] font-medium">{activePlanet.avgTemp}</div>
                    </div>

                    <div className="text-left">
                        <div className="text-[0.65rem] tracking-[0.2em] text-gray-400">
                            CLIMATE
                        </div>
                        <div className="mt-1 text-[rgba(255, 255, 255, 0.9)] font-medium">{activePlanet.climate}</div>
                    </div>
                </div>
            </div>

            {PLANETS.filter((p) => p.id !== activeId).map((planet) => (
                <Planet
                    key={planet.id}
                    planet={planet}
                    isActive={false}
                    onClick={setActiveId}
                />
            ))}

            <div className="absolute left-1/2 
     top-[60%] sm:top-[62%] md:top-[63%]
     -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    key={`aura-${activePlanet.id}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                    className="relative flex items-center justify-center"
                    style={{ width: auraSize, height: auraSize }}
                >

                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: activePlanet.glow,
                            filter: "blur(8px)",
                            opacity: 0.9,
                        }}
                    />

                    {/* actual big planet */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePlanet.id}
                            layoutId={`planet-${activePlanet.id}`}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.55, type: "spring", stiffness: 90 }}
                            className="rounded-full overflow-hidden"
                            style={{
                                width: planetSize,
                                height: planetSize,
                            }}
                        >

                            <img
                                src={activePlanet.image}
                                alt={activePlanet.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

export default SolarSystem;
