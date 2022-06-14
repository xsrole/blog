import { MockMethod } from 'vite-plugin-mock';
import Mock, { Random } from 'mockjs';
const baseUrl = '/api'
export default [
    {
        url: baseUrl + '/menu/find',
        method: 'get',
        response: Mock.mock({
            code: 200,
            data: [
                {
                    label: "Home",
                    path: "/home",
                },
                {
                    label: "Note",
                    path: "/note",
                },
                {
                    label: "Project",
                    path: "/project",
                },

                {
                    label: "About",
                    path: "/about",
                },
            ]
        })
    }
] as MockMethod[]