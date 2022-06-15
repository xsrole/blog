import { MockMethod } from 'vite-plugin-mock';
import Mock, { Random } from 'mockjs';
const baseUrl = '/api'
export default [
    {
        url: baseUrl + '/details/find',
        method: 'get',
        response: Mock.mock({
            code: 200,
            data:{
                id:10001,
                title:'U-Admin-Template',
                cover:'https://s1.328888.xyz/2022/06/15/pYHCy.jpg',
                description:'这是一个基于Vite2+Vue3的后台管理系统基础开发模板',
                content:'',
                link:'https://gitee.com/cxice/unlit-admin-template',
                storeLink:'https://gitee.com/cxice/unlit-admin-template',
                createAt:'2022-6-14',
                updateAt:'2022-6-14',
                auth:{
                    id:1000,
                    name:'aman',
                    nickName:'阿满',
                    avatar:'http://unlit.oss-cn-beijing.aliyuncs.com/2022-04-22/e3beb59b0652f7fbfc32a0102dcf035a.png!avatar',
                    description:'这个人很懒什么都没写'
                }
            }
        })
    }
] as MockMethod[]