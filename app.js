const data = [
  {
    fromStation: "勝田",
    toStation: "水戸",
    e531: [105, 105, 125, 90],
    e657: [125, 125, 130, 95],
    note: "",
    image: "勝田水戸１.jpg"
  },
  {
    fromStation: "水戸",
    toStation: "赤塚",
    e531: [105, 90, 105],
    e657: [125, 100, 125, 130],
    note: "",
    image: "水戸赤塚１.jpg"
  },
  {
    fromStation: "赤塚",
    toStation: "内原",
    e531: [125, 105],
    e657: [125, 125, 120],
    note: "",
    image: "赤塚内原１.jpg"
  },
  {
    fromStation: "内原",
    toStation: "友部",
    e531: [105, 110, 110],
    e657: [125, 130, 130],
    note: "",
    image: "内原友部１.jpg"
  },
  {
    fromStation: "友部",
    toStation: "岩間",
    e531: [80, 95, 115, 105, 90],
    e657: [80, 95, 130, 115, 100],
    note: "",
    image: "友部岩間１.jpg"
  },
  {
    fromStation: "岩間",
    toStation: "羽鳥",
    e531: [95, 100],
    e657: [110, 100],
    note: "",
    image: "岩間羽鳥 1.jpg"
  },
  {
    fromStation: "羽鳥",
    toStation: "石岡",
    e531: [105, 105, 100],
    e657: [125, 125, 110],
    note: "",
    image: "羽鳥石岡 1.jpg"
  },
  {
    fromStation: "石岡",
    toStation: "高浜",
    e531: [105, 105, 100],
    e657: [105, 125, 120],
    note: "",
    image: "石岡高浜 1.jpg"
  },
  {
    fromStation: "高浜",
    toStation: "神立",
    e531: [95, 110],
    e657: [110, 130],
    note: "",
    image: "高浜神立 1.jpg"
  },
  {
    fromStation: "神立",
    toStation: "土浦",
    e531: [125, 95, 105, 115, 100],
    e657: [130, 110, 125, 115, 100],
    note: "",
    image: "神立土浦 1.jpg"
  },
  {
    fromStation: "土浦",
    toStation: "荒川沖",
    e531: [95, 100, 95, 105, 115],
    e657: [105, 120, 110, 125, 130],
    note: "",
    image: "土浦荒川沖1.jpg"
  },
  {
    fromStation: "荒川沖",
    toStation: "ひたち野うしく",
    e531: [110],
    e657: [120],
    note: "",
    image: "荒川沖ひたち野うしく1.jpg"
  },
  {
    fromStation: "ひたち野うしく",
    toStation: "牛久",
    e531: [110],
    e657: [130],
    note: "",
    image: "ひたちのうしく牛久 1.jpg"
  },
  {
    fromStation: "牛久",
    toStation: "龍ヶ崎市",
    e531: [110, 100],
    e657: [125, 105],
    note: "",
    image: "牛久龍ヶ崎市 1.jpg"
  },
  {
    fromStation: "龍ヶ崎市",
    toStation: "藤代",
    e531: [90, 110, 90],
    e657: [100, 130, 100],
    note: "",
    image: "龍ヶ崎市藤代 1.jpg"
  },
  {
    fromStation: "藤代",
    toStation: "取手",
    e531: [115, 115, 95, 80],
    e657: [130, 130, 105, 90],
    note: "",
    image: "藤代取手 1.jpg"
  },
  {
    fromStation: "取手",
    toStation: "天王台",
    e531: [95],
    e657: [110],
    note: "",
    image: "取手天王台 1.jpg"
  },
  {
    fromStation: "天王台",
    toStation: "我孫子",
    e531: [],
    e657: [],
    note: "",
    image: "天王台我孫子 1.jpg"
  },
  {
    fromStation: "我孫子",
    toStation: "柏",
    e531: [105, 95],
    e657: [125, 95],
    note: "",
    image: "我孫子柏 1.jpg"
  },
  {
    fromStation: "柏",
    toStation: "松戸",
    e531: [120, 105, 105],
    e657: [130, 125, 125],
    note: "",
    image: "柏松戸 1.jpg"
  },
  {
    fromStation: "松戸",
    toStation: "北千住",
    e531: [105, 105, 110, 90, 95, 105, 105, 90, 95, 115, 105],
    e657: [125, 125, 120, 90, 110, 120, 125, 100, 110, 115, 105],
    note: "",
    image: "松戸北千住 1.jpg"
  },
  {
    fromStation: "北千住",
    toStation: "南千住",
    e531: [105, 105],
    e657: [105, 105],
    note: "",
    image: "北千住南千住 1.jpg"
  },
  {
    fromStation: "南千住",
    toStation: "三河島",
    e531: [70, 95],
    e657: [70, 95],
    note: "",
    image: "南千住三河島 1.jpg"
  },
  {
    fromStation: "三河島",
    toStation: "日暮里",
    e531: [80, 65, 85],
    e657: [80, 65, 85],
    note: "",
    image: "三河島日暮里 1.jpg"
  },
  {
    fromStation: "日暮里",
    toStation: "上野",
    e531: [70, 55, 50],
    e657: [70, 55, 50],
    note: "未確定の続きがあればあとで修正",
    image: "日暮里上野 1.jpg"
  }
];

let currentIndex = 0;

function formatList(arr) {
  if (!arr || arr.length === 0) return "-";
  return arr.join(" → ");
}

function showQuestion() {
  if (!data || data.length === 0) {
    document.getElementById("segment-name").innerText = "区間";
    document.getElementById("counter").innerText = "0 / 0";
    document.getElementById("question").innerText = "問題がありません";
    document.getElementById("answer").style.display = "none";
    document.getElementById("status").innerText = "データなし";
    return;
  }

  const segment = data[currentIndex];

  document.getElementById("status").innerText = "読み込み完了";
  document.getElementById("segment-name").innerText =
    `${segment.fromStation} → ${segment.toStation}`;
  document.getElementById("counter").innerText =
    `${currentIndex + 1} / ${data.length}`;
  document.getElementById("question").innerText =
    `${segment.fromStation} → ${segment.toStation} の区間の制限速度は？`;

  document.getElementById("answer").style.display = "none";
  document.getElementById("answer").innerHTML = "";
}

function showAnswer() {
  const segment = data[currentIndex];
  const e531 = formatList(segment.e531);
  const e657 = formatList(segment.e657);
  const note = segment.note && segment.note.trim() !== "" ? segment.note : "-";

  let html = `
    <div><strong>E531：</strong>${e531}</div>
    <div><strong>E657：</strong>${e657}</div>
    <div><strong>付記：</strong>${note}</div>
  `;

  if (segment.image) {
   html += `<img src="${encodeURI(segment.image)}" alt="${segment.fromStation}→${segment.toStation}" style="width:100%; margin-top:16px; border-radius:12px;">`;
  }

  document.getElementById("answer").innerHTML = html;
  document.getElementById("answer").style.display = "block";
}

function nextQuestion() {
  if (currentIndex < data.length - 1) {
    currentIndex++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showQuestion();
});
