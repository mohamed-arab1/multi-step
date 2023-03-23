import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PickAdd } from './components/pickAdd/PickAdd';
import { SideBar } from './components/sideBar/SideBar';
import { YourPlan } from './components/yourPlan/YourPlan';
import { YourInfo } from './components/yourInfo/YourInfo';
import { ThankYou } from './components/thankYou/ThankYou';
import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import { Finshing } from './components/finishing/Finshing';

function App() {
  const [date, setDate] = useState("Monthely");
  const [checkId, setCheckId] = useState("");
  const [checkURL, setCheckURL] = useState("");

  const [online, setOnline] = useState(false);
  const [larger, setLarger] = useState(false);
  const [customizable, setCustomizable] = useState(false);

  const toggelButton = () => {
    if (date === "Monthely") {
      setDate("Yearly");
    }
    if (date === "Yearly") {
      setDate("Monthely")
    }
  }


  const dataOfPlan = [
    {
      id: "1",
      icon: arcade,
      planName: "Arcade",
      subtitle: date === "Yearly" ? 90 : 9,
      discount: date === "Yearly" ? "2 months free" : ""
    },
    {
      id: "2",
      icon: advanced,
      planName: "Advanced",
      subtitle: date === "Yearly" ? 120 : 12,
      discount: date === "Yearly" ? "2 months free" : ""
    },
    {
      id: "3",
      icon: pro,
      planName: "Pro",
      subtitle: date === "Yearly" ? 150 : 15,
      discount: date === "Yearly" ? "2 months free" : ""
    },
  ]

  const dataOfPick = [
    {
      id: 1,
      selected: online,
      namePick: "Onlien Service",
      price: date === "Yearly" ? 10 : 1,
    },
    {
      id: 2,
      selected: larger,
      namePick: "Larger storage",
      price: date === "Yearly" ? 20 : 2,
    },
    {
      id: 3,
      selected: customizable,
      namePick: "Customizable Profile",
      price: date === "Yearly" ? 20 : 1,
    },
  ]

  const filterDataOfPlan = dataOfPlan.filter(data => data.id === checkId);

  const filterDataOfPick = dataOfPick.filter(data => data.selected === true);

  const location = useLocation();

  useEffect(()=>{
    setCheckURL(location.pathname.toString())
  },[location])


  return (
    <div className="App">
      <div className='container'>
        <SideBar url={checkURL} />
        <Routes>
          <Route path='/' element={<YourInfo />} />
          <Route
            path='/yourPlan'
            element={
              <YourPlan
                data={dataOfPlan}
                date={date}
                checkId={checkId}
                setCheckId={setCheckId}
                toggelButton={toggelButton}
              />
            }
          />
          <Route
            path='/pickAdd'
            element={
              <PickAdd
                online={online}
                larger={larger}
                customizable={customizable}
                setOnline={setOnline}
                setLarger={setLarger}
                setCustomizable={setCustomizable}
                date={date}
              />
            } />
          <Route
            path='/finishing'
            element={
              <Finshing
                date={date}
                filterData={filterDataOfPlan}
                filterDataOfPick={filterDataOfPick}
              />
            }
          />
          <Route path='/thankYou' element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
