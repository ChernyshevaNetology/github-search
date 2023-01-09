import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/reducerts/search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type TItemProps = {
  img: string;
  url: string;
  login: string;
};

const ItemImage = React.memo(({ img, url, login }: TItemProps) => {
  const isLoading = useSelector((state: IRootState) => state.search.isLoading);
  const appReady = useSelector((state: IRootState) => state.search.appReady);
  switch (true) {
    case isLoading:
      return (
        <div className={"item_container"}>
          <Skeleton width={70} />
          <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
        </div>
      );
    case appReady:
      return (
        <div className={"item_container"}>
          <a target={"_blank"} href={url}>
            {login}
          </a>
          <img src={img} alt="image" className={"item_image"} />
        </div>
      );
    default:
      return null;
  }
});

export { ItemImage };
