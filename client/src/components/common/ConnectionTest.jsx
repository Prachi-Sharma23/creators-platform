import { useState } from "react";

const ConnectionTest = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testConnection = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/health");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError("Failed to connect to server: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", marginTop: "2rem" }}>
      <h3>Backend Connection Test</h3>

      <button onClick={testConnection} disabled={loading}>
        {loading ? "Testing..." : "Test Connection"}
      </button>

      {message && <p style={{ color: "green" }}>✅ {message}</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
    </div>
  );
};

export default ConnectionTest;
