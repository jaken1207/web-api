// データの送信・更新・削除はpostmanを使用する
const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, console.log("サーバーが開始されました"));

app.get("/", (req, res) => {
  res.send("プログラミング");
});

//お客様情報
const customers = [
  { title: "田中", id: 1 },
  { title: "斎藤", id: 2 },
  { title: "中村", id: 3 },
  { title: "鈴木", id: 4 },
  { title: "川野", id: 5 },
];

//データを取得できるようにする(GETメソッド)
app.get("/api/customers", (req, res) => {
  res.send(customers);
});
app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  res.send(customer);
});

//データを送信（作成）できるようにする（POSTメソッド）
app.post("/api/customers", (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customers);
});

//データを更新できるようにする(PUTメソッド)
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
});

//データを削除できるようにする(DELETEメソッド)
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  const index = customers.indexOf(customer);
  customers.splice(index, 1);

  res.send(customer);
});
