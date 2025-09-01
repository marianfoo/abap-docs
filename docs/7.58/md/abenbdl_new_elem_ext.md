  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [RAP - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [RAP - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [RAP - Entity Behavior Extension](javascript:call_link\('abenbdl_extend_beh.htm'\)) →  [RAP - extension\_body](javascript:call_link\('abenbdl_entity_beh_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Adding%20Elements%2C%20ABENBDL_NEW_ELEM_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Adding Elements

Syntax

...
  *\[*[determination](javascript:call_link\('abenbdl_determinations.htm'\))*\]*
  *\[*[validation](javascript:call_link\('abenbdl_validations.htm'\))*\]*
  *\[*[event](javascript:call_link\('abenbdl_event.htm'\))*\]*
  *\[*[managed event](javascript:call_link\('abenbdl_managed_event.htm'\))*\]*
  *\[*[field characteristics](javascript:call_link\('abenbdl_field_char.htm'\))*\]*
  *\[*[action](javascript:call_link\('abenbdl_action.htm'\))*\]*
  *\[*[function](javascript:call_link\('abenbdl_function.htm'\))*\]*
  *\[*[determine action](javascript:call_link\('abenbdl_determine_action.htm'\))*\]*
  *\[*[association](javascript:call_link\('abenbdl_association.htm'\))*\]*
  *\[*[type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\))*\]*
  ...

Variants:

[1\. ... determination ...](#!ABAP_VARIANT_1@1@)
[2\. ... validation ...](#!ABAP_VARIANT_2@2@)
[3\. ... event ...](#!ABAP_VARIANT_3@3@)
[4\. ... managed event ...](#!ABAP_VARIANT_4@4@)
[5\. ... field characteristics ...](#!ABAP_VARIANT_5@5@)
[6\. ... action ...](#!ABAP_VARIANT_6@6@)
[7\. ... function ...](#!ABAP_VARIANT_7@7@)
[8\. ... determine action ...](#!ABAP_VARIANT_8@8@)
[9\. ... association ...](#!ABAP_VARIANT_9@9@)
[10\. ... type mapping ...](#!ABAP_VARIANT_10@10@)

Effect

The elements listed in this topic can be added to the [body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of an existing RAP BO entity. All of them are optional, and multiple elements or all elements can be specified together.

The elements can be added in a [base BDEF extension](javascript:call_link\('abenrap_base_bdef_ext_glosry.htm'\) "Glossary Entry") with or without the addition [using interface](javascript:call_link\('abenbdl_using_interface.htm'\)). In other words, these elements are possible in direct base extensions and also in extensions that make use of an interface layer.

Executable Example

Executable examples:

-   [Node extension](javascript:call_link\('abenbdl_assoc_ext_abexa.htm'\)):
    -   A RAP BO with four nodes is extended via a RAP BO interface with one further node on the level of the great-grandchild.
    -   Ancestor associations are defined, while lock master and authorization master entities are not explicitly defined.
    -   An ABAP EML call creates instances of all five nodes.
-   [Field extension](javascript:call_link\('abenbdl_field_ext_abexa.htm'\))
    -   The original BO consists of one root node.
    -   The root node is extended via a RAP BO interface with extension fields. These extension fields are created on database level and added to the CDS data model via a CDS data model extension.
    -   Field attributes are added to the extension fields.
    -   Dynamic feature control for the extension fields is implemented in the extension ABP.
-   [Behavior extension](javascript:call_link\('abenbdl__behavior_ext_abexa.htm'\)):
    -   The original BO consists of one root node.
    -   One extension node is added to the original BO via a RAP BO interface.
    -   The extended RAP BO implements authorization control, feature control, a validation, a determination and two actions. These implementations are distributed between original ABP and extension ABP.
    -   An ABAP EML call performs multiple operations and logs the execution order of the handler methods.

Variant 1   

... determination ...

Effect

-   Adds a [RAP determination](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   As a prerequisite, the extended BDEF must explicitly allow the particular kind of determination (see topic [RAP - Extensibility Enabling for Base BOs](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))).
-   Syntax: exactly the same as for RAP BOs, see topic [RAP - determination](javascript:call_link\('abenbdl_determinations.htm'\)).
-   All fields (extension fields and original fields) can be used as trigger.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Hint

The execution order of determinations and validations is arbitrary, also between original and extension components.

Example

The BDEF extension DEMO\_RAP\_EXT\_DET\_VAL extends the RAP behavior definition DEMO\_RAP\_BASE\_DET\_VAL. It adds a determination on save setStatus, which is triggered whenever a new entity instance is created.

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
  field(readonly:update) key\_field;
}

Extension BDEF: Defines a determination on save.

extension using interface DEMO\_RAP\_INT\_DET\_VAL
implementation in class bp\_demo\_rap\_ext\_det\_val unique;
extend behavior for RootInterface
{
  determination setStatus on save { create; }
}

This determination is implemented in the extension ABP. It sets the field char\_field automatically to status A whenever a new entity instance is created.

METHOD setStatus.
  MODIFY ENTITIES OF DEMO\_RAP\_INT\_DET\_VAL IN LOCAL MODE
     ENTITY RootInterface
       UPDATE
       FIELDS ( char\_field ) WITH
       VALUE #( FOR key IN keys ( %tky   = key-%tky
                                  char\_field = status-status\_a ) )
       REPORTED DATA(lt\_reported).
  reported = CORRESPONDING #( DEEP lt\_reported ).
ENDMETHOD.

Executable Example

An executable example for a BDEF extension adding a new determination is provided in topic [RAP BDL - extend determine action](javascript:call_link\('abenbdl_det_action_ext_abexa.htm'\)).

Variant 2   

... validation ...

Effect

-   Adds a [RAP validation](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   As a prerequisite, the extended BDEF must explicitly allow the particular kind of validation (see topic about [extensibility enabling](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))).
-   Syntax: exactly the same as for RAP BOs, see topic about [validations](javascript:call_link\('abenbdl_validations.htm'\)).
-   All fields (extension fields and original fields) can be used as trigger.
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Hint

The execution order of determinations and validations is arbitrary, also between original and extension components.

Example

The BDEF extension DEMO\_RAP\_EXT\_VALIDATION extends the RAP behavior definition DEMO\_RAP\_BASE\_DET\_VAL. It adds a validation on save Limit, which is triggered when field dec\_field is updated.

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
  field(readonly:update) key\_field;
}

Extension BDEF: Defines a validation on save.

extension using interface DEMO\_RAP\_INT\_DET\_VAL
implementation in class bp\_demo\_rap\_ext\_validation unique;
extend behavior for RootInterface
{
  validation Limit on save { field dec\_field; }
}

This validation is implemented in the extension ABP. It checks that the value inserted into field dec\_field does not exceed 500. If it does, the validation fails and an error message is returned.

METHOD Limit.
\*  The value of field dec\_field must not be > 500.
  READ ENTITIES OF DEMO\_RAP\_INT\_DET\_VAL IN LOCAL MODE
    ENTITY RootInterface
    FIELDS ( dec\_field )
    WITH CORRESPONDING #( keys )
    RESULT DATA(result)
    FAILED DATA(failed1).
  LOOP AT result INTO DATA(lv\_limit).
    APPEND VALUE #(  %tky        = lv\_limit-%tky
                       %state\_area = 'VALIDATE\_LIMIT' )
                       TO reported-rootinterface.
    IF lv\_limit-dec\_field > 500.
      APPEND VALUE #( %tky = lv\_limit-%tky ) TO failed-rootinterface.
      APPEND VALUE #( %tky                 = lv\_limit-%tky
                      %state\_area          = 'VALIDATE\_LIMIT'
                      %msg                 = new\_message\_with\_text(
                      severity = if\_abap\_behv\_message=>severity-error
                      text = 'validation failed' )
                      %element-dec\_field     = if\_abap\_behv=>mk-on )
                      TO reported-rootinterface.
    ENDIF.
  ENDLOOP.
ENDMETHOD.

Variant 3   

... event ...

Effect

-   Adds a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   RAP business events can only be defined in the root node of a RAP business object. As a consequence, they can only be defined in a BDEF extension to the root node.
-   Syntax: exactly the same as for RAP BOs, see topic about [events](javascript:call_link\('abenbdl_event.htm'\)).
-   An extension RAP business event must be raised in the extension ABAP behavior pool of the RAP BO in question with the [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") statement [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\)). The rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)) must be obeyed.

Further Information

The development guide for the ABAP RESTful Application Programming Model provides an example for a RAP business event that is added by means of a BDEF extension. See Creating RAP Business Events.

Example

The BDEF extension DEMO\_RAP\_EVENT\_EXT extends the RAP behavior definition DEMO\_RAP\_EXTENSIBLE. It adds the RAP business event MyEvent to the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry"). It adds a [RAP additional save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry"), so the event can be raised in the extension ABP in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)).

extension
implementation in class bp\_demo\_rap\_event\_ext unique;
extend behavior for DEMO\_RAP\_EXTENSIBLE
with additional save
{
  event MyEvent;
}

Variant 4   

... managed event ...

Effect

-   Adds a [RAP derived event](javascript:call_link\('abenrap_derived_event_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity via a BDEF extension.
-   RAP derived events can only be defined in the root node of a RAP business object. As a consequence, they can only be defined in a BDEF extension to the root node.
-   Syntax: exactly the same as for RAP BOs, see the topic [RAP - managed event](javascript:call_link\('abenbdl_managed_event.htm'\)).
-   An implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is not required. Derived events are raised automatically when the referenced event is raised.

Further Information

The development guide for the ABAP RESTful Application Programming Model provides an example for a RAP derived event that is added by means of a BDEF extension. See Derived Business Events.

Variant 5   

... field characteristics ...

Effect

-   Adds [field attributes](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") to extension fields.
-   Field attributes can be added only for extension fields. Extension fields are fields which are not part of the original BO, but are added via [RAP data model extension](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").
-   The following field attributes are available in BDEF extensions for extension fields:
    -   readonly
    -   mandatory
    -   suppress
    -   readonly:update
    -   features:instance
        
        Note: When implementing [instance feature control](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry") for fields, the rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)) apply.
        
-   These field attributes work as described in topic [RAP BDL - field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)).
    
    Note: [Internal field numbering](javascript:call_link\('abenbdl_field_numbering.htm'\)) is not available in BDEF extensions.
    
    Note: The field characteristic mandatory:create is not available in BDEF extensions.
    

Example

The BDEF extension DEMO\_EXTENSION\_RAP\_BO extends the RAP behavior definition DEMO\_RAP\_FIELD\_EXT. It behavior-enables multiple extension fields.

extension using interface DEMO\_RAP\_FIELD\_EXT\_INT
implementation in class bp\_demo\_extension\_rap\_bo unique;
extend behavior for Root
{
  field ( readonly ) DataFieldExt;
  field ( mandatory ) IntFieldExt;
  field ( suppress ) CharFieldExt;
  field ( features : instance ) NumFieldExt;
  field ( readonly : update ) Int1FieldExt;
}

Executable Example

The example above is described in detail in topic [RAP BDL - Field Extension](javascript:call_link\('abenbdl_field_ext_abexa.htm'\)).

Variant 6   

... action ...

Effect

-   Adds a [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity.
-   Syntax: exactly the same as for RAP BOs, see topic [RAP BDL - action](javascript:call_link\('abenbdl_action.htm'\)).
    
    Note: The following additional rule applies: Each extension action must define authorization control on action-level that replaces the authorization control specified in the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry") of the original RAP BO. That means that one of the following additions must be specified for each extension action:
    
    [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))
    
    [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))
    
    [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))
    
    [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))
    
    [authorization:instance, authorization:global](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))
    
    [authorization:global, authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))
    
    For details, see the topic [RAP - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).
    
    Note: The optional addition [default](javascript:call_link\('abenbdl_action_default_factory.htm'\)) to define a factory action as default factory action is not available in BDEF extensions.
    
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Example

The BDEF extension DEMO\_RAP\_BEH\_EXT\_CH extends the RAP behavior definition DEMO\_RAP\_BEH\_EXT. It adds action setValue to the behavior definition body.

extension using interface DEMO\_RAP\_BEH\_EXT\_INT
implementation in class bp\_demo\_rap\_beh\_ext\_ch unique;
extend behavior for RootInterface
{
  association \_child { create; }
  action ( features : global, authorization : global ) setValue
    result \[1\] $self;
}
define behavior for DEMO\_RAP\_BEH\_EXT\_CHILD alias ChildInterface
using DEMO\_RAP\_BEH\_EXT\_INT\_CH
persistent table demo\_dbtab\_fi\_ch
( lock, authorization ) dependent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field ( readonly ) key\_field\_child;
  association \_parent;
  determination myDet on modify { field int\_field3; }
  action ( authorization : global ) ActionExt;
}

Executable Example

The example above is described in detail in topic [RAP BDL - Behavior Extension](javascript:call_link\('abenbdl__behavior_ext_abexa.htm'\)).

Variant 7   

... function ...

Effect

-   Adds a [RAP function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity.
-   Syntax: exactly the same as for RAP BOs, see topic [RAP BDL - function](javascript:call_link\('abenbdl_function.htm'\)).
-   Implementation in the extension ABAP behavior pool must obey the rules for [extension ABPs](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Variant 8   

... determine action ...

Effect

-   Adds a [RAP BO determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity.
-   Syntax exactly the same as for RAP BOs, see topic [RAP BDL - determine actions](javascript:call_link\('abenbdl_determine_action.htm'\)).
-   Only [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") from the same BDEF extension can be assigned. Determinations and validations from the original BDEF must not be assigned.

Variant 9   

... association ...

Effect

-   Behavior-enables an association. The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") must be an extension node.
-   Syntax exactly the same as for RAP BOs, see topic [Operations for Associations](javascript:call_link\('abenbdl_association.htm'\)).

Example

The BDEF extension DEMO\_RAP\_EXTENSION\_1 extends the RAP behavior definition DEMO\_RAP\_EXTENSIBLE\_ROOT. The first section of this extension extends an existing node by behavior-enabling the association \_Children4Ext. The association target is an extension node.

extension using interface demo\_rap\_ext\_using\_interface;
foreign entity demo\_rap\_factory\_ACTION;
extend behavior for GrandChildInterface
{
  association \_Children4Ext { create; with draft; }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode
  using DEMO\_RAP\_EXT\_USING\_INT\_EXT
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

The example above is described in detail in topic [RAP BDL - Node Extension](javascript:call_link\('abenbdl_assoc_ext_abexa.htm'\)).

Variant 10   

... type mapping ...

Effect

-   Adds a [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") to the entity behavior body of an existing RAP BO entity. This type mapping can only contain extension fields. It must not contain any fields from the extended BDEF.
-   Syntax exactly the same as for RAP BOs, see topic [RAP BDL - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Example

The BDEF extension DEMO\_RAP\_EXT\_MAPPING extends the RAP behavior definition DEMO\_RAP\_BASE\_MAPPING. It adds a type mapping to structure DEMO\_RAP\_STRUC. The fields used in this type mapping are extension fields that are added to the data model via a CDS view entity extension.

extension using interface DEMO\_RAP\_MAPPING\_TI;
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
![Example](exa.gif "Example") [RAP - Field Extension](javascript:call_link\('abenbdl_field_ext_abexa.htm'\))
![Example](exa.gif "Example") [RAP - Behavior Extension](javascript:call_link\('abenbdl__behavior_ext_abexa.htm'\))