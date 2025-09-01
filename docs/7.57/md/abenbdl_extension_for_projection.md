  

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