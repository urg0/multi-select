import { QueryClient, QueryClientProvider } from "react-query";

import MultiSelect from "./components/multi-select/MultiSelect";
import Rick from "./assets/images/rick2.png";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <img src={Rick} alt="rick" className="rick" />
        <MultiSelect />
      </div>
    </QueryClientProvider>
  );
};

export default App;
