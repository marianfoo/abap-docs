---
title: "Checking RAP Transactional Phases"
description: |
  This example demonstrates the use of the methods GET_CURRENT_PHASE and GET_CURRENT_HANDLER_KIND of the class CL_ABAP_BEHV_AUX. Data model The CDS data model consists of the root entity DEMO_UMANAGED_ROOT_LATE_NUM2. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define roo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cl_abap_behv_aux_ph_abexa.htm"
abapFile: "abenrap_cl_abap_behv_aux_ph_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abenrap", "abap", "behv", "aux", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_system_classes.htm) →  [CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_cl_abap_behv_aux.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checking%20RAP%20Transactional%20Phases%2C%20ABENRAP_CL_ABAP_BEHV_AUX_PH_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Checking RAP Transactional Phases

This example demonstrates the use of the methods GET\_CURRENT\_PHASE and GET\_CURRENT\_HANDLER\_KIND of the class CL\_ABAP\_BEHV\_AUX.

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM2.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_umanaged\_root\_late\_num2
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of demo\_umanaged\_child\_late\_num2 as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM2 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class
bp\_demo\_umanaged\_root\_late\_nu2 unique;
strict(2);
define behavior for demo\_umanaged\_root\_late\_num2
lock master
authorization master ( global )
late numbering
{
  create;
  update;
  delete;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NU2. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_transaction\_phases DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed\_early TYPE RESPONSE FOR
        FAILED EARLY demo\_umanaged\_root\_late\_num2,
      failed\_late  TYPE RESPONSE FOR
        FAILED LATE demo\_umanaged\_root\_late\_num2.
    METHODS:
      initialize\_dbtabs,
      display\_dbtab\_entries,
      display\_phases.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_transaction\_phases IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: RAP Transactional Phases\` ).
    APPEND VALUE #( phase    = cl\_abap\_behv\_aux=>get\_current\_phase( )
                    meth\_log = \`No handler/saver method. Outside of\` &&
                    \` RAP transactional phases.\` )
      TO bp\_demo\_umanaged\_root\_late\_nu2=>phases.
    display\_phases( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`RAP create operation including a RAP BO \` &&
    \`instance that fails in the finalize method\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid1'
          field1 = 'create\_1'
          field2 = 'create\_2'
          field3 = 55
          field4 = 55 ) )
     FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`Successful RAP create operation\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid2'
          field1 = 'create\_3'
          field2 = 'create\_4'
          field3 = 50
          field4 = 55 ) )
     FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`RAP create operation including a RAP BO \` &&
    \`instance that fails in the check\_before\_save method\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid3'
          field1 = 'create\_5'
          field2 = 'create\_6'
          field3 = 100
          field4 = 200 ) )
      FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
    out->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section( \`Successful RAP create operation\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num2
     CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
        ( %cid = 'cid4'
          field1 = 'create\_7'
          field2 = 'create\_8'
          field3 = 100
          field4 = 20 ) )
      FAILED failed\_early.
    COMMIT ENTITIES
      RESPONSE OF demo\_umanaged\_root\_late\_num2 FAILED failed\_late.
    IF sy-subrc <> 0.
      out->write(
        \`ERROR: An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_phases( ).
    display\_dbtab\_entries( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD display\_dbtab\_entries.
    SELECT key\_field, field1, field2, field3, field4
       FROM demo\_tab\_root\_3 ORDER BY key\_field
       INTO TABLE @DATA(db\_tab).
    out->write( \`Database table entries after RAP operation:\`
    )->write( db\_tab ).
  ENDMETHOD.
  METHOD display\_phases.
    out->write( \`Transactional phases log table:\`
    )->write( bp\_demo\_umanaged\_root\_late\_nu2=>phases ).
    CLEAR bp\_demo\_umanaged\_root\_late\_nu2=>phases.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The example contains four RAP create operations using an ABAP EML MODIFY statement:

-   Two RAP create operations fail. One operation intentionally fails in the [finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_finalize.htm) [RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). Another operations fails in the [check\_before\_save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_check_before_save.htm) method.
-   Two RAP create operations are successful.
-   The example is implemented in a way that in the RAP handler and saver methods a log table is filled. The log table includes, among other things, information about the current RAP transactional phase (retrieved using CL\_ABAP\_BEHV\_AUX=>GET\_CURRENT\_PHASE) and the current handler kind (retrieved using CL\_ABAP\_BEHV\_AUX=>GET\_CURRENT\_HANDLER\_KIND).
-   The log table and the database table entries as result of the RAP create operations are displayed.
-   The log table for the failed instances shows that the [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry") is not reached, only the [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and the [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry"). The RAP transaction is concluded with the [RAP cleanup phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cleanup_phase_glosry.htm "Glossary Entry") demonstrated by the successful RAP create operations.