import { HiFunnel, HiArrowsUpDown, HiMapPin, HiTag, HiGlobeAsiaAustralia } from "react-icons/hi2";

export default function RouteFilter() {
    return (
        <div className={'w-full bg-background-1 p-6'}>
            <div className={'flex flex-col gap-6'}>
                {/* 検索・フィルターセクション */}
                <div className={'flex flex-wrap gap-6 items-end'}>
                    {/* 地名検索 */}
                    <div className={'flex flex-col gap-2'}>
                        <label className={'text-xs font-semibold text-foreground-1/60 flex items-center gap-1'}>
                            <HiMapPin className={'w-3 h-3'} /> Location
                        </label>
                        <div className={'relative w-full md:w-48'}>
                            <input
                                type="text"
                                placeholder="Search by area..."
                                className={'w-full px-3 py-2 bg-background-0 border border-grass/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grass/20 transition-all'}
                            />
                        </div>
                    </div>

                    {/* カテゴリ */}
                    <div className={'flex flex-col gap-2'}>
                        <label className={'text-xs font-semibold text-foreground-1/60 flex items-center gap-1'}>
                            <HiTag className={'w-3 h-3'} /> Category
                        </label>
                        <select className={'bg-background-0 border border-grass/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-grass/20 min-w-[140px]'}>
                            <option value="">All Categories</option>
                            <option value="history">History</option>
                            <option value="beach">Beach</option>
                            <option value="food">Food</option>
                            <option value="city">City</option>
                            <option value="nature">Nature</option>
                        </select>
                    </div>

                    {/* 距離入力 */}
                    <div className={'flex flex-col gap-2'}>
                        <label className={'text-xs font-semibold text-foreground-1/60'}>Max Distance (km)</label>
                        <div className={'flex items-center gap-2'}>
                            <input
                                type="number"
                                placeholder="0"
                                className={'w-20 px-3 py-2 bg-background-0 border border-grass/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grass/20'}
                            />
                            <span className={'text-xs text-foreground-1/40 font-medium'}>km</span>
                        </div>
                    </div>

                    {/* 居住地・国フィルター */}
                    <div className={'flex flex-col gap-2'}>
                        <label className={'text-xs font-semibold text-foreground-1/60 flex items-center gap-1'}>
                            <HiGlobeAsiaAustralia className={'w-3 h-3'} /> Resident Area
                        </label>
                        <select className={'bg-background-0 border border-grass/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-grass/20'}>
                            <option value="all">All Users</option>
                            <option value="my-area">My Region</option>
                            <option value="my-country">My Country</option>
                        </select>
                    </div>

                    {/* 並べ替え */}
                    <div className={'flex flex-col gap-2 ml-auto'}>
                        <label className={'text-xs font-semibold text-foreground-1/60 flex items-center gap-1'}>
                            <HiArrowsUpDown className={'w-3 h-3'} /> Sort by
                        </label>
                        <select className={'bg-background-0 border border-grass/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-grass/20 min-w-[140px]'}>
                            <option value="likes">Most Liked</option>
                            <option value="views">Most Viewed</option>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
