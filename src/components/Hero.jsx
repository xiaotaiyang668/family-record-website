export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Family Journal</p>
        <h1>把每天的小开心，认真收进我们家的相册。</h1>
        <p className="hero-copy">
          像放学路上的樱桃汽水和温柔晚风一样，记录孩子成长、家庭日常、作品收藏和未来的小计划。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#portfolio">
            看看成长小作品
          </a>
          <a className="button secondary" href="#message">
            写一句温暖留言
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src="images/family/sunny-closeup.jpg"
          alt="孩子抱着玩偶的温暖生活照"
        />
      </div>
    </section>
  );
}
