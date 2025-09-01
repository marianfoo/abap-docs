  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm) →  [Examples for ABAP EML GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenget_permissions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20GET%20PERMISSIONS%2C%20only_clause%2C%20ABENGET_PERM_ONLY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP EML - GET PERMISSIONS, only\_clause

This example demonstrates all variants of the only\_clause with a simple managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_3 and its child entity DEMO\_MANAGED\_CHILD\_3.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_3
  as select from demo\_tab\_root\_2
  composition \[1..1\] of DEMO\_MANAGED\_CHILD\_3 as \_child
  {
        \_child,
    key demo\_tab\_root\_2.key\_field,
        demo\_tab\_root\_2.data\_field1\_root,
        demo\_tab\_root\_2.data\_field2\_root,
        demo\_tab\_root\_2.data\_field3\_root,
        demo\_tab\_root\_2.data\_field4\_root
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD\_3
  as select from demo\_tab\_child\_2
  association to parent DEMO\_MANAGED\_ROOT\_3 as \_parent  
  on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key demo\_tab\_child\_2.key\_field,
        demo\_tab\_child\_2.data\_field1\_child,
        demo\_tab\_child\_2.data\_field2\_child,
        demo\_tab\_child\_2.data\_field3\_child,
        demo\_tab\_child\_2.data\_field4\_child
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_3 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_3 unique;
strict;
define behavior for DEMO\_MANAGED\_ROOT\_3
persistent table DEMO\_TAB\_ROOT\_2
lock master
//global + instance authorization
authorization master ( global, instance )
{
  create;
  //dynamic global feature control
  update( features : global );
  delete;
  //dynamic instance feature control
  association \_child { create( features : instance ); }
  //static feature control
  field ( readonly ) data\_field1\_root;
  //static feature control
  field ( mandatory ) data\_field2\_root;
  field ( readonly:update ) key\_field;
  //dynamic instance feature control
  field ( features : instance ) data\_field3\_root, data\_field4\_root;
  action action;
}
define behavior for DEMO\_MANAGED\_CHILD\_3 alias child
persistent table DEMO\_TAB\_CHILD\_2
lock dependent by \_parent
authorization dependent by \_parent
{
  field ( readonly ) key\_field;
  update;
  delete;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3. The actual implementation takes place in the CCIMP include.

The following methods are relevant for this example:

-   get\_instance\_features
    
    The method returns information on whether certain fields (data\_field3\_root and data\_field4\_root) are read-only or can be modified based on certain conditions. Additionally, information is returned if the creation of instances for an associated entity (\_child) is enabled or disabled. As a prerequisite in the BDEF, the two fields and the associated entity have the required notation ( features: instance ).
    
-   get\_global\_features
    
    The method returns information on whether update operations on entities are allowed or not based on a certain condition, that is, updating is only allowed within a certain time span. As a prerequisite in the BDEF, update has the required notation ( features: global ).
    
-   get\_global\_authorizations
    
    The method is implemented in a way that create and delete operations are only enabled for users with the appropriate authorizations. In the interest of having a simple demo, the example goes without an authorization object which is, for example, a way to handle the authorization granting in production applications. The variable auth\_flag represents the authorization that is granted or not. In this case, the permission is not granted. As a prerequisite in the BDEF, the notation authorization master ( global ) exists. In this example, instance authorizations are also covered, hence, the notation is authorization master ( global, instance ) in the BDEF.
    
-   get\_instance\_authorizations
    
    The method returns information on whether delete operations are allowed on instances. In this example, the deletion is not allowed if data\_field2\_root has a particular value. As a prerequisite in the BDEF, the notation authorization master ( instance ) exists. In this example, global authorizations are also covered, hence, the notation is authorization master ( global, instance ) in the BDEF.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_get\_perm\_only DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES: BEGIN OF ls\_result\_inst,
             key\_field        TYPE i,
             update           TYPE abp\_behv\_flag,
             delete           TYPE abp\_behv\_flag,
             assoc            TYPE abp\_behv\_flag,
             \_key             TYPE abp\_behv\_feature,
             data\_field1\_root TYPE abp\_behv\_feature,
             data\_field2\_root TYPE abp\_behv\_feature,
             data\_field3\_root TYPE abp\_behv\_feature,
             data\_field4\_root TYPE abp\_behv\_feature,
           END OF ls\_result\_inst,
           BEGIN OF ls\_result\_global,
             create           TYPE abp\_behv\_flag,
             update           TYPE abp\_behv\_flag,
             delete           TYPE abp\_behv\_flag,
             assoc            TYPE abp\_behv\_flag,
             \_key             TYPE abp\_behv\_feature,
             data\_field1\_root TYPE abp\_behv\_feature,
             data\_field2\_root TYPE abp\_behv\_feature,
             data\_field3\_root TYPE abp\_behv\_feature,
             data\_field4\_root TYPE abp\_behv\_feature,
           END OF ls\_result\_global,
           tt\_result\_inst   TYPE TABLE OF ls\_result\_inst,
           tt\_result\_global TYPE TABLE OF ls\_result\_global,
           str\_type         TYPE STRUCTURE FOR
                         PERMISSIONS RESULT demo\_managed\_root\_3,
           inst\_tab         TYPE str\_type-instances,
           global\_str       TYPE str\_type-global.
    DATA:
      lt\_result\_inst   TYPE tt\_result\_inst,
      lt\_result\_global TYPE tt\_result\_global,
      request          TYPE STRUCTURE FOR
                         PERMISSIONS REQUEST demo\_managed\_root\_3.
    METHODS:
      initialize\_dbtabs,
      fill\_dbtabs,
      output\_tabs IMPORTING i\_tab TYPE inst\_tab
                            g\_str TYPE global\_str.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_get\_perm\_only IMPLEMENTATION.
  METHOD main.
    "Set permissions request parameter.
    request = VALUE #(
        %create                 = if\_abap\_behv=>mk-on
        %update                 = if\_abap\_behv=>mk-on
        %assoc-\_child           = if\_abap\_behv=>mk-on
        %delete                 = if\_abap\_behv=>mk-on
        %field-key\_field        = if\_abap\_behv=>mk-on
        %field-data\_field1\_root = if\_abap\_behv=>mk-on
        %field-data\_field2\_root = if\_abap\_behv=>mk-on
        %field-data\_field3\_root = if\_abap\_behv=>mk-on
        %field-data\_field4\_root = if\_abap\_behv=>mk-on
                ).
    out->begin\_section( \`GET PERMISSIONS: Variants for only\_clause\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY GLOBAL
    out->next\_section( \`ONLY GLOBAL\` ).
    GET PERMISSIONS ONLY GLOBAL ENTITY demo\_managed\_root\_3
      REQUEST request
      RESULT FINAL(result1)
      FAILED FINAL(failed1)
      REPORTED FINAL(reported1).
    output\_tabs( i\_tab = result1-instances g\_str = result1-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY GLOBAL FEATURES
    out->next\_section( \`ONLY GLOBAL FEATURES\` ).
    GET PERMISSIONS ONLY GLOBAL FEATURES ENTITY demo\_managed\_root\_3
      REQUEST request
      RESULT FINAL(result2)
      FAILED FINAL(failed2)
      REPORTED FINAL(reported2).
    output\_tabs( i\_tab = result2-instances g\_str = result2-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY GLOBAL AUTHORIZATION
    out->next\_section( \`ONLY GLOBAL AUTHORIZATION\` ).
    GET PERMISSIONS ONLY GLOBAL AUTHORIZATION
      ENTITY demo\_managed\_root\_3
      REQUEST request
      RESULT FINAL(result3)
      FAILED FINAL(failed3)
      REPORTED FINAL(reported3).
    output\_tabs( i\_tab = result3-instances g\_str = result3-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY INSTANCE
    out->next\_section( \`ONLY INSTANCE\` ).
    GET PERMISSIONS ONLY INSTANCE ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST request
      RESULT FINAL(result4)
      FAILED FINAL(failed4)
      REPORTED FINAL(reported4).
    output\_tabs( i\_tab = result4-instances g\_str = result4-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY INSTANCE FEATURES
    out->next\_section( \`ONLY INSTANCE FEATURES\` ).
    GET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST request
      RESULT FINAL(result5)
      FAILED FINAL(failed5)
      REPORTED FINAL(reported5).
    output\_tabs( i\_tab = result5-instances g\_str = result5-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY INSTANCE AUTHORIZATION
    out->next\_section( \`ONLY INSTANCE AUTHORIZATION\` ).
    GET PERMISSIONS ONLY INSTANCE AUTHORIZATION
      ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT FINAL(result6)
      FAILED FINAL(failed6)
      REPORTED FINAL(reported6).
    output\_tabs( i\_tab = result6-instances g\_str = result6-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY FEATURES
    out->next\_section( \`ONLY FEATURES\` ).
    GET PERMISSIONS ONLY FEATURES ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST request
      RESULT FINAL(result7)
      FAILED FINAL(failed7)
      REPORTED FINAL(reported7).
    output\_tabs( i\_tab = result7-instances g\_str = result7-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY AUTHORIZATION
    out->next\_section( \`ONLY AUTHORIZATION\` ).
    GET PERMISSIONS ONLY AUTHORIZATION ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT FINAL(result8)
      FAILED FINAL(failed8)
      REPORTED FINAL(reported8).
    output\_tabs( i\_tab = result8-instances g\_str = result8-global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY dyn\_tab
    out->next\_section( \`ONLY dyn\_var\` ).
    GET PERMISSIONS ONLY (if\_abap\_behv=>permissions\_only-authorization)
     ENTITY demo\_managed\_root\_3
     FROM VALUE #( ( %key-key\_field = 1 )
                   ( %key-key\_field = 2 ) )
     REQUEST request
     RESULT FINAL(result9)
     FAILED FINAL(failed9)
     REPORTED FINAL(reported9).
    output\_tabs( i\_tab = result9-instances g\_str = result9-global ).
  ENDMETHOD.
  METHOD fill\_dbtabs.
    MODIFY demo\_tab\_root\_2 FROM TABLE @( VALUE #(
      ( key\_field = 1
        data\_field1\_root = 'aaa'
        data\_field2\_root = 'A'
        data\_field3\_root = 15
        data\_field4\_root = 3 )
      ( key\_field = 2
        data\_field1\_root = 'bbb'
        data\_field2\_root = 'B'
        data\_field3\_root = 5
        data\_field4\_root = 10 )
      ( key\_field = 3
        data\_field1\_root = 'ccc'
        data\_field2\_root = 'B'
        data\_field3\_root = 20
        data\_field4\_root = 2 )
      ) ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_child\_2.
  ENDMETHOD.
  METHOD output\_tabs.
    out->write( \`Entries in INSTANCE table:\` ).
    LOOP AT i\_tab ASSIGNING FIELD-SYMBOL(<ls\_res\_inst>).
      APPEND VALUE #(
         key\_field        = <ls\_res\_inst>-key\_field
         update           = <ls\_res\_inst>-%update
         delete           = <ls\_res\_inst>-%delete
         assoc            = <ls\_res\_inst>-%assoc-\_child
         \_key             = <ls\_res\_inst>-%field-key\_field
         data\_field1\_root = <ls\_res\_inst>-%field-data\_field1\_root
         data\_field2\_root = <ls\_res\_inst>-%field-data\_field2\_root
         data\_field3\_root = <ls\_res\_inst>-%field-data\_field3\_root
         data\_field4\_root = <ls\_res\_inst>-%field-data\_field4\_root
                    ) TO lt\_result\_inst.
    ENDLOOP.
    IF lt\_result\_inst IS INITIAL.
      out->write( \`No entries for INSTANCE table.\` ).
    ELSE.
      out->write( lt\_result\_inst ).
    ENDIF.
    out->write( \`Entries in GLOBAL structure:\` ).
    APPEND VALUE #(
         create           = g\_str-%create
         update           = g\_str-%update
         delete           = g\_str-%delete
         assoc            = g\_str-%assoc-\_child
         \_key             = g\_str-%field-key\_field
         data\_field1\_root = g\_str-%field-data\_field1\_root
         data\_field2\_root = g\_str-%field-data\_field2\_root
         data\_field3\_root = g\_str-%field-data\_field3\_root
         data\_field4\_root = g\_str-%field-data\_field4\_root
                ) TO lt\_result\_global.
    out->write( lt\_result\_global ).
    CLEAR lt\_result\_inst.
    CLEAR lt\_result\_global.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
    fill\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

The example covers all variants of only\_clause using the short form of the GET PERMISSIONS statement.

As a first step, the database tables that are used in the example are emptied and filled again with demo values as a basis for the example. Request parameters for an entity are then specified. In this case, all fields, operations and one associated entity (the child entity) are enabled. These parameters are used in all GET PERMISSIONS statements. All statements use the same input keys (except those statements where specifying the keys is not allowed) and include response parameters that are not used in the example.

The result of the individual GET PERMISSIONS statements is displayed on the output screen. For that purpose, internal tables are set up that contain the values from the instance table and global structure.

Notes on the result, i. e. the entries in the output tables:

-   ONLY GLOBAL
    
    There are no entries in the instance table, hence, no table is displayed. The global structure includes the global authorization (the value 02, i. e. IF\_ABAP\_BEHV=>PERM-O-UNAUTHORIZED, for the create and delete operation is displayed) and global feature controls (the value of update either shows 00 for enabled or 01 for disabled). Furthermore, static information is available, too: The key\_field (here \_key) and the field data\_field2\_root show the value 01 (i. e. mandatory), the field data\_field1\_root shows the value 02 (i. e. readonly) as defined in the BDEF.
    
-   ONLY GLOBAL FEATURES
    
    There are no entries in the instance table, hence, no table is displayed. The global structure includes the global feature control and static information (see the details of ONLY GLOBAL).
    
-   ONLY GLOBAL AUTHORIZATION
    
    There are no entries in the instance table, hence, no table is displayed. The global structure includes global authorization. The value 02, i. e. IF\_ABAP\_BEHV=>PERM-O-UNAUTHORIZED, for the create and delete operation is displayed.
    
-   ONLY INSTANCE
    
    The instance table includes instance-based authorization and instance-based feature control plus static information. According to the method get\_instance\_features, the value of assoc is 01 for the instance with key 1 denoting that the create-by-association operation is disabled in the context of this instance. In contrast to that, the operation is allowed for the instance with key 2 (the value is 00). The read-only field data\_field1\_root shows the value 02, i. e.IF\_ABAP\_BEHV=>PERM-F-READ\_ONLY. data\_field3\_root and data\_field4\_root show the values of the result after calling the get\_instance\_features method. The instance with the key 2 shows the value 02 for delete as a result of calling the method get\_instance\_authorizations. The global structure includes the static information as outlined in ONLY GLOBAL.
    
-   ONLY INSTANCE FEATURES
    
    The instance table includes instance-based feature control. It shows the same values for both instance table and global structure as in ONLY INSTANCE except for the instance-based authorization part (i. e. the instance with the key 2 does not include the result of the delete operation here).
    
-   ONLY INSTANCE AUTHORIZATION
    
    The instance table includes instance-based authorization. The instance with the key 2 shows the value 02 for delete as a result of calling the method get\_instance\_authorizations. The instance with the key 1 is not included at all in the result. The global structure does not include any relevant values.
    
-   ONLY FEATURES
    
    The instance table includes instance-based feature control plus static information (see the details of ONLY INSTANCE except for the instance-based authorization part). The global structure includes the global feature control and static information (see the details of ONLY GLOBAL except for the global authorization part).
    
-   ONLY AUTHORIZATION
    
    The instance table includes instance-based authorization (see the details of ONLY INSTANCE AUTHORIZATION). The global structure includes the global authorization (see the details of ONLY GLOBAL AUTHORIZATION).
    
-   ONLY dyn\_spec
    
    The result is the same as for ONLY AUTHORIZATION. The variant ONLY AUTHORIZATION is specified dynamically using the enumeration value of type T\_PERMISSIONS\_ONLY of interface IF\_ABAP\_BEHV.