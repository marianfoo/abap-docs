---
title: "ABAP CDS - Client Handling in CDS DDIC-Based Views"
description: |
  For a CDS DDIC-based view (obsolete)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm 'Glossary Entry') in ABAP CDS, the CDS annotation(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm 'Glossary Entry') @ClientHandling
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm"
abapFile: "abencds_view_client_handling_v1.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abencds", "view", "client", "handling"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Client Handling in CDS DDIC-Based Views, ABENCDS_VIEW_CLIENT_HANDLING_V1,
757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Client Handling in CDS DDIC-Based Views

For a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in ABAP CDS, the [CDS annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") [@ClientHandling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) can be used to specify client handling.

-   [Determining Client Dependency](#abencds-view-client-handling-v1-1-------determining-client-handling---@ITOC@@ABENCDS_VIEW_CLIENT_HANDLING_V1_2)
-   [Properties of Client-dependent CDS DDIC-based views (obsolete).](#abencds-view-client-handling-v1-3---determining-client-dependency-----the-annotation-ClientHandling.type determines the client dependency of the view. The following values can be specified for the annotation:

#INHERITED

Default value. The client dependency of the view is determined by the [data sources](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm) used.

-   If one of the data sources used in the view is [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_dependent_glosry.htm "Glossary Entry"), the view is client-dependent.
-   If none of the data sources used in the view is [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_dependent_glosry.htm "Glossary Entry"), the view is a client-independent view.

#CLIENT\_DEPENDENT

The view is client-dependent. A prerequisite for this is that at least on of the [data sources](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm) used in the view is client-dependent. If not, a syntax error occurs.

#CLIENT\_INDEPENDENT

The view is a client-independent view. A prerequisite for this is that none of the [data sources](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm) used in the view is client-dependent. If not, a syntax error occurs.

Hints

-   CDS views for application data should usually be client-dependent.
-   The annotation [@ClientHandling.type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) replaces the annotation [@ClientDependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_obs.htm) and should be used instead of this annotation.
-   Unlike the annotation @ClientDependent, the annotation @ClientHandling.type cannot be used to make a CDS DDIC-based view (obsolete) into a client-independent view if it contains client-dependent data sources.
-   If the annotation @ClientHandling.type is not specified, client dependency is derived implicitly from the client dependency of the data sources uses, as when specified with the value #INHERITED.

Determining Client Handling   

The annotation @ClientHandling.algorithm determines how implicit client handling is performed. The following values can be specified for the annotation:

#AUTOMATED

Default value for the values #INHERITED and #CLIENT\_DEPENDENT of the annotation @ClientHandling.type. Cannot be used together with its value #CLIENT\_INDEPENDENT.

The value #AUTOMATED expands the joins of the [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") implicitly as shown in the following table. In the case of outer joins, client-independent sides are made into client-dependent sides artificially using cross joins, which avoids null values. This applies to joins specified directly using JOIN and to instances of joins created when using [SQL path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_path_expression_glosry.htm "Glossary Entry").

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

The left side is replaced by a cross join of the client-independent data source with the DDIC database table T000 and a comparison of the client columns in the ON condition.

\-

\-

Client-dependent

Client-independent

\-

\-

The right side is replaced by a cross join of the client-independent data source with the DDIC database table T000 and the client columns are compared in the ON condition.

\-

Client-independent

Client-independent

\-

\-

\-

\-

#SESSION\_VARIABLE

Cannot be used together with the value #CLIENT\_INDEPENDENT of the annotation @ClientHandling.type.

The value #SESSION\_VARIABLE expands the joins of the [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") implicitly as shown in the following table. This applies to joins specified explicitly and directly using JOIN and to instances of joins created when using [SQL path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_path_expression_glosry.htm "Glossary Entry").

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

Compares the client column with the value of the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) in the ON condition

\-

\-

Client-dependent

Client-independent

\-

\-

Compares the client column with the value of the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) in the ON condition

\-

Client-independent

Client-independent

\-

\-

\-

\-

In addition, when Client-dependent data tables are accessed, WHERE clauses with comparisons of the client columns with the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) are added to the view implicitly. If only client-dependent CDS entities are accessed, however, no clauses are added.

If the session variable $session.client is evaluated in the view, it is not possible to access the data of different clients in a single read. This applies in the following cases:

-   When a client-dependent DDIC database table is a data source of the view or is a CDS view used as a data source and hence an implicit WHERE clause exists for the session variable.
-   When client-dependent and client-independent sides are joined in an outer join and there is an implicit ON condition for the session variable.

The addition [USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) for switching [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm) is allowed and the client specified here is used implicitly. The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) is then not allowed.

#NONE

Default value for the value #CLIENT\_INDEPENDENT of the annotation @ClientHandling.type. Cannot be used together with its values INHERITED and #CLIENT\_DEPENDENT. No implicit client handling takes place.

Hints

-   The values #AUTOMATED and #SESSION\_VARIABLE produce the same result when a client-dependent CDS view is used. They modify the way client handling is implemented internally, but do not modify the definition of the view or, with the exception of the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm), its use. The value #SESSION\_VARIABLE can improve performance by concentrating on a single client.
-   If a view with the value #INHERITED of the annotation @ClientHandling.type is a client-independent view, no implicit client handling takes place and the values #AUTOMATED and #SESSION\_VARIABLE are ignored.
-   If no annotation @ClientHandling.type is specified, the annotation @ClientHandling.algorithm can be specified with the values #AUTOMATED or #SESSION\_VARIABLE for the default value #INHERITED.
-   If an annotation @ClientHandling.type is specified but an annotation @ClientHandling.algorithm is not specified, the value #AUTOMATED is set in #INHERITED and #CLIENT\_DEPENDENT implicitly and the value #NONE is set in #CLIENT\_INDEPENDENT, also implicitly.
-   If none of the annotations is specified, the default values #INHERITED for @ClientHandling.type and #AUTOMATED for @ClientHandling.algorithm apply.
-   The value #NONE can only be specified for views declared explicitly as client-independent views. If specified for views declared explicitly as client-dependent views using #CLIENT\_DEPENDENT, self-programmed client handling would be required and this is not currently supported.
-   If the value #SESSION\_VARIABLE is specified, the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) is forbidden in cases where the session variable $session.client is actually in use in the view in question. More specifically, specifying a client-dependent view in a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") does not necessarily mean that the session variable is used. The session variable is used only if the CDS association in the view is created with an implicit ON condition for the session variable.

Properties of Client-dependent CDS DDIC-based views (obsolete).   

In ABAP SQL reads, the client dependency of a CDS view has the following consequences for the CDS entity and any associated [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"):

-   [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry")
    -   The view fields of the CDS entity of a client-dependent CDS view do not cover a client column. A client column of a client-dependent CDS view specified explicitly in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v1.htm) is also not a component of the structured data type represented by the CDS entity and is removed implicitly from the result set of a [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement.
    -   If [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) is used to access a client-dependent CDS entity, the data of the current client or the client specified in the addition [USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) is read implicitly. If the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) is specified, the column is added to the result set and is filled with the associated client ID for each row. Before this column can be used in the SELECT statement, a name must be assigned to it after the addition CLIENT SPECIFIED. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made using [@DATA*|*@FINAL(...)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_into_target.htm) after [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm). The defined name is also used in the case of [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm). If no name is defined, the client column is not transported.
-   [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry")
    -   The view fields of a CDS-managed DDIC view (obsolete) of a client-dependent CDS view always cover a client column. This applies regardless of whether the client column is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v1.htm).
    -   If an [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_cds_obsolete.htm) access is made on the CDS-managed DDIC view (obsolete) using [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm), the view is handled in accordance with regular [implicit client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_client_handling.htm), which itself can be defined using the addition [USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm).
    -   The name of the client column of a CDS-managed DDIC view (obsolete) with activated client handling is defined in accordance with the following hierarchy: If the client column is specified in the SELECT list, its name or its alternative name is used. If the client column is not specified in the SELECT list, MANDT is used. If MANDT is already used as an (alternative) element name in the SELECT list, CLIENT is used. If neither MANDT or CLIENT is possible, a syntax error occurs.

Hints

-   When client-dependent views are accessed via Native SQL or in an [AMDP method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry"), only the database object is accessed. The client ID must be specified as usual and only data in the current client should be accessed.
-   When the database object of a client-dependent CDS view, whose client handling is defined using the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, is accessed using Native SQL or AMDP, note the following:
    
    -   The [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) is usually used implicitly in the view. This is guaranteed only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry") used as [standard AS ABAP databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") under the name [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm). On other platforms, the existence and content of the session variable are not guaranteed outside of an ABAP SQL access, and this can produced unexpected behavior or programs may crash.
    -   No separate WHERE condition can be used that selects a client other than the session variable and the database-specific variant of the [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) must have the required value in Native SQL or AMDP reads. Outside an ABAP SQL access, it contains the current client by default.
    
    The last point is particularly important for [client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_client_handling.htm) in general [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") on the SAP HANA database, which are called like regular methods in ABAP. When a database object is accessed, the value of the corresponding HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) must be set explicitly using the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_amdp_options.htm) in the declaration of the AMDP method. If not, a syntax error occurs. In an [AMDP function implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") that is used as a [CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry") table function in ABAP SQL, however, the HANA session variable CDS\_CLIENT is filled with the content defined there.
    

Executable Example

[CDS Views, Client Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_client_handl_v1_abexa.htm)

Continue
[ABAP CDS - Obsolete Client Handling in CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_obs.htm)
![Example](exa.gif "Example") [CDS DDIC-based views (obsolete), Client Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_client_handl_v1_abexa.htm)
![Example](exa.gif "Example") [CDS DDIC-based views (obsolete), Obsolete Client Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_client_handling_obs_abexa.htm)