import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberSharpIcon from '@mui/icons-material/ConfirmationNumberSharp';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';

const LoginT = () => {
  return (
    <div className="logint">
    <div className="logint__i">
      <h2>New customer</h2>
      <p>Signup</p>
    </div>
    <hr />
    <div className="logint__in">
      <AccountCircleIcon />
      <p>My Profile</p>
    </div>
    <hr />
    <div className="logint__in">
      <BookmarkAddIcon/>
      <p>Flipkart Plus</p>
    </div>
    <hr />
    <div className="logint__in">
      <StoreIcon />
      <p>Orders</p>
    </div>
    <hr />
    <div className="logint__in">
      <FavoriteIcon />
      <p>Wishlist</p>
    </div>
    <hr />
    <div className="logint__in">
      <ConfirmationNumberSharpIcon />
      <p>Rewards</p>
    </div>
    <hr />
    <div className="logint__in">
      <AccountBalanceWalletSharpIcon />
      <p>Gift Cards</p>
    </div>
  </div>
  )
}

export default LoginT