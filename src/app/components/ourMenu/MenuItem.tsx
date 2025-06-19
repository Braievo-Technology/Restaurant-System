import React from 'react'
interface MenuItemProps {
    name: string
    description: string
    price: string
    image?: string
}
const MenuItem: React.FC<MenuItemProps> = ({
                                               name,
                                               description,
                                               price,
                                               image,
                                           }) => {
    return (
        <div
            className="bg-[#112225] rounded-tl-[100px] rounded-br-[100px] w-full h-[390px] flex flex-col items-center justify-between pt-28 pb-20 px-6 text-center relative transition-all duration-300 ease-in-out hover:bg-[#1E2F33] hover:shadow-2xl hover:scale-[1.02]"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
        >
            {/* Circular top image */}
            <div className="absolute -top-24 flex justify-center w-full">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="rounded-full w-[220px] h-[220px] object-cover"
                    />
                )}
            </div>

            {/* Title & Description */}
            <div className="mt-[26px]">
                <h3
                    className="text-white text-[24px] mb-2"
                    style={{
                        fontFamily: 'serif',
                    }}
                >
                    {name}
                </h3>
                <p className="text-gray-300 text-[14px] leading-relaxed px-2">
                    {description}
                </p>
            </div>

            {/* Price Button */}
            <div className="mt-4">
                <button className="bg-[#68573A] hover:bg-[#7A6544] text-white px-6 py-2 rounded-full transition-colors duration-300">
                    {price}
                </button>
            </div>
        </div>
    )
}
export default MenuItem
