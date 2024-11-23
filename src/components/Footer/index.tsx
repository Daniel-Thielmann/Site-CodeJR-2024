import Image from "next/image";

export default function Footer() {
  return (
    <div className=" bg-white min-h-[200px] flex bp-840:flex-row flex-col gap-4 justify-between items-center pl-8 pr-8 lg:pl-16 lg:pr-16 lg:text-2xl text-xl texto-base">
      {/* Logo com hover */}
      <Image
        className="mt-4 bp-840:mt-[unset] hover:scale-105 transition-transform duration-300"
        src={"/logo.png"}
        alt="logo"
        width={280}
        height={102}
      />
      <div className="flex flex-col justify-center items-center h-max bp-840:self-end gap-2 bp-840:-order-none order-1">
        <p className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
          © 2024 Code Júnior
        </p>
        <Image
          className="hover:scale-105 transition-transform duration-300"
          src={"/macacode.png"}
          alt="logo"
          width={100}
          height={74}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
          Fale Conosco
        </p>
        <div className="flex h-[48px] gap-3">
          <a
            href="https://www.facebook.com/codeempresajunior"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Hover para ícones */}
            <Image
              className="hover:scale-110 hover:opacity-80 transition-all duration-300"
              src={"/redes/fb.svg"}
              alt="Facebook"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.instagram.com/codejr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-110 hover:opacity-80 transition-all duration-300"
              src={"/redes/ig.svg"}
              alt="Instagram"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/codejr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-110 hover:opacity-80 transition-all duration-300"
              src={"/redes/ln.svg"}
              alt="LinkedIn"
              width={48}
              height={48}
            />
          </a>
          <a href="https://wa.me/5524999114310">
            <Image
              className="hover:scale-110 hover:opacity-80 transition-all duration-300"
              src={"/redes/phone.svg"}
              alt="Phone"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
