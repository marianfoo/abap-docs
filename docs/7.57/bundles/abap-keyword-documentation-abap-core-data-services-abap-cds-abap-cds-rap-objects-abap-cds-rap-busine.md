# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - RAP Objects / ABAP CDS - RAP Business Objects (RAP BO) / ABAP CDS - Behavior Definitions / ABAP CDS - BDL for Behavior Definitions / CDS BDL - BDEF Extension / CDS BDL - BDEF Projection Extension

Included pages: 9


### abenbdl_extensibility_projection.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Projection Extension, ABENBDL_EXTENSIBILITY_PROJECTION, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Projection Extension

A [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") is a repository object that extends a [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") using the statement [extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)).

As a prerequisite, the respective projection BDEF must explicitly allow extensions as described in topic [Extensibility Enabling for CDS Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).

The following image shows the possible components of a BDEF projection extension:

![Figure](bdef_projection_extension_struc.jpg)

-   The [BDEF projection extension header](javascript:call_link\('abenrap_proj_ext_header_glosry.htm'\) "Glossary Entry") is a mandatory component that starts with [extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)).
-   An [entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity of a BDEF projection. It starts with [extend behavior for](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)).
-   A [projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry") is an optional component that defines the behavior for the projection of an extension node. It starts with [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)).
-   An [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be added or an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") may be extended.

Continue
[CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\))


### abenbdl_extension_for_projection.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extension for projection, ABENBDL_EXTENSION_FOR_PROJECTION, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extension for projection

Syntax

extension for projection *\[*[implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))*\]*;
  *\[*[with privileged mode disabling base context *\[*and ContextName*\]*](javascript:call_link\('abenbdl_privileged_mode.htm'\))*\]*;
  *\[*[foreign entity](javascript:call_link\('abenbdl_foreign.htm'\))*\]*
  *\[*[define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\))*\]*
  *\[*[extend behavior for](javascript:call_link\('abenbdl_extend_beh_proj.htm'\))*\]*
  *\[*[extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\))*\]*
  *\[*[define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\))*\]*
...

Effect

Extends an existing [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") using a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") in the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). A CDS projection behavior definition can have one or more BDEF projection extensions. The number of extensions is not limited. A BDEF projection extension itself cannot be further extended.

A BDEF projection extension can have the following components:

-   implementation in class ClassName unique: an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is possible in a BDEF projection extension:
    -   Functionality that is reused from the original BO does not require its own implementation. The implementation from the original BO is reused.
    -   If the BDEF projection extension defines new actions or functions, an ABAP behavior pool is required.
    -   The rules for extension ABPs apply, see topic [implementation in class unique, extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   with privileged mode disabling base context *\[*and ContextName*\]*:
    -   A BDEF projection extension can enable [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry"). As a prerequisite, the original BO of type managed or unmanaged must enable privileged mode. The behavior of the extended BDEF of type projection is irrelevant. It may define privileged mode, but this is optional.
    -   The syntax addition disabling base context is mandatory; and ContextName is optional. The same rules apply as for projection behavior definitions, see topic [with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)), Alternative 2.
-   foreign entity:
    -   Defines a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") which is not part of the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of the current RAP BO as part of the response structures.
    -   A foreign entity can be defined before, after, or between the other components.
    -   Only entities that belong to the same software component can be added as [RAP foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") to a BDEF projection extension.
-   [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)): Defines a [RAP projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry") using the statement [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)).
-   [extend behavior for](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)): A [RAP entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") extends the behavior of an existing entity of a projection BDEF.
-   [extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\)): if the projected BDEF of implementation type projection defines an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry"), this context can be extended. If the projected BDEF does not define an own authorization context, it must not be added via an extension.
-   [define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\)): a new [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be defined in a BDEF projection extension. For details, see topic [CDS BDL - define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\)).

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_BEH.

-   It extends the behavior of the root node.
-   It behavior-enables an extension node using the syntax define behavior for, reusing operations from the projected BDEF and specifying field attributes.
    
    extension for projection;
    extend behavior for Root
    {
      use association \_child {create;}
      use action setValue;
      mapping for demo\_rap\_struc corresponding;
    }
    define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
    {
      use association \_parent;
      use action ActionExt;
      field ( readonly ) int\_field3;
    }
    

Executable Example

The executable example [Projection Entity Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\)) explains the example above in detail.

Continue
[CDS BDL - Entity Projection Extension](javascript:call_link\('abenbdl_extend_beh_proj.htm'\))
[CDS BDL - Projection Extension Entity](javascript:call_link\('abenbdl_proj_ext_entity.htm'\))
![Example](exa.gif "Example") [CDS BDL - BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\))
![Example](exa.gif "Example") [CDS BDL - BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\))


### abenbdl_extend_beh_proj.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Projection Extension, ABENBDL_EXTEND_BEH_PROJ, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Projection Extension

Syntax

extend behavior for ProjectionEntity
  *\[* [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))*\]*
  *\[*[authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*
{
   [projection\_extension\_body](javascript:call_link\('abenbdl_proj_ext_body.htm'\))
}
...

Effect

An [entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") extends a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") ProjectionEntity. As a prerequisite, extensions must be explicitly enabling as described in topic [Extensibility Enabling for CDS Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).

Syntax additions and components:

-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)): specifies an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") behavior of the particular entity. Optional and only required if the entity in question defines new actions or functions. The rules for extension ABPs apply, see topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   [authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\)):
    -   Defines authorization control for actions that were added in the projection layer via a BDEF projection extension.
    -   Optional and only useful in combination with new actions.
    -   Works in the same way as for projection BDEFs, see topic [CDS BDL - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).
-   [projection\_extension\_body](javascript:call_link\('abenbdl_proj_ext_body.htm'\)): extends the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of a projection BDEF.

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_BDEF\_EXT extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_FIELD.

It adds field attributes to extension fields.

extension for projection;
extend behavior for Root {
field(suppress) char\_field\_ext;
field(readonly:update) int\_field\_ext;
}

Executable Example

The executable example [BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\)) explains the example above in detail.

Continue
[CDS BDL - extension\_body, Projection Extension](javascript:call_link\('abenbdl_proj_ext_body.htm'\))


### abenbdl_proj_ext_body.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) →  [CDS BDL - Entity Projection Extension](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extension_body, Projection Extension, ABENBDL_PROJ_EXT_BODY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extension\_body, Projection Extension

Syntax

...
  *\[*field characteristics*\]*;
  *\[*use*\]*;
  *\[*actions and functions*\]*;
  *\[*mapping for*\]*;
  *\[*extend mapping for*\]*;

Effect

Defines the [behavior extension body](javascript:call_link\('abenrap_behavior_ext_body_glosry.htm'\) "Glossary Entry") to extend an existing [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") in a [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

Components:

-   field characteristics:
    -   Adds [field attributes](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") to extension fields in a BDEF projection extension.
    -   Field attributes can be added only for extension fields. Extension fields are fields which are not part of the original BO, but are added via [RAP data model extension](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").
    -   The following field attributes are available in BDEF projection extensions for extension fields: readonly, suppress, readonly:update.
    -   These field attributes work as described in topic [Field Characteristics, Projection BDEF](javascript:call_link\('abenbdl_field_projection.htm'\)).
        
        Note: The field characteristics mandatory, modify, and features:instance are not available in [BDEF projection extensions](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry").
        
-   use:
    -   The keyword use allows the reuse of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry").
    -   The following operations can be reused: [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry"), [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), and [associations](javascript:call_link\('abenbdl_association.htm'\)).
        
        Limitation: The [operation augmentation](javascript:call_link\('abenrap_bo_augmentation_glosry.htm'\) "Glossary Entry") is not available in BDEF projection extensions. As a consequence, the following is not supported: use association \_child {create(augment);}.
        
    -   Only extension operations that were created in the same software component can be reused. Operations from the original BDEF of type managed or unmanaged must not be reused.
    -   Actions, functions, and associations from the projection layer cannot be reused.
    -   Reuse works as described in topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   Actions and functions:
    -   New [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") can be defined and implemented in a BDEF projection extension.
    -   The syntax is exactly the same as for actions and functions in projection BDEFs, see topic [Actions and Functions, Projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).
    -   An implementation in an extension ABP is required. The rules for extension ABPs apply, see topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)):
    -   [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") can be added. This type mapping can only contain extension fields. It must not contain any fields from the original BDEF. The syntax is exactly the same as for RAP BOs, see topic [CDS BDL - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)).
-   [extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)):
    -   An existing RAP type mapping can be extended with extension fields using the syntax [extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)) as described in topic [CDS BDL - extend mapping](javascript:call_link\('abenbdl_type_mapping_ext.htm'\)).

Executable Examples

-   [BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\))
-   [BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\))


### abenbdl_extend_beh_proj.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Projection Extension, ABENBDL_EXTEND_BEH_PROJ, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Projection Extension

Syntax

extend behavior for ProjectionEntity
  *\[* [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))*\]*
  *\[*[authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*
{
   [projection\_extension\_body](javascript:call_link\('abenbdl_proj_ext_body.htm'\))
}
...

Effect

An [entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") extends a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") ProjectionEntity. As a prerequisite, extensions must be explicitly enabling as described in topic [Extensibility Enabling for CDS Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).

Syntax additions and components:

-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)): specifies an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") behavior of the particular entity. Optional and only required if the entity in question defines new actions or functions. The rules for extension ABPs apply, see topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   [authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\)):
    -   Defines authorization control for actions that were added in the projection layer via a BDEF projection extension.
    -   Optional and only useful in combination with new actions.
    -   Works in the same way as for projection BDEFs, see topic [CDS BDL - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).
-   [projection\_extension\_body](javascript:call_link\('abenbdl_proj_ext_body.htm'\)): extends the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of a projection BDEF.

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_BDEF\_EXT extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_FIELD.

It adds field attributes to extension fields.

extension for projection;
extend behavior for Root {
field(suppress) char\_field\_ext;
field(readonly:update) int\_field\_ext;
}

Executable Example

The executable example [BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\)) explains the example above in detail.

Continue
[CDS BDL - extension\_body, Projection Extension](javascript:call_link\('abenbdl_proj_ext_body.htm'\))


### abenbdl_proj_ext_entity.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Projection Extension Entity, ABENBDL_PROJ_EXT_ENTITY, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Projection Extension Entity

Syntax

[... define behavior for ProjectionEntity ...](javascript:call_link\('abenbdl_projection_bo.htm'\))

Prerequisites

-   As a prerequisite, the underlying [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") must explicitly allow BDEF extensions as described in topic [CDS BDL - Extensibility Enabling for CDS Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).
-   The extension node must be added to the RAP data model via [RAP data model extension](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").

Effect

A [projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry") defines the behavior for an extension node in a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") using the statement define behavior for.

The projection behavior for this extension node is defined similar to projection BDEFs, see section [CDS BDL - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)). Note the following restrictions:

-   The [operation augment](javascript:call_link\('abenbdl_augment_projection.htm'\)) is currently not supported in BDEF extensions.

If an ABAP behavior pool is specified, the rules for extension ABPs apply. See topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_BEH. It behavior-enables an extension node using the syntax define behavior for, reusing operations from the projected BDEF and specifying field attributes.

extension for projection;
extend behavior for Root
{
  use association \_child {create;}
  use action setValue;
  mapping for demo\_rap\_struc corresponding;
}
define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
{
  use association \_parent;
  use action ActionExt;
  field ( readonly ) int\_field3;
}

Executable Example

The executable example [BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\)) explains the example above in detail.


### abenbdl_entity_proj_ext_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Projection Extension, Node Extension, ABENBDL_ENTITY_PROJ_EXT_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Projection Extension, Node Extension

This example demonstrates how the behavior of a projection BDEF is extended by means of a projection BDEF extension.

Original RAP BO   

Data model

The CDS data model consists of one root node without child entities:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, beh ext'
define root view entity DEMO\_RAP\_BEH\_EXT
  as select from demo\_dbtab\_field
{
  key key\_field,
      char\_field1,
      int\_field1,
      int\_field2
}

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_BEH\_EXT is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as shown below. It defines implementation-relevant components and extension points.

managed implementation in class bp\_demo\_rap\_beh\_ext unique;
strict(2);
extensible { with determinations on modify; }
with privileged mode disabling ac\_core;
define behavior for DEMO\_RAP\_BEH\_EXT
persistent table DEMO\_DBTAB\_FIELD
lock master
authorization master ( global )
extensible
{
  create;
  update (features:instance);
  delete;
  validation Limit on save { create; }
}
define authorization context ac\_core
{ 'AUTHOBJ1'; }
define own authorization context by privileged mode;

Behavior implementation

For the CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_BEH\_EXT, see CCIMP include. This global class implements the following methods:

-   get\_instance\_features: Instance feature control for the standard operation update. If the value of field int\_field1 is more than 50, updates are not allowed. If the value is equal to or smaller than 50, updates are allowed.
-   get\_global\_authorizations: Global authorization control defines that create, update, and delete are always allowed.
-   Limit: Validation that checks the value of field int\_field2. If the value is greater than 500, the validation fails and the entity instance is not saved.

Extension RAP BO   

Data model extension

A child node is added to the RAP BO:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, beh ext'
define view entity DEMO\_RAP\_BEH\_EXT\_CHILD
  as select from demo\_dbtab\_fi\_ch
  association to parent DEMO\_RAP\_BEH\_EXT as \_parent  
    on $projection.key\_field = \_parent.key\_field
{
  key key\_field,
  key key\_field\_child,
      char\_field1,
      int\_field1,
      int\_field3,
      \_parent
}

A composition association is added to the root node via a CDS view entity extension:

extend view entity DEMO\_RAP\_BEH\_EXT with  
composition \[0..\*\] of DEMO\_RAP\_BEH\_EXT\_CHILD as \_child
{
  \_child
}

Behavior extension

The BDEF extension DEMO\_RAP\_BEH\_EXT\_CH extends the root node and defines behavior for the extension child node.

extension implementation in class bp\_demo\_rap\_beh\_ext\_ch unique;
extend behavior for DEMO\_RAP\_BEH\_EXT {
association \_child {create;}
action (features:global) setValue result \[1\] $self;
}
define behavior for DEMO\_RAP\_BEH\_EXT\_CHILD
persistent table demo\_dbtab\_fi\_ch
( lock, authorization ) dependent
{
update;
delete;
field(readonly) key\_field;
association \_parent;
determination myDet on modify {field int\_field3;}
action ActionExt;
}

ABP extension

The ABP extension is implemented in the global class BP\_DEMO\_RAP\_BEH\_EXT\_CH, see CCIMP include. This global class implements the following methods:

-   Extension of the parent entity
    -   get\_global\_features: Global feature control for the action setValue. This action can only be executed in the time period between 6 am and 10 pm (day shift).
    -   get\_global\_authorizations: The original RAP BO defines global authorization control. RAP BO operations added via an extension require their own implementation of the global authorization control. This method generally allows execution of the method setValue. There are no access restrictions.
    -   setValue: Action that sets field int\_field2 to value 888.
-   Extension entity behavior definition for the child entity
    -   get\_global\_authorizations: The original RAP BO defines global authorization control. For the action ActionExt, defined in the child node, a separate implementation of the authorization control method is required. The implementation generally allows execution of the method ActionExt. There are no access restrictions.
    -   myDet: Determination on modify. Sets the value of field int\_field1 to 777.
    -   ActionExt: Action that updates field char\_field1 for all requested entity instances.

Projection Layer   

Data model projection

Projection of the root node:

@EndUserText.label: 'CDS root pv, RAP extensibility'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_rap\_proj\_ext\_beh  
provider contract transactional\_query
as projection on DEMO\_RAP\_BEH\_EXT {
  key key\_field,
  char\_field1,
  int\_field1,
  int\_field2
}

Projection of the child node:

@EndUserText.label: 'CDS pv child,RAP projection extension'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_PROJ\_EXT\_BEH\_CH
  as projection on DEMO\_RAP\_BEH\_EXT\_CHILD
{
  key key\_field,
  key key\_field\_child,
      char\_field1,
      int\_field1,
      int\_field3,
        \_parent: redirected to parent demo\_rap\_proj\_ext\_beh  
}

View entity extension DEMO\_RAP\_VE\_EXTENSION that establishes a composition between original root node and extended child node:

extend view entity demo\_rap\_proj\_ext\_beh with {
  /\* Associations \*/
  \_child : redirected to composition child DEMO\_RAP\_PROJ\_EXT\_BEH\_CH
}

Behavior Projection

The projection BDEF defines behavior for the root node. It declares the root node as extensible and exposes the RAP BO standard operations.

projection;
strict(2);
extensible;
define behavior for demo\_rap\_proj\_ext\_beh alias Root
extensible
{
  use create;
  use update;
  use delete;
}

BDEF projection extension

The BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the root node and defines behavior for the extension child node.

extension for projection;
extend behavior for Root
{
  use association \_child {create;}
  use action setValue;
  mapping for demo\_rap\_struc corresponding;
}
define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
{
  use association \_parent;
  use action ActionExt;
  field ( readonly ) int\_field3;
}

Source Code   

REPORT demo\_rap\_proj\_ext.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    "Empty tables
    DELETE FROM demo\_dbtab\_field.
    DELETE FROM demo\_dbtab\_fi\_ch.
    CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called.
    "Deep Create
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
    ENTITY Root
    CREATE FIELDS ( key\_field char\_field1 int\_field1 int\_field2 )
    WITH VALUE #( ( %cid = 'cid1'
                    key\_field = '12AB111AABBCC3344'
                    char\_field1 = 'A'
                    int\_field1 = 51
                    int\_field2 = 11 )
                    ( %cid = 'cid2'
                    key\_field = '1111111122222222'
                    char\_field1 = 'B'
                    int\_field1 = 10
                    int\_field2 = 500 )  )
     CREATE BY \\\_child FIELDS ( key\_field\_child
                                char\_field1 int\_field1 )
     WITH VALUE #( ( %cid\_ref = 'cid1'
                     %target = VALUE #( (
                       %cid = 'cid3'
                       key\_field\_child = 11
                       char\_field1 = 'AA'
                       int\_field1 = 10
                       int\_field3 = 100 ) ) )
                 ( %cid\_ref = 'cid2' %target = VALUE #( ( %cid = 'cid4'
                   key\_field\_child = 22
                   char\_field1 = 'BB'
                   int\_field1 = 11
                   int\_field3 = 200 ) ) ) )
     MAPPED DATA(mapped)
     FAILED DATA(failed)
     REPORTED DATA(reported).
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(create\_parent).
    SELECT key\_field, char\_field1, int\_field1
    FROM  demo\_dbtab\_fi\_ch
    INTO TABLE @FINAL(create\_child).
\*\*\*\*\*\*\* UPDATE: only allowed if int\_field1 <= 50. feature control\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
        ENTITY Root
        UPDATE
        FIELDS ( key\_field char\_field1  )
        WITH VALUE #( ( key\_field = '12AB111AABBCC3344'
                                   char\_field1 = 'update'
                                    )
                                    ( key\_field = '1111111122222222'
                                   char\_field1 = 'update'
                                    )
                                     )
                        MAPPED mapped
                        FAILED failed
                        REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(update\_parent).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
      ENTITY Root
      EXECUTE setValue
      FROM VALUE #( ( key\_field = '1111111122222222' ) )
      RESULT FINAL(result)
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(action\_setValue).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
        ENTITY Child
        EXECUTE ActionExt
        FROM VALUE #( ( key\_field = '12AB111AABBCC3344'
                        key\_field\_child = 11 ) )
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1
    FROM  demo\_dbtab\_fi\_ch
    INTO TABLE @FINAL(action\_ActionExt).
    "Display
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_parent
            )->next\_section( 'CREATE BY assoc (child entity)'
            )->write( create\_child
            )->next\_section( 'UPDATE (root entity)'
            )->write( update\_parent
            )->next\_section( 'EXECUTE action SetValue'
            )->write( action\_setValue
            )->next\_section( 'EXECUTE action ActionExt'
            )->write( action\_ActionExt
            )->write\_html( '<b>Handler methods called</b>'
            )->write( data = bp\_demo\_rap\_beh\_ext=>handlers\_called
               name = 'Handler methods log table'
            )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [ABAP EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the projection BO from an ABAP program:

-   It inserts two parent entity instances and two child entity instances.
-   It updates the two parent entity instances
-   It executes the action setValue from the projection extension.
-   It executes the action ActionExt from the extension to the original RAP BO.

The screen output includes a table that lists the execution order of handler methods of the ABAP behavior pool. This shows which methods in which order are executed when accessing the RAP BO.


### abenbdl_entity_proj_ext_1_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Projection Extension, Field Extension, ABENBDL_ENTITY_PROJ_EXT_1_ABEXA
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Projection Extension, Field Extension

This example demonstrates how extension fields are added and behavior-enabled in a projection BDEF extension scenario.

Original RAP BO   

DDIC data model

The DDIC data model consists of one database table: DEMO\_ROOT\_EXT:

@EndUserText.label : 'Database Table for Root Entity of RAP BO'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table demo\_root\_ext {
  key client    : mandt not null;
  key key\_field : abap.int4 not null;
  data\_field    : abap.string(0);
  char\_field    : abap.char(25);
  char\_field\_2  : abap.char(25);
  dec\_field     : abap.dec(15,2);
  include demo\_extension;
}

This database table includes structure DEMO\_EXTENSION.

@EndUserText.label : 'Used for demo of RAP BO extension'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY
define structure demo\_extension {
  crea\_date\_time : timestampl;
  lchg\_date\_time : timestampl;
}

CDS data model

The CDS data model consists of one root entity without child entities: DEMO\_RAP\_FIELD\_EXT:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP BO ext'
define root view entity DEMO\_RAP\_FIELD\_EXT
  as select from demo\_root\_ext
{
  key key\_field  as KeyField,
      data\_field as DataField,
      char\_field as CharField,
      dec\_field  as DecField
}

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_FIELD\_EXT is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as shown below. It defines global authorization control and adds field attributes to several fields.

managed implementation in class bp\_demo\_rap\_field\_ext unique;
strict(2);
extensible;
define behavior for DEMO\_RAP\_FIELD\_EXT alias Root
persistent table demo\_root\_ext
lock master
authorization master ( global )
extensible
{
  create;
  update;
  delete;
  field ( mandatory : create, readonly : update ) KeyField;
  field ( features : instance ) DataField;
  field(readonly) DecField;
  mapping for demo\_root\_ext corresponding extensible
  {
    KeyField = key\_field;
    DataField = data\_field;
    CharField = char\_field;
    DecField = dec\_field;
  }
}

Behavior implementation

For the CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_FIELD\_EXT, see CCIMP include. This global class implements two methods:

-   get\_instance\_features: Implements dynamic feature control for field DataField: If field CharField has value A, then field DataField is read-only. If field CharField has any other value, then field DataField can be accessed without any restrictions.
-   get\_global\_auth: Defines global feature control for the complete RAP BO: Update requests are generally authorized and delete requests are generally unauthorized.

Extension RAP BO   

DDIC data model extension

Extension fields are added to the DDIC data model via the structure extension DEMO\_EXTEND\_STR:

@EndUserText.label : 'Used for demo of RAP BO extension'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
extend type demo\_extension with demo\_extend\_str {
  data\_field\_ext : abap.string(0);
  char\_field\_ext : abap.char(25);
  int\_field\_ext  : abap.int4;
  num\_field\_ext  : abap.int2;
  int1\_field\_ext : abap.int1;
}

CDS data model extension

The extension fields are added to the CDS data model via the CDS view entity extension DEMO\_EXTENSION\_RAP\_BO:

extend view entity DEMO\_RAP\_FIELD\_EXT with
{
  demo\_root\_ext.data\_field\_ext,
  demo\_root\_ext.char\_field\_ext,
  demo\_root\_ext.int\_field\_ext,
  demo\_root\_ext.num\_field\_ext,
  demo\_root\_ext.int1\_field\_ext
}

BDEF extension

The BDEF extension DEMO\_EXTENSION\_RAP\_BO adds field attributes to the extension fields.

extension implementation in class bp\_demo\_extension\_rap\_bo unique;
extend behavior for Root
{
  field ( readonly ) data\_field\_ext;
  field ( mandatory ) int\_field\_ext;
  field ( suppress ) char\_field\_ext;
  field ( features : instance ) num\_field\_ext;
  field ( readonly : update ) int1\_field\_ext;
}

ABP extension

The ABP extension is implemented in the global class BP\_DEMO\_EXTENSION\_RAP\_BO, see CCIMP include. This global class implements dynamic feature control for the extension field NumFieldExt: If the value of field IntFieldExt is greater than 1000, then field NumFieldExt is read-only. If the value of field IntFieldExt is less than or equal to 1000, access to field NumFieldExt is unrestricted.

Projection Layer   

Data model projection

The projection view DEMO\_RAP\_PROJ\_EXT\_FIELD projects the root node:

@EndUserText.label: 'CDS pv, demo for RAP proj ext'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_PROJ\_EXT\_FIELD
  provider contract transactional\_query
  as projection on DEMO\_RAP\_FIELD\_EXT
{
  key KeyField,
      DataField,
      CharField,
      DecField
}

View entity extension

The CDS view entity extension DEMO\_RAP\_PV\_EX extends the original CDS projection view. It includes the extension fields in the projection layer.

extend view entity DEMO\_RAP\_PROJ\_EXT\_FIELD with
{
  DEMO\_RAP\_FIELD\_EXT.char\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.data\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.int1\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.int\_field\_ext,
  DEMO\_RAP\_FIELD\_EXT.num\_field\_ext
}

Behavior projection

The CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_FIELD projects the original BDEF.

projection;
strict(2);
extensible;
define behavior for DEMO\_RAP\_PROJ\_EXT\_FIELD alias Root
extensible
{
  use create;
  use update;
  use delete;
}

BDEF projection extension

The BDEF projection extension DEMO\_RAP\_PROJ\_BDEF\_EXT extends the projection behavior definition. Its adds field attributes to the extension fields.

extension for projection;
extend behavior for Root {
field(suppress) char\_field\_ext;
field(readonly:update) int\_field\_ext;
}

Source Code   

REPORT demo\_rap\_proj\_ext\_field.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_root\_ext.
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_field
         ENTITY Root
           CREATE
             FIELDS ( KeyField CharField int\_field\_ext ) WITH VALUE #(
              ( %cid = '1'
                KeyField = 1
                CharField = 'A'
                int\_field\_ext = 500 )
              ( %cid = '2'
                KeyField = 2
                CharField = 'B'
                int\_field\_ext = 1000 ) )
               MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.
    SELECT key\_field, char\_field,
           int\_field\_ext, num\_field\_ext
    FROM demo\_root\_ext
    INTO TABLE @FINAL(result).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_field
          ENTITY Root
          UPDATE FIELDS ( CharField num\_field\_ext ) WITH VALUE #(
          ( KeyField = 1 CharField = 'update' num\_field\_ext = 7 )
          ( KeyField = 2 CharField = 'update' num\_field\_ext = 7 ) )
             MAPPED mapped
             FAILED  failed
             REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field,
           int\_field\_ext, num\_field\_ext
    FROM demo\_root\_ext
    INTO TABLE @FINAL(result1).
    FINAL(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'After CREATE'
    )->write( result
    )->next\_section( 'After UPDATE'
    )->write( result1
    )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The source code above uses [ABAP EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") from an ABAP program:

-   It inserts two entity instances using [MODIFY ENTITIES CREATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)).
-   It updates both entity instances using [MODIFY ENTITIES UPDATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)).

Field attributes from the original BO, from the projection BO, and from the extensions are respected. Fields declared as read-only on any layer must not be updated. CharFieldExt is not available in the derived types, since it has been suppressed.


### abenbdl_extension_for_projection.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extension for projection, ABENBDL_EXTENSION_FOR_PROJECTION, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extension for projection

Syntax

extension for projection *\[*[implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))*\]*;
  *\[*[with privileged mode disabling base context *\[*and ContextName*\]*](javascript:call_link\('abenbdl_privileged_mode.htm'\))*\]*;
  *\[*[foreign entity](javascript:call_link\('abenbdl_foreign.htm'\))*\]*
  *\[*[define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\))*\]*
  *\[*[extend behavior for](javascript:call_link\('abenbdl_extend_beh_proj.htm'\))*\]*
  *\[*[extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\))*\]*
  *\[*[define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\))*\]*
...

Effect

Extends an existing [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") using a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") in the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). A CDS projection behavior definition can have one or more BDEF projection extensions. The number of extensions is not limited. A BDEF projection extension itself cannot be further extended.

A BDEF projection extension can have the following components:

-   implementation in class ClassName unique: an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is possible in a BDEF projection extension:
    -   Functionality that is reused from the original BO does not require its own implementation. The implementation from the original BO is reused.
    -   If the BDEF projection extension defines new actions or functions, an ABAP behavior pool is required.
    -   The rules for extension ABPs apply, see topic [implementation in class unique, extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   with privileged mode disabling base context *\[*and ContextName*\]*:
    -   A BDEF projection extension can enable [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry"). As a prerequisite, the original BO of type managed or unmanaged must enable privileged mode. The behavior of the extended BDEF of type projection is irrelevant. It may define privileged mode, but this is optional.
    -   The syntax addition disabling base context is mandatory; and ContextName is optional. The same rules apply as for projection behavior definitions, see topic [with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)), Alternative 2.
-   foreign entity:
    -   Defines a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") which is not part of the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of the current RAP BO as part of the response structures.
    -   A foreign entity can be defined before, after, or between the other components.
    -   Only entities that belong to the same software component can be added as [RAP foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") to a BDEF projection extension.
-   [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)): Defines a [RAP projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry") using the statement [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)).
-   [extend behavior for](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)): A [RAP entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") extends the behavior of an existing entity of a projection BDEF.
-   [extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\)): if the projected BDEF of implementation type projection defines an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry"), this context can be extended. If the projected BDEF does not define an own authorization context, it must not be added via an extension.
-   [define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\)): a new [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be defined in a BDEF projection extension. For details, see topic [CDS BDL - define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\)).

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_BEH.

-   It extends the behavior of the root node.
-   It behavior-enables an extension node using the syntax define behavior for, reusing operations from the projected BDEF and specifying field attributes.
    
    extension for projection;
    extend behavior for Root
    {
      use association \_child {create;}
      use action setValue;
      mapping for demo\_rap\_struc corresponding;
    }
    define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
    {
      use association \_parent;
      use action ActionExt;
      field ( readonly ) int\_field3;
    }
    

Executable Example

The executable example [Projection Entity Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\)) explains the example above in detail.

Continue
[CDS BDL - Entity Projection Extension](javascript:call_link\('abenbdl_extend_beh_proj.htm'\))
[CDS BDL - Projection Extension Entity](javascript:call_link\('abenbdl_proj_ext_entity.htm'\))
![Example](exa.gif "Example") [CDS BDL - BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\))
![Example](exa.gif "Example") [CDS BDL - BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\))
