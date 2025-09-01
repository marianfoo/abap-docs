---
title: "ABAP EML - TYPE RESPONSE FOR"
description: |
  This example demonstrates the response parameters FAILED, MAPPED and REPORTED with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of a MODIFY statement trying to create new instances. Data model The CDS data model consists of the root ent
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_responses_2_abexa.htm"
abapFile: "abeneml_responses_2_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abeneml", "responses", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) → 

ABAP EML - TYPE RESPONSE FOR

This example demonstrates the response parameters FAILED, MAPPED and REPORTED with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of a MODIFY statement trying to create new instances.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD . Furthermore, it contains an association to an entity (DEMO\_MANAGED\_ASSOC) that is not part of the [composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"). Both associated entities are not used in the example.

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

For the above CDS behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available.

Source Code

REPORT demo\_rap\_eml\_responses\_2.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out    TYPE REF TO if\_demo\_output,
      ls\_map   TYPE RESPONSE FOR MAPPED   demo\_managed\_root,
      ls\_fail   TYPE RESPONSE FOR FAILED   demo\_managed\_root,
      ls\_report TYPE RESPONSE FOR REPORTED demo\_managed\_root.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_dbtabs
        IMPORTING title TYPE string,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    MODIFY demo\_tab\_root FROM TABLE @( VALUE #(
         ( key\_field = 4
           data\_field1\_root = 'www'
           data\_field2\_root = 'xxx' )
         (
          key\_field = 5
          data\_field1\_root = 'yyy'
          data\_field2\_root = 'zzz' )
         ) ).
    MODIFY ENTITY demo\_managed\_root
      CREATE SET FIELDS WITH VALUE #(
        ( %cid = 'cid1'
          key\_field = 1
          data\_field1\_root = 'aaa'
          data\_field2\_root = 'bbb' )
        ( %cid = 'cid2'
          key\_field = 2
          data\_field1\_root = 'ccc'
          data\_field2\_root = 'ddd' )
        ( %cid = 'cid3'
          key\_field = 3
          data\_field1\_root = 'eee'
          data\_field2\_root = 'fff' )
        ( %cid = 'cid4'
          key\_field = 4
          data\_field1\_root = 'ggg'
          data\_field2\_root = 'hhh' )
        ( %cid = 'cid5'
          key\_field = 5
          data\_field1\_root = 'iii'
          data\_field2\_root = 'jjj' )
         )
        FAILED   ls\_fail
        MAPPED   ls\_map
        REPORTED ls\_report.
    out->begin\_section( \`Demo for EML Responses\`
     )->write( \`Responses for modify operation:\` ).
    display\_responses( ).
    COMMIT ENTITIES.
    display\_dbtabs(
     \`Database table entries after modify operation\`
     ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root.
  ENDMETHOD.
  METHOD display\_dbtabs.
    SELECT \* FROM demo\_tab\_root
      INTO TABLE @DATA(dbtab) ORDER BY key\_field ASCENDING.
    out->next\_section( title
      )->write( dbtab ).
  ENDMETHOD.
  METHOD display\_responses.
    "ls\_mapped
    out->write( \`Response for MAPPED:\` ).
    TYPES: BEGIN OF ls\_mapped,
             cid       TYPE abp\_behv\_cid,
             key\_field TYPE i,
           END OF ls\_mapped.
    TYPES tt\_mapped TYPE TABLE OF ls\_mapped.
    DATA lt\_mapped TYPE tt\_mapped.
    LOOP AT ls\_map-demo\_managed\_root
      ASSIGNING FIELD-SYMBOL(<ls\_map>).
      APPEND VALUE #( cid       = <ls\_map>-%cid
                      key\_field =  <ls\_map>-%key-key\_field
                    ) TO lt\_mapped.
    ENDLOOP.
    out->write( lt\_mapped ).
    "ls\_failed
    out->write( \`Response for FAILED:\` ).
    TYPES: BEGIN OF ls\_failed,
             ls\_failed\_cause TYPE if\_abap\_behv=>t\_fail\_cause,
             cid             TYPE string,
             key\_field       TYPE i,
             update          TYPE abp\_behv\_flag,
             create          TYPE abp\_behv\_flag,
             delete          TYPE abp\_behv\_flag,
             assoc           TYPE abp\_behv\_flag,
           END OF ls\_failed.
    TYPES tt\_failed TYPE TABLE OF ls\_failed.
    DATA lt\_failed TYPE tt\_failed.
    LOOP AT ls\_fail-demo\_managed\_root
      ASSIGNING FIELD-SYMBOL(<ls\_fail>).
      APPEND VALUE #(  ls\_failed\_cause = <ls\_fail>-%fail-cause
                       cid        = <ls\_fail>-%cid
                       key\_field  =  <ls\_fail>-%key-key\_field
                       create     = <ls\_fail>-%create
                       update     = <ls\_fail>-%update
                       delete     = <ls\_fail>-%delete
                       assoc      = <ls\_fail>-%assoc-\_child
                    ) TO lt\_failed.
    ENDLOOP.
    out->write( lt\_failed ).
    "ls\_reported
    out->write( \`Response for REPORTED:\` ).
    TYPES: BEGIN OF ls\_reported,
             severity  TYPE if\_abap\_behv\_message=>t\_severity,
             cid       TYPE string,
             key\_field TYPE i,
             message   TYPE string,
           END OF ls\_reported.
    TYPES tt\_reported TYPE TABLE OF ls\_reported.
    DATA lt\_reported TYPE tt\_reported.
    LOOP AT ls\_report-demo\_managed\_root
      ASSIGNING FIELD-SYMBOL(<ls\_report>).
      APPEND VALUE #( cid       =  <ls\_report>-%cid
                      key\_field = <ls\_report>-%key-key\_field
                  message  = <ls\_report>-%msg->if\_message~get\_text( )
                      severity  = <ls\_report>-%msg->m\_severity
           ) TO lt\_reported.
    ENDLOOP.
    out->write( lt\_reported ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

An ABAP EML modify operation is meant to trigger the creation of instances using the keyword CREATE. It includes the response structures ls\_fail, ls\_map and ls\_report following the respective keywords FAILED, MAPPED and REPORTED for getting those responses. The structures are declared externally with TYPE RESPONSE FOR. The EML modify operation is preceded by an ABAP SQL modify operation that creates some entries in the database table directly. In doing so, the subsequent EML operation runs into errors regarding those entries because the same keys are used. Therefore, the instances with those keys cannot be created and finally not being saved to the database. The saving is triggered by the COMMIT ENTITIES. statement.

The instances that cannot be created are reflected in the response structures ls\_fail and ls\_report. The mapping information for the successfully created instances is available in ls\_map. To display all the responses in the output screen, the display\_responses method comprises the construction and filling of internal tables to hold the returned information for the entity demo\_managed\_root. The information provided in those internal tables is intentionally kept simple and limited. The table for FAILED includes the fail cause, content ID and key of the affected instance as well as the affected operation or association (which is indicated by the entry 01). The table for REPORTED comprises information about the severity of the incident, content ID and key as well as a message. The table for MAPPED includes the content ID and the corresponding key of the instance.

After displaying the responses, the output screen shows an internal table that is filled with the current entries of the database (using a SELECT statement in the display\_dbtabs method). It includes those entries whose creation has successfully been triggered by the EML modify operation as well as those entries having been created by the ABAP SQL statement.