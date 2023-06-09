
import Spinner from '../../../Spinner/Spinner';
import TabOneDataShow from '../ShowTabs/TabOneDataShow';
import TabThreeData from '../ShowTabs/TabThreeData';
import TabTwoData from '../ShowTabs/TabTwoData';
import './Tabs.css'
import { useEffect, useState } from "react";


const Tabs = () => {

    const [loading, setLoading] = useState(true)
    const [toggleState, setToggleState] = useState(1);
    const [drones, setDrones] = useState([])
    const [dslrs, setDslr] = useState([])
    const [hdCam, setHdCam] = useState([])




    const toggleTab = (index) => {
        setToggleState(index);
    };



    useEffect(() => {
        fetch(`https://toys-server-site.vercel.app/cetagorys?subCategory=Drone`)
            .then(res => res.json())
            .then(data => setDrones(data))
        setLoading(false)
    }, [])

    useEffect(() => {
        fetch(`https://toys-server-site.vercel.app/cetagorys?subCategory=DSLR`)
            .then(res => res.json())
            .then(data => setDslr(data))
        setLoading(false)
    }, [])

    useEffect(() => {
        fetch(`https://toys-server-site.vercel.app/cetagorys?subCategory=HD Camera`)
            .then(res => res.json())
            .then(data => setHdCam(data))
        setLoading(false)
    }, [])



    if (loading) {
        return <div className="flex justify-center py-5"><Spinner></Spinner></div>
    }

    return (
        <div>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="containers">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Drone Camera
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        DSLR Camera
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        HD Camera
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2>Drone camera</h2>
                        <hr />
                        <div className='md:flex justify-between items-center border'>
                            {
                                drones.slice(0, 2).map(data => <TabOneDataShow
                                    key={data._id}
                                    data={data}
                                ></TabOneDataShow>)
                            }
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>DSLR</h2>
                        <hr />
                        <div className='md:flex justify-between items-center'>
                            {
                                dslrs.slice(0, 2).map(data => <TabTwoData
                                    key={data._id}
                                    data={data}
                                ></TabTwoData>)
                            }
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>Content 3</h2>
                        <hr />
                        <div className='md:flex justify-between items-center'>
                            {
                                hdCam.slice(0, 2).map(data => <TabThreeData
                                    key={data._id}
                                    data={data}
                                ></TabThreeData>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;