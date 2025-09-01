# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.40 and its SPs / News for Release 7.40, SP05

Included pages: 10


### abennews-740_sp05.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 7.40, SP05, ABENNEWS-740_SP05, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

News for Release 7.40, SP05

The kernel release for Release 7.40, SP05 is 7.41.

-   [Expressions and Functions in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-expressions.htm)
-   [Internal Tables in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-itab.htm)
-   [Meshes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-mesh.htm)
-   [ABAP SQL in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_sql.htm)
-   [ABAP CDS in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_cds.htm)
-   [ABAP Managed Database Procedures in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-amdp.htm)
-   [ABAP Channels in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_channels.htm)
-   [Security Checks in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-slin_sec.htm)
-   [Further Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-others.htm)

Continue
[Expressions and Functions in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-expressions.htm)
[Internal Tables in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-itab.htm)
[Meshes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-mesh.htm)
[ABAP SQL in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_sql.htm)
[ABAP CDS in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_cds.htm)
[ABAP Managed Database Procedures in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-amdp.htm)
[ABAP Channels in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-abap_channels.htm)
[Security Checks in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-slin_sec.htm)
[Further Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05-others.htm)


### abennews-740_sp05-expressions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expressions and Functions in Release 7.40, SP05, ABENNEWS-740_SP05-EXPRESSIONS, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expressions and Functions in Release 7.40, SP05

[1\. LET Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Component Operator](#!ABAP_MODIFICATION_2@2@)
[3\. Table Comprehensions](#!ABAP_MODIFICATION_3@3@)

Modification 1   

LET Expressions

The new [LET expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm) in the form LET ... IN make it possible to define variables or field symbols as helper fields in expressions. Currently, LET expressions can be used in all [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expressions.htm) where this makes sense.

Modification 2   

Component Operator

The component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expr_corresponding.htm) is a new [constructor operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_operator_glosry.htm "Glossary Entry") that enables component by component assignments to be made between structures or between internal operands at operand positions. Mappings between components are based by default on matching names and can be defined using mapping rules.

Modification 3   

Table Comprehensions

[Table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are an enhancement of the [instance operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) or the [value operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) and are used to create the content of internal tables. One or more [FOR expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_in_itab.htm) can now be specified as a subexpression of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.


### abennews-740_sp05-itab.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables in Release 7.40, SP05, ABENNEWS-740_SP05-ITAB, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables in Release 7.40, SP05

[1\. MOVE-CORRESPONDING for Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Table Comprehensions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

MOVE-CORRESPONDING for Internal Tables

From Release 7.40, SP05, the operands of the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) can be internal tables, as well as structures. This has been enabled by a new [variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) of this statement, which assigns identically named components of internal tables line by line. The new addition EXPANDING NESTED TABLES enables tabular components of structures to be resolved. The addition KEEPING TARGET LINES adds lines to target tables instead of overwriting them.

Component by component assignments between internal tables are also possible using the new component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expr_corresponding.htm).

Modification 2   

Table Comprehensions

[Table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are an enhancement of the [instance operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) or the [value operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) and are used to create the content of internal tables. One or more [FOR expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_in_itab.htm) can now be specified as subexpressions of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.


### abennews-740_sp05-mesh.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Meshes in Release 7.40, SP05, ABENNEWS-740_SP05-MESH, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Meshes in Release 7.40, SP05

[1\. Data Types for Meshes](#!ABAP_MODIFICATION_1@1@)
[2\. Processing Meshes](#!ABAP_MODIFICATION_2@2@)

The [meshes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_meshes.htm) (introduced in Release 7.40 SP05) are special structures whose components are internal tables, which can be linked to each other using mesh associations. Mesh associations are evaluated by specifying mesh paths in suitable expressions and statements.

Modification 1   

Data Types for Meshes

Mesh types can be created using the following new variant of the TYPES statement:

[TYPES BEGIN OF MESH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh.htm)
  ...
  TYPES snode ... [ASSOCIATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh_association.htm) \_assoc
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_mesh.htm)

Meshes are instances of these types and can be used in suitable expressions and statements.

Modification 2   

Processing Meshes

These relationships (defined using mesh associations) between mesh nodes in a mesh can be evaluated in [mesh paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_pathes.htm). These mesh paths can be [used](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_usage.htm) in the following expressions and statements:

-   [... mesh\_path ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_expression.htm)
-   [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_loop.htm)
-   [FOR ... IN mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_for.htm)
-   [INSERT ... INTO ... mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_insert.htm)
-   [MODIFY ... mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_modify.htm)
-   [DELETE ... mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_delete.htm)
-   [SET ASSOCIATION mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_set_association.htm)


### abennews-740_sp05-abap_sql.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.40, SP05, ABENNEWS-740_SP05-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.40, SP05

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

In ABAP SQL, all operands in lists can now be separated by commas and this is also the recommended way of separating them from Release 7.40, SP05. Until now, comma-separated lists could only be used when single target fields were specified in parentheses after [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) in SELECT and when data objects were specified in parentheses after [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_operand_in.htm). Comma-separated lists are now also possible in programs of ABAP language version [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry") where the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated:

-   The following restrictions apply in the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm)
    -   When columns, aggregation expressions or SQL expressions are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm).
    -   When columns are specified after [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm)
    -   When columns are specified after [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm)
-   In the statement [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm)
    -   When change expressions are specified after [SET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate_source.htm)

This makes blank-separated lists [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_lists_obsolete.htm). If one of these lists is separated by commas, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

The constraint that blanks were forbidden after the opening parenthesis in comma-separated lists after INTO and IN if more than one comma occurs (if more than one data object is specified) no longer applies from SP05.

Modification 2   

Escape Character for Host Variables

ABAP data objects used in ABAP SQL statements (usually variables) are now interpreted as [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm), as in statically embedded [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennativesql.htm). From Release 7.40, SP05, host variables can and should be prefixed with the escape character @. Host variables without the escape character are [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_hostvar_obsolete.htm). If the escape character is used in front of a name of an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

The escape character can only be used in programs of language version [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry"), in which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated. Using the escape character requires a strict syntax check of the complete statement. During this check, any errors that would normally only be displayed as syntax warnings are reported as syntax errors.

Modification 3   

SQL Expressions

From Release 7.40, SP05, [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) can be specified in a comma-separated [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm). The result of an expression of this type (whose operands can be the names of columns or host variables) is determined by the database system and passed to AS ABAP in the appropriate column of the result set.

SQL expressions can only be used in programs of language version [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry"), in which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated. When SQL expressions are used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 4   

Switching Implicit Client Handling

The new addition [USING CLIENT clnt](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm), which can be specified in all ABAP SQL statements as an alternative to [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm), switches [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) to the [client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_glosry.htm "Glossary Entry") specified in clnt.

When the addition USING CLIENT is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 5   

Rule Changes for Joins

The following previous constraints on [joins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm) have been lifted:

-   From Release 7.40, SP05, it is no longer the case that all comparisons of the ON condition must contain a column from a database table or view on the right side as an operand.
-   From Release 7.40, SP05, the right side of a join expression is no longer restricted to single tables or views. The right side can itself be a (parenthesized) join expression whose result set is then evaluated.
-   In Release 7.40, SP05 and higher, RIGHT OUTER JOIN can be used in addition to LEFT OUTER JOIN.
-   From Release 7.40, SP05, fields from the right side in the WHERE condition of the current SELECT statement can be specified in LEFT OUTER JOIN. Fields from the left side can be specified in RIGHT OUTER JOIN.

In SELECT statements that exploit the rule changes above, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 6   

Evaluating INTO CORRESPONDING

If all required components are known statically, the assignment of the fields in the addition CORRESPONDING after [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) is now determined when the program is generated and is not delayed until runtime.

The addition INTO CORRESPONDING now also modifies the actual [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) that is passed to the database and hence also the SELECT statement. If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly. If there are no name matches, none of the columns are removed from the result set. If \* is specified for the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm), a list of columns may be updated implicitly.

Modification 7   

Access to CDS Entities

[SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) can be used to access [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"). Potential CDS entities are currently [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") defined in the [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") DDL using [DEFINE VIEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm).

[Implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) is performed for [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm) CDS views. If this handling is disabled using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm), the client column is part of the result set, even though the column is not an element of the CDS view. The new addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_client_specified.htm) of statement TYPES can be used to declare a suitable target area. New additions for [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) after [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) make it possible to address the column in the SELECT statement.

If (as recommended) the name of the [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") is used for accesses and not the name of the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"), the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which subjects the statement to stricter checks than in the regular syntax check.

Modification 8   

Strict Mode in the Syntax Check

If one of the new features specified above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Modification 9   

Stricter Checks on Syntax Rules

In [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-abap_sql.htm), a new SQL parser was introduced for ABAP SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified ABAP SQL and for the content of dynamic tokens. In [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-abap_sql.htm), this parser will initially only be used for the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm). From Release 7.40, SP05, the new parser will be used for all ABAP SQL statements. One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   Corrections for the WHERE Condition
    
    All corrections in [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-abap_sql.htm) that apply to the [WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) now also apply to the statements [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab.htm), [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm), and [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm) from Release 7.40, SP05.
    Example
    From Release 7.40 SP05, syntax errors for:
    DELETE FROM spfli WHERE NOT NOT carrid = 'LH'.
    
-   Corrections for dynamic tokens
    
    All corrections in [Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-abap_sql.htm) that apply to dynamic tokens now also apply to all ABAP SQL statements from Release 7.40, SP05.
    Example
    From Release 7.40 SP05, exception for:
    DELETE FROM (\`SPFLI .\`) WHERE (\`. CARRID = 'LH'\`).
    
-   Correction for OPEN CURSOR
    
    The addition WITH HOLD of the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm) can be used only in reads performed on the standard database. If the addition [CONNECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm) is specified at the same time, a runtime error was produced before Release 7.40 SP05 (and not a syntax error), if the database table was specified dynamically. This gap was closed in Release 7.40 SP05.
    Example
    From Release 7.40 SP05, syntax errors for:
    OPEN CURSOR WITH HOLD cursor
         FOR  SELECT \*
                    FROM ('SPFLI') CONNECTION con.
    

Modification 10   

Specifying Dynamic Tokens

From Release 7.40, SP05 and higher, internal tables, which are specified as dynamic tokens can also have secondary keys in [modifying ABAP SQL statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm).


### abennews-740_sp05-abap_cds.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.40, SP05, ABENNEWS-740_SP05-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.40, SP05

The new [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) is the ABAP-specific implementation of the general [Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencore_data_services_glosry.htm "Glossary Entry"). In its first phase, ABAP CDS provides a [DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) for the definition of

[CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm), used together with ABAP SQL to perform reads.


### abennews-740_sp05-amdp.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Managed Database Procedures in Release 7.40, SP05, ABENNEWS-740_SP05-AMDP, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Managed Database Procedures in Release 7.40, SP05

[1\. Tag Interface for AMDP Classes](#!ABAP_MODIFICATION_1@1@)
[2\. Implementation of AMDP Methods](#!ABAP_MODIFICATION_2@2@)

[ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry") is a framework that was introduced in Release 7.40, SP05 that makes it possible to manage and call [stored procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstored_procedure_glosry.htm "Glossary Entry") or [database procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") as [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") procedures. In the first phase, database procedures programmed in [SQLScript](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_glosry.htm "Glossary Entry") are supported in the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry").

Modification 1   

Tag Interface for AMDP Classes

The new tag interface IF\_AMDP\_MARKER\_HDB flags a class as an [AMDP class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_class_glosry.htm "Glossary Entry"), which can contain AMDP methods for SAP HANA database.

Modification 2   

Implementation of AMDP Methods

The new addition [BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod_by_db_proc.htm) for the statement METHOD turns a method of an [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_class_glosry.htm "Glossary Entry") class into an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"). This is implemented in the SQLScript language of the SAP HANA database and not in ABAP. The ABAP runtime framework creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.


### abennews-740_sp05-abap_channels.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Channels in Release 7.40, SP05, ABENNEWS-740_SP05-ABAP_CHANNELS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Channels in Release 7.40, SP05

In Release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP Messaging Channels can be used from [SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740-abap_channels.htm).

[1\. ABAP Push Channels](#!ABAP_MODIFICATION_1@1@)
[2\. New Variant of WAIT UNTIL](#!ABAP_MODIFICATION_2@2@)

Modification 1   

ABAP Push Channels

[ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm) enable bidirectional communication between AS ABAP and the internet using the WebSocket protocol.

Modification 2   

New Variant of WAIT UNTIL

The new variant [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_apc.htm) waits for APC messages in [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm).


### abennews-740-slin_sec.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Security Checks in Release 7.40, SP05, ABENNEWS-740-SLIN_SEC, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Security Checks in Release 7.40, SP05

[1\. Security Tests in the Extended Program Check](#!ABAP_MODIFICATION_1@1@)
[2\. Documentation of Security Risks](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Security Tests in the Extended Program Check

The new security checks in the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry") scan ABAP programs for security issues. The security checks perform a static analysis of the [ABAP source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_source_code_glosry.htm "Glossary Entry") and report any potential [security risks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm).

The security checks can be executed as follows:

-   Directly from the extended program check in ABAP Workbench
-   From [Code Inspector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencode_inspector_glosry.htm "Glossary Entry")
-   From [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry")

If used from ATC, the checks are integrated into the transport release functions and can be executed from the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry").

The security checks must be purchased as a separate product. Additional licensing costs are incurred if the security checks are used in customer systems. The program RSLIN\_SEC\_LICENSE\_SETUP can be used to provide the security check option in a system. This requires the authorization modify global check variants in ATC.

Modification 2   

Documentation of Security Risks

Potential security risks in ABAP programs are documented in the [ABAP security notes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_security.htm).


### abennews-740_sp05-others.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 7.40, SP05, ABENNEWS-740_SP05-OTHERS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 7.40, SP05

Modification

Database Commit for HTTP/HTTPS/SMTP Communication

In Release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry"), a [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before Release 7.40, SP05), a call from an ICF client program only raised a database commit, if the work process was switched due to the maximum waiting time being exceeded.
