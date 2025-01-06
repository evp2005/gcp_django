import html
import json

import requests
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
# def chat_api(request):
#     if request.method == 'POST':
#         try:
#             # Obtener el mensaje del usuario
#             data = json.loads(request.body)
#             user_message = data.get('message')
#             if not user_message:
#                 return HttpResponse("El mensaje está vacío", status=400)

#             # Consumir la API externa
#             api_url = 'https://testingapp-387318956108.us-central1.run.app/respuesta'
#             payload = {'prompt': user_message}
#             response = requests.post(api_url, json=payload)

#             # Limpiar la respuesta
#             response_text = response.text.strip()

#             # Verificar si la respuesta es válida
#             if not response_text:
#                 return HttpResponse("No se recibió una respuesta válida.", status=500)

#             # Retornar la respuesta como texto plano
#             return HttpResponse(response_text, content_type='text/plain', status=200)

#         except json.JSONDecodeError:
#             return HttpResponse("Formato JSON inválido", status=400)
#         except Exception as e:
#             return HttpResponse(f"Error: {str(e)}", status=500)

#     return HttpResponse("Método no permitido", status=405)



# @csrf_exempt
# def chat_api(request):
#     if request.method == 'POST':
#         try:
#             # Obtener el mensaje del usuario
#             data = json.loads(request.body)
#             user_message = data.get('message', '')

#             # Validar que el mensaje no esté vacío
#             if not user_message:
#                 return JsonResponse({'error': 'El mensaje del usuario está vacío'}, status=400)

#             # Consumir la API externa
#             api_url = 'https://replikers-922839482240.us-central1.run.app/query'
#             payload = {"input_text": user_message}
#             response = requests.post(api_url, json=payload)

#             # Verificar si la respuesta es válida
#             if response.status_code == 200:
#                 api_response = response.text
#             else:
#                 api_response = f"Error en la API externa: {response.status_code} - {response.text}"

#             # Retornar la respuesta al frontend
#             return JsonResponse({'response': api_response}, status=200)

#         except Exception as e:
#             print(f"Excepción capturada: {e}")
#             return JsonResponse({'error': f"Excepción interna: {str(e)}"}, status=500)

#     return JsonResponse({'error': 'Método no permitido'}, status=405)


# Create your views here.
@csrf_exempt
def chat_api(request):
    if request.method == 'POST':
        try:
            # Obtener el mensaje del usuario
            data = json.loads(request.body)
            user_message = data.get('message', '')

            # Validar que el mensaje no esté vacío
            if not user_message:
                return JsonResponse({'error': 'El mensaje del usuario está vacío'}, status=400)

            # Consumir la API externa
            api_url = 'https://agenterepliker25-922839482240.us-central1.run.app/ask'
            payload = {"pregunta": user_message}
            response = requests.post(api_url, json=payload)

            # Verificar si la respuesta es válida
            if response.status_code == 200:
                # Decodificar la respuesta en formato legible
                api_response = response.json()  # Convertir la respuesta a JSON

                # Obtener el valor de 'respuesta'
                message = api_response.get('respuesta', '')

                # Asegurarse de que el texto se procese correctamente
                api_response = message.encode('utf-8').decode('utf-8')
            else:
                api_response = f"Error en la API externa: {response.status_code} - {response.text}"

            # Retornar solo el texto de la respuesta
            return JsonResponse({'response': api_response}, status=200)

        except Exception as e:
            print(f"Excepción capturada: {e}")
            return JsonResponse({'error': f"Excepción interna: {str(e)}"}, status=500)

    return JsonResponse({'error': 'Método no permitido'}, status=405)




def index(request):
    return render(request, 'index.html')

def chat(request):
    return render(request, 'chat.html')

def replikers(request):
    return render(request, 'replikers.html')