import { useState } from "react";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [input, setInput] = useState("");

  const handleLogin = () => {
    onLogin(); // go to StudentPage
  };

  return (
    <div style={containerStyle}>
      <img src="/logo.png" alt="Logo" style={logoStyle} />
      <h2 style={headingStyle}>Welcome Back!</h2>

      <input type="text" placeholder="Enter mobile or email" value={input} onChange={(e) => setInput(e.target.value)} style={inputStyle} />
      <button onClick={handleLogin} style={loginBtnStyle}>Continue</button>

      <p style={{ marginTop: "15px", color: "#555" }}>or</p>
      <button style={googleBtnStyle}>Continue with Google</button>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "linear-gradient(to bottom, #ffe5d9, #ffd6a5)"
};
const logoStyle: React.CSSProperties = { width: "100px", height: "100px", marginBottom: "20px" };
const headingStyle: React.CSSProperties = { fontSize: "24px", marginBottom: "20px", color: "#333" };
const inputStyle: React.CSSProperties = { padding: "12px", width: "250px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" };
const loginBtnStyle: React.CSSProperties = { padding: "12px", width: "250px", backgroundColor: "#ff7f50", color: "white", fontWeight: "bold", borderRadius: "8px", border: "none", cursor: "pointer" };
const googleBtnStyle: React.CSSProperties = { padding: "12px", width: "250px", backgroundColor: "white", border: "1px solid #ccc", borderRadius: "8px", marginTop: "10px", cursor: "pointer" };
