  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Using %pre / %tmp / %pky, ABENDERIVED_TYPES_PRE_TMP_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Using %pre / %tmp / %pky

This example demonstrates the use of %pre, %tmp and %pky with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenario.

Note that this example does not cover a production business scenario for late numbering. Instead it is intended to give an idea about the use of the BDEF derived type components.

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM3 is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class
  bp\_demo\_umanaged\_root\_late\_nu3 unique;
strict(2);
define behavior for DEMO\_UMANAGED\_ROOT\_LATE\_NUM3
late numbering
lock master
authorization master ( global )
{
  create;
  update;
  delete;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU3. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following class is relevant for the example:

-   lcl\_buffer: Constitutes the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") which is an internal table in this example. It contains all fields of the database table and further fields that are used in the example, for example, the internal table also contains the components [%pid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_pid.htm) and [%cid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid.htm). Furthermore, there are components representing flags like changed and final\_key\_assigned. The first one is used to flag whether an instance has been created or changed and thus should be saved. The second specifies whether final keys have been assigned to the instance.

The following methods are relevant for the example:

-   create: Creates the instances and writes them to the transactional buffer. In this case, a %pid as well as a preliminary value for [%key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_key.htm) is created for the instances.
-   update: Updates instances. Here, the use cases are covered when instances are updated that already have the final keys assigned and have not.
-   prep\_root\_buffer: Prepares the transactional buffer. In case of an update request on persisted instances, these instances are read from the database table into the transactional buffer.
-   [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm): Assigns the final keys. In this simple example, the final keys are assigned integers. Furthermore, the [MAPPED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm), which shows %pre and %tmp, and [REPORTED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) response structures are filled. For demonstration purposes, the entries for both structures are stored in two internal tables that are displayed in the output.
-   The [save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_save.htm), [cleanup](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_cleanup.htm) and [cleanup\_finalize](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsaver_class_cleanup_finalize.htm) methods save the entries in the transactional buffer to the database table or clearing the entries respectively.

Source Code   

REPORT demo\_rap\_derived\_types\_latenu2.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: ls\_mapped TYPE STRUCTURE FOR MAPPED
                      demo\_umanaged\_root\_late\_num3,
           BEGIN OF ls\_keys,
             pid       TYPE abp\_behv\_pid,
             tmp\_key   TYPE i,
             key\_field TYPE i,
           END OF ls\_keys.
    CLASS-DATA:
      out                    TYPE REF TO if\_demo\_output,
      mapped\_early           TYPE RESPONSE FOR MAPPED EARLY
                               demo\_umanaged\_root\_late\_num3,
      failed\_early           TYPE RESPONSE FOR FAILED EARLY
                               demo\_umanaged\_root\_late\_num3,
      reported\_early         TYPE RESPONSE FOR REPORTED EARLY
                               demo\_umanaged\_root\_late\_num3,
      lt\_mapped\_late\_content TYPE TABLE FOR MAPPED LATE
                               demo\_umanaged\_root\_late\_num3,
      lt\_keys                TYPE TABLE OF ls\_keys.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type components: \` &&
                        \`%pre / %tmp / %pky\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num3
       CREATE FIELDS ( field1 field2 field3 field4  )
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
              field3 = 20 field4 = 21 )
              )
           MAPPED mapped\_early
           FAILED failed\_early
           REPORTED reported\_early.
"Note: This is a non-draft scenario, hence, %pky can be used to refer
"to the preliminary keys and %pid (%pky contains %pid and %key).
"%tky could be used as well. It is even recommended that you use it
"since you are prepared for a potential switch to a draft scenario
"(here, %tky contains the same components as %pky, but if need be,
"also %is\_draft).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num3
     UPDATE FIELDS ( field1 field3 ) WITH VALUE #(
          ( %pky = mapped\_early-demo\_umanaged\_root\_late\_num3\[ 1 \]-%pky
            field1 = 'up1' field3 = 100 )
          ( %pky = mapped\_early-demo\_umanaged\_root\_late\_num3\[ 2 \]-%pky
            field1 = 'up2' field3 = 200 )
          ( %pky = mapped\_early-demo\_umanaged\_root\_late\_num3\[ 3 \]-%pky
            field1 = 'up3' field3 = 300 ) )
         FAILED failed\_early
         REPORTED reported\_early.
    COMMIT ENTITIES BEGIN RESPONSES FAILED FINAL(failed\_late)
     REPORTED FINAL(reported\_late).
    LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num3
      ASSIGNING FIELD-SYMBOL(<mapped\_early>).
      CONVERT KEY OF demo\_umanaged\_root\_late\_num3
        FROM TEMPORARY VALUE #( %pid = <mapped\_early>-%pid
                                %tmp = <mapped\_early>-%key )
        TO FINAL(lv\_final\_key).
      APPEND VALUE #( %pid = <mapped\_early>-%pid
                      %tmp = <mapped\_early>-%key
                      %key = lv\_final\_key )
                      TO lt\_mapped\_late\_content.
    ENDLOOP.
    COMMIT ENTITIES END.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3
    ORDER BY key\_field
    INTO TABLE @FINAL(itab).
    out->write(
        \`Database table entries after the operations:\`
       )->write( itab
        ).
    IF reported\_late IS NOT INITIAL.
      out->write\_doc( \`MAPPED LATE response:\`
        )->write( lt\_mapped\_late\_content ).
    ENDIF.
    IF failed\_late IS NOT INITIAL.
      out->write\_doc( \`FAILED LATE response:\`
        )->write( failed\_late ).
    ENDIF.
    IF reported\_late IS NOT INITIAL.
      out->write\_doc( \`REPORTED LATE response:\`
        )->write( reported\_late ).
    ENDIF.
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

There are two ABAP EML modify requests. The first creates multiple [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") and the second updates the new instances.

In the create request, %key is not specified. The create method creates %pid and %key for the instances.

The update request includes the modification of the previously created instances that have not yet been persisted to the database. The reference to the instances is made by using %pky. %pky contains %pid and the preliminary keys in %key. Note that this is a non-draft scenario, hence, %pky can be used. %tky could be used as well. It is even recommended that you use it since you are prepared for a potential switch to a draft scenario (here, %tky contains the same components as %pky but, if need be, it also includes %is\_draft).

The save sequence is triggered using a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) statement. In this case, the COMMIT ENTITIES variant is used with a CONVERT KEY OF statement to retrieve the preliminary keys of the instances for demonstration purposes.

The [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm) method assigns the final keys to the instances. In this example, the method simply adds an integer to the key. Furthermore, the internal tables in the global class mentioned above are filled demonstrating how %pre and %tmp might be addressed. Finally, the save method saves the instances to the database table.

The output shows three tables:

1.  A table that displays the outcome of the RAP operations, i. e. the successfully saved entries in the database table.
2.  A table showing the [MAPPED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) information.
3.  A table showing the [REPORTED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) information. Both mapped and reported information were filled in the course of the adjust\_numbers method.