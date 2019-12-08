import React from "react";
import "jsdom-global/register";
import {expect} from "chai";
import Board from "../src/Board";
import Cell from "../src/Cell";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Board", () => {

    it('should have nine Cell components', () => {
        let boardComponent = mount(<Board />)
        expect(boardComponent.find(Cell)).length(9);
    });

    it('should have three rows', () => {
        let boardComponent = mount(<Board />)
        expect(boardComponent.find(".row")).to.have.lengthOf(3);
    });

    it('check 9 cells should be clickable', () => {
        const component = mount(<Board />);
        let a=0;
         component.find('.cell').forEach((node) => {
            node.forEach((cellNode) => {
                cellNode.simulate('click');                    
                a++;
            });
           })
           expect(a).to.equal(9);  
    });

})