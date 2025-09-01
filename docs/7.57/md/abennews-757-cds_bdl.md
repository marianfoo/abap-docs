  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757.htm) →  [ABAP RESTful Application Programming Model in Release 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-757-restful.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL in Release 7.57, ABENNEWS-757-CDS_BDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

CDS BDL in Release 7.57

[1\. RAP Late Numbering for Managed and for Draft-Enabled RAP BOs](#!ABAP_MODIFICATION_1@1@)
[2\. Instance-Bound Factory Actions for Managed RAP BOs](#!ABAP_MODIFICATION_2@2@)
[3\. BDEF Privileged Mode for RAP Projection BOs](#!ABAP_MODIFICATION_3@3@)
[4\. CDS Interface Behavior Definitions](#!ABAP_MODIFICATION_4@4@)
[5\. Managed RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_5@5@)
[6\. Unmanaged RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_6@6@)
[7\. Managed RAP BO, with full data](#!ABAP_MODIFICATION_7@7@)
[8\. Variants to Define a RAP Own Authorization Context](#!ABAP_MODIFICATION_8@8@)
[9\. BDEF Extensions for RAP BOs](#!ABAP_MODIFICATION_9@9@)
[10\. BDEF Extensions for RAP Projection BOs](#!ABAP_MODIFICATION_10@10@)
[11\. New Version of BDEF Strict Mode](#!ABAP_MODIFICATION_11@11@)

Modification 1   

RAP Late Numbering for Managed and for Draft-Enabled RAP BOs

[RAP late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) is now also available for managed RAP BOs, managed draft-enabled RAP BOs, and for unmanaged draft-enabled RAP BOs.

Modification 2   

Instance-Bound Factory Actions for Managed RAP BOs

[Instance-bound factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_factory.htm) are now also available for managed RAP BOs.

Modification 3   

BDEF Privileged Mode for RAP Projection BOs

A new syntax variant of [with privileged mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_privileged_mode.htm) is now available for RAP projection BOs.

Modification 4   

CDS Interface Behavior Definitions

A new [implementation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") is available: the [CDS interface behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo_interface.htm). Such interface BDEFs are based on [CDS transactional interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") and define the behavior of a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). The overall purpose of a RAP BO interface is to project a business object for stable consumption.

Modification 5   

Managed RAP BO, New Field Characteristic

In [managed RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm). It removes the field in question from the [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and from all RAP APIs.

Modification 6   

Unmanaged RAP BO, New Field Characteristic

In [unmanaged RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm). It removes the field in question from the [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and from all RAP APIs.

Modification 7   

Managed RAP BO, with full data

In [managed RAP business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), the optional addition [with full data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) can be used in combination with one of the [RAP saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) to ensure that full instance data is handed over to the save\_modified method of the RAP saver class in the ABAP behavior pool.

Modification 8   

Variants to Define a RAP Own Authorization Context

New variants are available for defining a [RAP own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry"):

-   [define own authorization context by privileged mode;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm)
-   [define own authorization context by privileged mode and { ... }](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm)

Modification 9   

BDEF Extensions for RAP BOs

[BDEF extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_extension_glosry.htm "Glossary Entry") for RAP BOs can be defined using the statement [extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm).

Modification 10   

BDEF Extensions for RAP Projection BOs

[BDEF projection extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") for [RAP projection business objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") can be defined using the statement [extension for projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_projection.htm).

Modification 11   

New Version of BDEF Strict Mode

A new version of [BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is available: Strict mode version 2, specified using [strict(2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_2.htm). It applies even more syntax checks than the first version.