import React from "react";
import "jsdom-global/register";
import {expect} from "chai";
import App from "../src/App";
import Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("App rendering",() => {
    describe("Renders Board", () => {
        it("Should render a board with one position", () => {
            const wrapper = shallow(<App />)
            expect(wrapper.find('h1')).to.be.lengthOf(1);
        });
    });
});