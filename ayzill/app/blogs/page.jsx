import BlogCard from "../components/BlogCard/page";

export default function blogs() {
    return (
        <>
            <div className="parentContainer pt-5">
                <div className="containerWrapper container pt-5">
                    <h1>Blogs</h1>
                    <div className="blogsContainer row">
                        
                        <BlogCard/>
                    </div>
                </div>
            </div>
        </>
    )
}