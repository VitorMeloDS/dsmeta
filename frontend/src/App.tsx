import Header from "./components/Header";
// import NotificationButton from "./components/NotificationButton";
import SalesCard from './components/SalesCard'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
