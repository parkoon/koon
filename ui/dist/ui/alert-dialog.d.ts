import React from 'react';
import { ButtonProps } from './button';
type AlertDialogProps = {
    title?: string;
    description?: string | React.ReactNode;
    open?: boolean;
    onOk?(): void;
    onCancel?(): void;
    okText?: string;
    cancelText?: string;
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    hideCancelButton?: boolean;
    classNames?: {
        title?: string;
        description?: string;
    };
};
declare const AlertDialog: ({ title, description, open, onOk, onCancel, classNames, okButtonProps, cancelButtonProps, hideCancelButton, okText, cancelText, }: AlertDialogProps) => React.JSX.Element;
export default AlertDialog;
