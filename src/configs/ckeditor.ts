// ckeditor.ts
import { ClassicEditor as ClassicEditorBase } from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import { Essentials } from "@ckeditor/ckeditor5-essentials/src/essentials";
import { Bold } from "@ckeditor/ckeditor5-basic-styles/src/bold";
import { Italic } from "@ckeditor/ckeditor5-basic-styles/src/italic";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  Essentials,
  Bold,
  Italic,
  Paragraph,
  Base64UploadAdapter,
];

ClassicEditor.defaultConfig = {
  toolbar: ["bold", "italic", "|", "uploadImage", "|", "undo", "redo"],
};
