  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT - UP TO, OFFSET

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... *\[*UP TO n ROWS*\]*
    *\[*OFFSET o*\]* ...

Extras:

[1.... UP TO n ROWS](#!ABAP_ADDITION_1@1@)
[2.... OFFSET o](#!ABAP_ADDITION_2@2@)

Effect

These optional additions of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement or [WITH](javascript:call_link\('abapwith.htm'\)) statement restrict the results set using an offset and the maximum number of rows read. The syntax varies as follows for [main queries](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") and [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"):

-   Main query
    

If the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) is specified as last clause of the SELECT statement, the additions must follow after the INTO clause. Otherwise, they can also be specified after the [SELECT clause](javascript:call_link\('abapselect_list.htm'\)) or after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)). The order of the two additions is fixed. The addition OFFSET can be used only if there is an [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause.

-   Subquery
    

The addition UP TO can only be specified after an [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause and the addition OFFSET can only be specified after UP TO.

Note

These additions are applied to the results set defined by the preceding clauses.

Addition 1

... UP TO n ROWS

Effect

The addition UP TO limits the number of rows in the results set of a SELECT statement to n. n expects a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) prefixed by an escape character @, a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) or literal of type i that can represent all non-negative numbers from the value range of i except its maximum value +2,147,483,647. In the [strict mode from Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\)), n must have the types b, s, i, or int8. Furthermore, a literal or constant specified for n cannot have the value 0 in this strict mode. The content of n must match the data type i in accordance with the rules for a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). A host variable should be prefixed by the escape character @.

-   If n contains the value 0, a maximum of 2,147,483,647 rows are passed to the results set.
    
-   A positive number in n indicates the maximum number of rows in the results set.
    
-   If n contains a negative number or +2,147,483,647, a syntax error is produced or a non-handleable exception is raised.
    

The addition UP TO cannot be used with addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) and cannot be used with [UNION](javascript:call_link\('abapunion.htm'\)).

Notes

-   The addition UP TO n ROWS should be used in preference to a SELECT loop that is canceled after importing n rows. In the latter case, the last [package](javascript:call_link\('abenopen_sql_oview.htm'\)) passed from the database to the application server usually contains superfluous rows.
    
-   Without the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), the addition UP TO 1 ROWS provides the same result as the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) and there are no major differences in performance.
    

-   If SINGLE is used, data can be read into a non-table-like work area without opening a loop closed using [ENDSELECT](javascript:call_link\('abapendselect.htm'\)).

-   If UP TO 1 ROWS is used, the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) can be specified to determine the first row in a multirow set of hits.

It is advisable to use the addition UP TO 1 ROWS to read at most one row from a set of selected rows. The addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)), on the other hand. should generally be used to read a row specified in full.

-   The addition UP TO 1 ROWS is often used to confirm whether a [data source](javascript:call_link\('abapselect_data_source.htm'\)) contains any rows that meet a certain condition at all. To avoid unnecessary transports of data, a SELECT list can also be used that contains nothing but a single constant (see the [executable example](javascript:call_link\('abensql_expr_literal_abexa.htm'\))).
    
-   If the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) is also specified, the rows of the hit list are sorted on the database server and only the number of sorted rows specified in n are passed to the results set. If the addition ORDER BY is not specified, n arbitrary rows that meet the [WHERE](javascript:call_link\('abapwhere.htm'\)) condition are passed to the results set. If the ORDER BY clause does not sort the results set in a unique way, it is not possible to define which rows are in the results set.
    
-   If the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)) is also specified, all selected rows are initially read into a system table and the addition UP TO n ROWS only takes effect during the passing from the system table to the actual target area. This can produce unexpected memory bottlenecks.
    
-   Host variables without the escape character @ are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.
    

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

The addition OFFSET is used to return only the rows after the row with the count o from the results set. If OFFSET is specified, the results set must be sorted using [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)). o expects a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) prefixed by an escape character @, a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), or a literal of the type b, s, i or int8 that can represent all non-negative numbers in the value range of i except its maximum value +2,147,483,647. A literal or constant specified for n cannot have the value 0. A host variable must be prefixed by the escape character @.

-   If o contains the value 0, all rows from the first row are respected.
    
-   If o contains a positive number, only the rows after the row indicated by o are respected.
    
-   If o contains a negative number or +2,147,483,647, a syntax error is produced or a non-handleable exception is raised.
    

The addition OFFSET cannot be used together with the additions [SINGLE](javascript:call_link\('abapselect_single.htm'\)) and [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)), not when [UNION](javascript:call_link\('abapunion.htm'\)) is used and not when [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry")/ [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") or [projection views](javascript:call_link\('abenprojection_view_glosry.htm'\) "Glossary Entry") are accessed.

Note

When the addition OFFSET is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_751.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

Reads the data of all flights of a connection (except for the ten flights with the fewest seats taken).

SELECT fldate
       FROM sflight
       WHERE carrid = 'LH' AND connid = '400'
       ORDER BY seatsocc ASCENDING, fldate
       INTO TABLE @DATA(result)
       OFFSET 10.

Executable Example

[Restricting the Results Set](javascript:call_link\('abenselect_up_to_offset_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SELECT, Restriction of the Rows in the Results Set](javascript:call_link\('abenselect_up_to_offset_abexa.htm'\))