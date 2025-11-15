export default function PrivacyBanner() {
    return (
        <div className="rounded-lg border border-success-200 bg-success-50 p-3 dark:border-success-800 dark:bg-success-900/20">
            <p className="text-sm text-success-700 dark:text-success-300">
                🔒 All data is processed locally in your browser.
                Nothing is sent to external servers.
            </p>
        </div>
    );
}