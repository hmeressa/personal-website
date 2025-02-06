import {ICL, endebete, IE, meta, tesla, shopify } from "../../../public/assets/company";
import moment from "moment";
import React from "react";

export const experiences = [
   {
    title: "Developer",
    company_name: "International Clinical Labratory | Ethiopia.",
    icon: ICL,
    iconBg: "#383E56",
    date: `Sept 2024 -  ${moment(Date.now()).format("MM-YYYY")}`,
    position: "Full Stack Engineer",
    technology: "Java | Laravel | Nest |React | Next | MySQL | PostgreSQL | Nginx | Docker | CI/CD | Azure ",
    address: "Bulgaria | Addis Abeba, Ethiopia",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
  {
    title: "Full Stack Web Developer",
    company_name: "IE Network Solutions | Ethiopia.",
    icon: IE,
    iconBg: "#383E56",
    date: `April 2023 -  ${moment(Date.now()).format("MM-YYYY")}`,
    position: "Backend Web Developer",
    technology: "Node | Express | Nest | MySQL | PostgreSQL | Nginx | Docker | CI/CD | Jenkins ",
    address: "Haya Hulet | Festival | Addis Abeba, Ethiopia",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Kerod Apps | Ethiopia",
    icon: endebete,
    iconBg: "#E6DEDD",
    date: "Augest 2022 - Junuary 2023",
    position: "Backend Web Developer",
    technology: "Java | Spring Boot | Laravel | React | MySQL | JDBC | Docker | Jenkins | CI/CD",
    address: "Kerod Apps | Addis Abeba, Ethiopia",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
];