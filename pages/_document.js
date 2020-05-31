// ==============================
// ==============================
// ==============================
// === IMPORTS
// ==============================
// ==============================
// ==============================

// === CORE ===
import Document, { Head, Main, NextScript } from "next/document";

// ==============================
// ==============================
// ==============================
// === COMPONENT DEFINITION + EXPORT
// ==============================
// ==============================
// ==============================

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
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
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
          {
            // === CUSTOM FONTS
          }
          <link
            href="//fonts.googleapis.com/css?family=Oswald:400,700"
            rel="stylesheet"
          />
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
