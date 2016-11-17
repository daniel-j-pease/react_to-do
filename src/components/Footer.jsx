import React, {Components} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-copyright">
          <div className="container">
            <p>Made with <span className="glyphicon glyphicon-heart"></span> by <a href="https://generalassemb.ly/instructors/jason-seminara/6831">Jason Seminara</a> in 2016 for <span class="gaLogo"></span> in New York City.</p>
          </div>
        </div>
      </footer>
    )
  }
}
