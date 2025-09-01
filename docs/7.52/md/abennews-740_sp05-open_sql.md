  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05.htm) → 

Open SQL in Release 7.40, SP05

[1\. Comma-separated lists](#!ABAP_MODIFICATION_1@1@)

[2\. Escape character for host variables](#!ABAP_MODIFICATION_2@2@)

[3\. SQL expressions](#!ABAP_MODIFICATION_3@3@)

[4\. Switching automatic client handling](#!ABAP_MODIFICATION_4@4@)

[5\. Rule changes for joins](#!ABAP_MODIFICATION_5@5@)

[6\. Evaluating INTO CORRESPONDING](#!ABAP_MODIFICATION_6@6@)

[7\. Access to CDS entities](#!ABAP_MODIFICATION_7@7@)

[8\. Strict mode in the syntax check](#!ABAP_MODIFICATION_8@8@)

[9\. Stricter checks for syntax rules](#!ABAP_MODIFICATION_9@9@)

[10\. Specifying dynamic tokens](#!ABAP_MODIFICATION_10@10@)

Modification 1

Comma-Separated Lists

In Open SQL, all operands in lists can now be separated by commas and this is also the recommended way of separating them from Release 7.40, SP05. Until now, comma-separated lists could only be used when single target fields were specified in parentheses after [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) in SELECT and when data objects were specified in parentheses after [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_list.htm). Comma-separated lists are now also possible in programs of ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") where the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated:

-   In the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm)
    

-   When columns, aggregate expressions, or SQL expressions are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm)

-   When columns are specified after [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm)

-   When columns are specified after [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm)

-   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm)
    

-   When change expressions are specified after [SET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_source.htm)

This makes blank-separated lists [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_lists_obsolete.htm). If one of these lists is separated by commas, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

The constraint that blanks were forbidden after the opening parenthesis in comma-separated lists after INTO and IN if more than one comma occurs (if more than one data object is specified) no longer applies from SP05.

Modification 2

Escape Character for Host Variables

ABAP data objects used in Open SQL statements (usually variables) are now interpreted as [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm), as in statically embedded [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennativesql.htm). From Release 7.40, SP05, host variables can and should be prefixed with the escape character @. Host variables without the escape character are [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_hostvar_obsolete.htm). If the escape character is used in front of a name of an Open SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

The escape character can only be used in programs of language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry"), in which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated. Using the escape character requires a strict syntax check of the complete statement. During this check, any errors that would normally only be displayed as syntax warnings are reported as syntax errors.

Modification 3

SQL Expressions

From Release 7.40, SP05, [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) can be specified in a comma-separated [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm). The result of an expression of this type (whose operands can be the names of columns or host variables) is determined by the database system and passed to the application server in the appropriate column of the results set.

SQL expressions can only be used in programs of language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry"), in which the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated. If SQL expressions are used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 4

Switching Automatic Client Handling

The new addition [USING CLIENT clnt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm), which can be specified in all Open SQL statements as an alternative to CLIENT SPECIFIED, switches automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") specified in clnt.

When the addition USING CLIENT is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 5

Rule Changes for Joins

The following previous constraints on [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) have been lifted:

-   From Release 7.40, SP05, it is no longer the case that all comparisons of the ON condition must contain a column from a database table or view on the right side as an operand.
    
-   From Release 7.40, SP05, the right side of a join expression is no longer restricted to single tables or views. The right side can itself be a (parenthesized) join expression whose results set is then evaluated.
    
-   In Release 7.40, SP05 and higher, LEFT OUTER JOIN and RIGHT OUTER JOIN can be used., ,
    
-   From Release 7.40, SP05, fields from the right side in the WHERE condition of the current SELECT statement can be specified in LEFT OUTER JOIN. Fields from the left side can be specified in RIGHT OUTER JOIN.
    

In SELECT statements that exploit the rule changes above, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 6

Evaluating INTO CORRESPONDING

If all required components are known statically, the assignment of the fields in the addition CORRESPONDING after [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) is now determined when the program is generated and is not delayed until runtime.

The addition INTO CORRESPONDING now also modifies the actual [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) that is passed to the database and hence also the SELECT statement. If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly. If there are no name matches, none of the columns are removed from the results set. If \* is specified for the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), a list of columns may be updated implicitly.

Modification 7

Access to CDS entities

[SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) can be used to access [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). Potential CDS entities are currently [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") defined in the [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") DDL using [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm).

Automatic client handling is performed for [client-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) CDS views. If this handling is deactivated with addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm), the client column is part of the results set, even though the column is not an element of the CDS view. The new addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_client_specified.htm) of statement TYPES can be used to declare a suitable target area. New additions for [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) after [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) make it possible to address the column in the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) statement.

If (as recommended) the name of the [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") is used for accesses and not the name of the [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry"), the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which subjects the statement to stricter checks than in the regular syntax check.

Modification 8

Strict Mode in the Syntax Check

If one of the new features specified above is used in an Open SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 9

Stricter Checks on Syntax Rules

In [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740-open_sql.htm), a new SQL parser was introduced for Open SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified Open SQL and for the content of dynamic tokens. In [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740-open_sql.htm), this parser will initially only be used for the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm). From Release 7.40, SP05, the new parser will be used for all Open SQL statements. One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   Corrections for the WHERE Condition

All corrections in [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740-open_sql.htm) that apply to the [WHERE condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm) now also apply to the statements [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm), [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm), and [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm) from Release 7.40, SP05.
Example
From Release 7.40 SP05, syntax errors for:
DELETE FROM spfli WHERE NOT NOT carrid = 'LH'.

-   Corrections for dynamic tokens

All corrections in [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740-open_sql.htm) that apply to dynamic tokens now also apply to all Open SQL statements from Release 7.40, SP05.
Example
From Release 7.40 SP05, exception for:
DELETE FROM (\`SPFLI .\`) WHERE (\`. CARRID = 'LH'\`).

-   Correction for OPEN CURSOR

The addition WITH HOLD of the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm) can be used only in reads performed on the standard database. If the addition [CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) is specified at the same time, a runtime error was produced before Release 7.40 SP05 (and not a syntax error), if the database table was specified dynamically. This gap was closed in Release 7.40 SP05.
Example
From Release 7.40 SP05, syntax errors for:
OPEN CURSOR WITH HOLD cursor
     FOR  SELECT \*
                FROM ('SPFLI') CONNECTION con.

Modification 10

Specifying dynamic tokens

With Release 7.40, SP05 and higher, internal tables, which are specified as dynamic tokens can also have secondary keys in [modifying Open SQL statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm).