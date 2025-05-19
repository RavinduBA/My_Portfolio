import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// components
import ReviewCard from './ReviewCard';

const blogs = [
  {
    content: 'In software development, programming paradigms play a significant role in determining how developers approach solving problems.',
    topic: 'Understanding the Core Concepts of Object-Oriented Programming ',
    imgSrc: '/images/oop.jpeg',
    date: 'January 27, 2025',
    tags: ['Java', 'Theory'],
    link: 'https://ravinduabeysinghe.blogspot.com/2025/01/understanding-object-oriented.html'
  },
  {
    content: 'Introduction Building interactive web applications has traditionally been a challenge, requiring expertise in front-end and back-end technologies.',
    topic: 'Streamlit: The Go-To Framework for Data-Driven Applications',
    imgSrc: '/images/streamlit.png',
    date: 'January 12, 2025',
    tags: ['CS', 'Framework'],
    link: 'https://ravinduabeysinghe.blogspot.com/2025/01/streamlit-simplifying-data-apps-for.html'
  },
  {
    content: 'LangChain is a revolutionary framework designed to help developers build applications that involve language models.',
    topic: 'Understanding LangChain Architecture 🦜🔗 : Powering AI Workflows',
    imgSrc: '/images/langchain.jpg',
    date: 'January 12, 2025',
    tags: ['AI', 'Framework'],
    link: 'https://ravinduabeysinghe.blogspot.com/2025/01/understanding-langchain-architecture.html'
  },
  {
    content: 'Amazon Web Services (AWS) has become a go-to cloud service provider, offering a wide range of services that help developers, businesses, and organizations streamline their workflows and scale efficiently.',
    topic: 'Getting Started with AWS EC2: A Beginner Guide to Cloud Computing',
    imgSrc: '/images/ec2.jpg',
    date: 'January 09, 2025',
    tags: ['AWS', 'Cloud'],
    link: 'https://ravinduabeysinghe.blogspot.com/2025/01/getting-started-with-aws-ec2-beginners.html'
  },
  {
    content: 'Quentin Tarantino is a director who often feels like a skilled boxer, throwing powerful punches with his wild, chaotic style.',
    topic: 'Why "Inglourious Basterds" is Tarantinos Best, As I See It',
    imgSrc: '/images/inglorius.avif',
    date: 'January 10, 2025',
    tags: ['Movie', 'Review'],
    link: 'https://ravinduabeysinghe.blogspot.com/2025/01/quentin-tarantino-is-director-who-often.html'
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="headline-2 text-2xl font-bold">
            Recent Posts
          </h2>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <p className='text-zinc-400 max-w-[50ch]'>
            I also write about stuff I'm learning for fun....
          </p>
          <a 
            href="https://ravinduabeysinghe.blogspot.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-sky-400 hover:bg-sky-300 text-black px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>All Posts</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="reviews-swiper pb-12"
        >
          {blogs.map(({content, topic, imgSrc, date, tags, link}, key) => (
            <SwiperSlide key={key} className="h-auto">
              <ReviewCard
                topic={topic}
                imgSrc={imgSrc}
                date={date}
                content={content}
                tags={tags}
                link={link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Blog;

