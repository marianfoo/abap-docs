---
title: "Example for RAP Saver Methods"
description: |
  This example demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO. Data model The CDS data model consists of the root entity DEMO_UNMANAGED_ROOT and its child entity DEMO_UNMANAGED_CHILD. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define roo
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class_abexa.htm"
abapFile: "abenabp_saver_class_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "abenabp", "saver", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) →  [Examples for RAP Saver Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_saver_methods_abexas.htm) → 

Example for RAP Saver Methods

This example demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_ROOT and its child entity DEMO\_UNMANAGED\_CHILD.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_UNMANAGED\_ROOT
  as select from DEMO\_TAB\_ROOT\_3
  composition \[1..\*\] of DEMO\_UNMANAGED\_CHILD as \_child
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
define view entity DEMO\_UNMANAGED\_CHILD
  as select from DEMO\_TAB\_CHILD\_3
  association to parent DEMO\_UNMANAGED\_ROOT  
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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_ROOT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_root unique;
strict;
define behavior for DEMO\_UNMANAGED\_ROOT
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  association \_child { create; }
}
define behavior for DEMO\_UNMANAGED\_CHILD alias child
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_ROOT. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. Note: The ABP purposely includes only few handler method implementations since the focus is on the saver methods.

The class lsc\_demo\_unmanaged\_root is the RAP saver class that includes the following RAP saver methods:

Method

Details

finalize

Triggers any final calculations involving all BOs in the current LUW before the data gets saved to the database. In this example, the method is implemented in a way to do a calculation on a data field. field3 should be divided by 2. Since the field is of type i, a division by 2 with uneven numbers results in an error. In case of an error, the FAILED and reported parameters get filled. If the division is successful, field3 receives the result and a success message is included in the reported parameter for the particular instance. A log table (DEMO\_TAB\_SAVELOG) is then filled with contents of the failed (if available) and reported structures. The purpose of this log table is to show the returned messages of the finalize, check\_before\_save and save methods in the output.

check\_before\_save

Contains a consistency check. An instance should only get saved if the value of data field field4 does not exceed 100. Furthermore, the failed and reported parameters as well as the log table DEMO\_TAB\_SAVELOG are filled.

save

Saves the data from the transactional buffer to the database. The method is only called if the finalize, check\_before\_save and adjust\_numbers methods have been processed successfully. Once the data has been saved, a success message is included in the reported parameter and the log table DEMO\_TAB\_SAVELOG.

cleanup

Clears the transactional buffer. The method is called if the save method has been processed.

cleanup\_finalize

Clears the transactional buffer. The method is called if issues arise in the finalize and check\_before\_save methods.

Source Code

REPORT demo\_rap\_unm\_saver\_methods.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      failed   TYPE RESPONSE FOR FAILED   demo\_unmanaged\_root,
      reported TYPE RESPONSE FOR REPORTED demo\_unmanaged\_root,
      mapped   TYPE RESPONSE FOR MAPPED demo\_unmanaged\_root.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_responses,
      get\_saver\_response,
      get\_saver\_meth,
      get\_db\_entries.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
         \`RAP saver methods with an unmanaged RAP BO\`
      )->line(
      )->next\_section( \`1st EML MODIFY operation\` ).
    MODIFY ENTITY demo\_unmanaged\_root
     CREATE FROM VALUE #(
        ( %cid = 'cid1'
          key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_2'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 2
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 4
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_3'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_4'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 5
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 6
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid3'
          key\_field = 3
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_5'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_6'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 7
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 8
          %control-field4 = if\_abap\_behv=>mk-on )
          )
        FAILED   failed
        REPORTED reported
        MAPPED mapped.
    IF failed-demo\_unmanaged\_root IS NOT INITIAL
    AND reported-demo\_unmanaged\_root IS NOT INITIAL.
      out->write\_html( '<b>Responses for the operation</b>' ).
      display\_responses(  ).
    ENDIF.
    COMMIT ENTITIES.
    get\_saver\_meth( ).
    get\_saver\_response( ).
    get\_db\_entries( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
       )->next\_section( \`2nd EML MODIFY operation\` ).
    MODIFY ENTITY demo\_unmanaged\_root
     CREATE FROM VALUE #(
        ( %cid = 'cid4'
          key\_field = 4
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_7'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_8'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 10
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 102
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid5'
          key\_field = 5
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_9'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_10'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 12
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 14
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid6'
          key\_field = 6
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_11'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_12'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 16
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 104
          %control-field4 = if\_abap\_behv=>mk-on )
          )
        FAILED   failed
        REPORTED reported
        MAPPED mapped.
    IF failed-demo\_unmanaged\_root IS NOT INITIAL
    AND reported-demo\_unmanaged\_root IS NOT INITIAL.
      out->write\_html( '<b>Responses for the operation</b>' ).
      display\_responses(  ).
    ENDIF.
    COMMIT ENTITIES.
    get\_saver\_meth( ).
    get\_saver\_response( ).
    get\_db\_entries( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->next\_section( \`3rd EML MODIFY operation\` ).
    MODIFY ENTITY demo\_unmanaged\_root
     CREATE FROM VALUE #(
        ( %cid = 'cid7'
          key\_field = 7
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_13'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_14'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 18
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 20
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid8'
          key\_field = 8
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_15'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_16'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 22
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 24
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid9'
          key\_field = 9
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_17'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_18'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 26
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 28
          %control-field4 = if\_abap\_behv=>mk-on ) )
        FAILED   failed
        REPORTED reported
        MAPPED mapped.
    IF failed-demo\_unmanaged\_root IS NOT INITIAL
    AND reported-demo\_unmanaged\_root IS NOT INITIAL.
      out->write\_html( '<b>Responses for the operation</b>' ).
      display\_responses(  ).
    ENDIF.
    COMMIT ENTITIES.
    get\_saver\_meth( ).
    get\_saver\_response( ).
    get\_db\_entries( ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
    DELETE FROM demo\_tab\_savelog.
  ENDMETHOD.
  METHOD display\_responses.
    "FAILED
    TYPES: BEGIN OF failed\_structure,
             fail\_cause TYPE if\_abap\_behv=>t\_fail\_cause,
             cid        TYPE string,
             key\_field  TYPE i,
             update     TYPE abp\_behv\_flag,
             create     TYPE abp\_behv\_flag,
             delete     TYPE abp\_behv\_flag,
             assoc      TYPE abp\_behv\_flag,
           END OF failed\_structure.
    TYPES failed\_table\_type TYPE TABLE OF failed\_structure.
    DATA failed\_table\_root TYPE failed\_table\_type.
    DATA failed\_table\_child TYPE failed\_table\_type.
    LOOP AT failed-demo\_unmanaged\_root
      ASSIGNING FIELD-SYMBOL(<fail>).
      APPEND VALUE #(  fail\_cause = <fail>-%fail-cause
                       cid       = <fail>-%cid
                       key\_field =  <fail>-%key-key\_field
                       create = <fail>-%create
                       update = <fail>-%update
                       delete = <fail>-%delete
                       assoc  = <fail>-%assoc-\_child
                      ) TO failed\_table\_root.
    ENDLOOP.
    out->write\_text(
             \`FAILED response:\`
             )->write( failed\_table\_root ).
    "REPORTED
    TYPES: BEGIN OF reported\_structure,
             severity  TYPE if\_abap\_behv\_message=>t\_severity,
             cid       TYPE string,
             key\_field TYPE i,
             message   TYPE string,
           END OF reported\_structure.
    TYPES reported\_table\_type TYPE TABLE OF reported\_structure.
    DATA reported\_table TYPE reported\_table\_type.
    DATA reported\_table\_child TYPE reported\_table\_type.
    LOOP AT reported-demo\_unmanaged\_root
      ASSIGNING FIELD-SYMBOL(<reported>).
      APPEND VALUE #( cid      =  <reported>-%cid
                      key\_field =  <reported>-%key-key\_field
                      message = <reported>-%msg->if\_message~get\_text( )
                      severity = <reported>-%msg->m\_severity
           ) TO reported\_table.
    ENDLOOP.
    out->write\_text(
              \`REPORTED response:\`
               )->write( reported\_table ).
  ENDMETHOD.
  METHOD get\_saver\_meth.
    out->write\_html( '<b>a) Saver methods called</b>'
     )->write( data = bp\_demo\_unmanaged\_root=>saver\_meth\_called
               name = \`Saver methods\` ).
    CLEAR bp\_demo\_unmanaged\_root=>saver\_meth\_called.
  ENDMETHOD.
  METHOD get\_saver\_response.
  SELECT saver\_method, key\_field, fail\_cause, msg
    FROM demo\_tab\_savelog
    INTO TABLE @DATA(saver\_response).
    out->write\_html(
        '<b>b) Saver methods responses</b>'
        )->write( saver\_response ).
    CLEAR saver\_response.
    DELETE FROM demo\_tab\_savelog.
  ENDMETHOD.
  METHOD get\_db\_entries.
    SELECT \* FROM demo\_tab\_root\_3 INTO TABLE @DATA(db\_tab)
    ORDER BY key\_field.
    IF db\_tab IS INITIAL.
      out->write\_html(
      '<b>DB table entries after the operation:</b>'
    )->write( 'The database table is initial. No entries available.' ).
     ELSE.
      out->write\_html(
       '<b>c) Database table entries after the operation:</b>'
        )->write( db\_tab ).
    ENDIF.
    CLEAR db\_tab.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program.

The example demonstrates three different ABAP EML MODIFY requests. Each of the MODIFY requests includes CREATE operations to create three instances. COMMIT ENTITIES statements trigger the save sequence.

1.  First MODIFY request: The finalize method is not processed successfully which prevents the data from being saved.
2.  Second MODIFY request: The finalize method is processed successfully while the check\_before\_save method is not. The data is not saved.
3.  Third MODIFY request: Both finalize and check\_before\_save method are processed successfully. As a consequence, the save method is called and the data is saved to the database table.

The output shows three sections for each MODIFY request:

-   A log table including the saver methods that have been called.
-   A log table including information that has been returned for failed and reported.
-   A table including the database table entries after the CREATE operations. However, the output of the first two MODIFY statements does not show the table since the CREATE operations cannot be processed successfully on purpose.