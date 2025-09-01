  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Views](javascript:call_link\('abenddic_cds_views.htm'\)) → 

ABAP CDS - Client Handling in CDS Views

For a CDS view in ABAP CDS, the [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [@ClientHandling](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to specify client handling.

-   [Determining Client Dependency](#@@ITOC@@ABENCDS_CLIENT_HANDLING_1)

-   [Determining Client Handling](#@@ITOC@@ABENCDS_CLIENT_HANDLING_2)

-   [Properties of Client-Specific CDS Views](#@@ITOC@@ABENCDS_CLIENT_HANDLING_3)

Determining Client Dependency

The annotation @ClientHandling.type determines the client dependency of the view. The following values can be specified for the annotation:

#INHERITED

Default value. The client dependency of the view is determined by the [data sources](javascript:call_link\('abencds_f1_data_source.htm'\)) used.

-   If one of the data sources used in the view is [client-specific](javascript:call_link\('abenclient_dependence_glosry.htm'\) "Glossary Entry"), the view is client-specific.

-   If none of the data sources used in the view is [client-specific](javascript:call_link\('abenclient_dependence_glosry.htm'\) "Glossary Entry"), the view is a cross-client view.

#CLIENT\_DEPENDENT

The view is client-specific. A prerequisite for this is that at least on of the [data sources](javascript:call_link\('abencds_f1_data_source.htm'\)) used in the view is client-specific. If not, a syntax error occurs.

#CLIENT\_INDEPENDENT

The view is a cross-client view. A prerequisite for this is that none of the [data sources](javascript:call_link\('abencds_f1_data_source.htm'\)) used in the view is client-specific. If not, a syntax error occurs.

Notes

-   CDS views for application data should usually be client-specific.

-   The annotation [@ClientHandling.type](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) replaces the annotation [@ClientDependent](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) and should be used instead of this annotation.

-   Unlike the annotation @ClientDependent, the annotation @ClientHandling.type cannot be used to make a CDS view into a cross-client view if it contains client-specific data sources.

-   If the annotation @ClientHandling.type is not specified, client dependency is derived implicitly from the client dependency of the data sources uses, as when specified with the value #INHERITED.

Determining Client Handling

The annotation @ClientHandling.algorithm determines how implicit client handling is performed. The following values can be specified for the annotation:

#AUTOMATED

Default value for the values #INHERITED and #CLIENT\_DEPENDENT of the annotation @ClientHandling.type. Cannot be used together with its value #CLIENT\_INDEPENDENT.

The value #AUTOMATED expands the joins of the CDS view implicitly as shown in the following table. In the case of outer joins, cross-client sides are made into client-specific sides artificially using cross joins, which avoids NULL values. This applies to joins specified directly using JOIN and to instances of joins created when using [CDS path expressions](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry").

Left Side

Right Side

INNER JOIN

LEFT OUTER JOIN

RIGHT OUTER JOIN

CROSS JOIN

Client-specific

Client-specific

Compares the client columns in the ON condition

Compares the client columns in the ON condition

Compares the client columns in the ON condition

Transforms the cross join to an inner join using an ON condition for the client column

Cross-client

Client-specific

\-

The left side is replaced by a cross join of the cross-client data source with the database table T000 and a comparison of the client columns in the ON condition.

\-

\-

Client-specific

Cross-client

\-

\-

The right side is replaced by a cross join of the cross-client data source with the database table T000 and the client columns are compared in the ON condition.

\-

Cross-client

Cross-client

\-

\-

\-

\-

#SESSION\_VARIABLE

Cannot be used together with the value #CLIENT\_INDEPENDENT of the annotation @ClientHandling.type.

The value #SESSION\_VARIABLE expands the joins of the CDS view implicitly as shown in the following table. This applies to joins specified explicitly using JOIN and to instances of joins created when using [CDS path expressions](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry").

Left Side

Right Side

INNER JOIN

LEFT OUTER JOIN

RIGHT OUTER JOIN

CROSS JOIN

Client-specific

Client-specific

Compares the client columns in the ON condition

Compares the client columns in the ON condition

Compares the client columns in the ON condition

Transforms the cross join to an inner join using an ON condition for the client column

Cross-client

Client-specific

\-

Compares the client column with the value of the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) in the ON condition

\-

\-

Client-specific

Cross-client

\-

\-

Compares the client column with the value of the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) in the ON condition

\-

Cross-client

Cross-client

\-

\-

\-

\-

In addition, when client-specific data tables are accessed, WHERE clauses with comparisons of the client columns with the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) are added to the view implicitly. If only client-specific CDS entities are accessed, however, no clauses are added.

If the session variable $session.client is evaluated in the view, it is not possible to access the data of different clients in a single read. This applies in the following cases:

-   When a client-specific database table is a data source of the view or is a CDS view used as a data source and hence an implicit WHERE clause exists for the session variable.

-   When client-specific and cross-client sides are joined in an outer join and there is an implicit ON condition for the session variable.

The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is not allowed in this case. The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)), on the other hand, is allowed and the client specified here is used implicitly.

#NONE

Default value for the value #CLIENT\_INDEPENDENT of the annotation @ClientHandling.type. Cannot be used together with its values INHERITED and #CLIENT\_DEPENDENT. No implicit client handling takes place.

Notes

-   The values #AUTOMATED and #SESSION\_VARIABLE produce the same result when a client-specific CDS view is used. The modify the way client handling is implemented internally, but do not modify the definition of the view or its use (with the exception of [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\))). The value #SESSION\_VARIABLE can improve performance by concentrating on a single client.

-   If a view with the value #INHERITED of the annotation @ClientHandling.type is a cross-client view, no implicit client handling takes place and the values #AUTOMATED and #SESSION\_VARIABLE are ignored.

-   If no annotation @ClientHandling.type is specified, the annotation @ClientHandling.algorithm can be specified with the values #AUTOMATED or #SESSION\_VARIABLE for the default value #INHERITED.

-   If an annotation @ClientHandling.type is specified but an annotation @ClientHandling.algorithm is not specified, the value #AUTOMATED is set in #INHERITED and #CLIENT\_DEPENDENT implicitly and the value #NONE is set in #CLIENT\_INDEPENDENT, also implicitly.

-   If none of the annotations is specified, the default values #INHERITED for @ClientHandling.type and #AUTOMATED for @ClientHandling.algorithm apply.

-   The value #NONE can only be specified for views declared explicitly as cross-client views. If specified for views declared explicitly as client-specific views using #CLIENT\_DEPENDENT, self-programmed client handling would be required and this is not currently supported.

-   If the value #SESSION\_VARIABLE is specified, the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is forbidden only in cases where the session variable $session.client is actually in use in the view in question. More specifically, specifying a client-specific view in an [association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") does not necessarily mean that the session variable is used. The session variable is used only if the association in the view is created with an implicit ON condition for the session variable.

Properties of Client-Specific CDS Views

In Open SQL reads, the client dependency of a CDS view has the following consequences for the CDS entity and the associated CDS database view:

-   [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")

-   The view fields of the CDS entity of a client-specific CDS view do not cover a client column. A client column of a client-specific CDS view specified explicitly in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) is also not a component of the structured data type represented by the CDS entity and is removed implicitly from the results set of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

-   If [SELECT](javascript:call_link\('abapselect.htm'\)) is used to access a client-specific CDS entity, the data of the current client or the client specified in the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is read implicitly. If the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) is specified, the column is added to the results set and is filled with the associated client ID for each row. Before this column can be used in the SELECT statement, a name must be assigned to it after the addition CLIENT SPECIFIED. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made after [INTO](javascript:call_link\('abapinto_clause.htm'\)). The defined name is also used in the case of [INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)). If no name is defined, the client column is not transported

-   [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry")

-   The view fields of a CDS database view of a client-specific CDS view always cover a client column. This applies regardless of whether the client column is specified in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)).

-   In [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)) selects made on the CDS database view using [SELECT](javascript:call_link\('abapselect.htm'\)), the view is handled in accordance with regular automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"), where a client column is evaluated implicitly or explicitly using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)).

-   The name of the client column of a CDS database view with activated client handling is defined in accordance with the following hierarchy: If the client column is specified in the SELECT list, its name or its alternative name is used. If the client column is not specified in the SELECT list, MANDT is used. If MANDT is already used as an (alternative) element name in the SELECT list, CLIENT is used. If neither MANDT or CLIENT is possible, a syntax error occurs.

Notes

-   Only the CDS database view can be accessed using Native SQL or in an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"). When client-specific views are accessed, the client ID must be specified as usual and only data in the current client should be accessed.

-   The following must be noted when using Native SQL or AMDP access the CDS database view of a client-specific CDS view whose client handling is determined by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE:

-   The [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) is usually used implicitly in the view. This is guaranteed only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") used as [standard AS ABAP databases](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") under the name [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)). On other platforms, the existence and content of the session variable are not guaranteed outside of an Open SQL access, and this can produced unexpected behavior or programs may crash.

-   No separate WHERE condition can be used that selects a client other than the session variable and the database-specific variant of the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_f1_session_variable.htm'\)) must have the required value in Native SQL or AMDP reads. Outside an Open SQL access, it contains the current client by default.

The last point is particularly important for [client handling](javascript:call_link\('abenamdp_client_handling.htm'\)) in general [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") on the SAP HANA database, which are called like normal methods in ABAP. When a CDS database view is accessed using the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)), the value of the corresponding HANA session variable [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)) must be set explicitly in the declaration of the AMDP method. If not, a syntax check warning and (in the call) an exception of the class CX\_AMDP\_CDS\_CLIENT\_MISMATCH is raised. However, in an [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") that is used as a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in Open SQL, the HANA session variable CDS\_CLIENT is filled with the content defined there.

Executable Example

[CDS Views, Client Handling](javascript:call_link\('abencds_client_handling_abexa.htm'\))

Continue
[ABAP CDS - Obsolete Client Handling in Views](javascript:call_link\('abencds_view_client_handling_obs.htm'\))
![Example](exa.gif "Example") [CDS Views, Client Handling](javascript:call_link\('abencds_client_handling_abexa.htm'\))
![Example](exa.gif "Example") [CDS Views, Obsolete Client Handling](javascript:call_link\('abencds_client_handling_obs_abexa.htm'\))