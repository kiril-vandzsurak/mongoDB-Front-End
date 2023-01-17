import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      let response = await fetch(`http://localhost:3001/blogs`);
      if (response.ok) {
        let data = await response.json();
        setBlogs(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Row>
      {blogs.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
