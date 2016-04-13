package com.config;

import javax.faces.context.ExceptionHandler;
import javax.faces.context.ExceptionHandlerFactory;

/**
 * @author max.yurin
 */
public class AppExceptionHandlerFactory extends ExceptionHandlerFactory {
    private ExceptionHandlerFactory factory;

    public AppExceptionHandlerFactory(ExceptionHandlerFactory factory) {
        this.factory = factory;
    }

    @Override
    public ExceptionHandler getExceptionHandler() {
        return new AppExceptionHandler(factory.getExceptionHandler());
    }
}
