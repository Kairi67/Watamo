import{useState}from'react';
const nav=['ホーム','車検・整備','新車・中古車販売','24時間カーレスキュー','自動車保険','会社概要','採用情報'];
const services=[['🔧','車検・整備','確かな技術で\n安心のカーライフを'],['🚙','新車・中古車販売','ぴったりの一台を\nご提案します'],['🚚','24時間カーレスキュー','もしもの時も\nすぐに駆けつけます'],['🛡️','自動車保険','万が一にも安心の\n保険プランをご提案']];
const cars=[['N-BOX','ホンダ','https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80'],['スペーシア','スズキ','https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80'],['ハリアー','トヨタ','https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80'],['ヤリス','トヨタ','https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80']];
const news=[['2024.06.10','お知らせ','夏季休業のお知らせ'],['2024.05.20','キャンペーン','オイル交換キャンペーン実施中！'],['2024.04.15','お知らせ','ゴールデンウィーク休業のお知らせ']];
const faq=['車検にはどのくらいの時間がかかりますか？','代車はありますか？','支払い方法は何がありますか？','自動車保険の相談もできますか？'];
function App(){const[open,setOpen]=useState(false);return <>
<header><a className="logo" href="#top"><b>W</b><strong>WATAMO</strong></a><nav className={open?'open':''}>{nav.map((n,i)=><a key={n} href={i===0?'#top':'#service'} onClick={()=>setOpen(false)}>{n}</a>)}</nav><a className="contactBtn" href="#contact">お問い合わせ</a><button className="menu" onClick={()=>setOpen(!open)}>☰</button></header>
<main id="top"><section className="hero"><div className="shade"/><div className="heroCopy"><h1>クルマのこと、<br/>すべてワタモに。</h1><p>販売・整備・保険・ロードサービスまで<br/>カーライフをトータルでサポートします。</p></div></section>
<section id="service" className="serviceStrip">{services.map(([ic,t,d])=><article key={t}><span>{ic}</span><h3>{t}</h3><p>{d}</p><b>→</b></article>)}</section>
<section className="about"><div className="aboutImg"/><div><small>ABOUT</small><h2>地域のカーライフを<br/>支え続けて。</h2><p>ワタモは、販売・整備・保険・ロードサービスを通じて、地域の皆さまのカーライフをトータルでサポートする総合カーサポート企業です。</p><a className="outline" href="#">会社概要を見る　→</a></div></section>
<section className="lineup"><div className="title"><div><small>CAR LINEUP</small><h2>新車・中古車ラインナップ</h2></div><a href="#">一覧を見る　→</a></div><div className="cars">{cars.map(([n,m,img])=><article key={n}><img src={img} alt={n}/><h3>{n}</h3><p>{m}</p><a className="outline" href="#">詳細を見る　→</a></article>)}</div></section>
<section className="news"><div className="newsHead"><small>NEWS</small><h2>お知らせ</h2><a className="outline light" href="#">一覧を見る　→</a></div><div>{news.map(([d,c,t])=><a className="newsRow" key={d+t} href="#"><time>{d}</time><em>{c}</em><span>{t}</span><b>→</b></a>)}</div></section>
<section className="faq"><div className="title"><div><small>FAQ</small><h2>よくあるご質問</h2></div><a href="#">よくあるご質問一覧　→</a></div><div className="faqGrid">{faq.map(q=><details key={q}><summary>{q}</summary><p>詳しくはお気軽にお問い合わせください。スタッフが分かりやすくご案内いたします。</p></details>)}</div></section>
<section id="contact" className="cta"><div><small>CONTACT</small><h2>お問い合わせ</h2><p>車のことなら、どんなことでもお気軽にご相談ください。<br/>スタッフが丁寧に対応いたします。</p><a href="#" className="redBtn">✉　お問い合わせフォーム　→</a></div></section>
</main><footer><div className="logo foot"><b>W</b><strong>WATAMO</strong></div><p>〒781-0014 高知県高知市薊野南町12-35</p><span>© WATAMO. All Rights Reserved.</span></footer>
</>};export default App;
