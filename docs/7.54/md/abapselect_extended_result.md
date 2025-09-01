---
title: "Syntax"
description: |
  ... EXTENDED RESULT @oref ... Effect The EXTENDED RESULT addition of the INTO(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause can be used to provide an extended result of the current main query(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/aben
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_extended_result.htm"
abapFile: "abapselect_extended_result.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "abapselect", "extended", "result"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - INTO, APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) → 

SELECT - extended\_result

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm)

Syntax

... EXTENDED RESULT @oref ...

Effect

The EXTENDED RESULT addition of the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause can be used to provide an extended result of the current [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") in a result object. After EXTENDED RESULT you must specify an [object reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") oref of static type for the documented class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_extended_result.htm) as a [host variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm), which points to an object of the class. The reference variable must be prefixed with the escape character @.

The following applies for use of EXTENDED RESULT:

-   The reference variable must not be initial and the object generation must be carried out before execution of the ABAP SQL statement. Parameters specifying which values the extended result should include must be passed to the instance constructor of class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_extended_result.htm).
    
-   If possible, the result object is supplied with the requested values at first database access.
    

-   If a loop is opened with the statements [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) or [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), the result object is supplied once at entry into the loop.

-   If the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause after [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm) is used for the results set of a database cursor that is opened with [OPEN CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm), the result object is filled once in the first FETCH statement.

-   After the ABAP SQL statement is closed, the required values can be read using the instance methods of the class. If the result object does not then contain any results, or no valid results, an exception of the class CX\_OSQL\_EXTENDED\_RESULT is raised.
    

Note

The addition EXTENDED RESULT can currently only be used for access to [cached views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry").

Example

Excerpt from the executable example SAP HANA, [Cached Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_cached_views_abexa.htm).

DATA(extended\_result) =
  NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ).
SELECT carrid,
       MAX( fldate )   AS max\_fldate ,
       MIN( price )    AS min\_price,
       SUM( seatsocc ) AS sum\_seatsocc
       FROM demo\_cds\_cached\_view
       GROUP BY carrid
       %\_HINTS HDB 'RESULT\_CACHE'
       INTO TABLE @DATA(result)
       EXTENDED RESULT @extended\_result.