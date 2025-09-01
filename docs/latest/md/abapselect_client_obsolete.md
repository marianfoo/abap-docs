---
title: "SELECT, CLIENT SPECIFIED"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_shortref.htm) Obsolete Syntax ... CLIENT SPECIFIED  entity1~clnt , entity2~clnt ...   (clnt_syntax) ... Additions: 1. ... entity1~clnt , entity2~clnt ...(
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm"
abapFile: "abapselect_client_obsolete.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abapselect", "client", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_obsolete.htm) →  [Obsolete Syntax in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_syntax_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20CLIENT%20SPECIFIED%2C%20ABAPSELECT_CLIENT_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, CLIENT SPECIFIED

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_shortref.htm)

Obsolete Syntax

... CLIENT SPECIFIED *{* *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ... *}*
                     *|* *\[*(clnt\_syntax)*\]* ...

Additions:

[1\. ... *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...](#!ABAP_ADDITION_1@1@)
[2\. ... (clnt\_syntax)](#!ABAP_ADDITION_2@2@)

Effect

Generally, the addition CLIENT SPECIFIED can be specified in the statement SELECT of [queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry") in the same places as [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm). This is obsolete and forbidden in [strict mode from ABAP release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_754.htm) and whenever [global temporary tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_gtt.htm) are accessed. Moreover, the addition CLIENT SPECIFIED is not allowed when accessing [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") (for more details, see [ABAP CDS - Client Handling in CDS View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_client_handling.htm)). The addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) should be used instead of CLIENT SPECIFIED.

The addition CLIENT SPECIFIED disables implicit ABAP SQL [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") for the current [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry"). No implicit condition is created for the current client and, in the case of joins, no equality condition is created for the client columns of the client-dependent data sources involved. Instead, the [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") of client-dependent data sources can be specified in the SQL conditions of the query used to select clients.

The addition CLIENT SPECIFIED is applied only to the current [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry"). If multiple queries are used in a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement or [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) statement, client handling must be examined separately for each query. More specifically, client handling in a main query is disabled separately from client handling in the subqueries used there. Unlike USING, CLIENT SPECIFIED can also be specified in the [subqueries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_subquery.htm) of conditions sql\_cond to achieve the same client handling as in the main query.

If CLIENT SPECIFIED is specified for a client-dependent [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), the client field is read from the database and added to the result set. The structure of a [client-dependent CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) or a [client-dependent CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_func_client_handling.htm) does not have a component for the client field, which means that a client column is added to the result set here implicitly. If the client field is accessed explicitly or implicitly in the SELECT statement, an addition entity~clnt must be used to assign the field a name that can be used in the current statement.

If known statically that the data sources [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) are not client-dependent, the addition CLIENT SPECIFIED must not be specified. Furthermore, the addition CLIENT SPECIFIED cannot be used when the following [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") are accessed:

-   CDS entities in which an [input parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm) is annotated with the annotation [@Environment.systemField:#CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm).
-   CDS DDIC-based views (obsolete) in which the view annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) is specified and the [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm) is evaluated implicitly.
-   CDS DDIC-based views (obsolete) that use the session variable client.
-   CDS view entities, because the [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v2.htm) is always evaluated implicitly.
-   [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") linked with a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") and that are subject to [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry"):
    -   If the addition CLIENT SPECIFIED is used to access a CDS entity defined without the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED and the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) is not used in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause, a syntax check error occurs.
    -   If the addition CLIENT SPECIFIED is used to access a CDS entity linked with a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") and that is subject to CDS access control, an exception is raised.

The addition CLIENT SPECIFIED cannot be used together with the following [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_path.htm):

-   Path expressions in any positions in which [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") and [CTE associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencte_association_glosry.htm "Glossary Entry") occur whose [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") is client-dependent.
-   Path expressions in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause in which [CDS associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") and [CTE associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencte_association_glosry.htm "Glossary Entry") occur whose [association source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_source_glosry.htm "Glossary Entry") is client-dependent.

Hints

-   If data is to be accessed in a different client, CLIENT SPECIFIED is replaced by [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm), since all necessary conditions are set implicitly and accessing client-dependent CDS entities is more simple.
-   The fact that the addition CLIENT SPECIFIED disables implicit client handling and the addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) switches it is a big difference that is particularly significant when accessing client-dependent [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). Here, CLIENT SPECIFIED modifies the structure of the result set.
-   If the addition CLIENT SPECIFIED is specified, the client column is handled like any other column of a data source. If the client ID is then not specified in the WHERE condition, the selection is made across all clients. Similarly, an explicit comparison of the client columns must generally be made in the ON conditions of joins between client-dependent tables.
-   If the addition CLIENT SPECIFIED is specified without the client ID in the WHERE condition, the statement cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine.htm). It bypasses the [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffer_glosry.htm "Glossary Entry") and an internal table accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If the data source is specified dynamically after [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm), the addition CLIENT SPECIFIED in SELECT can always be specified. If no client-dependent tables or views are used, no exception is raised and the addition is ignored, except when entity~clnt is used to defined a static name for the client column of a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").
-   When implicit client handling is disabled for CDS entities, a suitable target area can be declared by using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_client_specified.htm) (also obsolete) of the statement TYPES.
-   [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for client-independent access. For this reason, the addition CLIENT SPECIFIED can only be used in accesses to CDS entities for which access control is disabled using the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause.
-   If specified for client-independent data sources, the addition CLIENT SPECIFIED produces a syntax error in the [strict modes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05 or else a syntax warning.
-   See also the associated [security note](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_guidl.htm "Guideline").
-   In [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_cds_obsolete.htm) accesses on a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") using the name of its [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"), this view is handled like a DDIC view. The existence of a client column is the only relevant aspect for client dependency and the addition CLIENT SPECIFIED disables implicit handling of this column. The structure type and the result set of the CDS-managed DDIC view (obsolete) of a client-dependent CDS view always have a client column. If the obsolete annotation [@ClientDependent:false](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_obs.htm) is used, the CDS-managed DDIC view (obsolete) of a client-independent CDS DDIC-based view (obsolete) can, however, also be client-dependent because the SELECT list of the view has a client column.
-   The addition CLIENT SPECIFIED is only forbidden for access to CDS DDIC-based views (obsolete) with the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) if the session variable [$session.client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm) is actually used in the view in question. This is only the case here if client-dependent database tables are accessed or if client-dependent data sources are joined with client-independent data sources in outer joins.

Example

Like the example for [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm), this example reads all customers in client 800 from a client-dependent database table, but needs an explicit WHERE condition to do this.

SELECT \*
       FROM scustom CLIENT SPECIFIED
       WHERE mandt = '800'
       INTO TABLE @DATA(customers).

Example

Accesses a client-dependent CDS view with the addition CLIENT SPECIFIED. To do this, the line type of the internal table used as a target range is defined using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_client_specified.htm) of the statement TYPES. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.

The following example shows how the recommended addition [USING ALL CLIENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) is used, for which no special target area is required.

DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS
       INTO TABLE @scarr\_spfli.

Addition 1   

... *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...

Effect

Declares the names clnt of the client fields of the client-dependent [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). If CLIENT SPECIFIED is used, the result set for a client-dependent CDS entity has a client field, although the structure of the entity does not have a component of this type. The declaration of a name with entity~clnt is necessary when accessing this type of client field explicitly or implicitly in the SELECT statement:

-   Specifies the client field explicitly as a column name in a clause of the SELECT statement.
-   Implicit use in [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm). If a name has not been declared for a client field, this field is ignored.
-   Implicit use in [inline declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm) using [@DATA|@FINAL(...)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_into_target.htm) after [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm). If a name is not declared for a client field, inline declarations are not possible.

Here entity is the name of a client-dependent CDS entity used as a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) and clnt is a freely definable unique name for its client column, which is valid throughout the current SELECT statement.

Hint

A name defined with entity~clnt is completely independent of the actual name of a client column in a data source of a CDS entity. It is used, for example, in a WHERE condition or ON condition to select specific clients in a CDS entity.

Example

Like the previous example for accessing a CDS view with addition CLIENT SPECIFIED. In this case, a WHERE condition is specified for the client column. This requires a name to be defined after CLIENT SPECIFIED.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli
            CLIENT SPECIFIED demo\_cds\_scarr\_spfli~client
       WHERE client = '800'
       INTO TABLE @scarr\_spfli\_clnt.

Executable Example

[CDS Views, Client Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_client_handl_v1_abexa.htm)

Addition 2   

... (clnt\_syntax)

Effect

If (source\_syntax) is specified dynamically after [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm), a parenthesized data object clnt\_syntax can be specified instead of a static *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ... This data object must contain the static syntax when the statement is executed. The data object clnt\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like line type. The syntax in clnt\_syntax is not case-sensitive, as in the static syntax. When an internal table is specified, the syntax can span multiple rows.

Example

Like in the previous example for accessing a CDS view using the additionCLIENT SPECIFIED, but with dynamic specifications.

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