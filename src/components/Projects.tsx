import React from 'react'
import Modal from 'react-modal';

const projects = [
    {
        image: "projects/hand-geometry.png",
        title: "Hand Geometry",
        subTitle: "Illustration",
        detailedTitle: "Identity verification using shape and geometry of human hands",
        description: "Capture RGB image of human hand and apply algorithm to extract a minimal feature vector. Fingerprint sensor not required. Only RGB camera used. Any device which can capture the outline of palm will work.",
        categories: [
            "Biometric",
            "Image Processing"
        ],
        href: "https://github.com/gautamits/hand-geometry"
    },
    {
        image: "projects/LDGP.png",
        title: "Face Recognotion",
        subTitle: "Project Development",
        detailedTitle: "Face Recognition",
        description: "LDGP or Local Descriptive Gradient Pattern is homegrown algorithm developed by project mentor. Multi threaded python server serves database and handles requests. Minimal client captures image and extracts feature which sends it to server and server responds with correct match",
        categories: [
            "Face Recognition",
            "Web Development",
            "Biometric"
        ],
        href: "https://github.com/gautamits/LDGP"
    },
    {
        image: "projects/dynamic-thresholding.png",
        title: "Dynamic Thresholding",
        subTitle: "Python GUI",
        detailedTitle: "Dynamic Thresholding",
        description: "Extraction of binary image is easier using multiple thresholds on image.",
        categories: [
            "Branding"
        ],
        href: "https://github.com/gautamits/dynamic-thresholding"
    },
    {
        image: "projects/DeskletPyQt.png",
        title: "Python Desklet",
        subTitle: "Python GUI using QT",
        detailedTitle: "DeskletPyQt",
        description: "Easier file search using metadata made from numpy module. Specific directories for search can be added and can be ignored as well for faster access. Searched files will be opened in default application using xdg-open. Bonus is jokes from joke API",
        categories: [
            "file manager"
        ],
        href: "https://github.com/gautamits/DeskletPyQt"
    },
    {
        image: "projects/RGBD.png",
        title: "RGBD Face Recogniton",
        subTitle: "Face Recognition using Depth map",
        detailedTitle: "RGBD Face Recognition",
        description: "RGBD or Red, Green, Blue, Depth is a face recognition method where accuracy obtained by color images can be increased y depth map. Depth map is obtained by kinect camera.",
        categories: [
            "Image processing",
            "Biometric"
        ],
        href: "https://github.com/gautamits/rgbd"
    },
    {
        image: "projects/Codechef.jpeg",
        title: "Codechef",
        subTitle: "Competitive Coding",
        detailedTitle: "Codechef",
        description: "My codechef repository. Check out my competitive programming abilities.",
        categories: [
            "Competitive programming"
        ],
        "href": "https://www.codechef.com/users/gautamits"
    },
    {
        image: "projects/Github.png",
        title: "Github",
        subTitle: "Competitive Coding",
        detailedTitle: "Github",
        description: "My github repository. My opensource work can be found here.",
        categories: [
            "open source"
        ],
        href: "http://github.com/gautamits"
    },
    {
        image: "projects/Hackerrank.png",
        title: "Hackerrank",
        subTitle: "Competitive Coding",
        detailedTitle: "Hackerrank",
        description: "My Hackerrank repository where I learnt data structures algorithms, regex etc. Check out my medal that I got in algorithms section",
        categories: [
            "Coding"
        ],
        href: "https://www.hackerrank.com/gautamits"
    },
]

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
export default function Projects() {
    return (
        <>
            {projects.map((project, idx) => <Project index={idx} {...project} />)}
        </>
    )
}

interface ProjectProps {
    image: string,
    title: string,
    subTitle: string,
    index: number,
    detailedTitle: string,
    description: string,
    categories: string[],
    href: string
}
function Project(props: ProjectProps) {
    const [modalVisible, setModalVisible] = React.useState(false)
    return (
        <>
            <div className="columns portfolio-item">
                <div className="item-wrap">

                    <div onClick={e => setModalVisible(true)} title="Hand-geometry">


                        <img alt="" src={`${process.env.PUBLIC_URL}/images/${props.image}`} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{props.title}</h5>
                                <p>{props.subTitle}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                    </div>

                </div>
            </div>
            <Modal
                isOpen={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id={`modal-0${props.index}`} className="popup-modal">

                <img className="scale-with-grid" src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt="" />

                <div className="description-box">
                    <h4>{props.detailedTitle}</h4>
                    <p>{props.description}</p>
                    <span className="categories"><i className="fa fa-tag"></i>Coding</span>
                </div>

                <div className="link-box">
                    <a href={props.href} target="_blank">Details</a>
                    <a className="popup-modal-dismiss" onClick={e => setModalVisible(false)}>Close</a>
                </div>

            </div>
            </Modal>
        </>
    )
}