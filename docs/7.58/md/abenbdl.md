  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDL%20for%20Behavior%20Definitions%2C%20ABENBDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - BDL for Behavior Definitions

[RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") are created using the behavior definition language [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

The RAP BDL follows the [general CDS syntax rules for ABAP CDS](javascript:call_link\('abencds_general_syntax_rules.htm'\)) with one specialization: in RAP BDL source code, keywords must be all lowercase. Uppercase or a mix of uppercase and lowercase are not allowed.

A list of all available BDL language elements can be found in topic [RAP BDL - Feature Tables](javascript:call_link\('abenrap_feature_table.htm'\)).

RAP BDL offers the following statements for different [implementation types](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry"):

-   managed
    
    The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the [standard BO operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) are handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). In a managed RAP BO, a ready-to-run business object can work without [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").
    
    As soon as [non-standard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)), [validations](javascript:call_link\('abenbdl_validations.htm'\)), [determinations](javascript:call_link\('abenbdl_determinations.htm'\)), or other implementation-relevant syntax elements are added, an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is necessary.
    
    Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (so-called greenfield development) with standard implementation.
    
    See also: [managed RAP business object](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
    
-   unmanaged
    
    The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the [standard BO operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) must be implemented in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").
    Recommended for development scenarios in which business logic already exists and is intended to be reused (so-called brownfield development).
    
    See also: [unmanaged RAP business object](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
    
-   interface
    
    Defines the behavior of a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"), which serves as interface for stable consumption and is typically released as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").
    
    See also: [RAP interface behavior definition](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry").
    
-   projection
    
    A RAP projection behavior definition is based on a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and represents a direct projection of its base behavior definition. It exposes a subset of the base behavior definition's operations and characteristics. In a business application, a projection BDEF provides means to define service-specific behavior for a BO projection.
    
    See also: [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry")
    
-   abstract
    
    A RAP abstract behavior definition mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
    
    See also: [RAP abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry")
    

Managed and unmanaged RAP BOs share a common set of keywords. These keywords are listed in section [RAP BDL - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)).

RAP projection behavior definitions reuse elements of the projected managed or unmanaged behavior definition. Section [RAP BDL - RAP projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) explains which elements, such as characteristics and operations, can be reused under which conditions and which characteristics and operations can be newly added to RAP projection behavior definitions.

RAP abstract behavior definitions offer only a limited range of behavior definition elements, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition. Section [RAP BDL - RAP abstract behavior definitions](javascript:call_link\('abenbdl_abstract.htm'\)) explains which elements are available in abstract BDEFs.

Hint

The BDL source code has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. BDL source code can also be displayed in the [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\))
[RAP - Interface Behavior Definition](javascript:call_link\('abenbdl_rap_bo_interface.htm'\))
[RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\))
[RAP - Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\))
[RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\))
[RAP - BOPF-Based RAP Business Objects](javascript:call_link\('abenbdl_rap_bopf.htm'\))