import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/users ">users</Link>
      <ProductCart/>
    </main>
  );
}
