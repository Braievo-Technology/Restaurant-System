import React from 'react'
interface MenuCategoriesProps {
    activeCategory: string
    setActiveCategory: (category: string) => void
}
const MenuCategories: React.FC<MenuCategoriesProps> = ({
                                                           activeCategory,
                                                           setActiveCategory,
                                                       }) => {
    const categories = [
        'All Menu',
        'Salads',
        'Sandwiches',
        'Soups',
        'Beverages',
        'Desserts',
    ]
    return (
        <div className="w-full bg-[#0B1517] py-8 relative overflow-hidden">
            {/* Decorative Leaves Right */}
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
                <img
                    src="/Images/ourMenu/ourMenu-01.png"
                    alt=""
                    className="w-[200px] h-auto"
                />
            </div>
            {/* Top line */}
            <div className="w-full h-[1px] bg-[#68573A] mb-8" />
            {/* Categories */}
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex justify-start items-center gap-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-lg tracking-wider transition-colors duration-300 font-serif
                ${activeCategory === category ? 'text-[#C8A97E]' : 'text-white hover:text-[#C8A97E]'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            {/* Bottom line */}
            <div className="w-full h-[1px] bg-[#68573A] mt-8" />
        </div>
    )
}
export default MenuCategories
