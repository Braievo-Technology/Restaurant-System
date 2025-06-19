"use client";
import React, { useState } from 'react'
import MenuCategories from "@/app/components/ourMenu/MenuCategories";
import MenuHero from "@/app/components/ourMenu/MenuHero";
import MenuSection from "@/app/components/ourMenu/MenuSection";
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All Menu')
    return (
        <div className="w-full min-h-screen bg-[#0B1517] text-white">
            <MenuHero />
            <MenuCategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <MenuSection category={activeCategory} />
        </div>
    )
}
export default Menu
