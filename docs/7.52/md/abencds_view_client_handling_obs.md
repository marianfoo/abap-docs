  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_views.htm) →  [ABAP CDS - Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) → 

ABAP CDS - Obsolete Client Handling in Views

Before the annotation [@ClientHandling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) was introduced, the [client dependency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm) of a CDS view was specified using the annotation ClientDependent with the possible values true and false.

-   [Determining Client Dependency](#@@ITOC@@ABENCDS_VIEW_CLIENT_HANDLING_OBS_1)

-   [Determining Client Handling](#@@ITOC@@ABENCDS_VIEW_CLIENT_HANDLING_OBS_2)

-   [Properties of Cross-Client CDS Views](#@@ITOC@@ABENCDS_VIEW_CLIENT_HANDLING_OBS_3)

Determining Client Dependency

The possible values true and false of the obsolete annotation @ClientDependent have the following effects on client dependency:

-   true

The annotation ClientDependent:true works like [@ClientHandling.type:#INHERITED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm).

-   A view with client-specific data sources is a client-specific view.

-   A view with exclusively cross-client data sources is a cross-client view.

Unlike in @ClientHandling:#INHERITED, a view in which a cross-client data source as the left side of a LEFT OUTER JOIN is joined with a client-specific data source on the right side cannot be made client-specific using @ClientDependent:true and a syntax error occurs.

-   false

The annotation ClientDependent:false makes a view into a cross-client view. Unlike in [@ClientHandling.type:#CLIENT\_INDEPENDENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm), this value can also be specified for view when a data source of the view is client-specific.

Only the annotation @ClientHandling.type should now be used in new CDS views. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.

Determining Client Handling

The possible values true and false of the obsolete annotation @ClientDependent have the following effects on client handling:

-   true

The annotation ClientDependent:true works like [@ClientHandling.algorithm:#AUTOMATED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm). No cross join, however, is created here for the case (forbidden here) where a cross-client data source is joined with a client-specific data source using a LEFT OUTER JOIN.

-   false

The annotation @ClientDependent:false works like [@ClientHandling.algorithm:#NONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm). Client handling can be switched off here for views that contain client-specific data sources.

Properties of Cross-Client CDS Views

Client-specific views with the annotation @ClientDependent:true have the same properties as client-specific views with the annotation @ClientHandling.type.#INHERITED or @ClientHandling.type.#CLIENT\_DEPENDENT. @ClientDependent:false can be used, on the other hand, to define cross-client views, even if they contain client-specific data sources. These have the following properties:

-   [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry")

A client column specified in the SELECT list is preserved in the results set if client dependency is switched off explicitly using the annotation @ClientDependent:false. The column is then applied like a regular view field when the CDS entity is accessed.

-   [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry")

If client dependency is switched off explicitly using the annotation @ClientDependent:false, a CDS database view does not have a client column if it is not specified explicitly in the SELECT list. A client column specified in the SELECT list, on the other hand, dictates that the CDS database view has a client column, hence making it a client-specific view. This has consequences for [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cds_obsolete.htm) access to the CDS database view using [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm). This is then handled in accordance with classic automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry").

Note

It is not usually a good idea to switch off client dependency in views with client-specific data sources. If this is still sometimes the case, only the CDS entity must be accessed, and never the CDS database view, to avoid unexpected behavior.

Executable Example

[CDS Views, Obsolete Client Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling_obs_abexa.htm)