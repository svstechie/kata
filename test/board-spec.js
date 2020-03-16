import React from "react";
import "jsdom-global/register";
import {expect} from "chai";
import Board from "../src/Board";
import Cell from "../src/Cell";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("Board", () => {

    it('should have three rows  when it is rendered', () => {
        let boardComponent = shallow(<Board />)
        expect(boardComponent.find(".row")).to.have.lengthOf(3);
    });


    xit('should have three rows with nine cells when it is rendered', () => {
        let boardComponent = shallow(<Board />)
        expect(boardComponent.find(".row .cell")).to.have.lengthOf(9);
    });

    it('should have three cells per row when board is rendered', () => {
        let boardComponent = shallow(<Board />)
        let rowsOnBoard = boardComponent.find('.row')
        expect(rowsOnBoard.at(0).find(Cell)).to.have.lengthOf(3);
        expect(rowsOnBoard.at(1).find(Cell)).to.have.lengthOf(3);
        expect(rowsOnBoard.at(2).find(Cell)).to.have.lengthOf(3);
    });
})