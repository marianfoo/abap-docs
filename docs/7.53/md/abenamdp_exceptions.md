---
title: "AMDP - Exception Classes"
description: |
  The names of the exception classes of the exceptions that can be handled when an AMDP procedure implementation(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_methods.htm) is called start with the prefix CX_AMDP. The exceptions are all in the category CX_DYNAMIC_CH
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_exceptions.htm"
abapFile: "abenamdp_exceptions.htm"
keywords: ["do", "try", "method", "class", "data", "abenamdp", "exceptions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) → 

AMDP - Exception Classes

The names of the exception classes of the exceptions that can be handled when an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_methods.htm) is called start with the prefix CX\_AMDP. The exceptions are all in the category CX\_DYNAMIC\_CHECK and must be declared explicitly using [RAISING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_general.htm) in the definition of an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") to be handleable when this method is called. The meaning of the exception classes is documented in their semantic attributes in the class library.

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

Note

No exceptions can be declared for [AMDP function implementations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm).