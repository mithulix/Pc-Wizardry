import Layout from "@/components/Layout/Layout";
import { wrapper } from "@/redux/app/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps }, // Destructure session from pageProps
}) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <SessionProvider session={session}>
      <Provider store={store}> {/* Provide the Redux store */}
        <div className="font-['Onset'] text-black">
          <Layout> {/* Wrap the main content in your custom Layout component */}
            <Component {...pageProps} /> {/* Render the specific page or component */}
          </Layout>
        </div>
      </Provider>
    </SessionProvider>
  );
}
