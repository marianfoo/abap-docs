---
title: "Syntax"
description: |
  ... EXTENDED RESULT @oref ... Effect The EXTENDED RESULT addition of the INTO(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause can be used to provide an extended result of the current main query(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/aben
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_extended_result.htm"
abapFile: "abapselect_extended_result.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "abapselect", "extended", "result"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, extended_result, ABAPSELECT_EXTENDED_RESULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, extended\_result

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_shortref.htm)

Syntax

... EXTENDED RESULT @oref ...

Effect

The EXTENDED RESULT addition of the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause can be used to provide an extended result of the current [main query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmainquery_glosry.htm "Glossary Entry") in a result object. After EXTENDED RESULT, an [object reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") oref of static type for the documented class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_osql_extended_result.htm) must be specified as a [host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm), which points to an object of the class. The reference variable must be prefixed with the escape character @.

The following applies to use of EXTENDED RESULT:

-   The reference variable must not be initial, and the object must be created before execution of the ABAP SQL statement. Parameters specifying which values the extended result should include must be passed to the instance constructor of class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_osql_extended_result.htm).
-   If possible, the result object is filled with the requested values at first database access.
    -   If a loop is opened with the statements [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) or [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm), the result object is filled once when the loop is entered.
    -   If the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause after [FETCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfetch.htm) is used for the result set of a database cursor that is opened with [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm), the result object is filled once in the first FETCH statement.
-   After the ABAP SQL statement is closed, the required values can be read using the instance methods of the class. If the result object does not then contain any results, or no valid results, an exception of the class CX\_OSQL\_EXTENDED\_RESULT is raised.

Hint

The addition EXTENDED RESULT can currently only be used for access to [cached views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry").

Example

Excerpt from the executable example SAP HANA, [Cached Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views_abexa.htm).

FINAL(extended\_result) =
  NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ).
SELECT carrid,
       MAX( fldate )   AS max\_fldate,
       MIN( price )    AS min\_price,
       SUM( seatsocc ) AS sum\_seatsocc
       FROM demo\_cds\_cached\_view
       GROUP BY carrid
       %\_HINTS HDB 'RESULT\_CACHE'
       INTO TABLE @FINAL(result)
       EXTENDED RESULT @extended\_result.