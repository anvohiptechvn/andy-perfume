"use client";

import PageWrapper from "@/components/feature/page/page-wrapper";

import dynamic from "next/dynamic";

const EditorCK = dynamic(() => import("@/components/ui/editor-ck"), {
  ssr: false, // ⬅ disables SSR just for this component
});

const EditorPage = () => {
  return (
    <PageWrapper className="gap-3 border-0 p-0">
      {/* <EditorCK /> */}
      <></>
    </PageWrapper>
  );
};

export default EditorPage;
