function KpiCard({ title, value, subtitle }) {
  return (
    <div>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <small>{subtitle}</small>
    </div>
  );
}

export default KpiCard;