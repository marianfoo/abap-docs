  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) →  [CDS BDL - extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_syntax.htm) →  [CDS BDL - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm) →  [CDS BDL - extension\_body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_beh_extension.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Adding Elements, ABENBDL_NEW_ELEM_EXT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

CDS BDL - Adding Elements

Syntax

...
  *\[*[determination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm)*\]*
  *\[*[validation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm)*\]*
  *\[*[field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm)*\]*
  *\[*[action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm)*\]*
  *\[*[function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm)*\]*
  *\[*[determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm)*\]*
  *\[*[association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association.htm)*\]*
  *\[*[type mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping.htm)*\]*
  ...

Variants:

[1\. ... determination ...](#!ABAP_VARIANT_1@1@)
[2\. ... validation ...](#!ABAP_VARIANT_2@2@)
[3\. ... field characteristics ...](#!ABAP_VARIANT_3@3@)
[4\. ... action ...](#!ABAP_VARIANT_4@4@)
[5\. ... function ...](#!ABAP_VARIANT_5@5@)
[6\. ... determine action ...](#!ABAP_VARIANT_6@6@)
[7\. ... association ...](#!ABAP_VARIANT_7@7@)
[8\. ... type mapping ...](#!ABAP_VARIANT_8@8@)

Effect

The elements listed in this topic can be added to the [body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_body_glosry.htm "Glossary Entry") of an existing RAP BO entity. All of them are optional, and multiple elements or all elements can be specified together.

Executable Example

Executable examples:

-   [Node extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_assoc_ext_abexa.htm):
    -   A RAP BO with four nodes is extended with one further node on the level of the great-grandchild.
    -   Ancestor associations are defined, while lock master and authorization master entities are not explicitly defined.
    -   An ABAP EML call creates instances of all five nodes.
-   [Field extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_ext_abexa.htm)
    -   The original BO consists of one root node.
    -   The root node is extended with extension fields. These extension fields are created on database level and added to the CDS data model via a CDS data model extension.
    -   Field attributes are added to the extension fields.
    -   Dynamic feature control for the extension fields is implemented in the extension ABP.
-   [Behavior extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl__behavior_ext_abexa.htm):
    -   The original BO consists of one root node.
    -   One extension node is added to the original BO.
    -   The extended RAP BO implements authorization control, feature control, a validation, a determination and two actions. These implementations are distributed between original ABP and extension ABP.
    -   An ABAP EML call performs multiple operations and logs the execution order of the handler methods.

Variant 1   

... determination ...

Effect

-   Adds a [RAP determination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_determination_glosry.htm "Glossary Entry") to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   As a prerequisite, the extended BDEF must explicitly allow the particular kind of determination (see topic about [extensibility enabling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling_m_u.htm)).
-   Syntax: exactly the same as for RAP BOs, see topic about [determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm).
-   All fields (extension fields and original fields) can be used as trigger.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm).

Hints

-   The execution order of determinations and validations is arbitrary, also between original and extension components.

Example

The BDEF extension DEMO\_RAP\_EXT\_DET\_VAL extends the CDS behavior definition DEMO\_RAP\_BASE\_DET\_VAL. It adds a determination on save setStatus, which is triggered whenever a new entity instance is created.

Original BDEF: explicitly allows determinations on save in the BDEF extension header:

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_DET\_VAL
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
}

Extension BDEF: Defines a determination on save.

extension implementation in class bp\_demo\_rap\_ext\_det\_val unique;
extend behavior for DEMO\_RAP\_BASE\_DET\_VAL
{
  determination setStatus on save { create; }
}

This determination is implemented in the extension ABP. It sets the field char\_field automatically to status A whenever a new entity instance is created.

METHOD setStatus.
  MODIFY ENTITIES OF demo\_rap\_base\_det\_val IN LOCAL MODE
     ENTITY demo\_rap\_base\_det\_val
       UPDATE
       FIELDS ( char\_field ) WITH
       VALUE #( FOR key IN keys ( %tky   = key-%tky
                                  char\_field = status-status\_a ) )
       REPORTED DATA(lt\_reported).
  reported = CORRESPONDING #( DEEP lt\_reported ).
ENDMETHOD.

Executable Example

An executable example for a BDEF extension adding a new determination is provided in topic [CDS BDL - extend determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_det_action_ext_abexa.htm).

Variant 2   

... validation ...

Effect

-   Adds a [RAP validation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_validation_glosry.htm "Glossary Entry") to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   As a prerequisite, the extended BDEF must explicitly allow the particular kind of validation (see topic about [extensibility enabling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling_m_u.htm)).
-   Syntax: exactly the same as for RAP BOs, see topic about [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm).
-   All fields (extension fields and original fields) can be used as trigger.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm).

Hints

-   The execution order of determinations and validations is arbitrary, also between original and extension components.

Example

The BDEF extension DEMO\_RAP\_EXT\_VALIDATION extends the CDS behavior definition DEMO\_RAP\_BASE\_DET\_VAL. It adds a validation on save Limit, which is triggered when field dec\_field is updated.

Original BDEF: explicitly allows validation on save in the BDEF extension header:

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_DET\_VAL
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
}

Extension BDEF: Defines a validation on save.

extension implementation in class bp\_demo\_rap\_ext\_validation unique;
extend behavior for DEMO\_RAP\_BASE\_DET\_VAL
{
  validation Limit on save { field dec\_field; }
}

This validation is implemented in the extension ABP. It checks that the value inserted into field dec\_field does not exceed 500. If it does, the validation fails and an error message is returned.

METHOD Limit.
\*  The value of field dec\_field must not be > 500.
  READ ENTITIES OF demo\_rap\_base\_det\_val IN LOCAL MODE
    ENTITY demo\_rap\_base\_det\_val
    FIELDS ( dec\_field )
    WITH CORRESPONDING #( keys )
    RESULT DATA(result)
    FAILED DATA(failed1)
    REPORTED DATA(reported1).
  LOOP AT result INTO DATA(lv\_limit).
    APPEND VALUE #(  %tky        = lv\_limit-%tky
                       %state\_area = 'VALIDATE\_LIMIT' )
                       TO reported-demo\_rap\_base\_det\_val.
    IF lv\_limit-dec\_field > 500.
      APPEND VALUE #( %tky = lv\_limit-%tky ) TO failed-demo\_rap\_base\_det\_val.
      APPEND VALUE #( %tky                 = lv\_limit-%tky
                      %state\_area          = 'VALIDATE\_LIMIT'
                      %msg                 = new\_message\_with\_text(
                      severity = if\_abap\_behv\_message=>severity-error
                      text = 'validation failed' )
                      %element-dec\_field     = if\_abap\_behv=>mk-on )
                      TO reported-demo\_rap\_base\_det\_val.
    ENDIF.
  ENDLOOP.
ENDMETHOD.

Variant 3   

... field characteristics ...

Effect

-   Adds [field attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_field_char_glosry.htm "Glossary Entry") to extension fields.
-   Field attributes can be added only for extension fields. Extension fields are fields which are not part of the original BO, but are added via [RAP data model extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_data_model_ext_glosry.htm "Glossary Entry").
-   The following field attributes are available in BDEF extensions for extension fields:
    -   readonly
    -   mandatory
    -   suppress
    -   readonly:update
    -   features:instance
        
        Note: When implementing [instance feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_ins_feature_control_glosry.htm "Glossary Entry") for fields, the rules for [extension ABPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm) apply.
        
-   These field attributes work as described in topic [CDS BDL - field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm).
    
    Note: [Internal field numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_numbering.htm) is not available in BDEF extensions.
    
    Note: The field characteristic mandatory:create is not available in BDEF extensions.
    

Example

The BDEF extension DEMO\_EXTENSION\_RAP\_BO extends the CDS behavior definition DEMO\_RAP\_FIELD\_EXT. It behavior-enables multiple extension fields.

extension implementation in class bp\_demo\_extension\_rap\_bo unique;
extend behavior for Root
{
  field ( readonly ) data\_field\_ext;
  field ( mandatory ) int\_field\_ext;
  field ( suppress ) char\_field\_ext;
  field ( features : instance ) num\_field\_ext;
  field ( readonly : update ) int1\_field\_ext;
}

Executable Example

The example above is described in detail in topic [CDS BDL - Field Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_ext_abexa.htm).

Variant 4   

... action ...

Effect

-   Adds a [RAP action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") to the entity behavior body of an existing RAP BO entity.
-   Syntax: exactly the same as for RAP BOs, see topic [CDS BDL - action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm).

Example

The BDEF extension DEMO\_RAP\_BEH\_EXT\_CH extends the CDS behavior definition DEMO\_RAP\_BEH\_EXT. It adds action setValue to the behavior definition body.

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

Executable Example

The example above is described in detail in topic [CDS BDL - Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl__behavior_ext_abexa.htm).

Variant 5   

... function ...

Effect

-   Adds a [RAP function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry") to the entity behavior body of an existing RAP BO entity.
-   Syntax: exactly the same as for RAP BOs, see topic [CDS BDL - function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_in_class_unique_ext.htm).

Variant 6   

... determine action ...

Effect

-   Adds a [RAP BO determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry") to the entity behavior body of an existing RAP BO entity.
-   Syntax exactly the same as for RAP BOs, see topic [CDS BDL - determine actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm).
-   Only [determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_validation_glosry.htm "Glossary Entry") from the same BDEF extension can be assigned. Determinations and validations from the original BDEF must not be assigned.

Variant 7   

... association ...

Effect

-   Behavior-enables an association. The [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") must be an extension node.
-   Syntax exactly the same as for RAP BOs, see topic [Operations for Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association.htm).

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_1 extends the CDS behavior definition DEMO\_RAP\_EXTENSIBLE\_ROOT. The first section of this extension extends an existing node by behavior-enabling the association \_Children4Ext. The association target is an extension node.

extension;
foreign entity demo\_rap\_factory\_ACTION;
extend behavior for GrandChild
{
  association \_Children4Ext { create; with draft; }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode
persistent table demo\_ggchl\_ex\_ba
draft table demo\_ggrch\_ext
etag master Timestamp
( lock, authorization ) dependent
{
  update;
  delete;
  field ( readonly )
  KeyField, KeyFieldchild, Keyfieldgrchld;
  field ( readonly : update ) Keyfieldggchld;
  association \_parent { with draft; }
  association \_Sibling4 { with draft; }
  ancestor association \_GrandParent2 { with draft; }
  ancestor association \_GreatGrandParent1 { with draft; }
  mapping for demo\_ggchl\_ex\_ba
  {
    Keyfield = key\_field;
    Keyfieldchild = key\_field\_child;
    Keyfieldgrchld = key\_field\_grchld;
    Keyfieldggchld = key\_field\_ggchld;
    Datafield = data\_field;
    Charfield = char\_field;
  }
}

Executable Example

The example above is described in detail in topic [CDS BDL - Node Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_assoc_ext_abexa.htm).

Variant 8   

... type mapping ...

Effect

-   Adds a [RAP type mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") to the entity behavior body of an existing RAP BO entity. This type mapping can only contain extension fields. It must not contain any fields from the original BDEF.
-   Syntax exactly the same as for RAP BOs, see topic [CDS BDL - Type Mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping.htm).

Example

The BDEF extension DEMO\_RAP\_EXT\_MAPPING extends the CDS behavior definition DEMO\_RAP\_BASE\_MAPPING. It adds a type mapping to structure DEMO\_RAP\_STRUC. The fields used in this type mapping are extension fields that are added to the data model via a CDS view entity extension.

extension;
extend behavior for Root
{
  mapping for demo\_rap\_struc corresponding
  {
    StringField\_Ext = field1;
    CharField\_Ext = field2;
    DecField\_ext = field3;
  }
}

Continue
![Example](exa.gif "Example") [CDS BDL - Field Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_ext_abexa.htm)
![Example](exa.gif "Example") [CDS BDL - Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl__behavior_ext_abexa.htm)