import EditTopicForm from '@/components/EditTopicForm';
import React from 'react';

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: 'no-store',
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch topic.');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopicPage({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
