import SectionHeading from "./SectionHeading.jsx";
import { planItems } from "../data/siteData.js";

export default function Plans() {
  return (
    <section className="section" id="plans">
      <SectionHeading eyebrow="Plans" title="未来规划">
        把长期目标拆成可执行的小计划，陪孩子慢慢完成。
      </SectionHeading>

      <div className="timeline">
        {planItems.map((item) => (
          <article key={item.title}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
