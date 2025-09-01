  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)) → 

Using %pre / %tmp

This example demonstrates the use of %pre and %tmp with an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") in a [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenario.

Note that this example does not cover a productive business scenario for late numbering. It should be considered as giving an idea about the use of %pre and %tmp during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") and also about the options of using [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) and [%key](javascript:call_link\('abapderived_types_key.htm'\)) when referring to RAP BO instances during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM3.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM3
  as select from demo\_tab\_root\_3
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM3 is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

unmanaged implementation in class
  bp\_demo\_umanaged\_root\_late\_nu3 unique;
strict;
define behavior for DEMO\_UMANAGED\_ROOT\_LATE\_NUM3
late numbering
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU3. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following class is relevant for the example:

-   lcl\_buffer: Constitutes the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") which is an internal table in this example. It contains all fields of the database table and further fields that are used in the example, for example, the internal table also contains components [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) and [%cid](javascript:call_link\('abapderived_types_cid.htm'\)). Furthermore, there are components representing flags like changed and final\_key\_assigned. The first one is used to flag whether an instance has been created or changed and thus should be saved. The second is meant to specify whether final keys have been assigned to the instance.

The following methods are relevant for the example:

-   create: Creates the instances and writes it to the transactional buffer. In this case, a %pid as well as a preliminary value for [%key](javascript:call_link\('abapderived_types_key.htm'\)) is created for the instances.
-   update: Takes care of updating instances. Although not relevant for the example, the method covers different cases for which the transactional buffer is checked against the incoming entities, i. e. whether [%cid\_ref](javascript:call_link\('abapderived_types_cid_ref.htm'\)) is provided or not and if the update happens on already persisted instance or not.
-   prep\_root\_buffer: Takes of preparing the transactional buffer. In case of an update request on persisted instances, those instances are read from the database table into the transactional buffer.
-   [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)): Takes care of assigning the final keys. In this simple example, the final keys are assigned integers starting with 1. Furthermore, the [MAPPED LATE](javascript:call_link\('abaptype_response_for.htm'\)), which shows %pre and %tmp, and [REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)) response structures are filled. For demonstration purposes, the entries for both structures are store in two internal tables that are displayed in the output.
-   The [save](javascript:call_link\('abensaver_method_save.htm'\)), [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) and [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) methods take care of saving the entries in the transactional buffer to the database table or clearing the entries respectively.

Source Code

REPORT demo\_rap\_derived\_types\_latenu2.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: ls\_mapped TYPE STRUCTURE FOR MAPPED
                      demo\_umanaged\_root\_late\_num3.
    CLASS-DATA:
      out          TYPE REF TO if\_demo\_output,
      mapped TYPE RESPONSE FOR MAPPED EARLY
                    demo\_umanaged\_root\_late\_num3.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_mapped\_late,
      display\_reported\_late.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type components: \` &&
                        \`%pre / %tmp\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num3
       CREATE SET FIELDS
          WITH VALUE #(
            ( %cid = 'cid1' field1 = 'aaa' field2 = 'bbb'
              field3 = 10 field4 = 11 )
            ( %cid = 'cid2' field1 = 'bbb' field2 = 'ccc'
              field3 = 12 field4 = 13 )
            ( %cid = 'cid3' field1 = 'ddd' field2 = 'eee'
              field3 = 14 field4 = 15 )
            ( %cid = 'cid4' field1 = 'fff' field2 = 'ggg'
              field3 = 16 field4 = 17 )
            ( %cid = 'cid5' field1 = 'hhh' field2 = 'iii'
              field3 = 18 field4 = 19 )
            ( %cid = 'cid6' field1 = 'jjj' field2 = 'kkk'
              field3 = 20 field4 = 21 ) )
           MAPPED mapped
           FAILED DATA(failed)
           REPORTED DATA(reported).
      MODIFY ENTITY demo\_umanaged\_root\_late\_num3
       UPDATE FIELDS ( field1 field3 ) WITH VALUE #(
            ( %tky = mapped-demo\_umanaged\_root\_late\_num3\[ 1 \]-%tky
              field1 = 'up1' field3 = 100 )
            ( %pid = mapped-demo\_umanaged\_root\_late\_num3\[ 2 \]-%pid
              field1 = 'up2' field3 = 200 )
            ( %key = mapped-demo\_umanaged\_root\_late\_num3\[ 3 \]-%key
              field1 = 'up3' field3 = 300 ) )
           MAPPED DATA(mapped2)
           FAILED DATA(failed2)
           REPORTED DATA(reported2).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(itab)
    ORDER BY key\_field.
    out->write(
        \`Database table entries after the operations:\`
       )->write( itab
        ).
    display\_mapped\_late( ).
    display\_reported\_late( ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD display\_mapped\_late.
    TYPES: BEGIN OF mapped\_structure,
             pid       TYPE abp\_behv\_pid,
             tmp\_key   TYPE i,
             key\_field TYPE i,
           END OF mapped\_structure.
    TYPES mapped\_table\_type TYPE TABLE OF mapped\_structure.
    DATA mapped\_late\_table TYPE mapped\_table\_type.
    IF bp\_demo\_umanaged\_root\_late\_nu3=>mapped\_late\_table IS INITIAL.
      out->write( \`No MAPPED response information.\` ).
    ELSE.
      LOOP AT bp\_demo\_umanaged\_root\_late\_nu3=>mapped\_late\_table
        ASSIGNING FIELD-SYMBOL(<mapped>).
        APPEND VALUE #( pid = <mapped>-%pid
                        tmp\_key = <mapped>-%tmp-key\_field
                        key\_field = <mapped>-%key-key\_field
                      ) TO mapped\_late\_table.
      ENDLOOP.
      DELETE ADJACENT DUPLICATES FROM mapped\_late\_table
        COMPARING ALL FIELDS.
      out->write( \`MAPPED LATE responses in adjust\_numbers:\`
        )->write( mapped\_late\_table ).
    ENDIF.
  ENDMETHOD.
  METHOD display\_reported\_late.
    TYPES: BEGIN OF reported\_structure,
             severity  TYPE if\_abap\_behv\_message=>t\_severity,
             pid       TYPE abp\_behv\_pid,
             key\_field TYPE i,
             message   TYPE string,
           END OF reported\_structure.
    TYPES reported\_table\_type TYPE TABLE OF reported\_structure.
    DATA reported\_late\_table TYPE reported\_table\_type.
    IF bp\_demo\_umanaged\_root\_late\_nu3=>reported\_late\_table IS INITIAL.
      out->write( \`No REPORTED LATE responses.\` ).
    ELSE.
      LOOP AT bp\_demo\_umanaged\_root\_late\_nu3=>reported\_late\_table
        ASSIGNING FIELD-SYMBOL(<reported>).
        APPEND VALUE #( key\_field =  <reported>-%key-key\_field
                      message = <reported>-%msg->if\_message~get\_text( )
                        severity = <reported>-%msg->m\_severity
                        pid = <reported>-%pid
             ) TO reported\_late\_table.
      ENDLOOP.
      out->write( \`REPORTED LATE responses in adjust\_numbers:\`
      )->write( reported\_late\_table ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

There are two ABAP EML modify requests. The first creates several [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"), the second updates the newly created instances.

In the create request, %key is not specified. The create method takes care of creating %pid and %key for the instances.

The update request is implemented to show diverse options to refer to the instances that have not yet been persisted to the database. The reference is made using %tky, %pid and %key, which has a preliminary key value.

With a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement, the save sequence is triggered. The [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method takes care of assigning the final keys to the instances. In this example, the method simply adds an integer to the key. Furthermore, the above-mentioned internal tables in the global class are filled demonstrating how %pre and %tmp might be addressed. Finally, the save method saves the instances to the database table.

The output shows three tables:

1.  A table that displays the outcome of the RAP operations, i. e. the successfully saved entries in the database table.
2.  A table showing the [MAPPED LATE](javascript:call_link\('abaptype_response_for.htm'\)) information. Apart from the automatically generated %pid values in the pid field and the final keys %key in the key\_field field, the first three instances show an initial value for the field tmp\_key that represents the value for %tmp-key\_field. For the final three instances, tmp\_key includes the value that has been specified within the RAP create operation.
3.  A table showing the [REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)) information. Both mapped and reported information have been filled in the course of the adjust\_numbers method.