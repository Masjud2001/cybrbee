import AlertCard from "./AlertCard";
import ThreatChart from "./ThreatChart";
import useAlerts from "./useAlerts";

export default function App() {
  const { alerts, summary } = useAlerts();

  return (
    <div className="dashboard">
      <header className="glass">
        <h1>CybrBee SOC</h1>
        <p className="sub">24×7 U.S.-based threat shield</p>
      </header>

      <section className="stats glass">
        <div>
          <span className="label">Active Incidents</span>
          <span className="value">{summary.active}</span>
        </div>
        <div>
          <span className="label">Resolved Today</span>
          <span className="value">{summary.resolved}</span>
        </div>
        <div>
          <span className="label">Threat Score</span>
          <span className="value">{summary.score}</span>
        </div>
      </section>

      <section className="chart glass">
        <ThreatChart data={summary.history} />
      </section>

      <section className="alerts">
        {alerts.map((a) => (
          <AlertCard key={a.id} {...a} />
        ))}
      </section>
    </div>
  );
}
