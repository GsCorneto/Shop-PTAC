import Header from "./components/Header"
import Footer from "./components/Footer"
import styles from "./page.module.css"
export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.body}>
        <Header/>
         <br/>
        {children}

      </body>
    </html>
  );
}
