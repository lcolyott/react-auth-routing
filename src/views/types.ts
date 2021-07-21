import { RouteComponentProps } from "react-router-dom";

export interface BaseViewComponentProps {
    component?: React.ComponentType<BaseViewComponentProps>;
};

export type ViewProps = BaseViewComponentProps & RouteComponentProps;