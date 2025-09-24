"use client";

import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function EditorCk() {
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <CKEditor
        editor={ClassicEditor as any}
        data="<p>Hello from CKEditor</p>"
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "uploadImage",
            "blockQuote",
            "undo",
            "redo",
          ],
          // simpleUpload: {
          //   uploadUrl: "/api/upload",
          // },
        }}
        onChange={(_, editor: any) => {
          setContent(editor.getData());
        }}
      />

      <h3 className="mt-10 font-bold">Raw HTML output:</h3>
      <div className="border p-2">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
