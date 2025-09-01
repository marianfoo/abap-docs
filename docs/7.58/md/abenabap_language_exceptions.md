---
title: "Exceptions in ABAP Statements"
description: |
  Error situations that occur during the execution of an ABAP statement raise exceptions. These exceptions are fully integrated into the exception concept(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) and are raised by the runtime framework. Two types of excepti
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm"
abapFile: "abenabap_language_exceptions.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "exception-handling", "abenabap", "language", "exceptions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%20in%20ABAP%20Statements%2C%20ABENABAP_LANGUAGE_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions in ABAP Statements

Error situations that occur during the execution of an ABAP statement raise exceptions. These exceptions are fully integrated into the [exception concept](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) and are raised by the runtime framework. Two types of exception exist:

-   Catchable exceptions, which are based on [predefined](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm) [exception classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_class_glosry.htm "Glossary Entry").
-   Uncatchable exceptions, which directly produce [runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_error_glosry.htm "Glossary Entry").

Each catchable exception is assigned to a runtime error that terminates the program if the exception is neither caught by using the [CATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_try.htm) statement with a suitable exception class nor propagated to a caller. The keyword documentation lists the type of exceptions that can be raised for each statement.

For reasons of backward compatibility, catchable exceptions raised by many ABAP statements can be caught by using

-   [TRY ... CATCH ...  ENDTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm)
    
    This is the recommended way.
    
-   [CATCH SYSTEM-EXCEPTIONS ... ENDCATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm)
    
    This statement is obsolete. To use it, the runtime error assigned to the exception class must be [catchable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") itself.
    

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

Since the runtime error COMPUTE\_INT\_ZERODIVIDE is catchable and assigned to the [exception group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_group_glosry.htm "Glossary Entry") ARITHMETIC\_ERRORS, it can also be handled using the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm).

DATA result TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4.
  result = 1 / 0.
ENDCATCH.
IF sy-subrc = 4.
  ...
ENDIF.

Continue
[Exception Classes for ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm)