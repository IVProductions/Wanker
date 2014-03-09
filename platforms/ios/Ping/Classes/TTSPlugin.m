//
//  TTSPlugin.m
//  Ping
//
//  Created by Simon Hordvik on 3/7/14.
//
//

#import "TTSPlugin.h"
#import <AVFoundation/AVFoundation.h>

@implementation TTSPlugin

-(void)speakStuff:(CDVInvokedUrlCommand *)speakString {
    CDVPluginResult* pluginResult = nil;
    NSString* textToBeSpoken = [speakString.arguments objectAtIndex:0];  //take the incoming speakString object and extract the string
    if (textToBeSpoken != nil && [textToBeSpoken length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:textToBeSpoken];
        [self addAlertView:@"success!"];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:speakString.callbackId];
    }
    else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        [self addAlertView:@"failure! Input string is empty"];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:speakString.callbackId];
    }
    AVSpeechSynthesizer *synthesizer = [[AVSpeechSynthesizer alloc]init];
    AVSpeechUtterance *utterance = [AVSpeechUtterance speechUtteranceWithString:textToBeSpoken];
    [utterance setRate:0.2f];
    utterance.voice = [AVSpeechSynthesisVoice voiceWithLanguage:@"no-NO"];
    [synthesizer speakUtterance:utterance];
}

-(void)addAlertView:(NSString *)message{
    UIAlertView *alertView = [[UIAlertView alloc]initWithTitle:
                              @"Title" message:message delegate:self
                                             cancelButtonTitle:@"Cancel" otherButtonTitles:@"Ok", nil];
    [alertView show];
}


#pragma mark - Alert view delegate
- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:
(NSInteger)buttonIndex{
    switch (buttonIndex) {
        case 0:
            NSLog(@"Cancel button clicked");
            break;
        case 1:
            NSLog(@"OK button clicked");
            break;
            
        default:
            break;
    }
}

@end
