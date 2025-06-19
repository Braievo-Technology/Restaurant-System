import Card from "../maincomponents/Card";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface FoodCategoriesProps {
  dataId?: string;
}

const FoodCategories: React.FC<FoodCategoriesProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen text-white py-16 px-4 relative overflow-hidden flex flex-col"
    >
      {/* Title Section fixed at the top */}
      <div className="text-center mt-[128px] mb-16">
        <SectionTitle title="Restar A Culinary Oasis For Those Who Seek The Extraordinary" />
      </div>

      {/* Cards section centered vertically and horizontally */}
      <div className="flex-1 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            image="/images/FoodCategory1.png"
            title="Breakfast Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory2.png"
            title="Lunch Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory3.png"
            title="Dinner Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
          <Card
            image="/images/FoodCategory4.png"
            title="Desert Foods"
            description="From crispy and golden fries to mouthwatering burgers and wraps, our menu offers"
            buttonText="View Menus"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
