import { Suspense } from "react";
import StepFormClient from "./StepFormClient";

export function generateStaticParams() {
  return Array.from({ length: 14 }, (_, i) => ({ step: (i + 1).toString() }));
}

export default async function IntakeFormPage(props: { params: { step: string } }) {
  const { params } = await props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StepFormClient step={params.step} />
    </Suspense>
  );
}