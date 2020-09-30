import React from "react";
import "./SearchPage.css";
import TuneOutlineIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlineIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a-/AOh14GgIsLcGWNri6vn_XdyOTmukFPWGVl-aiF3Y09aDXQ=s88-c-k-c0xffffffff-no-rj-mo"
        channel="douknowccy"
        verified
        subs="660k"
        noOVideos={382}
        description="hello world"
      />
      <hr />
      <VideoRow
        title="kimi best video"
        subs="2.3M views"
        views="1.3M"
        timestamp="3 days ago"
        channelImage="https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/small_ava_d50a851ca2.jpg"
        channel="kimi"
        description="hello world"
        image="https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848794/thumbnail_avatar_c52daf0a19.jpg"
      />
      <VideoRow
        title="kimi best video"
        subs="2.3M views"
        views="1.3M"
        timestamp="3 days ago"
        channelImage="https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/small_ava_d50a851ca2.jpg"
        channel="kimi"
        description="hello world"
        image="https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848794/thumbnail_avatar_c52daf0a19.jpg"
      />
      <VideoRow
        title="kimi best video"
        subs="2.3M views"
        views="1.3M"
        timestamp="3 days ago"
        channelImage="https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/small_ava_d50a851ca2.jpg"
        channel="kimi"
        description="hello world"
        image="https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848794/thumbnail_avatar_c52daf0a19.jpg"
      />
    </div>
  );
}

export default SearchPage;
