import { collection, getDoc, query, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
    try {
        const pdfcvRef = doc(db, 'pdfcv', 'ceDTPlK9QDGBlSDyKhyJ'); // Reemplaza 'ID_DEL_DOCUMENTO_ESPECIFICO' con el ID real del documento
        const pdfcvSnapshot = await getDoc(pdfcvRef);

        if (pdfcvSnapshot.exists()) {
            const pdfcvData = {
                ...pdfcvSnapshot.data(),
                id: pdfcvSnapshot.id
            };
            return NextResponse.json(pdfcvData, { status: 200 });
        } else {
            return NextResponse.json({ error: 'El documento no fue encontrado' }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
};
