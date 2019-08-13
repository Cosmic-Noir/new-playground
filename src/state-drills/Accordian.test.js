import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordian from "./Accordian";

describe(`Accordian component`, () => {
  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
    }
  ];

  // Smoke screen test without input
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot with no input:
  it("renders empty given no input", () => {
    const wrapper = shallow(<Accordian />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  //Snapshot rendering content by default
  it("renders the first content section", () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // Snapshot rendering content of second button after clicked
  it("renders the second listItems content", () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
