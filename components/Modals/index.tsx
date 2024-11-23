import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon, GiftTopIcon } from '@heroicons/react/24/solid'
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  instruction?: string;
}

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  instruction?: string;
}

export const SuccessModal = ({ isOpen, onClose, message, instruction }: SuccessModalProps) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <GiftTopIcon className="h-10 w-10 text-blue-500" />
          </div>
          
          <div className="flex-1">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              Congratulations!
            </Dialog.Title>
            
            <div className="mt-2 space-y-4">
              <p className="text-sm text-gray-500">{message}</p>
              {instruction && (
                <p className="text-sm text-gray-500">{instruction}</p>
              )}
            </div>
            
            <button
              onClick={onClose}
              className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
);

export const WarningModal = ({ isOpen, onClose, message, instruction }: WarningModalProps) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
          </div>
          
          <div className="flex-1">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              Warning!
            </Dialog.Title>
            
            <div className="mt-2 space-y-4">
              <p className="text-sm text-gray-500">{message}</p>
              {instruction && (
                <p className="text-sm text-gray-500">{instruction}</p>
              )}
            </div>
            
            <button
              onClick={onClose}
              className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
);