export default function AlertCard({ severity, title, time, body }) {
  const color = { low: "#00d4ff", medium: "#ffb800", high: "#ff4d4d" }[severity];
  return (
    <div className="alert-card glass">
      <div className="dot" style={{ background: color }} />
      <div className="meta">
        <strong>{title}</strong>
        <span>{new Date(time).toLocaleTimeString()}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
