import React from "react";
import { Link } from "react-router-dom";

type AppLinkProps = {
  url: string;
  label: string;
};

export const AppLink: React.FC<AppLinkProps> = ({ url, label }) => {
  return <Link to={url}>{label}</Link>;
};
