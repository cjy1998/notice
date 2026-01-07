import { useState, useEffect } from "react";
import { type IUser, API_PREFIX } from "@notic/shared";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    // 模拟从后端获取数据
    // 实际项目中你会 fetch(`http://localhost:3000${API_PREFIX}`)
    const mockData: IUser = {
      id: 1,
      name: "Gemini User",
      email: "user@example.com",
    };
    setUser(mockData);
  }, []);

  return (
    <div>
      <h1>Monorepo Demo</h1>
      <p>
        API Prefix from shared: <code>{API_PREFIX}</code>
      </p>
      {user && (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>User Profile (Shared Interface)</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
