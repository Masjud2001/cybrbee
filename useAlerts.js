import { useEffect, useState } from "react";

// Fake generator – remove when CybrBee gives you the real thing
const dummyAlerts = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  severity: ["low", "medium", "high"][i % 3],
  title: ["Suspicious login", "Malware hash", "Phishing email"][i % 3],
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  time: Date.now() - i * 6e4,
}));

const history = Array.from({ length: 24 }, (_, i) => ({
  t: new Date(Date.now() - i * 36e5).toLocaleTimeString([], { hour: "2-digit" }),
  v: Math.floor(Math.random() * 30 + 10),
}));

export default function useAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [summary, setSummary] = useState({ active: 0, resolved: 0, score: 0, history });

  useEffect(() => {
    // Replace with: fetch("https://api.cybrbee.com/v1/alerts")
    //   .then(r => r.json())
    //   .then(setAlerts)
    setTimeout(() => {
      setAlerts(dummyAlerts);
      setSummary({ active: 3, resolved: 12, score: 42, history });
    }, 500);
  }, []);

  return { alerts, summary };
}
