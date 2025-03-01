import { AppRoutes } from "./componets/routes/AppRoutes";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import ResponsiveAppBar from "./componets/nav_var/navbar";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <NotificationContainer />
      <AppRoutes />;
    </>
  );
}
