const CATS = ['All','Education','Music','Sports','Gaming','News','Comedy','Science','Tech','Travel'];

export default function Filters({ value, onChange }) {
  return (
    <div className="filters">
      {CATS.map(c => (
        <button key={c} onClick={() => onChange(c)} style={{ opacity: value===c?1:0.75 }}>
          {c}
        </button>
      ))}
    </div>
  );
}
