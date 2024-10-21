import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const buttons = ["components", "jsx", "props", "state"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS?.map((item) => (
              <CoreConcept key={item.title} {...item}/>
            ))}

            {/* {CORE_CONCEPTS?.map((item) => (
              <CoreConcept
                key={item?.title}
                title={item?.title}
                description={item?.description}
                image={item?.image}
              />
            ))} */}

            {/* <CoreConcept
              title={CORE_CONCEPTS[0]?.title}
              description={CORE_CONCEPTS[0]?.description}
              image={CORE_CONCEPTS[0]?.image}
            />
             */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0]}
              description="The Core UI Building Block."
              img={componentImg}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* {buttons?.map((buttonName) => (
              <TabButton
                key={buttonName}
                onSelect={() => handleSelect(buttonName)}
              >
                {buttonName}
              </TabButton>
            ))} */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
            {/* <TabButton label='Components' /> */}
          </menu>

          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic]?.title}</h3>
              <p>{EXAMPLES[selectedTopic]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic]?.code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
