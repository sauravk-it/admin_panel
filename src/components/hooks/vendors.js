import { useQuery } from "@tanstack/react-query";
import { API_HOST_URL } from "../../config";
import { endpoints } from "../../config/endpoints";
import { fetchJson } from "../../libs/api";
import { getTokens } from "../../utils/core";

const VENDORS_QUERY_KEY = 'vendors';
const VENDOR_QUERY_KEY = 'vendor';

export function useVendorList() {
    const { data, isLoading } = useQuery({queryKey:[VENDORS_QUERY_KEY], queryFn:async () => {
        try {
            const {accessToken}   = getTokens();
            const { data } = await fetchJson(`${API_HOST_URL}/${endpoints.vendors.list}`, {
                headers: { 'Authorization': `Bearer ${accessToken}` },
            })
            return data;
        } catch (err) {
            return null;
        }

    }}
)
    return { vendorsData: data, vendorsIsLoading: isLoading }
}

export const stripStationsList = (data) => {
    return {
        value: data._id,
        label: `${data.stationName} (${data.stationCode})`
    }
}

export const stripVendorsList = (data) => {
    return {
        value: data._id,
        label: `${data.name}`
    }
}
