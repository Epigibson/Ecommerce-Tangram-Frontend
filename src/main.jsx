import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { LoadingProvider } from "./hooks/LoadingContext/LoadingProvider.jsx";
// import { RoleProvider } from "./hooks/RoleContext/RoleProvider.jsx";
// import { UserProvider } from "./hooks/UserContext/UserProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <QueryClientProvider client={queryClient}>
            {/*<RoleProvider>*/}
                <LoadingProvider>
                    {/*<UserProvider>*/}
                        <App />
                    {/*</UserProvider>*/}
                </LoadingProvider>
            {/*</RoleProvider>*/}
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </Router>,
)
