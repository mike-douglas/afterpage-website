import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IconPlaceholder, { type IconColor } from "../components/IconPlaceholder";
import type { IconName } from "../components/icons";
import copy from "../content/copy.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${copy.press.title} — ${copy.header.wordmark}`,
  description: copy.press.boilerplate.short,
};

export default function PressPage() {
  const { press } = copy;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <header className={styles.hero}>
            <h1 className={styles.title}>{press.title}</h1>
            <p className={styles.subtitle}>{press.subtitle}</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.boilerplate.title}</h2>
            <p className={styles.boilerplateShort}>{press.boilerplate.short}</p>
            <p className={styles.body}>{press.boilerplate.long}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.facts.title}</h2>
            <dl className={styles.facts}>
              {press.facts.items.map((fact) => (
                <div className={styles.fact} key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>
                    {"href" in fact ? (
                      <a href={fact.href}>{fact.value}</a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.features.title}</h2>
            <ul className={styles.features}>
              {press.features.items.map((feature) => (
                <li className={styles.feature} key={feature.title}>
                  <IconPlaceholder
                    icon={feature.icon as IconName}
                    color={feature.color as IconColor}
                  />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.brand.title}</h2>
            <p className={styles.body}>{press.brand.voice}</p>
            <div className={styles.swatches}>
              {press.brand.colors.map((color) => (
                <div className={styles.swatch} key={color.hex}>
                  <span
                    className={styles.swatchColor}
                    style={{ background: color.hex }}
                    aria-hidden="true"
                  />
                  <div>
                    <div className={styles.swatchName}>{color.name}</div>
                    <div className={styles.swatchHex}>{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.assets.title}</h2>
            <div className={styles.assets}>
              {press.assets.items.map((asset) => (
                <div className={styles.asset} key={asset.file}>
                  <div
                    className={`${styles.assetThumb} ${asset.dark ? styles.assetThumbDark : ""}`}
                  >
                    <Image
                      src={asset.src}
                      alt={asset.label}
                      width={200}
                      height={140}
                      className={styles.assetImage}
                    />
                  </div>
                  <div className={styles.assetFooter}>
                    <span>{asset.label}</span>
                    <a href={asset.src} download={asset.file}>
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.founder.title}</h2>
            <div className={styles.founder}>
              <Image
                src={press.founder.photo}
                alt={press.founder.name}
                width={96}
                height={96}
                className={styles.founderPhoto}
              />
              <div>
                <div className={styles.founderName}>{press.founder.name}</div>
                <p className={styles.body}>{press.founder.body}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{press.contact.title}</h2>
            <p className={styles.body}>
              <a href={`mailto:${press.contact.email}`}>{press.contact.email}</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
