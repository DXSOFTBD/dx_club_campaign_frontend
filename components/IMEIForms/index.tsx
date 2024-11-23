import { useState } from 'react';
import axios from '@/axios/config';

export function ImeiForm() {
  const [imei, setImei] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('/api/check-rewards', { imei });
      // Handle success
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={imei}
          onChange={(e) => setImei(e.target.value)}
          placeholder="Enter IMEI number"
          className="w-full px-4 py-3 text-gray-900 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          maxLength={15}
          pattern="\d*"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        {loading ? 'Checking...' : 'Check Rewards'}
      </button>
    </form>
  );
}