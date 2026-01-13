import {Map} from "react-map-gl/mapbox-legacy";
import RouteList from "@/app/_components/page/ingredients/routeList";

export default function MapViewer() {
    return (
        <div className={'w-full max-w-[1200px] h-[600px] rounded-2xl overflow-hidden relative'}>
            {/*まだマップのシークレットがないので一旦コメントアウトし、ダミーとして画像を表示*/}
            {/*<Map*/}
            {/*    initialViewState={{*/}
            {/*        latitude: 35.6804,*/}
            {/*        longitude: 139.7690,*/}
            {/*        zoom: 12,*/}
            {/*    }}*/}
            {/*    mapStyle="mapbox://styles/mapbox/streets-v12"*/}
            {/*    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}*/}
            {/*    style={{ width: "100%", height: "100%" }}*/}
            {/*/>*/}
            <div className={'w-full h-full bg-background-1'}>
                <img src={'/map.png'} alt={'map'} className={'w-full h-full object-cover'}/>
            </div>
            <RouteList/>
        </div>
    )
}
