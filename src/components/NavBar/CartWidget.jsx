import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartWidget = ({ amount }) => {
  return (
    <div className="navbar-item">
        <div className="buttons">
            <a href="#" className="button is-link">
                <Badge badgeContent={ amount } color="secondary">
                    <ShoppingCartOutlinedIcon color="white" />
                </Badge>
            </a>
        </div>
    </div>
  )
}
