# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - Views / ABAP CDS - Client Handling in CDS Views

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_client_handling.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm)
- [abencds_view_client_handling_obs.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm)
- [abencds_client_handling_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_abexa.htm)
- [abencds_client_handling_obs_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_obs_abexa.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.904Z

---

### abencds_client_handling.htm

> **📖 Official SAP Documentation**: [abencds_client_handling.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) → 

ABAP CDS - Client Handling in CDS Views

For a CDS view in ABAP CDS, the [CDS annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [@ClientHandling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) can be used to specify client handling.

-   [Determining Client Dependency](#abencds-client-handling-1--------determining-client-handling---@ITOC@@ABENCDS_CLIENT_HANDLING_2)

-   [Properties of Client-Specific CDS Views](#abencds-client-handling-3---determining-client-dependency--the-annotation-ClientHandling.type determines the client dependency of the view. The following values can be specified for the annotation:

#INHERITED

Default value. The client dependency of the view is determined by the [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) used.

-   If one of the data sources used in the view is [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_dependence_glosry.htm "Glossary Entry"), the view is client-specific.

-   If none of the data sources used in the view is [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_dependence_glosry.htm "Glossary Entry"), the view is a cross-client view.

#CLIENT\_DEPENDENT

The view is client-specific. A prerequisite for this is that at least on of the [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) used in the view is client-specific. If not, a syntax error occurs.

#CLIENT\_INDEPENDENT

The view is a cross-client view. A prerequisite for this is that none of the [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) used in the view is client-specific. If not, a syntax error occurs.

Notes

-   CDS views for application data should usually be client-specific.

-   The annotation [@ClientHandling.type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) replaces the annotation [@ClientDependent](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm) and should be used instead of this annotation.

-   Unlike the annotation @ClientDependent, the annotation @ClientHandling.type cannot be used to make a CDS view into a cross-client view if it contains client-specific data sources.

-   If the annotation @ClientHandling.type is not specified, client dependency is derived implicitly from the client dependency of the data sources uses, as when specified with the value #INHERITED.

Determining Client Handling

The annotation @ClientHandling.algorithm determines how implicit client handling is performed. The following values can be specified for the annotation:

#AUTOMATED

Default value for the values #INHERITED and #CLIENT\_DEPENDENT of the annotation @ClientHandling.type. Cannot be used together with its value #CLIENT\_INDEPENDENT.

The value #AUTOMATED expands the joins of the CDS view implicitly as shown in the following table. In the case of outer joins, cross-client sides are made into client-specific sides artificially using cross joins, which avoids NULL values. This applies to joins specified directly using JOIN and to instances of joins created when using [SQL path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_path_expression_glosry.htm "Glossary Entry").

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

Transforms the cross join to an inner join using an ON condition for the client columns

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

The value #SESSION\_VARIABLE expands the joins of the CDS view implicitly as shown in the following table. This applies to joins specified explicitly and directly using JOIN and to instances of joins created when using [SQL path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_path_expression_glosry.htm "Glossary Entry").

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

Transforms the cross join to an inner join using an ON condition for the client columns

Cross-client

Client-specific

\-

Compares the client column with the value of the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) in the ON condition

\-

\-

Client-specific

Cross-client

\-

\-

Compares the client column with the value of the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) in the ON condition

\-

Cross-client

Cross-client

\-

\-

\-

\-

In addition, when client-specific data tables are accessed, WHERE clauses with comparisons of the client columns with the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) are added to the view implicitly. If only client-specific CDS entities are accessed, however, no clauses are added.

If the session variable $session.client is evaluated in the view, it is not possible to access the data of different clients in a single read. This applies in the following cases:

-   When a client-specific database table is a data source of the view or is a CDS view used as a data source and hence an implicit WHERE clause exists for the session variable.

-   When client-specific and cross-client sides are joined in an outer join and there is an implicit ON condition for the session variable.

The addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) for switching [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is permitted and the client specified here is used implicitly. The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) is then not allowed.

#NONE

Default value for the value #CLIENT\_INDEPENDENT of the annotation @ClientHandling.type. Cannot be used together with its values INHERITED and #CLIENT\_DEPENDENT. No implicit client handling takes place.

Notes

-   The values #AUTOMATED and #SESSION\_VARIABLE produce the same result when a client-specific CDS view is used. They modify the way client handling is implemented internally, but do not modify the definition of the view or, with the exception of the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm), its use. The value #SESSION\_VARIABLE can improve performance by concentrating on a single client.

-   If a view with the value #INHERITED of the annotation @ClientHandling.type is a cross-client view, no implicit client handling takes place and the values #AUTOMATED and #SESSION\_VARIABLE are ignored.

-   If no annotation @ClientHandling.type is specified, the annotation @ClientHandling.algorithm can be specified with the values #AUTOMATED or #SESSION\_VARIABLE for the default value #INHERITED.

-   If an annotation @ClientHandling.type is specified but an annotation @ClientHandling.algorithm is not specified, the value #AUTOMATED is set in #INHERITED and #CLIENT\_DEPENDENT implicitly and the value #NONE is set in #CLIENT\_INDEPENDENT, also implicitly.

-   If none of the annotations is specified, the default values #INHERITED for @ClientHandling.type and #AUTOMATED for @ClientHandling.algorithm apply.

-   The value #NONE can only be specified for views declared explicitly as cross-client views. If specified for views declared explicitly as client-specific views using #CLIENT\_DEPENDENT, self-programmed client handling would be required and this is not currently supported.

-   If the value #SESSION\_VARIABLE is specified, the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) is forbidden in cases where the session variable $session.client is actually in use in the view in question. More specifically, specifying a client-specific view in a [CDS association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry") does not necessarily mean that the session variable is used. The session variable is used only if the CDS association in the view is created with an implicit ON condition for the session variable.

Properties of Client-Specific CDS Views

In ABAP SQL reads, the client dependency of a CDS view has the following consequences for the CDS entity and the associated CDS database view:

-   [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry")

-   The view fields of the CDS entity of a client-specific CDS view do not cover a client column. A client column of a client-specific CDS view specified explicitly in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) is also not a component of the structured data type represented by the CDS entity and is removed implicitly from the results set of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement.

-   If [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) is used to access a client-specific CDS entity, the data of the current client or the client specified in the addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) is read implicitly. If the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) is specified, the column is added to the results set and is filled with the associated client ID for each row. Before this column can be used in the SELECT statement, a name must be assigned to it after the addition CLIENT SPECIFIED. If the name is not defined, no addressing is possible in a clause and no inline declarations can be made using [@DATA(...)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) after [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm). The defined name is also used in the case of [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm). If no name is defined, the client column is not transported.

-   [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry")

-   The view fields of a CDS database view of a client-specific CDS view always cover a client column. This applies regardless of whether the client column is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm).

-   If an [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_cds_obsolete.htm) access is made on the CDS database view using [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), the view is handled in accordance with regular [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm), which itself can be defined using the addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm).

-   The name of the client column of a CDS database view with activated client handling is defined in accordance with the following hierarchy: If the client column is specified in the SELECT list, its name or its alternative name is used. If the client column is not specified in the SELECT list, MANDT is used. If MANDT is already used as an (alternative) element name in the SELECT list, CLIENT is used. If neither MANDT or CLIENT is possible, a syntax error occurs.

Notes

-   Only the CDS database view can be accessed using Native SQL or in an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry"). When client-specific views are accessed, the client ID must be specified as usual and only data in the current client should be accessed.

-   The following must be noted when the CDS database view of a client-specific CDS view whose client handling is defined using the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE is accessed using Native SQL or AMDP:

-   The [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) is usually used implicitly in the view. This is guaranteed only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") used as [standard AS ABAP databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") under the name [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_session_variables.htm). On other platforms, the existence and content of the session variable are not guaranteed outside of an ABAP SQL access, and this can produced unexpected behavior or programs may crash.

-   No separate WHERE condition can be used that selects a client other than the session variable and the database-specific variant of the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) must have the required value in Native SQL or AMDP reads. Outside an ABAP SQL access, it contains the current client by default.

The last point is particularly important for [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_client_handling.htm) in general [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") on the SAP HANA database, which are called like regular methods in ABAP. When a CDS database view like this is accessed, the value of the corresponding HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_session_variables.htm) must be set explicitly using the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_amdp_options.htm) in the declaration of the AMDP method. If not, a syntax error occurs. In an [AMDP function implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") that is used as a [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry") table function in ABAP SQL, however, the HANA session variable CDS\_CLIENT is filled with the content defined there.

Executable Example

[CDS Views, Client Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_abexa.htm)

Continue
[ABAP CDS - Obsolete Client Handling in Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm)
![Example](exa.gif "Example") [CDS Views, Client Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_abexa.htm)
![Example](exa.gif "Example") [CDS Views, Obsolete Client Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_obs_abexa.htm)



**📖 Source**: [abencds_client_handling.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm)

### abencds_view_client_handling_obs.htm

> **📖 Official SAP Documentation**: [abencds_view_client_handling_obs.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) →  [ABAP CDS - Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) → 

ABAP CDS - Obsolete Client Handling in Views

Before the annotation [@ClientHandling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) was introduced, the [client dependency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm) of a CDS view was specified using the annotation ClientDependent with the possible values true and false.

-   [Determining Client Dependency](#abencds-view-client-handling-obs-1--------determining-client-handling---@ITOC@@ABENCDS_VIEW_CLIENT_HANDLING_OBS_2)

-   [Properties of Cross-Client Views](#abencds-view-client-handling-obs-3---determining-client-dependency--the-possible-values-true-and-false-of-the-obsolete-annotation-ClientDependent have the following effects on client dependency:

-   true

The annotation ClientDependent:true works like [@ClientHandling.type:#INHERITED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm).

-   A view with client-specific data sources is a client-specific view.

-   A view with exclusively cross-client data sources is a cross-client view.

Unlike in @ClientHandling:#INHERITED, a view in which a cross-client data source as the left side of a LEFT OUTER JOIN is joined with a client-specific data source on the right side cannot be made client-specific using @ClientDependent:true and a syntax error occurs.

-   false

The annotation ClientDependent:false makes a view into a cross-client view. Unlike in [@ClientHandling.type:#CLIENT\_INDEPENDENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm), this value can also be specified for view when a data source of the view is client-specific.

Only the annotation @ClientHandling.type should now be used in new CDS views. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.

Determining Client Handling

The possible values true and false of the obsolete annotation @ClientDependent have the following effects on client handling:

-   true

The annotation ClientDependent:true works like [@ClientHandling.algorithm:#AUTOMATED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm). No cross join, however, is created here for the case (forbidden here) where a cross-client data source is joined with a client-specific data source using a LEFT OUTER JOIN.

-   false

The annotation @ClientDependent:false works like [@ClientHandling.algorithm:#NONE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm). Client handling can be switched off here for views that contain client-specific data sources.

Properties of Cross-Client Views

Client-specific views with the annotation @ClientDependent:true have the same properties as client-specific views with the annotation @ClientHandling.type.#INHERITED or @ClientHandling.type.#CLIENT\_DEPENDENT. @ClientDependent:false can be used, on the other hand, to define cross-client views, even if they contain client-specific data sources. These have the following properties:

-   [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry")

A client column specified in the SELECT list is preserved in the results set if client dependency is switched off explicitly using the annotation @ClientDependent:false. The column is then applied like a regular view field when the CDS entity is accessed.

-   [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry")

If client dependency is switched off explicitly using the annotation @ClientDependent:false, a CDS database view does not have a client column if it is not specified explicitly in the SELECT list. A client column specified in the SELECT list, on the other hand, dictates that the CDS database view has a client column, hence making it a client-specific view. This has consequences for [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_cds_obsolete.htm) access to the CDS database view using [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm). This is then handled in accordance with classic [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm).

Note

It is not usually a good idea to switch off client dependency in views with client-specific data sources. If this is still sometimes the case, only the CDS entity must be accessed, and never the CDS database view, to avoid unexpected behavior.

Executable Example

[CDS Views, Obsolete Client Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_obs_abexa.htm)



**📖 Source**: [abencds_view_client_handling_obs.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm)

### abencds_client_handling_abexa.htm

> **📖 Official SAP Documentation**: [abencds_client_handling_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) →  [ABAP CDS - Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) → 

CDS Views, Client Handling

This example demonstrates how [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) CDS views are handled.

Source Code

REPORT demo\_cds\_client\_handling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'Data Types' ).
    out->write(
      name = 'Client dependent, no client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_0' )
                        )->components ).
    out->write(
      name = 'Client dependent, no client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN0' )
                        )->components ).
    out->write(
      name = 'Client dependent, client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_1' )
                        )->components ).
    out->write(
      name = 'Client dependent, client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN1' )
                        )->components ).
    out->next\_section( 'SELECT Statements' ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_0
           ORDER BY carrid, connid
           INTO TABLE @DATA(result1)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, CDS entity'
      data = result1 ).
    SELECT \*
           FROM demo\_cds\_prjctn0
           ORDER BY carrid, connid
           INTO TABLE @DATA(result2)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, database view'
      data = result2 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_0
                CLIENT SPECIFIED demo\_cds\_spfli\_client\_0~myclient
           WHERE myclient = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result3)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, CDS entity,' &
             ' CLIENT SPECIFIED'
      data = result3 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_1
           ORDER BY carrid, connid
           INTO TABLE @DATA(result4)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, client field, CDS entity'
      data = result4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program accesses the following CDS views:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN0'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #AUTOMATED
define view demo\_cds\_spfli\_client\_0
  as select from
    spfli
    {
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #AUTOMATED
define view demo\_cds\_spfli\_client\_1
  as select from
    spfli
    {
      key spfli.mandt,
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }    

The view DEMO\_CDS\_SPFLI\_CLIENT\_0 is a regular client-specific CDS view in which the client column is not specified in the SELECT list. The view DEMO\_CDS\_SPFLI\_CLIENT\_1 is used to demonstrate the behavior in rare cases where the client column is specified in the SELECT list of a client-specific CDS view.

RTTI is used to read the components of the associated data types:

-   The structure of the client-specific CDS entity without client column in the SELECT list does not have a client column.

-   The database view of the client-specific CDS view without client column in the SELECT list has a client column.

-   Nevertheless, the structure of the client-specific CDS entity with client column in the SELECT list does not have a client column.

-   The database view of the client-specific CDS view with client column in the SELECT list has a client column.

The statement SELECT is used to make the following accesses:

-   Regular access to a client-specific CDS entity without client column in the SELECT list. The data from the current client is read. The results set does not have a client column.

-   Regular access to a database view of the client-specific CDS entity without client column in the SELECT list. The data from the current client is read. The results set has a client column.

-   Access to a client-specific CDS entity without client column in the SELECT list using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm). The data of the client specified in the WHERE condition is read. A name myclient must be defined for this. The results set has a client column with this name.

-   Regular access to a database view of the client-specific CDS entity with client column in the SELECT list. The data from the current client is read. The results set does not have a client column.

The similar program DEMO\_CDS\_CLIENT\_HANDLING\_SV accesses CDS views in which the annotation @ClientHandling.algorithm: #SESSION\_VARIABLE is used instead of @ClientHandling.algorithm: #AUTOMATED. The results are shown in exactly the same way as here, however access using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) is not possible since the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) is evaluated implicitly in the views.

Note

The accesses to the database views of the CDS shown here are for demonstration purposes only. This way of accessing CDS views is obsolete and only the CDS entities should now be accessed.



**📖 Source**: [abencds_client_handling_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_abexa.htm)

### abencds_client_handling_obs_abexa.htm

> **📖 Official SAP Documentation**: [abencds_client_handling_obs_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_obs_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_client_handling_obs_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_obs_abexa.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) →  [ABAP CDS - Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) → 

CDS Views, Obsolete Client Handling

This example demonstrates how obsolete [cross-client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm) CDS views are handled.

Source Code

REPORT demo\_cds\_client\_handling\_obs.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'Data Types' ).
    out->write(
      name = 'Not client dependent, no client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_2' )
                        )->components ).
    out->write(
      name = 'Not client dependent, no client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN2' )
                        )->components ).
    out->write(
      name = 'Not client dependent, client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_3' )
                        )->components ).
    out->write(
      name = 'Not client dependent, client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN3' )
                        )->components ).
    out->next\_section( 'SELECT Statements' ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_2
           ORDER BY carrid, connid
           INTO TABLE @DATA(result1)
           UP TO 1 ROWS.
    out->write(
      name =  'Not client dependent, no client field, CDS entity'
      data = result1 ).
    SELECT \*
           FROM demo\_cds\_prjctn2
           ORDER BY carrid, connid
           INTO TABLE @DATA(result2)
           UP TO 1 ROWS.
    out->write(
      name =  'Not client dependent, no client field, database view'
      data = result2 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_3
           WHERE mandt = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result3)
           UP TO 1 ROWS.
    out->write(
      name = 'Not client dependent, client field, CDS entity'
      data = result3 ).
    SELECT \*
           FROM demo\_cds\_prjctn3 CLIENT SPECIFIED
           WHERE mandt = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result4)
           UP TO 1 ROWS.
    out->write(
      name = 'Not client dependent, client field, database view,' &
             ' CLIENT SPECIFIED'
      data = result4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program accesses the following CDS views:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientDependent: false
define view demo\_cds\_spfli\_client\_2
as select from
spfli
{
key spfli.carrid,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN3'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientDependent: false
define view demo\_cds\_spfli\_client\_3
as select from
spfli
{
key spfli.mandt,
key spfli.carrid,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

They are used to demonstrate the behavior in rare cases where views with the obsolete notation [ClientDependent:false](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm) are made into cross-client views even though they contain client-specific data sources:

-   DEMO\_CDS\_SPFLI\_CLIENT\_2 is a cross-client CDS view in which the client column is not specified in the SELECT list.

-   DEMO\_CDS\_SPFLI\_CLIENT\_3 is a cross-client CDS view in which the client column is specified in the SELECT list.

RTTI is used to read the components of the associated data types:

-   The structure of the cross-client CDS entity without client column in the SELECT list does not have a client column.

-   The database view of the cross-client CDS view without client column in the SELECT list has a client column.

-   The structure of the cross-client CDS entity without client column in the SELECT list does not have a client column.

-   The database view of the cross-client CDS view with client column in the SELECT list has a client column, which makes it client-specific.

The statement SELECT is used to make the following accesses:

-   Regular access to a cross-client CDS entity without client column in the SELECT list. The data is read from all clients. No conditions can be specified for the client. The results set does not have a client column.

-   Regular access to a database view of the cross-client CDS entity without client column in the SELECT list. The data is read from all clients. No conditions can be specified for the client. The results set does not have a client column.

-   Regular access to a cross-client CDS entity with client column in the SELECT list. The data of the client specified in the WHERE condition is read. It is not possible to specify the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) here. The results set has a client column.

-   Access to a database view of the cross-client CDS with client column in the SELECT list using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm). The data of the client specified in the WHERE condition is read. The results set has a client column.

Note

The accesses to the database views of the CDS shown here are for demonstration purposes only. This way of accessing CDS views is obsolete and only the CDS entities should now be accessed.
