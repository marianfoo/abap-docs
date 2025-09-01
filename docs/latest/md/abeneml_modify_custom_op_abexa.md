  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_modify_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20MODIFY%2C%20Nonstandard%20Operations%2C%20ABENEML_MODIFY_CUSTOM_OP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

ABAP EML - MODIFY, Nonstandard Operations

This example demonstrates This example demonstrates how a MODIFY statement can be used to access a managed RAP BO and execute an action. The scenario is a simple calculation based on existing values in two columns of a table whose result is inserted in another column.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_CUSTOM and its child entity DEMO\_MANAGED\_CHILD\_CUSTOM.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_CUSTOM
  as select from demo\_tab\_root\_2
  composition \[1..1\] of DEMO\_MANAGED\_CHILD\_CUSTOM  
    as \_child
  {
        \_child,        
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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_CUSTOM is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_custom unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_CUSTOM
persistent table DEMO\_TAB\_ROOT\_2
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  action calcPercentage parameter DEMO\_CDS\_ABSTRACT\_CALCULATE result \[1\] $self;
  action calculate parameter DEMO\_CDS\_ABSTRACT\_CALCULATE result \[1\] $self;
  field(readonly:update) key\_field;
}
define behavior for DEMO\_MANAGED\_CHILD\_CUSTOM
persistent table DEMO\_TAB\_CHILD\_2
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
}

Action definition

The action calculate triggers a calculation based on the respective math symbol to be inserted by a user. The action has the output parameter $self with cardinality 1. In doing so, the parameter result returns the same entity instance for which the action is executed.

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_CUSTOM. This global class implements the local handler class LHC\_DEMO\_MANAGED\_ROOT\_CUSTOM, which contains the calculate method to implement the action. The actual implementation takes place in the CCIMP include:

-   The existing values of two columns are read using a READ EML statement into the transactional buffer so as to get the numbers for which the calculation is to be carried out.
-   Depending on the math symbol provided, the calculation is carried out.
-   Using a MODIFY EML statement, the fields of a third column are updated with the result of the calculation.
-   The output parameter result is finally filled so that the calculation result can be displayed in the column.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_custom\_op\_m DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_custom\_op\_m IMPLEMENTATION.
  METHOD main.
    DATA(math\_symbol) = '+'.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = math\_symbol
       )->request( ).
    IF math\_symbol NE '+'
      AND math\_symbol NE '-'
      AND math\_symbol NE '/'
      AND math\_symbol NE '\*'.
      out->write(
       'Only the following math symbols are valid: + - \* / '
       ).
      RETURN.
    ENDIF.
    DELETE FROM demo\_tab\_root\_2.
    MODIFY ENTITY demo\_managed\_root\_custom
    CREATE FIELDS ( key\_field data\_field3\_root )
    WITH VALUE #( ( %cid = 'cid1'
                    key\_field = 2
                    data\_field3\_root  = 3 )
                  ( %cid = 'cid2'
                    key\_field = 6
                    data\_field3\_root  = 8 )
                )
    FAILED DATA(failed)
    REPORTED DATA(reported).
    TYPES: BEGIN OF structure,
             key\_field        TYPE i,
             data\_field3\_root TYPE i,
             data\_field4\_root TYPE decfloat16,
           END OF structure.
    DATA no\_calc TYPE SORTED TABLE OF structure
      WITH UNIQUE KEY key\_field.
    READ ENTITY  demo\_managed\_root\_custom
    ALL FIELDS WITH VALUE #( ( key\_field = 2 ) ( key\_field = 6 ) )
    RESULT FINAL(res).
    MOVE-CORRESPONDING res TO no\_calc.
    out->next\_section(  'Values before EXECUTE operation'
    )->write( no\_calc ).
    MODIFY ENTITIES OF demo\_managed\_root\_custom
    ENTITY demo\_managed\_root\_custom
      EXECUTE calculate
      FROM VALUE #( ( key\_field = 2
                      %param-calculation = math\_symbol )
                    ( key\_field = 6
                      %param-calculation = math\_symbol ) )
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES RESPONSE OF demo\_managed\_root\_custom
      FAILED FINAL(commit\_failed)
      REPORTED FINAL(commit\_reported).
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, data\_field3\_root, data\_field4\_root
     FROM demo\_tab\_root\_2 INTO TABLE @FINAL(calc\_result).
    out->next\_section( 'Values after EXECUTE operation'
        )->write( calc\_result ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   As initial step in the example, the user is prompted to insert a math symbol on whose basis the calculation is done.
-   Using a MODIFY statement, demo values (that is, numbers for the calculation) are created. These values are displayed after they were read from the [RAP BO instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") using a READ statement.
-   The action calculate is executed on the instance with the statement EXECUTE using the math symbol that has been provided.
-   The result, failed, and reported parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database with a COMMIT ENTITIES statement.
-   A SELECT statement is finally used to read the changed data from the persistent table DEMO\_TAB\_ROOT\_2 to fill the output table. As a result of the action, the third column is filled with the calculation result.