import Image from "@tiptap/extension-image";

export const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      align: {
        default: "center",
        parseHTML: (element) => element.getAttribute("data-align") || "center",
        renderHTML: (attributes) => {
          const align = attributes.align || "center";
          return {
            "data-align": align,
            style: `
              display: block;
              margin-left: ${align === "left" ? "0" : "auto"};
              margin-right: ${align === "right" ? "0" : "auto"};
            `,
          };
        },
      },
    };
  },
});
