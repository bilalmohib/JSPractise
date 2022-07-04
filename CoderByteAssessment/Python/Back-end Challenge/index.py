# Back-end Challenge
# In the Python file, write a program to access the contents of the bucket 
# coderbytechallengesandbox. In there there might be multiple files, but your program 
# should find the file with the prefix __cb__, and then output the contents of that file. 
# You should use the boto3 module to solve this challenge.

# You do not need any access keys to access the bucket because it is public. 
# This post might help you with how to access the bucket.

# Example Output
# contents of some file

################ Code starts here ####################
import requests
import boto3
from botocore.handlers import disable_signing

# s3 = boto3.client('s3')
# print(s3)

# s3 = boto3.resource('s3')
# s3.meta.client.meta.events.register('choose-signer.s3.*', disable_signing)
# bucket = s3.Bucket('coderbytechallengesandbox')
# # Iterates through all the objects, doing the pagination for you. Each obj
# # is an ObjectSummary, so it doesn't contain the body. You'll need to call
# # get to get the whole body.
# for obj in bucket.objects.all():
#     key = obj.key
#     body = obj.get()['Body'].read()
#     print(body)

# def get_file_contents(bucket, prefix):
#     s3 = boto3.resource('s3')
#     s3.meta.client.meta.events.register('choose-signer.s3.*', disable_signing)
#     bucket = s3.Bucket(bucket)
#     for obj in bucket.objects.filter(Prefix=prefix):
#         key = obj.key
#         body = obj.get()['Body'].read()
#         print(body)
#         return body

# get_file_contents('coderbytechallengesandbox', '__cb__')

from botocore import UNSIGNED
from botocore.client import Config

def convertBytesToString(bytes):
    return bytes.decode('utf-8')

def get_public_s3_file_contents(bucket, prefix):
    s3 = boto3.resource('s3', config=Config(signature_version=UNSIGNED))
    s3.meta.client.meta.events.register('choose-signer.s3.*', disable_signing)
    bucket = s3.Bucket(bucket)
    for obj in bucket.objects.filter(Prefix=prefix):
        key = obj.key
        # body = obj.get()['Body'].read()
        # output=convertBytesToString(body)
        print(key)
        # return body

get_public_s3_file_contents('coderbytechallengesandbox', '__cb__')

# s3 = boto3.resource('s3')
# bucket='coderbytechallengesandbox'
# result = s3.list_objects(Bucket = bucket, Prefix='__cb__')
# print(result)
# for o in result.get('Contents'):
#     data = s3.get_object(Bucket=bucket, Key=o.get('Key'))
#     contents = data['Body'].read()
#     print(contents.decode("utf-8"))
