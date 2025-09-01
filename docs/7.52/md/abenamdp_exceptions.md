  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) → 

AMDP - Exception Classes

The names of the exception classes of the exceptions that can be handled when an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_methods.htm'\)) is called start with the prefix CX\_AMDP. The exceptions are all in the category CX\_DYNAMIC\_CHECK and must be declared explicitly using [RAISING](javascript:call_link\('abapmethods_general.htm'\)) in the definition of an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") to be handleable when this method is called. The meaning of the exception classes is documented in their semantic attributes in the class library.

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
           |    |--CX\_AMDP\_CDS\_CLIENT\_MISMATCH
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

Note

No exceptions can be declared for [AMDP function implementations](javascript:call_link\('abenamdp_function_methods.htm'\)).