import CounterContext from "../context/CounterContext";
import Child from "./Child";
import { mount } from "enzyme";

describe("Child", () => {
    const renderWithContext = (counterValue) => {
        return (
            <CounterContext.Provider value={counterValue}>
                <Child />
            </CounterContext.Provider>
        );
    }

    test("should render successfully but the counter is undefined", () => {
        const wrapper = mount(<Child />);

        expect(wrapper.find("h3").text()).toEqual("Child");
        expect(wrapper.find("p").text()).toEqual("Counter state from context: undefined");
    });

    test("should render successfully with the CounterContext set to 7", () => {
        const wrapper = mount(renderWithContext(3));

        expect(wrapper.find("h3").text()).toEqual("Child");
        expect(wrapper.find("p").text()).toEqual("Counter state from context: 3");
    });
})