import Link from "next/link";

export default function AboutBlock() {
  return (
    <section className="aboutBlock">
      <div className="aboutPhoto" />
      <div className="aboutCopy">
        <p className="eyebrow">ABOUT WATAMO</p>
        <h2>地域のカーライフを<br />支え続けて。</h2>
        <p>
          渡辺モータース商会は1956年創立。点検・整備・車検はもちろん、
          新車・中古車販売、保険、ロードサービスまで、
          お客様のカーライフを幅広く支えています。
        </p>
        <ul className="checkList">
          <li>新車・中古車の販売に対応</li>
          <li>指定整備工場として安心のメンテナンス</li>
          <li>365日24時間のロードサービス体制</li>
        </ul>
        <Link className="button buttonOutline" href="/company">会社概要を見る</Link>
      </div>
    </section>
  );
}