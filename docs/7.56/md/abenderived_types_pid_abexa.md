---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_UMANAGED_ROOT_LATE_NUM. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.label: 'CDS view entity, RAP unmanaged, draft' define root view entity DEMO_UNMANAGED_ROOT_DRAFT as select from DEMO_TAB_ROOT_4 compositio
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_pid_abexa.htm"
abapFile: "abenderived_types_pid_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenderived", "pid", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_abexas.htm) → 

Using %pid

This example demonstrates the use of %pid with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenario.

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP unmanaged, draft'
define root view entity DEMO\_UNMANAGED\_ROOT\_DRAFT
  as select from DEMO\_TAB\_ROOT\_4
  composition \[1..\*\] of DEMO\_UNMANAGED\_CHILD\_DRAFT as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        @Semantics.systemDateTime.lastChangedAt: true
        crea\_date\_time,
        @Semantics.systemDateTime.localInstanceLastChangedAt: true
        lchg\_date\_time,
        \_child
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_umanaged\_root\_late\_num unique;
strict;
define behavior for DEMO\_UMANAGED\_ROOT\_LATE\_NUM
lock master
authorization master ( instance )
late numbering
{
  create;
  update;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NUM. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See more details on the implementation in the example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencommit_entities_beginend_abexa.htm).

Source Code

REPORT demo\_rap\_derived\_types\_pid.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: ls\_mapped TYPE STRUCTURE FOR MAPPED
                      demo\_umanaged\_root\_late\_num.
    CLASS-DATA:
      out          TYPE REF TO if\_demo\_output,
      mapped\_early TYPE RESPONSE FOR MAPPED EARLY
                    demo\_umanaged\_root\_late\_num,
      lt\_mapped\_keys  TYPE TABLE OF ls\_mapped.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: \` &&
                        \`%pid\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num
       CREATE SET FIELDS WITH VALUE #(
              ( %cid = 'cid1' field1 = 'aaa' field2 = 'bbb'
                              field3 = 10 field4 = 11  )
              ( %cid = 'cid2' field1 = 'ccc' field2 = 'ddd'
                              field3 = 20 field4 = 21  )
              ( %cid = 'cid3' field1 = 'eee' field2 = 'fff'
                              field3 = 30 field4 = 31 )
              )
        MAPPED mapped\_early.
    display\_responses( ).
    COMMIT ENTITIES BEGIN.
    LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num
      ASSIGNING FIELD-SYMBOL(<mapped\_early>).
      CONVERT KEY OF demo\_umanaged\_root\_late\_num
        FROM <mapped\_early>-%pid
        TO DATA(lv\_root\_key).
      APPEND VALUE #( %cid = <mapped\_early>-%cid
                      %pid = <mapped\_early>-%pid
                      %key = lv\_root\_key )
                      TO lt\_mapped\_keys.
    ENDLOOP.
    COMMIT ENTITIES END.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3
    INTO TABLE @DATA(db\_tab\_entries).
    out->write\_html( \`<b>Mapped keys:</b>\`
      )->write( lt\_mapped\_keys
      )->write\_html(
  \`<b>Database table entries after RAP operations with final keys:</b>\`
      )->write( db\_tab\_entries
      )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
METHOD display\_responses.
      "MAPPED
       TYPES: BEGIN OF mapped\_structure,
        cid TYPE abp\_behv\_cid,
        pid TYPE abp\_behv\_pid,
        key\_field type i,
      END OF mapped\_structure.
      TYPES mapped\_table\_type TYPE TABLE OF mapped\_structure.
      DATA: mapped\_early\_tab TYPE mapped\_table\_type,
            mapped\_late\_tab TYPE mapped\_table\_type.
      LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num
      ASSIGNING FIELD-SYMBOL(<mapped>).
              APPEND VALUE #( cid       = <mapped>-%cid
                              pid       = <mapped>-%pid
                              key\_field =  <mapped>-%key-key\_field
                            ) TO mapped\_early\_tab.
      ENDLOOP.
     "Display responses
     IF mapped\_early\_tab IS NOT INITIAL.
     out->write\_html( \`<b>MAPPED EARLY responses of RAP operations</b>\`
       )->write( mapped\_early\_tab ).
     ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

There is one ABAP EML modify request that creates several [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). Here, the keys are left empty because a preliminary ID %pid is assigned in the course of the create method in the behavior pool.

With a [COMMIT ENTITIES BEGIN ... END](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapemlcommit_entities_late.htm) statement that includes a [CONVERT KEY OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_key.htm) statement, the instances are saved to the database table. The [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm) method takes care of assigning the final keys to the instances. With the help of the CONVERT KEY OF statement, the complete mapping information for the instances is available and an internal table is set up to show the instances' values for [%cid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_cid.htm), %pid and the final key values.

The output shows two tables for the mapping information. The first one includes the [MAPPED EARLY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) mapping information that shows initial values for the key. The second one shows an internal table that was constructed with the help of the CONVERT KEY OF statement that gets the mapping information including the final key values. Another table shows the database table entries after the create operation.