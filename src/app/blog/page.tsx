import BlogCard from '@/components/serviceCard';
import React from 'react';
import BlogsData from '@/assets/data/BlogData';
import Help from '../sections/Help';

export default function page() {
  const previewBlog = BlogsData.slice(0, 3);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[75px] md:pt-[150px]">
      <section className="container flex flex-col gap-10 max-md:px-5 max-md:py-6 md:min-h-[600px]   lg:min-h-[800px] lg:gap-16">
        <div className="flex w-full flex-col gap-7 sm:w-2/3 lg:w-[915px]">
          <h1 className="font-mcqueen text-3xl lg:text-[64px] lg:leading-[84px]">
            Discover the Latest
            <span className="text-primary"> Insights </span> and
            <span className="text-secondary"> Innovations</span> from us.
          </h1>
        </div>
        <div className="flex items-start gap-8 max-lg:flex-col lg:gap-16">
          <BlogCard
            image={BlogsData[0].image}
            title={BlogsData[0].title}
            text={BlogsData[0].text}
            orientation="vertical"
            width={560}
            height={400}
          />
          <div className="flex flex-col gap-10">
            {previewBlog.map((blog) => (
              <BlogCard
                title={blog.title}
                text={blog.text}
                image={blog.image}
                orientation="horizontal"
                key={blog.id}
                width={180}
                height={130}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container flex flex-col justify-between py-6 max-md:gap-4 max-md:px-5 md:min-h-[600px]   lg:min-h-[800px] ">
        <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
          <h1 className="font-mcqueen text-3xl lg:text-[40px] lg:leading-[52px]">
            Featured <span className="text-primary">blog </span> posts and
            Trending
            <span className="text-secondary"> topics</span>
          </h1>
        </div>
        <div className="flex w-full max-w-full flex-wrap justify-between gap-8 pt-12 max-sm:flex-col max-sm:gap-10">
          {BlogsData.map((t) => (
            <BlogCard
              key={t.id}
              title={t.title}
              text={t.text}
              image={t.image}
              orientation="vertical"
            />
          ))}
        </div>
      </section>
      <Help />
    </main>
  );
}
