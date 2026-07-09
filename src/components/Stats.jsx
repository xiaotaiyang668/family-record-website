import { stats } from "../data/siteData.js";

export default function Stats() {
  return (
    <section className="section intro-band" aria-label="网站概览">
      {stats.map((item) => (
        <div className="stat" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
