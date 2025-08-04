import mainImg from "../assets/images/Blog/Gmp/1.png";
import mainImg1 from "../assets/images/Blog/Gmp/2.png";
import mainImg2 from "../assets/images/Blog/Gmp/3.png";

import img1 from "../assets/images/Blog/Gmp/Slika1.png";
import img2 from "../assets/images/Blog/Gmp/Slika2.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Helmet } from "react-helmet";
import GmpTabel from "../components/GmpTable";
import UtilitiesGmpTable from "../components/UtilitiesGmpTabel";

const mainImages = [mainImg, mainImg1, mainImg2];

const titleBlog =
  "Regulatory Differences in Manufacturing Medicines and Dietary Supplements";

export default function GMP() {
  return (
    <div>
      <Helmet>
        <title>{titleBlog}</title>
      </Helmet>
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {mainImages.map((image, index) => (
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={image}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          ))}
        </CCarousel>
        <div className="box-img">
          {mainImages.map((image, index) => (
            <div key={index}>
              <img loading="lazy" src={image} alt="Main" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-sx padding30">
        <div className="news-post">
          <h1 className="title">{titleBlog}</h1>
        </div>
        <p>
          For companies involved in plant design or multi-sector manufacturing,
          aligning design principles with the regulatory expectations is
          essential from the earliest project stages. Each type of facility must
          be engineered not only for operational effectiveness but for
          compliance, inspection readiness, and product integrity and safety.{" "}
          <br /> <br />
          Manufacturing medicinal products and dietary supplements within the
          European Union is governed by two distinct regulatory frameworks,
          pharmaceutical GMP (Good Manufacturing Practice) and food hygiene
          regulations, respectively. While the end goals of both frameworks are
          aligned, safe, high-quality products for human consumption, the means
          of achieving them differ significantly.
        </p>
        <h2 className="subtitle">
          Major Requirements for Medicine Manufacturing
        </h2>
        <p>
          Medicines are subject to strict market authorization processes, and
          their manufacture must meet detailed requirements across all aspects
          of production.
        </p>
        <p>
          Facility design is especially critical. Cleanroom classifications,
          HVAC zoning, utility infrastructure, and equipment layout must all be
          carefully engineered to minimize risk and prevent cross-contamination.
          The design must support logical and unidirectional flows of materials
          and personnel, aligned with contamination control strategies.
        </p>
        <p>
          Facilities must be clearly segregated into defined functional areas:
        </p>
        <ul>
          <li>Receipt and storage of raw materials</li>
          <li>Processing and packaging areas</li>
          <li>Quarantine and released goods</li>
          <li>Waste handling areas</li>
        </ul>

        <p>
          Surfaces throughout the facility should be smooth, non-reactive, and
          easy to clean, enabling consistent hygiene and maintenance. Design
          considerations must also include restricted access controls and
          personnel hygiene zones to maintain the integrity of classified areas.
          Equipment must be positioned to prevent product mix-ups and facilitate
          proper segregation of processes.
        </p>

        <img
          src={img1}
          alt="Major Requirements for Medicine Manufacturing"
          style={{ width: "100%", margin: "50px 0" }}
        />

        <h2 className="subtitle">Sterile Production</h2>

        <p>
          If sterile production is foreseen, the facility design must account
          for a distinct set of additional requirements. Cleanroom
          classifications must be met, and critical environmental parameters,
          including pressure differentials, temperature, and humidity, must be
          precisely controlled and continuously monitored. The integration of
          HEPA-filtered air supply and defined airflow patterns, such as
          unidirectional flow in aseptic processing zones, is needed to maintain
          sterility.
        </p>
        <p>
          From the early design stages, engineers must prioritize minimal
          operator intervention and ensure the physical separation of clean and
          dirty flows. Clearly defined personnel change areas with appropriate
          zoning, play a critical role in maintaining contamination control. The
          inclusion of barrier systems should be evaluated early in the planning
          process. Likewise, the positioning of airlocks and material transfer
          pathways must be strategically integrated into the facility layout.
        </p>

        <h2 className="subtitle">
          Major Requirements for Dietary Supplements Manufacturing
        </h2>

        <p>
          By contrast, dietary supplements are regulated as food products under
          EU food law. They do not require marketing authorization and are not
          governed by GMP as defined for pharmaceuticals. Instead, they are
          subject to Good Hygiene Practices (GHP) and HACCP-based systems
          (Hazard Analysis and Critical Control Points), which focus on
          identifying and managing risks throughout production processes. <br />
          <br /> The design of a supplement manufacturing facility must follow
          strict hygiene standards. Segregation of raw and finished materials,
          proper ventilation, easy-to-clean surfaces, and adequate sanitation
          areas are all mandatory. Allergen cross-contact, microbial
          contamination, and ingredient traceability are among the critical
          concerns. <br />
          <br />
          While food law does not require equipment or utility validation in the
          same way as pharmaceuticals, modern supplement manufacturers are
          increasingly turning to certified food safety systems such as ISO
          22000 or FSSC 22000, which bring GMP-like structure to the operations.
        </p>

        <img
          src={img2}
          alt="Sterile Production"
          style={{ width: "100%", margin: "50px 0" }}
        />

        <h2 className="subtitle">
          Facility Design and Engineering Considerations
        </h2>

        <GmpTabel />
        <span>
          <i>
            Table 1. Facility Design Considerations - Medicines vs. Dietary
            Supplements
          </i>
        </span>

        <h2 className="subtitle" style={{ marginTop: 30 }}>
          Equipment and Utilities Considerations
        </h2>
        <UtilitiesGmpTable />
        <span>
          <i>
            Table 2. Equipment and Utilities Considerations - Medicines vs.
            Dietary Supplements
          </i>
        </span>

        <h2 className="subtitle" style={{ marginTop: 30 }}>
          What It Means for Plant Design
        </h2>

        <p>
          For engineers and technical consultants, regulatory distinctions
          directly shape how facility design is approached. Risk control and
          compliance requirements must be embedded into both infrastructure and
          operational workflows. Segregated flows, material traceability, and
          contamination control require detailed pre-planning to ensure
          compliance and product integrity.
        </p>
        <p>
          To explore our plant design and engineering solutions, reach out to
          our team:{" "}
          <a href="mailto:office@helmchron.com">office@helmchron.com</a>
        </p>
      </div>
    </div>
  );
}
