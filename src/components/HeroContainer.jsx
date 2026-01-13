export default function HeroContainer({ locatedAt, children }) {
    return (
        <section
            className={`${
                locatedAt === "home"
                    ? "bg-[url('/src/assets/images/home-hero.png')]"
                    : "bg-[url('/src/assets/images/about-hero.png')]"
            } bg-no-repeat bg-center bg-cover`}
        >
            <div className="bg-black/35 h-full py-24 min-h-[50vh]">
                <div className="wrapper">{children}</div>
            </div>
        </section>
    );
}
