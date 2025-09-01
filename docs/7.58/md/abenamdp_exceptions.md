---
title: "AMDP - Exception Classes"
description: |
  The names of the exception classes of the exceptions that can be handled when an AMDP procedure implementation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) is called start with the prefix CX_AMDP. The exceptions are all in the category CX_DYNAMIC_CH
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_exceptions.htm"
abapFile: "abenamdp_exceptions.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abenamdp", "exceptions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Exception%20Classes%2C%20ABENAMDP_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Exception Classes

The names of the exception classes of the exceptions that can be handled when an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_methods.htm) is called start with the prefix CX\_AMDP. The exceptions are all in the category CX\_DYNAMIC\_CHECK and must be declared explicitly using [RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_general.htm) in the definition of an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") to be catchable when this method is called. The meaning of the exception classes is documented in their semantic properties in the class library.

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

No exceptions can be declared for [AMDP function implementations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_methods.htm).