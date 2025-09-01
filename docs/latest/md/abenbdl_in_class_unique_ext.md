  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [RAP - BDEF Extension Header](javascript:call_link\('abenbdl_extension_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20implementation%20in%20class%20unique%2C%20Extension%2C%20ABENBDL_IN_CLASS_UNIQUE_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

RAP - implementation in class unique, Extension

Syntax

... implementation in class ClassName unique;

Effect

Specifies an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the extended RAP business object. Valid abbreviations are [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") ABAP behavior pool or extension ABP. An extension ABP is an optional component of a BDEF extension and only required if the BDEF extension specifies implementation-relevant components.

An extension ABAP behavior pool can be specified in different positions:

-   [Extension header](javascript:call_link\('abenbdl_extension_header.htm'\))
-   [Entity behavior extension](javascript:call_link\('abenbdl_extend_beh.htm'\))
-   [Extension entity behavior definition](javascript:call_link\('abenbdl_define_beh_extend.htm'\))
-   [Implementation group](javascript:call_link\('abenbdl_define_beh_extend.htm'\))

The mandatory addition unique defines that each operation can be implemented exactly once.

Original ABPs and Extension ABPs

An original ABP and an extension ABP are separate artifacts that do not depend on each other. An original ABP and an extension ABP consider each other external consumers. The following rules apply:

-   [Internal operations](javascript:call_link\('abenbdl_internal.htm'\)):
    
    RAP BO operations defined as [internal](javascript:call_link\('abenbdl_internal.htm'\)) can be accessed only from within the same ABP that implements them. An internal operation from the original BDEF cannot be extended, since it is not visible in the extension ABP. In the same way, internal actions from an extension are not visible to the original BO.
    
-   [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)):
    
    The addition IN LOCAL MODE grants privileged access rights only to the particular RAP BO itself. The original BO can be accessed in local mode by its own implementation classes or other classes that are called from its own implementation. The extension BO can be accessed in local mode from its own class implementations. An original BO and an extension BO consider each other external consumers.
    
-   Field usage
    -   An extension ABP can use fields from the extended RAP BO.
    -   The original RAP BO can use fields from an extension, if the extension is created in the same software component.
    -   Field attributes, such as [readonly](javascript:call_link\('abenbdl_field_char.htm'\)), must be respected between the original ABP and the extension ABP. For example, if an extension ABP tries to update or delete readonly fields of the original RAP BO, a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs. Note: A runtime error also occurs when trying to modify a read-only field using dynamic EML.
-   [Feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)):
    -   The original ABP implements feature control for original fields and operations.
    -   The extension ABP implements feature control for extension fields and extension operations from the same software component.
    -   The [request parameter](javascript:call_link\('abaphandler_meth_features.htm'\)) for the [handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") for [global](javascript:call_link\('abaphandler_meth_global_features.htm'\)) and [instance feature control](javascript:call_link\('abaphandler_meth_features.htm'\)) contains the fields and operations from the directly related BDEF, that means, either original or extension. It does not contain operations from both extended and extension BDEF, even if they concern the same RAP BO entity. This means that a strict separation of feature control for original and extension fields and operations is enforced.
-   [Authorization control](javascript:call_link\('abenbdl_authorization.htm'\)):
    -   [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") can be defined only in the extended RAP BO, but it may be implemented in both the original and the extension ABP, if required.
    -   The original BO implements authorization control for actions defined in the original BO.
    -   The extension BO implements authorization control for extension actions, if specified.
    -   The request parameter for the [handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") for [global](javascript:call_link\('abaphandler_meth_global_auth.htm'\)) and [instance authorization control](javascript:call_link\('abaphandler_meth_auth.htm'\)) contains only the operations from the directly related BDEF, that means, either extended or extension. This means that a strict separation of authorization control for original and extension operations is enforced.
    -   If an operation, for example [update](javascript:call_link\('abenbdl_standard_operations.htm'\)), is protected from unauthorized access and this is implemented in the original RAP BO, then it is checked during all update operations, updates on original nodes as well as updates on extension nodes. That means that the implementation of original and extension components is strictly separated, but the original implementation also applies to operations against extension nodes.
    -   The following cases require a separate implementation for authorization control in the extension behavior pool of the master entity and of the authorization-dependent entity: [actions](javascript:call_link\('abenbdl_action.htm'\)) of authorization dependent entities, create-enabled [cross-BO associations](javascript:call_link\('abencds_cross_bo_assoc_glosry.htm'\) "Glossary Entry"), create-enabled associations which are not [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry").

BDEF Derived Types

-   The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") of a RAP BO includes all original and all extension fields.
-   An extension BDEF must not be used as global data type or part of a data type.

Related Information

-   The implementation rules for ABAP behavior pools are described in topic [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)).
-   A complete list of BDEF derived types is provided in section [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)).

Executable Example

The executable example [Behavior Extension](javascript:call_link\('abenbdl__behavior_ext_abexa.htm'\)) implements authorization control, feature control, a validation, a determination and two actions. These implementations are distributed between original ABP and extension ABP.

Further executable examples

-   [Node Extension](javascript:call_link\('abenbdl_assoc_ext_abexa.htm'\))
-   [Field Extension](javascript:call_link\('abenbdl_field_ext_abexa.htm'\))