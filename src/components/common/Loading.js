import ReactLoading from 'react-loading';

const Loading = (props) =>{
    return (
        <div className="d-flex justify-content-center">
           <ReactLoading type={"bubbles"} color={"rgb(53, 126, 221)"} height={'5%'} width={'5%'} />
        </div>
    )
}

export default Loading;