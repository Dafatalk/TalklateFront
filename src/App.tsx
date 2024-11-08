import { AppRoutes } from "./componets/routes/AppRoutes";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <NotificationContainer />
      <AppRoutes />;
    </>
  );
}
