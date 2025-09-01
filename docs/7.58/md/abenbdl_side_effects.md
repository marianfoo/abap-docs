  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20side%20effects%2C%20ABENBDL_SIDE_EFFECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - side effects

Syntax

side effects { field MyField affects [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm); }
           *|* { action MyAction affects [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm); }
           *|* { determine action MyDetermineAction
               executed on Sources
               affects [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm); }

Variants:

[1\. ... field MyField affects Targets](#!ABAP_VARIANT_1@1@)
[2\. ... action MyAction affects Targets](#!ABAP_VARIANT_2@2@)
[3\. ... determine action MyDetermineAction ...](#!ABAP_VARIANT_3@3@)

Effect

Defines [RAP side effects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_side_effects_glosry.htm "Glossary Entry") in the [entity behavior body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_body_glosry.htm "Glossary Entry") of a RAP BO. RAP side effects are an optional part of a RAP behavior definition that define interdependencies among BO properties that trigger a reload of the affected properties on the user interface. Side effects are translated into annotations in the OData metadata of a RAP service. An implementation in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is not required.

The following trigger properties are possible:

-   Field field MyField as trigger
    
    Whenever a defined field is changed on the user interface, the side effect is triggered and the defined targets [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) are reloaded.
    
-   Action action MyAction as trigger
    
    Whenever the action is executed on the user interface, the side effect is triggered and the defined targets [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) are reloaded.
    
-   Side effect that triggers a determine action determine action MyDetermineAction
    
    Whenever the defined source Sources is changed, the determine action is triggered and the defined targets [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) are reloaded.
    

The RAP BO properties that can be specified as target [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) of a side effect are described in the topic [RAP - side effect, Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm).

The syntax side effects can be specified exactly once for each RAP BO entity in the [entity behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry"). Multiple side effects can be summarized within curly brackets, separated by a semicolon (;), if required.

Restriction

[Static](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_static_operation_glosry.htm "Glossary Entry") actions defined using the addition [static](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) must not be used as a side effect trigger, nor as a side effect target.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BDEFs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry")
-   [BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") to managed, unmanaged, and projection BDEFs.
-   In a projection BDEF and in an [interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), side effects from the base BO can be reused. For details on reuse, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm).
    
    Note: In projection BDEFs, RAP side effects from the base BDEF can be reused or new side effects can be defined. In an interface BDEF, on the other hand, only reuse is possible.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Side Effects](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/b30b48c58ed94ff786980ab9aa18882f?version=sap_cross_product_abap).

Hint

RAP side effects are useful in UI scenarios based on draft-enabled RAP BOs to make a Fiori Elements UI aware that data changes of defined fields require the recalculation of other data values, permissions, or messages. In these cases, side effects contribute to data consistency on the UI.

Example

The following example shows a managed BDEF that defines five different side effects with different trigger properties and targets. They are summarized in curly brackets after the statement side effects.

managed implementation in class bp\_demo\_rap\_side\_effects unique;
strict ( 2 );
with draft;
define behavior for DEMO\_RAP\_SIDE\_EFFECTS alias Root
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_dr1
lock master
total etag lchg\_date\_time
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly : update ) key\_field;
  field(features:instance) crea\_date\_time;
  action(features:instance) MyActionFC;
  action MyAction;
  determine action someDetermineAction;
  draft action ( features : instance ) Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare;
  side effects {
    // Side effect with single source property
    field char\_field affects field char\_field\_2;
    // Side effect with multiple source properties and trigger action
    determine action someDetermineAction
    // trigger field group
      executed on field dec\_field,
                  field char\_field,
                  field \_Assoc.data\_field
      affects field data\_field;
    // Side effect that triggers the reload of feature control
    field data\_field affects permissions(field crea\_date\_time);
    // Side effect on an action with operation control and messages
    action MyActionFC affects field \*,
                      permissions(action MyActionFC),
                      messages;
    // Side effect for refreshing data of an entity
    action MyAction affects field char\_field, entity \_Assoc;
  }
}

Variant 1   

... field MyField affects Targets

Effect

Defines a side effect for the field MyField. Whenever the field MyField is changed on the user interface, the side effect is triggered and the defined targets [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) are reloaded. Exactly one field must be specified as trigger property. Multiple properties Targets can be specified after the syntax affects.

Variant 2   

... action MyAction affects Targets

Effect

Defines a side effect for the action MyAction. Whenever the action MyAction is executed on the user interface, the side effect is triggered and the defined targets [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) are reloaded. Exactly one action must be specified as trigger property. Multiple properties Targets can be specified after the syntax affects.

Variant 3   

... determine action MyDetermineAction ...

Effect

Defines a side effect that triggers the determine action MyDetermineAction. Whenever one of the defined sources Sources is changed, the determine action is executed and the defined targets [Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm) are reloaded.

One or more sources Sources can be specified after the syntax executed on. The following BO properties can be used as sources Sources:

-   field MyField:
    -   The determine action is triggered whenever the field MyField is changed. You can specify one or more fields as the trigger for a determine action.
    -   Note: By using more than one field as source for the determine action side effect, the fields are implicitly considered as a field group. The side effect is only triggered if the cursor is set outside of the group of source fields after changing at least one of them.
    -   You can also use fields from other entity instances as sources. They must be defined via an association path: \_assoc.MyField.
-   $self:
    -   The determine action is triggered whenever anything on the own entity instance is changed (such as fields, create child, delete child).
-   entity \_Assoc:
    -   The determine action is triggered whenever anything on the specified entity \_Assoc is changed (fields, create, delete).

It is possible to group multiple sources Sources using brackets. For example, the following groupings are possible:

-   ... executed on field(Field1, Field2) ...
-   ... executed on field \_Assoc.(Field1, Field2) ...
-   ... executed on entity (\_Assoc1, \_Assoc2) ...
-   ... executed on entity \_Assoc1.(\_ItemAssoc1, \_ItemAssoc2) ...

Multiple properties Targets can be specified after the syntax affects.

Continue
[RAP - side effect, Targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects_target.htm)