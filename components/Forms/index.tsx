interface ImeiFormProps {
  imei: string;
  setIMEI: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const ImeiForm = ({ imei, setIMEI, onSubmit, isLoading }: ImeiFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        value={imei}
        onChange={(e) => setIMEI(e.target.value)}
        type="text"
        placeholder="Enter your IMEI number"
        className="flex-1 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium
                 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50
                 transition-all duration-200 disabled:opacity-50
                 flex items-center justify-center"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Checking...
          </span>
        ) : (
          'Check IMEI'
        )}
      </button>
    </div>
  </form>
);