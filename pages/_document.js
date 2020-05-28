// ==============================
// ==============================
// ==============================
// === IMPORTS
// ==============================
// ==============================
// ==============================

// === CORE ===
import Document, { Head, Main, NextScript } from "next/document";
import {ServerStyleSheets} from "@material-ui/styles";

// ==============================
// ==============================
// ==============================
// === COMPONENT DEFINITION + EXPORT
// ==============================
// ==============================
// ==============================

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    // return Document.getInitialProps(ctx);
    try{
      ctx.renderPage = () => originalRenderPage({
          enhanceApp: App => props => sheet.collect(<App {...props}/>)
      });

      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps,
          styles: (
              <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
              </>
          )
      }
    } finally {
        ctx.renderPage(sheet)
    }
  }

  render() {
    // make the environment available on the client
    const envScript = `window.ENV = '${process.env.WILD_ENV ||
      "development"}';`;

    return (
      <html lang="en">
        {
          // Base Head
        }
        <Head>
          {
            // === BASE ===
          }
          <meta charSet="utf-8" />
          <meta content="website" property="og:type" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />
          {
            // === CUSTOM FONTS
          }
          <link
            href="//fonts.googleapis.com/css?family=Oswald:400,700"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {
            // === NEXT DEFAULT
          }
          <script dangerouslySetInnerHTML={{ __html: envScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
