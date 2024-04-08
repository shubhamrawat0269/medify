import React from "react";
import { blogsData } from "../../dummy/primeCardData";

const BlogCard = ({ uId, category, date, title, author, image, profile }) => {
  return (
    <div key={uId} className="mb-5">
      <figure>
        <img src={image} alt={uId} />
      </figure>
      <div className="flex gap-5 text-slate-600">
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-6" src={profile} alt={`${profile}1`} />
        </figure>
        <span className="text-sm text-blue-950">{author}</span>
      </div>
    </div>
  );
};

const Blog = () => {
  // {
  //   category: "Medical",
  //   date: "March 31, 2024",
  //   title: "6 Tips to protect your Mental Health",
  //   author: "Rebecca Princton",
  //   image: "images/pngs/check.png",
  //   image: "images/pngs/detox.png",
  // },

  return (
    <div className="bg-white">
      <div className="w-5/6 m-auto pt-10 pb-10">
        <div className="pt-5 pb-5 text-center">
          <p className="font-bold text-sm text-blue-700">Blog & News</p>
          <h2 className="font-bold text-4xl text-blue-900 mt-2 mb-2">
            Read Our Latest News
          </h2>
        </div>

        <div className="px-5 py-2 md:flex md:gap-5">
          {blogsData.map((blog, id) => {
            return (
              <BlogCard
                uId={id}
                category={blog.category}
                date={blog.date}
                title={blog.title}
                author={blog.author}
                image={blog.image}
                profile={blog.profile}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
