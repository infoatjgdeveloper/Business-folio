
import React, { useState, useRef } from 'react';
import { KnowledgeFile } from '../../types';
import Modal from '../Modal';
import { PlusIcon, XIcon } from '../Icons';

interface KnowledgeBaseManagerProps {
    isOpen: boolean;
    workspaceId: string;
    initialFiles: KnowledgeFile[];
    onSave: (updatedFiles: KnowledgeFile[]) => void;
    onClose: () => void;
}

const KnowledgeBaseManager: React.FC<KnowledgeBaseManagerProps> = ({
    isOpen,
    workspaceId,
    initialFiles,
    onSave,
    onClose,
}) => {
    const [files, setFiles] = useState<KnowledgeFile[]>(initialFiles);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles) return;

        Array.from(selectedFiles).forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target?.result as string;
                const newFile: KnowledgeFile = {
                    id: `kf_${Date.now()}_${Math.random()}`,
                    name: file.name,
                    content,
                    workspaceId,
                };
                setFiles(prev => [...prev, newFile]);
            };
            reader.readAsText(file);
        });
    };

    const removeFile = (id: string) => {
        setFiles(files.filter(f => f.id !== id));
    };

    const handleSave = () => {
        onSave(files);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Knowledge Base Manager" size="lg">
            <div className="space-y-4">
                <p className="text-sm text-on-surface/80">
                    Upload documents to provide context for the AI. The content of these files will be used when "Use Knowledge Base" is enabled for a chat.
                </p>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    multiple
                    accept=".txt,.md,.json,.csv"
                />
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 border-2 border-dashed border-border rounded-md hover:border-primary transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Upload Files</span>
                </button>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                    {files.length > 0 ? (
                        files.map(file => (
                            <div key={file.id} className="flex items-center justify-between bg-secondary-container p-2 rounded-md">
                                <span className="text-sm font-medium text-on-secondary-container truncate">{file.name}</span>
                                <button onClick={() => removeFile(file.id)} className="p-1 text-on-secondary-container/60 hover:text-red-500 rounded-full">
                                    <XIcon className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-sm text-on-surface/60 py-4">No files uploaded yet.</p>
                    )}
                </div>
                 <div className="flex justify-end space-x-3 pt-4">
                    <button onClick={onClose} className="px-4 py-2 rounded-md bg-secondary-container text-on-secondary-container hover:bg-border transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-md bg-primary text-on-primary hover:bg-primary/90 transition-colors">
                        Save & Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default KnowledgeBaseManager;
