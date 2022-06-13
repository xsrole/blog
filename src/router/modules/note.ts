import { RouteRecordRaw } from "vue-router";
import Note from "@/views/note/index.vue";
const noteRoutes: RouteRecordRaw = {
  path: "/note",
  name: Note.name,
  component: Note,
  meta: {
    title: "笔记",
  },
};

export default noteRoutes;
