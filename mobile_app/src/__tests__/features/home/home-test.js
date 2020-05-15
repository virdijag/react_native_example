
import 'react-native';
import React from 'react';
import HomeScreen from '../../../features/home/index';
import HomeForm from '../../../features/home/home-form';

describe("Home components render correctly", () =>{

    it('Home screen renders without crashing', () => {
     <HomeScreen  />
    });   

    it('Home Form renders without crashing', () => {
        <HomeForm title="Test" />
    });     
   
 });
