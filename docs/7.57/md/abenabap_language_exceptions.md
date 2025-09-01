  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exceptions in ABAP Statements, ABENABAP_LANGUAGE_EXCEPTIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exceptions in ABAP Statements

Error situations that occur during the execution of an ABAP statement raise exceptions. These exceptions are fully integrated into the [exception concept](javascript:call_link\('abenabap_exceptions.htm'\)) and are raised by the runtime framework. Two types of exception exist:

-   Catchable exceptions, which are based on [predefined](javascript:call_link\('abenabap_exception_classes.htm'\)) [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry").
-   Uncatchable exceptions, which directly produce [runtime errors](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry").

Each catchable exception is assigned to a runtime error that terminates the program if the exception is neither caught by using the [CATCH](javascript:call_link\('abapcatch_try.htm'\)) statement with a suitable exception class nor propagated to a caller. The keyword documentation lists the type of exceptions that can be raised for each statement.

For reasons of backward compatibility, catchable exceptions raised by many ABAP statements can be caught by using

-   [TRY ... CATCH ...  ENDTRY](javascript:call_link\('abaptry.htm'\))
    
    This is the recommended way.
    
-   [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](javascript:call_link\('abapcatch_sys.htm'\))
    
    This statement is obsolete. To use it, the runtime error assigned to the exception class must be [catchable](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") itself.
    

Within processing blocks, the two mechanisms prevent each other from handling exceptions. It is advisable to catch an exception between TRY ... ENDTRY using CATCH or to use the RAISING addition in the definition of the interface to propagate it to the caller. Catching exceptions using CATCH SYSTEM-EXCEPTIONS is no longer recommended.

Example

Unhandled exception.

The following program lines produce the runtime error COMPUTE\_INT\_ZERODIVIDE because division by zero is invalid and this exception situation is not handled:

DATA result TYPE i.
result = 1 / 0.

Example

Handling exceptions using exception classes.

The above exception is represented by the exception class CX\_SY\_ZERODIVIDE, which is a subclass of the exception class CX\_SY\_ARITHMETIC\_ERROR. Therefore, the exception can be handled as follows (the ERR\_TEXT variable is passed the text Division by zero.):

DATA myref TYPE REF TO cx\_sy\_arithmetic\_error.
DATA err\_text TYPE string.
DATA result TYPE i.
TRY.
    result = 1 / 0.
  CATCH cx\_sy\_arithmetic\_error INTO myref.
    err\_text = myref->get\_text( ).
ENDTRY.

Example

Handling exceptions as catchable runtime errors.

Since the runtime error COMPUTE\_INT\_ZERODIVIDE is catchable and assigned to the [exception group](javascript:call_link\('abenexception_group_glosry.htm'\) "Glossary Entry") ARITHMETIC\_ERRORS, it can also be handled using the obsolete statement [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)).

DATA result TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4.
  result = 1 / 0.
ENDCATCH.
IF sy-subrc = 4.
  ...
ENDIF.

Continue
[Exception Classes for ABAP Statements](javascript:call_link\('abenabap_exception_classes.htm'\))