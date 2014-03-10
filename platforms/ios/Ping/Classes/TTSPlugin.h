//
//  TTSPlugin.h
//  Ping
//
//  Created by Simon Hordvik on 3/7/14.
//
//

#import <Cordova/CDV.h>

@interface TTSPlugin : CDVPlugin

-(void)speakStuff:(CDVInvokedUrlCommand *)speakString;

@end
