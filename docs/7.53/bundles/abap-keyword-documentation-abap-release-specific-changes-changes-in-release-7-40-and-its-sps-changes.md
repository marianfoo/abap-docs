# ABAP Keyword Documentation / ABAP - Release-Specific Changes / Changes in Release 7.40 and Its SPs / Changes in Release 7.40, SP05

Included pages: 10


### abennews-740_sp05.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) → 

Changes in Release 7.40, SP05

The kernel release for Release 7.40, SP05 is 7.41.

[Expressions and Functions in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-expressions.htm'\))
[Internal Tables in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-itab.htm'\))
[Meshes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-mesh.htm'\))
[ABAP SQL in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-open_sql.htm'\))
[ABAP Managed Database Procedures in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-amdp.htm'\))
[ABAP Channels in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-abap_channels.htm'\))
[Security Checks in Release 7.40, SP05](javascript:call_link\('abennews-740-slin_sec.htm'\))
[Further Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-others.htm'\))

Continue
[Expressions and Functions in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-expressions.htm'\))
[Internal Tables in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-itab.htm'\))
[Meshes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-mesh.htm'\))
[ABAP SQL in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-open_sql.htm'\))
[ABAP CDS in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-abap_cds.htm'\))
[ABAP Managed Database Procedures in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-amdp.htm'\))
[ABAP Channels in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-abap_channels.htm'\))
[Security Checks in Release 7.40, SP05](javascript:call_link\('abennews-740-slin_sec.htm'\))
[Further Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05-others.htm'\))


### abennews-740_sp05-expressions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Expressions and Functions in Release 7.40, SP05

[1\. LET Expressions](#!ABAP_MODIFICATION_1@1@)

[2\. Component operator](#!ABAP_MODIFICATION_2@2@)

[3\. Table comprehension](#!ABAP_MODIFICATION_3@3@)

Modification 1

LET Expressions

The new [LET expressions](javascript:call_link\('abaplet.htm'\)) in the form LET ... IN make it possible to define variables or field symbols as helper fields in expressions. Currently, LET expressions can be used in all [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\)) where this makes sense.

Modification 2

Component Operator

The component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) is a new [constructor operator](javascript:call_link\('abenconstructor_operator_glosry.htm'\) "Glossary Entry") that enables component by component assignments to be made between structures or between internal operands at operand positions. Mappings between components are based by default on matching names and can be defined using mapping rules.

Modification 3

Table Comprehensions

[Table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") are an enhancement of the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) and are used to create the content of internal tables. One or more [FOR expressions](javascript:call_link\('abenfor_in_itab.htm'\)) can now be specified as a subexpression of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.


### abennews-740_sp05-itab.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Internal Tables in Release 7.40, SP05

[1\. MOVE-CORRESPONDING for internal tables](#!ABAP_MODIFICATION_1@1@)

[2\. Table comprehension](#!ABAP_MODIFICATION_2@2@)

Modification 1

MOVE-CORRESPONDING for Internal Tables

From Release 7.40, SP05, the operands of the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) can be internal tables, as well as structures. This has been enabled by a new [variant](javascript:call_link\('abapmove-corresponding_itab.htm'\)) of this statement, which assigns identically named components of internal tables row by row. The new addition EXPANDING NESTED TABLES enables tabular components of structures to be resolved. The addition KEEPING TARGET LINES adds rows to target tables instead of overwriting them.

Component by component assignments between internal tables are also possible using the new component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)).

Modification 2

Table Comprehensions

[Table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") are an enhancement of the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) and are used to create the content of internal tables. One or more [FOR expressions](javascript:call_link\('abenfor_in_itab.htm'\)) can now be specified as subexpressions of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.


### abennews-740_sp05-mesh.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Meshes in Release 7.40, SP05

[1\. Data types for meshes](#!ABAP_MODIFICATION_1@1@)

[2\. Processing meshes](#!ABAP_MODIFICATION_2@2@)

The [meshes](javascript:call_link\('abenabap_meshes.htm'\)) (introduced in Release 7.40 SP05) are special structures whose components are internal tables, which can be linked to each other using associations. Associations are evaluated by specifying mesh paths in suitable expressions and statements.

Modification 1

Data Types for Meshes

Mesh types can be created using the following new variant of the TYPES statement:

[TYPES BEGIN OF MESH](javascript:call_link\('abaptypes_mesh.htm'\))
  ...
  TYPES snode ... [ASSOCIATION](javascript:call_link\('abaptypes_mesh_association.htm'\)) \_assoc
                  TO tnode ON tcomp1 = scomp1 *\[*AND ...*\]*.
  ...
[TYPES END OF MESH](javascript:call_link\('abaptypes_mesh.htm'\))

Meshes are instances of these types and can be used in suitable expressions and statements.

Modification 2

Processing Meshes

These relationships (defined using associations) between mesh nodes in a mesh can be evaluated in [mesh paths](javascript:call_link\('abenmesh_pathes.htm'\)). These mesh paths can be [used](javascript:call_link\('abenmesh_path_usage.htm'\)) in the following expressions and statements:

-   [... mesh\_path ...](javascript:call_link\('abenmesh_path_expression.htm'\))

-   [LOOP AT mesh\_path](javascript:call_link\('abenmesh_loop.htm'\))

-   [FOR ... IN mesh\_path](javascript:call_link\('abenmesh_for.htm'\))

-   [INSERT ... INTO ... mesh\_path](javascript:call_link\('abenmesh_insert.htm'\))

-   [MODIFY ... mesh\_path](javascript:call_link\('abenmesh_modify.htm'\))

-   [DELETE ... mesh\_path](javascript:call_link\('abenmesh_delete.htm'\))

-   [SET ASSOCIATION mesh\_path](javascript:call_link\('abenmesh_set_association.htm'\))


### abennews-740_sp05-open_sql.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

ABAP SQL in Release 7.40, SP05

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

In ABAP SQL, all operands in lists can now be separated by commas and this is also the recommended way of separating them from Release 7.40, SP05. Until now, comma-separated lists could only be used when single target fields were specified in parentheses after [INTO](javascript:call_link\('abapinto_clause.htm'\)) in SELECT and when data objects were specified in parentheses after [WHERE](javascript:call_link\('abenwhere_logexp_list.htm'\)). Comma-separated lists are now also possible in programs of ABAP language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") where the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated:

-   The following restrictions apply in the statement [SELECT](javascript:call_link\('abapselect.htm'\))
    

-   When columns, aggregation expressions or SQL expressions are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

-   When columns are specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))

-   When columns are specified after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\))

-   In the statement [UPDATE](javascript:call_link\('abapupdate.htm'\))
    

-   When change expressions are specified after [SET](javascript:call_link\('abapupdate_source.htm'\))

This makes blank-separated lists [obsolete](javascript:call_link\('abenopen_sql_lists_obsolete.htm'\)). If one of these lists is separated by commas, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The constraint that blanks were forbidden after the opening parenthesis in comma-separated lists after INTO and IN if more than one comma occurs (if more than one data object is specified) no longer applies from SP05.

Modification 2

Escape Character for Host Variables

ABAP data objects used in ABAP SQL statements (usually variables) are now interpreted as [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)), as in statically embedded [Native SQL](javascript:call_link\('abennativesql.htm'\)). From Release 7.40, SP05, host variables can and should be prefixed with the escape character @. Host variables without the escape character are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). If the escape character is used in front of a name of an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The escape character can only be used in programs of language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry"), in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. Using the escape character requires a strict syntax check of the complete statement. During this check, any errors that would normally only be displayed as syntax warnings are reported as syntax errors.

Modification 3

SQL expressions

From Release 7.40, SP05, [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified in a comma-separated [SELECT list](javascript:call_link\('abapselect_list.htm'\)). The result of an expression of this type (whose operands can be the names of columns or host variables) is determined by the database system and passed to AS ABAP in the appropriate column of the results set.

SQL expressions can only be used in programs of language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry"), in which the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. When SQL expressions are used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 4

Switching Automatic Client Handling

The new addition [USING CLIENT clnt](javascript:call_link\('abapselect_client.htm'\)), which can be specified in all ABAP SQL statements as an alternative to CLIENT SPECIFIED, switches automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") specified in clnt.

When the addition USING CLIENT is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 5

Rule Changes for Joins

The following previous constraints on [joins](javascript:call_link\('abapselect_join.htm'\)) have been lifted:

-   From Release 7.40, SP05, it is no longer the case that all comparisons of the ON condition must contain a column from a database table or view on the right side as an operand.
    
-   From Release 7.40, SP05, the right side of a join expression is no longer restricted to single tables or views. The right side can itself be a (parenthesized) join expression whose results set is then evaluated.
    
-   In Release 7.40, SP05 and higher, LEFT OUTER JOIN and RIGHT OUTER JOIN can be used., ,
    
-   From Release 7.40, SP05, fields from the right side in the WHERE condition of the current SELECT statement can be specified in LEFT OUTER JOIN. Fields from the left side can be specified in RIGHT OUTER JOIN.
    

In SELECT statements that exploit the rule changes above, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 6

Evaluating INTO CORRESPONDING

If all required components are known statically, the assignment of the fields in the addition CORRESPONDING after [INTO](javascript:call_link\('abapinto_clause.htm'\)) is now determined when the program is generated and is not delayed until runtime.

The addition INTO CORRESPONDING now also modifies the actual [SELECT list](javascript:call_link\('abapselect_list.htm'\)) that is passed to the database and hence also the SELECT statement. If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly. If there are no name matches, none of the columns are removed from the results set. If \* is specified for the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), a list of columns may be updated implicitly.

Modification 7

Access to CDS Entities

[SELECT](javascript:call_link\('abapselect.htm'\)) can be used to access [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). Potential CDS entities are currently [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") defined in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") DDL using [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)).

Automatic client handling is performed for [client-specific](javascript:call_link\('abencds_client_handling.htm'\)) CDS views. If this handling is deactivated with addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)), the client column is part of the results set, even though the column is not an element of the CDS view. The new addition [CLIENT SPECIFIED](javascript:call_link\('abaptypes_client_specified.htm'\)) of statement TYPES can be used to declare a suitable target area. New additions for [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) after [FROM](javascript:call_link\('abapfrom_clause.htm'\)) make it possible to address the column in the SELECT statement.

If (as recommended) the name of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is used for accesses and not the name of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"), the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which subjects the statement to stricter checks than in the regular syntax check.

Modification 8

Strict Mode in the Syntax Check

If one of the new features specified above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 9

Stricter Checks on Syntax Rules

In [Release 7.40, SP02](javascript:call_link\('abennews-740-open_sql.htm'\)), a new SQL parser was introduced for ABAP SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified ABAP SQL and for the content of dynamic tokens. In [Release 7.40, SP02](javascript:call_link\('abennews-740-open_sql.htm'\)), this parser will initially only be used for the statement [SELECT](javascript:call_link\('abapselect.htm'\)). From Release 7.40, SP05, the new parser will be used for all ABAP SQL statements. One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   Corrections for the WHERE Condition

All corrections in [Release 7.40, SP02](javascript:call_link\('abennews-740-open_sql.htm'\)) that apply to the [WHERE condition](javascript:call_link\('abapwhere.htm'\)) now also apply to the statements [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), and [UPDATE](javascript:call_link\('abapupdate.htm'\)) from Release 7.40, SP05.
Example
From Release 7.40 SP05, syntax errors for:
DELETE FROM spfli WHERE NOT NOT carrid = 'LH'.

-   Corrections for dynamic tokens

All corrections in [Release 7.40, SP02](javascript:call_link\('abennews-740-open_sql.htm'\)) that apply to dynamic tokens now also apply to all ABAP SQL statements from Release 7.40, SP05.
Example
From Release 7.40 SP05, exception for:
DELETE FROM (\`SPFLI .\`) WHERE (\`. CARRID = 'LH'\`).

-   Correction for OPEN CURSOR

The addition WITH HOLD of the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) can be used only in reads performed on the standard database. If the addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\)) is specified at the same time, a runtime error was produced before Release 7.40 SP05 (and not a syntax error), if the database table was specified dynamically. This gap was closed in Release 7.40 SP05.
Example
From Release 7.40 SP05, syntax errors for:
OPEN CURSOR WITH HOLD cursor
     FOR  SELECT \*
                FROM ('SPFLI') CONNECTION con.

Modification 10

Specifying dynamic tokens

From Release 7.40, SP05 and higher, internal tables, which are specified as dynamic tokens can also have secondary keys in [modifying ABAP SQL statements](javascript:call_link\('abenopen_sql_writing.htm'\)).


### abennews-740_sp05-abap_cds.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

ABAP CDS in Release 7.40, SP05

The new [ABAP CDS](javascript:call_link\('abencds.htm'\)) is the ABAP-specific implementation of the general [Core Data Services (CDS)](javascript:call_link\('abencore_data_services_glosry.htm'\) "Glossary Entry"). In its first phase, ABAP CDS provides a [DDL](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) for the definition of [CDS views](javascript:call_link\('abenddic_cds_views.htm'\)) in ABAP Dictionary, used together with ABAP SQL to perform reads.


### abennews-740_sp05-amdp.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

ABAP Managed Database Procedures in Release 7.40, SP05

[1\. Tag interface for AMDP classes](#!ABAP_MODIFICATION_1@1@)

[2\. Implementation of AMDP methods](#!ABAP_MODIFICATION_2@2@)

[ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenabap_managed_db_proc_glosry.htm'\) "Glossary Entry") is a framework that was introduced in Release 7.40, SP05 that makes it possible to manage and call [stored procedures](javascript:call_link\('abenstored_procedure_glosry.htm'\) "Glossary Entry") or [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") as [AMDP](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") procedures. In the first phase, database procedures programmed in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") are supported in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Modification 1

Tag Interface for AMDP Classes

The new tag interface IF\_AMDP\_MARKER\_HDB flags a class as an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry"), which can contain AMDP methods for SAP HANA database.

Modification 2

Implementation of AMDP Methods

The new addition [BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT](javascript:call_link\('abapmethod_by_db_proc.htm'\)) for the statement METHOD turns a method of an [AMDP](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry") class into an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"). This is implemented in the SQLScript language of the SAP HANA database and not in ABAP. The ABAP runtime environment creates a corresponding database procedure in SAP HANA database. This procedure is executed when the AMDP method is called.


### abennews-740_sp05-abap_channels.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

ABAP Channels in Release 7.40, SP05

In Release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP Messaging Channels can be used from [SP02](javascript:call_link\('abennews-740-abap_channels.htm'\)).

[1\. ABAP Push Channels](#!ABAP_MODIFICATION_1@1@)

[2\. New variant of WAIT UNTIL](#!ABAP_MODIFICATION_2@2@)

Modification 1

ABAP Push Channels

[ABAP Push Channels (APC)](javascript:call_link\('abenapc.htm'\)) enable bidirectional communication between AS ABAP and the internet using the WebSocket protocol.

Modification 2

New Variant of WAIT UNTIL

The new variant [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) waits for APC messages in [ABAP Push Channels (APC)](javascript:call_link\('abenapc.htm'\)).


### abennews-740-slin_sec.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Security Checks in Release 7.40, SP05

[1\. Security tests in the extended program check](#!ABAP_MODIFICATION_1@1@)

[2\. Documentation of security risks](#!ABAP_MODIFICATION_2@2@)

Note

These enhancements were introduced in Release 7.40, SP05 and also downported to Release 7.0 EhP2, SP14 and Release 7.3, EhP1 or 7.0, EhP3, SP09.

Modification 1

Security Tests in the Extended Program Check

The new security checks in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") scan ABAP programs for security issues. The security checks perform a static analysis of the [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") and report any potential [security risks](javascript:call_link\('abenabap_security.htm'\)).

The security checks can be executed as follows:

-   Directly from the extended program check in ABAP Workbench
    
-   From [Code Inspector](javascript:call_link\('abencode_inspector_glosry.htm'\) "Glossary Entry")
    
-   From [ABAP Test Cockpit (ATC)](javascript:call_link\('abenabap_test_cockpit_glosry.htm'\) "Glossary Entry")
    

If used from ATC, the checks are integrated into the transport release functions and can be executed from the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

The security checks must be purchased as a separate product. Additional licensing costs are incurred if the security checks are used in customer systems. The program RSLIN\_SEC\_LICENSE\_SETUP can be used to provide the security check option in a system. This requires the authorization modify global check variants in ATC.

Modification 2

Documentation of Security Risks

Potential security risks in ABAP programs are documented in the [ABAP security notes](javascript:call_link\('abenabap_security.htm'\)).


### abennews-740_sp05-others.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Further Changes in Release 7.40, SP05

[1\. Database commit for HTTP/HTTPS/SMTP communication](#!ABAP_MODIFICATION_1@1@)

Modification 1

Database commit for HTTP/HTTPS/SMTP communication

In Release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry"), a [database commit](javascript:call_link\('abendb_commit.htm'\)) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before Release 7.40, SP05), a call from an ICF client program only triggered a database commit, if the work process was switched due to the maximum waiting time being exceeded.
