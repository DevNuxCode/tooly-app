import { GetServerSideProps } from 'next';
import React from 'react';

interface BlogProps {
  blog: {
    id: number;
    title: string;
    content: string;
    // Puedes añadir más propiedades aquí si tu API las devuelve
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const res = await fetch(`https://laravel.distribuidoravega.cl/wp-json/wp/v2/posts/${id}`);
  
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  console.log(data)
  
  return {
    props: { blog: data },
    
  };
  
}


const BlogPage: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>{blog.id}</p>
      {/* Aquí puedes mostrar otros datos del blog */}
    </div>
  );
};

export default BlogPage;