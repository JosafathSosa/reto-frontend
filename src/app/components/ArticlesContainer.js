import { Article } from "../components/Article";
import pc from "../../../public/assets/images/image-retro-pcs.jpg";
import laptops from "../../../public/assets/images/image-top-laptops.jpg";
import growth from "../../../public/assets/images/image-gaming-growth.jpg";

export const ArticlesContainer = () => {
  return (
    <section className="mt-[60px] md:flex md:flex-wrap md:gap-10">
      <Article
        image={pc}
        numero="01"
        title="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
      />
      <Article
        image={laptops}
        numero="02"
        title="Top 10 Laptops of 2022"
        text=" Our best picks for various needs and budgets."
      />
      <Article
        image={growth}
        numero="03"
        title="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities.
"
      />
    </section>
  );
};
