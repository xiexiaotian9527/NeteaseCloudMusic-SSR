webpackJsonp([5],{709:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.homeIndex;return{_playlist:t.server_playlist,_newsong:t.newsong,playlist_Already:t.playlist_Already,song_Already:t.song_Already}}function r(e){return{ACTIONS:(0,N.bindActionCreators)(O.default,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(23),s=l(u),i=a(5),o=l(i),d=a(27),c=l(d),f=a(1),m=l(f),p=a(2),_=l(p),y=a(3),v=l(y),h=a(4),g=l(h),A=a(0),E=l(A),N=a(77),b=a(144),k=a(6),w=(l(k),a(33),a(56),a(54),a(55)),C=a(715),x=a(97),I=(l(x),a(273)),O=l(I);a(733);var P=function(e){function t(){return(0,m.default)(this,t),(0,v.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,_.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e._playlist,a=e.ACTIONS;!t.length&&a.playlist_fetch(),a.newsong()}},{key:"render",value:function(){var e=this,t=this.props,a=t._playlist,l=t._newsong,n=t.playlist_Already,r=t.song_Already;return E.default.createElement("div",{className:"i-home"},E.default.createElement(w.PanelNav,{title:"推荐歌单"}),E.default.createElement("section",{className:"recommend"},n?a.map(function(t,a){return E.default.createElement(w.RecommendChunk,(0,o.default)({key:t.id,item:t},e.props))}):E.default.createElement(C.Homeremd,{len:6})),E.default.createElement(w.PanelNav,{title:"最新音乐"}),E.default.createElement("ul",{className:"newsong"},r?l.map(function(e,t){var a=e.song,l=(a.album,a.privilege.maxbr),n=a.artists,r=a.alias,u=(0,s.default)(a,["album","privilege","artists","alias"]);return E.default.createElement(w.Piece,{item:(0,o.default)({},u,{maxbr:l,custom_alia:r,custom_ar:n,index:t},e),key:t})}):E.default.createElement(C.HomeList,null)))}}],[{key:"loadData",value:function(e){if(e&&e.store)return e.store.dispatch(O.default.playlist_fetch());this.props.ACTIONS.playlist_fetch()}}]),t}(A.Component);t.default=(0,b.connect)(n,r)(P),e.exports=t.default},733:function(e,t){}});