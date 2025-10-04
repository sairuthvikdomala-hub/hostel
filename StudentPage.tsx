import React, { useState } from "react";

type Hostel = {
  name: string;
  location: string;
  rent: number;
  gender: "Male" | "Female";
  rating: number;
  vacancies: number;
  image: string;
};

type StudentPageProps = { goBack: () => void };

const StudentPage: React.FC<StudentPageProps> = ({ goBack }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [filterGender, setFilterGender] = useState<"Male" | "Female">("Male");
  const [sortOption, setSortOption] = useState<"Price" | "Rating" | "Vacancies">("Price");

  const [hostels] = useState<Hostel[]>([
    { name: "Blue Sky Hostel", location: "Shamshabad", rent: 5000, gender: "Male", rating: 4.5, vacancies: 3, image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg" },
    { name: "Green Valley Hostel", location: "Shamshabad", rent: 4000, gender: "Female", rating: 4.0, vacancies: 2, image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" },
    { name: "Sunny Stay", location: "Shamshabad", rent: 4500, gender: "Male", rating: 4.2, vacancies: 5, image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" },
  ]);

  // Filter by location and gender
  let filteredHostels = hostels.filter(h =>
    h.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
    h.gender === filterGender
  );

  // Sort based on selected option
  filteredHostels.sort((a, b) => {
    if (sortOption === "Price") return a.rent - b.rent;
    if (sortOption === "Rating") return b.rating - a.rating;
    if (sortOption === "Vacancies") return b.vacancies - a.vacancies;
    return 0;
  });

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🔎 Find Hostels</h1>

      {/* Search & Filters */}
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Enter location"
          value={searchLocation}
          onChange={e => setSearchLocation(e.target.value)}
          style={searchInputStyle}
        />
        <select value={filterGender} onChange={e => setFilterGender(e.target.value as "Male" | "Female")} style={genderSelectStyle}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select value={sortOption} onChange={e => setSortOption(e.target.value as any)} style={sortSelectStyle}>
          <option value="Price">Sort by Price</option>
          <option value="Rating">Sort by Rating</option>
          <option value="Vacancies">Sort by Vacancies</option>
        </select>
      </div>

      {/* Hostel Cards */}
      <div style={gridStyle}>
        {filteredHostels.map((hostel, index) => (
          <div key={index} style={cardStyle}>
            <img src={hostel.image} alt={hostel.name} style={imageStyle} />
            <div style={infoStyle}>
              <p style={hostelNameStyle}>{hostel.name}</p>
              <p style={hostelDetailsStyle}>{hostel.location}</p>
              <p style={hostelDetailsStyle}>₹{hostel.rent}/month</p>
              <p style={hostelDetailsStyle}>Rating: {hostel.rating} ⭐</p>
              <p style={{...hostelDetailsStyle, color: hostel.vacancies > 0 ? "green" : "red"}}>
                {hostel.vacancies > 0 ? `${hostel.vacancies} Vacancies` : "Full"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button style={goBackButtonStyle} onClick={goBack}>⬅ Go Back</button>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = { padding: "20px", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", background: "#f8f8f8" };
const titleStyle: React.CSSProperties = { fontSize: "36px", marginBottom: "20px", textAlign: "center" };
const searchContainerStyle: React.CSSProperties = { display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" };
const searchInputStyle: React.CSSProperties = { padding: "12px 20px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc", flex: 1, minWidth: "300px" };
const genderSelectStyle: React.CSSProperties = { padding: "12px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc" };
const sortSelectStyle: React.CSSProperties = { padding: "12px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc" };

const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" };
const cardStyle: React.CSSProperties = { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", cursor: "pointer", transition: "transform 0.2s" };
const imageStyle: React.CSSProperties = { width: "100%", height: "140px", objectFit: "cover" };
const infoStyle: React.CSSProperties = { padding: "10px" };
const hostelNameStyle: React.CSSProperties = { fontWeight: "bold", fontSize: "18px", marginBottom: "5px" };
const hostelDetailsStyle: React.CSSProperties = { fontSize: "14px", color: "#555", margin: "2px 0" };

const goBackButtonStyle: React.CSSProperties = { marginTop: "20px", padding: "12px 20px", fontSize: "16px", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "#FF7F50", color: "#fff" };

export default StudentPage;
