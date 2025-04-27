import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/nullStyle.scss";

function App() {
  return (
    <div className="background">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
