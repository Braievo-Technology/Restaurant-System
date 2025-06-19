import React from 'react'
const MenuHero = () => {
    return (
        <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src="/Images/ourMenu/ourMenuHero.png"
                    alt="Elegant food spread"
                    className="w-full h-full object-cover opacity-75"
                />
            </div>
            <div className="relative z-10 text-center bg-black/30 px-8 py-6 rounded-lg">
                <h1 className="text-6xl md:text-8xl font-light tracking-wider text-white">
                    Our Menu
                </h1>
            </div>
        </div>
    )
}
export default MenuHero
