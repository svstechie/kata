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

    it('check first click should print the value X', () => {
        const component = mount(<Board />);
        component.find('.cell').at(0).simulate('click');
        expect(component.find('.cell').at(0).text()).to.equal('X');  
    });

    it('check second click should print the value O', () => {
        const component = mount(<Board />);
        component.find('.cell').at(0).simulate('click');
        component.find('.cell').at(1).simulate('click');
        expect(component.find('.cell').at(1).text()).to.equal('O');  
    });

    it('check alternative values should be print on each click starting with X ', () => {
        const component = mount(<Board />);
        let a=0;
         component.find('.cell').forEach((node) => {
                if(a%2 == 0) {
                    component.find('.cell').at(a).simulate('click');
                    expect(component.find('.cell').at(a).text()).to.equal('X');  

                } else {
                    component.find('.cell').at(a).simulate('click');
                    expect(component.find('.cell').at(a).text()).to.equal('O');  
                }
           })  
    });


})