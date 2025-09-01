  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-620.htm) → 

New Handleable Exceptions in Release 6.20

[1\. Handleable exceptions in method calls](#!ABAP_MODIFICATION_1@1@)

[2\. Handleable exceptions in function module calls](#!ABAP_MODIFICATION_2@2@)

[3\. Handleable exceptions in down casts](#!ABAP_MODIFICATION_3@3@)

[4\. Handleable exceptions in ABAP SQL](#!ABAP_MODIFICATION_4@4@)

[5\. Handleable exceptions in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)

[6\. Handleable exceptions in GENERATE REPORT*|*SUBROUTINE POOL](#!ABAP_MODIFICATION_6@6@)

[7\. Handleable exceptions in SCAN](#!ABAP_MODIFICATION_7@7@)

[8\. Handleable exceptions in EXPORT TO SHARED MEMORY](#!ABAP_MODIFICATION_8@8@)

[9\. Handleable exceptions in PROVIDE](#!ABAP_MODIFICATION_9@9@)

Modification 1

Handleable Exceptions in Method Calls

The following exceptions can now be handled in [method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm), having been assigned to existing exception classes:

-   CALL\_METHOD\_NOT\_IMPLEMENTED
    
-   CALL\_METHOD\_NOT\_ACCESSIBLE
    
-   CALL\_METHOD\_CONFLICT\_TAB\_TYPE
    
-   CALL\_METHOD\_CONFLICT\_GEN\_TYPE
    
-   CALL\_METHOD\_CONFLICT\_TYPE
    

Modification 2

Handleable Exceptions in Function Module Calls

In [CALL FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function.htm), the following exceptions can now be handled, having been assigned to existing exception classes. The new exception class CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC was introduced only for the first two exceptions in the following list:

-   CALL\_FUNCTION\_NOT\_ACTIVE
    
-   CALL\_FUNCTION\_NOT\_FOUND
    
-   CALL\_FUNCTION\_PARM\_MISSING
    
-   CALL\_FUNCTION\_PARAM\_NOT\_FOUND
    
-   CALL\_FUNCTION\_CONFLICT\_GEN\_TYP
    
-   CALL\_FUNCTION\_CONFLICT\_LENG
    
-   CALL\_FUNCTION\_CONFLICT\_TYPE
    
-   CALL\_CALL\_FUNCTION\_NO\_VB
    
-   CALL\_FUNCTION\_WRONG\_ALIGNMENT
    

Modification 3

Handleable Exceptions in Down Casts

In [down casts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendown_cast_glosry.htm "Glossary Entry"), the following exceptions can now be handled, having been assigned to an existing exception class:

-   MOVE\_CAST\_ERROR\_DYN
    
-   MOVE\_CAST\_REF\_ONLY
    

Modification 4

Handleable exceptions in ABAP SQL

In ABAP SQL, the following exceptions can now be handled, having been assigned to an existing exception class.

-   ESCAPE\_WITH\_POOLTABLE
    
-   SAPSQL\_CONNECTION\_ILL\_TABTYPE
    

Modification 5

Handleable Exceptions in CALL TRANSFORMATION

The exception classes CX\_SY\_CONVERSION\_NO\_RAW and CX\_SY\_CONVERSION\_NO\_DATE\_TIME have been introduced for the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm).

Modification 6

Handleable Exceptions in GENERATE REPORT *|* SUBROUTINE POOL

The exception class CX\_SY\_GEN\_SOURCE\_TOO\_WIDE has been introduced for the statement [GENERATE REPORT*|*SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_report.htm).

Modification 7

Handleable Exceptions in SCAN

The exception class CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE has been introduced for the statement [SCAN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapscan.htm).

Modification 8

Handleable Exceptions in EXPORT TO SHARED MEMORY

The exception CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY has been introduced for [EXPORT TO SHARED MEMORY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster.htm).

Modification 9

Handleable Exceptions in PROVIDE

The exception classes CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP and CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED have been introduced for the new variant of the statement [PROVIDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprovide.htm). These exceptions are not raised by the short form of PROVIDE.