import React from "react";
import "jsdom-global/register";
import {expect} from "chai";
import Cell from "../src/Cell";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("Cell", () => { 

    it("should have cell when the app is rendered" ,()=>{
        let cellComponent = shallow(<Cell />);
        expect(cellComponent.hasClass("cell")).to.be.true;
    });

    it("should be an empty cell when rendered", ()=>{
        let cellComponent = shallow(<Cell />);
        expect(cellComponent.text()).to.be.empty;
    });

    it("should have an X mark when the first player clicks on the cell", ()=>{
		let cellComponent = shallow(<Cell />);
		expect(cellComponent.text()).to.be.empty;
        cellComponent.simulate("click");
        expect(cellComponent.text()).to.be.equals("X");
    });

    it("should have an O mark when the second player clicks on an empty cell", ()=>{
		let cellComponent = shallow(<Cell />);
		expect(cellComponent.text()).to.be.empty;
		cellComponent.simulate("click");
		cellComponent.simulate("click");
        expect(cellComponent.text()).to.be.equals("O");
    });


});