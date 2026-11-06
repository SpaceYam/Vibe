
"use strict";

window.LessonContent = window.LessonContent || {};
LessonContent.transformer = [
{
concepts:[
"토큰은 언어 모델이 입력을 처리하는 기본 단위다. 단어 전체, 일부 문자열 또는 기호가 토큰이 될 수 있다.",
"토크나이저는 텍스트를 토큰 ID의 시퀀스로 변환한다. 모델 입력 길이와 API 사용량은 토큰 수에 영향을 받는다.",
"한국어는 띄어쓰기와 형태소 특성 때문에 같은 글자 수라도 영어와 토큰 수가 다를 수 있다."
],
example:`text = "AI와 함께 개발하기"
tokens = tokenizer.encode(text)
print(tokens)
print(len(tokens))`,
practice:"같은 의미의 영어와 한국어 문장을 토큰화해 길이를 비교한다.",
challenge:"긴 문서를 모델 입력 한도에 맞게 분할하는 전략을 설계한다.",
checkpoint:"문자 수와 토큰 수가 항상 일치하지 않는 이유는?"
},
{
concepts:[
"Embedding은 토큰이나 문장을 고차원 공간의 벡터로 표현한다.",
"학습된 임베딩은 의미적으로 유사한 표현이 벡터 공간에서 가까워지는 특성을 가질 수 있다.",
"Cosine Similarity는 벡터의 방향을 기준으로 유사도를 측정한다. RAG의 검색 단계에서 활용된다."
],
example:`from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

a = np.array([[1, 0, 1]])
b = np.array([[1, 1, 0]])

print(cosine_similarity(a, b))`,
practice:"세 개의 문장을 임베딩하고 유사도 순위를 확인한다.",
challenge:"키워드 검색과 벡터 검색의 장단점을 동일한 문서로 비교한다.",
checkpoint:"벡터의 크기와 방향은 각각 어떤 의미를 가질 수 있는가?"
},
{
concepts:[
"Self-Attention은 각 토큰이 문맥 내 다른 토큰을 얼마나 참고할지 계산한다.",
"Query는 찾고 싶은 정보, Key는 비교 대상, Value는 실제 전달할 정보로 이해할 수 있다.",
"Attention Score는 Query와 Key의 유사도를 계산하고 Softmax로 정규화한 뒤 Value를 가중합한다."
],
example:`import torch
import torch.nn.functional as F

scores = torch.tensor([[1.0, 2.0, 3.0]])
weights = F.softmax(scores, dim=-1)
print(weights)
print(weights.sum())`,
practice:"문장의 특정 단어가 앞뒤 문맥에 따라 의미가 달라지는 사례를 찾아 Attention 관점에서 설명한다.",
challenge:"Attention이 긴 문맥을 처리할 때 가지는 계산 비용 문제를 조사한다.",
checkpoint:"Attention에서 Softmax를 사용하는 이유는?"
},
{
concepts:[
"Transformer는 RNN 없이 Attention 중심으로 시퀀스를 처리하는 아키텍처다.",
"Encoder는 입력 표현을 만들고 Decoder는 이전 토큰을 바탕으로 다음 토큰을 생성한다. 모델 종류에 따라 구조가 달라진다.",
"Positional Encoding은 토큰 순서 정보를 제공한다. Residual Connection과 Layer Normalization은 학습 안정성에 기여한다."
],
example:`# Transformer 구성 개념
components = [
 "Token Embedding",
 "Positional Encoding",
 "Multi-Head Attention",
 "Feed Forward",
 "Residual Connection",
 "Layer Normalization"
]
print(components)`,
practice:"Encoder-only, Decoder-only, Encoder-Decoder 모델의 차이를 정리한다.",
challenge:"GPT 계열과 BERT 계열이 서로 다른 작업에 적합한 이유를 설명한다.",
checkpoint:"Attention만으로 순서 정보가 충분하지 않은 이유는?"
},
{
concepts:[
"LLM 추론은 입력 문맥을 바탕으로 다음 토큰의 확률을 계산하고 반복적으로 토큰을 생성하는 과정이다.",
"Greedy Decoding은 가장 높은 확률의 토큰을 선택한다. Sampling은 확률 분포에 따라 다양한 출력을 생성한다.",
"Temperature, Top-k, Top-p는 생성 다양성에 영향을 준다. 출력 길이와 중단 조건도 서비스 품질에 영향을 준다."
],
example:`import random

def sample(tokens):
    return random.choice(tokens)

print(sample(["A", "B", "C"]))`,
practice:"동일한 프롬프트에서 생성 설정을 바꾸고 응답의 다양성과 일관성을 비교한다.",
challenge:"정확성이 중요한 작업과 창의성이 중요한 작업에 적합한 생성 설정을 설계한다.",
checkpoint:"Temperature를 높이면 일반적으로 출력에 어떤 변화가 생기는가?"
}
];
