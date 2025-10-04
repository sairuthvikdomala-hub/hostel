import React from "react";

type HomePageProps = {
  goToStudent: () => void;
  goToOwner: () => void;
};

const HomePage: React.FC<HomePageProps> = ({ goToStudent, goToOwner }) => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🏠 Hostel Finder</h1>
      <p style={subtitleStyle}>Find your perfect hostel quickly and easily!</p>

      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={goToStudent}>I am a Student</button>
        <button style={buttonStyle} onClick={goToOwner}>I am an Owner</button>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "100px 20px",
  fontFamily: "'Poppins', sans-serif",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #FFE5D9, #FFDAB9)",
};

const titleStyle: React.CSSProperties = { fontSize: "48px", marginBottom: "10px", color: "#1a1a46" };
const subtitleStyle: React.CSSProperties = { fontSize: "20px", marginBottom: "50px", color: "#4a4a4a" };
const buttonContainerStyle: React.CSSProperties = { display: "flex", gap: "40px" };
const buttonStyle: React.CSSProperties = {
  padding: "20px 40px",
  fontSize: "20px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#fff",
  color: "#FF7F50",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "0.3s",
};

export default HomePage;
