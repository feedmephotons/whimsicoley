import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "jewelry" | "suncatchers" | "home-decor" | "seasonal";
  image: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group">
      <div className="card overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <span className="text-gold-light/70 text-xs uppercase tracking-wider">
            {product.category.replace("-", " ")}
          </span>
          <h3 className="text-cream font-semibold mt-1 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-cream-muted text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-gold font-bold">${product.price}</span>
            <span className="text-cream-muted text-sm group-hover:text-gold transition-colors">
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
