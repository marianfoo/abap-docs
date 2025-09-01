---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_UMANAGED_ROOT_LATE_NUM. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.label: 'CDS view entity, RAP unmanaged, draft' define root view entity DEMO_UNMANAGED_ROOT_DRAFT as select from DEMO_TAB_ROOT_4 compositio
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_pid_abexa.htm"
abapFile: "abenderived_types_pid_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "types", "abenderived", "pid", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Using %pid, ABENDERIVED_TYPES_PID_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

Using %pid

This example demonstrates the use of %pid with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenario.

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_umanaged\_root\_late\_num unique;
strict(2);
define behavior for DEMO\_UMANAGED\_ROOT\_LATE\_NUM
lock master
authorization master ( global )
late numbering
{
  create;
  update;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NUM. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See more details on the implementation in the example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommit_entities_beginend_abexa.htm).

Source Code   

REPORT demo\_rap\_derived\_types\_pid.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out            TYPE REF TO if\_demo\_output,
      mapped\_early   TYPE RESPONSE FOR MAPPED EARLY
                      demo\_umanaged\_root\_late\_num,
      lt\_mapped\_late TYPE TABLE FOR MAPPED LATE
                       demo\_umanaged\_root\_late\_num.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: \` &&
                        \`%pid\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num
       CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
              ( %cid = 'cid1' field1 = 'aaa' field2 = 'bbb'
                              field3 = 10 field4 = 11  )
              ( %cid = 'cid2' field1 = 'ccc' field2 = 'ddd'
                              field3 = 20 field4 = 21  )
              ( %cid = 'cid3' field1 = 'eee' field2 = 'fff'
                              field3 = 30 field4 = 31 )
              )
        MAPPED mapped\_early.
     IF mapped\_early IS NOT INITIAL.
         out->write\_doc( \`MAPPED EARLY response:\`
           )->write( mapped\_early ).
     ENDIF.
    COMMIT ENTITIES BEGIN.
    LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num
      ASSIGNING FIELD-SYMBOL(<mapped\_early>).
      CONVERT KEY OF demo\_umanaged\_root\_late\_num
        FROM <mapped\_early>-%pid
        TO FINAL(lv\_root\_key).
      APPEND VALUE #( %pid = <mapped\_early>-%pid
                      %key = lv\_root\_key
                      )
                      TO lt\_mapped\_late.
    ENDLOOP.
    COMMIT ENTITIES END.
     IF lt\_mapped\_late IS NOT INITIAL.
         out->write\_doc( \`MAPPED LATE response:\`
           )->write( lt\_mapped\_late ).
     ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM demo\_tab\_root\_3
      INTO TABLE @FINAL(db\_tab\_entries).
    out->write\_html(
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
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

There is one ABAP EML modify request that creates several [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). Here, the keys are left empty because a preliminary ID %pid is assigned in the course of the create method in the behavior pool.

With a [COMMIT ENTITIES BEGIN ... END](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm) statement, which includes a [CONVERT KEY OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_key.htm) statement, the instances are saved to the database table. The [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm) method assigns the final keys to the instances. Using the CONVERT KEY OF statement, the key information for the instances is retrieved.

The output shows two tables for the mapping information. The first one includes the [MAPPED EARLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) mapping information that shows initial values for the key. The second one shows the [MAPPED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) mapping information including the final keys. Note that %tmp is not used and relevant in this scenario, hence, %tmp shows initial values. Another table shows the database table entries after the create operation.