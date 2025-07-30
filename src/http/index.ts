import type IPlanos from "@/interfaces/IPlanos";


async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterPlanos() {
  return obterDadosURL<IPlanos[]>('https://rousemberg.github.io/Yoods-vendas/planos.json');
}
