import { useQuery } from "@tanstack/react-query";
import { getTokens } from "../../utils/core";
import { fetchJson } from "../../libs/api";
import { API_HOST_URL } from "../../config";
import { endpoints } from "../../config/endpoints";


const ORDERS_QUERY_KEY = 'orders';

export function useLatestOrdersList(){
    const {data,isLoading}=useQuery([ORDERS_QUERY_KEY],async()=>{
        try {
            const {accessToken}=getTokens();
            const {data}=await fetchJson(`${API_HOST_URL}/${endpoints.orders.latest}`,
            {
                headers:{'Authorization':`Bearer ${accessToken}`}
            }
        )
        return data
        } catch (error) {
            return null
        } 
    
    },
    {
        cacheTime: 0,
        staleTime: 1,
    }
    )
    return{ ordersData:data,orderIsLoading:isLoading}
}