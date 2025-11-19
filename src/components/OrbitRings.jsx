
const OrbitRings = () => {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform="translate(800 1250)">
        {Array.from({ length: 5 }).map((_, i) => (
          <circle
            key={i}
            className="orbit-ring"
            fill="none"
            r={420 + i * 95}
          />
        ))}
      </g>
    </svg>
  );
}

export default OrbitRings;
