import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { shallow } from "enzyme";

import consultants from "./data/consultants.json";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("avatar", () => {});

describe("name", () => {
  test("it renders the consultant's full name", () => {
    const wrapper = shallow(<Card {...consultants[0]} />);
    expect(wrapper.html()).toContain("Daniel Pavatich");
  });
});

describe("headline", () => {
  test("it renders the consultant's headline", () => {
    const wrapper = shallow(<Card {...consultants[0]} />);
    expect(wrapper.html()).toContain("Digital | People | Leadership");
  });
});

describe("skills", () => {
  test("it renders the consultant's skills as a comma separated string", () => {});

  test("it renders the consultants skills correctly if they have none listed", () => {});
});

describe("worked at", () => {
  test("it renders the consultants worked at", () => {});

  test("it renders the consultants worked at correctly if they have none listed", () => {});
});

describe("status", () => {
  test("it renders the status of the consultant if they're available full time", () => {});

  test("it renders the status of the consultant if they're available part time", () => {});
});

describe("location", () => {
  test("it renders the consultant's location", () => {});

  test("it renders the consultant's location correctly if they have none listed", () => {});
});

describe("remote work", () => {
  test("it renders the consultants remote work status if they can work remotely", () => {});

  test("it renders the consultants remote work status if they cannot work remotely", () => {});
});

describe("rating", () => {
  test("it renders the consultants rating", () => {});

  test("it renders the consultants project count", () => {});
});

describe("rate", () => {
  test("it renders the consultants rate for aud", () => {});

  test("it renders the consultants rate for other currencies", () => {});
});
