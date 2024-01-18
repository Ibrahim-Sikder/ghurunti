import React, { useEffect, useRef, useState } from "react";
import styles from "./UserDashBoard.module.css";
import style from "../../components/Banner/Banner.module.css";
import Link from "next/link";
import { Add, Groups2, HorizontalRule, CalendarMonth,} from
"@mui/icons-material";
import TextField from "@mui/material/TextField";
import ActiveLink from "../Banner/ActiveLink";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { DateRange } from "react-date-range";
// import format from "date-fns/format";
// import { addDays } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
const HeroBox = () => {
 const [child, setChild] = useState(0);
 const [adult, setAdult] = useState(0);
 const [infant, setInfant] = useState(0);
 const [value, setValue] = React.useState("1");
 const [checked, setChecked] = React.useState([1]);
 const [classes, setClasses] = useState("");
 const [data, setData] = useState([]);
 const [filterData, setFilterData] = useState([]);
 const [selected, setSelected] = useState([]);
 const [data2, setData2] = useState([]);
 const [filterData2, setFilterData2] = useState([]);
 const [selected2, setSelected2] = useState([]);
 const [mobActive, setMobActive] = useState(0);
 const [data3, setData3] = useState([]);
 const [filterData3, setFilterData3] = useState([]);
 const [selected3, setSelected3] = useState([]);
 const [data4, setData4] = useState([]);
 const [filterData4, setFilterData4] = useState([]);
 const [selected4, setSelected4] = useState([]);
 const [data5, setData5] = useState([]);
 const [filterData5, setFilterData5] = useState([]);
 const [selected5, setSelected5] = useState([]);
 const [data6, setData6] = useState([]);
 const [filterData6, setFilterData6] = useState([]);
 const [selected6, setSelected6] = useState([]);
 const [tabIndex, setTabIndex] = useState(0);
 const [activePackage, setActivePackage] = useState(true);
 const handleActivePackage = () => {
 setActivePackage((activePackage) => !activePackage);
 };
 const handleToggle = (value) => () => {
 const currentIndex = checked.indexOf(value);
 const newChecked = [...checked];
 if (currentIndex === -1) {
 newChecked.push(value);
 } else {
 newChecked.splice(currentIndex, 1);
 }
 setChecked(newChecked);
 };
 const handleChange = (event, newValue) => {
 setValue(newValue);
 };
 const childIncrement = () => {
 setChild(child + 1);
 };
 const childDecrement = () => {
 if (child < 1) {
 setChild(0);
 } else {
 setChild(child - 1);
 }
 };
 const incrementAdult = () => {
 setAdult(adult + 1);
 };
 const decrementAdult = () => {
 if (child < 1) {
 setAdult(0);
 } else {
 setAdult(child - 1);
 }
 };
 const incrementInfant = () => {
 setInfant(infant + 1);
 };
 const decrementInfant = () => {
 if (child < 1) {
 setInfant(0);
 } else {
 setInfant(child - 1);
 }
 };
 const handleFilter = (value) => {
 const res = filterData.filter((airport) =>
 airport.iata.toLowerCase().includes(value)
 );
 setData(res);
 };
 const handleFilter2 = (value) => {
 const res = filterData2.filter((airport) =>
 airport.iata.toLowerCase().includes(value)
 );
 setData2(res);
 };
 const handleFilter3 = (value) => {
 const res = filterData3.filter((airport) =>
 airport.iata.toLowerCase().includes(value)
 );
 setData3(res);
 };
 const handleFilter4 = (value) => {
 const res = filterData4.filter((airport) =>
 airport.iata.toLowerCase().includes(value)
 );
 setData4(res);
 };
 const handleFilter5 = (value) => {
 const res = filterData5.filter((airport) =>
 airport.iata.toLowerCase().includes(value)
 );
 setData5(res);
 };
 const handleFilter6 = (value) => {
 const res = filterData6.filter((airport) =>
 airport.iata.toLowerCase().includes(value)
 );
 setData6(res);
 };
 const handleSelect = (iata, name, country) => {
 const text = iata + " , " + country + ", " + name;
 console.log(text);
 setSelected(text);
 setData([]);
 };
 const handleSelect2 = (iata, name, country) => {
 const text = iata + " , " + country + ", " + name;
 console.log(text);
 setSelected2(text);
 setData2([]);
 };
 const handleSelect3 = (iata, name, country) => {
 const text = iata + " , " + country + ", " + name;
 console.log(text);
 setSelected3(text);
 setData3([]);
 };
 const handleSelect4 = (iata, name, country) => {
 const text = iata + " , " + country + ", " + name;
 console.log(text);
 setSelected4(text);
 setData4([]);
 };
 const handleSelect5 = (iata, name, country) => {
 const text = iata + " , " + country + ", " + name;
 console.log(text);
 setSelected5(text);
 setData5([]);
 };
 const handleSelect6 = (iata, name, country) => {
 const text = iata + " , " + country + ", " + name;
 console.log(text);
 setSelected6(text);
 setData6([]);
 };
 const [inputList, setinputList] = useState([
 { flyingFrom: "", flyingTo: "", date: "" },
 ]);
 const handleinputchange = (e, index) => {
 const { name, value } = e.target;
 const list = [...inputList];
 list[index][name] = value;
 setinputList(list);
 };
 const handleremove = (index) => {
 const list = [...inputList];
 list.splice(index, 1);
 setinputList(list);
 };
 const handleaddclick = () => {
 setinputList([...inputList, { flyingFrom: "", flyingTo: "", date: "" }]);
 };
 // date state
 // const [range, setRange] = useState([
 // {
 // startDate: new Date(),
 // endDate: addDays(new Date(), 7),
 // key: "selection",
 // },
 // ]);
 // const [range2, setRange2] = useState([
 // {
 // startDate: new Date(),
 // endDate: addDays(new Date(), 7),
 // key: "selection",
 // },
 // ]);
 // open close
 const [open, setOpen] = useState(false);
 const [open2, setOpen2] = useState(false);
 // get the target element to toggle
 const refOne = useRef(null);
 const refTow = useRef(null);
 useEffect(() => {
 document.addEventListener("keydown", hideOnEscape, true);
 document.addEventListener("click", hideOnClickOutside, true);
 }, []);
 useEffect(() => {
 document.addEventListener("keydown", hideOnEscape2, true);
 document.addEventListener("click", hideOnClickOutside2, true);
 }, []);
 // hide dropdown on ESC press
 const hideOnEscape = (e) => {
 if (e.key === "Escape") {
 setOpen(false);
 }
 };
 const hideOnEscape2 = (e) => {
 if (e.key === "Escape") {
 setOpen2(false);
 }
 };
 // Hide on outside click
 const hideOnClickOutside = (e) => {
 if (refOne.current && !refOne.current.contains(e.target)) {
 setOpen(false);
 }
 };
 const hideOnClickOutside2 = (e) => {
 if (refTow.current && !refTow.current.contains(e.target)) {
 setOpen2(false);
 }
 };
 return (
 <section className={style.bannerWrap}>
 <h2>Welcome to Ghuronti! Find Tours, Flights & Hotels Packages</h2>
 <div className={`${style.heroBoxMain} ${styles.heroBoxWrap}`}>
 <div>
 <ul className={style.menu}>
 <div className={style.wrapMenu}>
 <ActiveLink href="/b2bdashboard/hajj">
 <li className={style.firstChild}>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={35}
 height={35}
 fill="none"
 >
 <path
 fill="#092E3D"
 fillRule="evenodd"
 d="m39.358 5.872-19.386 4.492L.642 5.872l19.251-4.493
19.465 4.493Z"
 clipRule="evenodd"
 />
 <path
 fill="#4AB449"
 fillRule="evenodd"
 d="m31.97 7.577-12.077 2.787-11.917-2.78
11.917-2.782L31.97 7.577Z"
 clipRule="evenodd"
 />
 <path
 fill="#092E3D"
 fillRule="evenodd"
 d="m19.893 10.365 19.465-4.493v29.952l-19.465 4.492L.642
35.824V5.872l19.251 4.493Z"
 clipRule="evenodd"
 />
 <path
 fill="#F2AF0D"
 fillRule="evenodd"
 d="m19.893 16.777 19.465-4.493v3.423L19.893 20.2.642
15.707v-3.423l19.251 4.493ZM4.92 18.423l-4.278-.998v2.139l4.278.998v-2.14ZM35.08
18.423l4.279-.998v2.139l-4.279.998v-2.14ZM12.406
20.17l-4.278-.998v2.139l4.278.999v-2.14ZM27.593
20.17l4.279-.998v2.139l-4.279.999v-2.14ZM19.893
21.917l4.492-.998v2.14l-4.492.998-4.278-.999v-2.14l4.278 1Z"
 clipRule="evenodd"
 />
 <path
 fill="#092E3D"
 fillRule="evenodd"
 d="M.496 5.247C.27 5.33 0 5.61 0 5.872v29.952c0
.298.205.557.496.625l19.251 4.492a.64.64 0 0 0 .297 0l19.458-4.492a.642.642 0 0
0 .498-.625V5.872c0-.196-.116-.569-.496-.625L20.037.753a.644.644 0 0 0-.29
0L.496 5.248Zm38.22 11.668v-.4l-18.67 4.358a.637.637 0 0 1-.3.001L1.283
16.518v.397l3.783.883c.29.068.495.327.495.625v2.14a.641.641 0 0
1-.787.624l-3.49-.814v14.941l18.61 4.343 18.823-4.344v-14.94l-3.49.814a.64.64 0
0 1-.788-.625v-2.14c0-.297.205-.556.495-.624l3.783-.883Zm-18.675 7.767
4.483-.997a.642.642 0 0 0 .503-.627V20.92a.642.642 0 0
0-.781-.627l-4.35.967-4.135-.965a.64.64 0 0 0-.788.625v2.14c0
.298.206.557.496.624l4.278.999c.1.023.2.022.294 0Zm0-2.14a.64.64 0 0 1-.294
0l-3.49-.814v.82l3.64.85 3.846-.855v-.824l-3.702.823Zm7.407-2.997a.642.642 0 0
0-.496.625v2.14a.642.642 0 0 0 .787.624l4.278-.998a.642.642 0 0 0
.496-.625v-2.14a.642.642 0 0 0-.787-.624l-4.278.998Zm-14.4.625a.642.642 0 0
0-.496-.625l-4.278-.998a.642.642 0 0 0-.787.625v2.139c0
.298.205.558.495.625l4.279.998a.642.642 0 0 0 .787-.624v-2.14Zm15.187.51
2.995-.7v.822l-2.995.699v-.822Zm-16.47
0v.82l-2.995-.698v-.821l2.995.698Zm26.952-2.447v.822l-2.995.698v-.82l2.995-.7Zm37.434.822v-.822l2.995.7v.82l-2.995-.698Zm18.763-1.605a.636.636 0 0
1-.3.001L1.283 13.095v2.104l18.61 4.391 18.824-4.393v-2.104l-18.67
4.357Zm18.67-5.676V6.68L20.04 11.04a.637.637 0 0 1-.3-.003L1.282
6.683v5.093l18.61 4.391 18.824-4.393ZM10.745 7.596l9.15 2.16
9.251-2.16-9.251-2.135-9.15 2.135Zm-7.293-1.72 4.485 1.057 11.811-2.756a.644.644
0 0 1 .29 0l11.946 2.757 4.536-1.059-16.625-3.837L3.45 5.875Z"
 clipRule="evenodd"
 />
 </svg>
 <p className="ml-3">Hajj & Umrah</p>
 </li>
 </ActiveLink>
 <ActiveLink href="/b2bdashboard">
 <li>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={40}
 height={35}
 fill="none"
 >
 <path
 fill="#E0F1F8"
 d="M37.872 2.752c-1.473-1.443-4.058-1.105-5.539.344l-7.53
7.345-13.97-5.103c-1.336-.34-2.683-.777-4.342.852-.846.827-2.606 2.552 0
5.104l9.577 7.668-6.232
6.08-5.813-1.422c-.866-.217-1.445-.048-1.887.43-.223.273-1.842 1.446-.715
2.551l7.568 4.354 4.454 7.398c.817.799 1.578.3
2.615-.663.657-.645.514-.976.317-1.916L15.06 30.13l6.19-6.07 7.828 9.364c2.608
2.551 4.368.828 5.216 0 1.658-1.627 1.212-2.947.867-4.255l-5.178-13.68
7.502-7.357c1.48-1.45 1.859-3.938.386-5.38Z"
 />
 <path
 fill="#4AB449"
 fillOpacity={0.5}
 d="M24.669 10.44 21 9.422l-7.825 7.282 2.758 2.257
8.736-8.52ZM29.85 15.49l1.379 3.42-7.768 7.23-2.346-2.08 8.735-8.57Z"
 />
 <path
 fill="#4AB449"
 fillOpacity={0.5}
 d="M14.372 39.84c-.595 0-1.143-.243-1.629-.718a1.117 1.117
0 0 1-.172-.217l-4.308-7.156-7.32-4.21a1.103 1.103 0 0
1-.223-.17c-.6-.588-.723-1.207-.72-1.623.009-1.1.864-1.913
1.276-2.305.04-.039.075-.07.1-.096.776-.84 1.762-1.092 3.01-.779l5.196 1.27
4.916-4.795-8.626-6.905a1.09 1.09 0 0 1-.082-.074c-2.25-2.205-2.25-4.44 0-6.642
1.022-1.003 2.108-1.49 3.318-1.49.708 0 1.355.166
1.926.312l.167.043c.037.01.073.02.109.034l13.3 4.858 7.024-6.85a5.715 5.715 0 0
1 3.913-1.59c1.242 0 2.379.442 3.2 1.246 1.997 1.955 1.412 5.155-.387
6.917l-6.999 6.864 4.931 13.027c.013.035.025.07.034.106l.044.165c.353 1.322.837
3.13-1.2 5.13-.597.583-1.701 1.66-3.339 1.66-1.164 0-2.326-.558-3.452-1.66a1.055
1.055 0 0 1-.074-.08l-7.05-8.43-4.886 4.792 1.228 5.293c.188.865.366 1.682-.665
2.692-.762.709-1.567 1.38-2.56 1.38ZM2.227 25.751l7.413 4.265a1.1 1.1 0 0 1
.395.386l4.365 7.251c.117-.04.384-.2.978-.752a.765.765 0 0 0 .146-.173 8.955
8.955 0 0 0-.104-.51l-.048-.224-1.309-5.622a1.072 1.072 0 0 1
.297-1.01l6.19-6.07c.22-.218.524-.335.842-.319.314.015.607.16.807.398l7.793
9.32c.678.654 1.297.985 1.84.985.716 0 1.32-.59 1.76-1.021
1.14-1.117.946-1.843.625-3.044l-.03-.117-5.16-13.628a1.07 1.07 0 0 1
.255-1.146l7.502-7.357c1.02-1
1.43-2.823.387-3.844-.513-.502-1.166-.608-1.624-.608-.856
0-1.73.357-2.34.953l-7.53 7.346a1.13 1.13 0 0 1-1.176.248L10.468
6.347c-.483-.124-.94-.242-1.36-.242-.407 0-.973.097-1.742.853-1.06 1.036-1.682
1.898-.039 3.53l9.533 7.632a1.073 1.073 0 0 1 .081 1.611l-6.232 6.08a1.13 1.13 0
0 1-1.056.285l-5.813-1.42c-.164-.042-.3-.061-.414-.061a.435.435 0 0
0-.375.161c-.053.06-.13.136-.223.225-.468.445-.588.654-.601.752Z"
 />
 <path
 fill="#4AB449"
 fillOpacity={0.5}
 d="M21.236 25.215c-.285 0-.57-.106-.787-.32a1.072 1.072 0
0 1 0-1.537l8.836-8.639a1.13 1.13 0 0 1 1.574 0 1.069 1.069 0 0 1 0 1.539l-8.837
8.638c-.216.213-.501.32-.786.32ZM15.94 20.28c-.285 0-.57-.106-.787-.318a1.07
1.07 0 0 1 0-1.539l8.95-8.751a1.13 1.13 0 0 1 1.573 0 1.07 1.07 0 0 1 0
1.538l-8.95 8.751a1.124 1.124 0 0 1-.786.319Z"
 />
 </svg>
 <p className="ml-3">Flight</p>
 </li>
 </ActiveLink>
 <ActiveLink href="/b2bdashboard/hotel">
 <li>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={35}
 height={40}
 fill="#fff"
 >
 <path
 fill="#fff"
 fillOpacity={0.5}
 d="M6.25 15h2.5v-2.5h-2.5V15Zm10-2.5h2.5V10h-2.5v2.5Zm5
0h2.5V10h-2.5v2.5Zm5 0h2.5V10h-2.5v2.5Zm-10-5h2.5V5h-2.5v2.5Zm5
0h2.5V5h-2.5v2.5Zm5 0h2.5V5h-2.5v2.5Zm-10 15h2.5V20h-2.5v2.5Zm5
0h2.5V20h-2.5v2.5Zm5 0h2.5V20h-2.5v2.5Zm-10 5h2.5V25h-2.5v2.5Zm10
0h2.5V25h-2.5v2.5Zm-10 5h2.5V30h-2.5v2.5Zm10
0h2.5V30h-2.5v2.5Zm7.5-2.5h2.5v-2.5h-2.5V30Zm0-7.5V25h2.5v-2.5h-2.5Zm0
12.5h2.5v-2.5h-2.5V35Zm-17.5-17.5h2.5V15h-2.5v2.5Zm5 0h2.5V15h-2.5v2.5Zm5
0h2.5V15h-2.5v2.5Zm-20 2.5h2.5v-2.5h-2.5V20Zm0 5h2.5v-2.5h-2.5V25Zm0
5h2.5v-2.5h-2.5V30Zm0 5h2.5v-2.5h-2.5V35Zm15-7.5h2.5V25h-2.5v2.5Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.5}
 fillRule="evenodd"
 d="M38.75 37.5c0 1.382-1.118 2.5-2.5 2.5H3.75a2.498 2.498
0 0 1-2.5-2.5V10c0-1.382 1.118-2.5 2.5-2.5h7.5v-5c0-1.382 1.118-2.5
2.5-2.5h17.5c1.382 0 2.5 1.118 2.5 2.5v15h2.5c1.382 0 2.5 1.118 2.5
2.5v17.5ZM11.25 10h-7.5v27.5h7.5V10Zm20-7.5h-17.5v35h7.5V30h2.5v7.5h7.5v-35Zm5
17.5h-2.5v17.5h2.5V20Z"
 clipRule="evenodd"
 />
 </svg>
 <p className="ml-3">Hotel</p>
 </li>
 </ActiveLink>
 <ActiveLink href="/b2bdashboard/visa">
 <li>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={45}
 height={45}
 fill="#fff"
 >
 <g>
 <path fill="#fff" />
 <path
 fillOpacity={0.5}
 fill="#fff"
 d="M38.405 12.51 27.858 9.322a2.618 2.618 0 0
0-1.944.183 2.522 2.522 0 0 0-1.248 1.467l-.394 1.237h-12.84c-.334
0-.665.065-.973.19a2.55 2.55 0 0 0-.826.539 2.484 2.484 0 0 0-.552.807 2.439
2.439 0 0 0-.194.953V35.95c0 .662.267 1.296.744 1.765a2.586 2.586 0 0 0
1.802.737h5.315c.15.302.363.57.625.788.261.218.566.38.894.477l10.814
3.258c.246.077.502.114.76.11.42 0 .836-.098
1.209-.288.298-.157.56-.37.773-.628.213-.257.37-.553.465-.871l2.193-7.19v-.027l5
.625-18.477a2.452 2.452 0 0 0-.202-1.887 2.547 2.547 0 0 0-1.5-1.206ZM11.433
37.505a1.619 1.619 0 0 1-1.124-.455 1.55 1.55 0 0
1-.465-1.099V14.697c.002-.412.17-.806.467-1.097.298-.29.701-.455
1.122-.457h15.145c.418 0 .82.16 1.119.445.3.285.473.673.484 1.081l.07
3.973.015.99.028 1.554.056 3.505.014 1.183.014.934.099 5.472v.11l.056 3.533a1.52
1.52 0 0 1-.46 1.122 1.59 1.59 0 0 1-1.143.459H11.433Zm19.94
3.533c-.129.4-.41.734-.787.935a1.61 1.61 0 0 1-1.21.11l-10.828-3.258a1.534 1.534
0 0
1-.632-.372h9.014c.34-.001.677-.069.991-.199.314-.13.598-.319.837-.557.237-.235.
424-.514.55-.821.125-.307.187-.636.181-.966l-.042-2.928 3.98 1.278-2.054
6.778Zm.07-21.694 3.657 4.798-.127.481-3.698-2.873a.519.519 0 0
0-.45-.082.528.528 0 0 0-.31.33l-.745 2.667a.45.45 0 0 0 .028.33l.985
2.062-.042.096-1.407-.963-.07-4.082.113-.413a.45.45 0 0
0-.099-.44l-.028-.027-.042-1.98.745-.302a.473.473 0 0 0
.281-.303l.69-2.447c.253-.935.73-1.14.942-1.196.154.151.45.564.197 1.498l-.69
2.448a.446.446 0 0 0 .07.398Zm7.735-4.014-5.47 18.023-4.29-1.347-.07-4.674
1.407.976a.514.514 0 0 0 .28.082.335.335 0 0 0 .156-.027.46.46 0 0 0
.295-.317l.267-.907a.534.534 0 0 0-.028-.33l-.984-2.062.506-1.815 3.698
2.86a.52.52 0 0 0 .45.082.477.477 0 0 0 .31-.316l.38-1.388a.446.446 0 0
0-.07-.399l-3.657-4.798.619-2.227c.562-1.98-.718-2.626-.774-2.64a.35.35 0 0
0-.169-.055c-.07 0-1.476-.096-2.039 1.898l-.618 2.227-.183.069-.056-3.589a2.483
2.483 0 0 0-.772-1.731 2.597 2.597 0 0
0-1.788-.716H25.27l.31-.962c.062-.197.164-.38.299-.538.135-.158.3-.288.488-.383a
1.7 1.7 0 0 1 .745-.179c.158.003.314.026.465.069l10.546
3.19c.4.12.736.389.933.75.198.36.242.782.122 1.174Z"
 />
 <path
 fillOpacity={0.5}
 fill="#fff"
 d="M26.93 33.984a.484.484 0 0 0 .339-.135.463.463 0 0
0 .139-.332.468.468 0 0 0-.142-.33.489.489 0 0 0-.336-.137H11.433a.488.488 0 0
0-.337.138.467.467 0 0 0-.106.508.463.463 0 0 0
.26.254c.057.023.12.035.183.034H26.93ZM13.134 26.575c.588.947 1.401 1.74 2.371
2.312a7.12 7.12 0 0 0 3.198.973c.08.012.16.016.24.014a.308.308 0 0 0 .112 0
.397.397 0 0 0 .126.014c.085 0 .183-.014.267-.014.085.002.17-.002.254-.014a7.136
7.136 0 0 0 3.173-.984 6.947 6.947 0 0 0 2.353-2.302.328.328 0 0 0
.084-.11c0-.013.015-.013.015-.027.042-.069.07-.124.112-.192
0-.014.014-.014.014-.028.179-.326.33-.667.45-1.017.26-.73.394-1.496.394-2.269
0-.178-.014-.357-.028-.536a6.574 6.574 0 0 0-.127-.92 6.186 6.186 0 0
0-.267-.867 6.56 6.56 0 0 0-.366-.852 3.044 3.044 0 0 0-.21-.358v-.013a.575.575
0 0 0-.07-.097 6.863 6.863 0 0 0-1.618-1.8 5.721 5.721 0 0 0-.83-.55 7.238 7.238
0 0 0-5.377-.744 7.082 7.082 0 0 0-4.34 3.19v.014a6.766 6.766 0 0 0-.998 3.533c0
1.245.345 2.466.998 3.534a.297.297 0 0 0 .07.11Zm.563-6.352c.566.245 1.162.42
1.772.523-.12.722-.181 1.453-.183 2.185.001.728.062 1.454.183
2.172-.607.118-1.2.293-1.772.523a5.861 5.861 0 0 1 0-5.403Zm2.545 2.708a10.4
10.4 0 0 1 .183-2.02c.754.11 1.515.17
2.278.178v3.685c-.762.01-1.523.07-2.278.178a10.4 10.4 0 0
1-.183-2.02Zm5.71-2.02c.085.435.142.876.168 1.32 0
.233.014.467.014.7.006.674-.056 1.346-.182
2.008-.211-.028-.436-.055-.661-.083-.324-.027-.647-.055-.985-.069-.21-.013-.436-
.013-.647-.013v-3.685a19.97 19.97 0 0 0
1.857-.123c.146-.011.291-.03.436-.056Zm-3.249 4.797v3.149a4.214 4.214 0 0
1-1.384-1.268 4.1 4.1 0 0 1-.683-1.73 16.372 16.372 0 0 1 2.067-.15Zm1.378
2.942a2.086 2.086 0 0
1-.422.22v-3.162h.352c.337.014.66.042.984.07.253.027.507.054.746.082a4.872 4.872
0 0 1-1.66 2.79Zm-.422-8.51v-3.148a4.254 4.254 0 0 1 1.392 1.274c.36.521.596
1.115.69 1.737-.69.089-1.386.135-2.082.138Zm-.956-3.134v3.135a16.462 16.462 0 0
1-2.067-.138c.091-.62.325-1.21.683-1.73a4.214 4.214 0 0 1 1.384-1.267Zm-4.514
9.431a9.719 9.719 0 0 1 1.49-.426c.223.89.61 1.733 1.14 2.488a6.21 6.21 0 0
1-2.63-2.062Zm7.383 2.048a7.751 7.751 0 0 0 1.125-2.46c.504.093.998.231
1.476.412a6.114 6.114 0 0 1-2.601
2.048Zm3.614-6.887c.075.307.122.62.14.935a5.836 5.836 0 0 1-.647 3.093 9.362
9.362 0 0 0-1.771-.523c.12-.718.182-1.444.183-2.172 0-.15
0-.302-.014-.453v-.33a21.298 21.298 0 0 0-.17-1.402 8.929 8.929 0 0 0
.658-.142.014.014 0 0 0 .004-.01c.382-.086.754-.21
1.11-.37.129.242.237.495.324.755a4 4 0 0 1 .183.619Zm-2.7-3.74a5.902 5.902 0 0 1
1.687 1.568c-.417.165-.85.29-1.293.371-.057.014-.127.027-.183.041a9.394 9.394 0
0 0-.436-1.25 6.94 6.94 0 0
0-.69-1.197c.32.125.627.282.915.468Zm-5.667-.48a7.179 7.179 0 0 0-1.125 2.46
8.812 8.812 0 0 1-1.49-.412 5.955 5.955 0 0 1 2.615-2.049Z"
 />
 </g>
 </svg>
 <p className="ml-3">Visa</p>
 </li>
 </ActiveLink>
 <ActiveLink href="/b2bdashboard/tours">
 <li>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={35}
 height={43}
 fill="#fff"
 >
 <path
 fill="#fff"
 fillOpacity={0.5}
 d="M23.02 8.672c2.202 0 3.987-1.775 3.987-3.965S25.222.743
23.019.743c-2.202 0-3.987 1.775-3.987 3.964 0 2.19 1.785 3.965 3.987
3.965ZM32.236 15.979l-5.933-4.927h-6.04l-4.902
6.301-4.974.525-.616.07-.607.061-.467.053.335 1.916.132.027.607.113.616.114 6.47
1.208 3.697-4.017-.563 7.351-3.31 17.424h2.527l4.63-14.57 4.577
14.57h2.35l-2.64-17.258-.74-7.613 3.469 2.039.22 5.557 2.306.017
1.32-5.434.3-1.234-2.764-2.293ZM9.006 28.423H3.592v9.846h5.414v-9.846Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.5}
 d="M10.607
22.385h-.22v-.91l-1.232-.228v1.138H3.433v-8.401h1.1v.236c0
.35.29.639.643.639h2.227a.644.644 0 0 0
.643-.64v-.235h1.1v2.791l.484-.052.748-.079v-3.273a.61.61 0 0
0-.616-.613H8.046v-.236a.639.639 0 0 0-.643-.639H5.176a.644.644 0 0
0-.643.64v.235H2.817a.61.61 0 0 0-.616.613v9.014h-.22C.889 22.385 0 23.269 0
24.354V36.3c0 1.085.89 1.969 1.98 1.969h.38V27.81a.61.61 0 0 1
.615-.613h6.646a.61.61 0 0 1 .617.613v10.458h.378c1.092 0 1.98-.884
1.98-1.97V24.355a1.991 1.991 0 0 0-1.989-1.97ZM2.975 42.198a1.15 1.15 0 0 0
1.154-1.146 1.15 1.15 0 0 0-1.154-1.147 1.15 1.15 0 0 0-1.153 1.147 1.15 1.15 0
0 0 1.153 1.146ZM9.622 42.198a1.15 1.15 0 0 0 1.153-1.146 1.15 1.15 0 0
0-1.153-1.147 1.15 1.15 0 0 0-1.154 1.147 1.15 1.15 0 0 0 1.154 1.146Z"
 />
 </svg>
 <p className="ml-3">Tours</p>
 </li>
 </ActiveLink>
 <ActiveLink href="/b2bdashboard/buses">
 <li>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={40}
 height={39}
 fill="#fff"
 >
 <g
 fill="#fff"
 fillRule="evenodd"
 clipRule="evenodd"
 opacity={0.4}
 >
 <path d="M6.5 31.296a1 1 0 0 1 1-1H15a1 1 0 0 1 1
1v2.408c0 1.911-1.609 3.407-3.5 3.407H10c-1.891 0-3.5-1.496-3.5-3.407v-2.408Zm2
1v1.408c0 .736.641 1.407 1.5 1.407h2.5c.859 0 1.5-.67 1.5-1.407v-1.408H8.5ZM24
31.296a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v2.408c0 1.911-1.609 3.407-3.5
3.407h-2.5c-1.891 0-3.5-1.496-3.5-3.407v-2.408Zm2 1v1.408c0 .736.641 1.407 1.5
1.407H30c.859 0 1.5-.67 1.5-1.407v-1.408H26Z" />
 <path d="M11.25 4.611c-2.234 0-4 1.754-4 3.815v20.463c0
.736.641 1.407 1.5 1.407h22.5c.859 0 1.5-.67
1.5-1.407V8.426c0-2.06-1.766-3.815-4-3.815h-17.5Zm-6 3.815c0-3.236 2.734-5.815
6-5.815h17.5c3.266 0 6 2.58 6 5.815v20.463c0 1.912-1.609 3.407-3.5
3.407H8.75c-1.891 0-3.5-1.495-3.5-3.407V8.426Z" />
 <path d="M5.307 18.927a1 1 0 0 1 1.276-.61 40.446 40.446 0
0 0 26.834 0 1 1 0 0 1 .666 1.885 42.448 42.448 0 0 1-28.166 0 1 1 0 0
1-.61-1.275ZM9.028 25.044a1 1 0 0 1 1.206-.738l5 1.203a1 1 0 1 1-.468
1.945l-5-1.204a1 1 0 0 1-.738-1.206ZM30.972 25.044a1 1 0 0 1-.738 1.206l-5
1.204a1 1 0 1 1-.468-1.945l5-1.203a1 1 0 0 1 1.206.738ZM32.849 10.4a1 1 0 0 1
1.335-.468l5 2.408a1 1 0 0 1 .566.9v6.02a1 1 0 0 1-2 0v-5.391l-4.434-2.135a1 1 0
0 1-.467-1.335ZM7.151 10.4a1 1 0 0 1-.467 1.334L2.25 13.87v5.39a1 1 0 0 1-2
0v-6.018a1 1 0 0 1 .566-.901l5-2.408a1 1 0 0 1 1.335.467Z" />
 </g>
 </svg>
 <p className="ml-3">Buses</p>
 </li>
 </ActiveLink>
 <ActiveLink href="/b2bdashboard/train">
 <li className={style.lastChild}>
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width={40}
 height={20}
 fill="none"
 >
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M.974 16.029c-.178-.065-1.65-.631-.6-2.535.61-1.104
4.002-5.291 7.778-8.56C10.467 2.94 12.941 1.278 15.04.86c5.454-1.086 23.784
2.934 23.84 2.943.037.01.065.019.093.037.104.065.431.288.844.845.525.696-.244
5.914-.253 5.923a.232.232 0 0 1-.16.195l-1.246.455a.25.25 0 0 1-.319-.14.212.212
0 0 1-.009-.13c0-.008.131-.677.178-.881l-1.246.334c-.019.353-.122 1.105-.6
1.43-.019.009-.037.028-.056.028l-10.12
3.314c-.132.037-.273-.028-.31-.158-.028-.093-.01-.186.056-.241.066-.093.422-.567
.422-.882 0-.242-.047-.715-.122-1.068-.037-.158.066-.27.01-.27-.16
0-4.199.92-5.005 1.106-.206.631-1.218 3.221-3.636 4.122-2.67.993-12.332
1.68-12.36 1.68a.252.252 0 0 1-.272-.232c0-.056.02-.102.047-.148 0 0
1.06-1.579.366-1.848-.263-.046-2.605-.455-4.208-1.244Zm-.168-2.303c-.788
1.449.253 1.81.337 1.839.01.009.028.009.037.018 1.603.799 4.03 1.198 4.105
1.207.019.01.037.01.047.01.956.343.478 1.531.14 2.181 1.959-.158 9.502-.78
11.76-1.625 2.428-.89 3.309-3.694 3.374-3.917a.24.24 0 0 1 .188-.186c.01-.01
4.994-1.151 5.247-1.151.235 0 .385.278.469.659.084.38.14.9.14 1.17 0
.195-.074.408-.168.603l9.427-3.082c.366-.288.366-1.068.366-1.18a.245.245 0 0 1
.178-.259l1.602-.427a.263.263 0 0 1 .169.01c.225.11.206.658.159
1.058l.712-.26c.122-.827.684-4.94.328-5.422-.356-.474-.609-.65-.684-.696-.815-.1
86-18.367-3.983-23.605-2.934-1.996.399-4.395 2.014-6.654 3.964-3.739 3.23-7.075
7.344-7.674 8.42Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M.543
15.796c-.122-.055-.187-.194-.14-.315.056-.13.196-.195.327-.14.01 0 2.877 1.18
6.495.437 1.386-.279 4.45-2.135 7.721-4.364 5.22-3.555 10.927-8.03
11.245-8.55a.65.65 0 0 0 .103-.27.346.346 0 0 0-.056-.24.71.71 0 0
0-.244-.223c-.262-.149-.609-.232-.908-.27a.256.256 0 0 1-.216-.278.252.252 0 0 1
.281-.214c.356.047.778.158 1.096.344.17.102.31.223.413.371a.85.85 0 0 1
.122.576c-.019.14-.066.288-.169.455-.328.557-6.12 5.115-11.386 8.699-3.317
2.265-6.438 4.15-7.9 4.447-3.767.77-6.775-.464-6.784-.464Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M5.687 17.245c-.009.018-.018.028-.028.046a.243.243 0 0
1-.337.065c-.16-.111-.187-.232-.084-.38a.311.311 0 0 1
.13-.093c.179-.075.488-.12.9-.177.76-.102 1.893-.26 2.84-.584.487-.168
1.537-.585 2.877-1.115 3.326-1.318 8.424-3.342 11.095-3.992 3.739-.919
16.455-2.86 16.493-2.868a.25.25 0 0 1 .075.492c-.038 0-12.735 1.94-16.446
2.85-2.643.65-7.722 2.655-11.04 3.973-1.34.53-2.389.947-2.895
1.114-.993.344-2.155.511-2.933.613-.337.047-.553.037-.647.056Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M7.58 17.004c-.13-.038-.215-.168-.178-.298a.247.247 0 0
1 .3-.176s.553.14.965.604c.085.092.141.176.197.25.131.167.188.242.74.288.835.065
8.687-.9 8.706-.9a.252.252 0 0 1 .281.213.263.263 0 0 1-.178.27l-3.11
1.058c-.123.046-.263-.028-.31-.158a.237.237 0 0 1
.15-.307l.918-.315c-2.408.278-5.922.668-6.494.631-.787-.065-.88-.195-1.096-.492-
.047-.056-.094-.13-.178-.213a1.562 1.562 0 0 0-.713-.455Zm10.833.25c-.01 0-.028
0-.037.01l.037-.01ZM1.33 12.52a.255.255 0 0 1 .347.064.238.238 0 0
1-.056.335s.112-.075.29.009c.272.12 1.293.26 2.305.334.9.065 1.762.074
2.025-.018.262-.102.58-.279.908-.492.403-.27.825-.585 1.19-.901.675-.576
6.392-6.787 6.41-6.805a.242.242 0 0 1 .347-.019.237.237 0 0 1
.019.344c-.019.018-5.754 6.248-6.457
6.851-.384.325-.815.66-1.227.938-.366.232-.722.436-1.022.548-.328.12-1.274.111-2
.23.046-1.059-.083-2.155-.232-2.474-.39-.946-.436-.375-.845-.375-.845Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M9.023 4.944a.242.242 0 1 1
.038-.483l6.906.455h.01c.28.01 4.666.14
5.67-1.179l-.825-1.328c-.947-.046-6.794-.343-7.975-.222-.14.009-.263-.084-.272-.
223-.019-.13.084-.25.225-.27 1.284-.13 7.797.214 8.162.233.084 0
.169.037.216.111l.974 1.57h-.01a.24.24 0 0 1 .01.25c-.965 1.699-5.904 1.56-6.194
1.55h-.019l-6.916-.464Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M17.898 2.028a.242.242 0 0 1
.347.01c.094.093.084.25-.01.343L15.2
5.222c-.103.093-.253.093-.346-.01-.094-.101-.094-.25.009-.343l3.036-2.84ZM7.75
8.537l.909-.966a.25.25 0 0 1 .206-.074l2.708.074c.131.01.244.12.244.25a.313.313
0 0 1-.057.14s-.6.817-1.565.993a6.63 6.63 0 0 1-1.143.084c-.646
0-1.237-.111-1.293-.158a.255.255 0 0 1-.01-.343Zm1.2-.548-.526.557c.169 0 .385 0
.628.01.347 0 .731-.02 1.05-.084.375-.065.674-.251.89-.427l-2.043-.056ZM8.237
7.868 7.28 8.871a.231.231 0 0 1-.197.074c-.14
0-1.79-.028-1.92-.445-.132-.418.655-1.05.665-1.05a.256.256 0 0 1
.159-.055s2.005.055 2.043.055a.257.257 0 0 1 .28.205.253.253 0 0
1-.074.213Zm-1.246.585.515-.529c-.515-.01-1.2-.028-1.443-.037-.14.12-.45.39-.422
.464.019.074 1.012.102 1.35.102ZM2.577 11.665a.248.248 0 0 1-.263-.222.251.251 0
0 1 .234-.27c.01 0 3.777-.278
5.876.548.131.046.187.186.14.316-.056.12-.196.185-.318.139-1.996-.78-5.66-.51-5.
67-.51Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="M8.443 12.362a.25.25 0 0 1 .065-.344.243.243 0 0 1
.337.065c.01.01 1.106 1.588 1.05 2.795 0 .139-.122.241-.253.232a.235.235 0 0
1-.234-.25c.047-1.05-.965-2.498-.965-2.498ZM26.472 3.235a.24.24 0 0
1-.215-.269.246.246 0 0 1 .281-.213l12.97 1.699a.24.24 0 0 1 .215.269.246.246 0
0 1-.281.213l-12.97-1.699ZM19.613 16.177a.251.251 0 0 1-.31-.167.248.248 0 0 1
.17-.306l6.85-1.978a.245.245 0 0 1 .3.167.248.248 0 0 1-.17.307l-6.84
1.977ZM36.602 11.192a.25.25 0 0 1-.309-.167.253.253 0 0 1
.178-.307l1.584-.445a.251.251 0 0 1 .309.167.248.248 0 0 1-.169.306l-1.593.446Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="m23.08
15.119-.01.028-.009.009-.009.037-.01.019c-.159.436-.487.826-.88
1.105-.403.287-.89.464-1.36.464-.29 0-.543-.065-.749-.195a1.093 1.093 0 0
1-.487-.557c-.047-.121.019-.26.14-.316h.02v-.01l3.045-.9a.25.25 0 0 1
.31.167c.018.047.009.102 0
.149Zm-1.209.798c.197-.13.366-.297.497-.482l-2.183.65c.037.027.074.055.121.083.1
31.074.3.12.497.12.365 0 .75-.139 1.068-.37Z"
 />
 <path
 fill="#fff"
 fillOpacity={0.8}
 d="m26.088
14.19-.01.038h-.009l-.009.037v.01c-.16.445-.487.835-.89
1.123-.403.287-.89.464-1.359.464-.29 0-.544-.075-.75-.195a1.112 1.112 0 0
1-.478-.557.238.238 0 0 1 .132-.316c.009 0 .018-.01.028-.01l3.036-.909a.251.251
0 0 1 .31.167c.018.056.009.102 0
.149Zm-1.209.808c.197-.139.366-.306.497-.482l-2.174.64a.374.374 0 0 0
.112.093c.131.074.3.12.497.12.366 0 .75-.148 1.068-.37ZM36.546
11.164c.019.019.188-.028.412-.093.038.093.122.195.253.177a.677.677 0 0 0
.535-.427c.196-.065.346-.102.346-.075 0 .084-.01.177-.047.26a.9.9 0 0
1-.356.455.921.921 0 0 1-.553.186.57.57 0 0 1-.224-.037h-.02a.576.576 0 0
1-.262-.204c0-.01-.009-.01-.009-.02l-.075-.222Zm.412-.093c.244-.074.553-.185.788
-.25a.677.677 0 0 1-.535.427c-.13.018-.215-.084-.253-.177Zm-.43.01a.73.73 0 0 1
.046-.232v-.01l.01-.018c.028-.084.093-.13.168-.158l.984-.288a.24.24 0 0 1
.29.14l-.252.092-.862.334-.385.14ZM24.87 10.84a.256.256 0 0
1-.347.064c-.112-.074-.15-.223-.065-.334 0 0
.15-.232.15-.585V5.203c0-.139.056-.668.796-.621.769.046.666 2.785.656
2.99.01.185.122 2.59-.168 3.063-.066.12-.225.148-.338.083a.244.244 0 0
1-.084-.343c.225-.353.094-2.785.094-2.795v-.027s.121-2.47-.197-2.489c-.244-.009-
.263.103-.263.13v4.791c0 .501-.234.854-.234.854ZM27.128 5.928 27.7 5.9h.019c.112
0 .206.047.28.112a.459.459 0 0 1 .132.287V8.36a.445.445 0 0 1-.122.297.466.466 0
0 1-.29.13l-.572.019h-.01a.405.405 0 0 1-.29-.111.369.369 0 0
1-.122-.279V8.398h-.009V6.355a.41.41 0 0 1 .122-.297.422.422 0 0 1
.29-.13Zm.506.464-.421.019v1.903l.421-.019V6.392ZM28.572
5.89l.534-.018h.019c.112 0 .206.046.28.111a.364.364 0 0 1 .122.27v1.986a.46.46 0
0 1-.112.288.413.413 0 0 1-.29.121l-.535.028H28.572a.424.424 0 0
1-.282-.112.384.384 0 0
1-.121-.278v-.01l.402-2.385Zm.459.474-.366.019v1.8l.366-.018v-1.8Zm-.862
1.913V6.308c0-.111.037-.213.112-.287a.466.466 0 0 1 .29-.13l-.402 2.386ZM32.62
5.807l.45-.018h.018a.37.37 0 0 1 .263.102.425.425 0 0 1 .122.25V7.868a.412.412 0
0 1-.113.27.432.432 0 0 1-.262.12h-.01l-.45.019h-.018a.372.372 0 0
1-.263-.112.35.35 0 0 1-.112-.25V6.197c0-.102.038-.204.103-.27a.386.386 0 0 1
.272-.12Zm.356.474-.234.009v1.485l.234-.009V6.281ZM33.875
5.78l.422-.02h.019c.093 0 .187.038.253.103a.35.35 0 0 1
.112.25v.02h.01v1.614a.37.37 0 0 1-.113.26.432.432 0 0
1-.262.121l-.422.019h-.019a.367.367 0 0
1-.365-.353v-.019h-.01V6.16c0-.102.047-.195.113-.27a.377.377 0 0 1
.262-.11Zm.319.473-.197.01v1.382l.197-.009V6.253ZM35.075
5.751l.403-.018h.018c.094 0 .179.037.244.102a.345.345 0 0 1
.113.241v1.551a.357.357 0 0 1-.103.25l-.01.01a.396.396 0 0
1-.244.111l-.393.019h-.019a.364.364 0 0
1-.365-.353V6.123c0-.102.047-.195.103-.26a.373.373 0 0 1
.253-.112Zm.29.474-.15.01v1.28h.15v-1.29ZM36.237 5.724l.375-.019h.019c.094 0
.178.037.244.102.065.056.103.14.103.242v.009h.009v1.448a.402.402 0 0
1-.103.25.397.397 0 0 1-.253.112l-.365.019h-.02a.342.342 0 0 1-.243-.102.347.347
0 0 1-.112-.242V6.086c0-.093.037-.186.103-.251h.01v-.01a.444.444 0 0 1
.233-.101Zm.253.482h-.103v1.18h.103v-1.18ZM37.361 5.705l.338-.018h.018c.085 0
.169.037.235.092.065.056.103.14.112.232V7.385a.32.32 0 0
1-.103.242l-.01.01a.306.306 0 0 1-.234.101l-.337.019h-.019a.334.334 0 0
1-.234-.093l-.01-.01a.408.408 0 0
1-.102-.231V6.049c0-.093.037-.177.103-.242a.312.312 0 0 1
.243-.102Zm.206.474-.056.009v1.067h.056V6.18ZM38.43 5.677l.31-.018h.018c.084 0
.169.037.234.093l.01.018c.056.056.093.13.093.214v1.29a.365.365 0 0
1-.093.232.395.395 0 0 1-.235.112l-.318.009h-.01a.335.335 0 0
1-.234-.093.295.295 0 0
1-.103-.223l-.01-.018V6.02c0-.093.038-.177.104-.242a.342.342 0 0 1
.234-.102Zm.169.483h-.01v.975h.01V6.16ZM31.317 5.844l.478-.018h.019a.42.42 0 0 1
.272.111.384.384 0 0 1 .121.27v1.791a.416.416 0 0 1-.112.279.442.442 0 0
1-.281.13l-.478.018h-.01a.383.383 0 0 1-.28-.111.426.426 0 0
1-.122-.27V6.254c0-.112.046-.205.121-.279a.418.418 0 0 1
.272-.13Zm.375.502-.253.009v1.55l.253-.009v-1.55ZM29.977 5.89l.487-.018h.02c.102
0 .205.037.28.111a.369.369 0 0 1 .122.279v.01h.01v1.847a.406.406 0 0
1-.122.288.466.466 0 0 1-.29.13l-.488.018h-.019a.383.383 0 0 1-.281-.111.435.435
0 0 1-.131-.279V6.308c0-.111.047-.213.122-.287a.383.383 0 0 1
.28-.13h.01Zm.375.511-.253.01v1.615l.253-.01V6.402Z"
 />
 </svg>
 <p className="ml-3">Trains</p>
 </li>
 </ActiveLink>
 </div>
 </ul>
 </div>
 <div className="flightTab">
 <Tabs
 defaultTabIndex={tabIndex}
 onSelect={(index) => setTabIndex(index)}
 >
 <TabList className={style.tabWrap}>
 <Tab>One Way</Tab>
 <Tab>Round Trip</Tab>
 <Tab>Multiple City</Tab>
 <Tab>Group Flight</Tab>
 </TabList>
 <TabPanel>
 <div>
 <div className={style.oneWayPackage}>
 <div className={style.package}>
 <div className={style.searchTop}>
 <h4>Flying From</h4>
 <input
 autoComplete="off"
 value={selected}
 onChange={(e) => handleFilter(e.target.value)}
 id="searchAirport"
 type="text"
 placeholder="City or Airport "
 />
 <div className={style.searchResult}>
 {data?.map((d, i) => (
 <div key={i}>
 <div
 onClick={() =>
 handleSelect(d.iata, d.name, d.country)
 }
 className={style.airport}
 >
 <h6 className="mr-3">{d.iata}</h6>
 <p>,{d.country}</p>
 <p>,{d.name}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 <div className={style.package2}>
 <div className={style.searchTop}>
 <h4>Flying To</h4>
 <input
 autoComplete="off"
 value={selected2}
 id="searchAirport"
 onChange={(e) => handleFilter2(e.target.value)}
 type="text "
 placeholder="City or Airport "
 />
 <div className={style.searchResult}>
 {data2?.map((d, i) => (
 <div key={i}>
 <div
 onClick={() =>
 handleSelect2(d.iata, d.name, d.country)
 }
 className={style.airport}
 >
 <h6 className="mr-3">{d.iata}</h6>
 <p>,{d.country}</p>
 <p>,{d.name}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 <div className={style.packageWrap}>
 <div className={style.oneWayPackage}>
 <div
 onClick={() => setOpen((open) => !open)}
 className={style.packageDate}
 >
 <div className={style.departDate}>
 <h4>Depart To</h4>
 <div className={style.calendarInput}>
 <input
 // value={`${format(
 // range[0].startDate,
 // "MM/dd/yyyy"
 // )}`}
 readOnly
 />
 <CalendarMonth className={style.calendarIcon} />
 </div>
 </div>
 <div className={style.calendar} ref={refOne}>
 {/* {open && (
 <DateRange
 onChange={(item) => setRange([item.selection])}
 editableDateInputs={true}
 moveRangeOnFirstSelection={false}
 ranges={range}
 months={2}
 direction="horizontal"
 className="calendarElement"
 />
 )} */}
 </div>
 </div>
 <div>
 <div className={style.package4}>
 <div className="flex justify-between">
 <div>
 <h4>
 Passengers & {child + infant + adult} Person
 </h4>
 <span>{classes}</span>
 </div>
 <Groups2
 onClick={() => window.my_modal_3.showModal()}
 className={style.showModalIcon}
 />
 </div>
 </div>
 </div>
 </div>
 {/* Open modala */}
 <div className={style.modal}>
 {/* You can open the modal using ID.showModal() method */}
 <dialog id="my_modal_3" className="modal">
 <form method="dialog" className="modal-box">
 <button className={style.modalCloseBtn}> </button> ✕
 <div>
 <h3 className="font-bold text-lg">Passenger</h3>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{child}</strong>
 <div className="ml-5">
 <span className="text-xs">Adults</span> <br />
 <small>12 Years and above </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={childDecrement}>-</span>
 <span onClick={childIncrement}>+</span>
 </div>
 </div>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{adult}</strong>
 <div className="ml-5">
 <span className="text-xs">Children</span> <br />
 <small>2- 11 year at the time of travel </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={decrementAdult}>-</span>
 <span onClick={incrementAdult}>+</span>
 </div>
 </div>
 <div>
 <TextField
 className={style.dateOfChild}
 id="outlined-required"
 type="date"
 />
 </div>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{infant}</strong>
 <div className="ml-5">
 <span className="text-xs">Children</span> <br />
 <small>
 0 - 23 month at the time of travel{" "}
 </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={decrementInfant}>-</span>
 <span onClick={incrementInfant}>+</span>
 </div>
 </div>
 <div>
 <hr className="w-full my-5" />
 </div>
 <div className={style.classType}>
 <select
 onChange={(e) => {
 const classes = e.target.value;
 setClasses(classes);
 }}
 >
 <option value="Premium" selected>
 Cabin Class
 </option>
 <option value="Premium Econom">
 Premium Economy
 </option>
 <option value="Economy class">
 Economy class
 </option>
 <option value="Business class">
 Business class
 </option>
 <option value="First class">First class</option>
 </select>
 </div>
 </div>
 </form>
 </dialog>
 </div>
 </div>
 </div>
 </TabPanel>
 <TabPanel>
 <div>
 <div className={style.roundTripWrap}>
 <div className={style.package}>
 <div className={style.searchTop}>
 <h4>Flying From</h4>
 <input
 autoComplete="off"
 value={selected}
 id="searchAirport"
 onChange={(e) => handleFilter(e.target.value)}
 type="text"
 placeholder="City or Airport "
 />
 </div>
 </div>
 <div className={style.package2}>
 <div className={style.searchTop}>
 <h4>Flying From</h4>
 <input
 autoComplete="off"
 value={selected2}
 id="searchAirport"
 onChange={(e) => handleFilter2(e.target.value)}
 type="text "
 placeholder="City or Airport "
 />
 </div>
 </div>
 </div>
 <div className={style.packageWrap}>
 <div className={style.packageDate}>
 <div className={style.roundTripWrap}>
 <div
 onClick={() => setOpen((open) => !open)}
 className={style.date}
 >
 <h4>Depart To</h4>
 <div className={style.calendarInput}>
 <input
 // value={`${format(
 // range[0].startDate,
 // "MM/dd/yyyy"
 // )}`}
 readOnly
 />
 <CalendarMonth className={style.calendarIcon} />
 </div>
 </div>
 <div className={style.calendar} ref={refOne}>
 {/* {open && (
 <DateRange
 onChange={(item) => setRange([item.selection])}
 editableDateInputs={true}
 moveRangeOnFirstSelection={false}
 ranges={range}
 months={2}
 direction="horizontal"
 className="calendarElement"
 />
 )} */}
 </div>
 <div
 onClick={() => setOpen2((open2) => !open2)}
 className={style.date2}
 >
 <h4>Return To </h4>
 <div className={style.calendarInput}>
 <input
 // value={`${format(
 // range2[0].startDate,
 // "MM/dd/yyyy"
 // )}`}
 readOnly
 />
 <CalendarMonth className={style.calendarIcon} />
 </div>
 </div>
 <div className={style.calendar} ref={refTow}>
 {/* {open2 && (
 <DateRange
 onChange={(item) => setRange2([item.selection])}
 editableDateInputs={true}
 moveRangeOnFirstSelection={false}
 ranges={range2}
 months={2}
 direction="horizontal"
 className="calendarElement"
 />
 )} */}
 </div>
 <div
 onClick={() => window.my_modal_3.showModal()}
 className={style.package4}
 >
 <div className="flex justify-between">
 <div>
 <span>
 Passenger & {child + infant + adult} Person
 </span>{" "}
 <br />
 <span>{classes}</span>
 </div>
 <Groups2
 onClick={() => window.my_modal_3.showModal()}
 className={style.showModalIcon}
 />
 </div>
 </div>
 </div>
 </div>
 {/* open modal */}
 <div className={style.modal}>
 {/* You can open the modal using ID.showModal() method */}
 <dialog id="my_modal_3" className="modal">
 <form method="dialog" className="modal-box">
 <button className={style.modalCloseBtn}> </button> ✕
 <div>
 <h3 className="font-bold text-lg">Passenger</h3>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{child}</strong>
 <div className="ml-5">
 <span className="text-xs">Adults</span> <br />
 <small>12 Years and above </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={childDecrement}>-</span>
 <span onClick={childIncrement}>+</span>
 </div>
 </div>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{adult}</strong>
 <div className="ml-5">
 <span className="text-xs">Children</span> <br />
 <small>2- 11 year at the time of travel </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={decrementAdult}>-</span>
 <span onClick={incrementAdult}>+</span>
 </div>
 </div>
 <div>
 <TextField
 className={style.dateOfChild}
 id="outlined-required"
 type="date"
 />
 </div>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{infant}</strong>
 <div className="ml-5">
 <span className="text-xs">Children</span> <br />
 <small>
 0 - 23 month at the time of travel{" "}
 </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={decrementInfant}>-</span>
 <span onClick={incrementInfant}>+</span>
 </div>
 </div>
 <div>
 <hr className="w-full my-5" />
 </div>
 <div className={style.classType}>
 <select
 onChange={(e) => {
 const classes = e.target.value;
 setClasses(classes);
 }}
 >
 <option value="Premium" selected>
 Cabin Class
 </option>
 <option value="Premium Econom">
 Premium Economy
 </option>
 <option value="Economy class">
 Economy class
 </option>
 <option value="Business class">
 Business class
 </option>
 <option value="First class">First class</option>
 </select>
 </div>
 </div>
 </form>
 </dialog>
 </div>
 </div>
 </div>
 </TabPanel>
 <TabPanel>
 <div className={style.multiplePackageWrap}>
 <div className={style.multiplePackage}>
 <div className={style.searchTop}>
 <h4>Flying From</h4>
 <input
 autoComplete="off"
 value={selected}
 id="searchAirport"
 onChange={(e) => handleFilter(e.target.value)}
 type="text "
 placeholder="City or Airport "
 />

 </div>
 </div>
 <div className={style.multiplePackage}>
 <div className={style.searchTop}>
 <h4>Flying To</h4>
 <input
 autoComplete="off"
 value={selected2}
 id="searchAirport"
 onChange={(e) => handleFilter2(e.target.value)}
 type="text "
 placeholder="City or Airport "
 />
 </div>
 </div>
 <div className={style.multiplePackage}>
 <div onClick={() => setOpen2((open2) => !open2)}>
 <h4>Select Date </h4>
 <div className={style.calendarInput}>
 <input
 // value={`${format(range2[0].startDate,
// "MM/dd/yyyy")}`}
//  readOnly
 />
 <CalendarMonth className={style.calendarIcon} />
 </div>
 </div>
 <div className={style.calendar} ref={refTow}>
 {/* {open2 && (
 <DateRange
 onChange={(item) => setRange2([item.selection])}
 editableDateInputs={true}
 moveRangeOnFirstSelection={false}
 ranges={range2}
 months={2}
 direction="horizontal"
 className="calendarElement"
 />
 )} */}
 </div>
 </div>
 <div
 onClick={() => window.my_modal_3.showModal()}
 className={style.multiplePackage}
 >
 <div>
 <h4>
 Passenger & <small>{child + infant + adult}
Person</small>{" "}
 </h4>
 <small>Economy class</small>
 </div>
 <div className="modal">
 {/* You can open the modal using ID.showModal() method */}
 <button
 className="btn"
 onClick={() => window.my_modal_3.showModal()}
 ></button>
 <dialog id="my_modal_3" className="modal">
 <form method="dialog" className="modal-box">
 <button className="btn btn-sm btn-circle btn-ghost
absolute right-2 top-2">
 ✕
 </button>
 <div>
 <h3 className="font-bold text-lg">Passenger</h3>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{child}</strong>
 <div className="ml-5">
 <span className="text-xs">Adults</span> <br />
 <small>12 Years and above </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={childDecrement}>-</span>
 <span onClick={childIncrement}>+</span>
 </div>
 </div>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{adult}</strong>
 <div className="ml-5">
 <span className="text-xs">Children</span> <br />
 <small>2- 11 year at the time of travel </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={decrementAdult}>-</span>
 <span onClick={incrementAdult}>+</span>
 </div>
 </div>
 <div>
 <TextField
 className={style.dateOfChild}
 id="outlined-required"
 type="date"
 />
 </div>
 <div className={style.passengerWrap}>
 <div className={style.pLeftSide}>
 <strong>{infant}</strong>
 <div className="ml-5">
 <span className="text-xs">Children</span> <br />
 <small>
 0 - 23 month at the time of travel{" "}
 </small>
 </div>
 </div>
 <div className={style.adultsBtn}>
 <span onClick={decrementInfant}>-</span>
 <span onClick={incrementInfant}>+</span>
 </div>
 </div>
 <div>
 <hr className="w-full my-5" />
 </div>
 <div className={style.classType}>
 <p>Cabin class</p>
 <p>Premium Economy</p>
 <p>Business class</p>
 <p>First class</p>
 </div>
 </div>
 </form>
 </dialog>
 </div>
 </div>
 </div>
 {inputList.map((x, i) => {
 return (
 <div key={i} className={style.multiplePackageWrap}>
 <div className={style.multiplePackage}>
 <div className={style.searchTop}>
 <h4>Flying From</h4>
 <input
 autoComplete="off"
 id="searchAirport"
 type="text "
 placeholder="City or Airport "
 />
 </div>
 </div>
 <div className={style.multiplePackage}>
 <div className={style.searchTop}>
 <h4>Flying To</h4>
 <input
 autoComplete="off"
 id="searchAirport"
 type="text "
 placeholder="City or Airport "
 />
 </div>
 </div>
 <div className={style.multiplePackage}>
 <div onClick={() => setOpen((open) => !open)}>
 <h4>Select Date </h4>
 <div className={style.calendarInput}>
 <input
 // value={`${format(
 // range[0].startDate,
 // "MM/dd/yyyy"
 // )}`}
 readOnly
 />
 <CalendarMonth className={style.calendarIcon} />
 </div>
 </div>
 <div className={style.calendar} ref={refOne}>
 {/* {open && (
 <DateRange
 onChange={(item) => setRange([item.selection])}
 editableDateInputs={true}
 moveRangeOnFirstSelection={false}
 ranges={range}
 months={2}
 direction="horizontal"
 className="calendarElement"
 />
 )} */}
 </div>
 </div>
 {inputList.length !== 1 && (
 <div onClick={() => handleremove(i)}>
 <div className={style.removeCity}>
 <HorizontalRule />
 <span>Remove City </span>
 </div>
 </div>
 )}
 {inputList.length - 1 === i && (
 <div onClick={handleaddclick}>
 <div className={style.addCity}>
 <Add />
 <span>Add City</span>
 </div>
 </div>
 )}
 </div>
 );
 })}
 </TabPanel>
 <TabPanel>
 <div>
 <div className={style.groupFlight}>
 <div className={style.package}>
 <div className={style.searchTop}>
 <h4>Flying From</h4>
 <input
 autoComplete="off"
 id="searchAirport"
 type="text "
 placeholder="City or Airport "
 />
 </div>
 </div>
 <div className={style.package2}>
 <div className={style.searchTop}>
 <h4>Flying To</h4>
 <input
 autoComplete="off"
 id="searchAirport"
 type="text "
 placeholder="City or Airport "
 />
 </div>
 </div>
 </div>
 <div className={style.packageWrap}>
 <div className={style.packageDate}>
 <div className={style.groupFlight}>
 <div className={style.date}>
 <h4>Depart To</h4>
 <input type="date" />
 </div>
 <div className={style.date2}>
 <h4>Return To </h4>
 <input type="date" />
 </div>
 <div className={style.package4}>
 <div>
 <h4>Passengers & Cabin Class</h4>
 <input autoComplete="off" type="text "
placeholder="1 person" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </TabPanel>
 </Tabs>
 </div>
 <div className={style.btnWrap}>
 <Link href="/b2bdashboard/flight/search">
 <button className={`${style.heroBoxBtn} ${styles.searchBtn}`}>
 Get Your Flight
 </button>
 </Link>
 </div>
 </div>
 </section>
 );
};
export default HeroBox;