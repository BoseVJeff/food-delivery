// The `/` route

import { useContext, useEffect } from "react";
import SetPageTitleContext from "../utils/PageTitleContext";


function Home() {
    // Typical use of this hook
    const setPageHeader = useContext(SetPageTitleContext);
    useEffect(() => {
        setPageHeader("Food Delivery");
    });
    return <>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>Here's a small text description for the content. Nothing more, nothing less.</p>
    </>;
}

export default Home;