import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/home.page";
import AppLayout from "@/app/app.layout";
import Test from "@/app/test.page";
import AdminRouter from "./admin/admin.router";
 
class AppRouter extends RouterComponent {}
 
export default defineRouter({
  import: [AdminRouter],
  layout: AppLayout,
  pages: [Home, Test]
})(AppRouter);