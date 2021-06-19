import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Show from "../components/DeleteAccountModal";
import UserUpdates from "../components/UserUpdates";
import UserDetails from "../components/UserDetails";

import "./Settings/SettingScreen.css";

function UserSettings() {

    const History = useHistory();  

    const [active, setActive] = React.useState<boolean>(false);
    const [details, setDetails] = React.useState<boolean>(false);
    const [updates, setUpdates] = React.useState<boolean>(false);

    //   console.log(props);
    const Details = () => {
        setActive(true);
        if (updates) {
            setUpdates(false);
        }
        setDetails(true);
    };

    const Update = () => {
        setActive(true);
        if (details) {
            setDetails(false);
        }
        setUpdates(true);
    };

    const Logout = () => {
        localStorage.removeItem("token");

        // Redirecting the User

        History.push('/login');
        window.location.reload();
    };

    return (
        <div className="usersettings">
            <div className="usersettings_sidebar">
                <h3>Account Settings</h3>

                <br />
                <hr />
                <br />

                <div>
                    <Button onClick={Details} style={{ marginBottom: "5px" }}>
                        Account Details
                    </Button>

                    <Button onClick={Update} style={{ marginBottom: "10px" }}>
                        Update Account
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={Logout}
                        style={{ marginBottom: "5px" }}
                    >
                    Logout
                    </Button>

                    <Show />
                </div>
                </div>

                <div className="usersettings_main">
                {active ? (
                    details ? (
                        <UserDetails />
                    ) : updates ? (
                        <UserUpdates />
                    ) : null
                ) : (
                    <div>
                        <h1
                            style={{
                            color: "#000",
                            margin: "100px",
                            textAlign: "center",
                            }}
                        >
                            Account Settings
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserSettings;