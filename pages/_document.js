import { Html, Head, Main, NextScript } from "next/document";
import NavigationBar from "@/components/NavigationBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noticia+Text:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <NavigationBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
