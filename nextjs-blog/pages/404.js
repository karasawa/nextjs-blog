import Head from "next/head";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={utilStyles.bgConfig}>
      <Head>
        <title>404 page not found</title>
      </Head>
      <h1 className={utilStyles.rmMargin}>ページが見つかりませんでした。</h1>
      <button onClick={() => router.back()}>← 前のページへ戻る</button>
    </div>
  );
}
