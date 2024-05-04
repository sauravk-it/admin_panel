import { useQueryClient,  useMutation } from '@tanstack/react-query';
import { API_HOST_URL, TOKEN_STORE_NAME } from '../../config';
import { endpoints } from '../../config/endpoints';
import { fetchJson } from '../../libs/api';


const USER_QUERY_KEY = 'user'

//Login
export function useLogin() {
    const queryClient = useQueryClient();
    const mutation = useMutation({mutationFn:({ email, password }) => fetchJson(`${API_HOST_URL}/${endpoints.account.login}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password
        })
    }, true)})
    return {
        handleLogin: async (email, password) => {
            
            try {
                const res = await mutation.mutateAsync({ email, password });
                const user = await res.json();
                console.log(user)
                if (user.success) {
                    const { token } = user;
                    localStorage.setItem(TOKEN_STORE_NAME, JSON.stringify(token));
                    queryClient.setQueryData([USER_QUERY_KEY], user.data);
                }
                return user

            } catch (error) {
               
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        loginLoading: mutation.isLoading,
    }
}
