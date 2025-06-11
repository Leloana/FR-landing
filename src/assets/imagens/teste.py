from PIL import Image
import os

PASTA_IMAGENS = "geral"
PASTA_SAIDA = "imagens_otimizadas_webp"
QUALIDADE = 85  # Qualidade entre 0 e 100

# Criar a pasta de saída
os.makedirs(PASTA_SAIDA, exist_ok=True)

def converter_para_webp(caminho_img, caminho_saida):
    try:
        with Image.open(caminho_img) as img:
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGBA")  # Mantém transparência
            else:
                img = img.convert("RGB")

            # Reduz largura se for muito grande
            largura_max = 1920
            if img.width > largura_max:
                nova_altura = int((largura_max / img.width) * img.height)
                img = img.resize((largura_max, nova_altura), Image.Resampling.LANCZOS)

            nome_base = os.path.splitext(os.path.basename(caminho_img))[0]
            caminho_final = os.path.join(caminho_saida, f"{nome_base}.webp")
            img.save(caminho_final, "WEBP", quality=QUALIDADE, optimize=True)
            print(f"✔ Convertida: {caminho_final}")
    except Exception as e:
        print(f"❌ Erro com {caminho_img}: {e}")

# Processar todas as imagens da pasta
for arquivo in os.listdir(PASTA_IMAGENS):
    if arquivo.lower().endswith((".jpg", ".jpeg", ".png")):
        caminho = os.path.join(PASTA_IMAGENS, arquivo)
        converter_para_webp(caminho, PASTA_SAIDA)
