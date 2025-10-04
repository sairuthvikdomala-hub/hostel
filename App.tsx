import React, { useState } from "react";
import HomePage from "./HomePage";
import OwnerPage from "./OwnerPage";
import StudentPage from "./StudentPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "student" | "owner">("home");

  return (
    <>
      {currentPage === "home" && <HomePage goToStudent={() => setCurrentPage("student")} goToOwner={() => setCurrentPage("owner")} />}
      {currentPage === "student" && <StudentPage goBack={() => setCurrentPage("home")} />}
      {currentPage === "owner" && <OwnerPage goBack={() => setCurrentPage("home")} />}
    </>
  );
}

export default App;
