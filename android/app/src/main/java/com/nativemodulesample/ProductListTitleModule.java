package com.nativemodulesample;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ProductListTitleModule extends ReactContextBaseJavaModule {

    ProductListTitleModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ProductListTitleModule";
    }

    @ReactMethod
    public void getTitle(Promise promise) {
        Log.d("DSLogs","GetTitle method Called");
        promise.resolve("Sample Title: Android");
    }
}
