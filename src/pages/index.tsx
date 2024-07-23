import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home - ${siteConfig.title}`}
      description="Official AIMES Ecosystem user guide documentation."
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <img src="/img/decor.png" />
        </div>
        <a href="/docs/intro">Go to docs</a>
        <a
          href="https://aimes-ecosystem.unimelb-transport-technologies.cloud.edu.au/app"
          rel="nofollow"
        >
          Login to Dashboard
        </a>
      </div>
    </Layout>
  );
}
