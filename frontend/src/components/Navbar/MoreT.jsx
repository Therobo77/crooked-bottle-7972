import React from 'react'
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GetAppIcon from "@mui/icons-material/GetApp";


const MoreT = () => {
  return (
    <div className="moret">
    <div className="moret__in">
      <NotificationsIcon  />
      <p>Notification Preferences</p>
    </div>
    <hr />
    <div className="moret__in">
      <MonetizationOnIcon />
      <p>Sell on Flipkart</p>
    </div>
    <hr />
    <div className="moret__in">
      <LiveHelpIcon />
      <p>24*7 Customer Care</p>
    </div>
    <hr />
    <div className="moret__in">
      <TrendingUpIcon />
      <p>Advertise</p>
    </div>
    <hr />
    <div className="moret__in">
      <GetAppIcon />
      <p>Download app</p>
    </div>
  </div>
  )
}

export default MoreT