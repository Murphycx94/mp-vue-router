/*
 * @Author: Murphy Chu - shmilyclxy@163.com
 * @Date: 2018-07-10 14:32:14
 * @Last Modified by: Murphy Chu
 * @Last Modified time: 2018-07-25 14:22:35
 */
module.exports = [
  /**
   * 注册页 - 引导
   */
  {
    path: '/pages/register/guide/index',
    name: 'register_guide'
  },
  /**
   * 首页 - 关注
   */
  {
    path: '/pages/home/index',
    name: 'home',
    config: {
      // enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/logs/index',
    name: 'logs'
  },
  /**
   * 注册页 - 个性签名
   */
  {
    path: '/pages/register/sign/index',
    name: 'register_sign'
  },
  /**
   * 注册页 - 选择标签
   */
  {
    path: '/pages/register/tags/index',
    name: 'register_tags'
  },
  /**
   * 注册页 - 选择俱乐部
   */
  {
    path: '/pages/register/club/index',
    name: 'register_club'
  },
  /**
   * 动态详情页
   */
  {
    path: '/pages/moment/detail/index',
    name: 'moment_detail'
  },
  /**
   * 动态详情页
   */
  {
    path: '/pages/moment/webview/index',
    name: 'moment_webview'
  },
  /**
   * 点赞列表页
   */
  {
    path: '/pages/moment/likes/index',
    name: 'moment_likes'
  },
  /**
   * 我的俱乐部
   */
  {
    path: '/pages/club/me/index',
    name: 'club_me'
  },
  /**
   * 俱乐部列表
   */
  {
    path: '/pages/club/list/index',
    name: 'club_list'
  },
  /**
   * 俱乐部首页
   */
  {
    path: '/pages/club/home/index',
    name: 'club_home'
  },
  /**
   * 搜索页面
   */
  {
    path: '/pages/search/index',
    name: 'search'
  },
  /**
   * 俱乐部收录
   */
  {
    path: '/pages/club/source/index',
    name: 'club_source'
  },
  /**
   * 俱乐部成员
   */
  {
    path: '/pages/club/member/index',
    name: 'club_member'
  },
  /**
   * 发现页面
   */
  {
    path: '/pages/discover/home/index',
    name: 'discover_home'
  },
  /**
   * me
   */
  {
    path: '/pages/me/home/index',
    name: 'me_home'
  },
  /**
   * 个人主页
   */
  {
    path: '/pages/user/home/index',
    name: 'user_home',
    config: {
      navigationStyle: 'custom'
    }
  },
  /**
   * 关注列表
   */
  {
    path: '/pages/user/follow/index',
    name: 'user_follow'
  },
  /**
   * 用户俱乐部列表
   */
  {
    path: '/pages/user/clubs/index',
    name: 'user_clubs'
  },
  /**
   * 我的推送设置
   */
  {
    path: '/pages/me/push/index',
    name: 'me_push'
  },
  /**
   * 我的推送设置
   */
  {
    path: '/pages/me/settings/index',
    name: 'me_settings'
  },
  /**
   * 发布引导页(tab页面)
   */
  {
    path: '/pages/publish/guide/index',
    name: 'publish_guide'
  },
  /**
   * 发布引导页
   */
  {
    path: '/pages/publish/cguide/index',
    name: 'publish_cguide'
  },
  /**
   * 投稿 - 输入url
   */
  {
    path: '/pages/publish/input/index',
    name: 'publish_input'
  },
  /**
   * 发布 - 解析url
   */
  {
    path: '/pages/publish/analysis/index',
    name: 'publish_analysis'
  },
  /**
   * 发布 - 选择俱乐部
   */
  {
    path: '/pages/publish/clubs/index',
    name: 'publish_clubs'
  },
  /**
   * 发布 - 选择Tags
   */
  {
    path: '/pages/publish/tags/index',
    name: 'publish_tags'
  },
  /**
   * 发布
   */
  {
    path: '/pages/publish/postings/index',
    name: 'publish_postings'
  },
  /**
   * message
   */
  {
    path: '/pages/message/home/index',
    name: 'message_home'
  },
  /**
   * website
   */
  {
    path: '/pages/website/index',
    name: 'website'
  }
]
