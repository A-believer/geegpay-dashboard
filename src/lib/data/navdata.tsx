import { Box, BoxTick, Category, Coin1, DiscountShape, I3DRotate, InfoCircle, Profile2User, ShoppingCart, TrendUp } from "iconsax-react";

export const navItems = [
  {
    id: 1,
    to: "/",
    activeIcon:  <Category size="24" color="#0D062D" variant="Bulk"/>,
        inActiveIcon: <Category size="24" color="#B2ABAB" variant="Broken" />,
    name: "Dashboard"
  },
  {
    id: 2,
    to: "/trend",
    activeIcon:  <TrendUp size="24" color="#0D062D" variant="Bulk"/>,
      inActiveIcon: <TrendUp size="24" color="#B2ABAB" variant="Broken" />,
    name: "Trends"
    
  },
  {
    id: 3,
    to: "/userprofile",
    activeIcon:  <Profile2User size="24" color="#0D062D" variant="Bulk"/>,
      inActiveIcon: <Profile2User size="24" color="#B2ABAB" variant="Broken" />,
    name: "Users"
    
  },
  {
    id: 4,
    to: "/delivery",
    activeIcon:  <Box size="24" color="#0D062D" variant="Bulk"/>,
      inActiveIcon: <Box size="24" color="#B2ABAB" variant="Broken" />,
    name: "Orders"
    
  },
  {
    id: 5,
    to: "/percentages",
    activeIcon:  <DiscountShape size="24" color="#0D062D" variant="Bulk"/>,
      inActiveIcon: <DiscountShape size="24" color="#B2ABAB" variant="Broken" />,
    name: "Profits"
    
  },
  {
    id: 6,
    to: "/ideas",
    activeIcon:  <InfoCircle size="24" color="#0D062D" variant="Bulk"/>,
      inActiveIcon: <InfoCircle size="24" color="#B2ABAB" variant="Broken" />,
    name: "Ideas"
    
  },
]


const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

export  const realtimeData = [
    {
      id: 1,
      title: "Total Order",
      total: "350",
      icon: <BoxTick size="24" color="#34CAA5" variant="Bulk" />,
      data: {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [8, 9, 9, 11, 14, 10, 16, 12, 10, 16, 9, 17, 8, 17, 17, 17, 14, 8, 12, 15, 16, 9, 15, 8, 16, 14, 8, 11, 10, 15],
      borderColor: 'rgba(102, 200, 123, 1)',
      backgroundColor: 'rgba(102, 200, 123, 0.1)',
      borderWidth: 1
    },
  ],
}
    },
    {
      id: 2,
      title: "Total Refund",
      total: "270",
      icon: <I3DRotate size="24" color="#34CAA5" variant="Bulk"/>,
      data: {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [5, 6, 8, 9, 14, 7, 5, 6, 8, 9, 13, 8, 7, 5, 9, 14, 7, 8, 6, 14, 7, 9, 8, 6, 5, 14, 9, 8, 5, 7],
      borderColor: 'rgba(237, 84, 78, 1)',
      backgroundColor: 'rgba(237, 84, 78, 0.1)',
      borderWidth: 1
    },
    
  ],
}
  },
    
    {
      id: 3,
      title: "Average Sales",
      total: "1567",
      icon: <ShoppingCart size="24" color="#34CAA5" variant="Bulk"/>,
      data: {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [75, 60, 25, 45, 65, 70, 40, 50, 55, 30, 60, 70, 40, 65, 55, 35, 25, 45, 75, 50, 30, 70, 40, 60, 25, 35, 75, 45, 50, 65],
     borderColor: 'rgba(102, 200, 123, 1)',
      backgroundColor: 'rgba(102, 200, 123, 0.1)',
      borderWidth: 1
    },
    
  ],
}
  },
    
    {
      id: 4,
      title: "Total Income",
      total: "$350.00",
      icon: <Coin1 size="24" color="#34CAA5" variant="Bulk"/>,
      data: {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [7, 10, 14, 15, 11, 8, 17, 13, 9, 16, 8, 15, 12, 7, 16, 10, 17, 7, 14, 9, 11, 17, 15, 8, 10, 13, 16, 12, 7, 11]
,
      borderColor: 'rgba(237, 84, 78, 1)',
      backgroundColor: 'rgba(237, 84, 78, 0.1)',
      borderWidth: 1
    },
    
  ],
}
    },
  ]