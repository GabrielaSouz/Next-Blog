import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "../Assets/assets";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {

  const [email, setEmail] = useState("");
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("email",email);
    
    const response = await axios.post('/api/email',formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
       <Link href='/'>
        <Image src={assets.logo} alt="" width={180} />
        </Link>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
          <FaArrowRight />
        </button>
        </div>
        <div className="text-center my-8 flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
            <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quisquam nulla porro provident fugiat, odit alias iure corporis natus quas nesciunt est sunt! Sunt, obcaecati officiis consectetur error aliquid molestias!</p>
        <form onSubmit={onSubmitHandler} action="" className="flex justify-between max-w-[500px] scale-75 sm:scale-100 border border-black shadow-[-7px_7px_0px_#000000]">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" className="pl-4 outline-none"/>
            <button type="submit" className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white cursor-pointer">Subscribe</button>
        </form>
        
        </div>
    </div>
  );
};

export default Header;
