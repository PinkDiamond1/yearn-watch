import	React, {ReactElement}						from	'react';
import	* as utils									from	'utils';
import	IconLinkOut									from	'@icons/IconLinkOut';
import	IconCopy									from	'@icons/IconCopy';

export type	TTxHashWithActions = {
	txHash: string,
	explorer: string,
	className?: string
};
function	TxHashWithActions({
	txHash,
	explorer = 'https://etherscan.io',
	className = 'font-mono font-bold text-left text-typo-primary'
}: TTxHashWithActions): ReactElement {
	return (
		<span className={'flex flex-row items-center'}>
			<p className={className}>{utils.truncateHex(txHash, 5)}</p>
			<div
				onClick={(): void => utils.copyToClipboard(txHash)}
				className={'px-4 cursor-copy'}>
				<IconCopy className={'w-4 h-4 text-primary hover:text-primary-variant transition-colors'} />
			</div>
			<a
				href={`${explorer}/tx/${txHash}`}
				target={'_blank'}
				rel={'noreferrer'}
				className={'cursor-alias'}>
				<IconLinkOut className={'w-4 h-4 text-primary hover:text-primary-variant transition-colors'} />
			</a>
		</span>
	);
}

export default TxHashWithActions;