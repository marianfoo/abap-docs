  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_modify_examples.htm) → 

ABAP EML - MODIFY, Nonstandard Operations

This example demonstrates This example demonstrates how a MODIFY statement can be used to access a managed RAP BO and execute an action. The scenario is a simple calculation based on existing values in two columns of a table whose result is inserted in another column.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_CUSTOM and its child entity DEMO\_MANAGED\_CHILD\_CUSTOM. Furthermore, it contains an association to an entity (DEMO\_MANAGED\_ASSOC\_CUSTOM) that is not part of the [composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry").

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_CUSTOM
  as select from demo\_tab\_root\_2
  composition \[1..1\] of DEMO\_MANAGED\_CHILD\_CUSTOM  
    as \_child
  association \[1..1\] to DEMO\_MANAGED\_ASSOC\_CUSTOM
    as \_assoc  
  on $projection.key\_field = \_assoc.key\_field
  {
        \_child,
        \_assoc,
    key demo\_tab\_root\_2.key\_field,
        demo\_tab\_root\_2.data\_field1\_root,
        demo\_tab\_root\_2.data\_field2\_root,
        demo\_tab\_root\_2.data\_field3\_root,
        demo\_tab\_root\_2.data\_field4\_root
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD\_CUSTOM
  as select from demo\_tab\_child\_2
  association to parent DEMO\_MANAGED\_ROOT\_CUSTOM as \_parent  
    on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key demo\_tab\_child\_2.key\_field,
        demo\_tab\_child\_2.data\_field1\_child,
        demo\_tab\_child\_2.data\_field2\_child,
        demo\_tab\_child\_2.data\_field3\_child,
        demo\_tab\_child\_2.data\_field4\_child
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_CUSTOM is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_custom unique;
define behavior for DEMO\_MANAGED\_ROOT\_CUSTOM
persistent table DEMO\_TAB\_ROOT\_2
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_assoc { create; }
  action calcPercentage parameter DEMO\_CDS\_ABSTRACT\_CALCULATE result \[1\] $self;
  action calculate parameter DEMO\_CDS\_ABSTRACT\_CALCULATE result \[1\] $self;
}
define behavior for DEMO\_MANAGED\_CHILD\_CUSTOM
persistent table DEMO\_TAB\_CHILD\_2
lock dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
}

Action definition

The action calculate triggers a calculation based on the respective math symbol to be inserted by a user. The action has the output parameter $self with cardinality 1. In doing so, the parameter result returns the same entity instance for which the action is executed.

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_CUSTOM. This global class implements the local handler class LHC\_DEMO\_MANAGED\_ROOT\_CUSTOM, which contains the calculate method to implement the action. The actual implementation takes place in the CCIMP include:

-   The existing values of two columns are read using a READ EML statement into the transactional buffer so as to get the numbers for which the calculation is to be carried out.
-   Depending on the math symbol provided, the calculation is carried out.
-   Using a MODIFY EML statement, the fields of a third column are updated with the result of the calculation.
-   The output parameter result is finally filled so that the calculation result can be displayed in the column.

Source Code

REPORT demo\_rap\_custom\_op\_m.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
   DATA(math\_symbol) = '+'.
   cl\_demo\_input=>new(
      )->add\_field( CHANGING field = math\_symbol
      )->request( ).
    IF math\_symbol NE '+'
      AND math\_symbol NE '-'
      AND math\_symbol NE '/'
      AND math\_symbol NE '\*'.
     cl\_demo\_output=>display(
      'Only the following math symbols are valid: + - \* / '
      ).
     RETURN.
    ELSE.
        DATA(out) = cl\_demo\_output=>new(  ).
    ENDIF.
    DELETE FROM demo\_tab\_root\_2.
    MODIFY ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
    CREATE SET FIELDS WITH VALUE #( ( %cid = 'cid1'
                                      key\_field = 2
                                      data\_field3\_root  = 3 )
                                    ( %cid = 'cid2'
                                      key\_field = 6
                                      data\_field3\_root  = 8 )
                                  )
    FAILED DATA(failed)
    REPORTED DATA(reported).
    TYPES: BEGIN OF structure,
             key\_field   TYPE i,
             data\_field3\_root TYPE i,
             data\_field4\_root TYPE decfloat16,
           END OF structure.
    DATA no\_calc TYPE SORTED TABLE OF structure
      WITH UNIQUE KEY key\_field.
    READ ENTITY  DEMO\_MANAGED\_ROOT\_CUSTOM
    ALL FIELDS WITH VALUE #( ( key\_field = 2 ) ( key\_field = 6 ) )
    RESULT DATA(res).
    MOVE-CORRESPONDING res TO no\_calc.
    out->next\_section(  'Values before EXECUTE operation'
    )->write( no\_calc ).
    MODIFY ENTITIES OF DEMO\_MANAGED\_ROOT\_CUSTOM
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
      EXECUTE calculate
      FROM VALUE #( ( key\_field = 2
                      %param-calculation = math\_symbol )
                    ( key\_field = 6
                      %param-calculation = math\_symbol ) )
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES RESPONSE OF DEMO\_MANAGED\_ROOT\_CUSTOM
      FAILED DATA(commit\_failed)
      REPORTED DATA(commit\_reported).
    SELECT key\_field, data\_field3\_root, data\_field4\_root
     FROM demo\_tab\_root\_2 INTO TABLE @DATA(calc\_result).
    out->next\_section( 'Values after EXECUTE operation'
        )->write( calc\_result
         )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   As initial step in the program, the user is prompted to insert a math symbol on whose basis the calculation is done.
-   Using a MODIFY statement, demo values (that is, numbers for the calculation) are created. These values are displayed after they were read from the [RAP BO instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") using a READ statement.
-   The action calculate is executed on the instance with the statement EXECUTE using the math symbol that has been provided.
-   The result, failed, and reported parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database with a COMMIT ENTITIES statement.
-   A SELECT statement is finally used to read the changed data from the persistent table DEMO\_TAB\_ROOT\_2 to fill the output table. As a result of the action, the third column is filled with the calculation result.