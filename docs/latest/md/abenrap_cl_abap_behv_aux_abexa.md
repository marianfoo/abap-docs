---
title: "Used artifacts in the example"
description: |
  What CDS view BDEF Behavior Pool (ABP) Notes Base RAP business object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm 'Glossary Entry') DEMO_EXT_M DEMO_EXT_M CCIMP include The CDS data model only consists of one node constituting the root entity. The BDEF
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cl_abap_behv_aux_abexa.htm"
abapFile: "abenrap_cl_abap_behv_aux_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abenrap", "abap", "behv", "aux", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_other.htm) →  [RAP-Related System Classes and Functionality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_system_classes.htm) →  [CL\_ABAP\_BEHV\_AUX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_cl_abap_behv_aux.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Getting%20RAP%20Context%20Information%20Using%20CL_ABAP_BEHV_AUX%2C%20ABENRAP_CL_ABAP_BEHV_AUX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

Getting RAP Context Information Using CL\_ABAP\_BEHV\_AUX

This example demonstrates the use of methods of the class CL\_ABAP\_BEHV\_AUX by focusing on the filling of the specific parameters in multiple contexts.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and focuses on specific RAP aspects. For example, some [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") implementations might be empty. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Used artifacts in the example

What

CDS view

BDEF

Behavior Pool (ABP)

Notes

Base [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry")

DEMO\_EXT\_M

DEMO\_EXT\_M

CCIMP include

The CDS data model only consists of one node constituting the root entity.
The BDEF defines a managed RAP BO. It is also defined as extensible.
Since it is a simple example serving demonstration purposes, the RAP handler methods in the ABP do not contain any meaningful implementations. Each method implementation contains calls for the methods get\_current\_context and get\_current\_handler\_kind. The return values of the method parameters are stored in a [nested structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennested_structure_glosry.htm "Glossary Entry") in the global class of the ABP and added to an internal table for displaying purposes.

[RAP BO interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry")

DEMO\_INTF\_M

DEMO\_INTF\_M

 

The interface BDEF projects the original RAP BO.

RAP BO interface extension

 

DEMO\_INTF\_EXT\_M

The BDEF extension extends the RAP BO via its interface. It addresses the root node by its interface name. It adds one extension action to the RAP BO which is implemented in the extension ABP. This action simply updates the value of a specific field with a default value. Additionally, the methods in the extension ABP contains similar code snippets for method calls as mentioned above. CCIMP include

[RAP projection business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")

DEMO\_PROJ\_M

DEMO\_PROJ\_M

 

The CDS projection view is based on the CDS view of the base BO's CDS view (the projected entity) and exposes only a subset of elements.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_cl\_abap\_behv\_aux DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_cl\_abap\_behv\_aux IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: cl\_abap\_behv\_aux\`
    )->write\_doc( \`<b>1) Create operation directly \` &&
                  \`on the root entity</b>\` ).
    MODIFY ENTITIES OF demo\_ext\_m
      ENTITY Root
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #( ( %cid = 'cid1'
                      key\_field = 1
                      field1 = 'aaa'
                      field2 = 'bbb'
                      field3 = 10
                      field4 = 11 )
                    ( %cid = 'cid2'
                      key\_field = 2
                      field1 = 'ccc'
                      field2 = 'ddd'
                      field3 = 20
                      field4 = 21 ) )
      MAPPED FINAL(m1)
      FAILED FINAL(f1)
      REPORTED FINAL(r1).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_root).
    out->write( create\_root
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    out->write\_doc( \`<b>2) Create operation on the root \` &&
                  \`entity via interface</b>\` ).
    "Creating instances of the root entity via the interface
    MODIFY ENTITIES OF demo\_intf\_m
      ENTITY root\_interface
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #( ( %cid = 'cid3'
                      key\_field = 3
                      field1 = 'eee'
                      field2 = 'fff'
                      field3 = 30
                      field4 = 31 )
                    ( %cid = 'cid4'
                      key\_field = 4
                      field1 = 'ggg'
                      field2 = 'hhh'
                      field3 = 40
                      field4 = 41 ) )
       MAPPED FINAL(map2)
       FAILED FINAL(f2)
       REPORTED FINAL(r2).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(create\_via\_itf).
    out->write( create\_via\_itf
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    out->write\_doc( \`<b>3) Action execution via RAP BO \` &&
                  \`interface extension</b>\` ).
    "Executing an action via RAP BO interface extension
    MODIFY ENTITIES OF demo\_intf\_m
       ENTITY root\_interface
       EXECUTE set\_value\_ext
       FROM VALUE #( ( key\_field = 1 )
                     ( key\_field = 2 )
                     ( key\_field = 3 )
                     ( key\_field = 4 ) )
       MAPPED FINAL(m3)
       FAILED FINAL(f3)
       REPORTED FINAL(r3).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM  demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(action\_via\_bo\_intf).
    out->write( action\_via\_bo\_intf
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table
    )->line( ).
    CLEAR bp\_demo\_ext\_m=>behv\_aux\_table.
    out->write\_doc( \`<b>4) Create operation on the root \` &&
                  \`entity via a projection</b>\` ).
    "Creating instances of the root entity via a projection
    "Note that the projection view has only a subset of fields.
    MODIFY ENTITIES OF demo\_proj\_m
       ENTITY proj
       CREATE FIELDS ( key\_field field1 field2 )
       WITH VALUE #( ( %cid = 'cid5'
                       key\_field = 5
                       field1 = 'iii'
                       field2 = 'jjj' )
                     ( %cid = 'cid6'
                       key\_field = 6
                       field1 = 'kkk'
                       field2 = 'lll' ) )
        MAPPED FINAL(m4)
        FAILED FINAL(f4)
        REPORTED FINAL(r4).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM demo\_tab\_root\_5
      ORDER BY key\_field INTO TABLE @FINAL(create\_via\_proj).
    out->write( create\_via\_proj
    )->write( bp\_demo\_ext\_m=>behv\_aux\_table ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object, the RAP BO interface and RAP projection BO from an ABAP class and performs the following steps:

1.  Create operation directly on the root entity
    
    Instances are created directly on the root entity. The instances are saved to the database table whose entries are displayed. Additionally, the outcome of setting the parameters when calling the methods of class CL\_ABAP\_BEHV\_AUX is displayed. This is also true for the following steps.
    
2.  Create operation on the root entity via interface
    
    More instances are created on the root entity, however, with an ABAP EML MODIFY request via the RAP BO interface. Hence, the from\_interface parameter is filled after calling the get\_current\_context method.
    
3.  Action execution via RAP BO interface extension
    
    An action which is implemented in an extension ABP is called via a RAP BO interface extension. This method simply updates the value of a specific field. The output of the method calls demonstrates that also methods of the base BO's ABP are called. The context for in\_local\_mode is true in this case.
    
4.  Create operation on the root entity via a projection
    
    More instances are created on the root entity, however, with an ABAP EML MODIFY request via the RAP BO projection. Hence, the from\_projection parameter is filled after calling the get\_current\_context method.