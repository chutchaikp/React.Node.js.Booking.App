import './mailList.scss';
const MailList = () => {
  return (
    <div className="mailList">
      <div className="title">Save time, save money!</div>
      <span className="desc">Sign up and we'll send the best deals to you</span>
      <div className="inputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default MailList;
