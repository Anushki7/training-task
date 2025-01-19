import clsx from "clsx";
import styles from './modal.module.scss';
import { ModalProps } from "./types";

export function Modal({ onClose, children, className }: ModalProps) {
	return (
        <div
          className={clsx(styles.overlay, className)}
          onClick={onClose} // Закрытие при клике вне модала
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()} // Предотвращение закрытия при клике внутри модала
            role="document"
          >
            <button className={clsx(styles.icon)} onClick={onClose} aria-label="Close modal">
            </button>
            {children}
          </div>
        </div>
      );
}