enum Status {
	Initialization = '⏳ Initializing ...',
	AddTransaction = '💸 Preparing ...',
	ReadyToMine = '✅ Ready ...',
	MineInProgress = '⏳ Finishing ...'
}

const statusEl = document.getElementById('status') as HTMLParagraphElement;

(async function main(): Promise<void> {
	// Subscribe to events.
	statusEl.textContent = Status.Initialization;
	delay(1);
	statusEl.textContent = Status.ReadyToMine;
	delay(1);
	statusEl.textContent = Status.AddTransaction;
});

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
