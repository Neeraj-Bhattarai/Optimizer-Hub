import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Word Counter',
    path: '/Wordcounter',
    icon: <AiIcons.AiFillFileWord />,
    cName: 'nav-text'
  },
  {
    title: 'Age Calculator',
    path: '/Agecalculator',
    icon: <FaIcons.FaCalculator />,
    cName: 'nav-text'
  },
  {
    title: 'Unit Converter',
    path: '/team',
    icon: <FaIcons.FaWeight />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];