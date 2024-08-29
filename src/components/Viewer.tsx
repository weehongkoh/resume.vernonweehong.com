"use client";

import React from "react";

import dynamic from "next/dynamic";

import MyDocument from "@/components/MyDocument";
import { ResumeProp } from "@/types";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

const ViewPDF = ({ data }: { data: ResumeProp }) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <MyDocument data={data} />
    </PDFViewer>
  </div>
);

export default ViewPDF;
