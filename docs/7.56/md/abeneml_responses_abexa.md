  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommon_eml_elements.htm) →  [ABAP EML - response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) →  [Examples for responses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_responses_abexas.htm) → 

ABAP EML - Responses

This example demonstrates the response parameters FAILED, MAPPED and REPORTED in a managed RAP BO. The scenario provokes errors while trying to modify [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") using the MODIFY statement. The output results are displayed for showcasing purposes.

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

Behavior implementation

For the above CDS behavior definition, there is an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_CUSTOM. This global class implements the local handler class LHC\_DEMO\_MANAGED\_ROOT\_CUSTOM. The actual implementation takes place in the CCIMP include. The details of the behavior implementation are not relevant for this example since no custom operations are used.

Source Code

REPORT demo\_rap\_eml\_responses.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CONSTANTS x\_true  TYPE abp\_behv\_flag VALUE '01'.
    CONSTANTS x\_false TYPE abp\_behv\_flag VALUE '00'.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      failed   TYPE RESPONSE FOR FAILED   DEMO\_MANAGED\_ROOT\_CUSTOM,
      mapped   TYPE RESPONSE FOR mapped DEMO\_MANAGED\_ROOT\_CUSTOM,
      reported TYPE RESPONSE FOR REPORTED DEMO\_MANAGED\_ROOT\_CUSTOM.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_dbtabs
        IMPORTING title TYPE string,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
  "Create data sets for root and child entity
  MODIFY ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
      CREATE SET FIELDS WITH value #(
        (  %cid = 'cid1'
           key\_field = 1
           data\_field1\_root = 'aaa'
           data\_field2\_root = 'bbb' )
        (  %cid = 'cid2'
           key\_field = 2
           data\_field1\_root = 'ccc'
           data\_field2\_root = 'ddd' )
              )
      CREATE BY \\\_CHILD SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #( ( %cid = 'cid3'
                               data\_field1\_child = 'eee'
                               data\_field2\_child = 'fff' )
                           ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #( ( %cid = 'cid4'
                               data\_field1\_child = 'ggg'
                               data\_field2\_child = 'hhh' )
                           ) )
              )
        FAILED   failed
        MAPPED mapped
        REPORTED reported.
    out->next\_section( \`Responses for 1st modification\` ).
    display\_responses( ).
    COMMIT ENTITIES.
    display\_dbtabs( \`Result of 1st modification\` ).
    "Modify operations on root and child entity
   MODIFY ENTITIES OF DEMO\_MANAGED\_ROOT\_CUSTOM
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
        CREATE SET FIELDS WITH value #(
        (  %cid = 'cid3'
           key\_field = 3
           data\_field1\_root = 'iii'
           data\_field2\_root = 'jjj' )
        (  %cid = 'cid4'
           key\_field = 4
           data\_field1\_root = 'kkk'
           data\_field2\_root = 'lll' )
              )
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
        UPDATE SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid4'
            data\_field3\_root = 111
            data\_field4\_root = 222  )
          ( key\_field = 6
            data\_field3\_root = 333
            data\_field4\_root = 444 )
              )
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
        DELETE FROM VALUE #( ( %cid\_ref = 'cid3'  )
                             ( key\_field = 7  )
                           )
    ENTITY demo\_managed\_ROOT\_CUSTOM
       CREATE BY \\\_CHILD SET FIELDS WITH VALUE #(
         ( %cid\_ref = 'cid3'
           %target = VALUE #( ( %cid = 'cid5'
                                data\_field1\_child = 'mmm'
                                data\_field2\_child = 'nnn' )
                                 ) )
         ( %cid\_ref = 'cid4'
           %target = VALUE #( ( %cid = 'cid6'
                                data\_field1\_child = 'ooo'
                                data\_field2\_child = 'ppp' )
                            ) )
              )
    ENTITY demo\_managed\_CHILD\_CUSTOM
        UPDATE SET FIELDS WITH VALUE #(
         ( key\_field = 2
           data\_field3\_child = 999
           data\_field4\_child = 888 )
         ( key\_field = 3
           data\_field3\_child = 222
           data\_field4\_child = 111 )
         ( key\_field = 9
           data\_field3\_child = 333
           data\_field4\_child = 444 )
           )
        FAILED   failed
        MAPPED mapped
        REPORTED reported.
    out->next\_section( \`Responses for 2nd modification\` ).
    display\_responses( ).
  COMMIT ENTITIES.
    display\_dbtabs( \`Result after 2nd modification\` ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_ROOT\_2.
    DELETE FROM demo\_tab\_child\_2.
  ENDMETHOD.
  METHOD display\_dbtabs.
    SELECT \* FROM demo\_tab\_ROOT\_2
      INTO TABLE @DATA(modifiy\_entity\_parent).
    SELECT \* FROM demo\_tab\_child\_2
      INTO TABLE @DATA(modifiy\_entity\_child).
    out->next\_section( title
      )->write( modifiy\_entity\_parent
      )->write( modifiy\_entity\_child
      ).
  ENDMETHOD.
  METHOD display\_responses.
    "MAPPED
    out->write( \`Response for MAPPED:\` ).
     TYPES: BEGIN OF mapped\_structure,
      cid TYPE abp\_behv\_cid,
      key\_field type i,
    END OF mapped\_structure.
    TYPES mapped\_table\_type TYPE TABLE OF mapped\_structure.
    DATA mapped\_table\_root TYPE mapped\_table\_type.
    DATA mapped\_table\_child TYPE mapped\_table\_type.
    LOOP AT mapped-DEMO\_MANAGED\_ROOT\_CUSTOM
      ASSIGNING FIELD-SYMBOL(<mapped>).
            APPEND VALUE #( cid = <mapped>-%cid
                            key\_field = <mapped>-%key-key\_field
                          ) TO mapped\_table\_root.
    ENDLOOP.
    out->write( mapped\_table\_root ).
    LOOP AT mapped-DEMO\_MANAGED\_CHILD\_CUSTOM
      ASSIGNING FIELD-SYMBOL(<mapped\_child>).
            APPEND VALUE #( cid = <mapped\_child>-%cid
                            key\_field = <mapped\_child>-%key-key\_field
                          ) TO mapped\_table\_child.
    ENDLOOP.
    out->write( mapped\_table\_child ).
    "FAILED
    out->write( \`Response for FAILED:\` ).
    TYPES: BEGIN OF failed\_structure,
      fail\_cause TYPE if\_abap\_behv=>t\_fail\_cause,
      key\_field type i,
      update TYPE abp\_behv\_flag,
      create TYPE abp\_behv\_flag,
      delete TYPE abp\_behv\_flag,
    END OF failed\_structure.
    TYPES failed\_table\_type TYPE TABLE OF failed\_structure.
    DATA failed\_table\_root TYPE failed\_table\_type.
    DATA failed\_table\_child TYPE failed\_table\_type.
    LOOP AT failed-DEMO\_MANAGED\_ROOT\_CUSTOM
      ASSIGNING FIELD-SYMBOL(<failed>).
      APPEND VALUE #(  fail\_cause = <failed>-%fail-cause
                       key\_field =  <failed>-%key-key\_field
                       create = <failed>-%create
                       update = <failed>-%update
                       delete = <failed>-%delete
                      ) TO failed\_table\_root.
    ENDLOOP.
    out->write( failed\_table\_root ).
    LOOP AT failed-DEMO\_MANAGED\_CHILD\_CUSTOM
      ASSIGNING FIELD-SYMBOL(<failed\_child>).
      APPEND VALUE #( fail\_cause = <failed\_child>-%fail-cause
                      key\_field =  <failed\_child>-%key-key\_field
                      create = <failed\_child>-%create
                      update = <failed\_child>-%update
                      delete = <failed\_child>-%delete
                    ) TO failed\_table\_child.
    ENDLOOP.
    out->write( failed\_table\_child ).
    "REPORTED
    out->write( \`Response for REPORTED:\` ).
    TYPES: BEGIN OF reported\_structure,
      severity type if\_abap\_behv\_message=>t\_severity,
      key\_field type i,
      message type string,
    END OF reported\_structure.
    TYPES reported\_table\_type TYPE TABLE OF reported\_structure.
    DATA reported\_table TYPE reported\_table\_type.
    DATA reported\_table\_child TYPE reported\_table\_type.
    LOOP AT reported-DEMO\_MANAGED\_ROOT\_CUSTOM
      ASSIGNING FIELD-SYMBOL(<reported>).
        APPEND VALUE #(
           key\_field =  <reported>-%key-key\_field
           message = <reported>-%msg->if\_message~get\_text( )
           severity = <reported>-%msg->m\_severity
                      ) TO reported\_table.
    ENDLOOP.
    out->write( reported\_table ).
    LOOP AT reported-DEMO\_MANAGED\_CHILD\_CUSTOM
      ASSIGNING FIELD-SYMBOL(<reported\_child>).
      APPEND VALUE #(
        key\_field = <reported\_child>-%key-key\_field
        message = <reported\_child>-%msg->if\_message~get\_text( )
        severity = <reported\_child>-%msg->m\_severity
                    ) TO reported\_table\_child.
    ENDLOOP.
    out->write( reported\_table\_child ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   As a first step, demo values are created for the root and child entity using a MODIFY statement. As part of the modify operation, FAILED, MAPPED and REPORTED parameters are specified. With a COMMIT ENTITIES, the data is saved to the database.
    
    To visualize the responses, internal tables are created to show a selected set of the responses' components. Among them, there are the keys and content ID (&cid) for MAPPED, the fail cause, keys as well as flags for the affected operation (%CREATE, %UPDATE, %DELETE) for FAIL, and the message (%MSG) and the affected key for REPORTED.
    
    First, the responses of the said parameters are displayed followed by tables showing the data sets of the root and child entity that are saved to the database (a SELECT statement is used to fill tables with those demo values that have just been created for the output). The output for the responses only shows mapping information because there are no failures of the modify operation to be reported.
    
-   As a second step, further modify operations are carried out for the root and child entity. Among them, create, update and delete operations on the root entity and create-by-association and update operations on the child entity. FAILED, MAPPED and REPORTED parameters are specified here, too. The COMMIT ENTITIES statement saves the data to the database.
    
    For both, root and child entity, there are data sets defined that will cause an error. To be precise, one update and delete operation on the root entity and two update operations on the child entity will fail.
    
    As a consequence, apart from the mapping information, the responses for FAILED and REPORTED that are displayed in the output cover the information of the affected data sets for which errors occurred. Furthermore, tables display the data sets for which the create, update and delete operations were successful for both, root and child entity.