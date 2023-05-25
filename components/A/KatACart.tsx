import Image from "next/image";
import { FC } from "react";

interface katACartProps {}
const Card = ({ title, children, imgSrc }: any) => (
  <div
    className="w-[90%] max-w-md rounded-xl overflow-hidden md:max-w-2xl m-4 transform hover:scale-105 transition-transform duration-200 ease-in-out"
    style={{
      boxShadow: "0px 0px 10px 0px #393e46",
    }}
  >
    <div className="md:flex">
      <div className="hidden md:flex-shrink-0 h-48 items-center justify-center my-auto md:h-3/4 md:w-48 max-h-[340px] ">
        <img
          className=" w-[90%] h-full object-cover  rounded-md"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="p-8">
        <h2 className="uppercase tracking-wide text-xl text-red-500 font-semibold ">
          {title}
        </h2>
        <div className="mt-2 text-gray-500">{children}</div>
      </div>
    </div>
  </div>
);
const KatACart: FC<katACartProps> = ({}) => {
  return (
    <div className="font-sans ring-1 ring-grey-400 p-2 m-1 sm:m-7  rounded-3xl text-gray-900 antialiased bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-4">Kategoria A</h1>
      <div className="lg:flex w-full h-full">
        <div className=" w-full lg:w-1/2 flex flex-col ">
          <Image
            width={500}
            height={300}
            className=" w-3/4 h-52 mx-auto object-cover  rounded-md"
            src="/mt07-katA.png"
            alt="/mt07-katA.png"
          />
          <div className="sm:ml-20 mt-10 text-xl  uppercase tracking-wide  text-red-600 font-semibold ">
            <del className="text-black">2600 zł</del>
            {"  "} Cena wakacyjna 2200 zł
            <br />
            (pierwsze 10 osób)
          </div>
          <div className="sm:ml-20 mt-10 text-xl  uppercase tracking-wide  text-black font-semibold ">
            W cenie kursu wliczone są:
          </div>
          <div className="sm:ml-20 mt-2   ">
            <ul className="list-disc pl-5 mb-4 text-gray-500 ">
              <li className="">Materiały szkoleniowe</li>
              <li>Teoria 30h</li>
              <li>Praktyka 30h</li>
              <li>Egzamin wewnętrzny teoretyczny i praktyczny</li>
              <li>
                Szkolenie z zakresu pierwszej pomocy z możliwością praktyk
              </li>
              <li>Konsultacje z instruktorem - wykładowcą</li>
              <li>Ubezpieczenie NNW</li>
              <li className="font-bold">Jazdy dodatkowe 1h/80 zł</li>
              <li className="font-bold">Jazdy dodatkowe pakiet 10h/700 zł</li>
            </ul>
          </div>
          <div className="sm:ml-20 mt-10 text-xl  uppercase tracking-wide text-start  text-black font-semibold ">
            Raty:
          </div>
          <div className="sm:ml-20 mt-2   ">
            <ul className="list-disc pl-5 mb-4  text-gray-500 ">
              <li>
                Raty 0% - przez czas trwania kursu I rata - 500 zł przed
                rozpoczęciem
              </li>
              <li>
                {" "}
                zajęć teoretycznych, II rata - 500 zł przed rozpoczęciem zajęć
              </li>
              <li>
                praktycznych III rata - 500 zł po wyjeżdżeniu 10 godzin zajęć
              </li>
              <li>
                {" "}
                praktycznych IV rata - 500 zł po wyjeżdżeniu 20 godzin zajęć
                praktycznych
              </li>
            </ul>
          </div>
        </div>
        <div className="container lg:w-1/2  w-full mx-auto p-6">
          <Card title="To oferujemy:" imgSrc="/logo2.png">
            <ul className="list-disc pl-5 mb-4">
              <li>
                <span className="font-semibold">Yamaha MT07</span> to motocykl o
                wyjątkowo dynamicznych osiągach, co pozwala na płynne i
                bezpieczne przemieszczanie się po drodze. Dodatkowo, jego
                konstrukcja i właściwości jezdne sprawiają, że jest to motocykl
                łatwy w prowadzeniu i dostosowaniu do indywidualnych potrzeb
                kierowcy.
              </li>
              <li>
                Asfaltowy, oświetlony plac manewrowy, największy w Bydgoszczy!
              </li>
              <li>
                Skuteczne metody szkolenia opracowane przez instruktorów i
                pedagogów potwierdzone wysoką zdawalnością egzaminów
              </li>
              <li>
                Możliwość wyboru dogodnych godzin jazd szkoleniowych (jazdy
                prowadzone są także w soboty, niedziele oraz w godzinach
                wieczornych)
              </li>
              {/* <li>
                Jazdy zaczynamy i kończymy w dogodnym miejscu - przy rondzie
                fordońskim (węzeł komunikacyjny)
              </li> */}
            </ul>
          </Card>

          <Card title="Badanie lekarskie:" imgSrc="/badania-lekarskie.jpg">
            <p className="mb-4">
              Cena kursu nie obejmuje badania lekarskiego. Istnieje możliwość
              wykonania takiego badania w naszym OSK. W celu wyznaczenia terminu
              badania oraz umówienia wizyty w naszym ośrodku prosimy o kontakt
              telefoniczny z naszym biurem. Koszt badania lekarskiego dla osób,
              które zapiszą się na
            </p>
            <p>
              Opłata za badanie przyjmowana jest przez lekarza w formie gotówki
              lub karty płatniczej.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KatACart;