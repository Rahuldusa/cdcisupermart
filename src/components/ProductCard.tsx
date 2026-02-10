interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price?: string;
}

const ProductCard = ({ image, title, category, price }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
        <h3 className="font-medium text-sm md:text-base group-hover:text-accent transition-colors">
          {title}
        </h3>
        {price && (
          <p className="text-sm font-semibold text-accent">{price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
