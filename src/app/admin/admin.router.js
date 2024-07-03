import { RouterComponent, defineRouter } from "rasengan";
import Dashboard from "./pages/dashboard.page";
import AdminLayout from "./layouts/admin.layout";
 
class AdminRouter extends RouterComponent {}
 
export default defineRouter({
  import: [],
  layout: AdminLayout,
  pages: [Dashboard]
})(AdminRouter);