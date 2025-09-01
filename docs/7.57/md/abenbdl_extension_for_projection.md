  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_projection.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extension for projection, ABENBDL_EXTENSION_FOR_PROJECTION, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extension for projection

Syntax

extension for projection *\[*[implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm)*\]*;
  *\[*[with privileged mode disabling base context *\[*and ContextName*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_privileged_mode.htm)*\]*;
  *\[*[foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_foreign.htm)*\]*
  *\[*[define behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_proj_ext_entity.htm)*\]*
  *\[*[extend behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh_proj.htm)*\]*
  *\[*[extend own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_own_auth_context.htm)*\]*
  *\[*[define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm)*\]*
...

Effect

Extends an existing [CDS projection behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") using a [BDEF projection extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") in the [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry"). A CDS projection behavior definition can have one or more BDEF projection extensions. The number of extensions is not limited. A BDEF projection extension itself cannot be further extended.

A BDEF projection extension can have the following components:

-   implementation in class ClassName unique: an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is possible in a BDEF projection extension:
    -   Functionality that is reused from the original BO does not require its own implementation. The implementation from the original BO is reused.
    -   If the BDEF projection extension defines new actions or functions, an ABAP behavior pool is required.
    -   The rules for extension ABPs apply, see topic [implementation in class unique, extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm).
-   with privileged mode disabling base context *\[*and ContextName*\]*:
    -   A BDEF projection extension can enable [BDEF privileged mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_privileged_mode_glosry.htm "Glossary Entry"). As a prerequisite, the original BO of type managed or unmanaged must enable privileged mode. The behavior of the extended BDEF of type projection is irrelevant. It may define privileged mode, but this is optional.
    -   The syntax addition disabling base context is mandatory; and ContextName is optional. The same rules apply as for projection behavior definitions, see topic [with privileged mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_privileged_mode.htm), Alternative 2.
-   foreign entity:
    -   Defines a [RAP BO entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") which is not part of the [CDS composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the current RAP BO as part of the response structures.
    -   A foreign entity can be defined before, after, or between the other components.
    -   Only entities that belong to the same software component can be added as [RAP foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") to a BDEF projection extension.
-   [define behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_proj_ext_entity.htm): Defines a [RAP projection extension entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry") using the statement [define behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_proj_ext_entity.htm).
-   [extend behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh_proj.htm): A [RAP entity projection extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_entity_proj_ext_glosry.htm "Glossary Entry") extends the behavior of an existing entity of a projection BDEF.
-   [extend own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_own_auth_context.htm): if the projected BDEF of implementation type projection defines an [own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry"), this context can be extended. If the projected BDEF does not define an own authorization context, it must not be added via an extension.
-   [define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm): a new [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") can be defined in a BDEF projection extension. For details, see topic [CDS BDL - define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm).

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

The executable example [Projection Entity Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_proj_ext_abexa.htm) explains the example above in detail.

Continue
[CDS BDL - Entity Projection Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh_proj.htm)
[CDS BDL - Projection Extension Entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_proj_ext_entity.htm)
![Example](exa.gif "Example") [CDS BDL - BDEF Projection Extension, Node Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_proj_ext_abexa.htm)
![Example](exa.gif "Example") [CDS BDL - BDEF Projection Extension, Field Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_proj_ext_1_abexa.htm)