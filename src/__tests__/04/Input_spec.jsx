import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  // ...(renders without crashing에 관한 예제 항목)...
  it("has one element", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
});
