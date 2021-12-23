import openai

def runai(data1):
    data0 = "\"\"\"\n"
    data2 = "\n\"\"\""
    data = data0+data1+data2
    openai.api_key = ''
    response = openai.Completion.create(
      engine="davinci-codex",
      prompt=data,
      temperature=0,
      max_tokens=70,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )
    print(response.choices[0]["text"])

