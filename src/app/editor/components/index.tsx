"use client";

import dynamic from "next/dynamic";

import PageWrapper from "@/components/feature/page/page-wrapper";

const Editor = dynamic(() => import("@/components/ui/editor"), {
  ssr: false, // ⬅ disables SSR just for this component
});

const EditorPage = () => {
  return (
    <PageWrapper className="gap-3 border-0 p-0">
      <Editor />
    </PageWrapper>
  );
};

export default EditorPage;
