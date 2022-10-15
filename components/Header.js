import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import Home from "../pages"

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem Icon={HomeIcon} title="HOME" />
                <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
                <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
                <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
                <HeaderItem Icon={SearchIcon} title="SEARCH" />
                <HeaderItem Icon={UserIcon} title="ACCOUNT" />
            </div>
            <Image
                className="object-container"
                src="https://links.papareact.com/ua6"
                width={170}
                height={90}
            />
        </header>
    )
}