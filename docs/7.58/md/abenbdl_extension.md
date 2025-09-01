---
title: "RAP - BDEF Extension"
description: |
  A BDEF extension(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm 'Glossary Entry') is a transportable extension of a RAP behavior definition(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm 'Glossary Entry')
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm"
abapFile: "abenbdl_extension.htm"
keywords: ["delete", "do", "if", "try", "types", "abenbdl", "extension"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Extension%2C%20ABENBDL_EXTENSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - BDEF Extension

A [BDEF extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") is a transportable extension of a [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). BDEF extensions can be added to [BDEF implementation types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), and [abstract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry").

A BDEF extension can make additions to the original BDEF, but it cannot modify, overwrite, or delete elements from it. The following extensions are possible: field extensibility, [behavior extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_behavior_extension_glosry.htm "Glossary Entry"), [node extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry"). A RAP BO extension itself cannot be further extended.

-   Section [Extensibility Enablement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_enabling.htm): As a prerequisite for BDEF extensions, the behavior definition must be explicitly enabled for RAP extensibility.
-   Section [Base BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_managed_unm.htm): All available extension features for RAP BOs of type managed and unmanaged are described.
-   Section [BDEF Projection Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_projection.htm): All available extension features for BDEF projections are described.
-   Section [Abstract BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_abstract.htm): All available extension features for abstract BDEFs are described.

The following image shows the role of BDEF extensions within the ABAP RESTful Application Programming Model.

![Figure](bdef_projection_extension.jpg)

A note on the terminology: the following topics use the terms base RAP BO and base BDEF to refer to RAP behavior definitions of type managed and unmanaged. A [base BDEF extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendevelopment_object_glosry.htm "Glossary Entry") is a BDEF extension that extends a RAP behavior definition of type managed or unmanaged.

original is used as synonym for extended or to refer to BDEF components that belong to the extended RAP BO. For example, original field and original operation refers to fields and operations from the extended RAP BO. The term original can refer to BDEFs of any type or layer. It focuses on the contrast between extended object and extension.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Extend](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/492d88ed89f640e5b18dd1c57f6817b1?version=sap_cross_product_abap).
-   [C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_bdef.htm)
-   [DDIC - Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_enhancements.htm)
-   [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extension.htm)
-   CDS Service Definition Extensions ([EXTEND SERVICE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrvd_extend_service.htm)).

Hints

-   BDEF extensions themselves and each single extension element should use a separate [namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennamespace_glosry.htm "Glossary Entry") to avoid naming conflicts with extended elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencustomer_namespace_glosry.htm "Glossary Entry") prefix Z or ZZ.
-   BDEF extensions are connected to [Switch Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_glosry.htm "Glossary Entry").

Caution

BDEF extensions for unmanaged RAP BOs are currently still under development. They are not fully supported yet. The following features are currently not supported:

-   with additional save
-   Determinations and validations
-   Node extensibility

Continue
[RAP - BDEF Extension, Extensibility Enabling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_enabling.htm)
[RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_managed_unm.htm)
[RAP - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_projection.htm)
[RAP - Abstract BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_abstract.htm)