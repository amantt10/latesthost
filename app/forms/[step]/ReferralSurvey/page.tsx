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
    ];
  }
  
export default function FormStepPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StepFormClient />
        </Suspense>
    );
}