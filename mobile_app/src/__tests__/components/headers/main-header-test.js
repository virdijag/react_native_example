
import 'react-native';
import React from 'react';
import MainHeader from '../../../components/headers/main-header';
import ScreenHeader from '../../../components/headers/screen-header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Header commponents render correctly", () =>{

    it('Main header renders without crashing', () => {
     <MainHeader title="Test" />
    });   

    it('Screen header renders without crashing', () => {
        <ScreenHeader title="Test" />
    });      
   
 });
