  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Exception%20Classes%2C%20ABENAMDP_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Exception Classes

The names of the exception classes of the exceptions that can be handled when an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_methods.htm'\)) is called start with the prefix CX\_AMDP. The exceptions are all in the category CX\_DYNAMIC\_CHECK and must be declared explicitly using [RAISING](javascript:call_link\('abapmethods_general.htm'\)) in the definition of an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") to be catchable when this method is called. The meaning of the exception classes is documented in their semantic properties in the class library.

CX\_ROOT
  |
  |--CX\_DYNAMIC\_CHECK
       |
       |--CX\_AMDP\_ERROR
           |
           |--CX\_AMDP\_VERSION\_ERROR
           |    |
           |    |--CX\_AMDP\_VERSION\_MISMATCH
           |
           |--CX\_AMDP\_CREATION\_ERROR
           |    |
           |    |--CX\_AMDP\_DBPROC\_GENERATE\_FAILED
           |    |
           |    |--CX\_AMDP\_DBPROC\_CREATE\_FAILED
           |    |
           |    |--CX\_AMDP\_NATIVE\_DBCALL\_FAILED
           |    |
           |    |--CX\_AMDP\_WRONG\_DBSYS
           |
           |--CX\_AMDP\_EXECUTION\_ERROR
           |    |
           |    |--CX\_AMDP\_EXECUTION\_FAILED
           |    |
           |    |--CX\_AMDP\_IMPORT\_TABLE\_ERROR
           |    |
           |    |--CX\_AMDP\_RESULT\_TABLE\_ERROR
           |
           |--CX\_AMDP\_CONNECTION\_ERROR
                |
                |--CX\_AMDP\_NO\_CONNECTION
                |
                |--CX\_AMDP\_NO\_CONNECTION\_FOR\_CALL
                |
                |--CX\_AMDP\_WRONG\_CONNECTION

Hint

No exceptions can be declared for [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\)).