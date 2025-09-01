  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Extension, ABENBDL_EXTENSION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

CDS BDL - BDEF Extension

A [BDEF extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_extension_glosry.htm "Glossary Entry") is a transportable extension of a [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). BDEF extensions can be added to [BDEF implementation types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") [managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), and [projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

A BDEF extension can make additions to the original BDEF, but it cannot modify, overwrite, or delete elements from the original BDEF. The following extensions are possible: field extensibility, [behavior extensibility](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_behavior_extension_glosry.htm "Glossary Entry"), [node extensibility](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_ext_entity_behavior_glosry.htm "Glossary Entry"). A RAP BO extension itself cannot be further extended.

-   Section [Extensibility Enablement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling.htm): As a prerequisite for BDEF extensions, the behavior definition must be explicitly enabled for RAP extensibility.
-   Section [Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm): All available extension features for RAP BOs of type managed and unmanaged are described.
-   Section [BDEF Projection Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_projection.htm): All available extension features for BDEF projections are described.

The following image shows the role of BDEF extensions within the ABAP RESTful Application Programming Model.

![Figure](bdef_projection_extension.jpg)

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Extend.
-   C0 Stability Contract for Extensions
-   [DDIC - Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_enhancements.htm)
-   [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_extension.htm)
-   [CDS Service Definition Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_service_def_ext_glosry.htm "Glossary Entry")

Hints

-   BDEF extensions are connected to [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry").
-   BDEF extensions themselves and each single extension element should use a separate [namespace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennamespace_glosry.htm "Glossary Entry") to avoid naming conflicts with extended elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencustomer_namespace_glosry.htm "Glossary Entry") prefix Z or ZZ.

Caution

BDEF extensions for unmanaged RAP BOs are currently still under development. They are not fully supported yet. The following features are currently not supported:

-   with additional save
-   Determinations and validations
-   Node extensibility

Continue
[CDS BDL - BDEF Extension, Extensibility Enabling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling.htm)
[CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm)
[CDS BDL - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_projection.htm)