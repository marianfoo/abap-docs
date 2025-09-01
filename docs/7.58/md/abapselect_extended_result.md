  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20extended_result%2C%20ABAPSELECT_EXTENDED_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, extended\_result

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm)

Syntax

... EXTENDED RESULT @oref ...

Effect

The EXTENDED RESULT addition of the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause can be used to provide an extended result of the current [main query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmainquery_glosry.htm "Glossary Entry") in a result object. After EXTENDED RESULT, an [object reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") oref of static type for the documented class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_osql_extended_result.htm) must be specified as a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), which points to an object of the class. The reference variable must be prefixed with the escape character @.

The following applies to the use of EXTENDED RESULT:

-   The reference variable must not be initial and the object must be created before the ABAP SQL statement is executed. Parameters that specify which values the extended result should include must be passed to the instance constructor of class [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_osql_extended_result.htm).
-   If possible, the result object is filled with the requested values during the first database access.
    -   If a loop is opened using the statements [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) or [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm), the result object is filled once when the loop is entered.
    -   If the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause after [FETCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfetch.htm) is used for the result set of a database cursor opened using [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm), the result object is filled once in the first FETCH statement.
-   After the ABAP SQL statement is closed, the required values can be read using the instance methods of the class. If the result object then contains no results or no valid results, an exception of the class CX\_OSQL\_EXTENDED\_RESULT is raised.

Hint

Currently, the addition EXTENDED RESULT can only be used when accessing [cached views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry").

Example

Excerpt from the executable example [SAP HANA, Cached Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_cached_views_abexa.htm).

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