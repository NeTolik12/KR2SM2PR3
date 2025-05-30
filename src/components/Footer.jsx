export function Footer(){
    return (
        <footer className="bg-[var(--color-header-footer-bg)] text-black py-4 mt-10">
            <div className="container mx-auto px4 flex justify-between items-center text-sm">
                <span>Sh1VeN_ © {new Date().getFullYear()}</span>
                <a
                    href="https://github.com/NeTolik12/KR2_SM2_PR3_V2"
                    className=""
                >
                Repository
                </a>
            </div>
        </footer>
    )
}