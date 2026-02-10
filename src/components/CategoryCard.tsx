import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-lg aspect-[3/4] hover-lift"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-sm opacity-90 mb-4">{description}</p>
        )}
        <div className="flex items-center text-sm font-medium group-hover:text-accent transition-colors">
          <span>Explore Collection</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
