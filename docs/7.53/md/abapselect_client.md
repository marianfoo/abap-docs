---
title: "SELECT - CLIENT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm) Syntax ...  USING CLIENT clnt  CLIENT SPECIFIED entity1~clnt , entity2~clnt ...(clnt_syntax) ... Alternatives: 1. ... USING CLIENT clnt(#!ABAP_ALTERNATIVE
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm"
abapFile: "abapselect_client.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapselect", "client"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) → 

SELECT - CLIENT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

...  *{*USING CLIENT clnt*}*
   *|* *{*CLIENT SPECIFIED *{**\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...*}**|*(clnt\_syntax)*}* ...

Alternatives:

[1\. ... USING CLIENT clnt](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... CLIENT SPECIFIED *{**\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...*}**|*(clnt\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Effect

These optional additions in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") change automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") or switch it off. When a single data source is specified, the addition must be inserted directly after the data source in the join condition. When a join expression is specified, the addition must be inserted after the last addition ON of the join condition. They are not allowed when accessing [global temporary tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_gtt.htm).

Note

The fact that the addition USING CLIENT changes automatic client handling and the addition CLIENT SPECIFIED switches it off is distinction that is particularly significant when accessing client-specific [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"). Here, CLIENT SPECIFIED modifies the structure of the results set.

Alternative 1

... USING CLIENT clnt

Effect

This addition modifies automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") in ABAP SQL for the current [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") so that the client ID from clnt is used instead of the current client ID. The client specified in clnt is used in all places where, in implicit SELECTs, the current client is used in automatic client handling. If known statically that the data sources [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) are not client-specific, the addition USING CLIENT cannot be specified.

clnt expects a data object of the type c with length 3 and containing a client ID. A literal or a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) can be specified, prefixed by an escape character @. If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

When a single data source is specified, the addition must be inserted directly after [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in the join condition. When a join expression is specified, the addition must be inserted after the last addition ON of the join condition. This addition cannot be used with the addition CLIENT SPECIFIED.

Client handling can be switched precisely once for each [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") and is applied to all client-specific data sources specified there. These include:

-   Join expressions (the addition USING CLIENT cannot be used for individual data sources).
    
-   Conditions [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) (the addition USING CLIENT cannot be specified in [subqueries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_subquery.htm) here).
    

Client handling can, however, be switched in subqueries defined using [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) and in queries joined using [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm).

If the data source is specified statically, the addition can be specified only if at least one client-specific data source is used; otherwise a syntax error occurs. The addition cannot be specified for a subquery in the WHERE condition.

When accessing [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"), the [session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) client is set to the client ID specified in clnt when the current SELECT statement is executed. The following restrictions apply:

-   When [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") are accessed, the session variable client is set to a value other than the current client only if it is needed to evaluate the view on the database. When [CDS table functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") are accessed, the session variable is always set to the value specified by USING.
    
-   If multiple [queries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") that access [client-specific](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") CDS views are accessed (and the type of client handling is defined by the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) in these views), the session variable client must be the set to the same value in each of these queries. The runtime error SAPSQL\_DIFFERENT\_CLIENT\_VALUES occurs if USING CLIENT is used to specify a different client ID in one of these queries. This situation can occur in the statement [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) or when using [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm).
    
-   The addition USING CLIENT cannot be used to access a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") associated with a [CDS role](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry") and that is subject to [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry"):
    

-   If the addition USING CLIENT is used to access a CDS entity defined without the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) (and this is known statically) and the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) is not used in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause, a syntax check error occurs.

-   If the addition USING CLIENT is used to access a CDS entity associated with a [CDS role](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry") and that is subject to CDS access control, an exception is raised.

On [SAP HANA databases](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"), USING CLIENT sets the [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_session_variables.htm) CDS\_CLIENT accordingly.

Notes

-   If the addition USING CLIENT is used, the statement SELECT functions as if the current user were logged on with the client ID specified in clnt.
    
-   If clnt contains a client ID for a nonexistent client, the statement SELECT is executed with this ID and the results set is empty.
    
-   If the data source is specified dynamically after [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm), the addition USING CLIENT in SELECT can always be specified. No exception is raised if no client-specific tables or views are used, and the addition is ignored instead.
    
-   The addition USING CLIENT can also be used for [writes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm).
    
-   The addition USING CLIENT is not allowed in the [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_obsolete.htm) of SELECT.
    
-   When the addition USING CLIENT, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
    
-   Since each client represents a complete unit, automatic client handling should never be switched in application programs.
    
-   If data has to be accessed in a different client, USING CLIENT should be used instead of the addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific CDS entities is more simple.
    
-   [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for cross-client access. For this reason, the addition USING CLIENT can only be used in access to CDS entities for which access control is switched off using the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause.
    
-   The addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) applies only to the CDS entity specified in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause. If a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) is used to access a CDS entity in the current query, and CDS access control is activated for this entity, the addition USING CLIENT cannot be used.
    
-   See also the associated [security note](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_guidl.htm "Guideline").
    

Example

Reads all customers in client "800" from a client-specific database table.

SELECT \*
       FROM scustom USING CLIENT '800'
       INTO TABLE @DATA(customers).

Alternative 2

... CLIENT SPECIFIED *{**\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...*}**|*(clnt\_syntax)

Extras:

[1\. ... *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...](#!ABAP_ADDITION_1@1@)
[2\. ... (clnt\_syntax)](#!ABAP_ADDITION_2@2@)

Effect

This addition deactivates automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") in ABAP SQL for the current [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"). If known statically that the data sources [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) are not client-specific, the addition CLIENT SPECIFIED must be specified.

When using the addition CLIENT SPECIFIED, the [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry") of client-specific data sources can be specified in the WHERE condition to determine the [client identifier](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). In the addition ORDER BY, the column can be sorted explicitly according to client identifier.

The addition CLIENT SPECIFIED is applied only to the current [Query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"). If multiple queries are used in a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement or [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) statement, client handling must be viewed separately for each query. More specifically, client handling in a main query is deactivated separately from client handling in the subqueries used there. Unlike USING CLIENT, CLIENT SPECIFIED can also be used in the [subqueries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_subquery.htm) of conditions [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) to specify the same client handling as in the main query.

If CLIENT SPECIFIED is specified for a client-specific [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"), the client field is read from the database and added to the results set. The structure of a [client-specific CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) or a [client-specific CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_func_client_handling.htm) does not have a component for the client field, which means that a client column is added to the results set here implicitly. If the client field is accessed explicitly or implicitly in the SELECT statement, an addition entity~clnt must be used to give the field a name that can be used in the current statement.

The addition CLIENT SPECIFIED cannot be used when the following [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") are accessed:

-   CDS entities in which an [input parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_param.htm) is annotated with the annotation [@Environment.systemField:#CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_annotations.htm).
    
-   CDS views in which the view annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) is specified and the [session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) is evaluated implicitly.
    
-   CDS views that use the [session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) client.
    
-   [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") associated with a [CDS role](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry") and that are subject to [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry"):
    

-   If the addition CLIENT SPECIFIED is used to access a CDS entity defined without the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) and the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) is not used in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause, a syntax check error occurs.

-   If the addition CLIENT SPECIFIED is used to access a CDS entity associated with a [CDS role](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry") and that is subject to CDS access control, an exception is raised.

The addition CLIENT SPECIFIED cannot be used together with the following [path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm):

-   Path expressions in any positions in which [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") occur whose target data source is client-specific.
    
-   Path expressions in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause in which [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") occur whose source data source is client-specific.
    

Notes

-   If the addition CLIENT SPECIFIED is specified, the client column is handled like any other column of a data source. If the client ID is not specified in the WHERE condition, the selection is made across all clients.
    
-   If the addition CLIENT SPECIFIED is specified, but the client ID in the WHERE condition is not, the SELECT statement bypasses [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   If the data source is specified dynamically after [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm), the addition CLIENT SPECIFIED in SELECT can always be specified. If no client-specific tables or views are used, no exception is raised and the addition is ignored (except when entity~clnt is used to defined a static name for the client column of a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry")).
    
-   When automatic client handling is deactivated for CDS entities, a suitable target area can be declared by using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_client_specified.htm) of the statement TYPES.
    
-   In [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cds_obsolete.htm) accesses on a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") under the name of its [CDS database view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_database_view_glosry.htm "Glossary Entry"), this view is handled like any classic view. The existence of a client column is the only relevant aspect for client dependence and the addition CLIENT SPECIFIED switches automatic handling of this column off automatically. The structure type and the results set of the CDS database view of a client-specific CDS view always have a client column. If the obsolete annotation [@ClientDependent:false](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_client_handling_obs.htm) is used, the CDS database view of a cross-client CDS view can, however, also be client-specific because the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) of the view has a client column.
    
-   The addition CLIENT SPECIFIED is only forbidden for access to CDS views with the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling.htm) if the session variable [$session.client](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm) is actually in use in the view in question. This is only the case here if client-specific database tables are accessed or if client-specific data sources are joined with cross-client data sources in outer joins.
    
-   Since each client represents a complete unit, automatic client handling should never be turned off in application programs.
    
-   If data has to be accessed in a different client, USING CLIENT should be used instead of the addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific CDS entities is more simple.
    
-   [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for cross-client access. For this reason, the addition CLIENT SPECIFIED can only be used in access to CDS entities for which access control is switched off using the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) clause.
    
-   If specified for client-specific data sources, the addition CLIENT SPECIFIED produces a syntax error in the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05 or else a syntax warning.
    
-   See also the associated [security note](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_guidl.htm "Guideline").
    

Example

Like the example for USING CLIENT, this example reads all customers in client 800 from a client-specific database table, but needs an explicit WHERE condition to do this.

SELECT \*
       FROM scustom CLIENT SPECIFIED
       WHERE mandt = '800'
       INTO TABLE @DATA(customers).

Example

Accesses a client-specific CDS view with the addition CLIENT SPECIFIED. To do this, the row type of the internal table used as a target range is defined using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_client_specified.htm) of the statement TYPES. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.

Addition 1

... *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...

Effect

Declares the names clnt of the client fields of the client-specific [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"). If CLIENT SPECIFIED is used, the result set for a client-specific CDS entity has a client field, although the structure of the entity does not have components of this type. The declaration of a name with entity~clnt is required accessing this type of client field explicitly or implicitly in the SELECT statement:

-   Specifies the client field explicitly as a column name in a clause of the SELECT statement.
    
-   Implicit use in [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm). If a name has not been declared for a client field, this field is ignored.
    
-   Implicit use in [inline declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm) after [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm). If a name has not been declared for a client field, inline declaration is not possible.
    

Here entity is the name of a client-specific CDS entity used as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) and clnt is a freely definable unique name for its client column, which is valid throughout the current SELECT statement.

Note

A name defined with entity~clnt has absolutely no dependency on the actual name of a client column in a data source of a CDS entity. It is used, for example, in a WHERE condition or ON condition to select specific clients in a CDS entity.

Example

Similar to the previous example for accessing a CDS view with addition CLIENT SPECIFIED. In this case, a WHERE condition is specified for the client column. This requires a name to be defined after CLIENT SPECIFIED.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli
            CLIENT SPECIFIED demo\_cds\_scarr\_spfli~client
       WHERE client = '800'
       INTO TABLE @scarr\_spfli\_clnt.

Executable Example

[CDS Views, Client Handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_client_handling_abexa.htm)

Addition 2

... (clnt\_syntax)

Effect

If (source\_syntax) is specified dynamically after [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm), a parenthesized data object clnt\_syntax can be specified instead of a static *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ... This data object must contain the static syntax when the statement is executed. The data object clnt\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in clnt\_syntax is, as in ABAP Editor, not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows.

Example

As in the previous example for accessing a CDS view using the addition CLIENT SPECIFIED, but dynamic.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
DATA(source) = \`demo\_cds\_scarr\_spfli\`.
DATA(client) = \`client\`.
DATA(clnt\_syntax) = source && \`~\` && client.
DATA(cond) = client && \` = '800'\`.
SELECT \*
       FROM (source)
            CLIENT SPECIFIED (clnt\_syntax)
       WHERE (cond)
       INTO TABLE @scarr\_spfli\_clnt.