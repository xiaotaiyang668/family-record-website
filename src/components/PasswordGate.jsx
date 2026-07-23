import { useEffect, useState } from "react";

const ACCESS_KEY = "family-site-access";
const PASSWORD_HASH = "7dce034e548b1e319664a6f0d28c30d61f3c5fb9765b76aa8c73bd5e391302fc";

async function hashText(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordGate({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setIsUnlocked(sessionStorage.getItem(ACCESS_KEY) === "granted");
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const inputHash = await hashText(password.trim());

    if (inputHash === PASSWORD_HASH) {
      sessionStorage.setItem(ACCESS_KEY, "granted");
      setIsUnlocked(true);
      setStatus("");
      return;
    }

    setStatus("密码不正确，请再试一次。");
  }

  if (isUnlocked) {
    return children;
  }

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <p className="eyebrow">Private Family Journal</p>
        <h1 id="login-title">欢迎回到我们家的小站</h1>
        <p>
          这里保存家庭照片、孩子成长记录和未来计划。请输入访问密码后继续浏览。
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            访问密码
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="请输入访问密码"
              autoComplete="current-password"
              required
            />
          </label>
          <button className="button primary" type="submit">
            进入网站
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </section>
    </main>
  );
}
