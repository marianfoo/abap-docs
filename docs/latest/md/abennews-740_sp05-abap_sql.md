  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.40%2C%20SP05%2C%20ABENNEWS-740_SP05-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP SQL in ABAP Release 7.40, SP05

[1\. Comma-Separated Lists](#!ABAP_MODIFICATION_1@1@)
[2\. Escape Character for Host Variables](#!ABAP_MODIFICATION_2@2@)
[3\. SQL Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Switching Implicit Client Handling](#!ABAP_MODIFICATION_4@4@)
[5\. Rule Changes for Joins](#!ABAP_MODIFICATION_5@5@)
[6\. Evaluating INTO CORRESPONDING](#!ABAP_MODIFICATION_6@6@)
[7\. Access to CDS Entities](#!ABAP_MODIFICATION_7@7@)
[8\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_8@8@)
[9\. Stricter Checks on Syntax Rules](#!ABAP_MODIFICATION_9@9@)
[10\. Specifying Dynamic Tokens](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Comma-Separated Lists

In ABAP SQL, all operands in lists can now be separated by commas and this is also the recommended way of separating them from ABAP release 7.40, SP05. Until now, comma-separated lists could only be used when single target fields were specified in parentheses after [INTO](javascript:call_link\('abapinto_clause.htm'\)) in SELECT and when data objects were specified in parentheses after [WHERE](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)). Comma-separated lists are now also possible in programs of ABAP language version [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") where the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated:

-   The following restrictions apply in the statement [SELECT](javascript:call_link\('abapselect.htm'\))
    -   When columns, aggregation expressions or SQL expressions are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).
    -   When columns are specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))
    -   When columns are specified after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\))
-   In the statement [UPDATE](javascript:call_link\('abapupdate.htm'\))
    -   When change expressions are specified after [SET](javascript:call_link\('abapupdate_source.htm'\))

This makes blank-separated lists [obsolete](javascript:call_link\('abenabap_sql_lists_obsolete.htm'\)). If one of these lists is separated by commas, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The constraint that blanks were forbidden after the opening parenthesis in comma-separated lists after INTO and IN if more than one comma occurs (if more than one data object is specified) no longer applies from SP05.

Modification 2   

Escape Character for Host Variables

ABAP data objects used in ABAP SQL statements (usually variables) are now interpreted as [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)), as in statically embedded [Native SQL](javascript:call_link\('abennativesql.htm'\)). From ABAP release 7.40, SP05, host variables can and should be prefixed with the escape character @. Host variables without the escape character are [obsolete](javascript:call_link\('abenabap_sql_hostvar_obsolete.htm'\)). If the escape character is used in front of a name of an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The escape character can only be used in programs of language version [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry"), in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. Using the escape character requires a strict syntax check of the complete statement. During this check, any errors that would normally only be displayed as syntax warnings are reported as syntax errors.

Modification 3   

SQL Expressions

From ABAP release 7.40, SP05, [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified in a comma-separated [SELECT list](javascript:call_link\('abapselect_list.htm'\)). The result of an expression of this type (whose operands can be the names of columns or host variables) is determined by the database system and passed to AS ABAP in the appropriate column of the result set.

SQL expressions can only be used in programs of language version [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry"), in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. When SQL expressions are used, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 4   

Switching Implicit Client Handling

The new addition [USING CLIENT clnt](javascript:call_link\('abapselect_client.htm'\)), which can be specified in all ABAP SQL statements as an alternative to [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)), switches [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) to the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") specified in clnt.

When the addition USING CLIENT is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 5   

Rule Changes for Joins

The following previous constraints on [joins](javascript:call_link\('abapselect_join.htm'\)) have been lifted:

-   From ABAP release 7.40, SP05, it is no longer the case that all comparisons of the ON condition must contain a column from a database table or view on the right side as an operand.
-   From ABAP release 7.40, SP05, the right side of a join expression is no longer restricted to single tables or views. The right side can itself be a (parenthesized) join expression whose result set is then evaluated.
-   In ABAP release 7.40, SP05 and higher, RIGHT OUTER JOIN can be used in addition to LEFT OUTER JOIN.
-   From ABAP release 7.40, SP05, fields from the right side in the WHERE condition of the current SELECT statement can be specified in LEFT OUTER JOIN. Fields from the left side can be specified in RIGHT OUTER JOIN.

In SELECT statements that exploit the rule changes above, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 6   

Evaluating INTO CORRESPONDING

If all required components are known statically, the assignment of the fields in the addition CORRESPONDING after [INTO](javascript:call_link\('abapinto_clause.htm'\)) is now determined when the program is generated and is not delayed until runtime.

The addition INTO CORRESPONDING now also modifies the actual [SELECT list](javascript:call_link\('abapselect_list.htm'\)) that is passed to the database and hence also the SELECT statement. If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly. If there are no name matches, none of the columns are removed from the result set. If \* is specified for the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), a list of columns may be updated implicitly.

Modification 7   

Access to CDS Entities

[SELECT](javascript:call_link\('abapselect.htm'\)) can be used to access [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). Potential CDS entities are currently [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") defined in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") DDL using [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)).

[Implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is performed for [client-dependent](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) CDS views. If this handling is disabled using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)), the client column is part of the result set, even though the column is not an element of the CDS view. The new addition [CLIENT SPECIFIED](javascript:call_link\('abaptypes_client_specified.htm'\)) of statement TYPES can be used to declare a suitable target area. New additions for [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) after [FROM](javascript:call_link\('abapfrom_clause.htm'\)) make it possible to address the column in the SELECT statement.

If (as recommended) the name of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is used for accesses and not the name of the [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"), the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which subjects the statement to stricter checks than in the regular syntax check.

Modification 8   

Strict Mode in the Syntax Check

If one of the new features specified above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 9   

Stricter Checks on Syntax Rules

In [ABAP release 7.40, SP02](javascript:call_link\('abennews-740-abap_sql.htm'\)), a new SQL parser was introduced for ABAP SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified ABAP SQL and for the content of dynamic tokens. In [ABAP release 7.40, SP02](javascript:call_link\('abennews-740-abap_sql.htm'\)), this parser will initially only be used for the statement [SELECT](javascript:call_link\('abapselect.htm'\)). From ABAP release 7.40, SP05, the new parser will be used for all ABAP SQL statements. One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   Corrections for the WHERE Condition
    
    All corrections in [ABAP release 7.40, SP02](javascript:call_link\('abennews-740-abap_sql.htm'\)) that apply to the [WHERE condition](javascript:call_link\('abapwhere.htm'\)) now also apply to the statements [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), and [UPDATE](javascript:call_link\('abapupdate.htm'\)) from ABAP release 7.40, SP05.
    Example
    From ABAP release 7.40 SP05, syntax errors for:
    DELETE FROM spfli WHERE NOT NOT carrid = 'LH'.
    
-   Corrections for dynamic tokens
    
    All corrections in [ABAP release 7.40, SP02](javascript:call_link\('abennews-740-abap_sql.htm'\)) that apply to dynamic tokens now also apply to all ABAP SQL statements from ABAP release 7.40, SP05.
    Example
    From ABAP release 7.40 SP05, exception for:
    DELETE FROM (\`SPFLI .\`) WHERE (\`. CARRID = 'LH'\`).
    
-   Correction for OPEN CURSOR
    
    The addition WITH HOLD of the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) can be used only in reads performed on the standard database. If the addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\)) is specified at the same time, a runtime error was produced before ABAP release 7.40 SP05 (and not a syntax error), if the database table was specified dynamically. This gap was closed in ABAP release 7.40 SP05.
    Example
    From ABAP release 7.40 SP05, syntax errors for:
    OPEN CURSOR WITH HOLD cursor
         FOR  SELECT \*
                    FROM ('SPFLI') CONNECTION con.
    

Modification 10   

Specifying Dynamic Tokens

From ABAP release 7.40, SP05 and higher, internal tables, which are specified as dynamic tokens can also have secondary keys in [modifying ABAP SQL statements](javascript:call_link\('abenabap_sql_writing.htm'\)).