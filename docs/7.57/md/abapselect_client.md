  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, USING CLIENT, CLIENTS, ABAPSELECT_CLIENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

SELECT, USING CLIENT, CLIENTS

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_shortref.htm)

Syntax

... *{* USING *{* CLIENT clnt *}*
          *|* *{* CLIENTS IN @client\_range\_tab *}*
          *|* *{* CLIENTS IN T000 *}*
          *|* *{* ALL CLIENTS *}* *}* ...

Variants:

[1\. ... USING CLIENT clnt](#!ABAP_VARIANT_1@1@)
[2\. ... USING *\[*ALL*\]* CLIENTS *\[*IN*\]* ...](#!ABAP_VARIANT_2@2@)

Effect

The optional addition USING in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") switches [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) from the current client to other clients.

-   The variant USING CLIENT replaces the current client with the specified client in client handling.
-   The variant USING *\[*ALL*\]* CLIENTS *\[*IN*\]* selects the data of any number of other clients instead of the current client.

When a single data source is specified, the addition USING must be inserted directly after [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) in the join condition. When a join expression is specified, the addition must be inserted after the last addition ON of the join condition. Client handling can be switched exactly once for each [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") and is applied to all client-dependent data sources specified there. These include:

-   Join expressions, the addition USING cannot be used for individual data sources.
-   Conditions sql\_cond, the addition USING cannot be specified in [subqueries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_subquery.htm) here.

Client handling can, however, be switched in subqueries defined using [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) and in queries joined using [UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm). If the data source is specified statically, the addition can be specified only if at least one client-dependent data source is used. Otherwise a syntax error occurs.

The addition USING cannot be used to access a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") that is linked with a [CDS role](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_role_glosry.htm "Glossary Entry") and for which [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") is performed:

-   If the addition USING is used in a statically known way to access a CDS entity defined without the annotationAccessControl.authorizationCheck:#NOT\_ALLOWED and the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) is not used in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause, a syntax check error occurs.
-   If the addition USING CLIENT is used to access a CDS entity linked with a [CDS role](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_role_glosry.htm "Glossary Entry") and for which CDS access control is performed, an exception is raised.

The addition USING is not allowed when accessing [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), because client handling is done implicitly for [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and cannot be manipulated. For more details, see [ABAP CDS - Client Handling in CDS View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_client_handling.htm).

Hints

-   If the data source is specified dynamically after [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm), the addition USING in SELECT can always be specified. No exception is raised if no client-dependent tables or views are used, and the addition is ignored instead.
-   The addition USING can also be used for [writes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm).
-   The addition USING is not allowed in the [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_obsolete.htm) of SELECT.
-   Each client represents a self-contained unit, which means that implicit client handling should never be disabled in application programs.
-   If data has to be accessed in a different client, USING should be used instead of the obsolete addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-dependent CDS entities is also easier.
-   [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for client-independent access. For this reason, the addition USING can only be used when accessing CDS entities for which access control is disabled using the annotationAccessControl.authorizationCheck:#NOT\_ALLOWED or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause.
-   The addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) only works on the CDS entity specified in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause. If a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) is used to access a CDS entity in the current query, and CDS access control is enabled for this entity, the addition USING cannot be used.
-   As an alternative to USING, the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) can be specified outside [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_754.htm). This addition disables implicit client handling completely and is completely obsolete in queries.
-   See also the associated [security note](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_dependent_scrty.htm) and the [programming guideline](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_guidl.htm "Guideline").

Variant 1   

... USING CLIENT clnt

Effect

The addition USING CLIENT modifies automatic [client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_glosry.htm "Glossary Entry") in ABAP SQL for the current [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") so that the client ID from clnt is used instead of the current client ID. The client specified in clnt is used in all places where, in SELECT statements, the current client is implicitly used in implicit client handling. An implicit condition is created for this client and, in joins, the client columns of the client-dependent data sources involved are compared for equality. If it is known statically that the data sources [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) are not client-dependent, the addition USING CLIENT cannot be specified.

clnt expects a data object of the type c with length 3 and containing a client ID. A literal or a [host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) can be specified. If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

When accessing [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"), the session variable ([CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm)) client is set to the client ID specified in clnt while the current SELECT statement is executed. The following restrictions apply:

-   When [CDS views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") are accessed, the session variable client is set to a value other than the current client only if it is needed to evaluate the view on the database. When [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry") are accessed, the session variable is always set to the value specified by USING.
-   If multiple [queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") that access [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry") CDS views are accessed, and the type of client handling is defined by the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm) in these views, the session variable client must be the set to the same value in each of these queries. The runtime error SAPSQL\_DIFFERENT\_CLIENT\_VALUES occurs if USING CLIENT is used to specify a different client ID in one of these queries. This situation can occur in the statement [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) or when using [UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm).

On [SAP HANA databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"), USING CLIENT sets the [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) CDS\_CLIENT accordingly.

Hints

-   If the addition USING CLIENT is used, the statement SELECT functions as if the current user were logged on with the client ID specified in clnt.
-   If clnt contains a client ID for a nonexistent client, the statement SELECT is executed with this ID and the result set is empty.
-   If the addition USING CLIENT is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Example

Reading of all customers in client "800" from a client-dependent DDIC database table.

SELECT \*
       FROM scustom USING CLIENT '800'
       INTO TABLE @FINAL(customers).

Variant 2   

... USING *\[*ALL*\]* CLIENTS *\[*IN*\]* ...

Alternatives:

[1\. ... USING CLIENTS IN @client\_range\_tab](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... USING CLIENTS IN T000](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... USING ALL CLIENTS](#!ABAP_ALTERNATIVE_3@3@)

Effect

The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* modify implicit ABAP SQL client handling so that the data of all clients specified by the addition is read and not just the data from the current client. The additions modify the implicit WHERE condition for the client column passed to the database when it is accessed. They do not modify the equality condition for the client columns of client-dependent data sources in joins.

When [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") are accessed, the additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* do not set the session variable client. They cannot be used when accessing the following [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   CDS entities in which an [input parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm) is annotated with the annotation [@Environment.systemField:#CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_parameter_annotations.htm).
-   [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in which the view annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm) is specified and the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) is evaluated implicitly.
-   CDS views that use the session variable client.

The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* cannot be specified together with the following [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm):

-   Path expressions in any positions in which [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") and [CTE associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencte_association_glosry.htm "Glossary Entry") occur whose [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") is client-dependent.
-   Path expressions in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause in which [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") and [CTE associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencte_association_glosry.htm "Glossary Entry") occur whose [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") is client-dependent.

Hints

-   The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* replaced the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) in all cases where it disabled implicit client handling to make it possible to access more than one client. Unlike CLIENT SPECIFIED, USING *\[*ALL*\]* CLIENTS *\[*IN*\]* preserves client handling in joins.
-   If the addition USING CLIENTS is used, the syntax check is performed in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_754.htm).

Alternative 1   

... USING CLIENTS IN @client\_range\_tab

Effect

This addition modifies implicit client handling in ABAP SQL for the current query so that, instead of the current client, the data of all clients is selected whose client IDs meet the conditions in a [ranges tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry") client\_range\_tab. If the ranges table is empty, the data of all clients is selected.

For client\_range\_tab, an internal table can be specified as a [host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) or a [host expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) whose row structure matches the structure of a ranges table. The columns low and high must have the type c with length 3.

Hints

-   The conditions of the ranges table are transformed to implicit WHERE conditions and passed to the database system.
-   In the case of joins, the client columns of the client-dependent data sources involved are still checked for equality implicitly.

Example

Selection of the data of all clients whose client IDs meet the conditions of ranges table constructed in a host expression with the [value operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm).

SELECT \*
       FROM scarr
       INNER JOIN spfli ON scarr~carrid = spfli~carrid
         USING CLIENTS IN @(
           VALUE #(
            ( sign = 'I' option = 'EQ' low = '000' )
            ( sign = 'I' option = 'BT' low = '100' high = '200' ) ) )
       INTO TABLE @FINAL(itab).

Alternative 2   

... USING CLIENTS IN T000

Effect

This addition modifies implicit client handling in ABAP SQL for the current query so that, instead of the current client, the data of all clients is selected implicitly, whose client IDs are in the column MANDT of the system table T000.

Hints

-   The DDIC database table T000 contains the potential [client IDs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry") in [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). Client columns of application tables should contain only those client IDs specified in T000. This is not, however, checked by ABAP SQL.
-   Implicit checks on the content of the DDIC database table T000 are implemented internally by passing a WHERE condition with a corresponding subquery to the database system.
-   In the case of joins, the client columns of the client-dependent data sources involved are still checked for equality implicitly.

Example

See below.

Alternative 3   

... USING ALL CLIENTS

Effect

This addition modifies implicit client handling in ABAP SQL for the current query so that, instead of the data of the current client, all data is selected regardless of the content of the client column.

Hints

-   The addition USING ALL CLIENTS does not pass an implicit WHERE for the client column to the database system.
-   In the case of joins, the client columns of the client-dependent data sources involved are still checked for equality implicitly.
-   The addition USING ALL CLIENTS replaces the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) without specifying a WHERE condition for the client column.

Example

For the table SFLIGHT, this example checks whether a selection of all data without a condition for the client column has the same result as a selection of the client from the system table T000.

SELECT mandt
       FROM sflight USING CLIENTS IN T000
       ORDER BY mandt, carrid, connid, fldate
       INTO TABLE @FINAL(res\_t000).
SELECT mandt
       FROM sflight USING ALL CLIENTS
       ORDER BY mandt, carrid, connid, fldate
       INTO TABLE @FINAL(res\_all).
IF res\_t000 <> res\_all.
  cl\_demo\_output=>display( 'Illegal client ids in SFLIGHT' ).
ENDIF.