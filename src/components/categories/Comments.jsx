import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { useParams } from "react-router-dom";


const Comments = () => {

    const { slug } = useParams();

	const [data, setData] = useState({
		posts: [],
	});

  useEffect(() => {
		axiosInstance.get(slug + '/comment/').then((res) => {
			setData({
				posts: res.data,
			});
			console.log(res.data);
		});
	}, [setData]);

    if (!data.posts || data.posts.length === 0) 
    return (
        <div>
            <div className="flex mt-20 ml-2">
            <input
                type="text"
                id="email"
                placeholder="Comments..."
                name="comment"
                //onChange={handleChange}
                className="w-full h-14 bg-white rounded-xl outline-none border-2 border-emerald-900 px-5 text-c3"
            />
            <button className="ml-2 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-600 w-40 h-10 rounded-md cursor-pointer p-[1px] mt-2">Comments</button>
            
        </div>
            <p className="ml-2 mt-2 mb-2">Can not find any comment</p>
        </div>
    )

    return (
        <>
        <div className="flex mt-20 ml-2">
            <input
                type="text"
                id="email"
                placeholder="Comments..."
                name="comment"
                //onChange={handleChange}
                className="w-full h-14 bg-white rounded-xl outline-none border-2 border-emerald-900 px-5 text-c3"
            />
            <button className="ml-2 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-600 w-40 h-10 rounded-md cursor-pointer p-[1px] mt-2">Comments</button>
            
        </div>
        
        <div className="mt-4 ml-2 border-black border-2 rounded-2xl px-4 mb-4">
            <p>Author : {data.posts[0].commenter_name}</p>
            <p>Comment : {data.posts[0].comment_body} </p>
        </div>
        </>
    )
}
export default Comments