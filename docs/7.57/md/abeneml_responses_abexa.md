  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommon_eml_elements.htm) →  [ABAP EML - response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) →  [Examples for Responses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - Responses, ABENEML_RESPONSES_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP EML - Responses

This example demonstrates the response parameters that follow the ABAP words FAILED, MAPPED and REPORTED in a managed RAP BO. The scenario provokes errors while trying to modify [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") using the MODIFY statement. The output results are displayed for showcasing purposes.

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_CUSTOM is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

Behavior implementation

For the above CDS behavior definition, there is an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_CUSTOM. This global class implements the local handler class LHC\_DEMO\_MANAGED\_ROOT\_CUSTOM. The actual implementation takes place in the CCIMP include. The details of the behavior implementation are not relevant for this example since no custom operations are used.

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
      display\_dbtabs,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
  "Create data sets for root and child entity
  MODIFY ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
      CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root
        data\_field3\_root data\_field4\_root
      ) WITH value #(
        (  %cid = 'cid1'
           key\_field = 1
           data\_field1\_root = 'aaa'
           data\_field2\_root = 'bbb'
           data\_field3\_root = 1
           data\_field4\_root = 2 )
        (  %cid = 'cid2'
           key\_field = 2
           data\_field1\_root = 'ccc'
           data\_field2\_root = 'ddd'
           data\_field3\_root = 3
           data\_field4\_root = 4 )
              )
      CREATE BY \\\_CHILD FIELDS ( data\_field1\_child data\_field2\_child
        data\_field3\_child data\_field4\_child
      ) WITH VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #( ( %cid = 'cid3'
                               data\_field1\_child = 'zzz'
                               data\_field2\_child = 'yyy'
                               data\_field3\_child = 10
                               data\_field4\_child = 20 )
                           ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #( ( %cid = 'cid4'
                               data\_field1\_child = 'xxx'
                               data\_field2\_child = 'www'
                               data\_field3\_child = 30
                               data\_field4\_child = 40 )
                           ) )
              )
        FAILED   failed
        MAPPED mapped
        REPORTED reported.
    out->begin\_section( \`1st modification\`
      )->write\_html( '<u><b><i>Responses:</i></b></u>' ).
    display\_responses( ).
    COMMIT ENTITIES.
out->write\_html( '<u><b><i>Result of 1st modification:</i></b></u>' ).
    display\_dbtabs( ).
   "Modify operations on root and child entity
   MODIFY ENTITIES OF DEMO\_MANAGED\_ROOT\_CUSTOM
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
        CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root
        data\_field3\_root data\_field4\_root ) WITH value #(
        (  %cid = 'cid3'
           key\_field = 3
           data\_field1\_root = 'eee'
           data\_field2\_root = 'fff'
           data\_field3\_root = 5
           data\_field4\_root = 6 )
        (  %cid = 'cid4'
           key\_field = 4
           data\_field1\_root = 'ggg'
           data\_field2\_root = 'hhh'
           data\_field3\_root = 7
           data\_field4\_root = 8 )
              )
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
        UPDATE FIELDS ( data\_field1\_root data\_field2\_root
        data\_field3\_root data\_field4\_root ) WITH VALUE #(
          ( %cid\_ref = 'cid4'
            data\_field1\_root = 'iii'
            data\_field2\_root = 'jjj'
            data\_field3\_root = 9
            data\_field4\_root = 10  )
          ( key\_field = 6
            data\_field1\_root = 'kkk'
            data\_field2\_root = 'lll'
            data\_field3\_root = 11
            data\_field4\_root = 12 )
              )
    ENTITY DEMO\_MANAGED\_ROOT\_CUSTOM
        DELETE FROM VALUE #( ( %cid\_ref = 'cid3'  )
                             ( key\_field = 7  )
                           )
    ENTITY demo\_managed\_ROOT\_CUSTOM
       CREATE BY \\\_CHILD FIELDS ( data\_field1\_child data\_field2\_child
        data\_field3\_child data\_field4\_child ) WITH VALUE #(
         ( %cid\_ref = 'cid3'
           %target = VALUE #( ( %cid = 'cid5'
                                data\_field1\_child = 'vvv'
                                data\_field2\_child = 'uuu'
                                data\_field3\_child = 50
                                data\_field4\_child = 60 )
                                 ) )
         ( %cid\_ref = 'cid4'
           %target = VALUE #( ( %cid = 'cid6'
                                data\_field1\_child = 'ttt'
                                data\_field2\_child = 'sss'
                                data\_field3\_child = 70
                                data\_field4\_child = 80 )
                            ) )
              )
    ENTITY demo\_managed\_CHILD\_CUSTOM
        UPDATE FIELDS (
        data\_field1\_child data\_field2\_child
        data\_field3\_child data\_field4\_child ) WITH VALUE #(
         ( key\_field = 2
           data\_field1\_child = 'rrr'
           data\_field2\_child = 'qqq'
           data\_field3\_child = 90
           data\_field4\_child = 100 )
         ( key\_field = 9
           data\_field3\_child = 110
           data\_field4\_child = 120 )
           )
        FAILED   failed
        MAPPED mapped
        REPORTED reported.
    out->begin\_section( \`2nd modification\`
      )->write\_html( '<u><b><i>Responses:</i></b></u>' ).
    display\_responses( ).
    COMMIT ENTITIES.
out->write\_html( '<u><b><i>Result of 2nd modification:</i></b></u>' ).
    display\_dbtabs( ).
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
      ORDER BY key\_field
      INTO TABLE @FINAL(modifiy\_entity\_parent).
    SELECT \* FROM demo\_tab\_child\_2
      ORDER BY key\_field
      INTO TABLE @FINAL(modifiy\_entity\_child).
    out->write( modifiy\_entity\_parent
      )->write( modifiy\_entity\_child ).
  ENDMETHOD.
  METHOD display\_responses.
    IF mapped IS NOT INITIAL.
        out->write\_doc( \`MAPPED response:\`
          )->write( mapped ).
    ELSE.
        out->write\_doc( \`No MAPPED response.\` ).
    ENDIF.
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

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program.

The example covers multiple ABAP EML modify requests. Some of them are successful. For both, root and child entity, there are data sets defined that will cause an error.

As a consequence, apart from the mapping information, the responses for FAILED and REPORTED that are displayed in the output cover the information of the affected data sets for which errors occurred. Furthermore, tables display the data sets for which the create, update and delete operations were successful for both, root and child entity.