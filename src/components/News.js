
import React, { Component } from 'react'
import Items from './Items'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component"



export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category} News-Land`
    }
    // main update fuction--------------------------------------------------------
    async updatenews() {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cb3b1f9e0dc4a93b5aec249093beefe&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedata = await data.json()
        this.props.setProgress(70)
        console.log(parsedata)
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }
    // componentdidmount function starts here----------------------------------------------
    async componentDidMount() {
        this.updatenews()

    }
    // more data are load here----------------------------------------------------------------

    moreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cb3b1f9e0dc4a93b5aec249093beefe&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults
        })

    }
    render() {
        return (
            <>
                <div className="container">

                    <h1 className='text-center text-white border border-light rounded bg-primary bg-gradient' style={{ marginTop: '90px' }}>News-Land {this.props.category} top Headlines </h1>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.moreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4 my-2" key={element.url === 'https://removed.com' ? Math.random() : element.url}>
                                        <Items title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 88) : ''} imageurl={element.urlToImage} newsurl={element.url} theme={this.props.theme} changeTheme={this.changetheme} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>



                                })}
                            </div>
                        </div>
                    </InfiniteScroll>




                </div>

            </>
        )
    }
}

export default News
