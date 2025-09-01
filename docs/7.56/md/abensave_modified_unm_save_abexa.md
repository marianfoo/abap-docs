---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_MANAGED_UNMANAGED_SAVE. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity DEMO_MANAGED_UNMANAGED_SAVE as select from demo_tab_root_3  key key_field, field1, field2, field3, field4  Behavior definitio
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensave_modified_unm_save_abexa.htm"
abapFile: "abensave_modified_unm_save_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abensave", "modified", "unm", "save", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) →  [Examples for RAP Saver Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_saver_methods_abexas.htm) → 

Example for save\_modified in a managed RAP BO with unmanaged save

This example demonstrates the RAP saver method save\_modified as well as the use of the BDEF-derived types TYPE REQUEST FOR CHANGE and TYPE REQUEST FOR DELETE in the context of a managed RAP BO whose BDEF is specified with [with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm). The saving of created, changed or deleted [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") is self-implemented in the save\_modified method of the [ABP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_UNMANAGED\_SAVE is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed with unmanaged save
implementation in class bp\_demo\_managed\_unmanaged\_save unique;
strict;
define behavior for DEMO\_MANAGED\_UNMANAGED\_SAVE
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_UNMANAGED\_SAVE. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following method is relevant in this example:

-   save\_modified
    
    At first, several type and variable declarations are available just for demonstration purposes. Among them, there are the [BDEF-derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") TYPE REQUEST FOR CHANGE, TYPE REQUEST FOR DELETE, TYPE TABLE FOR CHANGE and TYPE STRUCTURE FOR CHANGE. These BDEF-derived types are only relevant in the contexts of a managed RAP BO [with additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm) and a managed RAP BO [with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm). Basically, the structures create and update (that are of type TYPE REQUEST FOR CHANGE) as well as delete (that is of TYPE REQUEST FOR DELETE) - they contain those instances that are to be created, changed or deleted - are available here by default and can actually be referred to directly instead of extra variable and type declarations as it is the case in this example. The declarations are followed by a further declaration of an internal table (lt\_tab) that acts as a helper table to temporarily store the instances that are to be created, changed or deleted.
    
    IF statements then check whether instances have been created, updated or deleted by a RAP BO consumer. In doing so, the %control structure is used to get information on which fields have been set when creating, updating or deleting the instance.
    
    The IF statement taking care of the created instances is implemented as follows: The internal table lt\_tab is filled with the instance data created by the CREATE operation. A LOOP statement processes the individual instances. The data field values only get written to the internal table lt\_tab if the data fields are not disabled for the operation in the %control structure. At the end of the IF statement, all the entries in the table lt\_tab are saved to the database table demo\_tab\_root\_3 using an ABAP SQL MODIFY statement.
    
    The IF statement processing those instances that have been updated is implemented similarly to above. However, to make sure that the update operation does not write blanks to the internal table lt\_tab, an ABAP SQL SELECT statement takes care of getting all existing entries of the database table demo\_tab\_root\_3 at first. Hence, if a value for a particular data field is not provided or the field is marked as disabled in the %control structure, the already existing field value is taken over and not overwritten with an initial value.
    
    The IF statement taking care of deleted instances deletes the entries from the database table using an ABAP SQL DELETE statement.
    

Source Code

REPORT demo\_rap\_save\_modified\_unm\_sav.
CLASS demo DEFINITION.
    PUBLIC SECTION.
      CLASS-METHODS:
        class\_constructor,
        main.
    PRIVATE SECTION.
      CLASS-DATA:
        out TYPE REF TO if\_demo\_output.
      CLASS-METHODS:
        initialize\_dbtabs.
  ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(dbtab\_after\_create)
      ORDER BY key\_field.
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
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'update\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_2'
          %control-field2 = if\_abap\_behv=>mk-off
          field3 = 5
          %control-field3 = if\_abap\_behv=>mk-off
          field4 = 6
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
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
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(dbtab\_after\_update)
      ORDER BY key\_field.
    out->line(
      )->next\_section( \`UPDATE operation\`
      )->write\_text( 'DB table entries after the UPDATE operation'
      )->write( dbtab\_after\_update
      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITY demo\_managed\_unmanaged\_save
     DELETE FROM VALUE #( ( key\_field = 2 ) ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(dbtab\_after\_delete)
      ORDER BY key\_field.
    out->line(
      )->next\_section( \`DELETE operation\`
      )->write\_text( 'DB table entries after the DELETE operation'
      )->write( dbtab\_after\_delete
      ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   An ABAP EML CREATE operation is carried out. Two instances are created. The save sequence is triggered by the COMMIT ENTITIES statement. The underlying BDEF includes the syntax with unmanaged save. Thus, the ABP method save\_modified is called in this example that saves the instances to the database table demo\_tab\_root\_3 as described in section Behavior implementation.
-   The CREATE operation is followed by an UPDATE operation that modifies the two previously created instances. The changes get committed as well. Some of the fields are disabled in the %control structure (using if\_abap\_behv=>mk-off). Hence, the existing field values are not changed.
-   Finally, one of the existing instances is deleted via a DELETE operation. Another commit triggers the deletion of the instance.
-   The output window shows the result of all three operations. For each operation, an internal table is displayed showing the entries of the database table.