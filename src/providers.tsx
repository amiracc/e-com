import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import theme from "./theme";
import store from "./store";
import { BasketProvider } from "./context/BasketContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BasketProvider>{children}</BasketProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  );
};
