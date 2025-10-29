// 'use client';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center justify-items-center h-screen p-8">
            <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
            <p className="mt-4 text-gray-600">
                Lo sentimos, la página que estás buscando no existe.
            </p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">
                Volver a la página de inicio
            </Link>
        </div>
    );
}
