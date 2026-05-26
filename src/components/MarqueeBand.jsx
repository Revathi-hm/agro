const items = [
  "Desiccated Coconut Powder",
  "Virgin Coconut Oil",
  "Coconut Milk",
  "Coconut Flakes",
  "Coconut Shell",
  "Testa",
  "D-Fat Powder",
  "Coconut Milk Powder",
];

const doubled = [...items, ...items];

export default function MarqueeBand() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
