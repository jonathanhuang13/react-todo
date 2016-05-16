module.exports = {
  Col: React.createClass({
    render: function() {
      { className, size, prefix } = this.props;
      prefix ||= 'xs';
      k = "#{className || ''} col-#{prefix}-#{size}";
      return (
        <div {...this.props} className={k}>
          {this.props.children}
        </div>
      );
    }
  });

  Row: React.createClass({
    render: function() {
      k = "#{this.props.className || ''} row"
      return (
        <div {...this.props} className={k}>
          {this.props.children}
        <div>
      );
    }
  });

  Button: React.createClass({
    render: function() {
      { className, size, type } = this.props;
      k = "#{className || ''} btn btn-#{type || 'default'}";

      if(size)
        k += " btn-#{size}";

      return (
        <button {...this.props} className={k}>
          {this.props.children}
        </buton>
      );
    }
  });

  Label: React.createClass({
    render: function() {
      { type } = this.props;
      k = "#{className || ''} label label-#{type || 'default'}";

      return (
        <span {...this.props} className={k}>
          {this.props.children}
        </span>
      )
    }
  });
};
