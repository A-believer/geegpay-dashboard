import { Box, Category, DiscountShape, InfoCircle, Profile2User, TrendUp } from "iconsax-react";

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