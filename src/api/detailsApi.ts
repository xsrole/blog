import http from "@/http";
export function getDetails(){
    return http.get('/details/find')
}