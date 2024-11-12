import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import Cart from "./Cart/Cart";
import styles from "./topbar.module.css";
const Router = () => {
  const header_bar = (showArrow) =>{
    return <><div className={styles.topbarblock}>
          <div className={styles.topbartopblock}>
              <img src="/time.svg" alt="timout" className={styles.time} />
              <img src="/wify.svg" alt="wiftyout" className={styles.wify} />
              
          </div>
          {showArrow && (
  <Link to="/">
    <img src="/arrow.svg" alt="arrowout" className={styles.arrow} />
  </Link>
)}        
    </div>
    </>
  }
  const router = createBrowserRouter( [{
    path: "/",
    element:<Home header_bar={header_bar}/> ,
  },
  {
    path: "/store/:storeId",
    element:<Store header_bar={header_bar}/>,
  },
  {
    path: "/store",
    element:<Stores header_bar={header_bar}/>,
  },
  {
    path: "/cart",
    element:<Cart header_bar={header_bar}/>,
  },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
