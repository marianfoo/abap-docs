---
title: "ABAP EML - TYPE RESPONSE FOR"
description: |
  This example demonstrates the response parameters FAILED, MAPPED and REPORTED with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of a MODIFY statement trying to create new instances. Data model The CDS data model consists of the root ent
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_responses_2_abexa.htm"
abapFile: "abeneml_responses_2_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abeneml", "responses", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20TYPE%20RESPONSE%20FOR%2C%20ABENEML_RESPONSES_2_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - TYPE RESPONSE FOR

This example demonstrates the response parameters FAILED, MAPPED and REPORTED with a simple managed RAP BO. To show content for the responses, errors are intentionally produced in the context of a MODIFY statement trying to create new instances.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD.

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

Behavior implementation

For the above RAP behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_responses\_2 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      mapped   TYPE RESPONSE FOR MAPPED   demo\_managed\_root,
      failed   TYPE RESPONSE FOR FAILED   demo\_managed\_root,
      reported TYPE RESPONSE FOR REPORTED demo\_managed\_root.
    METHODS:
      initialize\_dbtabs,
      display\_dbtabs
        IMPORTING title TYPE string,
      display\_responses.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_responses\_2 IMPLEMENTATION.
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
      CREATE FIELDS ( key\_field data\_field1\_root
          data\_field2\_root ) WITH VALUE #(
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
        FAILED   failed
        MAPPED   mapped
        REPORTED reported.
    out->begin\_section( \`Demo for EML Responses\`
     )->write\_doc( \`Responses for modify operation:\` ).
    display\_responses( ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    display\_dbtabs(
     \`Database table entries after modify operation\`
     ).
  ENDMETHOD.
  METHOD display\_dbtabs.
    SELECT \* FROM demo\_tab\_root
      ORDER BY key\_field ASCENDING
      INTO TABLE @FINAL(dbtab) .
    out->next\_section( title
      )->write( dbtab ).
  ENDMETHOD.
  METHOD display\_responses.
    IF mapped IS NOT INITIAL.
      out->write\_doc( \`MAPPED response:\`
        )->write( mapped ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write\_doc( \`FAILED response:\`
        )->write( failed ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write\_doc( \`REPORTED response:\`
        )->write( reported ).
    ENDIF.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

An ABAP EML modify operation is meant to trigger the creation of instances using the keyword CREATE. It includes the response structures ls\_fail, ls\_map and ls\_report following the respective keywords FAILED, MAPPED and REPORTED for getting those responses. The structures are declared externally with TYPE RESPONSE FOR. The EML modify operation is preceded by an ABAP SQL modify operation that creates some entries in the database table directly. In doing so, the subsequent EML operation runs into errors regarding those entries because the same keys are used. Therefore, the instances with those keys cannot be created and finally not being saved to the database. The saving is triggered by the COMMIT ENTITIES. statement.

The instances that cannot be created are reflected in the response structures ls\_fail and ls\_report. The mapping information for the successfully created instances is available in ls\_map. To display all the responses in the output screen, the display\_responses method comprises the construction and filling of internal tables to hold the returned information for the entity demo\_managed\_root. The information provided in those internal tables is intentionally kept simple and limited. The table for FAILED includes the fail cause, content ID and key of the affected instance as well as the affected operation or association (which is indicated by the entry 01). The table for REPORTED comprises information about the severity of the incident, content ID and key as well as a message. The table for MAPPED includes the content ID and the corresponding key of the instance.

After displaying the responses, the output screen shows an internal table that is filled with the current entries of the database (using a SELECT statement in the display\_dbtabs method). It includes those entries whose creation has successfully been triggered by the EML modify operation as well as those entries having been created by the ABAP SQL statement.