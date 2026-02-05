import RouteCardBasic from "@/app/_components/common/templates/routeCardBasic";
import {Route, User} from "@/lib/client/types";

const mockUser: User = {
    id: 'u1',
    name: 'taro',
    likesThisWeek: 100,
    viewsThisWeek: 1000,
    profileImage: '/Routem_Mock/mockImages/userIcon_1.jpg'
};

const mockTopRoutes: Route[] = [
    { id: 'r1', title: 'Kyoto Old Town Walk', user: mockUser, likesThisWeek: 1280, viewsThisWeek: 18200, category: 'History', thumbnailImageSrc: '/Routem_Mock/mockImages/Kyoto.jpg' },
    { id: 'r2', title: 'Okinawa Beach Hopping', user: mockUser, likesThisWeek: 990, viewsThisWeek: 15420, category: 'Beach', thumbnailImageSrc: '/Routem_Mock/mockImages/Okinawa.jpg' },
    { id: 'r3', title: 'Hokkaido Food Trip', user: mockUser, likesThisWeek: 1570, viewsThisWeek: 21030, category: 'Food', thumbnailImageSrc: '/Routem_Mock/mockImages/Hokkaido.jpg' },
    { id: 'r4', title: 'Tokyo Night Lights', user: mockUser, likesThisWeek: 870, viewsThisWeek: 16800, category: 'City', thumbnailImageSrc: '/Routem_Mock/mockImages/Tokyo.jpg' },
    { id: 'r5', title: 'Nara Temple Circuit', user: mockUser, likesThisWeek: 1430, viewsThisWeek: 19990, category: 'Culture', thumbnailImageSrc: '/Routem_Mock/mockImages/Nara.jpg' },
    { id: 'r6', title: 'Mount Fuji Scenic Drive', user: mockUser, likesThisWeek: 760, viewsThisWeek: 14550, category: 'Nature', thumbnailImageSrc: '/Routem_Mock/mockImages/Fuji.jpg' },
]

export default function RecommendedArticlesList() {
  return (
      <div className={'w-full h-fit flex flex-col gap-3'}>
          <h2 className="text-sm font-semibold text-foreground-0">Recommended For You</h2>
          <div className={'w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'}>
              {mockTopRoutes.map((r, idx) => (
                  <RouteCardBasic route={r} key={idx}/>
              ))}
          </div>
      </div>
  )
}
