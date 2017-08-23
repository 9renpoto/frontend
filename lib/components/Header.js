"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Header extends React.Component {
    render() {
        const { Logo, titles, baseUrl } = this.props;
        const logoClassName = 'nav-item title';
        const items = titles.map((title, index) => React.createElement("a", { className: 'nav-item', href: `${baseUrl}/${title}/`, key: index }, title));
        return (React.createElement("header", { className: 'nav' },
            React.createElement("div", { className: 'nav-left' }, Logo(logoClassName)),
            React.createElement("div", { className: 'nav-right nav-menu' }, items)));
    }
}
exports.Header = Header;
//# sourceMappingURL=Header.js.map