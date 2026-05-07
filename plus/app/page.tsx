import imagem from "../assets/img/hero.png";  
import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black w-full h-screen text-white flex flex-col justify-center items-center gap-6">
        
        <div className="flex flex-col justify-center items-center gap-6">
          <Image src={imagem} alt="imagem usada para tela" className="max-w-8/12" priority />
          <p className="font-bold text-2xl text-center max-w-[500px]">Sistema feito para você organizar seus estudos e terefas</p>
        </div>

        <div className="flex gap-7 justify-center items-center text-black font-semibold">
          <p className="bg-white w-40 h-10 text-center flex justify-center items-center rounded-2xl">+ 7mil posts</p>
          <p className="bg-white w-40 h-10 text-center flex justify-center items-center rounded-2xl">+ 1mil comentarios</p>
        </div>
      </div>
    </>
  );
}
