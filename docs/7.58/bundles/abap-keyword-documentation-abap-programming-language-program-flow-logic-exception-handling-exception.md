# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Exceptions in ABAP Statements

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_language_exceptions.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)
- [abenabap_exception_classes.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.995Z

---

### abenabap_language_exceptions.htm

> **📖 Official SAP Documentation**: [abenabap_language_exceptions.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenabap_language_exceptions.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%20in%20ABAP%20Statements%2C%20ABENABAP_LANGUAGE_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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



**📖 Source**: [abenabap_language_exceptions.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

### abenabap_exception_classes.htm

> **📖 Official SAP Documentation**: [abenabap_exception_classes.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenabap_exception_classes.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabap_exception_classes.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exception_classes.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions in ABAP Statements](javascript:call_link\('abenabap_language_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Classes%20for%20ABAP%20Statements%2C%20ABENABAP_EXCEPTION_CLASSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Exception Classes for ABAP Statements

The catchable [exceptions in ABAP statements](javascript:call_link\('abenabap_language_exceptions.htm'\)) are related to the predefined exception classes listed below, which are subclasses of the classes CX\_DYNAMIC\_CHECK and CX\_NO\_CHECK. These exception classes replace the obsolete [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"). The keyword documentation lists the type of exceptions that can be raised for each statement.

When catching a superclass exception with [CATCH](javascript:call_link\('abapcatch_try.htm'\)), all of its subclass exceptions are also caught. To improve the structure, intermediate abstract classes were introduced so that groups of exceptions can be caught simultaneously.

Each exception class includes message texts, which can be found in the Texts tab in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry").

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
