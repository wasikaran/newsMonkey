import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // ✅ Capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const getBadgeColor = () => {
    const colors = {
      general: "secondary",
      sports: "success",
      business: "primary",
      entertainment: "warning",
      health: "info",
      science: "dark",
      technology: "danger"
    };
    return colors[props.category] || "secondary";
  };
const updateNews = async () => {
  props.setProgress(10);
  setLoading(true);

const response = await fetch(process.env.PUBLIC_URL + '/data.json');
  props.setProgress(30);
  const jsonData = await response.json();
  props.setProgress(70);

  const categoryData = jsonData[props.category];
  const start = 0;
  const end = props.pageSize;

  setArticles(categoryData.articles.slice(start, end));
  setTotalResults(categoryData.totalResults);
  setLoading(false);
  props.setProgress(100);
};

const fetchMoreData = async () => {
const response = await fetch(process.env.PUBLIC_URL + '/data.json');
  const jsonData = await response.json();
  const categoryData = jsonData[props.category];

  const nextPage = page + 1;
  setPage(nextPage);

  const start = page * props.pageSize;
  const end = start + props.pageSize;

  const newArticles = categoryData.articles.slice(start, end);
  setArticles(articles.concat(newArticles));
};


  return (
    <div className='container p-5'>
      <h1 className="text-center mt-4">
        NewsMonkey - Top Headlines on {capitalizeFirstLetter(props.category)} Category
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-2">
            {articles.map((element, index) => {
              return (
                <div className="col-lg-4 my-2" key={element.url + index}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    badgeColor={getBadgeColor()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 15,
  category: "general"
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired
};

export default News;
