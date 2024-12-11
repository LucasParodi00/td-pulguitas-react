import React, { useState, useRef } from 'react';
import { FileUp, X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

export const ImagenProducto = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const fileInputRef = useRef(null);

    const { setValue } = useFormContext();

    setValue('imagenes', images);
    const handleFileChange = (event) => {
        setError('');
        const newFiles = Array.from(event.target.files);

        const totalImages = images.length + newFiles.length;
        if (totalImages > 10) {
            setError('Maximo 10 imagenes');
        }
        if (totalImages < 2) {
            setError('Minimo 2 imagenes');
        }

        const validFiles = newFiles.filter(file => {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            const maxSize = 5 * 1024 * 1024;

            if (!validTypes.includes(file.type)) {
                setError(`Archivo no valido ${file.name}`)
                return false;
            }

            if (file.size > maxSize) {
                setError(`Archivo demasiado grande: ${file.name}. Máximo 5MB`);
                return false;
            }
            return true;
        });

        const newImageFiles = validFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setImages(prev => [...prev, ...newImageFiles]);
    };

    const removeImage = (indexToRemove) => {
        const updatedImages = images.filter((_, index) => index !== indexToRemove);
        setImages(updatedImages);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
                onClick={triggerFileInput}
            >
                <input
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
                <FileUp className="mx-auto mb-4 text-gray-500" size={48} />
                <p className="text-gray-600">Arrastra y suelta tus imágenes aquí o haz clic para seleccionar</p>
                <p className="text-sm text-gray-500 mt-2">(2-10 imágenes, máximo 5MB por imagen)</p>
            </div>

            {images.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-4">
                    {images.map((imageFile, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={imageFile.preview}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <p className='text-white bg-red-600 mt-2 text-center'>{error}</p>
        </div>
    );
};