import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/search";
import Skeleton from "react-loading-skeleton";

type TItemImageProps = {
  img?: string;
  url?: string;
  login?: string;
};

const ItemImage = React.memo(({ img, url, login }: TItemImageProps) => {
  const isLoading = useSelector((state: IRootState) => state.search.isLoading);
  const appReady = useSelector((state: IRootState) => state.search.appReady);

  if (isLoading) {
    return (
      <div className={"item_container"}>
        <Skeleton width={70} />
        <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
      </div>
    );
  } else if (appReady) {
    return (
      <div className={"item_container"}>
        <a target={"_blank"} href={url}>
          {login}
        </a>
        <img src={img} alt="image" className={"item_image"} />
      </div>
    );
  } else {
    return null;
  }
});

export { ItemImage };
