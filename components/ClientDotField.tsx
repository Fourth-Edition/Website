'use client';

import dynamic from "next/dynamic";

const DotField = dynamic(() => import("@/components/DotField"), {
  ssr: false,
});

export default function ClientDotField(props: Record<string, any>) {
  return <DotField {...props} />;
}
