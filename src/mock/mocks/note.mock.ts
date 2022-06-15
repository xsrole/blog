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
                    cover:Random.image('500x300', Random.color(), '#FFF', Random.csentence()),
                    title: Random.title(),
                    description:Random.cparagraph(),
                    content: Random.cparagraph(),
                    auth:{
                        id:1000,
                        name:'aman',
                        nickName:'阿满',
                        avatar:'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
                        description:'这个人很懒什么都没写'
                    },
                    createAt:'2022-6-14',
                    updateAt:'2022-6-14',
                }
            ]
        })
    }
] as MockMethod[]