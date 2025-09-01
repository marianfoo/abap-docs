  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [TYPE REQUEST FOR](javascript:call_link\('abaptype_request_for.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20TYPE%20REQUEST%20FOR%20in%20a%20Managed%20RAP%20BO%20with%20Unmanaged%20Save%2C%20ABENRAP_MANAGED_UNM_SAVE_ABEXA%2C%20758%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Unmanaged Save

This example demonstrates the use of the BDEF-derived types TYPE REQUEST FOR CHANGE and TYPE REQUEST FOR DELETE in the context of a managed RAP BO whose BDEF is specified with [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)). The saving of created, changed or deleted [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") is user-implemented in the save\_modified method of the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_UNMANAGED\_SAVE.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_UNMANAGED\_SAVE
  as select from demo\_tab\_root\_3
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_UNMANAGED\_SAVE is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed with unmanaged save
implementation in class bp\_demo\_managed\_unmanaged\_save unique;
strict(2);
define behavior for DEMO\_MANAGED\_UNMANAGED\_SAVE
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_UNMANAGED\_SAVE. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following method is relevant in this example:

-   save\_modified
    
    At first, several type and variable declarations are available just for demonstration purposes. Among them, there are the [BDEF-derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") TYPE REQUEST FOR CHANGE, TYPE REQUEST FOR DELETE, TYPE TABLE FOR CHANGE and TYPE STRUCTURE FOR CHANGE. These BDEF-derived types are only relevant in the contexts of a managed RAP BO [with additional save](javascript:call_link\('abenbdl_saving.htm'\)) and a managed RAP BO [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)). Basically, the structures create and update (that are of type TYPE REQUEST FOR CHANGE) as well as delete (that is of TYPE REQUEST FOR DELETE) - they contain those instances that are to be created, changed or deleted - are available here by default and can actually be referred to directly instead of extra variable and type declarations as it is the case in this example. The declarations are followed by a further declaration of an internal table (lt\_tab) that acts as a helper table to temporarily store the instances that are to be created, changed or deleted.
    
    IF statements then check whether instances have been created, updated or deleted by a RAP BO consumer. In doing so, the %control structure is used to get information on which fields have been set when creating, updating or deleting the instance.
    
    The IF statement for the created instances is implemented as follows: The internal table lt\_tab is filled with the instance data created by the CREATE operation. A LOOP statement processes the individual instances. The data field values only get written to the internal table lt\_tab if the data fields are not disabled for the operation in the %control structure. At the end of the IF statement, all the entries in the table lt\_tab are saved to the database table demo\_tab\_root\_3 using an ABAP SQL MODIFY statement.
    
    The IF statement processing those instances that have been updated is implemented similarly to above. However, to make sure that the update operation does not write blanks to the internal table lt\_tab, an ABAP SQL SELECT statement gets all existing entries of the database table demo\_tab\_root\_3 at first. Hence, if a value for a particular data field is not provided or the field is marked as disabled in the %control structure, the already existing field value is taken over and not overwritten with an initial value.
    
    The IF statement for the deleted instances deletes the entries from the database table using an ABAP SQL DELETE statement.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_managed\_unm\_save DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_managed\_unm\_save IMPLEMENTATION.
  METHOD main.
    MODIFY ENTITY demo\_managed\_unmanaged\_save
     CREATE FROM VALUE #(
        ( %cid = 'cid1'
          key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_2'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 1
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 2
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_3'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_4'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 3
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 4
          %control-field4 = if\_abap\_behv=>mk-on )
        ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 ORDER BY key\_field
    INTO TABLE @FINAL(dbtab\_after\_create).
    out->begin\_section(
      \`Demo for a managed RAP BO with unmanaged save\`
      )->next\_section( \`CREATE operation\`
      )->write\_text( 'DB table entries after the CREATE operation'
      )->write( dbtab\_after\_create
      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITY demo\_managed\_unmanaged\_save
     UPDATE FROM VALUE #(
        ( key\_field = 1
          field1 = 'update\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_2'
          %control-field2 = if\_abap\_behv=>mk-off
          field3 = 5
          %control-field3 = if\_abap\_behv=>mk-off
          field4 = 6
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 2
          field1 = 'update\_3'
          %control-field1 = if\_abap\_behv=>mk-off
          field2 = 'update\_4'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 7
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 8
          %control-field4 = if\_abap\_behv=>mk-off )
        ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 ORDER BY key\_field
    INTO TABLE @FINAL(dbtab\_after\_update).
    out->line(
      )->next\_section( \`UPDATE operation\`
      )->write\_text( 'DB table entries after the UPDATE operation'
      )->write( dbtab\_after\_update
      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITY demo\_managed\_unmanaged\_save
     DELETE FROM VALUE #( ( key\_field = 2 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 ORDER BY key\_field
    INTO TABLE @FINAL(dbtab\_after\_delete).
    out->line(
      )->next\_section( \`DELETE operation\`
      )->write\_text( 'DB table entries after the DELETE operation'
      )->write( dbtab\_after\_delete
      ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP class:

-   An ABAP EML CREATE operation is carried out. Two instances are created. The save sequence is triggered by the COMMIT ENTITIES statement. The underlying BDEF includes the syntax with unmanaged save. Thus, the ABP method save\_modified is called in this example that saves the instances to the database table demo\_tab\_root\_3 as described in section Behavior implementation.
-   The CREATE operation is followed by an UPDATE operation that modifies the two previously created instances. The changes get committed as well. Some of the fields are disabled in the %control structure (using if\_abap\_behv=>mk-off). Hence, the existing field values are not changed.
-   Finally, one of the existing instances is deleted via a DELETE operation. Another commit triggers the deletion of the instance.
-   The output window shows the result of all three operations. For each operation, an internal table is displayed showing the entries of the database table.