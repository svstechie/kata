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

    it('should have one row with three cells when it is rendered', () => {
        let boardComponent = shallow(<Board />)
        expect(boardComponent.find(".row .cell")).to.have.lengthOf(3);
    })

})