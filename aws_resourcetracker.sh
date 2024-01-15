#!/bin/bash

#############
#Author:Bharath
#date:8/1/24
#version: v1
#this script will report the aws resource usage
############
#AWS S3
#AWS LAMBDA
#AWS EC2
#AWS IAM

set -x


#list ec2 instance
echo "PRINT THE EC2 INSTANCES"
aws ec2 describe-instances | jq '.Reservations[].Instances[].InstanceId' >resource.txt

#list lambda 
echo"PRINT THE LAMBDA "
aws lambda list-functions >>resource.txt

#list iam 
echo"PRINT THE IAM USERS"
aws iam list-users>>resource.txt

#list s3 bucket
echo "PRINT THE S3 BUCKETS"
aws s3 ls>>resource.txt
