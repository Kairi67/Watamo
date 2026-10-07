export const company = {
  name: "株式会社渡辺モータース商会",
  shortName: "WATAMO",
  phone: "054-393-2129",
  postal: "424-0305",
  address: "静岡県静岡市清水区小島町59-1",
  hours: "8:30-19:00",
  closed: "日曜日・祝日",
};

export const navItems = [
  { label: "ホーム", href: "/" },
  { label: "車検・整備", href: "/maintenance" },
  { label: "新車・中古車販売", href: "/cars" },
  { label: "24時間カーレスキュー", href: "/rescue" },
  { label: "自動車保険", href: "/insurance" },
  { label: "会社概要", href: "/company" },
  { label: "採用情報", href: "/recruit" },
];

export const services = [
  {
    slug: "maintenance",
    number: "01",
    title: "車検・点検・重整備",
    shortTitle: "車検・整備",
    lead: "64年間培った整備技術で、安心を届けます。",
    description:
      "お客様のニーズに合った車検・予防整備・アフターカーライフまで、親切・丁寧にサポートします。",
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f4?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "cars",
    number: "02",
    title: "新車・中古車購入",
    shortTitle: "新車・中古車販売",
    lead: "ほしい一台を、納得できる買い方で。",
    description:
      "新車から中古車まで幅広く取り扱い、お客様の暮らしや予算に合ったカーライフをご提案します。",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "rescue",
    number: "03",
    title: "24時間カーレスキュー",
    shortTitle: "24時間カーレスキュー",
    lead: "365日24時間、もしもの時に駆けつけます。",
    description:
      "JAF指定工場・全保険会社対応。車のトラブルに迅速に対応し、不安を安心へ変えます。",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "insurance",
    number: "04",
    title: "自動車保険",
    shortTitle: "自動車保険",
    lead: "クルマの“万が一”まで、ワタモに。",
    description:
      "自動車保険をはじめ、火災・傷害・賠償・生命保険まで、暮らしに合う補償をご提案します。",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
  },
] as const;

export const faqs = [
  {
    q: "他店で買った車も、車検や点検を受けられますか？",
    a: "もちろんです。他店やオークションなどで購入されたお車も、車検・点検・整備を承ります。",
  },
  {
    q: "どこのメーカー・車種でも取り扱っていますか？",
    a: "国産車から輸入車まで幅広く対応しています。販売・メンテナンスともにお気軽にご相談ください。",
  },
  {
    q: "リースとローンの違いは何ですか？",
    a: "リースは車両を借りて月々利用料を支払う仕組み、ローンは購入資金を借りて返済する仕組みです。用途や希望に合わせてご案内します。",
  },
  {
    q: "指定整備工場とは何ですか？",
    a: "一定の設備・技術・管理体制などの基準を満たし、地方運輸局長から指定を受けた整備工場です。",
  },
];