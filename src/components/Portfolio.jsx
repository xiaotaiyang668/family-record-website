import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { portfolioItems } from "../data/siteData.js";

const filters = [
  { key: "all", label: "全部" },
  { key: "growth", label: "成长" },
  { key: "work", label: "作品" },
  { key: "travel", label: "旅行" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="section soft" id="portfolio">
      <SectionHeading eyebrow="Portfolio" title="作品集">
        这里可以放孩子作品、家庭旅行、成长照片和学习记录。
      </SectionHeading>

      <div className="filter-bar" aria-label="作品分类筛选">
        {filters.map((filter) => (
          <button
            className={`filter-button ${activeFilter === filter.key ? "active" : ""}`}
            type="button"
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {visibleItems.map((item) => (
          <article className="portfolio-card" key={item.title}>
            <img src={item.image} alt={item.alt} />
            <div>
              <span>{item.categoryLabel}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
