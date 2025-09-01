  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - BDL for Behavior Definitions, ABENBDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - BDL for Behavior Definitions

[CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") are created using the behavior definition language [CDS BDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

The CDS BDL follows the [general CDS syntax rules for ABAP CDS](javascript:call_link\('abencds_general_syntax_rules.htm'\)) with one specialization: in CDS BDL source code, keywords must be all lowercase. Uppercase or a mix of uppercase and lowercase are not allowed.

A list of all available BDL language elements can be found in topic [ABAP CDS - Language Elements](javascript:call_link\('abencds_language_elements.htm'\)).

CDS BDL offers the following statements for different [implementation types](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry"):

-   managed
    
    The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the [standard BO operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) are handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). In a managed RAP BO, a ready-to-run business object can work without [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").
    
    As soon as [non-standard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)), [validations](javascript:call_link\('abenbdl_validations.htm'\)), [determinations](javascript:call_link\('abenbdl_determinations.htm'\)), or other implementation-relevant syntax elements are added, an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is necessary.
    
    Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (so-called "greenfield" development) with standard implementation.
    
    See also: [managed RAP business object](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
    
-   unmanaged
    
    The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the [standard BO operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) must be implemented in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").
    Recommended for development scenarios in which business logic already exists and is intended to be reused (so-called "brownfield" development).
    
    See also: [unmanaged RAP business object](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
    
-   interface
    
    Defines the behavior of a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"), which serves as interface for stable consumption and is typically released as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").
    
    See also: [CDS interface behavior definition](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry").
    
-   projection
    
    A RAP projection behavior definition is based on a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and represents a direct projection of its base behavior definition. It exposes a subset of the base behavior definition's operations and characteristics. In a business application, a projection BDEF provides means to define service-specific behavior for a BO projection.
    
    See also: [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry")
    
-   abstract
    
    A CDS abstract behavior definition mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
    
    See also: [CDS abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry")
    

Managed and unmanaged RAP BOs share a common set of keywords. These keywords are listed in section [CDS BDL - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)).

CDS projection behavior definitions reuse elements of the projected managed or unmanaged behavior definition. Section [CDS BDL - CDS projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) explains which elements, such as characteristics and operations, can be reused under which conditions and which characteristics and operations can be newly added to CDS projection behavior definitions.

CDS abstract behavior definitions offer only a limited range of behavior definition elements, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition. Section [CDS BDL - CDS abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) explains which elements are available in abstract BDEFs.

Hints

-   The BDL source code of data definitions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. BDL source code can also be displayed in the [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\))
[CDS BDL - CDS Interface Behavior Definition](javascript:call_link\('abenbdl_rap_bo_interface.htm'\))
[CDS BDL - CDS Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\))
[CDS BDL - CDS Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\))
[CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\))