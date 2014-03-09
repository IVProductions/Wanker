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
}

@end
