const Tabs = function (props) {
  return <nav className="tabs">{props.children}</nav>;
};

Tabs.Item = function (props) {
  return (
    <a
      href={`#${props.target}`}
      className={`tabs-item ${
        props.target === props.activeTab ? "active" : ""
      }`}
      onClick={(e) => {
        props.onClick(props.target);
      }}
    >
      {props.children}
    </a>
  );
};

export default Tabs;
