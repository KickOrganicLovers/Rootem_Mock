import RouteCardHorizontal from '@/app/_components/common/templates/routeCardHorizontal';
import {Route} from "@/lib/client/types";


type RouteListProps = {
  routes: Route[];
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
};

export default function RouteList({ routes, focusedIndex, setFocusedIndex }: RouteListProps) {
  return (
    <div
      className="flex w-[400px] h-full flex-col gap-3 backdrop-blur-xs overflow-y-scroll overscroll-contain p-3"
      tabIndex={0}
      role="region"
      aria-label="Route list"
      onWheelCapture={(e) => {
        // Keep scrolling within the list and prevent wheel from bubbling to underlying map
        e.stopPropagation();
      }}
      onTouchMoveCapture={(e) => {
        // Prevent touch scroll/pan from reaching the map beneath
        e.stopPropagation();
      }}
      onKeyDownCapture={(e) => {
        // Contain keyboard scroll events (Arrow keys, PageUp/Down, Space, etc.)
        e.stopPropagation();
      }}
    >
      {routes.map((route, idx) => (
        <RouteCardHorizontal
          key={`${route.title}-${idx}`}
          route={route}
          isFocused={focusedIndex === idx}
          onClick={() => setFocusedIndex(idx)}
        />
      ))}
    </div>
  );
}
