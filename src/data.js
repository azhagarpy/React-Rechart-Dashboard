import {
  FaHome,
  FaUser,
  FaUsers,
  FaShoppingCart,
  FaFile,
  FaBox,
  FaStickyNote,
  FaCogs,
  FaCalendar,
  FaDatabase,
  FaChartBar,
  FaClipboardList,
  FaCoins,
  FaCog,
} from "react-icons/fa";

export const menu = [
  {
    id: 1,
    title: "MAIN",
    listItems: [
      {
        id: 1,
        title: "HomePage",
        url: "/",
        icon: <FaHome />,
      },
      {
        id: 2,
        title: "Profile",
        url: "/profile",
        icon: <FaUser />,
      },
    ],
  },
  {
    id: 2,
    title: "LISTS",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <FaUsers />,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: <FaShoppingCart />,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: <FaCoins />,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: <FaFile />,
      },
    ],
  },
  {
    id: 3,
    title: "GENERAL",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: <FaBox />,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: <FaStickyNote />,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: <FaCogs />,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: <FaCalendar />,
      },
    ],
  },
  {
    id: 4,
    title: "MAINTENANCE",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: <FaCog />,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: <FaDatabase />,
      },
    ],
  },
  {
    id: 5,
    title: "ANALYTICS",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: <FaChartBar />,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: <FaClipboardList />,
      },
    ],
  },
];

export const topDeals = [
  {
    id: 1,
    Name: "Azhagar",
    Mail: "azhagarbca@gmail.com",
    Image: "./images/img1.jpg",
    Price: 76.2,
  },
  {
    id: 2,
    Name: "Mathiyalagan",
    Mail: "mathibca@gmail.com",
    Image: "./images/img2.jpg",
    Price: 26.2,
  },
  {
    id: 3,
    Name: "Kumar",
    Mail: "kumarkumar@gmail.com",
    Image: "./images/img3.jpg",
    Price: 12.67,
  },
  {
    id: 4,
    Name: "Raja",
    Mail: "rajaraja@gmail.com",
    Image: "./images/img5.jpg",
    Price: 6.2,
  },
  {
    id: 5,
    Name: "Arun",
    Mail: "arunkumar@gmail.com",
    Image: "./images/img1.jpg",
    Price: 716.2,
  },
  {
    id: 6,
    Name: "gobal",
    Mail: "gobalmmms@gmail.com",
    Image: "./images/img2.jpg",
    Price: 100.27,
  },
  {
    id: 7,
    Name: "Azhagar",
    Mail: "azhagarbca@gmail.com",
    Image: "./images/img3.jpg",
    Price: 0.2,
  },
];

// line chart data

export const data1 = [
  {
    name: "page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "page D",
    uv: 2320,
    pv: 9808,
    amt: 2290,
  },
  {
    name: "page E",
    uv: 1900,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "page F",
    uv: 2390,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export const data2 = [
  {
    name: "page C",
    uv: 2000,
    pv: 800,
    amt: 2290,
  },
  {
    name: "page D",
    uv: 2320,
    pv: 2808,
    amt: 2290,
  },
  {
    name: "page E",
    uv: 1900,
    pv: 800,
    amt: 2181,
  },
  {
    name: "page F",
    uv: 2390,
    pv: 7600,
    amt: 2100,
  },
  {
    name: "page C",
    uv: 2000,
    pv: 1800,
    amt: 2290,
  },
];

export const data3 = [
  {
    name: "page C",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "page D",
    uv: 2320,
    pv: 9838,
    amt: 2290,
  },
  {
    name: "page E",
    uv: 1900,
    pv: 6800,
    amt: 2181,
  },
  {
    name: "page F",
    uv: 2390,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "page C",
    uv: 2000,
    pv: 900,
    amt: 2290,
  },
];

export const data4 = [
  {
    name: "page C",
    uv: 2000,
    pv: 1000,
    amt: 2290,
  },
  {
    name: "page D",
    uv: 2320,
    pv: 9838,
    amt: 2290,
  },
  {
    name: "page E",
    uv: 1900,
    pv: 2800,
    amt: 2181,
  },
  {
    name: "page F",
    uv: 2390,
    pv: 9300,
    amt: 2100,
  },
  {
    name: "page C",
    uv: 2000,
    pv: 900,
    amt: 2290,
  },
];

// area chart data

export const areaChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// pie chart data

export const pieChartData = [
  { name: "Group A", value: 400, color: "red" },
  { name: "Group B", value: 300, color: "green" },
  { name: "Group C", value: 300, color: "grey" },
  { name: "Group D", value: 200, color: "yellow" },
];
