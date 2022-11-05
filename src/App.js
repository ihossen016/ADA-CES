import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Dasboard from "./component/Dashboard";
import Signin from "./component/Signin";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

function App() {
    const { currentUser } = useSelector(state => state.user);

    const isAdmin = false;
    const isModerator = false;
    const isParent = false;
    const isChild = false;

    console.log("user", currentUser);

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            currentUser ? (
                                <Dasboard />
                            ) : (
                                <Navigate replace to="/login" />
                            )
                        }
                    />
                    <Route
                        path="info"
                        element={
                            currentUser ? (
                                <Page1 />
                            ) : (
                                <Navigate replace to="/login" />
                            )
                        }
                    />
                    <Route
                        path="profile"
                        element={
                            currentUser ? (
                                <Page2 />
                            ) : (
                                <Navigate replace to="/login" />
                            )
                        }
                    />
                    <Route
                        path="notification"
                        element={
                            currentUser ? (
                                <Page3 />
                            ) : (
                                <Navigate replace to="/login" />
                            )
                        }
                    />

                    <Route path="login" element={<Login />} />
                    <Route path="signin" element={<Signin />} />

                    <Route
                        path="*"
                        element={
                            currentUser ? (
                                <Dasboard />
                            ) : (
                                <Navigate replace to="/login" />
                            )
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
