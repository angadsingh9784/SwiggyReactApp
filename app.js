import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import MyState from "./src/context/myState";
import { createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";
import Error from "./src/components/Pages/ErrorPage/Error";
import { Outlet } from "react-router-dom";
import Search from "./src/components/Pages/SearchPage/Search";
import Help from "./src/components/Pages/HelpPage/Help";
//import Restrauant from "./src/components/Pages/Restrauant/Restrauant";
import { Suspense } from "react";
import Offers from "./src/components/Pages/Offers";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Pages/Cart";

//LAZY LOADING 
const Restrauant = lazy(() => import("./src/components/Pages/Restrauant/Restrauant"))

const AppLayout = () => {
    //https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    //https://www.swiggy.com/mapi/homepage/getCards?lat=31.3260152&lng=75.57618289999999
    //https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&submitAction=ENTER&restaurantId=352792
    return (
        <>

            <Provider store={store}>
                <MyState>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </MyState>
            </Provider>

        </>
    )
}

const createElem = ReactDOM.createRoot(document.getElementById('root'))

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            }, {
                path: "/restrauant/:id",
                element: (
                    <Suspense>
                        <Restrauant />
                    </Suspense>
                )
            }, {
                path: "/offers",
                element: <Offers />
            }, {
                path: "/cart",
                element: <Cart />
            }, {
                path: "/help",
                element: <Help />
            }

        ]
    }, {
        path: "/search",
        element: <Search />
    }
])



createElem.render(<RouterProvider router={AppRouter} />)