import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollTop({ history }) {
    useEffect(() => {
        const unListen = history.listen(()=> {
            window.scrollTo(0, 0);
        });
        return () => {
            unListen();
        }
    });

    return (null) ;


}



export default withRouter(ScrollTop);