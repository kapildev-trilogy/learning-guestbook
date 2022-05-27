#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { LearningGuestbookStack } from '../lib/learning-guestbook-stack';

const app = new cdk.App();
new LearningGuestbookStack(app, 'LearningGuestbookStack');
