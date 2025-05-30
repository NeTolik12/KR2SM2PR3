export function Footer(){
    return (
        <footer className="bg-[var(--color-header-footer-bg)] text-black py-4 mt-10">
            <div className="container mx-auto px4 flex justify-between items-center text-sm">
                <span> by Sh1VeN_, MCKlimovich, Разработчик © {new Date().getFullYear()}</span>
                <a
                    href="https://github.com/NeTolik12/KR2SM2PR3.git"
                    className=""
                >
                Repository
                </a>
            </div>
        </footer>
    )
}