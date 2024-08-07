import { layouts } from "./utils/styles";


const Layout = ({mapLayout, ...props}) => {
    const layout = layouts.find(l => l.id === mapLayout)

    if (!layout) return null;

    return layout.component(props);
}

export default Layout;