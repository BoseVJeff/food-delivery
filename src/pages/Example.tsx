import { useContext, useEffect } from "react";
import SetPageTitleContext from "../utils/PageTitleContext";


function Example() {
    const setPageHeader = useContext(SetPageTitleContext);
    useEffect(() => {
        setPageHeader("Example Page");
    })
    return (
        <>
            Place any examples here for testing and demo purposes
        </>
    );
}
export default Example;