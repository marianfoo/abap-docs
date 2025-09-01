---
title: "ABAP EML - MODIFY, Standard Operations (Unmanaged)"
description: |
  This example demonstrates all standard operations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm 'Glossary Entry') to modify and read from a simple unmanaged RAP BO(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm 'Glossary Entry').
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_op_u_abexa.htm"
abapFile: "abeneml_modify_op_u_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abeneml", "modify", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_modify_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY, Standard Operations \(Unmanaged\), ABENEML_MODIFY_OP_U_ABEXA, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY, Standard Operations (Unmanaged)

This example demonstrates all [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm "Glossary Entry") to modify and read from a simple unmanaged [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The following operations are covered:

-   CREATE
-   CREATE BY (create-by-association operation)
-   UPDATE
-   DELETE
-   READ
-   READ BY (read-by-association operation)

In an unmanaged RAP scenario - as opposed to managed RAP scenarios - the developer is responsible for the implementation of the standard operations. This simplified example is not a real life scenario and rather focuses on the technical side by showing how the methods of an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") might be self-implemented taking the handling of the transactional buffer in a managed scenario as a role model in a simplified way. This implementation can, for example, be called using [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") outside of the behavior pool.

The transactional buffer of the unmanaged RAP BO in the example is constituted by internal tables for the sake of having a self-contained example reducing the complexity. The tables act as a memory area into which data from the [persistent database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") are read and from which data is saved back to the database tables after triggering the saving of modified instances (with a COMMIT ENTITIES statement).

Note

The code is meant to give an idea about the principles of an unmanaged RAP scenario, the fact that everything must be self-implemented and the significance of the transactional buffer that can be accessed by [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry"), and should therefore not be reused in a production scenario.

Data model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_ROOT\_2 and its child entity DEMO\_UNMANAGED\_CHILD\_2.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_unmanaged\_root\_2
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of DEMO\_UNMANAGED\_CHILD\_2 as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_UNMANAGED\_CHILD\_2
  as select from demo\_tab\_child\_3
  association to parent demo\_unmanaged\_root\_2  
  as \_parent on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key key\_field,
    key key\_field\_child,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_ROOT\_2 is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_root\_2 unique;
strict(2);
define behavior for demo\_unmanaged\_root\_2
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
}
define behavior for DEMO\_UNMANAGED\_CHILD\_2 alias child
lock dependent by \_parent
authorization dependent by \_parent
{
  field ( readonly ) key\_field;
  association \_parent;
}

The behavior definition is the basis of the implementation. It defines what can be implemented in the behavior pool.

Behavior implementation

For the above CDS behavior definition, one ABP is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_ROOT\_2. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool:

-   lcl\_buffer constitutes the transactional buffer. It includes internal tables to handle the data.
-   lhc\_demo\_unmanaged\_root\_2 is the handler class of the behavior pool. The methods of this class implement all standard operations including an error handling.
-   lsc\_demo\_unmanaged\_root\_2 is the saver class of the behavior pool. The methods of this class implement the actual modification of the persistent data.

Details of the ABP

-   lcl\_buffer
    
    In this local class, two internal tables are constructed that serve as transactional buffer: root\_buffer as the transactional buffer for the root entity, and child\_buffer for the child entity to also cover the create- and read-by-association operations. The underlying structured data types are built in a way that simplifies the handling of the buffers. gty\_buffer, as the structured data type for root\_buffer, contains all the key and data fields of the root entity's underlying CDS view with the same type. Plus, the structure includes the components cid to hold the content ID that might be provided by an instance and, for a more comfortable processing of saving and deleting instances, it includes two fields (changed and deleted) acting as flags. These flags are set in the course of modify operations, i. e. if an instance is created or changed, the changed receives an X. If an instance gets deleted, deleted gets the flag X. If no operation takes place for an entity, both fields remain initial. Likewise, the structured data type for the child entity (gty\_buffer\_child) is constructed. It also contains all the key and data fields of the child entity's underlying CDS view with the same type (which is in this example very similar to the root entity). This structure contains the components cid\_ref for by-association operations and cid\_target for the content ID of child instances in the %target structure. The latter is not used in the example. Furthermore, the component created is included. Its purpose is the same as changed, however, in this case, it is only relevant to cover create-by-association operations. Only those instances whose created field is marked with an X should be saved to the database table of the child entity.
    
-   Methods prep\_root\_buffer and prep\_child\_buffer
    
    These two methods are meant to prepare the transactional buffers for the root and child entity and fill them with data from the underlying database table, especially if the buffer tables are cleared once the save sequence gets triggered by a COMMIT ENTITIES statement in the ABAP program.
    
    The principle of internal tables as transactional buffer is the following: Once an EML call requests data (to be read or modified) with a specific key, it is checked whether the transactional buffer already holds the requested data, otherwise it is checked if the data is available in the [persistent database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry"). If it exists there, the line with the specified key is read from the database table into the transactional buffer using a SELECT statement. The following is done in the individual methods for the operations to avoid double entries: If the data does not exist at all (for example, it got deleted), the FAILED and REPORTED structures should be filled with information about which data sets could not be read or modified. The prep\_child\_buffer method is relevant for the by-association operations. Not only must the availability of the line with the specified key in the root buffer be checked but also the availability of the line in the child buffer. If the line exists in the underlying database table of the child entity, the data gets read into the child buffer using a SELECT statement as well.
    
-   Method create
    
    After preparing the root buffer with the provided input parameters (entities), a LOOP AT statement further processes the transactional buffer with the individual instances that come in as input parameters. There are certain conditions to be met before an instance can actually be created. If the conditions are not met for a particular instance, the result is an entry in the FAILED and REPORTED structures for the failed instance. The gist is that those instances being present in the transactional buffer and meeting the conditions receive a flag in the changed field and can finally be created. Consequently, the instances are saved to the database table following a COMMIT ENTITIES statement in the ABAP program triggering the save sequence. The checks also take the significance of the flags in the %control structure into consideration, i. e. if a data field is unmarked using the constant mk-off of interface ABP\_BEHV\_FLAG, this particular field should not be created with the provided value.
    
-   Method update
    
    Same as the method above, after preparing the root buffer with the provided input parameters (entities), a LOOP AT statement further processes the transactional buffer with the individual instances that come in as input parameters. Also here, there are certain conditions to be met before an instance can be updated. If the conditions are not met for a particular instance, an entry gets created in the FAILED and REPORTED structures for the failed instance. The checks are implemented in the way that existing values of a data field should not be overwritten if it is explicitly unmarked in the %control structure. Same as above, a changed instance receives a flag. Furthermore, the IF statements are implemented for two scenarios. It might so happen that an EML request includes only the keys or only %cid\_ref. In the latter case, a potentially provided key is ignored since the reference to a particular %cid is the principal reference.
    
-   Method delete
    
    This method is implemented similarly to the update method, for example, it considers the two scenarios when only key or only %cid\_ref are provided. If an instance is to be deleted, it receives a flag for the deleted field. The changed field gets initialized. %control is not applicable here.
    
-   Method read
    
    After preparing the root buffer with the provided input parameters (keys), a LOOP AT statement is used for a detailed preparation and filling of the read result table according to the keys that come in as input parameters and considering the flags for the fields in the %control structure. If a data field is unmarked, this particular field should not be read and included in the read result. The key must always be read and returned.
    
-   Method rba\_child
    
    As an initial step in the method for read-by association operations, both root and child buffers must be prepared. Same as in the read method, the LOOP AT statement is used for a detailed preparation and filling of the read result table according to the keys that come in as input parameters and considering the flags for the fields in the %control structure. If a data field is unmarked, this particular field should not be read and included in the read result. The key must always be read and returned.
    
-   Method cba\_child
    
    As an initial step in the method for create-by association operations, both root and child buffers must be prepared. The conditions for filling the child buffer within the LOOP AT statement include checks for two scenarios. It might so happen that an EML request includes only the keys or only %cid\_ref. In the latter case, a potentially provided key is ignored since the reference to a particular %cid is the principal reference. The flags in the %control structure for the data fields are considered, too. If the conditions are met for an instance to be created in the child entity, the instance receives a flag for the created field.
    
-   Class lsc\_demo\_unmanaged\_root
    
    The finalize method deletes all the content IDs from the transactional buffer since they must not be used during the save phase. However, it is not relevant for the example.
    
    The save method includes statements that save the instances from the transactional buffer, i. e. from the internal tables root\_buffer and child\_buffer, to the database tables (demo\_tab\_root\_3 and demo\_tab\_child\_3). Among the statements, there is one code block dealing with create and update operations. Here, an internal helper table is created to store those instances that have a flag for the changed field. This helper table is then used for an ABAP SQL MODIFY statement that finally changes the database tables with only those instances a change is intended for. Another block is there for the deletion. Similarly, an internal helper table comprises those instances having a flag for deleted. The saving of instances via create-by-association operations is handled separately in the example since the instances from the child buffer must be considered (those instances with a flag for created) and not the ones from the root buffer as it is the case in the two preceding code blocks.
    
    The cleanup method clears the buffer tables.
    

Source Code   

REPORT demo\_rap\_eml\_u\_operations.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      failed   TYPE RESPONSE FOR FAILED   demo\_unmanaged\_root\_2,
      reported TYPE RESPONSE FOR REPORTED demo\_unmanaged\_root\_2,
      init\_str TYPE string VALUE IS INITIAL,
      init\_i   TYPE i VALUE IS INITIAL.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
            \`Standard Operations with an Unmanaged RAP BO\`
       )->line( ).
    out->next\_section( \`CREATE Operations\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_2
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
        ( %cid = 'cid3'
          key\_field = 3
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_5'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_6'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 5
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 6
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid4'
          key\_field = 4
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_7'
          %control-field1 = if\_abap\_behv=>mk-off
          field2 = 'create\_8'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 7
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 8
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid5'
          key\_field = 5
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_9'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_10'
          %control-field2 = if\_abap\_behv=>mk-off
          field3 = 9
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 10
          %control-field4 = if\_abap\_behv=>mk-on ) )
     CREATE BY \\\_child FROM VALUE #(
        "Instances only providing %cid\_ref.
        ( %cid\_ref = 'cid1'
          %target = VALUE #(
           ( %cid = 'cid\_child1'
             key\_field\_child = 1
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_1'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_2'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 11
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 12
             %control-field4 = if\_abap\_behv=>mk-on )
           ( %cid = 'cid\_child2'
             key\_field\_child = 2
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_3'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_4'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 13
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 14
             %control-field4 = if\_abap\_behv=>mk-on ) ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #(
           ( %cid = 'cid\_child3'
             key\_field\_child = 3
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_5'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_6'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 15
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 16
             %control-field4 = if\_abap\_behv=>mk-on )
           ( %cid = 'cid\_child4'
             key\_field\_child = 4
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_7'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_8'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 17
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 18
             %control-field4 = if\_abap\_behv=>mk-on ) ) )
         ( %cid\_ref = 'cid3'
             %target = VALUE #(
           ( %cid = 'cid\_child5'
             key\_field\_child = 5
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_9'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_10'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 19
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 20
             %control-field4 = if\_abap\_behv=>mk-on ) ) )
        "Instances only providing the key.
        ( key\_field = 4
          %target = VALUE #(
           ( %cid = 'cid\_child6'
             key\_field\_child = 6
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_11'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_12'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 21
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 22
             %control-field4 = if\_abap\_behv=>mk-on )
           ( %cid = 'cid\_child7'
             key\_field\_child = 7
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_13'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_14'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 23
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 24
             %control-field4 = if\_abap\_behv=>mk-on ) ) )
        ( key\_field = 5
          %target = VALUE #(
           ( %cid = 'cid\_child8'
             key\_field\_child = 8
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_15'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_16'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 25
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 26
             %control-field4 = if\_abap\_behv=>mk-on )
            ( %cid = 'cid\_child9'
             key\_field\_child = 9
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1 = 'cba\_17'
             %control-field1 = if\_abap\_behv=>mk-on
             field2 = 'cba\_18'
             %control-field2 = if\_abap\_behv=>mk-on
             field3 = 27
             %control-field3 = if\_abap\_behv=>mk-on
             field4 = 28
             %control-field4 = if\_abap\_behv=>mk-on )  ) )
              )
        FAILED   failed
        REPORTED reported.
      out->write\_html( '<u><b><i>Responses:</i></b></u>' ).
      display\_responses(  ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root\_3
      ORDER BY key\_field
      INTO TABLE @FINAL(create).
    SELECT \* FROM demo\_tab\_child\_3
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_by\_assoc).
    out->write\_html(
'<u><b><i>Database table entries after the operations:</i></b></u>'
       )->write( create
       )->write( create\_by\_assoc
       )->line(
       )->next\_section( \`UPDATE Operations\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_2
      CREATE FROM VALUE #(
        ( %cid  = 'cid6'
          key\_field = 6
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_11'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_12'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 29
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 30
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid  = 'cid7'                            "Error
          key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_13'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_14'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 31
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 32
          %control-field4 = if\_abap\_behv=>mk-on )
          )
      UPDATE FROM VALUE #(
        "Instances only providing the key.
        ( key\_field = 1
          field1 = 'update\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_2'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 33
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 34
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 2
          field2 = 'update\_3'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 35
          %control-field3 = if\_abap\_behv=>mk-off
          field4 = 36
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 3
          field1 = 'update\_4'
          %control-field1 = if\_abap\_behv=>mk-on
          field3 = 37
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 38
          %control-field4 = if\_abap\_behv=>mk-off )
        ( key\_field = 4
          field1 = 'update\_5'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = init\_str
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = init\_i
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 40
          %control-field4 = if\_abap\_behv=>mk-off )
        ( key\_field = 5
          field1 = 'update\_7'
          %control-field1 = if\_abap\_behv=>mk-off
          field2 = 'update\_8'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 41
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 42
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 7                                       "Error
          field1 = 'update\_9'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_10'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 43
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 44
          %control-field4 = if\_abap\_behv=>mk-on )
        "Instances only providing %cid\_ref.
        ( %cid\_ref = 'cid6'
          field1 = 'update\_11'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_12'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 45
          %control-field3 = if\_abap\_behv=>mk-off
          field4 = 46
          %control-field4 = if\_abap\_behv=>mk-on ) )
        FAILED   failed
        REPORTED reported.
      out->write\_html( '<u><b><i>Responses:</i></b></u>' ).
      display\_responses(  ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root\_3
      ORDER BY key\_field
      INTO TABLE @FINAL(update).
    out->write\_html(
'<u><b><i>Database table entries after the operation:</i></b></u>'
       )->write( update
       )->line(
       )->next\_section( \`DELETE Operations\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_2
      CREATE FROM VALUE #(
        ( %cid = 'cid8'
          key\_field = 8
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_15'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_16'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 47
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 48
          %control-field4 = if\_abap\_behv=>mk-on )
           )
      UPDATE FROM VALUE #(
        ( key\_field = 9                               "Error
          field1 = 'update\_13'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_14'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 49
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 50
          %control-field4 = if\_abap\_behv=>mk-on )
           )
      DELETE FROM VALUE #( ( key\_field = 5 )
                           ( key\_field = 6 )
                           ( key\_field = 7 )          "Error
                           ( %cid\_ref = 'cid8' )
                         )
      FAILED   failed
      REPORTED reported.
      out->write\_html( '<u><b><i>Responses:</i></b></u>' ).
      display\_responses(  ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root\_3
      ORDER BY key\_field
      INTO TABLE @FINAL(delete).
  out->write\_html(
'<u><b><i>Database table entries after the operation:</i></b></u>'
       )->write( delete
       )->line(
       )->next\_section( \`READ Operations\` ).
    READ ENTITY demo\_unmanaged\_root\_2
     FROM VALUE #(
        ( key\_field = 1
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 2
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 3
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-off
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 4
          %control-field1 = if\_abap\_behv=>mk-off
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 5                                      "Error
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 6                                      "Error
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
             )
      RESULT   FINAL(read\_result)
      FAILED   failed
      REPORTED reported.
out->write\_html( '<u><b><i>Read operations on root entity</i></b></u>'
   )->write\_html( '<b>Responses:</b>' ).
    display\_responses(  ).
     out->write\_html(
      '<b>Read result:</b>'
       )->write( read\_result ).
    READ ENTITY demo\_unmanaged\_root\_2
     BY \\\_child FROM VALUE #(
        ( key\_field = 1
          %control-key\_field\_child = if\_abap\_behv=>mk-on
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 2
          %control-key\_field\_child = if\_abap\_behv=>mk-on
          %control-field1 = if\_abap\_behv=>mk-off
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 3
          %control-field1 = if\_abap\_behv=>mk-on
          %control-key\_field\_child = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-off
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 7                                       "Error
          %control-key\_field\_child = if\_abap\_behv=>mk-on
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 8                                       "Error
          %control-key\_field\_child = if\_abap\_behv=>mk-on
          %control-field1 = if\_abap\_behv=>mk-on
          %control-field2 = if\_abap\_behv=>mk-on
          %control-field3 = if\_abap\_behv=>mk-on
          %control-field4 = if\_abap\_behv=>mk-on )
        )
         RESULT FINAL(read\_by\_assoc)
         FAILED failed
         REPORTED reported.
out->write\_html( '<u><b><i>Read operations on child entity</i></b></u>'
   )->write\_html( '<b>Responses:</b>' ).
    display\_responses(  ).
     out->write\_html(
      '<b>Read result:</b>'
       )->write( read\_by\_assoc ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
  ENDMETHOD.
  METHOD display\_responses.
    IF failed IS NOT INITIAL.
        out->write\_doc( \`FAILED response:\`
          )->write( failed ).
    ELSE.
        out->write\_doc( \`No FAILED response.\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
        out->write\_doc( \`REPORTED response:\`
          )->write( reported ).
    ELSE.
        out->write\_doc( \`No REPORTED response.\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the [unmanaged RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") from an ABAP program. The main focus of the program is to demonstrate simple EML calls that access the transactional buffer and modify [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") of root and child entity or read and return them respectively. All standard operations are covered: CREATE, CREATE BY, UPDATE, DELETE, READ and READ BY. Using COMMIT ENTITIES statements, the saving of the changed instances is triggered. To demonstrate the successful saving of the particular instances, an internal table is displayed which is filled with the current data sets contained in the [persistent database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") (using a SELECT statement). Furthermore, the modify and read operations include the FAILED and REPORTED structures. The example covers cases where instances cannot be changed or read on purpose. To display the responses of failed instances in the output window, the display\_responses method comprises the construction and filling of internal tables to hold the returned information for failed instances. The information displayed for the failed instances is based on the individual ABP method calls that are responsible for filling the response structures. The information provided is intentionally kept simple and limited.

The FAILED tables that are displayed comprise the fail cause (there is no particular logic implemented to diversify the fail cause), content ID and key of the affected instance as well as the affected operation or association (which is indicated by the entry 01). The REPORTED tables that are displayed comprise information about the severity of the incident, content ID and key as well as a custom message.

Note:

-   Some fields are intentionally not filled to emphasize the significance of the %control structure, i. e. if a field is unmarked, it is not considered for the operation. That is why the keyword FROM is used following the keyword for the operation throughout the example since %control must be filled explicitly in that case.
-   The modify operations focusing on UPDATE and DELETE include additional CREATE operations for instances holding a content ID. In doing so, the UPDATE and DELETE operations can also demonstrate the use of %cid and %cid\_ref.