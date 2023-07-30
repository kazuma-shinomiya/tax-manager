import GlobalBottomNavigation from "@/components/GlobalBottomNavigation/index";
import Header from "@/components/Header";
import TotalTax from "@/components/TotalTax";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <TotalTax />
        <GlobalBottomNavigation />
      </main>
    </>
  );
}
