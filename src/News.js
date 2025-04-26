import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner, { spinner } from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";





export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 15,
    category: "general"

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }
  capatalizaFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    console.log("Hello, I'm a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    };
    document.title = `${this.capatalizaFirstLetter(this.props.category)} - NewsMonkey`;
  }

  getBadgeColor = () => {
    const colors = {
      general: "secondary",
      sports: "success",
      business: "primary",
      entertainment: "warning",
      health: "info",
      science: "dark",
      technology: "danger"
    };
    return colors[this.props.category] || "secondary";
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.props.setProgress(100);


  }

  async componentDidMount() {
    this.updateNews();

  }


  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()

  }

  handlePreClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7d190ce37ab74859bfedf514f9df2321&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
     articles: this.state.articles.concat(parsedData.articles),
     totalResults: parsedData.totalResults,
      })

  };

  render() {

    return (
      <>
        <div className='container p-5'>
          <h1 className="text-center">NewsMonkey - Top Headlines on    {this.capatalizaFirstLetter(this.props.category)} Category</h1>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row my-2">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-lg-4 my-2" key={element.url + index}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      badgeColor={this.getBadgeColor()}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default News;
