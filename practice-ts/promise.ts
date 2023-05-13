// 비동기 타입 스크립트
// Promise타입을 이용하여 진행한다.
// Promise타입은 제네릭이므로 반환받을값의 타입을 제네릭으로 넘겨준다.

import axios from "axios";
import { promises } from "dns";

interface IResponse {
  count: number;
  categories: string[];
}

const api = async () => {
  const data: Promise<IResponse> = await axios
    .get("https://api.publicapis.org/categories")
    .then((res) => res.data)
    .catch((e) => console.log(e));

  console.log((await data).categories);
};
api();

const api2 = async () => {
  const data: Promise<IResponse>[] = await Promise.all([
    axios
      .get("https://api.publicapis.org/categories")
      .then((res) => res.data.count)
      .catch((e) => console.log(e)),
    axios
      .get("https://api.publicapis.org/categories")
      .then((res) => res.data.count)
      .catch((e) => console.log(e)),
    axios
      .get("https://api.publicapis.org/categories")
      .then((res) => res.data.count)
      .catch((e) => console.log(e)),
  ]);
  console.log(data)
};
api2()