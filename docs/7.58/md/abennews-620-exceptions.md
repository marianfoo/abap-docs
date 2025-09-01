  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for ABAP Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20New%20Catchable%20Exceptions%20in%20ABAP%20Release%206.20%2C%20ABENNEWS-620-EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

New Catchable Exceptions in ABAP Release 6.20

[1\. Catchable Exceptions in Method Calls](#!ABAP_MODIFICATION_1@1@)
[2\. Catchable Exceptions in Function Module Calls](#!ABAP_MODIFICATION_2@2@)
[3\. Catchable Exceptions in Downcasts](#!ABAP_MODIFICATION_3@3@)
[4\. Catchable Exceptions in ABAP SQL](#!ABAP_MODIFICATION_4@4@)
[5\. Catchable Exceptions in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)
[6\. Catchable Exceptions in GENERATE REPORT *|* SUBROUTINE POOL](#!ABAP_MODIFICATION_6@6@)
[7\. Catchable Exceptions in SCAN](#!ABAP_MODIFICATION_7@7@)
[8\. Catchable Exceptions in EXPORT TO SHARED MEMORY](#!ABAP_MODIFICATION_8@8@)
[9\. Catchable Exceptions in PROVIDE](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Catchable Exceptions in Method Calls

The following exceptions can now be handled in [method calls](javascript:call_link\('abenmethod_calls.htm'\)), having been assigned to existing exception classes:

-   CALL\_METHOD\_NOT\_IMPLEMENTED
-   CALL\_METHOD\_NOT\_ACCESSIBLE
-   CALL\_METHOD\_CONFLICT\_TAB\_TYPE
-   CALL\_METHOD\_CONFLICT\_GEN\_TYPE
-   CALL\_METHOD\_CONFLICT\_TYPE

Modification 2   

Catchable Exceptions in Function Module Calls

In [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)), the following exceptions can now be handled, having been assigned to existing exception classes. The new exception class CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC was introduced only for the first two exceptions in the following list:

-   CALL\_FUNCTION\_NOT\_ACTIVE
-   CALL\_FUNCTION\_NOT\_FOUND
-   CALL\_FUNCTION\_PARM\_MISSING
-   CALL\_FUNCTION\_PARM\_UNKNOWN
-   CALL\_FUNCTION\_CONFLICT\_GEN\_TYP
-   CALL\_FUNCTION\_CONFLICT\_LENG
-   CALL\_FUNCTION\_CONFLICT\_TYPE
-   CALL\_FUNCTION\_NO\_VB
-   CALL\_FUNCTION\_WRONG\_ALIGNMENT

Modification 3   

Catchable Exceptions in Downcasts

In [downcasts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry"), the following exceptions can now be handled, having been assigned to an existing exception class:

-   MOVE\_CAST\_ERROR\_DYN
-   MOVE\_CAST\_REF\_ONLY

Modification 4   

Catchable Exceptions in ABAP SQL

In ABAP SQL, the following exceptions can now be handled, having been assigned to an existing exception class.

-   ESCAPE\_WITH\_POOLTABLE
-   SAPSQL\_CONNECTION\_ILL\_TABTYPE

Modification 5   

Catchable Exceptions in CALL TRANSFORMATION

The exception classes CX\_SY\_CONVERSION\_NO\_RAW and CX\_SY\_CONVERSION\_NO\_DATE\_TIME have been introduced for the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Modification 6   

Catchable Exceptions in GENERATE REPORT *|* SUBROUTINE POOL

The exception class CX\_SY\_GEN\_SOURCE\_TOO\_WIDE has been introduced for the statement [GENERATE REPORT*|*SUBROUTINE POOL](javascript:call_link\('abapgenerate_report.htm'\)).

Modification 7   

Catchable Exceptions in SCAN

The exception class CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE has been introduced for the statement [SCAN](javascript:call_link\('abapscan.htm'\)).

Modification 8   

Catchable Exceptions in EXPORT TO SHARED MEMORY

The exception CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY has been introduced for [EXPORT TO SHARED MEMORY](javascript:call_link\('abapexport_data_cluster.htm'\)).

Modification 9   

Catchable Exceptions in PROVIDE

The exception classes CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP and CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED have been introduced for the new variant of the statement [PROVIDE](javascript:call_link\('abapprovide.htm'\)). These exceptions are not raised by the short form of PROVIDE.