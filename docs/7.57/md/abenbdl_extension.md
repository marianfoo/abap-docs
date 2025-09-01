  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Extension, ABENBDL_EXTENSION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

CDS BDL - BDEF Extension

A [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") is a transportable extension of a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). BDEF extensions can be added to [BDEF implementation types](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), and [projection](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

A BDEF extension can make additions to the original BDEF, but it cannot modify, overwrite, or delete elements from the original BDEF. The following extensions are possible: field extensibility, [behavior extensibility](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry"), [node extensibility](javascript:call_link\('abenrap_ext_entity_behavior_glosry.htm'\) "Glossary Entry"). A RAP BO extension itself cannot be further extended.

-   Section [Extensibility Enablement](javascript:call_link\('abenbdl_extensibility_enabling.htm'\)): As a prerequisite for BDEF extensions, the behavior definition must be explicitly enabled for RAP extensibility.
-   Section [Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)): All available extension features for RAP BOs of type managed and unmanaged are described.
-   Section [BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)): All available extension features for BDEF projections are described.

The following image shows the role of BDEF extensions within the ABAP RESTful Application Programming Model.

![Figure](bdef_projection_extension.jpg)

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Extend.
-   C0 Stability Contract for Extensions
-   [DDIC - Extensions](javascript:call_link\('abenddic_enhancements.htm'\))
-   [ABAP CDS - CDS Entity Extension](javascript:call_link\('abencds_view_extension.htm'\))
-   [CDS Service Definition Extension](javascript:call_link\('abencds_service_def_ext_glosry.htm'\) "Glossary Entry")

Hints

-   BDEF extensions are connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").
-   BDEF extensions themselves and each single extension element should use a separate [namespace](javascript:call_link\('abennamespace_glosry.htm'\) "Glossary Entry") to avoid naming conflicts with extended elements. BDEF extensions created in non-SAP and non-partner development systems should use the [customer namespace](javascript:call_link\('abencustomer_namespace_glosry.htm'\) "Glossary Entry") prefix Z or ZZ.

Caution

BDEF extensions for unmanaged RAP BOs are currently still under development. They are not fully supported yet. The following features are currently not supported:

-   with additional save
-   Determinations and validations
-   Node extensibility

Continue
[CDS BDL - BDEF Extension, Extensibility Enabling](javascript:call_link\('abenbdl_extensibility_enabling.htm'\))
[CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\))
[CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\))