// components/ReactBricksWrapper.tsx
"use client";

import { ReactBricks } from "react-bricks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReactBricksWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [appRootElement, setAppRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAppRootElement(document.getElementById("__next"));
  }, []);

  if (!appRootElement) {
    return null; // Or a fallback loader
  }

  return (
    <ReactBricks
      appId={process.env.NEXT_PUBLIC_APP_ID || "65172023-6671-41fa-a86d-6d3f2a0b82fb"}
      apiKey={process.env.API_KEY || "fe0cc493-2b5f-494f-9702-50be13fd63e6"}
      pageTypes={[]}
      renderLocalLink={(props) => <Link {...props} />}
      navigate={(url: string) => router.push(url)}
      appRootElement={appRootElement}
    >
      {children}
    </ReactBricks>
  );
}
