import clsx from 'clsx';
import styles from './Section.module.scss';

import { SectionProps } from './types';
import { Title } from '@/components/typography/typography';


export function Section({
	className,
	containerClassName,
	variant = 'content',
	title,
	children,
	image,
	renderAction,
	HeaderTag = "h3"
}: SectionProps) {
	return (
		<section
			className={clsx(styles.section, styles[variant], className)}
		>
			<div className={clsx(styles.container, containerClassName)}>
				{image && <div className={styles.image}>{image}</div>}
				<div className={styles.content}>
					{title && <Title className={styles.title} Tag={HeaderTag} value={title}></Title>}
					{children}
					{renderAction && (
						<div className={styles.actionWrapper}>{renderAction()}</div>
					)}
				</div>
			</div>
		</section>
	);
}