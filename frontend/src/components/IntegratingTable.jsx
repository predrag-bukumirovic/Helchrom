import React from "react";

const tableData = [
  {
    no: 1,
    what: "Digital batch-schedule optimization:\nAI evaluates equipment utilization, material availability, and workforce schedules to sequence batches automatically.",
    why: "Plants that adopt dynamic sequencing have cut critical-path times by double-digit percentages and released hidden capacity without new capital spend.",
  },
  {
    no: 2,
    what: "Dynamic operator allocation:\nReal-time production data triggers skill-based operator re-assignment.",
    why: "The right people arrive at the right workstation precisely when needed, cutting change-over delays and overtime.",
  },
  {
    no: 3,
    what: "AI-driven production control:\nMachine learning models monitor live process parameters and adjust set-points to processes on the optimal path.",
    why: "A global sterile drug manufacturer increased production by 15% through real-time optimization, while a North American CDMO improved downstream throughput by up to 60% across multiple sites.",
  },
  {
    no: 4,
    what: "Advanced process control:\nNeural-network models act on multiple inputs simultaneously to hold a desired output (purity, moisture).",
    why: "Combines classic process knowledge with data-driven insights; early adopters report more consistent quality and fewer errors.",
  },
  {
    no: 5,
    what: "Smart monitoring & predictive maintenance:\nComputer-vision systems automatically inspect vials and labels for defects, while anomaly-detection models monitor equipment such as pumps or autoclaves to identify unusual behavior days before a potential failure occurs.",
    why: "Fewer recalls, shorter unplanned shutdowns, and leaner spare-part inventory.",
  },
];

const IntegratingTable = () => {
  return (
    <div className="integratingTable">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>What</th>
            <th>Why</th>
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
