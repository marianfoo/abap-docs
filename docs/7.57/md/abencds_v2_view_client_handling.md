  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Client Handling in CDS View Entities, ABENCDS_V2_VIEW_CLIENT_HANDLING, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Client Handling in CDS View Entities

For a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), client handling is done implicitly and automatically by filtering the client [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v2.htm'\)).

You cannot manipulate this. Client handling annotations are not available.

-   [Determining Client Dependency](#abencds-v2-view-client-handling-1-------determining-client-handling---@ITOC@@ABENCDS_V2_VIEW_CLIENT_HANDLING_2)
-   [Properties of Client-Dependent CDS View Entities](#abencds-v2-view-client-handling-3---determining-client-dependency-----the--client-dependency--javascript-call-link---abenclient-dependency-glosry-htm-----glossary-entry---of-a-view-is-determined-by-the--data-sources--javascript-call-link---abencds-data-source-v2-htm-----used-------if-one-of-the-data-sources-used-in-the-view-is-client-dependent--the-view-is--client-dependent--javascript-call-link---abenclient-dependent-glosry-htm-----glossary-entry--------if-none-of-the-data-sources-used-in-the-view-is-client-dependent--the-view-is--client-independent--javascript-call-link---abenclient-independent-glosry-htm-----glossary-entry-----determining-client-handling-----if-a-cds-view-entity-is-client-dependent--the-client-handling-is-performed-by-filtering-the-client--session-variable--javascript-call-link---abensession-variable-glosry-htm-----glossary-entry-----session-client--javascript-call-link---abencds-session-variable-v2-htm------the-session-variable-algorithm-expands-the--joins--javascript-call-link---abenjoin-glosry-htm-----glossary-entry---of-the-view-entity-implicitly-as-shown-in-the-following-table--this-applies-to-joins-specified-explicitly-using-join--as-well-as-to-instances-of-joins-created-when-using--sql-path-expressions--javascript-call-link---abensql-path-expression-glosry-htm-----glossary-entry-----left-side--right-side--inner-join--left-outer-join--right-outer-join--cross-join--client-dependent--client-dependent--compares-the-client-columns-in-the-on-condition--compares-the-client-columns-in-the-on-condition--compares-the-client-columns-in-the-on-condition--transforms-the-cross-join-to-an-inner-join-using-an-on-condition-for-the-client-columns--client-independent--client-dependent------compares-the-client-column-with-the-value-of-the--session-variable--javascript-call-link---abensession-variable-glosry-htm-----glossary-entry-----session-client--javascript-call-link---abencds-session-variable-v2-htm-----in-the-on-condition----------client-dependent--client-independent----------compares-the-client-column-with-the-value-of-the--session-variable--javascript-call-link---abensession-variable-glosry-htm-----glossary-entry-----session-client--javascript-call-link---abencds-session-variable-v2-htm-----in-the-on-condition------client-independent--client-independent------------------in-addition--when-client-dependent-database-tables-are-accessed---where-clauses--javascript-call-link---abencds-where-clause-v2-htm-----with-comparisons-of-the-client-columns-with-the--session-variable--javascript-call-link---abensession-variable-glosry-htm-----glossary-entry-----session-client--javascript-call-link---abencds-session-variable-v2-htm-----are-added-to-the-view-implicitly--if-only-client-dependent--cds-entities--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---are-accessed--however--no-clauses-are-added---it-is-not-possible-to-access-the-data-of-different-clients-in-a-single-read---the-addition--using--javascript-call-link---abapselect-client-htm-----of-the-statement--select--javascript-call-link---abapselect-htm-----for-switching--implicit-client-handling--javascript-call-link---abenabap-sql-client-handling-htm-----is-not-allowed-for-cds-view-entities--the-obsolete-addition--client-specified--javascript-call-link---abapselect-client-obsolete-htm-----is-not-allowed-either---example--the-following-cds-view-entity-demo--cds--client--handling-defines-different-kinds-of--joins--javascript-call-link---abenjoin-glosry-htm-----glossary-entry-----left-outer-join--javascript-call-link---abenleft-outer-join-glosry-htm-----glossary-entry-----inner-join--javascript-call-link---abeninner-join-glosry-htm-----glossary-entry----and--right-outer-join--javascript-call-link---abenright-outer-join-glosry-htm-----glossary-entry----between-a-client-independent-database-table--t000--and-a-client-dependent-database-table--demo--sales--order---it-also-defines-and-uses-an--association--javascript-call-link---abencds-association-glosry-htm-----glossary-entry---between-the-same-client-independent-database-table--t000--and-the-same-client-dependent-database-table--demo--sales--order----AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS View entity\_client handling'
define view entity DEMO\_CDS\_CLIENT\_HANDLING
  as select from
                       t000             as client\_independent
      left outer join  demo\_sales\_order as \_LeftOuter
        on \_LeftOuter.id = client\_independent.cccategory
      inner join       demo\_sales\_order as \_Inner
        on \_Inner.id = client\_independent.cccategory
      right outer join demo\_sales\_order as \_RightOuter
        on \_RightOuter.id = client\_independent.cccategory
    association \[0..1\] to demo\_sales\_order as \_Assoc
      on \_Assoc.id = client\_independent.cccategory
    {
      key \_Assoc.so\_key,
          \_Assoc.id,
          \_Inner.id      as id\_inner,
          \_LeftOuter.id  as id\_LeftOuter,
          \_RightOuter.id as id\_RightOuter,
          client\_independent.cccategory
    }
    where client\_independent.mtext = abap.char'SAP AG Konzern'

The image below shows the SQL statement that is generated on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). For the left outer join, an ON condition is added that compares the client field of the database table DEMO\_SALES\_ORDER with the current client. The current client is determined using the built-in SAP HANA function [SESSION\_CONTEXT ('CDS\_CLIENT')](javascript:call_link\('abenhana_session_variables.htm'\)), which is the equivalent to the session variable $session.client in ABAP CDS. In the same way, a WHERE clause is added that compares the client of the database table with the current client.

![Figure](abdoc_client_handling.png)

Properties of Client-Dependent CDS View Entities   

Since client handling is performed completely implicitly in CDS view entities, a client field is not allowed in the SELECT list of a view entity. The result set of an ABAP SQL read on a CDS view entity can never contain a client column either.

Hints

-   When client-dependent views are accessed via [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or in an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"), only the [database object](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") is accessed. The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") must be specified as usual and only data in the current client should be accessed.
-   When the [database object](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") of a client-dependent [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") is accessed using Native SQL or AMDP, note the following:
    
    -   The [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v2.htm'\)) is usually used implicitly in the view. This is guaranteed only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") used as [standard AS ABAP databases](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") under the name [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)). On other platforms, the existence and content of the session variable are not guaranteed outside of an ABAP SQL access, and this can produce unexpected behavior or programs may crash.
    -   No separate WHERE condition can be used that selects a client other than the session variable and the database-specific variant of the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v2.htm'\)) must have the required value in Native SQL or AMDP reads. Outside an ABAP SQL access, it contains the current client by default.
    
    The last point is particularly important for [client handling](javascript:call_link\('abenamdp_client_handling.htm'\)) in general [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") on the SAP HANA database, which are called like regular methods in ABAP. When a database object is accessed, the value of the corresponding HANA session variable [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)) must be set explicitly using the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) in the declaration of the AMDP method. If not, a syntax error occurs. In an [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") that is used as a [CDS](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") table function in ABAP SQL, however, the HANA session variable CDS\_CLIENT is filled with the content defined there.