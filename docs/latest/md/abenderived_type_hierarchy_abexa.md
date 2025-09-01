---
title: "Data model"
description: |
  The CDS data model consists of the root entity(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm 'Glossary Entry') DEMO_MANAGED_HIERARCHY: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity DEMO_MANAGED_HIERARCHY as select from de
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_type_hierarchy_abexa.htm"
abapFile: "abenderived_type_hierarchy_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenderived", "type", "hierarchy", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20TYPE%20TABLE%2FTYPE%20STRUCTURE%20FOR%20HIERARCHY%2C%20ABENDERIVED_TYPE_HIERARCHY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Using TYPE TABLE/TYPE STRUCTURE FOR HIERARCHY

This example demonstrates [actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaction_glosry.htm "Glossary Entry") whose [deep input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm) and [deep output parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm) use the [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm) with a [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_HIERARCHY:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_HIERARCHY
  as select from demo\_tab\_root\_6
  {
    key id,
        char1,
        char2,
        num1,
        num2
  }

Furthermore, the example uses the following abstract entities:

-   DEMO\_ABSTRACT\_ROOT (root abstract entity)
-   DEMO\_HIER\_ABS\_ITEM1
-   DEMO\_HIER\_ABS\_ITEM2
-   DEMO\_HIER\_ABS\_SCALAR ([scalar type](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_2@2@))
-   DEMO\_ABSTRACT\_ROOT\_2 (root abstract entity)

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_HIERARCHY is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_hierarchy unique;
strict(2);
define behavior for DEMO\_MANAGED\_HIERARCHY
persistent table demo\_tab\_root\_6
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly, numbering : managed ) id;
  // flat
  static action action\_flat\_param parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  // structure as input parameter
  static action action\_deep\_param deep parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  // table as input parameter
  static action action\_deep\_table\_param deep table
    parameter DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  static action storeHData deep parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  static action returnHData deep result \[1\] DEMO\_ABSTRACT\_ROOT;
}

Note: Using the notation numbering : managed for the key field, the value of the key field gets automatically created for each RAP BO instance.

Further BDEFs for root abstract entities that are relevant for the example:

-   DEMO\_ABSTRACT\_ROOT
-   DEMO\_ABSTRACT\_ROOT\_2

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_HIERARCHY. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following methods are relevant for the example:

-   action\_flat\_param
    
    The method loops at the flat input parameter. In the loop, the components of a structure are filled with values from the input parameter. These values are also changed within the loop. This change includes adding characters to the character fields and a calculation for the numeric fields. The output parameter result returns the changed instances. Furthermore, the instances are added to an internal table that is typed with the BDEF derived type [TYPE TABLE FOR CREATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). This internal table with RAP BO instances is used as input for a [RAP create operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_create_operation_glosry.htm "Glossary Entry").
    
-   action\_deep\_param
    
    The method loops at the deep input parameter which includes a structure of type TYPE STRUCTURE FOR HIERARCHY. In the loop, the components of a structure are filled with selected values from the abstract entities. Similar to the previous method, these values are changed. The structure is added to the output parameter result and to an internal table on whose bases a RAP create operation is carried out.
    
-   action\_deep\_table\_param
    
    The method loops at the deep input parameter which includes a table of type TYPE TABLE FOR HIERARCHY. In the loop, the components of a structure are filled with selected values from the abstract entities. Similar to the previous methods, these values are changed. The structure is added to the output parameter result and to an internal table on whose bases a RAP create operation is carried out.
    
-   returnhdata
    
    The method returns hierarchy data. The focus of this method is the use of variables that are typed with either TYPE TABLE FOR HIERARCHY or TYPE STRUCTURE FOR HIERARCHY. It visualizes how the BDEF derived type component [%param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_param.htm), which is contained in the output parameter result, might be set up, i. e. the component itself can contain subcomponents of type TYPE TABLE FOR HIERARCHY and TYPE STRUCTURE FOR HIERARCHY. The variables, i. e. the structures and internal tables, are filled with demo data. This data is added to the output parameter result.
    
-   storehdata
    
    The method loops at the deep input parameter which includes a structure of type TYPE STRUCTURE FOR HIERARCHY. In the loop, an internal table, which is typed with TYPE TABLE FOR CREATE, is filled with selected values from the abstract entities. A RAP create operation is carried out creating those instances that have been added to the internal table. Furthermore, the instances are added to the output parameter result.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_der\_types\_hrrchy DEFINITION
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
CLASS cl\_demo\_rap\_der\_types\_hrrchy IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: TYPE TABLE/STRUCTURE FOR HIERARCHY\` ).
    "Prepare input parameter for BDEF derived types ...FOR HIERARCHY...
    DATA:
      "Derived types for abstract root entity
      ls\_hier\_abs\_root
        TYPE STRUCTURE FOR HIERARCHY demo\_abstract\_root,
      lt\_hier\_abs\_root
        TYPE TABLE FOR HIERARCHY demo\_abstract\_root,
      "Derived types for abstract entities
      ls\_hier\_abs\_item1
        TYPE STRUCTURE FOR HIERARCHY demo\_hier\_abs\_item1,
      lt\_hier\_abs\_item2
        TYPE TABLE FOR HIERARCHY demo\_hier\_abs\_item2,
      ls\_struc
         TYPE demo\_abstract\_root.
    "Add hierarchy data. Fill structures and tables.
    "Create entries for structure to be used as input parameter
    "for action action\_deep\_param.
    ls\_struc = VALUE #( char1 = 'f'
                        char2 = 'para'
                        num1 = 1
                        num2 = 2 ).
    ls\_hier\_abs\_item1 = VALUE #( char1 = 'd'
                                 char2 = 'para'
                                 num1 = 3
                                 num2 = 4
                                 \_root2 = VALUE #(
                                            char1 = 'demo'
                                            char2 = 'demo'
                                            num1 = 5
                                            num2 = 6 )
                                 %control = VALUE #(
                                  char1 = if\_abap\_behv=>mk-on
                                  char2 = if\_abap\_behv=>mk-on
                                  num1 = if\_abap\_behv=>mk-on
                                  num2 = if\_abap\_behv=>mk-on
                                  \_root2 = if\_abap\_behv=>mk-on )
                                ).
    lt\_hier\_abs\_item2 = VALUE #( %control = VALUE #(
                                  char1 = if\_abap\_behv=>mk-on
                                  char2 = if\_abap\_behv=>mk-on
                                  num1 = if\_abap\_behv=>mk-on
                                  num2 = if\_abap\_behv=>mk-on )
                                 ( char1 = 'd'
                                   char2 = 'para'
                                   num1 = 7
                                   num2 = 8 )
                                 ( char1 = 'd'
                                   char2 = 'para'
                                   num1 = 9
                                   num2 = 10 )
                                ).
    ls\_hier\_abs\_root = VALUE #( char1 = ls\_struc-char1
                                char2 = ls\_struc-char2
                                num1 = ls\_struc-num1
                                num2 = ls\_struc-num2
                                \_item1 = ls\_hier\_abs\_item1
                                \_item2 = lt\_hier\_abs\_item2
                                \_scalar = 'scalar'
                                %control = VALUE #(
                                  char1 = if\_abap\_behv=>mk-on
                                  char2 = if\_abap\_behv=>mk-on
                                  num1 = if\_abap\_behv=>mk-on
                                  num2 = if\_abap\_behv=>mk-on
                                  \_item1 = if\_abap\_behv=>mk-on
                                  \_item2 = if\_abap\_behv=>mk-on
                                  \_scalar = if\_abap\_behv=>mk-on ) ).
    "Create entries for internal table to be used as input parameter
    "for action action\_deep\_table\_param.
    DO 2 TIMES.
      APPEND ls\_hier\_abs\_root TO lt\_hier\_abs\_root.
    ENDDO.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing action\_flat\_param
    MODIFY ENTITY demo\_managed\_hierarchy
         EXECUTE action\_flat\_param
         FROM VALUE #( ( %cid = 'cid\_flat'
                         %param = ls\_struc ) )
        RESULT FINAL(lt\_result1)
        MAPPED FINAL(ls\_mapped1)
        REPORTED FINAL(ls\_reported1)
        FAILED FINAL(ls\_failed1).
    out->write\_html( \`<b>Executing action \`
                     && \`<i>action\_flat\_param</i></b>\`
      )->write\_doc( \`action\_flat\_param: Action result\`
      )->write( lt\_result1 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab1).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab1
      )->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing action\_deep\_param
    MODIFY ENTITY demo\_managed\_hierarchy
       EXECUTE action\_deep\_param
       FROM VALUE #( ( %cid = 'cid\_deep\_param'
       "Note: %param is here typed with TYPE STRUCTURE FOR HIERARCHY
                       %param = ls\_hier\_abs\_root ) )
        RESULT FINAL(lt\_result2)
        MAPPED FINAL(ls\_mapped2)
        REPORTED FINAL(ls\_reported2)
        FAILED FINAL(ls\_failed2).
    out->write\_html( \`<b>Executing action \`
                    && \`<i>action\_deep\_param</i></b>\`
     )->write\_doc( \`action\_deep\_param: Action result\`
     )->write( lt\_result2 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab2).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab2
      )->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing action\_deep\_table\_param
    MODIFY ENTITY demo\_managed\_hierarchy
      EXECUTE action\_deep\_table\_param
         FROM VALUE #( ( %cid = 'cid\_deep\_table\_param'
         "Note: %param is here typed with TYPE TABLE FOR HIERARCHY
                         %param = lt\_hier\_abs\_root ) )
        RESULT FINAL(lt\_result3)
        MAPPED FINAL(ls\_mapped3)
        REPORTED FINAL(ls\_reported3)
        FAILED FINAL(ls\_failed3).
    out->write\_html( \`<b>Executing action \`
                    && \`<i>action\_deep\_table\_param</i></b>\`
     )->write\_doc( \`action\_deep\_table\_param: Action result\`
     )->write( lt\_result3 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab3).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab3
      )->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing returnHData / storeHData
    MODIFY ENTITY demo\_managed\_hierarchy
      EXECUTE returnhdata FROM VALUE #( ( %cid = 'cid\_returnHData' ) )
        RESULT FINAL(lt\_result4)
        MAPPED FINAL(ls\_mapped4)
        REPORTED FINAL(ls\_reported4)
        FAILED FINAL(ls\_failed4).
    out->write\_html( \`<b>Executing actions \`
        && \`<i>returnHData</i> and <i>storeHData</i></b>\`
     )->write\_doc( \`returnHData: Action result\`
     )->write( lt\_result4 ).
    MODIFY ENTITY demo\_managed\_hierarchy
       EXECUTE storehdata FROM CORRESPONDING #( lt\_result4 )
      RESULT FINAL(lt\_result5)
      MAPPED FINAL(ls\_mapped5)
      REPORTED FINAL(ls\_reported5)
      FAILED FINAL(ls\_failed5).
    out->write\_doc( \`storeHData: Action result\`
     )->write( lt\_result5 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab4).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab4 ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_6.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The class includes multiple ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) requests executing actions. Before the actions are carried out, the input parameters for those actions is prepared. In this case, multiple internal tables and structures that are typed with the BDEF derived types TYPE TABLE FOR HIERARCHY or TYPE STRUCTURE FOR HIERARCHY respectively are created. The structures and internal tables are filled with demo values to provide input parameters for the actions that have deep parameters. In case of the action action\_deep\_param, the input parameter is a structure. In case of the action action\_deep\_table\_param, the input parameter is an internal table. The value assignment just visualizes the hierarchy data and possible components of the BDEF derived types, i. e. multiple types with FOR HIERARCHY can occur in those BDEF derived types.

The following ABAP EML MODIFY requests executing actions are covered in the example:

1.  Executing action action\_flat\_param
    
    A content ID [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm) and a flat parameter %param are provided as input parameter. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement saves the RAP BO instances to the database. The result of the action is output based on the method implementation mentioned above. The database table entries are retrieved using a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement and displayed as well.
    
2.  Executing action action\_deep\_param
    
    A content ID [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm) and a deep parameter %param are provided as input parameter. Here, %param is a structure. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement saves the RAP BO instances to the database. The result of the action is output based on the method implementation mentioned above. The database table entries are retrieved using a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement and output as well.
    
3.  Executing action action\_deep\_table\_param
    
    A content ID [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm) and a deep parameter %param are provided as input parameter. Here, %param is an internal table. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement saves the RAP BO instances to the database. The result of the action is output based on the method implementation mentioned above. The database table entries are displayed, too.
    
4.  Executing actions returnhdata and storehdata
    
    A content ID [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm) is provided as input parameter for the returnhdata method. The method returns data based on the method implementation mentioned above. This data is used as input parameter for the storehdata method which includes a RAP create operations that create RAP BO instances. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement saves the RAP BO instances to the database. The result of both actions is displayed as well as the database table entries.