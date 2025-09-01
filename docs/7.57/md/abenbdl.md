---
title: "ABAP CDS - BDL for Behavior Definitions"
description: |
  CDS behavior definitions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm 'Glossary Entry') in ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') are created using the behavior definition
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm"
abapFile: "abenbdl.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenbdl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - BDL for Behavior Definitions, ABENBDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - BDL for Behavior Definitions

[CDS behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") are created using the behavior definition language [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [BDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_source_code_glosry.htm "Glossary Entry").

The CDS BDL follows the [general CDS syntax rules for ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm) with one specialization: in CDS BDL source code, keywords must be all lowercase. Uppercase or a mix of uppercase and lowercase are not allowed.

A list of all available BDL language elements can be found in topic [ABAP CDS - Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_language_elements.htm).

CDS BDL offers the following statements for different [implementation types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry"):

-   managed
    
    The [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") and the [standard BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm) are handled by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry"). In a managed RAP BO, a ready-to-run business object can work without [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
    
    As soon as [non-standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm), [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm), [determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm), or other implementation-relevant syntax elements are added, an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is necessary.
    
    Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (so-called "greenfield" development) with standard implementation.
    
    See also: [managed RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
    
-   unmanaged
    
    The [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") and the [standard BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm) must be implemented in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
    Recommended for development scenarios in which business logic already exists and is intended to be reused (so-called "brownfield" development).
    
    See also: [unmanaged RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
    
-   interface
    
    Defines the behavior of a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"), which serves as interface for stable consumption and is typically released as [released API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry").
    
    See also: [CDS interface behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry").
    
-   projection
    
    A RAP projection behavior definition is based on a [managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") or [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") and represents a direct projection of its base behavior definition. It exposes a subset of the base behavior definition's operations and characteristics. In a business application, a projection BDEF provides means to define service-specific behavior for a BO projection.
    
    See also: [CDS projection behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry")
    
-   abstract
    
    A CDS abstract behavior definition mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
    
    See also: [CDS abstract behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry")
    

Managed and unmanaged RAP BOs share a common set of keywords. These keywords are listed in section [CDS BDL - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm).

CDS projection behavior definitions reuse elements of the projected managed or unmanaged behavior definition. Section [CDS BDL - CDS projection behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_projection_bo.htm) explains which elements, such as characteristics and operations, can be reused under which conditions and which characteristics and operations can be newly added to CDS projection behavior definitions.

CDS abstract behavior definitions offer only a limited range of behavior definition elements, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition. Section [CDS BDL - CDS abstract behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_abstract.htm) explains which elements are available in abstract BDEFs.

Hints

-   The BDL source code of data definitions has its own editor in [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. BDL source code can also be displayed in the [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm)
[CDS BDL - CDS Interface Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo_interface.htm)
[CDS BDL - CDS Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_projection_bo.htm)
[CDS BDL - CDS Abstract Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_abstract.htm)
[CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm)