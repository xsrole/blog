import http from "@/http";
export function getNoteData(){
    return http.get('/note/find')
}