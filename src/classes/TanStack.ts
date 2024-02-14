import { QueryClient } from "react-query";

class TanStack {

    private static _instace: TanStack;

    private queryClient: QueryClient;

    private constructor() {
        this.queryClient = new QueryClient();
    }

    public static getInstance() {
        if (!TanStack._instace) {
            TanStack._instace = new TanStack();
        }
        return TanStack._instace;
    }

    public getQueryClient() {
        return this.queryClient;
    }
}

export default TanStack;