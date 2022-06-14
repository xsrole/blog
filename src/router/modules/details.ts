import { RouteRecordRaw } from "vue-router";
import Details from "@/views/details/index.vue";
const detailsRoutes: RouteRecordRaw = {
  path: "/:type/:id",
  name: Details.name,
  component: Details,
  meta: {
    title: "详情",
  },
};

export default detailsRoutes;
