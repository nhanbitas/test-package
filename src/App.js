import Tooltip from "abctest03/dist/Tooltip";
import "./App.css";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "abctest01-typescript";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <Tooltip />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Accordion style={{ width: "50%", margin: "50px" }} title="Accordion">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
              <div>Yes! You can animate the Accordion with CSS or JavaScript.</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
}

export default App;
