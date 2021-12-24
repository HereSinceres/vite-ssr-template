// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
    Page: React.ReactNode;
    pageExports: {
        documentProps?: {
            title: string;
        };
    };
    // lang: string;
    // ua: string;
    routeParams: Record<string, string>;
    urlPathname: string;
    pageProps: Record<string, unknown>;
    documentProps?: {
        title: string;
    };
    urlParsed: {
        pathname: string;
        search: null | Record<string, string>;
        hash: null | string;
    };
};
