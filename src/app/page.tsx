import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
   <div className="">
    Hello World
   </div>
    <Button size={"lg"} ><Link href="/editor">open Editor</Link></Button>
    </>

  );
}
