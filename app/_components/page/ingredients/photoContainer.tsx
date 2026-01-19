export default function PhotoContainer(props: { test: number }) {
    const title =
        props.test === 1
            ? "Mt. Fuji"
            : props.test === 2
                ? "Kyoto"
                : "Tokyo";

    return (
        <div className="group relative w-full overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-xl">
            {/* 画像 */}
            <img
                src={
                    props.test === 1
                        ? "/mockImages/Fuji.jpg"
                        : props.test === 2
                            ? "/mockImages/Kyoto.jpg"
                            : "/mockImages/Tokyo.jpg"
                }
                className="
          w-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-105
        "
            />

            {/* 黒マスク */}
            <div
                className="
          pointer-events-none
          absolute inset-0
          bg-black/40
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
            />

            {/* タイトル（右下） */}
            <h2
                className="
          absolute
          bottom-4
          right-4
          text-white
          text-2xl
          font-bold
          opacity-0
          translate-y-2
          transition-all
          duration-300
          ease-out
          group-hover:opacity-100
          group-hover:translate-y-0
        "
            >
                {title}
            </h2>
        </div>
    );
}
