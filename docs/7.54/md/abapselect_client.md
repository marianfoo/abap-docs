  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - FROM](javascript:call_link\('abapfrom_clause.htm'\)) → 

SELECT - USING CLIENT, CLIENTS

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... *{* USING *{* CLIENT clnt *}*
          *|* *{* CLIENTS IN @client\_range\_tab *}*
          *|* *{* CLIENTS IN T000 *}*
          *|* *{* ALL CLIENTS *}* *}* ...

Variants:

[1\. ... USING CLIENT clnt](#!ABAP_VARIANT_1@1@)
[2\. ... USING *\[*ALL*\]* CLIENTS *\[*IN*\]* ...](#!ABAP_VARIANT_2@2@)

Effect

The optional addition USING in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") switches [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) from the current client to other clients.

-   The variant USING CLIENT replaces the current client with the specified client in client handling.
    
-   The variant USING *\[*ALL*\]* CLIENTS *\[*IN*\]* selects the data of any number of other clients instead of the current client.
    

When a single data source is specified, the addition USING must be inserted directly after [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in the join condition. When a join expression is specified, the addition must be inserted after the last addition ON of the join condition. Client handling can be switched precisely once for each [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") and is applied to all client-specific data sources specified there. These include:

-   Join expressions (the addition USING cannot be used for individual data sources).
    
-   Conditions sql\_cond (the addition USING cannot be specified in [subqueries](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) here).
    

Client handling can, however, be switched in subqueries defined using [WITH](javascript:call_link\('abapwith.htm'\)) and in queries joined using [UNION](javascript:call_link\('abapunion.htm'\)). If the data source is specified statically, the addition can be specified only if at least one client-specific data source is used; otherwise a syntax error occurs.

The addition USING cannot be used to access a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") associated with a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") and that is subject to [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"):

-   If the addition USING is used to access a CDS entity defined without the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) (and this is known statically) and the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) is not used in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, a syntax check error occurs.

-   If the addition USING CLIENT is used to access a CDS entity associated with a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") and that is subject to CDS access control, an exception is raised.

Notes

-   If the data source is specified dynamically after [FROM](javascript:call_link\('abapfrom_clause.htm'\)), the addition USING in SELECT can always be specified. No exception is raised if no client-specific tables or views are used, and the addition is ignored instead.
    
-   The addition USING can also be used for [writes](javascript:call_link\('abenopen_sql_writing.htm'\)).
    
-   The addition USING is not allowed in the [obsolete short form](javascript:call_link\('abapselect_obsolete.htm'\)) of SELECT.
    
-   Each client represents a self-contained unit, which means that implicit client handling should never be disabled in application programs.
    
-   If data has to be accessed in a different client, USING should be used instead of the obsolete addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific CDS entities is more simple.
    
-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for cross-client access. For this reason, the addition USING can only be used when accessing CDS entities for which access control is disabled using the annotation [AccessControl.authorizationCheck:#NOT\_ALLOWED](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause.
    
-   The addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) applies only to the CDS entity specified in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause. If a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) is used to access a CDS entity in the current query, and CDS access control is enabled for this entity, the addition USING cannot be used.
    
-   As an alternative to USING, the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) can be specified outside [strict mode from Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)). This addition disables implicit client handling in full and is full obsolete in queries.
    
-   See also the associated [security note](javascript:call_link\('abenclient_dependent_scrty.htm'\)) and the [programming guideline](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").
    

Variant 1

... USING CLIENT clnt

Effect

The addition USING CLIENT switches automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") in ABAP SQL for the current [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") so that the client ID from clnt is used instead of the current client ID. The client specified in clnt is used in all places where, in implicit SELECTs, the current client is used in implicit client handling. An implicit condition is created for this client and, in joins, the client columns of the client-specific data sources in question are compared for equality. If known statically that the data sources [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) are not client-specific, the addition USING CLIENT cannot be specified.

clnt expects a data object of the type c with length 3 and containing a client ID. A literal or a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) can be specified. If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

When accessing [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), the [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) client is set to the client ID specified in clnt when the current SELECT statement is executed. The following restrictions apply:

-   When [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") are accessed, the session variable client is set to a value other than the current client only if it is needed to evaluate the view on the database. When [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") are accessed, the session variable is always set to the value specified by USING.
    
-   If multiple [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") that access [client-specific](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") CDS views are accessed (and the type of client handling is defined by the annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](javascript:call_link\('abencds_client_handling.htm'\)) in these views), the session variable client must be the set to the same value in each of these queries. The runtime error SAPSQL\_DIFFERENT\_CLIENT\_VALUES occurs if USING CLIENT is used to specify a different client ID in one of these queries. This situation can occur in the statement [WITH](javascript:call_link\('abapwith.htm'\)) or when using [UNION](javascript:call_link\('abapunion.htm'\)).
    

On [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), USING CLIENT sets the [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CDS\_CLIENT accordingly.

Notes

-   If the addition USING CLIENT is used, the statement SELECT functions as if the current user were logged on with the client ID specified in clnt.
    
-   If clnt contains a client ID for a nonexistent client, the statement SELECT is executed with this ID and the results set is empty.
    
-   If the addition USING CLIENT is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

Reads all customers in client "800" from a client-specific database table.

SELECT \*
       FROM scustom USING CLIENT '800'
       INTO TABLE @DATA(customers).

Variant 2

... USING *\[*ALL*\]* CLIENTS *\[*IN*\]* ...

Alternatives:

[1\. ... USING CLIENTS IN @client\_range\_tab](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... USING CLIENTS IN T000](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... USING ALL CLIENTS](#!ABAP_ALTERNATIVE_3@3@)

Effect

The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* switch implicit ABAP SQL client handling so that the data of all clients specified by the addition is read and not just the data from the current client. The additions modify the implicit WHERE condition for the client column passed to the database. They do not modify the equality condition for the client columns of client-specific data sources in joins.

When [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") are accessed, the additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* do not set the [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) client. They cannot be used when accessing the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   CDS entities in which an [input parameter](javascript:call_link\('abencds_f1_param.htm'\)) is annotated with the annotation [@Environment.systemField:#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)).
    
-   CDS views in which the view annotation [@ClientHandling.algorithm:#SESSION\_VARIABLE](javascript:call_link\('abencds_client_handling.htm'\)) is specified and the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) is evaluated implicitly.
    
-   CDS views that use the [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) client.
    

The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* cannot be used together with the following [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)):

-   Path expressions in any positions in which [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") occur whose target data source is client-specific.
    
-   Path expressions in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause in which [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") occur whose source data source is client-specific.
    

Notes

-   The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* replaced the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) in all cases where it disabled implicit client handling to make it possible to access more than one client. Unlike CLIENT SPECIFIED, USING *\[*ALL*\]* CLIENTS *\[*IN*\]* preserves client handling in joins.
    
-   If the addition USING CLIENTS is used, the syntax check is made in [strict mode from Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)).
    

Alternative 1

... USING CLIENTS IN @client\_range\_tab

Effect

This addition switches implicit client handling in ABAP SQL for the current query so that, instead of the current client, the data of all clients is selected whose client IDs meet the conditions in a [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") client\_range\_tab. If the ranges table is empty, the data of all clients is selected.

client\_range\_tab can be an internal table (a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or a [host expression](javascript:call_link\('abenopen_sql_host_variables.htm'\))) whose row structure matches the structure of a ranges table. The columns low and high must have the type c with length 3.

Notes

-   The conditions of the ranges table are transformed to implicit WHERE conditions and passed to the database system.
    
-   In the case of joins, the client columns of the client-specific data sources in question are still checked for equality implicitly.
    
-   If the ranges table is constructed in a host expression using a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), it is not currently possible to make a type inference by specifying #.
    

Example

Selects the data of all clients whose client Ids meet the conditions of ranges table constructed in a host expression with the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

TYPES clients TYPE RANGE OF mandt.
SELECT \*
       FROM scarr
       INNER JOIN spfli ON scarr~carrid = spfli~carrid
         USING CLIENTS IN @(
           VALUE clients(
            ( sign = 'I' option = 'EQ' low = '000' )
            ( sign = 'I' option = 'BT' low = '100' high = '200' ) ) )
       INTO TABLE @DATA(itab).

Alternative 2

... USING CLIENTS IN T000

Effect

This addition switches implicit client handling in ABAP SQL for the current query so that, instead of the current client, the data of all clients is selected whose client IDs are in the column MANDT of the system table.

Notes

-   The database table T000 contains the potential [client IDs](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") in [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). Client columns of application tables should contain only those client IDs specified in T000. This is not, however, checked by ABAP SQL.
    
-   Implicit checks on the content of the database table T000 are implemented internally by passing a WHERE condition with an appropriate subquery to the database system.
    
-   In the case of joins, the client columns of the client-specific data sources in question are still checked for equality implicitly.
    

Example

See below.

Alternative 3

... USING ALL CLIENTS

Effect

This addition switches implicit client handling in ABAP SQL for the current query so that, instead of the data of the current client, all data is selected regardless of the content of the client column.

Notes

-   The addition USING ALL CLIENTS does not pass an implicit WHERE for the client column to the database system.
    
-   In the case of joins, the client columns of the client-specific data sources in question are still checked for equality implicitly.
    
-   The addition USING ALL CLIENTS replaces the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) without specifying a WHERE condition for the client column.
    

Example

For the table SFLIGHT, this example checks whether a selection of all data without a condition for the client column has the same result as a selection of the client from the system table T000.

SELECT mandt
       FROM sflight USING CLIENTS IN T000
       ORDER BY mandt, carrid, connid, fldate
       INTO TABLE @DATA(res\_t000).
SELECT mandt
       FROM sflight USING ALL CLIENTS
       ORDER BY mandt, carrid, connid, fldate
       INTO TABLE @DATA(res\_all).
IF res\_t000 <> res\_all.
  cl\_demo\_output=>display( 'Illegal client ids in SFLIGHT' ).
ENDIF.