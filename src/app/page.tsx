import HeroSectionI from "@/components/HeroSectionI";
import HomeSectionIII from "@/components/HomeSectionIII";
import HeroSectionII from "@/components/HeroSectionII";
import HeroSectionIV from "@/components/HeroSectionIV";

export default function Home() {
  return (
    <div className="bg-gradiente-home">
      <HeroSectionI />
      <HeroSectionII />
      <HomeSectionIII />
      <HeroSectionIV />
    </div>
  );
}
