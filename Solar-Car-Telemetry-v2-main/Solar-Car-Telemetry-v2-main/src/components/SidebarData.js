import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
    {
        title:'Overview',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Motor',
        path: '/motor',
        icon: <BsIcons.BsGearWideConnected />,
        cName: 'nav-text'
    },
    {
        title:'Battery',
        path: '/battery',
        icon: <BsIcons.BsBatteryCharging />,
        cName: 'nav-text'
    },
    {
        title:'Solar',
        path: '/solar',
        icon: <BiIcons.BiSun />,
        cName: 'nav-text'
    },
    {
        title:'GPS',
        path: '/gps',
        icon: <FaIcons.FaMapMarkerAlt />,
        cName: 'nav-text'
    },
    {
        title:'Map',
        path: '/map',
        icon: <BiIcons.BiMapAlt />,
        cName: 'nav-text'
    },
]
