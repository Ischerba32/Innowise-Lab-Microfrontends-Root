import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./activity-functions";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// registerApplication(
//   "@Innowise/home",
//   () => System.import("@Innowise/home"),
//   isActive.home
// );

// registerApplication(
//   "@Innowise/todo",
//   () => System.import("@Innowise/todo"),
//   isActive.todo
// );

// registerApplication(
//   "@Innowise/mini-paint",
//   () => System.import("@Innowise/mini-paint"),
//   isActive.mini_paint
// );

applications.forEach(registerApplication);
layoutEngine.activate();
start();
