import React, { useEffect, useState } from 'react'
import './App.css';
import Axios from 'axios'
import ContentLoader from "react-content-loader"

function App() {
  const [articles, setArticles] = useState([]) //untuk tanpa React.useState itu harus kita import useState di atas (react)

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err))
  }, [])

  const Loading = () => {
    return (
      <>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="22" rx="3" ry="3" width="190" height="21" />
          <rect x="0" y="60" rx="3" ry="3" width="410" height="15" />
          <rect x="0" y="78" rx="3" ry="3" width="380" height="15" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="15" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="22" rx="3" ry="3" width="190" height="21" />
          <rect x="0" y="60" rx="3" ry="3" width="410" height="15" />
          <rect x="0" y="78" rx="3" ry="3" width="380" height="15" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="15" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="22" rx="3" ry="3" width="190" height="21" />
          <rect x="0" y="60" rx="3" ry="3" width="410" height="15" />
          <rect x="0" y="78" rx="3" ry="3" width="380" height="15" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="15" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="22" rx="3" ry="3" width="190" height="21" />
          <rect x="0" y="60" rx="3" ry="3" width="410" height="15" />
          <rect x="0" y="78" rx="3" ry="3" width="380" height="15" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="15" />
        </ContentLoader>
      </>
    )
  }
  return (
    <>
      {/* <!-- Navigation --> */}
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="index.html">Start Bootstrap</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
        <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="post.html">Sample Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Page Header --> */}
      <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Clean Blog</h1>
                <span class="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Main Content --> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            {articles == '' ? (<Loading />) : articles.map((item) => {
              return (<>
                <div class="post-preview">
                  <a href="post.html">
                    <h2 class="post-title">
                      {item.title}
                    </h2>
                    <h3 class="post-subtitle">
                      {item.body}
                    </h3>
                  </a>
                  <p class="post-meta">Posted by
                <a href="#"> {item.userId == 1 ? 'Tova' : item.userId == 2 ? 'Irvan' : 'Anonymous'} </a></p>
                </div>
                <hr />
              </>)
            })}
            {/* <!-- Pager --> */}
            <div class="clearfix">
              <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* <!-- Footer --> */}
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <ul class="list-inline text-center">
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p class="copyright text-muted">Copyright &copy; Your Website 2020</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
