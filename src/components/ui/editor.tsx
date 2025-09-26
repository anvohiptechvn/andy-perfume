"use client";

import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Copy,
  CopyCheck,
  ImageUp,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo2,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  Trash,
  Undo2,
} from "lucide-react";

import { cn } from "@/utils/style";
import { CustomImage } from "@/configs/image-editor";
import { Textarea } from "./text-area";

export default function Editor({ initial = "" }: { initial?: string }) {
  const [content, setContent] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [rawHTML, setRawHTML] = useState<string>("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      CustomImage.configure({ allowBase64: true }), // ⬅️ use CustomImage
      Heading.configure({ levels: [1, 2, 3] }),
      Blockquote,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
      }),
    ],
    content: initial,
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  useEffect(() => {
    setRawHTML(content.replace(/"/g, "'"));
  }, [content]);

  const onAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor
        .chain()
        .focus()
        .setImage({ src: reader.result as string })
        .run();
    };
    reader.readAsDataURL(file);
  };

  const onUpdateLink = () => {
    const url = prompt("Enter a URL");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  const onCopy = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(content);
      setCopied(true);
    }
  };

  if (!editor) return null;

  return (
    <div>
      <div className="border rounded">
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b px-2 py-1">
          {/* Paragraph/Heading dropdown */}
          <select
            className="border rounded px-1 py-0.5"
            onChange={(e) => {
              const level = e.target.value;
              if (level === "paragraph") {
                editor.chain().focus().setParagraph().run();
              } else {
                editor
                  .chain()
                  .focus()
                  .toggleHeading({ level: parseInt(level) as 1 | 2 | 3 })
                  .run();
              }
            }}
            value={
              editor.isActive("heading", { level: 1 })
                ? "1"
                : editor.isActive("heading", { level: 2 })
                  ? "2"
                  : editor.isActive("heading", { level: 3 })
                    ? "3"
                    : "paragraph"
            }
          >
            <option value="paragraph">Paragraph</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>

          {/* Formatting buttons */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive("bold") ? "font-bold text-blue-600" : ""
            )}
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive("italic") ? "font-bold text-blue-600" : ""
            )}
          >
            <Italic size={16} />
          </button>
          <button
            onClick={onUpdateLink}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive("link") ? "font-bold text-blue-600" : ""
            )}
          >
            <LinkIcon size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive("bulletList") ? "font-bold text-blue-600" : ""
            )}
          >
            <List size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive("orderedList") ? "font-bold text-blue-600" : ""
            )}
          >
            <ListOrdered size={16} />
          </button>

          {/* Align Text*/}
          <button
            onClick={() => editor.chain().focus().toggleTextAlign("left").run()}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive({ textAlign: "left" })
                ? "font-bold text-blue-600"
                : ""
            )}
            title="Align Left"
          >
            <TextAlignStart size={16} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleTextAlign("center").run()
            }
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive({ textAlign: "center" })
                ? "font-bold text-blue-600"
                : ""
            )}
            title="Align Center"
          >
            <TextAlignCenter size={16} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleTextAlign("right").run()
            }
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive({ textAlign: "right" })
                ? "font-bold text-blue-600"
                : ""
            )}
            title="Align Right"
          >
            <TextAlignEnd size={16} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleTextAlign("justify").run()
            }
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive({ textAlign: "justify" })
                ? "font-bold text-blue-600"
                : ""
            )}
            title="Justify"
          >
            <TextAlignJustify size={16} />
          </button>

          {/* Image upload */}
          <label className="p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
            <ImageUp size={16} />
            <input type="file" accept="image/*" onChange={onAddImage} hidden />
          </label>

          {/* Blockquote */}
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={cn(
              "p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer",
              editor.isActive("blockquote") ? "font-bold text-blue-600" : ""
            )}
          >
            <Quote size={16} />
          </button>

          {/* Undo/Redo */}
          <button
            className="p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed text-black disabled:text-gray-300 disabled:hover:bg-white"
            onClick={() =>
              editor.can().undo() ? editor.chain().focus().undo().run() : null
            }
            disabled={!editor.can().undo()}
          >
            <Undo2 size={16} />
          </button>
          <button
            className="p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed text-black disabled:text-gray-300 disabled:hover:bg-white"
            onClick={() =>
              editor.can().redo() ? editor.chain().focus().redo().run() : null
            }
            disabled={!editor.can().redo()}
          >
            <Redo2 size={16} />
          </button>
        </div>

        {/* Editor area */}

        <EditorContent editor={editor} className="h-full" />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Raw HTML output:</h3>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 border rounded hover:bg-gray-100 text-sm cursor-pointer flex items-center gap-2"
              onClick={onCopy}
            >
              {copied ? <CopyCheck size={16} /> : <Copy size={16} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
            <button
              className="ml-2 px-3 py-1 border rounded hover:bg-gray-100 text-sm cursor-pointer flex items-center gap-2"
              onClick={() => {
                setRawHTML((prev) =>
                  prev.replace(
                    /(<img[^>]+src=['"])data:image\/[^'"]+(['"][^>]*>)/g,
                    "$1$2"
                  )
                );
              }}
            >
              <Trash size={16} className="text-red-500" /> Remove base64Str
            </button>
          </div>
        </div>

        <Textarea
          className="border p-2 min-h-40 resize-none"
          value={rawHTML}
          onChange={(e) => setRawHTML(e.target.value)}
        />
      </div>
    </div>
  );
}
