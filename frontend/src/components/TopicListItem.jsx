import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ topic, getPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => getPhotosByTopic(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
