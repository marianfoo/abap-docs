  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) → 

ABAP CDS - Client Handling in CDS View Entities

For a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), client handling is done implicitly and automatically by filtering the client [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm).

You cannot manipulate this. Client handling annotations are not available.

-   [Determining Client Dependency](#@@ITOC@@ABENCDS_V2_VIEW_CLIENT_HANDLING_1)

-   [Determining Client Handling](#@@ITOC@@ABENCDS_V2_VIEW_CLIENT_HANDLING_2)

-   [Properties of Client-Dependent CDS View Entities](#@@ITOC@@ABENCDS_V2_VIEW_CLIENT_HANDLING_3)

Determining Client Dependency

The [client dependency](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_dependency_glosry.htm "Glossary Entry") of a view is determined by the [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) used:

-   If one of the data sources used in the view is client-dependent, the view is [client-dependent](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_dependent_glosry.htm "Glossary Entry").

-   If none of the data sources used in the view is client-dependent, the view is [client-independent](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_independent_glosry.htm "Glossary Entry").

Determining Client Handling

If a CDS view entity is client-dependent, then the client handling is performed by filtering the client [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm). The session variable algorithm expands the [joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry") of the view entity implicitly as shown in the following table. This applies to joins specified explicitly using JOIN, as well as to instances of joins created when using [SQL path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_path_expression_glosry.htm "Glossary Entry").

Left Side

Right Side

INNER JOIN

LEFT OUTER JOIN

RIGHT OUTER JOIN

CROSS JOIN

Client-dependent

Client-dependent

Compares the client columns in the ON condition

Compares the client columns in the ON condition

Compares the client columns in the ON condition

Transforms the cross join to an inner join using an ON condition for the client columns

Client-independent

Client-dependent

\-

Compares the client column with the value of the [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) in the ON condition

\-

\-

Client-dependent

Client-independent

\-

\-

Compares the client column with the value of the [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) in the ON condition

\-

Client-independent

Client-independent

\-

\-

\-

\-

In addition, when client-dependent database tables are accessed, [WHERE\-clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v2.htm) with comparisons of the client columns with the [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) are added to the view implicitly. If only client-dependent [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") are accessed, however, no clauses are added.

It is not possible to access the data of different clients in a single read.

The addition [USING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) for switching [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm) is not allowed for CDS view entities. The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm) is not allowed either.

Example

The following CDS view entity DEMO\_CDS\_CLIENT\_HANDLING defines different kinds of [joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_glosry.htm "Glossary Entry") ([left outer join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleft_outer_join_glosry.htm "Glossary Entry"), [inner join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninner_join_glosry.htm "Glossary Entry"), and [right outer join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenright_outer_join_glosry.htm "Glossary Entry")) between a client-independent database table (T000) and a client-dependent database table (DEMO\_SALES\_ORDER). It also defines and uses an [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") between the same client-independent database table (T000) and the same client-dependent database table (DEMO\_SALES\_ORDER).

@AccessControl.authorizationCheck: #NOT\_REQUIRED
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
    where client\_independent.mtext = 'SAP AG Konzern'

SQL statement created on the database:

The image below shows the SQL statement that is generated on the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"). For the left outer join, an ON condition is added that compares the client field of the database table DEMO\_SALES\_ORDER with the current client. The current client is determined using the built-in SAP HANA function [SESSION\_CONTEXT ('CDS\_CLIENT')](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables.htm), which is the equivalent to the session variable $session.client in ABAP CDS. In the same way, a WHERE clause is added that compares the client of the database table with the current client.

![Figure](abdoc_client_handling.png)

Properties of Client-Dependent CDS View Entities

Since client handling is performed completely implicitly in CDS view entities, a client field is not allowed in the SELECT list of a view entity. The result set of an ABAP SQL read on a CDS view entity can never contain a client column either.

Hints

-   When client-dependent views are accessed via [Native SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennative_sql_glosry.htm "Glossary Entry") or in an [AMDP method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_method_glosry.htm "Glossary Entry"), only the [database object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_object_glosry.htm "Glossary Entry") is accessed. The [client ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_identifier_glosry.htm "Glossary Entry") must be specified as usual and only data in the current client should be accessed.

-   When the [database object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_object_glosry.htm "Glossary Entry") of a client-dependent [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry") is accessed using Native SQL or AMDP, please note:

-   The [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) is usually used implicitly in the view. This is guaranteed only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") used as [standard AS ABAP databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_glosry.htm "Glossary Entry") under the name [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables.htm). On other platforms, the existence and content of the session variable are not guaranteed outside of an ABAP SQL access, and this can produced unexpected behavior or programs may crash.

-   No separate WHERE condition can be used that selects a client other than the session variable and the database-specific variant of the [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) must have the required value in Native SQL or AMDP reads. Outside an ABAP SQL access, it contains the current client by default.

The last point is particularly important for [client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_client_handling.htm) in general [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") on the SAP HANA database, which are called like regular methods in ABAP. When a database object is accessed, the value of the corresponding HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables.htm) must be set explicitly using the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_amdp_options.htm) in the declaration of the AMDP method. If not, a syntax error occurs. In an [AMDP function implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") that is used as a [CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") table function in ABAP SQL, however, the HANA session variable CDS\_CLIENT is filled with the content defined there.