package com.xak.bodyweightanalysis.exception;

public class NotAuthorisedException extends Exception {	

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NotAuthorisedException() {
		super();
	}
	
	public NotAuthorisedException(String message) {
		super(message);
	}
	
	public NotAuthorisedException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public NotAuthorisedException(Throwable cause) {
		super(cause);
	}
	
	public NotAuthorisedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
