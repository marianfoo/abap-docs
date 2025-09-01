  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Exceptions in ABAP Statements](javascript:call_link\('abenabap_language_exceptions.htm'\)) → 

Exception Classes for ABAP Statements

The handleable [exceptions in ABAP statements](javascript:call_link\('abenabap_language_exceptions.htm'\)) can be caught using the predefined exception classes listed below. These classes are subclasses of the classes CX\_DYNAMIC\_CHECK and CX\_NO\_CHECK. These exception classes replace the obsolete [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"). The keyword documentation lists the type of exceptions that can be raised for each statement.

To improve the structure, intermediate abstract classes were introduced so that groups of exceptions can be caught simultaneously.

Each exception class includes message texts, which can be displayed by choosing the Texts tab in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"). The following links open Class Builder for the exception class in question.

CX\_ROOT
  |
  |--CX\_STATIC\_CHECK
  |
  |--CX\_DYNAMIC\_CHECK
  |    |
  |    |--CX\_SY\_ARITHMETIC\_ERROR
  |    |    |
  |    |    |--CX\_SY\_ZERODIVIDE
  |    |    |
  |    |    |--CX\_SY\_ARITHMETIC\_OVERFLOW
  |    |    |
  |    |    |--CX\_SY\_ARG\_OUT\_OF\_DOMAIN
  |    |    |
  |    |    |--CX\_SY\_PRECISION\_LOSS
  |    |
  |    |--CX\_SY\_ASSIGN\_ERROR
  |    |    |
  |    |    |--CX\_SY\_ASSIGN\_CAST\_ERROR
  |    |    |    |
  |    |    |    |--CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST
  |    |    |    |
  |    |    |    |--CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE
  |    |    |
  |    |    |--CX\_SY\_ASSIGN\_OUT\_OF\_RANGE
  |    |
  |    |--CX\_SY\_CODEPAGE\_CONVERTER\_INIT
  |    |
  |    |--CX\_SY\_CONVERSION\_ERROR
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_CODEPAGE
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_CODEPAGE\_EX
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_DATA\_LOSS
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_INEXACT\_FLTP
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_BOOLEAN
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_DATE\_TIME
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_NUMBER
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_QNAME
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_RAW
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_TIME
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_NO\_UUID
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_OVERFLOW
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_ROUNDING
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT
  |    |    |
  |    |    |--CX\_SY\_CONVERSION\_UNKNOWN\_LANGU
  |    |
  |    |--CX\_SY\_CREATE\_ERROR
  |    |    |
  |    |    |--CX\_SY\_CREATE\_OBJECT\_ERROR
  |    |    |
  |    |    |--CX\_SY\_CREATE\_DATA\_ERROR
  |    |
  |    |--CX\_SY\_DATA\_ACCESS\_ERROR
  |    |    |
  |    |    |--CX\_SY\_RANGE\_OUT\_OF\_BOUNDS
  |    |    |
  |    |    |--CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS
  |    |    |
  |    |    |--CX\_SY\_OFFSET\_NOT\_ALLOWED
  |    |
  |    |--CX\_SY\_DB\_PROCEDURE\_CALL
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_CONNECTION
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_NOT\_FOUND
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_NOT\_SUPP
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_OVERFLOW
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE\_PARAMETER
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
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_FORM
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD
  |    |    |
  |    |    |--CX\_SY\_DYN\_CALL\_PARAMETER\_ERROR
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
  |    |    |--CX\_SY\_FILE\_AUTHORITY
  |    |    |
  |    |    |--CX\_SY\_FILE\_CLOSE
  |    |    |
  |    |    |--CX\_SY\_FILE\_IO
  |    |    |
  |    |    |--CX\_SY\_FILE\_OPEN
  |    |    |
  |    |    |--CX\_SY\_FILE\_OPEN\_MODE
  |    |    |
  |    |    |--CX\_SY\_FILE\_POSITION
  |    |    |
  |    |    |--CX\_SY\_FILE\_TRUNCATE
  |    |
  |    |--CX\_SY\_FIND\_INFINITE\_LOOP
  |    |
  |    |--CX\_SY\_GEN\_SOURCE\_TOO\_WIDE
  |    |
  |    |--CX\_SY\_IMPORT\_MISMATCH\_ERROR
  |    |    |
  |    |    |--CX\_SY\_IMPORT\_FORMAT\_ERROR
  |    |
  |    |--CX\_SY\_ITAB\_ERROR
  |    |    |
  |    |    |--CX\_SY\_ITAB\_DUPLICATE\_KEY
  |    |    |
  |    |    |--CX\_SY\_ITAB\_DYN\_LOOP
  |    |    |
  |    |    |--CX\_SY\_ITAB\_LINE\_NOT\_FOUND
  |    |
  |    |--CX\_SY\_MATCHER
  |    |    |
  |    |    |--CX\_SY\_REGEX\_TOO\_COMPLEX
  |    |    |
  |    |    |--CX\_SY\_INVALID\_REGEX\_FORMAT
  |    |
  |    |--CX\_SY\_MOVE\_CAST\_ERROR
  |    |
  |    |--CX\_SY\_PROGRAM\_NOT\_FOUND
  |    |
  |    |--CX\_SY\_PROVIDE\_EXCEPTION
  |    |    |
  |    |    |--CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP
  |    |    |
  |    |    |--CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED
  |    |
  |    |--CX\_SY\_READ\_SRC\_LINE\_TOO\_LONG
  |    |
  |    |--CX\_SY\_REF\_IS\_INITIAL
  |    |
  |    |--CX\_SY\_REGEX
  |    |    |
  |    |    |--CX\_SY\_INVALID\_REGEX
  |    |
  |    |--CX\_SY\_REPLACE\_INFINITE\_LOOP
  |    |
  |    |--CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE
  |    |
  |    |--CX\_SY\_SQL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_DB\_PROCEDURE
  |    |    |    |
  |    |    |    |--CX\_SY\_DB\_PROCEDURE\_SQL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_EXPIMP\_DB\_SQL\_ERROR
  |    |    |
  |    |    |--CX\_SY\_OPEN\_SQL\_ERROR
  |    |    |    |
  |    |    |    |--CX\_SY\_OPEN\_SQL\_DB
  |    |    |    |
  |    |    |    |--CX\_SY\_DYNAMIC\_OSQL\_ERROR
  |    |    |    |    |
  |    |    |    |    |--CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS
  |    |    |    |    |
  |    |    |    |    |--CX\_SY\_DYNAMIC\_OSQL\_SYNTAX
  |    |    |    |
  |    |    |    |--CX\_SY\_SQL\_UNSUPPORTED\_FEATURE
  |    |    |
  |    |    |--CX\_SY\_NATIVE\_SQL\_ERROR
  |    |
  |    |--CX\_SY\_UNKNOWN\_CURRENCY
  |    |
  |    |--CX\_SY\_WRITE\_INVALID\_STYLE
  |    |
  |    |--CX\_SY\_WRITE\_SRC\_LINE\_TOO\_LONG
  |    |
  |    |--CX\_TRANSFORMATION\_ERROR
  |         |
  |         |--CX\_ST\_ERROR
  |         |    |
  |         |    |--CX\_ST\_CALL\_ERROR
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
  |         |--CX\_XSLT\_EXCEPTION
  |              |
  |              |--CX\_XSLT\_SYSTEM\_ERROR
  |                   |
  |                   |--CX\_XSLT\_ABAP\_CALL\_ERROR
  |                   |
  |                   |--CX\_XSLT\_DESERIALIZATION\_ERROR
  |                   |
  |                   |--CX\_XSLT\_FORMAT\_ERROR
  |                   |
  |                   |--CX\_XSLT\_RUNTIME\_ERROR
  |                   |
  |                   |--CX\_XSLT\_SERIALIZATION\_ERROR
  |         |
  |         |--CX\_SY\_TRANS\_OPTION\_ERROR
  |
  |--CX\_NO\_CHECK
       |
       |--CX\_BADI
       |    |
       |    |--CX\_BADI\_CONTEXT\_ERROR
       |    |
       |    |--CX\_BADI\_FILTER\_ERROR
       |    |
       |    |--CX\_BADI\_INITIAL\_CONTEXT
       |    |
       |    |--CX\_BADI\_INITIAL\_REFERENCE
       |    |
       |    |--CX\_BADI\_NOT\_SINGLE\_USE
       |    |    |
       |    |    |--CX\_BADI\_MULTIPLY\_IMPLEMENTED
       |    |    |
       |    |    |--CX\_BADI\_NOT\_IMPLEMENTED
       |    |
       |    |--CX\_BADI\_UNKNOWN\_ERROR
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
       |--CX\_SY\_REMOTE\_CALL\_ERROR
       |    |
       |    |--CX\_SY\_RMC\_COMM\_FAILURE
       |    |
       |    |--CX\_SY\_RMC\_INVALID\_STATUS
       |    |
       |    |--CX\_SY\_RMC\_SYSTEM\_FAILURE
       |
       |--CX\_SY\_TOO\_MANY\_FILES