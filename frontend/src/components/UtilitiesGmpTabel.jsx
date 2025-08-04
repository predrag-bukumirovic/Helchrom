const tableData = [
  {
    no: "Material Requirements",
    what: "Must meet pharmaceutical-grade standards",
    why: "Food-contact materials must comply with food safety regulations",
  },
  {
    no: "Cleaning Validations",
    what: "Mandatory)",
    why: "Required only in high-risk or shared equipment scenarios",
  },
  {
    no: "Utilities (Water, Air, Steam)",
    what: "Purified Water (PW), WFI, Clean Steam required and validated",
    why: "Potable water (minimum); food-grade air/gases; risk-based filtration ",
  },
];

const UtilitiesGmpTable = () => {
  return (
    <div className="integratingTable">
      <table>
        <thead>
          <tr>
            <th>Equipment Area</th>
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

export default UtilitiesGmpTable;
