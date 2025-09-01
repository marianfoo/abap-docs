# ABAP ERROR-HANDLING - Complete Reference (7.58)

**Generated**: 2025-09-01T19:38:39.756Z
**Bundles Combined**: 4
**Category**: error-handling

---


## ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Exceptions in ABAP Statements

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Exceptions in ABAP Statements

Included pages: 2


### abenabap_language_exceptions.htm

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


### abenabap_exception_classes.htm

---
title: "Exception Classes for ABAP Statements"
description: |
  The catchable exceptions in ABAP statements(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm) are related to the predefined exception classes listed below, which are subclasses of the classes CX_DYNAMIC_CHECK and CX_NO_CHECK. These exception classes r
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm"
abapFile: "abenabap_exception_classes.htm"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abenabap", "exception", "classes"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Exceptions in ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Classes%20for%20ABAP%20Statements%2C%20ABENABAP_EXCEPTION_CLASSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Exception Classes for ABAP Statements

The catchable [exceptions in ABAP statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm) are related to the predefined exception classes listed below, which are subclasses of the classes CX\_DYNAMIC\_CHECK and CX\_NO\_CHECK. These exception classes replace the obsolete [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). The keyword documentation lists the type of exceptions that can be raised for each statement.

When catching a superclass exception with [CATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_try.htm), all of its subclass exceptions are also caught. To improve the structure, intermediate abstract classes were introduced so that groups of exceptions can be caught simultaneously.

Each exception class includes message texts, which can be found in the Texts tab in the [Class Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_builder_glosry.htm "Glossary Entry").

The following links open the Class Builder for the relevant exception class.

CX\_ROOT
  |
  |--CX\_STATIC\_CHECK
  |
  |--CX\_DYNAMIC\_CHECK
  |    |
  |    |--CX\_SY\_ARITHMETIC\_ERROR
  |    |    |
  |    |    |--CX\_SY\_ZERODIVIDE
  |    |    |
  |    |    |--CX\_SY\_ARITHMETIC\_OVERFLOW
  |    |    |
  |    |    |--CX\_SY\_ARG\_OUT\_OF\_DOMAIN
  |    |    |
  |    |    |--CX\_SY\_PRECISION\_LOSS
  |    |
  |    |--CX\_SY\_ASSIGN\_ERROR
  |    |    |
  |    |    |--CX\_SY\_ASSIGN\_CAST\_ERROR
  |    |    |    |
  |    |    |    |--CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST
  |    |    |    |
  |    |    |    |--CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE
  |    |    |
  |    |    |--CX\_SY\_ASSIGN\_OUT\_OF\_RANGE
  |    |
  |    |--CX\_SY\_CODEPAGE\_CONVERTER\_INIT
  |    |
  |    |--CX\_SY\_CONVERSION\_ERROR
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_CODEPAGE
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_CODEPAGE\_EX
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_DATA\_LOSS
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_INEXACT\_FLTP
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_BOOLEAN
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_DATE\_TIME
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_NUMBER
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_QNAME
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_RAW
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_TIME
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NOT\_SUPPORTED
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_UUID
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_OVERFLOW
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_ROUNDING
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_UNKNOWN\_LANGU
  |    |
  |    |--CX\_SY\_CREATE\_ERROR
  |    |    |
  |    |    |--CX\_SY\_CREATE\_OBJECT\_ERROR
  |    |    |
  |    |    |--CX\_SY\_CREATE\_DATA\_ERROR
  |    |
  |    |--CX\_SY\_DATA\_ACCESS\_ERROR
  |    |    |
  |    |    |--CX\_SY\_RANGE\_OUT\_OF\_BOUNDS
  |    |    |
  |    |    |--CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS
  |    |    |
  |    |    |--CX\_SY\_OFFSET\_NOT\_ALLOWED
  |    |
  |    |--CX\_SY\_DB\_PROCEDURE\_CALL
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_CONNECTION
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_NOT\_FOUND
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_NOT\_SUPP
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_OVERFLOW
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_PARAMETER
  |    |         |
  |    |         |--CX\_SY\_DB\_PROCEDURE\_DYN\_IN\_OUT
  |    |         |
  |    |         |--CX\_SY\_DB\_PROCEDURE\_DYN\_MISSING
  |    |         |
  |    |         |--CX\_SY\_DB\_PROCEDURE\_DYN\_NOT\_FND
  |    |         |
  |    |         |--CX\_SY\_DB\_PROCEDURE\_TYPE\_ERROR
  |    |
  |    |--CX\_SY\_DYN\_CALL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_PARAMETER\_ERROR
  |    |         |
  |    |         |--CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND
  |    |         |
  |    |         |--CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE
  |    |         |
  |    |         |--CX\_SY\_DYN\_CALL\_PARAM\_MISSING
  |    |         |
  |    |         |--CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND
  |    |
  |    |--CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY
  |    |
  |    |--CX\_SY\_FILE\_ACCESS\_ERROR
  |    |    |
  |    |    |--CX\_SY\_FILE\_AUTHORITY
  |    |    |
  |    |    |--CX\_SY\_FILE\_CLOSE
  |    |    |
  |    |    |--CX\_SY\_FILE\_IO
  |    |    |
  |    |    |--CX\_SY\_FILE\_OPEN
  |    |    |
  |    |    |--CX\_SY\_FILE\_OPEN\_MODE
  |    |    |
  |    |    |--CX\_SY\_FILE\_POSITION
  |    |    |
  |    |    |--CX\_SY\_FILE\_TRUNCATE
  |    |
  |    |--CX\_SY\_FIND\_INFINITE\_LOOP
  |    |
  |    |--CX\_SY\_GEN\_SOURCE\_TOO\_WIDE
  |    |
  |    |--CX\_SY\_IMPORT\_MISMATCH\_ERROR
  |    |    |
  |    |    |--CX\_SY\_IMPORT\_FORMAT\_ERROR
  |    |
  |    |--CX\_SY\_ITAB\_ERROR
  |    |    |
  |    |    |--CX\_SY\_ITAB\_DUPLICATE\_KEY
  |    |    |
  |    |    |--CX\_SY\_ITAB\_DYN\_LOOP
  |    |    |
  |    |    |--CX\_SY\_ITAB\_LINE\_NOT\_FOUND
  |    |
  |    |--CX\_SY\_MATCHER
  |    |    |
  |    |    |--CX\_SY\_REGEX\_TOO\_COMPLEX
  |    |    |
  |    |    |--CX\_SY\_INVALID\_REGEX\_FORMAT
  |    |
  |    |--CX\_SY\_MOVE\_CAST\_ERROR
  |    |
  |    |--CX\_SY\_PROGRAM\_NOT\_FOUND
  |    |
  |    |--CX\_SY\_PROVIDE\_EXCEPTION
  |    |    |
  |    |    |--CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP
  |    |    |
  |    |    |--CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED
  |    |
  |    |--CX\_SY\_READ\_SRC\_LINE\_TOO\_LONG
  |    |
  |    |--CX\_SY\_REF\_IS\_INITIAL
  |    |
  |    |--CX\_SY\_REGEX
  |    |    |
  |    |    |--CX\_SY\_INVALID\_REGEX
  |    |
  |    |--CX\_SY\_REPLACE\_INFINITE\_LOOP
  |    |
  |    |--CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE
  |    |
  |    |--CX\_SY\_SQL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE
  |    |    |    |
  |    |    |    |--CX\_SY\_DB\_PROCEDURE\_SQL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_EXPIMP\_DB\_SQL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_OPEN\_SQL\_ERROR
  |    |    |    |
  |    |    |    |--CX\_SY\_OPEN\_SQL\_DB
  |    |    |    |
  |    |    |    |--CX\_SY\_DYNAMIC\_OSQL\_ERROR
  |    |    |    |    |
  |    |    |    |    |--CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS
  |    |    |    |    |
  |    |    |    |    |--CX\_SY\_DYNAMIC\_OSQL\_SYNTAX
  |    |    |    |
  |    |    |    |--CX\_SY\_SQL\_UNSUPPORTED\_FEATURE
  |    |    |
  |    |    |--CX\_SY\_NATIVE\_SQL\_ERROR
  |    |
  |    |--CX\_SY\_STRING\_SIZE\_TOO\_LARGE
  |    |
  |    |--CX\_SY\_UNKNOWN\_CURRENCY
  |    |
  |    |--CX\_SY\_WRITE\_INVALID\_STYLE
  |    |
  |    |--CX\_SY\_WRITE\_SRC\_LINE\_TOO\_LONG
  |    |
  |    |--CX\_TRANSFORMATION\_ERROR
  |         |
  |         |--CX\_ST\_ERROR
  |         |    |
  |         |    |--CX\_ST\_CALL\_ERROR
  |         |    |
  |         |    |--CX\_ST\_CALL\_METHOD\_ERROR
  |         |    |
  |         |    |--CX\_ST\_CONSTRAINT\_ERROR
  |         |    |
  |         |    |--CX\_ST\_CONDITION
  |         |    |
  |         |    |--CX\_ST\_DESERIALIZATION\_ERROR
  |         |    |
  |         |    |--CX\_ST\_FORMAT\_ERROR
  |         |    |
  |         |    |--CX\_ST\_INVALID\_XML
  |         |    |
  |         |    |--CX\_ST\_MATCH
  |         |    |
  |         |    |--CX\_ST\_REF\_ACCESS
  |         |    |
  |         |    |--CX\_ST\_RUNTIME\_ERROR
  |         |    |
  |         |    |--CX\_ST\_SERIALIZATION\_ERROR
  |         |
  |         |--CX\_XSLT\_EXCEPTION
  |              |
  |              |--CX\_XSLT\_SYSTEM\_ERROR
  |                   |
  |                   |--CX\_XSLT\_ABAP\_CALL\_ERROR
  |                   |
  |                   |--CX\_XSLT\_DESERIALIZATION\_ERROR
  |                   |
  |                   |--CX\_XSLT\_FORMAT\_ERROR
  |                   |
  |                   |--CX\_XSLT\_RUNTIME\_ERROR
  |                   |
  |                   |--CX\_XSLT\_SERIALIZATION\_ERROR
  |         |
  |         |--CX\_SY\_TRANS\_OPTION\_ERROR
  |
  |--CX\_NO\_CHECK
       |
       |--CX\_BADI
       |    |
       |    |--CX\_BADI\_CONTEXT\_ERROR
       |    |
       |    |--CX\_BADI\_FILTER\_ERROR
       |    |
       |    |--CX\_BADI\_INITIAL\_CONTEXT
       |    |
       |    |--CX\_BADI\_INITIAL\_REFERENCE
       |    |
       |    |--CX\_BADI\_NOT\_SINGLE\_USE
       |    |    |
       |    |    |--CX\_BADI\_MULTIPLY\_IMPLEMENTED
       |    |    |
       |    |    |--CX\_BADI\_NOT\_IMPLEMENTED
       |    |
       |    |--CX\_BADI\_UNKNOWN\_ERROR
       |
       |--CX\_SY\_AUTHORIZATION\_ERROR
       |
       |--CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY
       |
       |--CX\_SY\_GENERATE\_SUBPOOL\_FULL
       |
       |--CX\_SY\_ILLEGAL\_HANDLER
       |
       |--CX\_SY\_LOCALIZATION\_ERROR
       |
       |--CX\_SY\_NESTED\_PRINT\_ON
       |
       |--CX\_SY\_NO\_HANDLER
       |
       |--CX\_SY\_PIPES\_NOT\_SUPPORTED
       |
       |--CX\_SY\_PIPE\_REOPEN
       |
       |--CX\_SY\_TOO\_MANY\_FILES


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Runtime Errors

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Runtime Errors

Included pages: 4


### abennoncat_exceptions.htm

---
title: "Runtime Errors"
description: |
  Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed: -   Non-handled exceptions: -   A catchable exception is not handled. -   A uncatchabl
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennoncat_exceptions.htm"
abapFile: "abennoncat_exceptions.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "exception-handling", "abennoncat", "exceptions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Runtime%20Errors%2C%20ABENNONCAT_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Runtime Errors

Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions:
    -   A catchable exception is not handled.
    -   A uncatchable exception is raised.
-   Program-driven raise:
    -   The statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) or the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) is used.
    -   An [assertion](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertion_glosry.htm "Glossary Entry") fails.
    -   An [exit message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexit_message_glosry.htm "Glossary Entry") or [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") of type X is sent.

Each runtime error is identified by a name and assigned to a specific error situation and leads to a [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Following a program termination caused by a runtime error, the system generates a [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") which contains the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to branch directly to the ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dump_analsyis_glosry.htm "Glossary Entry") (transaction ST22). The output of the short dump can be controlled in the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Hint

Program-driven termination of a program should be implemented in situations where meaningful program execution is no longer possible, using [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm) from now on and not using [exit messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexit_message_glosry.htm "Glossary Entry").

Example

Raising of the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).

Continue
[RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm)


### abapraise_shortdump.htm

---
title: "RAISE SHORTDUMP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_shortref.htm) Syntax RAISE SHORTDUMP  TYPE cx_class  message(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm) EXPORTING p1 = a1 p2 = a2 ...
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm"
abapFile: "abapraise_shortdump.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abapraise", "shortdump"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennoncat_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SHORTDUMP%2C%20ABAPRAISE_SHORTDUMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE SHORTDUMP

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_shortref.htm)

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm)*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_error_glosry.htm "Glossary Entry") RAISE\_SHORTDUMP, which performs a [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). This runtime error is linked with an [exception object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_object_glosry.htm "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_glosry.htm "Glossary Entry") is ignored.
    -   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm).
    -   The addition [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm) can be used to link the exception object to a [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry").
-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the RAISE statement.

The [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_text_glosry.htm "Glossary Entry"). The attributes of the exception object can be listed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Hints

-   The statement RAISE SHORTDUMP works in roughly the same way as when raising a [class-based exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that does not have a handler. There is no [propagation from procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_procedures.htm), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_glosry.htm "Glossary Entry") of the used exception class is not relevant in RAISE SHORTDUMP.
-   The statement RAISE SHORTDUMP does not raise [class-based exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that can be caught using [CATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_try.htm). The exception object is used exclusively for the transport of information to the short dump.
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexit_message_glosry.htm "Glossary Entry"), that is, [messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") of type X. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference previous exceptions.
-   If oref is specified, either an exception object instantiated using [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) or [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter PREVIOUS of the new object.
-   The addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) makes it possible to raise a runtime error in an operand position.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100. The instance constructor is supplied with parameters that define the exception text and supply any variable text parts with values.

RAISE SHORTDUMP TYPE cx\_demo\_t100
     EXPORTING
       textid = cx\_demo\_t100=>demo
       text1  = 'I'
       text2  = 'need'
       text3  = 'a'
       text4  = 'break!'.

Example

Like the previous example, but the exception object is created first and not in the statement RAISE SHORTDUMP.

FINAL(oref) = NEW cx\_demo\_t100(
  textid = cx\_demo\_t100=>demo
  text1  = 'I'
  text2  = 'need'
  text3  = 'a'
  text4  = 'break!' ).
RAISE SHORTDUMP oref.

Example

Raising of a runtime error when an exception is handled. A reference to the preceding exception object of the class cx\_sy\_zerodivide is passed to the attribute PREVIOUS of the created exception object of the class cx\_demo. The chain of exception objects is listed in the long text of the short dump.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(num) = 1 / 0.
  ENDMETHOD.
ENDCLASS.
CLASS user DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS user IMPLEMENTATION.
  METHOD main.
    TRY.
        demo=>main( ).
      CATCH cx\_sy\_zerodivide INTO FINAL(oref).
        RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Continue
[RAISE SHORTDUMP, message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm)


### abapraise_shortdump_message.htm

---
title: "RAISE SHORTDUMP, message"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_shortref.htm) Syntax ...  MESSAGE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) tn(id)   ID mid TYPE mtype NUMBER num  WITH dobj1 ... dobj4
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm"
abapFile: "abapraise_shortdump_message.htm"
keywords: ["do", "if", "try", "class", "exception-handling", "abapraise", "shortdump", "message"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennoncat_exceptions.htm) →  [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SHORTDUMP%2C%20message%2C%20ABAPRAISE_SHORTDUMP_MESSAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE SHORTDUMP, message

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_shortref.htm)

Syntax

... *{* [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) tn(id)
            *|* *{* ID mid TYPE mtype NUMBER num *}*
              *\[*WITH dobj1 ... dobj4*\]* *}*
  *|* *{* [USING MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) *}* ...

Effect

The addition MESSAGE of the statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) and of the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) passes the specification of a [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") to the exception object. Syntax and semantics are the same as in the addition [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm).

Hint

The addition MESSAGE cannot be specified after the variant [RAISE SHORTDUMP oref](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm).

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm). The addition MESSAGE is used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
  MESSAGE ID 'SABAPDEMOS'
          TYPE 'I'
          NUMBER '888'
          WITH 'I' 'need' 'a' 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100, which implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message.htm). The additions MESSAGE and EXPORTING are used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_t100
                MESSAGE ID 'SABAPDEMOS'
                        NUMBER '888'
                EXPORTING text1 = 'I'
                          text2 = 'need'
                          text3 = 'a'
                          text4 = 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm). The addition USING MESSAGE is used to pass the properties of a previously sent message that determines the exception text.

MESSAGE ID 'SABAPDEMOS'
        TYPE 'S'
        NUMBER '888'
        WITH 'I' 'need' 'a' 'break!'.
RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
                USING MESSAGE.


### abapraise_shortdump.htm

---
title: "RAISE SHORTDUMP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_shortref.htm) Syntax RAISE SHORTDUMP  TYPE cx_class  message(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm) EXPORTING p1 = a1 p2 = a2 ...
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm"
abapFile: "abapraise_shortdump.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abapraise", "shortdump"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennoncat_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SHORTDUMP%2C%20ABAPRAISE_SHORTDUMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE SHORTDUMP

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_shortref.htm)

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm)*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_error_glosry.htm "Glossary Entry") RAISE\_SHORTDUMP, which performs a [database rollback](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). This runtime error is linked with an [exception object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_object_glosry.htm "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_glosry.htm "Glossary Entry") is ignored.
    -   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm).
    -   The addition [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm) can be used to link the exception object to a [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry").
-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the RAISE statement.

The [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_text_glosry.htm "Glossary Entry"). The attributes of the exception object can be listed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Hints

-   The statement RAISE SHORTDUMP works in roughly the same way as when raising a [class-based exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that does not have a handler. There is no [propagation from procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_procedures.htm), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_glosry.htm "Glossary Entry") of the used exception class is not relevant in RAISE SHORTDUMP.
-   The statement RAISE SHORTDUMP does not raise [class-based exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that can be caught using [CATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_try.htm). The exception object is used exclusively for the transport of information to the short dump.
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexit_message_glosry.htm "Glossary Entry"), that is, [messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") of type X. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference previous exceptions.
-   If oref is specified, either an exception object instantiated using [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) or [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter PREVIOUS of the new object.
-   The addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) makes it possible to raise a runtime error in an operand position.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100. The instance constructor is supplied with parameters that define the exception text and supply any variable text parts with values.

RAISE SHORTDUMP TYPE cx\_demo\_t100
     EXPORTING
       textid = cx\_demo\_t100=>demo
       text1  = 'I'
       text2  = 'need'
       text3  = 'a'
       text4  = 'break!'.

Example

Like the previous example, but the exception object is created first and not in the statement RAISE SHORTDUMP.

FINAL(oref) = NEW cx\_demo\_t100(
  textid = cx\_demo\_t100=>demo
  text1  = 'I'
  text2  = 'need'
  text3  = 'a'
  text4  = 'break!' ).
RAISE SHORTDUMP oref.

Example

Raising of a runtime error when an exception is handled. A reference to the preceding exception object of the class cx\_sy\_zerodivide is passed to the attribute PREVIOUS of the created exception object of the class cx\_demo. The chain of exception objects is listed in the long text of the short dump.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(num) = 1 / 0.
  ENDMETHOD.
ENDCLASS.
CLASS user DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS user IMPLEMENTATION.
  METHOD main.
    TRY.
        demo=>main( ).
      CATCH cx\_sy\_zerodivide INTO FINAL(oref).
        RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Continue
[RAISE SHORTDUMP, message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump_message.htm)


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Program Flow / Obsolete Catchable Runtime Errors

**Files**: 6 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Program Flow / Obsolete Catchable Runtime Errors

Included pages: 6


### abensystem-exceptions.htm

---
title: "Obsolete Catchable Runtime Errors"
description: |
  Before class-based exceptions were introduced, exceptions for exception situations of the runtime framework that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS. All catchable runtime e
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm"
abapFile: "abensystem-exceptions.htm"
keywords: ["do", "if", "catch", "class", "abensystem", "exceptions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Catchable%20Runtime%20Errors%2C%20ABENSYSTEM-EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Catchable Runtime Errors

Before class-based exceptions were introduced, exceptions for exception situations of the runtime framework that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement CATCH SYSTEM-EXCEPTIONS.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. It was possible to group multiple catchable runtime errors together in an exception group and under whose name they could be handled together.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception.

Catchable runtime errors cannot be raised explicitly; they are only raised implicitly by the runtime framework.

-   [Alphabetical Overview of Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenueb-abfb-sysexc.htm)
-   [Assignment of Catchable Runtime Errors to Exception Groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensysexc-errkl.htm)
-   [Handling Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm)

Continue
[Alphabetical Overview of Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenueb-abfb-sysexc.htm)
[Assignment of Catchable Runtime Errors to Exception Groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensysexc-errkl.htm)
[CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm)


### abenueb-abfb-sysexc.htm

---
title: "Alphabetical Overview of Catchable Runtime Errors"
description: |
  The following is an alphabetical list of the obsolete catchable runtime errors. For each catchable runtime error, the associated predefined exception class(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm) used to handle the corresponding runtime error is s
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenueb-abfb-sysexc.htm"
abapFile: "abenueb-abfb-sysexc.htm"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "types", "abenueb", "abfb", "sysexc"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Alphabetical%20Overview%20of%20Catchable%20Runtime%20Errors%2C%20ABENUEB-ABFB-SYSEXC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Alphabetical Overview of Catchable Runtime Errors

The following is an alphabetical list of the obsolete catchable runtime errors. For each catchable runtime error, the associated [predefined exception class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm) used to handle the corresponding runtime error is specified. If an exception class is assigned to multiple catchable runtime errors, it may contain as many message texts as required, which can be found in the [Class Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_builder_glosry.htm "Glossary Entry") on the Texts tab.

Almost all the runtime errors listed here are grouped together in [exception groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_group_glosry.htm "Glossary Entry"). These exception groups are also assigned those ABAP keywords for which the runtime errors can be caught.

ADDF\_INT\_OVERFLOW   

Overflow in conversions/arithmetic operations (types i and int8)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

ASSIGN\_CASTING\_ILLEGAL\_CAST   

The components of the source field type and the target type that are strings, tables, or references do not have exactly the same offset and type.

Exception class: CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

ASSIGN\_CASTING\_UNKNOWN\_TYPE   

The type specified at runtime is unknown.

Exception class: CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

ASSIGN\_FIELD\_NOT\_IN\_RANGE   

The field is not within the RANGE specified.

Exception class: CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

BCD\_FIELD\_OVERFLOW   

Overflow after conversion/arithmetic operation (type p, with specified length)

Exception class: CX\_SY\_CONVERSION\_OVERFLOW

BCD\_OVERFLOW   

Overflow after conversion/arithmetic operation (type p)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

BCD\_ZERODIVIDE   

Division by 0 (type p)

Exception class: CX\_SY\_ZERODIVIDE

COMPUTE\_ACOS\_DOMAIN   

Invalid call of the numeric function acos

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ASIN\_DOMAIN   

Invalid call of the numeric function asin

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ATAN\_DOMAIN   

Invalid call of the numeric function atan

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_BCD\_OVERFLOW   

Overflow after arithmetic operation (all operands of type p)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COSH\_OVERFLOW   

Overflow after the numeric function cosh

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COS\_DOMAIN   

Invalid call of the numeric function cos

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COSH\_DOMAIN   

Invalid call of the numeric function cosh

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_LOSS   

Result of the function cos is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_EXP\_DOMAIN   

Invalid call of the numeric function exp

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_EXP\_RANGE   

Overflow after the numeric function exp

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_DIV\_OVERFLOW   

Overflow after division (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_MINUS\_OVERFLOW   

Overflow after subtraction (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_PLUS\_OVERFLOW   

Overflow after addition (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_TIMES\_OVERFLOW   

Overflow after multiplication (type f)

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_ZERODIVIDE   

Division by zero (type f)

Exception class: CX\_SY\_ZERODIVIDE

COMPUTE\_INT\_ABS\_OVERFLOW   

Integer overflow after calculation of absolute value

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_DIV\_OVERFLOW   

Integer overflow after division

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_MINUS\_OVERFLOW   

Integer overflow after subtraction

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_PLUS\_OVERFLOW   

Integer overflow after addition

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_TIMES\_OVERFLOW   

Integer overflow after multiplication

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_ZERODIVIDE   

Division by 0 (type I)

Exception class: CX\_SY\_ZERODIVIDE

COMPUTE\_MATH\_DOMAIN   

Invalid calculation

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_MATH\_LOSS   

Result of a calculation is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_MATH\_OVERFLOW   

Overflow in a calculation

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_LOG10\_ERROR   

Invalid call of the numeric function log10

Exception classes: CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_LOG\_ERROR   

Invalid call of the numeric function log

Exception classes: CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_POW\_DOMAIN   

Invalid argument after power operation

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_POW\_RANGE   

Overflow after power operation

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_SINH\_OVERFLOW   

Overflow after the numeric function sinh

Exception class: CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_SIN\_DOMAIN   

Invalid call of the numeric function sin

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SINH\_DOMAIN   

Invalid call of the numeric function sinh

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SIN\_LOSS   

Result of the function sin is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

COMPUTE\_SQRT\_DOMAIN   

Invalid call of the numeric function sqrt

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TAN\_DOMAIN   

Invalid call of the numeric function tan

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TANH\_DOMAIN   

Invalid call of the numeric function tanh

Exception class: CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TAN\_LOSS   

Result of the function tan is not precise

Exception class: CX\_SY\_PRECISION\_LOSS

CONNE\_IMPORT\_WRONG\_COMP\_DECS   

Import error; a component of a structured type in the data set has incorrect [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfract_digit_glosry.htm "Glossary Entry")

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_LENG   

Import error; a component of a structured type in the data set has an incorrect length

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_TYPE   

Import error; a component of a structured type in the data set has an incorrect type

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_DECS   

Import error; a field type in the data set has incorrect [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfract_digit_glosry.htm "Glossary Entry")

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_LENG   

Import error; a field in the data set has an incorrect length

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_TYPE   

Import error; a field in the data set has an incorrect type

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_OBJECT\_TYPE   

Import error; type conflict between simple and structured data types

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_STRUCTURE   

Import error; type conflict between structured objects

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONVT\_CODEPAGE   

Character set conversion not possible for one or more characters

Exception class: CX\_SY\_CONVERSION\_CODEPAGE

CONVT\_CODEPAGE\_INIT   

Conversion of texts from [code page](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_glosry.htm "Glossary Entry") to code page not supported

Exception class: CX\_SY\_CODEPAGE\_CONVERTER\_INIT

CONVT\_NO\_NUMBER   

Value to be converted cannot be interpreted as a number

Exception class: CX\_SY\_CONVERSION\_NO\_NUMBER

CONVT\_OVERFLOW   

Overflow after conversion (all types, not type p)

Exception class: CX\_SY\_CONVERSION\_OVERFLOW

CREATE\_DATA\_ILLEGAL\_DECIMALS   

Invalid value for the addition DECIMALS

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_INIT\_SIZE   

Invalid value for the addition INITIAL SIZE

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_LENGTH   

Invalid value for the addition LENGTH

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_LEN\_NOT\_ALLOWED   

The addition LENGTH was used for a type other than c, n, x, or p.

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_NOT\_ALLOWED\_TYPE   

The type specified dynamically in the addition TYPE is not completely typed

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_UNKNOWN\_TYPE   

The type specified in the addition TYPE is unknown

Exception class: CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_OBJECT\_CLASS\_ABSTRACT   

An attempt was made to instantiate an abstract class.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CLASS\_NOT\_FOUND   

The class specified by the dynamic CREATE OBJECT was not found.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PRIVATE   

An attempt was made to create an object of a class defined as 'CREATE PRIVATE'.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PROTECTED   

An attempt was made to create an object of a class defined as 'CREATE PROTECTED'.

Exception class: CX\_SY\_CREATE\_OBJECT\_ERROR

DATA\_LENGTH\_NEGATIVE   

Invalid substring access: Length negative

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_0   

Invalid substring access: Length 0

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_TOO\_LARGE   

Invalid substring access: Length too long

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_NEGATIVE   

Invalid substring access: Offset negative

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_TOO\_LARGE   

Invalid substring access: Offset plus length too long

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_NOT\_ALLOWED   

Invalid substring access: Invalid type

Exception class: CX\_SY\_OFFSET\_NOT\_ALLOWED

DATA\_OFFSET\_TOO\_LARGE   

Invalid substring access: Offset too large

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATASET\_CANT\_CLOSE   

File could not be closed; there may be no more space in the file system

Exception class: CX\_SY\_FILE\_CLOSE

DATASET\_CANT\_OPEN   

File cannot be opened

Exception class: CX\_SY\_FILE\_OPEN

DATASET\_NO\_PIPE   

OPEN DATASET with the addition FILTER not supported on the current operating system.

Exception class: CX\_SY\_PIPES\_NOT\_SUPPORTED

DATASET\_NO\_POSITION   

No access possible to current read/write position in the file

Exception class: CX\_SY\_FILE\_POSITION

DATASET\_NOT\_OPEN   

File not open.

Exception class: CX\_SY\_FILE\_OPEN\_MODE

DATASET\_OFFSET\_TOO\_LARGE   

Specified offset exceeds system limit

Exception class: CX\_SY\_FILE\_POSITION

DATASET\_PIPE\_CLOSED   

Pipe for file closed.

Exception class: CX\_SY\_PIPE\_REOPEN

DATASET\_READ\_ERROR   

Error when reading a file

Exception class: CX\_SY\_FILE\_IO

DATASET\_READ\_ONLY   

File open for reading only

Exception class: CX\_SY\_FILE\_OPEN\_MODE

DATASET\_SEEK\_ERROR   

Error when positioning in file

Exception class: CX\_SY\_FILE\_POSITION

DATASET\_TOO\_MANY\_FILES   

Maximum number of open files exceeded

Exception class: CX\_SY\_TOO\_MANY\_FILES

DATASET\_WRITE\_ERROR   

Error when writing in a file

Exception class: CX\_SY\_FILE\_IO

DYN\_CALL\_METH\_CLASSCONSTRUCTOR   

An attempt was made to call the class constructor.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_CLASS\_ABSTRACT   

An attempt was made to call a method from an abstract class.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CLASS\_NOT\_FOUND   

An attempt was made to call a method from a nonexistent class.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CONSTRUCTOR   

An attempt was made to call the instance constructor.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_EXCP\_NOT\_FOUND   

An attempt was made to catch an unknown exception.

Exception class: CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

DYN\_CALL\_METH\_NOT\_FOUND   

An attempt was made to call an unknown method.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NOT\_IMPLEMENTED   

An attempt was made to call an unimplemented method.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NO\_CLASS\_METHOD   

An attempt was made to call an instance method from a class.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PARAM\_KIND   

An attempt was made to pass a parameter with an incorrect parameter category.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_LITL\_MOVE   

An attempt was made to pass a constant actual parameter to a formal EXPORTING, CHANGING, or RETURNING parameter.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_MISSING   

A mandatory parameter was not filled.

Exception class: CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PARAM\_NOT\_FOUND   

An attempt was made to pass an unknown parameter.

Exception class: CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

DYN\_CALL\_METH\_PARAM\_TAB\_TYPE   

An attempt was made to pass a parameter with an incorrect table type.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_TYPE   

An attempt was made to pass a parameter with an incorrect type.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARREF\_INITIAL   

An initial data reference was passed for a mandatory parameter.

Exception class: CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PRIVATE   

An attempt was made to call a private method externally.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PROTECTED   

An attempt was made to call a [protected](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprotected_glosry.htm "Glossary Entry") method externally.

Exception class: CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_REF\_IS\_INITIAL   

An attempt was made to call a method on an initial reference.

Exception class: CX\_SY\_REF\_IS\_INITIAL

EXPORT\_BUFFER\_NO\_MEMORY   

The EXPORT [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") is too big for the application buffer.

Exception class: CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

EXPORT\_DATASET\_CANNOT\_OPEN   

The IMPORT/EXPORT statement could not open the file.

Exception class: CX\_SY\_FILE\_OPEN

EXPORT\_DATASET\_WRITE\_ERROR   

The export statement could not write to the file.

Exception class: CX\_SY\_FILE\_IO

GENERATE\_SUBPOOL\_DIR\_FULL   

No further temporary [subroutine pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") can be generated.

Exception class: CX\_SY\_GENERATE\_SUBPOOL\_FULL

IMPORT\_ALIGNMENT\_MISMATCH   

Import error; same sequence of components but with type conflicts or mismatches in structured data types

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

IMPORT\_WRONG\_END\_POS   

Import error; dataset has a different length.

Exception class: CX\_SY\_IMPORT\_MISMATCH\_ERROR

MOVE\_CAST\_ERROR   

Type conflict in assignment between reference variables (only operator ?= or obsolete statement MOVE...?TO... )

Exception class: CX\_SY\_MOVE\_CAST\_ERROR

OPEN\_DATASET\_NO\_AUTHORITY   

No authorization for accessing file

Exception class: CX\_SY\_FILE\_AUTHORITY

OPEN\_PIPE\_NO\_AUTHORITY   

No authorization for accessing file (OPEN DATASET...FILTER...)

Exception class: CX\_SY\_FILE\_AUTHORITY

PERFORM\_PROGRAM\_NAME\_TOO\_LONG   

Invalid program name in the PERFORM statement

Exception class: CX\_SY\_PROGRAM\_NOT\_FOUND

REFI\_WRONG\_SECTION   

Incorrect offset/length specified in the REPLACE statement

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

REPLACE\_INFINITE\_LOOP   

SECTION with length 0 in the REPLACE statement

Exception class: CX\_SY\_REPLACE\_INFINITE\_LOOP

RMC\_COMMUNICATION\_FAILURE   

Communication error in the remote method call

Exception class: CX\_SY\_RMC\_COMM\_FAILURE

RMC\_INVALID\_STATUS   

State error in the remote method call

Exception class: CX\_SY\_RMC\_INVALID\_STATUS

RMC\_SYSTEM\_FAILURE   

System error in the remote method call

Exception class: CX\_SY\_RMC\_SYSTEM\_FAILURE

STRING\_LENGTH\_NEGATIVE   

Invalid access with negative length to a string

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_TOO\_LARGE   

Invalid access to a string (length too long)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_NEGATIVE   

Invalid access with negative offset to a string

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_TOO\_LARGE   

Invalid access to a string (offset too large)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_LENGTH\_TOO\_LARGE   

Invalid offset to a string (offset plus length too large)

Exception class: CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

TEXTENV\_CODEPAGE\_NOT\_ALLOWED   

Code page used is not released.

Exception class: CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_INVALID   

Error in the configuration of the [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry") (SET LOCALE...)

Exception class: CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_KEY\_INVALID   

Invalid key when accessing the text environment table.

Exception class: CX\_SY\_LOCALIZATION\_ERROR


### abensysexc-errkl.htm

---
title: "Assignment of Catchable Runtime Errors to Exception Groups"
description: |
  Most of the obsolete catchable runtime errors are assigned to exception groups. Using the name of an exception group, all catchable runtime errors of the group can be caught simultaneously using CATCH SYSTEM-EXCEPTIONS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm).
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensysexc-errkl.htm"
abapFile: "abensysexc-errkl.htm"
keywords: ["delete", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abensysexc", "errkl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignment%20of%20Catchable%20Runtime%20Errors%20to%20Exception%20Groups%2C%20ABENSYSEXC-ERRKL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

Assignment of Catchable Runtime Errors to Exception Groups

Most of the obsolete catchable runtime errors are assigned to exception groups. Using the name of an exception group, all catchable runtime errors of the group can be caught simultaneously using [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm).

For each of the catchable runtime errors, a [predefined exception class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm) is specified that can be used to handle the runtime error. Normally, most exception classes of an exception group belong to a common superclass. This superclass is specified in parentheses below the exception group.

The assigned ABAP keywords are specified for each exception group. Only those keywords assigned to a specific exception group can be used to catch the runtime errors in this exception group using the obsolete statement CATCH SYSTEM-EXCEPTIONS.

Exception Group: ARITHMETIC\_ERRORS   

(Associated superclass: CX\_SY\_ARITHMETIC\_ERROR)

This group contains exceptions that can be raised by arithmetic expressions. These include, for example, division by zero, overflow or underflow in fields, and errors in arithmetic and trigonometric functions.
Errors that occur during the conversion between data types in mixed [arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") are not caught.

BCD\_ZERODIVIDE

CX\_SY\_ZERODIVIDE

COMPUTE\_FLOAT\_ZERODIVIDE

CX\_SY\_ZERODIVIDE

COMPUTE\_INT\_ZERODIVIDE

CX\_SY\_ZERODIVIDE

ADDF\_INT\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_COSH\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_EXP\_RANGE

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_DIV\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_MINUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_PLUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_FLOAT\_TIMES\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_ABS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_DIV\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_MINUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_PLUS\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_INT\_TIMES\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_LOG10\_ERROR

CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_LOG\_ERROR

CX\_SY\_ARITHMETIC\_OVERFLOW, CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_MATH\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_POW\_RANGE

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_SINH\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

COMPUTE\_ACOS\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ASIN\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_ATAN\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COSH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_EXP\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_MATH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_POW\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SINH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SIN\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_SQRT\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_TANH\_DOMAIN

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

COMPUTE\_COS\_LOSS

CX\_SY\_PRECISION\_LOSS

COMPUTE\_MATH\_LOSS

CX\_SY\_PRECISION\_LOSS

COMPUTE\_SIN\_LOSS

CX\_SY\_PRECISION\_LOSS

COMPUTE\_TAN\_LOSS

CX\_SY\_PRECISION\_LOSS

BCD\_FIELD\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

The following keywords are assigned to this exception group:

[ADD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm)

[ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[COMPUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm)

[DIVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubtract_multiply_divide.htm)

[DIVIDE-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[MULTIPLY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubtract_multiply_divide.htm)

[MULTIPLY-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[SUBTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubtract_multiply_divide.htm)

[SUBTRACT-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

Hints

-   The obsolete keyword [COMPUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm) is optional. However, statements in category
    
    n1 = arithexp
    still belong to the keyword COMPUTE.
    
-   Statements of the category
    
    COMPUTE n1 = n2.
    are simply assignments without arithmetic functions and are assigned to the keyword MOVE, which is also optional in the context of catchable runtime errors. To avoid confusion, it is better to write the following in these cases:
    n1 = n2.
    

Exception Group: CONVERSION\_ERRORS   

(Associated superclass: CX\_SY\_CONVERSION\_ERROR)

This group contains runtime errors that can occur during the conversion between data types. An explicit conversion can be made using an [assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove.htm), for example.
Implicit conversions are only caught in [arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry").

BCD\_FIELD\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

CONVT\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

CONVT\_CODEPAGE

CX\_SY\_CONVERSION\_CODEPAGE

CONVT\_NO\_NUMBER

CX\_SY\_CONVERSION\_NO\_NUMBER

BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

The following keywords are assigned to this exception group:

[ADD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm)

[ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[COMPUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm)

[DIVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm)

[DIVIDE-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[MOVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove.htm)

[MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove-corresponding.htm)

[MULTIPLY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm)

[MULTIPLY-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[PACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abappack.htm)

[SUBTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm)

[SUBTRACT-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

[UNPACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunpack.htm)

Hint

Statements of category n2 = n1 are assigned to the obsolete keyword MOVE.

Exception Group: CREATE\_DATA\_ERRORS   

(Associated superclass: CX\_SY\_CREATE\_ERROR)

This group contains runtime errors that can occur when data objects are created.

CREATE\_DATA\_UNKNOWN\_TYPE

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_NOT\_ALLOWED\_TYPE

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_LEN\_NOT\_ALLOWED

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_LENGTH

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_DECIMALS

CX\_SY\_CREATE\_DATA\_ERROR

CREATE\_DATA\_ILLEGAL\_INIT\_SIZE

CX\_SY\_CREATE\_DATA\_ERROR

The following keywords are assigned to this exception group:

[CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm)

Exception Group: CREATE\_OBJECT\_ERRORS   

(Associated superclass: CX\_SY\_CREATE\_ERROR)

This group contains runtime errors that can occur when objects are created.

CREATE\_OBJECT\_CLASS\_NOT\_FOUND

CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CLASS\_ABSTRACT

CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PRIVATE

CX\_SY\_CREATE\_OBJECT\_ERROR

CREATE\_OBJECT\_CREATE\_PROTECTED

CX\_SY\_CREATE\_OBJECT\_ERROR

The following keywords are assigned to this exception group:

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm)

Exception Group: DATA\_ACCESS\_ERRORS   

(Associated superclass: CX\_SY\_DATA\_ACCESS\_ERROR)

This group contains runtime errors that can occur in substring accesses (with offset/length) to data objects.

DATA\_OFFSET\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_0

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

REFI\_WRONG\_SECTION

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_NEGATIVE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

STRING\_OFFSET\_LENGTH\_TOO\_LARGE

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

DATA\_OFFSET\_LENGTH\_NOT\_ALLOWED

CX\_SY\_OFFSET\_NOT\_ALLOWED

Since substring accesses can occur in almost all statements, no keywords can be assigned.

Exception Group: DYNAMIC\_CALL\_METHOD\_ERRORS   

(Associated superclass: CX\_SY\_DYN\_CALL\_ERROR)

This group contains runtime errors that can occur in dynamic method calls. These are normally errors that raise a syntax error when the call is static.

DYN\_CALL\_METH\_CLASS\_ABSTRACT

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CLASS\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

DYN\_CALL\_METH\_CLASSCONSTRUCTOR

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_CONSTRUCTOR

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_NO\_CLASS\_METHOD

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PRIVATE

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_PROTECTED

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

DYN\_CALL\_METH\_EXCP\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

DYN\_CALL\_METH\_PARAM\_KIND

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_LITL\_MOVE

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_TAB\_TYPE

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_TYPE

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

DYN\_CALL\_METH\_PARAM\_MISSING

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PARREF\_INITIAL

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

DYN\_CALL\_METH\_PARAM\_NOT\_FOUND

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

DYN\_CALL\_METH\_REF\_IS\_INITIAL

CX\_SY\_REF\_IS\_INITIAL

The following keywords are assigned to this exception group:

[CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm)

Exception Group: FILE\_ACCESS\_ERRORS   

(Associated superclass: CX\_SY\_FILE\_ACCESS\_ERROR)

This group contains runtime errors that can occur when files are accessed. Typical examples are when the system cannot find the file, when no more space is available to write to or create the file, or if the authorization to access the file is missing.

DATASET\_CANT\_CLOSE

CX\_SY\_FILE\_CLOSE

DATASET\_CANT\_OPEN

CX\_SY\_FILE\_OPEN

EXPORT\_DATASET\_CANNOT\_OPEN

CX\_SY\_FILE\_OPEN

DATASET\_WRITE\_ERROR

CX\_SY\_FILE\_IO

DATASET\_READ\_ERROR

CX\_SY\_FILE\_IO

EXPORT\_DATASET\_WRITE\_ERROR

CX\_SY\_FILE\_IO

DATASET\_SEEK\_ERROR

CX\_SY\_FILE\_POSITION

DATASET\_NO\_POSITION

CX\_SY\_FILE\_POSITION

DATASET\_READ\_ONLY

CX\_SY\_FILE\_OPEN\_MODE

DATASET\_NOT\_OPEN

CX\_SY\_FILE\_OPEN\_MODE

OPEN\_DATASET\_NO\_AUTHORITY

CX\_SY\_FILE\_AUTHORITY

OPEN\_PIPE\_NO\_AUTHORITY

CX\_SY\_FILE\_AUTHORITY

DATASET\_TOO\_MANY\_FILES

CX\_SY\_TOO\_MANY\_FILES

DATASET\_NO\_PIPE

CX\_SY\_PIPES\_NOT\_SUPPORTED

The following keywords are assigned to this exception group:

CLOSE, variant: [CLOSE DATASET ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclose_dataset.htm)

DELETE, variant: [DELETE DATASET ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dataset.htm)

EXPORT, variant: [EXPORT ... TO DATASET ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm)

OPEN, variant: [OPEN DATASET...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset.htm)

READ, variant: [READ DATASET...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_dataset.htm)

[TRANSFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptransfer.htm)

Exception Group: IMPORT\_MISMATCH\_ERRORS   

(Common class: CX\_SY\_IMPORT\_MISMATCH\_ERROR)

This group contains runtime errors that can occur during the import of data

-   from the ABAP Memory,
-   from the database,
-   from the SHARED BUFFER, or
-   from a file

if the type or the length of the data stored is not identical with that of the target type.

CONNE\_IMPORT\_WRONG\_COMP\_DECS

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_LENG

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_COMP\_TYPE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_DECS

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_LENG

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_FIELD\_TYPE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_OBJECT\_TYPE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

CONNE\_IMPORT\_WRONG\_STRUCTURE

CX\_SY\_IMPORT\_MISMATCH\_ERROR

IMPORT\_ALIGNMENT\_MISMATCH

CX\_SY\_IMPORT\_MISMATCH\_ERROR

IMPORT\_WRONG\_END\_POS

CX\_SY\_IMPORT\_MISMATCH\_ERROR

The following keywords are assigned to this exception group:

[IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm)

Exception Group: LOCALIZATION\_ERRORS   

(Common class: CX\_SY\_LOCALIZATION\_ERROR)

This group contains runtime errors that can occur when the program switches to another [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry"). Typical examples are when the required locale language is not allowed or when the system wants to switch to a character set which has not been released.

TEXTENV\_CODEPAGE\_NOT\_ALLOWED

CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_INVALID

CX\_SY\_LOCALIZATION\_ERROR

TEXTENV\_KEY\_INVALID

CX\_SY\_LOCALIZATION\_ERROR

The following keywords are assigned to this exception group:

SET, variant: [SET LOCALE ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locale.htm)

Exception Group: REMOTE\_CALL\_ERRORS   

(Associated superclass: CX\_SY\_REMOTE\_CALL\_ERROR)

This group contains runtime errors that can occur during calls to remote systems (currently only CALL METHOD). Typical examples are network errors or the unexpected termination of the connection.

RMC\_COMMUNICATION\_FAILURE

CX\_SY\_RMC\_COMM\_FAILURE

RMC\_INVALID\_STATUS

CX\_SY\_RMC\_INVALID\_STATUS

RMC\_SYSTEM\_FAILURE

CX\_SY\_RMC\_SYSTEM\_FAILURE

The following keywords are assigned to this exception group:

[CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm)

Not Assigned to an Exception Group:   

ASSIGN\_CASTING\_ILLEGAL\_CAST

CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

ASSIGN\_CASTING\_UNKNOWN\_TYPE

CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

ASSIGN\_FIELD\_NOT\_IN\_RANGE

CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

DATASET\_OFFSET\_TOO\_LARGE

CX\_SY\_FILE\_POSITION

DYN\_CALL\_METH\_NOT\_IMPLEMENTED

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

EXPORT\_BUFFER\_NO\_MEMORY

CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

GENERATE\_SUBPOOL\_DIR\_FULL

CX\_SY\_GENERATE\_SUBPOOL\_FULL

MOVE\_CAST\_ERROR

CX\_SY\_MOVE\_CAST\_ERROR

PERFORM\_PROGRAM\_NAME\_TOO\_LONG

CX\_SY\_PROGRAM\_NOT\_FOUND

REPLACE\_INFINITE\_LOOP

CX\_SY\_REPLACE\_INFINITE\_LOOP


### abapcatch_sys.htm

---
title: "CATCH SYSTEM-EXCEPTIONS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_system-except_shortref.htm) Obsolete Syntax CATCH SYSTEM-EXCEPTIONS exc1 = n1 exc2 = n2... OTHERS = n_others. statement_block ENDCATCH. Effect Handling catchable runtime errors(https://
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm"
abapFile: "abapcatch_sys.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "abapcatch", "sys"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CATCH%20SYSTEM-EXCEPTIONS%2C%20ABAPCATCH_SYS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CATCH SYSTEM-EXCEPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_system-except_shortref.htm)

Obsolete Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Handling [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). The statement CATCH SYSTEM-EXCEPTIONS introduces a control structure containing a statement block statement\_block that is always processed. In the list exc1 = n1 exc2 = n2 ..., [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") and [exception groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_group_glosry.htm "Glossary Entry") can be specified in any order. A directly specified number n1 n2 ... must be assigned to each of them.

The OTHERS addition can be specified independently or after the list exc1 = n1 exc2 = n2 .... Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime framework.

The system handles the CATCH control structure as follows:

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the statement block is immediately terminated, the program continues after the statement ENDCATCH, and the number n1 n2 ... assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field sy-subrc. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, sy-subrc contains the assigned number of the first position in the list.

-   If a catchable runtime error occurs in the statement block that is not specified in the statement CATCH SYSTEM-EXCEPTIONS or is not contained in one of the specified exception groups, the program terminates with a [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry")

-   If the end of the statement block is reached and no runtime error occurs, sy-subrc is set to 0.

A CATCH control structure cannot be defined in the same [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), in which the class-based exceptions are handled in a [TRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) control structure or are raised by the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm).

Hints

-   Catchable runtime errors are not passed from called [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple CATCH control structures are nested, the system branches behind the ENDCATCH statement of the innermost CATCH control structure that handles the runtime error.
-   The handling of catchable runtime errors using CATCH SYSTEM-EXCEPTIONS is obsolete and should be replaced by a [TRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using RAISING, as well as by using TRY.

Example

Catches all possible catchable runtime errors in a statement block. Catchable runtime errors of the exception group ARITHMETIC\_ERRORS set sy-subrc to 4, all other catchable runtime errors set sy-subrc to 8. The division by 0 causes the catchable runtime error COMPUTE\_INT\_ZERODIVIDE, which is contained in the exception group ARITHMETIC\_ERRORS. In this case, sy-subrc is also set to 4.

DATA: result TYPE i,
      number TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4
                        OTHERS = 8.
  ...
  result = 1 / number.
  ...
ENDCATCH.
IF sy-subrc <> 0.
  ...
ENDIF.

Continue
[ENDCATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendcatch.htm)


### abapendcatch.htm

---
title: "ENDCATCH"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_system-except_shortref.htm) Obsolete Syntax ENDCATCH. Effect The statement ENDCATCH closes a control structure introduced by CATCH SYSTEM-EXCEPTIONS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/aba
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendcatch.htm"
abapFile: "abapendcatch.htm"
keywords: ["do", "if", "catch", "abapendcatch"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm) →  [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENDCATCH%2C%20ABAPENDCATCH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENDCATCH

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_system-except_shortref.htm)

Obsolete Syntax

ENDCATCH.

Effect

The statement ENDCATCH closes a control structure introduced by [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm).


### abapcatch_sys.htm

---
title: "CATCH SYSTEM-EXCEPTIONS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_system-except_shortref.htm) Obsolete Syntax CATCH SYSTEM-EXCEPTIONS exc1 = n1 exc2 = n2... OTHERS = n_others. statement_block ENDCATCH. Effect Handling catchable runtime errors(https://
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm"
abapFile: "abapcatch_sys.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "abapcatch", "sys"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_program_flow.htm) →  [Obsolete Catchable Runtime Errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem-exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CATCH%20SYSTEM-EXCEPTIONS%2C%20ABAPCATCH_SYS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CATCH SYSTEM-EXCEPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_system-except_shortref.htm)

Obsolete Syntax

CATCH SYSTEM-EXCEPTIONS *\[*exc1 = n1 exc2 = n2...*\]*
                        *\[*OTHERS = n\_others*\]*.
  *\[*statement\_block*\]*
ENDCATCH.

Effect

Handling [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). The statement CATCH SYSTEM-EXCEPTIONS introduces a control structure containing a statement block statement\_block that is always processed. In the list exc1 = n1 exc2 = n2 ..., [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") and [exception groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_group_glosry.htm "Glossary Entry") can be specified in any order. A directly specified number n1 n2 ... must be assigned to each of them.

The OTHERS addition can be specified independently or after the list exc1 = n1 exc2 = n2 .... Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime framework.

The system handles the CATCH control structure as follows:

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the statement block is immediately terminated, the program continues after the statement ENDCATCH, and the number n1 n2 ... assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field sy-subrc. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, sy-subrc contains the assigned number of the first position in the list.

-   If a catchable runtime error occurs in the statement block that is not specified in the statement CATCH SYSTEM-EXCEPTIONS or is not contained in one of the specified exception groups, the program terminates with a [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry")

-   If the end of the statement block is reached and no runtime error occurs, sy-subrc is set to 0.

A CATCH control structure cannot be defined in the same [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), in which the class-based exceptions are handled in a [TRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) control structure or are raised by the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm).

Hints

-   Catchable runtime errors are not passed from called [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple CATCH control structures are nested, the system branches behind the ENDCATCH statement of the innermost CATCH control structure that handles the runtime error.
-   The handling of catchable runtime errors using CATCH SYSTEM-EXCEPTIONS is obsolete and should be replaced by a [TRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using RAISING, as well as by using TRY.

Example

Catches all possible catchable runtime errors in a statement block. Catchable runtime errors of the exception group ARITHMETIC\_ERRORS set sy-subrc to 4, all other catchable runtime errors set sy-subrc to 8. The division by 0 causes the catchable runtime error COMPUTE\_INT\_ZERODIVIDE, which is contained in the exception group ARITHMETIC\_ERRORS. In this case, sy-subrc is also set to 4.

DATA: result TYPE i,
      number TYPE i.
CATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4
                        OTHERS = 8.
  ...
  result = 1 / number.
  ...
ENDCATCH.
IF sy-subrc <> 0.
  ...
ENDIF.

Continue
[ENDCATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendcatch.htm)


---


## ABAP - Keyword Documentation / ABAP - Programming Guidelines / Architecture / Error Handling

**Files**: 10 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Architecture / Error Handling

Included pages: 10


### abenerror_handling_gdl.htm

---
title: "Error Handling"
description: |
  Error situations are always a possibility when a program is being executed. These can be caused by: -   internal errors produced by faulty implementations or incorrect use of services -   external errors produced by incorrect user input or unexpected resource bottlenecks ABAP offers various method f
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm"
abapFile: "abenerror_handling_gdl.htm"
keywords: ["do", "if", "method", "class", "abenerror", "handling", "gdl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Error%20Handling%2C%20ABENERROR_HANDLING_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Error Handling

Error situations are always a possibility when a program is being executed. These can be caused by:

-   internal errors produced by faulty implementations or incorrect use of services
-   external errors produced by incorrect user input or unexpected resource bottlenecks

ABAP offers various method for responding to error situations like these.

-   [Reaction to Error Situations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreaction_error_guidl.htm "Guideline")
-   [Classic and Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_exception_guidl.htm "Guideline")
-   [Exception Categories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_guidl.htm "Guideline")
-   [Exception Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm "Guideline")
-   [Using Exception Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuse_exception_class_guidl.htm "Guideline")
-   [Handling and Propagating Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhandl_prop_except_guidl.htm "Guideline")
-   [Cleanups After Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencleanup_guidl.htm "Guideline")
-   [Assertions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertions_guidl.htm "Guideline")
-   [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessages_guidl.htm "Guideline")

Continue
[Reaction to Error Situations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreaction_error_guidl.htm)
[Classic and Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_exception_guidl.htm)
[Exception Categories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_guidl.htm)
[Exception Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm)
[Using Exception Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuse_exception_class_guidl.htm)
[Handling and Propagating Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhandl_prop_except_guidl.htm)
[Cleanups After Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencleanup_guidl.htm)
[Assertions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertions_guidl.htm)
[Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessages_guidl.htm)


### abenreaction_error_guidl.htm

---
title: "Reaction to Error Situations"
description: |
  Background ABAP provides the following concepts that a program can use to properly react to different error situations: -   Exceptions Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Excepti
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreaction_error_guidl.htm"
abapFile: "abenreaction_error_guidl.htm"
keywords: ["select", "do", "if", "class", "exception-handling", "abenreaction", "error", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Reaction%20to%20Error%20Situations%2C%20ABENREACTION_ERROR_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Reaction to Error Situations

Background   

ABAP provides the following concepts that a program can use to properly react to different error situations:

-   Exceptions
    
    Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exceptions are raised either by the ABAP runtime framework or with ABAP statements (RAISE EXCEPTION) in the program. Exception handling enables a response to be made to these events. An exception that is not handled results in a runtime error; that is, the program terminates and displays a short dump that describes the exception.
    
-   Assertions
    
    Assertions formulate conditions in a program that must be met to ensure a proper continuation of the program. An assertion is defined by the statement ASSERT.
    
-   Messages
    
    Messages are texts that can contain up to four placeholders for value replacements and that can be sent using the statement MESSAGE.
    
-   Program Terminations
    
    The language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) and [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) make it possible to resolve runtime errors linked with an exception object. The attributes of the exception object can be listed in the short dump of the runtime error.
    

These four concepts either involve the handling of the error situations by the program or the user (exceptions or error messages) or produce a controlled program termination (assertions, RAISE SHORTDUMP, THROW SHORTDUMP, and exit messages).

Rule   

Select an appropriate reaction to error situations

Select the appropriate concept of error handling (exception, assertion, message, or program termination) for the respective error situation so that the error can either be handled adequately in the further course of the program or is terminated in a controlled manner.

Details   

For each error situation, you should decide on one of the three concepts for error handling:

-   [Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_exception_guidl.htm "Guideline") are to be used in all unexpected situations that the user does not have under control. These include, for example, invalid parameter values during the procedure call or unavailable external resources, such as files.
-   [Assertions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertions_guidl.htm "Guideline") are to be used to detect inconsistent program states that necessitate an immediate program termination.
-   [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessages_guidl.htm "Guideline") are to be used only as dialog messages for error dialogs within the scope of classic dynpro processing (if still available). If you want to implement a program termination in situations where it is not a good idea for the program to continue, use assertions from now on instead of termination or exit messages.
-   Targeted program terminations should only be used as a last resource when a program cannot otherwise execute correctly. They can be raised by failed assertions RAISE SHORTDUMP, THROW SHORTDUMP, or exit messages. Exit messages, if used, offer the fewest options for passing error information to the short dump. Assertions make it possible to write log entries and can be controlled from outside the program. RAISE SHORTDUMP and THROW SHORTDUMP pass exception objects and their attributes, which is of particular use for analyzing previous exceptions.

The statement MESSAGE is not only used to send dialog messages in a classic dynpro, but can also be deployed to terminate a program in a controlled manner or raise classic exceptions in the [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) variant if the appropriate message type is selected. This invites you to combine the different concepts, which may lead to problems. This can be traced back to the old programming model that was driven exclusively by classic dynpros, in which an error situation directly required the output of a message to the user.

For contemporary programming that takes the [separation of concerns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenseparation_concerns_guidl.htm "Guideline") (SoC) into account, the question of whether a message is to be sent to the user in the event of an error can usually only be answered in a higher software layer. The layer in which such an error situation occurs must therefore react with an exception initially, which in turn represents a new situation for a higher layer, to which it can react with a dialog message or any other error message.


### abenclass_exception_guidl.htm

---
title: "Classic and Class-Based Exceptions"
description: |
  Background For reasons of downward compatibility, there are two options for defining standalone catchable exceptions in ABAP: -   Classic Exceptions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_non_class.htm) These exceptions can only be declared in the interfaces of m
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_exception_guidl.htm"
abapFile: "abenclass_exception_guidl.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "abenclass", "exception", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Classic%20and%20Class-Based%20Exceptions%2C%20ABENCLASS_EXCEPTION_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Classic and Class-Based Exceptions

Background   

For reasons of downward compatibility, there are two options for defining standalone catchable exceptions in ABAP:

-   [Classic Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_non_class.htm)
    
    These exceptions can only be declared in the interfaces of methods or function modules using EXCEPTIONS and can be raised within such a procedure using the statements [RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm). The procedure caller can use the addition EXCEPTIONS of the statements [meth( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm) or [CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function.htm) to assign return codes for the system field sy-subrc to the exceptions the caller wants to handle and evaluate them after the call.
    
-   [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm)
    
    These exceptions are defined by exception classes, from which an exception object can be created when an exception is raised (if a handler uses the addition INTO in CATCH). A class-based exception can either cancel the current context or allow for a resume. Exceptions are raised using the statement RAISE EXCEPTION and handled using CATCH in a TRY control structure. Class-based exceptions can be raised in any procedures and can be further propagated by any procedures.
    

The coexistence of the two exception concepts is regulated as follows:

-   Classic and class-based exceptions cannot be declared together in the interface of a procedure. Within a processing block, either only classic or only class-based exceptions can be raised.
-   For reasons of interoperability, within a processing block class-based exceptions can be handled and evaluate the return codes of function modules and methods using classic exceptions.

Rule   

Using Class-Based Exceptions

Only raise class-based exceptions in new procedures if it is possible to dispense with classic exceptions from the technical point of view.

Details   

User-defined classic exceptions are little more than return codes. If a classic exception is raised in a procedure using the statement RAISE, the sy-subrc system field is set according to the raised exception after the return to the calling program. The calling program itself must always check, by querying sy-subrc, whether an exception was raised and react to it if required, for example, by appropriate handling or explicit forwarding to its own calling program (by raising a separate equivalent exception). This does not improve the clarity of the program.

The raising of class-based exceptions, however, results in a change of the program flow. They can either be handled directly or propagated upwards along the call hierarchy. In this way, not every procedure ([method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) has to consider every possible exception situation itself. This supports the [separation of concerns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenseparation_concerns_guidl.htm "Guideline") within an application. Because the exception can be represented by an object of an exception class, this exception object can gather additional information about the exception situation and transport it to the handler. In contrast to classic exceptions, this can also include specific [exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm "Guideline").

By default, raising an exception stops the entire current context even if the exception is handled. However, there may be situations (mass data processing, for instance) in which a single error does not justify canceling an entire service. For these cases, class-based exceptions can be raised and propagated as resumable exceptions (RESUMABLE). A handler can decide whether a service is canceled completely or is resumed using the statement RESUME, for example after a corresponding log entry has been written.

Class-based exceptions completely replace the classic exceptions for new code (of course, there are exceptions to this rule) and add resumability. Although classic exceptions on the raiser side are completely obsolete from a technical point of view, the following must be considered for older code: Even if the raiser side is under control, it is not simply a case of switching older procedures over to class-based exceptions, because then all usage occurrences would have to be modified.

When existing procedures that use classic exceptions are called, they must continue to be handled in the new code. In this case, we recommend mapping the classic exceptions to equivalent class-based exceptions by using RAISE EXCEPTION. In this way, class-based error handling is provided that is uniform to the outside. The exception situation can then be forwarded to higher call layers without each layer having to react to this situation explicitly.

Exception

Since class-based exceptions are currently not supported in remote-enabled function modules (RFM), classic exceptions still need to be implemented and handled for remote function calls (RFCs).

Bad Example

The following source code shows the declaration and the raising of a classic exception in a method as well as their handling by evaluating sy-subrc after a call of the method. This procedure infringes the above rule.

CLASS application DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
    EXCEPTIONS application\_error.
ENDCLASS.

CLASS application IMPLEMENTATION.
  METHOD do\_something.
    ...
    RAISE application\_error.
    ...
  ENDMETHOD.
ENDCLASS.

...

... oref TYPE REF TO application.
...
oref->do\_something(
  EXCEPTIONS application\_error = 4 ).
IF sy-subrc <> 0.
  ...
ENDIF.

Good Example

The following source code shows the definition of an exception class, its declaration, and the raising in a method as well as its handling using CATCH after the call of the method in a TRY block.

CLASS cx\_application\_error DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS application DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      RAISING cx\_application\_error.
ENDCLASS.

CLASS application IMPLEMENTATION.
  METHOD do\_something.
    ...
    RAISE EXCEPTION TYPE cx\_application\_error.
    ...
  ENDMETHOD.
ENDCLASS.

...

... oref TYPE REF TO application.
...
TRY.
    oref->do\_something( ).
    CATCH cx\_application\_error.
      ...
ENDTRY.

This simple example is perhaps not the most obvious demonstration of the great advantage of class-based exceptions over classic exceptions. However, the advantage is clearly seen in nested procedure calls and the handling of exceptions that were raised in more distant call levels.


### abenexception_category_guidl.htm

---
title: "Exception Categories"
description: |
  Background Each class-based exception belongs to one of three different exception categories, each of which define whether the exceptions need to be declared in procedure interfaces. The assignment of an exception to an exception class is realized (technically) using inheritance. All exception class
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_guidl.htm"
abapFile: "abenexception_category_guidl.htm"
keywords: ["do", "if", "case", "catch", "method", "class", "abenexception", "category", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Categories%2C%20ABENEXCEPTION_CATEGORY_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exception Categories

Background   

Each class-based exception belongs to one of three different exception categories, each of which define whether the exceptions need to be declared in procedure interfaces. The assignment of an exception to an exception class is realized (technically) using inheritance. All exception classes are subclasses of the following abstract global classes, which themselves inherit from CX\_ROOT:

-   CX\_STATIC\_CHECK
    
    Exceptions of this category must be declared explicitly in the interface of a procedure, if they are to be propagated from this interface. The syntax check makes a static check to determine whether all exceptions raised in the procedure with RAISE EXCEPTION or declared in the interfaces of called procedures are either handled with CATCH or explicitly declared in the interface.
    
-   CX\_DYNAMIC\_CHECK
    
    Exceptions of this category must also be declared explicitly in the interface of a procedure to enable them to be propagated. This is not subject to a static syntax check, however, and is checked dynamically at runtime instead.
    
-   CX\_NO\_CHECK
    
    Exceptions of this category do not have to be declared explicitly in the interface of the procedure, since the class CX\_NO\_CHECK and its subclasses are always declared implicitly. Both to support the category change of an existing exception and to document the possible occurrence of exceptions of this category, exceptions of category CX\_NO\_CHECK may also be declared explicitly in procedure interfaces.
    

Rule   

Use a suitable exception category

When creating and raising class-based exceptions, always use an exception category suitable for the current error situation:

-   CX\_STATIC\_CHECK for the static protection of the exception handler
-   CX\_DYNAMIC\_CHECK for error situations that can be prevented by preconditions
-   CX\_NO\_CHECK for situations that cannot be handled immediately

Details   

The exception categories are designed for the following error situations:

-   As a rule, exceptions that are raised in a procedure should be handled there or declared in the interface for the procedure to declare to the caller which exceptions are to be expected. A syntax check to verify this is run on exceptions from the CX\_STATIC\_CHECK category. This category is therefore always warranted if a procedure ([method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) is to be forced to handle an exception or to at least forward it explicitly. However, if an exception can be prevented by prior checks, exceptions of the CX\_DYNAMIC\_CHECK category are preferable.
-   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case if prior to a division, for example, there is an explicit precondition for the denominator not to equal zero. In this case, exceptions from the CX\_DYNAMIC\_CHECK category can and should be used. These exceptions only need to be handled and declared if their occurrence cannot be otherwise prevented. In well modeled applications, exceptions are generally prevented by incorporating appropriate conditions in program code and CX\_DYNAMIC\_CHECK category should then be the most frequently used exception category.
-   For exception situations that can occur at any time and that cannot be handled directly, the CX\_NO\_CHECK category can be used. Otherwise, all exceptions that can be raised due to resource bottlenecks would have to be caught or declared. These exceptions would then have to be specified in practically every interface, which would result in more complex programs lacking in clarity.

Note

The resumability of a class-based exception is not an attribute of the exception class; it is defined instead by the RESUMABLE addition of the RAISE EXCEPTION statement when the exception is raised. This attribute can be lost for exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK during propagation, if the exceptions are not also declared there using RESUMABLE. CX\_NO\_CHECK always preserves its resumability implicitly.


### abenexception_texts_guidl.htm

---
title: "Exception Texts"
description: |
  Background Each global exception class has a predefined exception text(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts.htm) that has the same name as the exception class. This text can be edited and further exception texts can be defined. The exception texts of an ex
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm"
abapFile: "abenexception_texts_guidl.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenexception", "texts", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Texts%2C%20ABENEXCEPTION_TEXTS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exception Texts

Background   

Each global exception class has a predefined [exception text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts.htm) that has the same name as the exception class. This text can be edited and further exception texts can be defined. The exception texts of an exception class can be created either by referencing [messages in the table T100](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_t100.htm) or by referencing [texts in Online Text Repository (OTR)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_internal.htm).

For each exception text, Class Builder creates a static constant in the exception class with the same name as the exception text. When the exception is raised, this can be passed to the parameter TEXTID of the instance constructor to determine the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

From a technical perspective, the parameter TEXTID of the instance constructor can also be used to pass messages or texts from OTR as exception texts.

Rule   

Using Messages as Exception Texts

Messages should be used as exception texts for exception classes in applications. OTR texts should be restricted to system classes. Only the associated texts can be used when an exception is raised.

Details   

The following guideline describes how to choose the text category:

-   [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_t100.htm) should be used as exception texts in all exception classes in application programming.
-   [OTR texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_internal.htm) should only be used in system classes, namely exception classes for system exceptions. OTR offers various benefits when compared with messages, such as no restriction to 73 characters and unlimited placeholders, but lacks full tool support. More specifically, [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") do not support OTR texts.

From a technical perspective, it is possible to pass a data object to the input parameter TEXTID of the instance constructor when an exception is raised. This data object specifies either a message or an OTR text, depending on the text category. This approach is, however, absolutely not advisable. If the parameter TEXTID is used, an exception can only be raised with the texts specific to it. Only the associated constants of the exception class can be passed to the input parameter TEXTID of the instance constructor.

Hints

-   In cases where a class-based exception is used to wrap a [classic exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_exception_guidl.htm "Guideline") and [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) is used to associate this classic exception with a message text (or after a message is caught using [error\_message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_parameter.htm)), the class-based exception can use the same message text regardless of whether the program in question is a system program or application program. The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) are used for these cases.
-   Classic exceptions are not associated with exception texts. If classic exceptions are required for reasons of downward compatibility, the statement [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) gives the option of emulating exception texts here. Using MESSAGE ...RAISING in cases in which non-class-based exceptions must still be used is preferable to using the statement RAISE, because it offers the option of providing additional text information with an exception.

Bad Example

The following source code passes a [UUID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuuid_glosry.htm "Glossary Entry") for an OTR text to the input parameter TEXTID of the instance constructor when an exception is raised. According to the rule above, however, only exception texts from the exception class can be passed, with each exception class containing the corresponding constants.

...
DATA otr\_id TYPE sotr\_conc.
otr\_id = '9753EBD0102AD0418D902B8D972083C4'.
RAISE EXCEPTION TYPE cx\_system\_exception
   EXPORTING
      textid = otr\_id.
...

Good Example

The following source code passes the constant for the associated OTR text to the input parameter TEXTID of the instance constructor when an exception is raised, as specified by the rule above.

...
RAISE EXCEPTION TYPE cx\_system\_exception
   EXPORTING
      textid = cx\_system\_exception=>cx\_system\_exception.
...


### abenuse_exception_class_guidl.htm

---
title: "Using Exception Classes"
description: |
  Background The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuse_exception_class_guidl.htm"
abapFile: "abenuse_exception_class_guidl.htm"
keywords: ["do", "if", "method", "class", "abenuse", "exception", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20Exception%20Classes%2C%20ABENUSE_EXCEPTION_CLASS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using Exception Classes

Background   

The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You can divide an exception class into multiple subexceptions by creating multiple exception texts. Subclasses of exception classes can be used to make the information even more specific.

Rule   

Only use suitable exception classes

When describing an error situation, only use exception classes with the correct category and name, the appropriate attributes and texts, and which contain the correct documentation. Do not reuse inappropriate exception classes.

Details   

Reusing existing exception classes with the wrong content removes all benefits of freely definable exception classes. The new exception object cannot describe the exception situation adequately. It also makes it very difficult to maintain and analyze the code. In particular, you run a great risk of handling the exception incorrectly. This is because a caller layer higher up in the hierarchy never expects the exceptions it handles to be raised by a situation with the wrong semantics.

The following procedure is recommended for raising correct exceptions:

1.  Search for an existing exception class that is released for use in the current concept (and as part of the package concept) and which matches that error situation exactly.
2.  Make an existing, almost ideal exception class more specific by passing on and/or adding new exception texts.
3.  Create an new ideal exception class, possibly as a part of a predefined inheritance hierarchy.

In doing so, it must be ensured that an appropriate [exception category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_category_guidl.htm "Guideline") is used.

Bad Example

The following source code shows the incorrect use of the system class cx\_sy\_arithmetic\_overflow (which exists in every system) for an application-specific exception situation. This system exception should usually only be raised by the ABAP runtime framework when an arithmetic calculation takes place.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_sy\_arithmetic\_overflow.
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows how an application-specific exception class is used that has been created especially for the situation and whose name reflects the topic.

CLASS cx\_warehouse\_out\_of\_capacity DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING cx\_warehouse\_out\_of\_capacity.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_warehouse\_out\_of\_capacity.
    ...
  ENDMETHOD.
ENDCLASS.


### abenhandl_prop_except_guidl.htm

---
title: "Handling and Propagating Exceptions"
description: |
  Background If a class-based exception is raised, it is propagated automatically between the call layers until the exception is handled or an interface is violated: -   If the exception is raised in a TRY block, the system searches for a suitable CATCH block to handle it. -   If the user leaves the p
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhandl_prop_except_guidl.htm"
abapFile: "abenhandl_prop_except_guidl.htm"
keywords: ["do", "while", "if", "case", "try", "catch", "class", "abenhandl", "prop", "except", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Handling%20and%20Propagating%20Exceptions%2C%20ABENHANDL_PROP_EXCEPT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Handling and Propagating Exceptions

Background   

If a class-based exception is raised, it is propagated automatically between the call layers until the exception is handled or an interface is violated:

-   If the exception is raised in a TRY block, the system searches for a suitable CATCH block to handle it.
-   If the user leaves the procedure context during the handler search, the procedure's interface will be checked. Only exceptions declared in the interface can be propagated from the procedure. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly with RAISING, while exceptions of category CX\_NO\_CHECK are always declared implicitly but can also be declared explicitly. If the interface is violated, the predefined exception CX\_SY\_NO\_HANDLER is raised at the calling position of the procedure. A reference to the original exception is defined in the PREVIOUS attribute of the exception.

If no handler is found in any of the TRY control structures involved, or if the exception is raised outside a TRY control structure, this results in a runtime error at the raise position of the exception. The short dump of the runtime error contains the name of the exception class and the exception text.

Rule   

Catch exceptions or forward them when appropriate

Only catch exceptions that you can handle appropriately in the current context. When you forward exceptions from the underlying software layers, they are supposed to be mapped to corresponding exceptions of the current software layer.

Details   

When you call a procedure whose interface includes class-based exceptions, you must decide (for each exception) whether the exception can be handled at this position or should be forwarded to your own calling program. Exceptions that cannot be handled appropriately at the current call level must be forwarded to the superordinate call level. For class-based exceptions, this is done implicitly by avoiding handling within the current call level. You should only allow a runtime error to occur in cases where you are absolutely sure that catching or propagating exceptions is not useful.

When you forward exceptions along the call sequence across multiple layers, they usually move from lower technical layers to higher, more abstract layers that are closer to the application. The calling program in these higher layers does not necessarily know the implementation details of the lower layers and therefore cannot interpret exceptions appropriately. For this reason, exceptions should not exceed the boundaries between software layers. Instead they should be mapped to suitable exceptions with a higher degree of abstraction.

Therefore, we recommend that you do not rely on automatic propagation for forwarding between software layers. Instead, you should catch the original exception and map an exception in the current context by raising a new exception (the context between the originally raised exception and the final exception should be preserved by using the PREVIOUS attribute). This ensures that the calling program of a procedure only receives exceptions that it can understand. This type of procedure is required anyway, for package encapsulation purposes, if exceptions have to be forwarded between software layers.

Note

Forwarding the exceptions to higher software layers usually results in a generalization of previously very special exceptions. The more general an exception is, the higher the software layer usually is in which it is handled. In particular, the most general of all possible exceptions (in other words, the exceptions of type CX\_STATIC\_CHECK, CX\_DYNAMIC\_CHECK, CX\_NO\_CHECK, or CX\_ROOT) should only be caught at the highest software layers and only if a runtime error must be avoided at all costs.


### abencleanup_guidl.htm

---
title: "Cleanups After Exceptions"
description: |
  Background Every TRY control structure can contain a CLEANUP block. If a class-based exception is raised in the TRY block of the same TRY control structure, but is handled in a CATCH block of an external TRY control structure, the CLEANUP block is executed before the context of the exception is dele
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencleanup_guidl.htm"
abapFile: "abencleanup_guidl.htm"
keywords: ["select", "delete", "do", "if", "case", "try", "catch", "class", "data", "exception-handling", "abencleanup", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Cleanups%20After%20Exceptions%2C%20ABENCLEANUP_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Cleanups After Exceptions

Background   

Every TRY control structure can contain a CLEANUP block. If a class-based exception is raised in the TRY block of the same TRY control structure, but is handled in a CATCH block of an external TRY control structure, the CLEANUP block is executed before the context of the exception is deleted. Therefore, when a handler is executed the CLEANUP blocks of all TRY control structures that have been unsuccessfully searched for a handler up until that point are executed from the inside out.

The addition BEFORE UNWIND of the CATCH statement determines whether execution takes place before or after handling. However, the CLEANUP blocks are not executed if RESUME is used during exception handling to restart in the context of the exception.

Rule   

Cleanup Before Forwarding

Before forwarding an exception to higher-level call layers, perform the necessary cleanups in the CLEANUP block.

Details   

Each exception changes the program flow and can thus pose a significant risk to the consistency of an application. If you decide not to handle an exception, but to [forward](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhandl_prop_except_guidl.htm "Guideline") it, you must make sure that you leave the current software layer in a consistent state. You can implement the CLEANUP block in this case, to execute cleanups before the exception is forwarded to higher-level software layers.

Bad Example

The following source code shows the forwarding of an exception without first explicitly closing an open resource (in this case a database cursor). The closing of the database cursor is implicitly delegated to any exception handler.

TRY.
  OPEN CURSOR db\_cursor
    FOR SELECT ...
    ...
  CATCH cx\_sy\_sql\_error INTO exc.
    RAISE EXCEPTION TYPE cx\_persistency\_error
      EXPORTING previous = exc.
ENDTRY.

Good Example

The following source code shows the same example as above, but the database cursor is closed in the CLEANUP block.

TRY.
  OPEN CURSOR db\_cursor
    FOR SELECT ...
    ...
  CATCH cx\_sy\_sql\_error INTO exc.
    RAISE EXCEPTION TYPE cx\_persistency\_error
      EXPORTING previous = exc.
  CLEANUP.
    CLOSE CURSOR db\_cursor.
ENDTRY.


### abenassertions_guidl.htm

---
title: "Assertions"
description: |
  Background The ASSERT(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm) statement is used to express an assertion in an ABAP program. Such an assertion is either always active or can be activated externally by assignment to a checkpoint group. When the program reaches an a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertions_guidl.htm"
abapFile: "abenassertions_guidl.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abenassertions", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assertions%2C%20ABENASSERTIONS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assertions

Background   

The [ASSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm) statement is used to express an assertion in an ABAP program. Such an assertion is either always active or can be activated externally by assignment to a checkpoint group. When the program reaches an active assertion, it evaluates the corresponding condition. If the condition is violated, the following happens, depending on the type of activation:

-   The program is terminated with the runtime error ASSERTION\_FAILED.
-   The program branches to the ABAP Debugger.
-   A log entry is created.

Assertions, together with breakpoints and logpoints, form the checkpoints of a program; these are not part of the application logic, but are used for development and maintenance support.

Rule   

Use assertions

Use assertions to check the state of a program for consistency at all locations where this is possible.

Details   

Each program logic is based on certain assumptions. If these assumptions are not met, there are obviously errors in the program and there is no point in executing it any further. In this case, you should stop the execution of the program immediately to avoid any further damage, such as persisted incorrect data. In this way, you can also identify errors early on that would otherwise remain undiscovered.

The ASSERT statement is most suitable for guaranteeing this consistency since it is linked directly to a condition and terminates the program if this condition is violated.

Furthermore, assertions make program maintenance easier by enabling developers to express their assumptions explicitly. The reader of the source code is immediately aware of these assumptions; this gives them a better understanding of the program logic.

If it will take too long to check an assertion condition, you can use the activatable assertions that are linked to checkpoint groups. These can be activated selectively during development, testing, or troubleshooting; otherwise they are not performed. If you suspect an error in a production system, you can also activate activatable assertions there.

Exception

Do not use assertions to check states that are out of the developer's control, such as invalid call parameter values or availability of external resources. In this case, use exceptions, since this enables the caller to react to unexpected states like these.

Example

The following source code shows a program extract in which a line is read from an internal table. The program logic here assumes that this access is always successful. This expectation is checked at runtime by the subsequent assertion, and also documented for the reader.

...
READ TABLE items INTO current\_item INDEX current\_index.
ASSERT sy-subrc = 0.
...


### abenmessages_guidl.htm

---
title: "Messages"
description: |
  Background Messages are texts that are created using a message maintenance(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_maintenance_glosry.htm 'Glossary Entry'). They are stored in the system table T100. In ABAP programs, the statement MESSAGE(https://help.sap.com/doc/a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessages_guidl.htm"
abapFile: "abenmessages_guidl.htm"
keywords: ["do", "if", "case", "try", "method", "class", "types", "exception-handling", "abenmessages", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenerror_handling_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%2C%20ABENMESSAGES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages

Background   

Messages are texts that are created using a [message maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_maintenance_glosry.htm "Glossary Entry"). They are stored in the system table T100. In ABAP programs, the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) is the main element for using messages. In its basic form, this statement sends a message; by specifying a message type, the display type and subsequent program behavior can be defined. For this reason, a distinction is made between the following message types:

-   Status message (S)
-   Information message (I)
-   Warning (W)
-   Error message (E)
-   Termination (abort) message (A)

In addition, there is a special message type, exit message (X), which causes a targeted program termination with a runtime error.

The actual system behavior after a message is sent is highly context-dependent. The current version of the ABAP keyword documentation contains a [detailed list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages_types.htm) of effects caused by different message types in different contexts (such as dialog processing, background processing, during an RFC and during the processing of HTTP requests).

The original purpose of messages is to act as dialog messages to display short information (types I and S) and handle incorrect user input (types W and E), during classic dynpro processing. Messages also have aspects that overlap with exceptions:

-   The statement [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) is a combination of the statements MESSAGE and RAISE which enables classic exceptions to be linked with messages.
-   Using the special, predefined classic exception, error\_message, error and termination messages (that occur when function modules run) can be handled in the same way as exceptions. This also applies to messages sent from the ABAP runtime framework (for example, when the automatic input check of classic dynpros is running).
-   In exception classes, [exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm "Guideline") can be defined with a reference to messages. The message types A and X can also be used for direct program terminations.

Hint

A further variant, [MESSAGE ... INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_into.htm) makes it possible to copy the short texts of messages into fields.

Rule   

Only use messages for error handling in classic dynpros and as exception texts

Only send dialog messages in PAI processing of classic dynpros. Messages should only be used as exception texts and should no longer be used anywhere else. In particular, messages should no longer be used to force program terminations.

Details   

The wide use of messages for different purposes can be traced back to the previous programming model, which was only driven by classic dynpros. Here, an exception situation usually always required the direct output of a message to the user. This concept was adopted for other situations, such as targeted program terminations. Triggering a dialog message within application logic procedures violates the [SoC principle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenseparation_concerns_guidl.htm "Guideline") and limits the usability of the relevant procedure ([Method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) to the context of classic dynpro processing. The predefined exception error\_message should be regarded as a workaround that enables procedures to be executed for sending messages in the application logic or in the background.

In new programs, the use of messages should be restricted as described below.

Dialog Messages

In cases where [classic dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_interfaces_gdl.htm) are still used, message types E, I, S, and W are still suitable for sending information to the user or for running error dialogs at the time of PAI (which is the original purpose of these messages types). Running error dialogs, in particular, is supported by the statements FIELD and CHAIN of the dynpro flow logic.

Exception Texts

Messages are the recommended category of text for [exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm "Guideline"). The statement MESSAGE allows these exception texts to be sent directly as dialog messages. A reference to a corresponding exception object can be specified directly. From a technical point of view, a reference must be specified to an object whose class implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message.htm).

Messages in procedures where classic exceptions are still necessary can serve to replace real exception texts. This is done by using the statement [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) instead of [RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm). During this process, information about the exception text is passed to the handler, in the system fields sy-msgid and sy-msgv1 - sy-msgv4. These fields are filled using the statement MESSAGE. This works especially well for handling exceptions during an RFC, for which class-based exception handling is not possible. When a classic exception of this type is handled or a message caught using [error\_message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_parameter.htm), the message can then be raised as an exception and forwarded with a suitable message class. The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) are used for these cases.

Program Terminations

Message types A and X cause program terminations (aborts) and should no longer be used:

-   If a termination message of type A is sent, the statement ROLLBACK WORK is executed implicitly. This can lead to unexpected results, if the message is handled with error\_message as a classic exception (rather than causing a program termination) To be on the safe side, the statements ROLLBACK WORK and LEAVE PROGRAM should be used explicitly to exit the program.
-   If a message of type X is sent, the program is terminated with the runtime error MESSAGE\_TYPE\_X. When programs are forced to terminate due to internal inconsistencies, however, [assertions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertions_guidl.htm "Guideline") or the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) or [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) should now be used. The values specified here using the addition FIELDS of the statement ASSERT or the exception object RAISE SHORTDUMP or THROW SHORTDUMP are usually better suited for troubleshooting than a message.

Exception

Exit messages can still be used if you want only the text of the message to appear in the short dump of the runtime error. However, this should not be misunderstood as communication with the user. A runtime error is not a suitable way of communicating with users. For a simple, unconditional program termination, however, exit messages should no longer be used. Instead, where required, the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_shortdump.htm) or [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) can be used instead.


---
