import { useRef } from "react";
import { Tldraw } from "tldraw";
import "./index.css";
import "tldraw/tldraw.css";

export default function App() {
  const editorRef = useRef(null);

  const handleMount = (editor) => {
    editorRef.current = editor;
  };

  const addShape = (x, y, text) => {
    const editor = editorRef.current;
    if (editor) {
      const svgUrl = `http://www.w3.org/2000/svg`;

      editor.createShape({ type: "geo", x, y, props: { w: 150, h: 150, geo: "rectangle" } });
      editor.createShape({ type: "image", x, y, props: { w: 150, h: 150, url: svgUrl } });
      editor.createShape({ type: "text", x, y: y + 160, props: { text } });
    }
  };

  const addCustomSquare = () => addShape(100, 200, "Square Shape");
  const addCustomCross = () => {
    addShape(1100, 100, "Cross Shape");
    addShape(1100, 350, "Cross Shape");
    addShape(900, 350, "Cross Shape");
    addShape(1300, 350, "Cross Shape");
    addShape(1100, 600, "Cross Shape");
  };

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <div style={{ position: "absolute", top: 70, left: 20, zIndex: 10 }}>
        <button onClick={addCustomSquare} style={{ marginRight: 10 }}>Add Custom Square with Icon</button>
        <button onClick={addCustomCross}>Add Custom Cross</button>
      </div>
      <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
        <Tldraw onMount={handleMount} />
      </div>
    </div>
  );
}
