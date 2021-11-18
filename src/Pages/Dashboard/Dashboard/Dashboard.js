import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />

            <NavLink style={{
                marginLeft: '15px',
                textDecoration: 'none',
                color: 'blue'
            }} to="/home">
                <Typography variant="h6" component="span">
                    Home
                        </Typography>
            </NavLink> <br />

            <NavLink style={{
                marginLeft: '15px',
                textDecoration: 'none',
                color: 'blue'
            }} to="/dashboard">
                <Typography variant="h6" component="span">
                    Dashboard
                        </Typography>
            </NavLink>

            <List>
                {['My Orders', 'Review', 'Pay'].map((text) => (
                    <ListItem button key={text}>
                        <NavLink style={{
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: 'blue',
                            fontWeight: 'bold'
                        }} to={`${url}/${text.toLowerCase()}`}>
                            <Typography variant="h6" component="span">
                                <ListItemText primary={text} />
                            </Typography>
                        </NavLink>
                    </ListItem>
                ))}
            </List>

            <List>
                {['Manage All Orders', 'Add A Product', 'Make Admin', 'Manage Products'].map((text) => (
                    <ListItem button key={text}>
                        <NavLink style={{
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: 'blue',
                            fontWeight: 'bold'
                        }} to={`${url}/${text.toLowerCase()}`}>
                            <Typography variant="h6" component="span">
                                <ListItemText primary={text} />
                            </Typography>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard &nbsp;&nbsp;&nbsp;<Button onClick={logout} variant="contained">
                            Logout
                            </Button> &nbsp; {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    {/* user routes */}
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>

                    <Route path={`${path}/my orders`}>
                        <MyOrders></MyOrders>
                    </Route>

                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    {/* admin routes */}
                    <Route path={`${path}/manage all orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>

                    <Route path={`${path}/add a product`}>
                        <AddProduct></AddProduct>
                    </Route>

                    <Route path={`${path}/make admin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>

                    <Route path={`${path}/manage products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
