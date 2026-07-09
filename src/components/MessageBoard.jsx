import { useEffect, useState } from "react";

const storageKey = "family-site-react-messages";

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setMessages(saved ? JSON.parse(saved) : []);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const message = formData.get("message").trim();

    if (!name || !message) {
      setStatus("请填写姓名和留言内容。");
      return;
    }

    const nextMessages = [...messages, { name, message }];
    setMessages(nextMessages);
    localStorage.setItem(storageKey, JSON.stringify(nextMessages));
    event.currentTarget.reset();
    setStatus("留言已保存到本机浏览器。");
  }

  return (
    <section className="section message-section" id="message">
      <div className="message-copy">
        <p className="eyebrow">Message</p>
        <h2>给我留言</h2>
        <p>
          欢迎家人、同学和朋友留下祝福、建议或想一起记录的故事。当前版本会把留言保存在本机浏览器里。
        </p>
      </div>

      <form className="message-form" onSubmit={handleSubmit}>
        <label>
          姓名
          <input type="text" name="name" placeholder="请输入你的名字" required />
        </label>
        <label>
          留言
          <textarea name="message" rows="5" placeholder="写下想说的话" required />
        </label>
        <button className="button primary" type="submit">
          提交留言
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </form>

      <div className="messages">
        <h3>最近留言</h3>
        <ul className="message-list">
          {messages.length === 0 ? (
            <li>
              <strong>欢迎留言</strong>
              <span>还没有留言，期待第一条祝福。</span>
            </li>
          ) : (
            messages
              .slice()
              .reverse()
              .map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <strong>{item.name}</strong>
                  <span>{item.message}</span>
                </li>
              ))
          )}
        </ul>
      </div>
    </section>
  );
}
