'use client'
import { ReactNode} from "react";
import styles from "@/_styles/Home.module.scss";

export default function DashboardLayout ({children}:Readonly<{children:ReactNode}>) {
    return (
        <main className={styles.dashboardContainer}>
            <div className="container">{children}</div>
        </main>
    );
};