---
title: "ABAP CDS - Obsolete Client Handling in CDS DDIC-based views"
description: |
  Before the annotation @ClientHandling(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) was introduced, the client dependency(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_func_client_handling.htm) of a CDS view was specified using the anno
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_obs.htm"
abapFile: "abencds_view_client_handling_obs.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "view", "client", "handling", "obs"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [ABAP CDS - Client Handling in CDS DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm) → 

ABAP CDS - Obsolete Client Handling in CDS DDIC-based views

Before the annotation [@ClientHandling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) was introduced, the [client dependency](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_func_client_handling.htm) of a CDS view was specified using the annotation ClientDependent with the possible values true and false.

-   [Determining Client Dependency](#abencds-view-client-handling-obs-1--------determining-client-handling---@ITOC@@ABENCDS_VIEW_CLIENT_HANDLING_OBS_2)

-   [Properties of Client-independent Views](#abencds-view-client-handling-obs-3---determining-client-dependency--the-possible-values-true-and-false-of-the-obsolete-annotation-ClientDependent have the following effects on client dependency:

-   true

The annotation ClientDependent:true works like [@ClientHandling.type:#INHERITED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm).

-   A view with client-dependent data sources is a client-dependent view.

-   A view with exclusively client-independent data sources is a client-independent view.

Unlike in @ClientHandling:#INHERITED, a view in which a client-independent data source as the left side of a LEFT OUTER JOIN is joined with a client-dependent data source on the right side cannot be made client-dependent using @ClientDependent:true and a syntax error occurs.

-   false

The annotation ClientDependent:false makes a view into a client-independent view. Unlike in [@ClientHandling.type:#CLIENT\_INDEPENDENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm), this value can also be specified for view when a data source of the view is client-dependent.

Only the annotation @ClientHandling.type should now be used in new CDS views. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.

Determining Client Handling

The possible values true and false of the obsolete annotation @ClientDependent have the following effects on client handling:

-   true

The annotation ClientDependent:true works like [@ClientHandling.algorithm:#AUTOMATIC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm). No cross join, however, is created here for the case (forbidden here) where a client-independent data source is joined with a client-dependent data source using a LEFT OUTER JOIN.

-   false

The annotation @ClientDependent:false works like [@ClientHandling.algorithm:#NONE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm). Client handling can be disabled here for views that contain client-dependent data sources.

Properties of Client-independent Views

Client-dependent views with the annotation @ClientDependent:true have the same properties as client-dependent views with the annotation @ClientHandling.type.#INHERITED or @ClientHandling.type.#CLIENT\_DEPENDENT. @ClientDependent:false can be used, on the other hand, to define client-independent views, even if they contain client-dependent data sources. These have the following properties:

-   [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry")

A client column specified in the SELECT list is preserved in the result set if client dependency is disabled explicitly using the annotation @ClientDependent:false. The column is then applied like a regular view field when the CDS entity is accessed.

-   [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry")

If client dependency is switched off explicitly using the annotation @ClientDependent:false, an associated CDS-managed DDIC view does not have a client column if it is not specified explicitly in the SELECT list. A client column specified in the SELECT list, on the other hand, specifies that the CDS-managed DDIC view has a client column, hence making it a client-dependent view. This has consequences for [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_cds_obsolete.htm) access to the CDS-managed DDIC view using [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm). This is then handled in accordance with [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm) for dictionary objects.

Hint

It is not usually a good idea to disable client dependency in views with client-dependent data sources. If this is still sometimes the case, only the CDS entity must be accessed, and never the CDS-managed DDIC view, to avoid unexpected behavior.

Executable Example

[CDS Views, Obsolete Client Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_client_handling_obs_abexa.htm)