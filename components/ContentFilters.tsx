"use client";

import { useState } from "react";
import {
  insightExamples,
  projectCategories,
  projects,
} from "@/lib/site";

export function ProjectFilter() {
  const [active, setActive] = useState("All");
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            className={active === category ? "active" : ""}
            key={category}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card detailed" key={project.category}>
            <div className="placeholder-visual">
              <span>Project information to be added after authorization.</span>
            </div>
            <p className="card-label">{project.category}</p>
            <h2>{project.title}</h2>
            <p>{project.status}</p>
            <dl>
              <div>
                <dt>Category</dt>
                <dd>{active === "All" ? "[Insert approved category]" : active}</dd>
              </div>
              <div>
                <dt>Client or partner</dt>
                <dd>[Insert after authorization]</dd>
              </div>
              <div>
                <dt>Location and duration</dt>
                <dd>[Insert approved details]</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}

export function InsightFilter() {
  const [topic, setTopic] = useState("All topics");
  const [type, setType] = useState("All publication types");
  const topics = ["All topics", ...new Set(insightExamples.map((item) => item.topic))];
  const types = [
    "All publication types",
    ...new Set(insightExamples.map((item) => item.type)),
  ];
  const filtered = insightExamples.filter(
    (item) =>
      (topic === "All topics" || item.topic === topic) &&
      (type === "All publication types" || item.type === type),
  );

  return (
    <>
      <div className="select-filters">
        <label>
          <span>Topic</span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topics.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Publication type</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            {types.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Year</span>
          <select defaultValue="2026">
            <option>All years</option>
            <option>2026</option>
          </select>
        </label>
      </div>
      <div className="insight-grid">
        {filtered.map((insight) => (
          <article key={insight.title}>
            <div className="insight-meta">
              <span>{insight.type}</span>
              <span>{insight.year}</span>
            </div>
            <h2>{insight.title}</h2>
            <p>{insight.summary}</p>
            <span className="topic-tag">{insight.topic}</span>
          </article>
        ))}
      </div>
    </>
  );
}

