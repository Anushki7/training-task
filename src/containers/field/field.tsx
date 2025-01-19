import clsx from "clsx";
import { FunctionComponent} from "react";
import { FieldProps } from "./types";

export const Field: FunctionComponent<FieldProps> = ({
 className,
 label,
 children
}: FieldProps) => {
	return (
		<div className={clsx(className)}>
		  {label && <label className={clsx("label")}>{label}</label>}
		  <div className={clsx("input-container")}>{children}</div>
		</div>
	  );	
};
