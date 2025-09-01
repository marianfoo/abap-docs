  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommon_eml_elements.htm) →  [ABAP EML - response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) →  [Examples for Responses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_responses_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20Responses%20%28Dynamic%20Forms%20of%20ABAP%20EML%20Statements%29%2C%20ABENEML_RESPONSES_DYN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - Responses (Dynamic Forms of ABAP EML Statements)

This example demonstrates responses for the dynamic form of the ABAP EML MODIFY and READ statements with a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT
  as select from demo\_tab\_root
  composition \[1..1\] of DEMO\_MANAGED\_CHILD as \_child
  {      
    key demo\_tab\_root.key\_field,
        demo\_tab\_root.data\_field1\_root,
        demo\_tab\_root.data\_field2\_root,
        \_child
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD
  as select from demo\_tab\_child
  association to parent DEMO\_MANAGED\_ROOT as \_parent  
    on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key demo\_tab\_child.key\_field,
        demo\_tab\_child.data\_field1\_child,
        demo\_tab\_child.data\_field2\_child
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root unique;
strict ( 2 );
define behavior for DEMO\_MANAGED\_ROOT
persistent table demo\_tab\_root
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field ( readonly : update ) key\_field;
}
define behavior for DEMO\_MANAGED\_CHILD alias child
persistent table demo\_tab\_child
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly : update ) key\_field;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") created.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_responses\_dyn DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed\_dyn   TYPE abp\_behv\_response\_tab,
      reported\_dyn TYPE abp\_behv\_response\_tab,
      mapped\_dyn   TYPE abp\_behv\_response\_tab,
      failed\_tab   TYPE TABLE FOR FAILED demo\_managed\_root,
      reported\_tab TYPE TABLE FOR REPORTED demo\_managed\_root,
      mapped\_tab   TYPE TABLE FOR MAPPED demo\_managed\_root.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_responses\_dyn IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
               \`Responses for dynamic forms of ABAP EML Statements\`
                   ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->begin\_section(
      \`Responses for the dynamic form MODIFY ENTITIES OPERATIONS\`
                ).
    DATA: op\_tab           TYPE abp\_behv\_changes\_tab,
          create\_root\_tab  TYPE TABLE FOR CREATE demo\_managed\_root,
          update\_root\_tab  TYPE TABLE FOR UPDATE demo\_managed\_root,
          delete\_root\_tab  TYPE TABLE FOR DELETE demo\_managed\_root,
          cba\_tab          TYPE TABLE FOR CREATE
                              demo\_managed\_root\\\_child,
          update\_child\_tab TYPE TABLE FOR UPDATE demo\_managed\_child,
          delete\_child\_tab TYPE TABLE FOR DELETE demo\_managed\_child.
    create\_root\_tab = VALUE #(
                ( %cid = 'cid1'
                  key\_field = 1
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'aaa'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'bbb'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on )
                ( %cid = 'cid2'
                  key\_field = 2
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'ccc'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'ddd'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on )
                ( %cid = 'cid3'
                  key\_field = 3
                  %control-key\_field = if\_abap\_behv=>mk-on
                  data\_field1\_root = 'eee'
                  %control-data\_field1\_root = if\_abap\_behv=>mk-on
                  data\_field2\_root = 'fff'
                  %control-data\_field2\_root = if\_abap\_behv=>mk-on ) ).
    update\_root\_tab = VALUE #(
              ( %cid\_ref = 'cid2'
                data\_field1\_root = 'GGG'
                %control-data\_field1\_root = if\_abap\_behv=>mk-on
                data\_field2\_root = 'HHH'
                %control-data\_field2\_root = if\_abap\_behv=>mk-on ) ).
    cba\_tab = VALUE #(
                ( %cid\_ref = 'cid1'
                  %target = VALUE #( (
                    %cid = 'child\_cid1'
                    data\_field1\_child = 'iii'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'jjj'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on
                ) ) )
                ( %cid\_ref = 'cid2'
                  %target = VALUE #( (
                    %cid = 'child\_cid2'
                    data\_field1\_child = 'kkk'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'lll'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on
                ) ) )
                ( %cid\_ref = 'cid3'
                  %target = VALUE #( (
                    %cid = 'child\_cid3'
                    data\_field1\_child = 'mmm'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'nnn'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on
                ) ) ) ).
    update\_child\_tab = VALUE #(
               ( key\_field = 2
                 data\_field1\_child = 'OOO'
                 %control-data\_field1\_child = if\_abap\_behv=>mk-on
                 data\_field2\_child = 'PPP'
                 %control-data\_field2\_child = if\_abap\_behv=>mk-on )
               ( key\_field = 5
                 data\_field1\_child = 'QQQ'
                 %control-data\_field1\_child = if\_abap\_behv=>mk-on
                 data\_field2\_child = 'RRR'
                 %control-data\_field2\_child = if\_abap\_behv=>mk-on ) ).
    delete\_root\_tab = VALUE #( ( key\_field = 3 )
                               ( key\_field = 4 ) ).
    delete\_child\_tab = VALUE #( ( key\_field = 3 )
                                ( key\_field = 6 ) ).
    op\_tab = VALUE #(
           ( op = if\_abap\_behv=>op-m-create
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             instances   = REF #( create\_root\_tab ) )
           ( op = if\_abap\_behv=>op-m-update
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             instances   = REF #( update\_root\_tab ) )
           ( op = if\_abap\_behv=>op-m-delete
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             instances   = REF #( delete\_root\_tab ) )
           ( op = if\_abap\_behv=>op-m-create\_ba
             entity\_name = 'DEMO\_MANAGED\_ROOT'
             sub\_name = '\_CHILD'
             instances   = REF #( cba\_tab ) )
           ( op = if\_abap\_behv=>op-m-update
             entity\_name = 'DEMO\_MANAGED\_CHILD'
             instances   = REF #( update\_child\_tab ) )
           ( op = if\_abap\_behv=>op-m-delete
             entity\_name = 'DEMO\_MANAGED\_CHILD'
             instances   = REF #( delete\_child\_tab ) )
           ).
    MODIFY ENTITIES OPERATIONS op\_tab
      FAILED   FINAL(failed1)
      REPORTED FINAL(reported1)
      MAPPED   FINAL(mapped1).
    out->write\_text( \`Responses for EML MODIFY operation:\`
      )->write( failed1
      )->write( reported1
      )->write( mapped1 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root INTO TABLE @FINAL(root\_tab).
    SELECT \* FROM demo\_tab\_child INTO TABLE @FINAL(child\_tab).
    out->write\_text( \`Database entries of root and child entity\` &&
                     \`after EML MODIFY operations:\`
               )->write( root\_tab
               )->write( child\_tab ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->begin\_section(
            \`Responses for the dynamic form READ ENTITIES OPERATIONS\`
                ).
    DATA:
      op\_tab\_read      TYPE abp\_behv\_retrievals\_tab,
      read\_dyn         TYPE TABLE FOR READ IMPORT demo\_managed\_root,
      read\_dyn\_result  TYPE TABLE FOR READ RESULT demo\_managed\_root,
      rba\_dyn          TYPE TABLE FOR READ IMPORT
                          demo\_managed\_root\\\_child,
      rba\_dyn\_result   TYPE TABLE FOR
                         READ RESULT demo\_managed\_root\\\_child,
      read2\_dyn        TYPE TABLE FOR READ IMPORT demo\_managed\_child,
      read2\_dyn\_result TYPE TABLE FOR READ RESULT demo\_managed\_child.
    read\_dyn = VALUE #(
      ( key\_field = 1
        %control = VALUE #(
           key\_field  = if\_abap\_behv=>mk-on
           data\_field1\_root    = if\_abap\_behv=>mk-on
           data\_field2\_root   = if\_abap\_behv=>mk-on ) )
      ( key\_field = 2
        %control = VALUE #(
           key\_field  = if\_abap\_behv=>mk-on
           data\_field1\_root    = if\_abap\_behv=>mk-on
           data\_field2\_root   = if\_abap\_behv=>mk-on ) )
      ( key\_field = 3
        %control = VALUE #(
           key\_field  = if\_abap\_behv=>mk-on
           data\_field1\_root    = if\_abap\_behv=>mk-on
           data\_field2\_root   = if\_abap\_behv=>mk-on ) )
       ).
    rba\_dyn = VALUE #(
     ( key\_field = 1
       %control = VALUE #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
     ( key\_field = 2
       %control = VALUE #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
         ).
    read2\_dyn = VALUE #(
     ( key\_field = 1
       %control = VALUE #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
     ( key\_field = 4
       %control = VALUE #(
           key\_field          = if\_abap\_behv=>mk-on
           data\_field1\_child  = if\_abap\_behv=>mk-on
           data\_field2\_child  = if\_abap\_behv=>mk-on ) )
         ).
    op\_tab\_read = VALUE #(
       ( op = if\_abap\_behv=>op-r-read
         entity\_name = 'DEMO\_MANAGED\_ROOT'
         instances   = REF #( read\_dyn )
         results     = REF #( read\_dyn\_result ) )
       ( op = if\_abap\_behv=>op-r-read\_ba
         entity\_name = 'DEMO\_MANAGED\_ROOT'
         sub\_name    = '\_CHILD'
         instances   = REF #( rba\_dyn )
         results     = REF #( rba\_dyn\_result ) )
       ( op = if\_abap\_behv=>op-r-read
         entity\_name = 'DEMO\_MANAGED\_CHILD'
         instances   = REF #( read2\_dyn )
         results     = REF #( read2\_dyn\_result ) )
                          ).
    READ ENTITIES OPERATIONS op\_tab\_read
      FAILED   FINAL(failed2)
      REPORTED FINAL(reported2).
    out->write\_text( \`Responses for EML READ operation:\`
      )->write( failed2
      )->write( reported2 ).
    out->write\_text( \`Database entries of root and child entity \` &&
                     \`according to EML READ operations:\`
               )->write( read\_dyn\_result
               )->write( rba\_dyn\_result
               )->write( read2\_dyn\_result ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root.
    DELETE FROM demo\_tab\_child.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Dynamic ABAP EML modify operations using MODIFY ENTITIES OPERATIONS
    
    Various operations on data sets of the root and child entity are executed. For that purpose, an internal table with type ABP\_BEHV\_CHANGES\_TAB must be defined. This table includes parameters (in this case, among others, other tables holding demo data and being typed with the required BDEF derived type) to carry out the modifications. Errors are intentionally caused for the modify operations so that the response parameters for FAILED and REPORTED are filled with entries. Furthermore, the MAPPED response is included. All three response parameters are of type ABP\_BEHV\_RESPONSE\_TAB. The class provides methods to display selected parts of those responses that are put into internal tables that are displayed in the output screen as well as the database table entries after the modifications. The saving of the modification is triggered by a COMMIT ENTITIES statement.
    
-   Dynamic ABAP EML read operations using READ ENTITIES OPERATIONS
    
    Various read operations on data sets of the root and child entity are executed. For that purpose, an internal table with type ABP\_BEHV\_RETRIEVALS\_TAB must be defined. This table includes parameters (in this case, among others, other tables holding demo data and being typed with the required BDEF derived type) to carry out the reading. Errors are intentionally caused for the read operations so that the parameter for FAILED is filled with entries (the REPORTED parameter does not get filled by the [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in this example). Also here, the response parameter is of type ABP\_BEHV\_RESPONSE\_TAB. Same as above, the responses are put into an internal table that are displayed in the output screen (note that this internal table is shared for the output of failures for the modify and read operations in this example, i. e. the columns for create, delete and update are not relevant for read operations and must be ignored) as well as the database table entries after the read operation.