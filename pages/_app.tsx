import "@formatjs/intl-numberformat/polyfill-force";
import "@formatjs/intl-numberformat/locale-data/nb";
import "@formatjs/intl-datetimeformat/polyfill-force";
import "@formatjs/intl-datetimeformat/add-all-tz";
import "@formatjs/intl-datetimeformat/locale-data/nb";

import { BaseStyles } from "@vofo-no/design";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { resetIdCounter } from "react-tabs";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const { locale } = router;
  resetIdCounter();
  return (
    <IntlProvider locale={locale || "nb"}>
      <BaseStyles>
        <Component {...pageProps} />
      </BaseStyles>
    </IntlProvider>
  );
}

export default MyApp;
