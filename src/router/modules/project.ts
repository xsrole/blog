import { RouteRecordRaw } from "vue-router";
import Project from "@/views/project/index.vue";
const projectRoutes: RouteRecordRaw = {
  path: "/project",
  name: Project.name,
  component: Project,
  meta: {
    title: "项目",
  },
};

export default projectRoutes;
