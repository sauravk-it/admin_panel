import { useQuery } from "@tanstack/react-query"
import { API_HOST_URL } from "../../config"
import { endpoints } from "../../config/endpoints"
import { fetchJson } from "../../libs/api"
import { getTokens } from "../../utils/core"


const STATIONS_QUERY_KEY = 'stations'

export  function useStationList() {
    const { data, isLoading } = useQuery({queryKey:[STATIONS_QUERY_KEY], queryFn:async () => {
        try {
            const {accessToken} = getTokens()
            const { data } = await fetchJson(`${API_HOST_URL}/${endpoints.stations.list}`,
                {
                    headers: { 'Authorization': `Bearer ${accessToken}` }
                })
            return data
        } catch (error) {
            return null
        }
    }}
)
    return{
        stationsData: data, stationsIsLoading: isLoading
    }
}


export const stripStationsList = (data) => {
    return {
        value: data._id,
        label: `${data.stationName} (${data.stationCode})`
    }
}