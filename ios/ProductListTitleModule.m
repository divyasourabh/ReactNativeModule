#import "ProductListTitleModule.h"
#import <React/RCTLog.h>

@implementation ProductListTitleModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(ProductListTitleModule)


RCT_EXPORT_METHOD(getTitle: (RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject){
  NSString *title = @"Sample Title iOS";
  
  resolve(title);
}

@end

