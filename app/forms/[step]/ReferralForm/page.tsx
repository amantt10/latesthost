import { Suspense } from "react";
import StepFormClient from "./StepFormClient";

export function generateStaticParams() {
  return [
    { step: "1" },
    { step: "2" },
    { step: "3" },
    { step: "4" },
    // Add more steps as needed
  ];
}

// Make this function async and await the argument
export default function FormStepPage(props: { params: { step: string } }) {
  const { params } =  props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StepFormClient step={params.step} />
    </Suspense>
  );
}