const React = require('react');
const Layout = require('./Layout');

function Question({ questions }) {
  return (
    <Layout>
      <div className="Question">
        <form>
          <div className="row mb-3">
            <label htmlFor="inputQuestion" className="col-sm-2 col-form-label">{questions}</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputQuestion" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Question;
