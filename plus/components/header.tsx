"use client";

import { useState } from "react";
import "./header.css";

export default function Header(){

    const [user, setUser] = useState(false);


    return(
        <header className="items-center w-full flex justify-between bg-black h-20">
            <div className="text-white flex items-center">
                <h1 className="text-2xl font-bold">Tarefas</h1><p className="font-bold text-xl text-green-400">+</p>
            </div>

            {
                user ? (
                    <div className="rounded-2xl border-2 h-10 w-40 border-white flex justify-center items-center text-white font-bold"
                    onClick={(e) => {e.preventDefault(); setUser(false)}}>
                        <p className="cursor-pointer">Ola user</p>
                    </div>    
                ) : (
                    <div className="rounded-2xl border-2 h-10 w-40 border-white flex justify-center items-center text-white font-bold"
                    onClick={(e) => {e.preventDefault(); setUser(true)}}>
                        <p className="cursor-pointer">Minha conta</p>
                    </div>
                )
            }
            
        </header>
    )
}