import { Suspense } from "react";
import StepFormClient from "./StepFormClient";

export function generateStaticParams() {
  return [
    { step: "1" },
    { step: "2" },
    { step: "3" },
    { step: "4" },
    { step: "5" },
    { step: "6" },
    { step: "7" },
    { step: "8" },
    { step: "9" },
  ];
}

// Use the correct type for props
export default function FormStepPage(props: { params: { step: string } }) {
  const { params } =  props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StepFormClient step={params.step} />
    </Suspense>
  );
}