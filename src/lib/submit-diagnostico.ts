export interface DiagnosticoResposta {
  pergunta: string;
  resposta: string;
}

export interface DiagnosticoPayload {
  empresa: string;
  email: string;
  respostas: DiagnosticoResposta[];
  metadata: {
    origem: string;
    data_resposta: string;
  };
}

const DEFAULT_API_URL = "http://localhost:3333";

export async function submitDiagnostico(data: DiagnosticoPayload) {
  const apiUrl = process.env.NEXT_PUBLIC_EMAIL_API_URL ?? DEFAULT_API_URL;
  const endpoint = `${apiUrl.replace(/\/$/, "")}/api/diagnostico/submit`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      throw new Error(body?.error ?? `Falha ao enviar diagnóstico (${response.status})`);
    }

    return (await response.json()) as { success: boolean; to?: string };
  } catch (err) {
    if (err instanceof Error) {
      if (err.message.includes("fetch") || err.name === "TypeError") {
        throw new Error("Servidor temporariamente indisponível. Por favor, tente novamente.");
      }
      throw err;
    }
    throw new Error("Não foi possível enviar o diagnóstico. Tente novamente.");
  }
}
