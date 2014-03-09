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
    NSString* textToBeSpoken = [speakString.arguments objectAtIndex:0];  //take the incoming speakString object and extract the string
    AVSpeechSynthesizer *synthesizer = [[AVSpeechSynthesizer alloc]init];
    //var synthesizer = new AVSpeechSynthesizer();
    AVSpeechUtterance *utterance = [AVSpeechUtterance speechUtteranceWithString:textToBeSpoken];
    [utterance setRate:0.2f];
    utterance.voice = [AVSpeechSynthesisVoice voiceWithLanguage:@"no-NO"];
    [synthesizer speakUtterance:utterance];
    [self addAlertView];
}

-(void)addAlertView{
    UIAlertView *alertView = [[UIAlertView alloc]initWithTitle:
                              @"Title" message:@"This is a test alert" delegate:self
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
