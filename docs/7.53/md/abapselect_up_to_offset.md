---
title: "SELECT - UP TO, OFFSET"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm) Syntax ... UP TO n ROWS OFFSET o ... Extras: 1.... UP TO n ROWS(#!ABAP_ADDITION_1@1@) 2.... OFFSET o(#!ABAP_ADDITION_2@2@) Effect These optional additions of a query(https://he
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_up_to_offset.htm"
abapFile: "abapselect_up_to_offset.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "types", "abapselect", "offset"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) → 

SELECT - UP TO, OFFSET

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

... *\[*UP TO n ROWS*\]*
    *\[*OFFSET o*\]* ...

Extras:

[1.... UP TO n ROWS](#!ABAP_ADDITION_1@1@)
[2.... OFFSET o](#!ABAP_ADDITION_2@2@)

Effect

These optional additions of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement or [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) statement restrict the results set using an offset and the maximum number of rows read. The syntax varies as follows for [main queries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmainquery_glosry.htm "Glossary Entry") and [subqueries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry"):

-   Main query
    

If the [INTO clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) is specified as last clause of the SELECT statement, the additions must follow after the INTO clause. Otherwise, they can also be specified after the [SELECT clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) or after the [FROM clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm). The order of the two additions is fixed. The addition OFFSET can be used only if there is an [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) clause.

-   Subquery
    

The addition UP TO can only be specified after an [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) clause and the addition OFFSET can only be specified after UP TO.

Note

These additions are applied to the results set defined by the preceding clauses.

Addition 1

... UP TO n ROWS

Effect

The addition UP TO limits the number of rows in the results set of a SELECT statement to n. n expects a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) prefixed by an escape character @, a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm) or literal of type i that can represent all non-negative numbers from the value range of i except its maximum value +2,147,483,647. Only the types b, s, i, or int8 can be specified for n. Furthermore, a literal or constant specified for n cannot have the value 0. This is checked in [strict mode as of release 7.51](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_751.htm). The content of n must match the data type i in accordance with the rules for a [lossless assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). A host variable should be prefixed by the escape character @.

-   If n contains the value 0, a maximum of 2,147,483,647 rows are passed to the results set.
    
-   A positive number in n indicates the maximum number of rows in the results set.
    
-   If n contains a negative number or +2,147,483,647, a syntax error is produced or a non-handleable exception is raised.
    

The addition UP TO cannot be used with addition [SINGLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm) and cannot be used with [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm).

Notes

-   The addition UP TO n ROWS should be used in preference to a SELECT loop that is canceled after importing n rows. In the latter case, the last [package](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_oview.htm) passed from the database to the AS ABAP usually contains superfluous rows.
    
-   Without the addition [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm), the addition UP TO 1 ROWS provides the same result as the addition [SINGLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm) and there are no major differences in performance.
    

-   If SINGLE is used, data can be read into a non-table-like work area without opening a loop closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendselect.htm).

-   If UP TO 1 ROWS is used, the addition [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) can be specified to determine the first row in a multirow set of hits.

It is advisable to use the addition UP TO 1 ROWS to read at most one row from a set of selected rows. The addition [SINGLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm), on the other hand. should generally be used to read a row specified in full.

-   The addition UP TO 1 ROWS is often used to confirm whether a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) contains any rows that meet a certain condition at all. To avoid unnecessary transports of data, a SELECT list can also be used that contains nothing but a single constant (see the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_literal_abexa.htm)).
    
-   If the addition [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) is also specified, the rows of the hit list are sorted on the database server and only the number of sorted rows specified in n are passed to the results set. If the addition ORDER BY is not specified, n arbitrary rows that meet the [WHERE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwhere.htm) condition are passed to the results set. If the ORDER BY clause does not sort the results set in a unique way, it is not possible to define which rows are in the results set.
    
-   If the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm) is also specified, all selected rows are initially read into a system table and the addition UP TO n ROWS only takes effect during the passing from the system table to the actual target area. This can produce unexpected memory bottlenecks.
    
-   Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.
    

Example

Reads the three business customers with the highest discount rates:

SELECT \*
       FROM scustom
       WHERE custtype = 'B'
       ORDER BY discount DESCENDING
       INTO TABLE @DATA(result)
       UP TO 3 ROWS.

Addition 2

... OFFSET o

Effect

The addition OFFSET is used to return only the rows after the row with the count o from the results set. If OFFSET is specified, the results set must be sorted using [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm). o expects a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) prefixed by an escape character @, a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm), or a literal of the type b, s, i or int8 that can represent all non-negative numbers in the value range of i except its maximum value +2,147,483,647. A literal or constant specified for n cannot have the value 0. A host variable must be prefixed by the escape character @.

-   If o contains the value 0, all rows from the first row are respected.
    
-   If o contains a positive number, only the rows after the row indicated by o are respected.
    
-   If o contains a negative number or +2,147,483,647, a syntax error is produced or a non-handleable exception is raised.
    

The addition OFFSET cannot be used together with the additions [SINGLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm) and [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm), and not when [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm) is used , and not when [projection views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprojection_view_glosry.htm "Glossary Entry") are accessed .

Notes

-   It only makes sense to specify the addition OFFSET if the order of the rows in the results set is undefined. Therefore, [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) should be specified as well, followed by appropriate columns.
    
-   When the addition OFFSET is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_751.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Reads the data of all flights of a connection (except for the ten flights with the fewest seats taken).

SELECT fldate
       FROM sflight
       WHERE carrid = 'LH' AND connid = '400'
       ORDER BY seatsocc ASCENDING, fldate
       INTO TABLE @DATA(result)
       OFFSET 10.

Executable Example

[Restricting the Results Set](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_up_to_offset_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, Restriction of the Rows in the Results Set](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_up_to_offset_abexa.htm)