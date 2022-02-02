import { useEffect, useState } from "react";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/index";

function Posts(props) {
  const [deviceType, setDeviceType] = useState(0);

  let marginCounterFirst = 0,
    marginCounterSecond = 0,
    marginCounterThird = 0;

  function checkMediaQuery() {
    if (window.innerWidth > 968) {
      setDeviceType(1);
    } else if (window.innerWidth >= 660 && window.innerWidth <= 968) {
      setDeviceType(2);
    }
  }
  window.addEventListener("resize", checkMediaQuery);

  function checkDevice() {
    // Calculating masonry layout container height dynamically
    let posts = document.querySelector(".posts").children,
      totalHeightOfFirst = 0,
      totalHeightOfSecond = 0,
      totalHeightOfThird = 0;

    // Check device type is desktop
    if (deviceType === 1) {
      for (let i = 0; i < posts.length; i += 3) {
        totalHeightOfFirst = posts[i].clientHeight + totalHeightOfFirst;
        marginCounterFirst++;
      }

      for (let i = 1; i < posts.length; i += 3) {
        totalHeightOfSecond = posts[i].clientHeight + totalHeightOfSecond;
        marginCounterSecond++;
      }

      for (let i = 2; i < posts.length; i += 3) {
        totalHeightOfThird = posts[i].clientHeight + totalHeightOfThird;
        marginCounterThird++;
      }

      if (
        totalHeightOfFirst > totalHeightOfSecond &&
        totalHeightOfFirst > totalHeightOfThird
      ) {
        document.querySelector(".posts").style.height = `${
          totalHeightOfFirst + marginCounterFirst * 16
        }px`;
      } else if (
        totalHeightOfSecond > totalHeightOfFirst &&
        totalHeightOfSecond > totalHeightOfThird
      ) {
        document.querySelector(".posts").style.height = `${
          totalHeightOfSecond + marginCounterSecond * 16
        }px`;
      } else {
        document.querySelector(".posts").style.maxHeight = `${
          totalHeightOfThird + marginCounterThird * 16
        }px`;
      }
    }
    // Check device type is tablet
    else if (deviceType === 2) {
      document.querySelector(".posts").style.minHeight = "100%";
    }
  }

  useEffect(() => {
    props.getPosts();
    checkMediaQuery();
    checkDevice();
  }, [props.posts.length, document.querySelector(".post")]);

  return (
    <div className="posts">
      {props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { getPosts })(Posts);
