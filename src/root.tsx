// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import NavBar from "~/components/NavBar";
import "./root.scss";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>zen1tho's home</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=JetBrains+Mono:wght@200;300;400;700&family=Noto+Sans+JP:wght@700&family=Open+Sans:wght@300&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <NavBar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
