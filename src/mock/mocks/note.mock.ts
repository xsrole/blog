import { MockMethod } from 'vite-plugin-mock';
import Mock, { Random } from 'mockjs';
const baseUrl = '/api'
export default [
    {
        url: baseUrl + '/note/find',
        method: 'get',
        response: Mock.mock({
            code: 200,
            "data|6": [
                {
                    "id|+1":1001,
                    cover:Random.image('500x300', '#50B347', '#FFF', 'Note'),
                    title: Random.title(),
                    content: Random.cparagraph()
                }
            ]
        })
    }
] as MockMethod[]