import SectionHeading from "./SectionHeading.jsx";
import { familyMembers } from "../data/siteData.js";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading eyebrow="About Us" title="关于我们家">
        用简单、温暖、清晰的方式，把生活里的重要时刻整理起来。
      </SectionHeading>

      <div className="family-grid">
        {familyMembers.map((member) => (
          <article className="family-card" key={member.title}>
            <img src={member.image} alt={member.alt} />
            <h3>{member.title}</h3>
            <p>{member.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
