class SocialMediaComponents extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <i className={`fa fa-${this.props.iconPic}`}></i>
          </div>
          <span>{this.props.titleText}</span>
        </div>
      </div>
    );
  }
}
