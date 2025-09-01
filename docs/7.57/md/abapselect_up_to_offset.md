  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, UP TO, OFFSET, ABAPSELECT_UP_TO_OFFSET, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

SELECT, UP TO, OFFSET

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... *\[*UP TO n ROWS*\]*
    *\[*OFFSET o*\]* ...

Additions:

[1.... UP TO n ROWS](#!ABAP_ADDITION_1@1@)
[2.... OFFSET o](#!ABAP_ADDITION_2@2@)

Effect

These optional additions of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement or [WITH](javascript:call_link\('abapwith.htm'\)) statement restrict the result set using an offset and the maximum number of rows to be read. The syntax varies as follows for [main queries](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") and [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"):

-   Main query
    
    If the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) is specified as last clause of the SELECT statement, the additions must be after the INTO clause. Otherwise, they can also be after the [SELECT clause](javascript:call_link\('abapselect_list.htm'\)) or after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)). The order of the two additions is not fixed. The addition OFFSET can be used only if there is an [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause.
    
-   Subquery
    
    The addition UP TO can only be specified after an [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause and the addition OFFSET can only be specified after UP TO.
    

Hint

These additions affect the result set defined by the preceding clauses.

Addition 1   

... UP TO n ROWS

Effect

The addition UP TO limits the number of rows in the result set of a SELECT statement to n. For n, a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)), a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), or a [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) of type i is expected, which can represent all non-negative numbers from the value range of i except its maximum value +2,147,483,647. Only the types b, s, i, or int8 can be specified for n. Furthermore, a literal or constant specified for n cannot have the value 0. This is checked in [strict mode from Release 7.51](javascript:call_link\('abenabap_sql_strictmode_751.htm'\)). If n is an untyped literal or a host variable, its content must match the data type i in accordance with the rules for a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

-   If n contains the value 0, a maximum of 2,147,483,647 rows are placed in the result set.
-   A positive number in n indicates the maximum number of rows in the result set.
-   If n contains a negative number or +2,147,483,647, a syntax error is produced, or an uncatchable exception is raised.

The addition UP TO cannot be used with addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) and cannot be used with [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), or [EXCEPT](javascript:call_link\('abapunion.htm'\)).

Hints

-   The addition UP TO n ROWS is preferable to a SELECT loop that is terminated after importing n rows. In the latter case, the last [package](javascript:call_link\('abenabap_sql_oview.htm'\)) passed from the database to the AS ABAP usually contains superfluous rows.
-   Without the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), the addition UP TO 1 ROWS provides the same result as the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) and there are no major differences in performance.
    
    -   If SINGLE is used, data can be read into a non-table-like work area without opening a loop closed using [ENDSELECT](javascript:call_link\('abapendselect.htm'\)).
    -   If UP TO 1 ROWS is used, the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) can be specified to determine the first row in a multirow set of hits.
    
    It is advisable to use the addition UP TO 1 ROWS to read at most one row from a set of selected rows. The addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)), on the other hand, should generally be used to read a completely specified row.
    
-   The addition UP TO 1 ROWS is often used to determine whether a [data source](javascript:call_link\('abapselect_data_source.htm'\)) contains any rows that meet a certain condition. To avoid unnecessary transports of data, a SELECT list can also be used that contains nothing but a single constant (see the [executable example](javascript:call_link\('abensql_expr_literal_abexa.htm'\))).
-   If the addition [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) is also specified, the rows of the hit list are sorted on the database server and only the number of sorted rows specified in n are passed to the result set. If the addition ORDER BY is not specified, n arbitrary rows that meet the [WHERE](javascript:call_link\('abapwhere.htm'\)) condition are passed to the result set. If the ORDER BY clause does not sort the result set uniquely, it is not possible to define which rows are in the result set.
-   If the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) is also specified, all selected rows are initially read into an internal table and the addition UP TO n ROWS only takes effect during the passing from the system table to the actual target area. This can produce unexpected memory bottlenecks.
-   Host variables without the escape character @ are [obsolete](javascript:call_link\('abenabap_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Example

Reading of the three business customers with the highest discount rates:

SELECT \*
       FROM scustom
       WHERE custtype = 'B'
       ORDER BY discount DESCENDING
       INTO TABLE @FINAL(result)
       UP TO 3 ROWS.

Addition 2   

... OFFSET o

Effect

The addition OFFSET is used to return only the rows after the row with the count o from the result set. If OFFSET is specified, the result set must be sorted using [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)). o expects a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)), a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), or a [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) of the type b, s, i, or int8, which can represent all non-negative numbers in the value range of i except its maximum value +2,147,483,647. A literal or constant specified for n cannot have the value 0.

-   If o contains the value 0, all rows from the first row are respected.
-   If o contains a positive number, only the rows after the row indicated by o are respected.
-   If o contains a negative number or +2,147,483,647, a syntax error is produced, or an uncatchable exception is raised.

The addition OFFSET cannot be used together with the additions [SINGLE](javascript:call_link\('abapselect_single.htm'\)) and [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)), and not when [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), or [EXCEPT](javascript:call_link\('abapunion.htm'\)) is used, and not when [DDIC projection views](javascript:call_link\('abenddic_proj_view_glosry.htm'\) "Glossary Entry") are accessed.

Hints

-   It only makes sense to specify the addition OFFSET if the order of the rows in the result set is not undefined. Therefore, [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) must be specified as well, followed by appropriate columns.
-   When the addition OFFSET is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_751.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

Reading of the data of all flights of a connection, except for the ten flights with the fewest seats taken.

SELECT fldate
       FROM sflight
       WHERE carrid = 'LH' AND connid = '400'
       ORDER BY seatsocc ASCENDING, fldate
       INTO TABLE @FINAL(result)
       OFFSET 10.

Executable Example

[Restricting the result set](javascript:call_link\('abenselect_up_to_offset_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SELECT, Restriction of the Rows in the Result Set](javascript:call_link\('abenselect_up_to_offset_abexa.htm'\))