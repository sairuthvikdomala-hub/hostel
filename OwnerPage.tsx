import React, { useState } from "react";

type Hostel = {
  name: string;
  rent: number;
  vacancies: number;
  image: string;
};

type OwnerPageProps = { goBack: () => void };

const OwnerPage: React.FC<OwnerPageProps> = ({ goBack }) => {
  const [hostels, setHostels] = useState<Hostel[]>([
    { name: "Nagarjuna mens executive", rent: 5000, vacancies: 5, image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg" },
    { name: "COZY heaven", rent: 4000, vacancies: 3, image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" },
  ]);

  const addHostel = () => {
    const name = prompt("Enter Hostel Name") || "New Hostel";
    const rent = parseInt(prompt("Enter Rent") || "5000");
    const vacancies = parseInt(prompt("Enter Vacancies") || "5");
    const image = prompt("Enter Image URL") || "https://via.placeholder.com/220x140";

    setHostels([...hostels, { name, rent, vacancies, image }]);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Hostels list</h1>

      <div style={gridStyle}>
        {hostels.map((hostel, index) => (
          <div key={index} style={cardStyle}>
            <img src={hostel.image} alt={hostel.name} style={imageStyle} />
            <div style={infoStyle}>
              <p style={hostelNameStyle}>{hostel.name}</p>
              <p style={hostelDetailsStyle}>₹{hostel.rent}/month</p>
              <p style={hostelDetailsStyle}>Vacancies: {hostel.vacancies}</p>
            </div>
          </div>
        ))}

        {/* Floating + button */}
        <div style={addButtonStyle} onClick={addHostel}>+</div>
      </div>

      <button style={goBackButtonStyle} onClick={goBack}>⬅ Go Back</button>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = { padding: "20px", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", background: "#f8f8f8" };
const titleStyle: React.CSSProperties = { fontSize: "36px", marginBottom: "20px", textAlign: "center" };
const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", position: "relative" };
const cardStyle: React.CSSProperties = { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" };
const imageStyle: React.CSSProperties = { width: "100%", height: "140px", objectFit: "cover" };
const infoStyle: React.CSSProperties = { padding: "10px" };
const hostelNameStyle: React.CSSProperties = { fontWeight: "bold", fontSize: "18px", marginBottom: "5px" };
const hostelDetailsStyle: React.CSSProperties = { fontSize: "14px", color: "#555", margin: "2px 0" };

const addButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "-25px",
  right: "0",
  backgroundColor: "#FF7F50",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "28px",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const goBackButtonStyle: React.CSSProperties = {
  marginTop: "20px",
  padding: "12px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#FF7F50",
  color: "#fff",
};

export default OwnerPage;
