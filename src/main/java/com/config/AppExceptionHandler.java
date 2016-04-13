package com.config;

import javax.faces.FacesException;
import javax.faces.context.ExceptionHandler;
import javax.faces.context.ExceptionHandlerWrapper;
import javax.faces.context.FacesContext;
import javax.faces.event.ExceptionQueuedEvent;
import java.util.Iterator;

/**
 * @author max.yurin
 */
public class AppExceptionHandler extends ExceptionHandlerWrapper {
    private ExceptionHandler wrapped;

    public AppExceptionHandler(ExceptionHandler wrapped) {
        this.wrapped = wrapped;
    }

    @Override
    public void handle() throws FacesException {
        FacesContext facesContext = FacesContext.getCurrentInstance();

        for (Iterator<ExceptionQueuedEvent> iter = getUnhandledExceptionQueuedEvents().iterator(); iter.hasNext();) {
            Throwable exception = iter.next().getContext().getException(); // There it is!

            // Now do your thing with it. This example implementation merely prints the stack trace.
            exception.printStackTrace();
        }

        getWrapped().handle();
    }

    @Override
    public javax.faces.context.ExceptionHandler getWrapped() {
        return wrapped;
    }
}
