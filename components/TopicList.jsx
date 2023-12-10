import React from 'react';
import RemoveButton from './RemoveButton';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const getTopics = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="bg-slate-100 border borderlslate-300 p-4 my-3 flex justify-between items-start"
        >
          <div>
            <h2 className="text-2xl font-bold">{topic.title}</h2>
            <div>{topic.description}</div>
            <div className="flex gap-4 mt-2">
              <p>Created: {formatDate(topic.createdAt)} </p>
              <p>Updated: {formatDate(topic.updatedAt)} </p>
            </div>
          </div>
          <div className="flex gap-2">
            <RemoveButton id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
