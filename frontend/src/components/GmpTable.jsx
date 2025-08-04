const tableData = [
  {
    no: "Design Drivers",
    what: "GMP compliance, contamination control, cleanroom zoning, equipment qualification",
    why: "Hygiene, material separation, allergen control, ease of cleaning",
  },
  {
    no: "Environmental Controls",
    what: "HVAC with HEPA filters, pressure cascades, cleanroom classifications (Grade A–D)",
    why: "Dust control, temperature/humidity regulation, ventilation adequate for hygiene",
  },
  {
    no: "Flow Design",
    what: "Controlled material/personnel flow with unidirectional zoning",
    why: "Logical flow to avoid cross-contamination; allergen segregation where applicable",
  },
  {
    no: "Facility Qualification",
    what: "Required (DQ/IQ/OQ/PQ) per Annex 15",
    why: "Not mandatory under food law; expected under ISO 22000 or Codex GMP",
  },
  {
    no: "Documentation",
    what: "URS, validation protocols, qualification reports, SOPs",
    why: "HACCP plans, hygiene protocols, cleaning records, traceability logs",
  },
];

const IntegratingTable = () => {
  return (
    <div className="integratingTable">
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Medicinal Products</th>
            <th>Dietary Supplements</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.no}>
              <td>{row.no}</td>
              <td>{row.what}</td>
              <td>{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegratingTable;
