import React from 'react'
import Modal from 'react-modal';

interface ProjectProps {
    image: string,
    src?: never;
    title: string,
    subTitle: string,
    index: number,
    detailedTitle: string,
    description: string,
    categories?: string[],
    href: string
}

interface IFrameProps {
    src: string,
    title: string,
    subTitle?: never,
    index: number,
    detailedTitle?: string,
    description?: string,
    categories?: string[],
    href?: never,
    image?: string;
}

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
export default function Project(props: ProjectProps | IFrameProps){
    const [modalVisible, setModalVisible] = React.useState(false)
    return(
        <>
        <div className="columns portfolio-item">
            <div className="item-wrap">

                <div onClick={e => setModalVisible(true)} title="Hand-geometry">


                    {props.image && <img alt="" src={`${process.env.PUBLIC_URL}/images/${props.image}`} />}
                    {props.src && <h3>{props.title}</h3>}
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

            {props.image && <img className="scale-with-grid" src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt="" />}
            {props.src && <iframe src={props.src} title={props.title}/>}

            <div className="description-box">
                <h4>{props.detailedTitle}</h4>
                <p>{props.description}</p>
                <span className="categories"><i className="fa fa-tag"></i>Coding</span>
            </div>

            <div className="link-box">
                {props.image && <a href={props.href} target="_blank">Details</a>}
                {props.src && <a href={props.src} target="_blank">Details</a>}
                <a className="popup-modal-dismiss" onClick={e => setModalVisible(false)}>Close</a>
            </div>

        </div>
        </Modal>
    </>
    )
}