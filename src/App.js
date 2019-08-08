import React,{Component} from "react"
import ReactPullLoad, { STATS } from 'react-pullload'
// import 'node_modules/react-pullload/dist/ReactPullLoad.css'
//cData初始显示数据
const cData = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
export class App extends Component {
  constructor() {
    super();
    this.state = {
      hasMore: true,
      data: cData,
      action: STATS.init,
      index: 10 //loadMoreLimitNum,加载更多的数量限制,即page页的数量,每次加载后减1,即加载10次
    }
  }

  handleAction = (action) => {
    //new action must do not equel to old action
    if (action === this.state.action) {
      return false
    }
    if (action === STATS.refreshing) {
      this.handRefreshing();
    } else if (action === STATS.loading) {
      this.handLoadMore();
    } else {
      this.setState({
        action: action
      })
    }
  }

  handRefreshing = () => {
    if (STATS.refreshing === this.state.action) {
      return false
    }
    setTimeout(() => {
      //refreshing complete
      this.setState({
        data: cData,
        hasMore: true,
        action: STATS.refreshed,
        index:10
      });
      console.log("ok")  // 这是下拉刷新完成后的回调
    }, 2000)
    this.setState({
      action: STATS.refreshing
    })
  }

  handLoadMore = () => {
    if (STATS.loading === this.state.action) {
      return false
    }
    //无更多内容则不执行后面逻辑
    if (!this.state.hasMore) {
      return;
    }
    setTimeout(() => {
      // 如果没有更多了,hasMore: false,阻止上拉
      if (this.state.index === 0) {
        this.setState({
          action: STATS.reset,
          hasMore: false
        });
      } else {
        //上拉刷新后的回调
        console.log("上拉结束")
        let arr = [1, 2, 3, 4, 5, 6, 7]; //这是新数据
        this.setState({
          data: [...this.state.data, ...arr],  //新数据和旧数据合并
          action: STATS.reset,
          index: this.state.index - 1
        });
      }
    }, 2000)

    this.setState({
      action: STATS.loading
    })
  }

  render() {
    const {
      data,
      hasMore
    } = this.state

    return (
      <div>
        <ReactPullLoad
          downEnough={150}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          distanceBottom={1000}>
          <ul className="test-ul">
            {
              data.map((str, index) => {
                return <li key={index}>{index}</li>
              })
            }
          </ul>
        </ReactPullLoad>
      </div>
    )
  }
}
export default App