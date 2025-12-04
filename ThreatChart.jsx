import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ThreatChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <XAxis dataKey="t" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip contentStyle={{ background: "rgba(0,0,0,.6)", border: 0 }} />
        <Line type="monotone" dataKey="v" stroke="#00d4ff" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
