import React, { useState } from "react";

const EmploymentVerificationForm = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}api/verify-employment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: employeeId,
          companyName,
          verificationCode,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // If isVerified true than print Verified else Not Verified
        setVerificationResult(data.isVerified ? "Verified" : "Not Verified");
      } else {
        setVerificationResult("Something went wrong. Please check input data.");
      }
    } catch (error) {
      setVerificationResult(error);
    }
  };

  // Display result with color
  const resultStyle = {
    color: verificationResult === "Verified" ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <React.Fragment>
      <h2>Employment Verification Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="number"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Verification Code:</label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Verify</button>
      </form>
      <h4 style={resultStyle}>{verificationResult}</h4>
    </React.Fragment>
  );
};

export default EmploymentVerificationForm;
