import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {BrowserRouter as Router} from "react-router-dom";
import {LoadingProvider} from "./hooks/LoadingContext/LoadingProvider.jsx";
import {theme} from './theme'; // Asumiendo que exportamos 'theme' desde este archivo
import './customTheme.css';
import {ConfigProvider} from "antd"; // Importa tu archivo CSS personalizado
// import { RoleProvider } from "./hooks/RoleContext/RoleProvider.jsx";
// import { UserProvider } from "./hooks/UserContext/UserProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(<Router>
    <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={{
            ...theme,
            cssVar: true // Para React 18
            // Si estás usando React 17 o 16, usa: cssVar: { key: 'app' }
        }}>
            {/*<RoleProvider>*/}
            <LoadingProvider>
                {/*<UserProvider>*/}
                <App/>
                {/*</UserProvider>*/}
            </LoadingProvider>
            {/*</RoleProvider>*/}
        </ConfigProvider>
        <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
</Router>,)
