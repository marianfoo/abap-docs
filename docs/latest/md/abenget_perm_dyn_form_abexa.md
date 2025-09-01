  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_permissions.htm) →  [Examples for ABAP EML GET PERMISSIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenget_permissions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20GET%20PERMISSIONS%2C%20Dynamic%20Form%2C%20ABENGET_PERM_DYN_FORM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

ABAP EML - GET PERMISSIONS, Dynamic Form

This example demonstrates the dynamic form of the GET PERMISSIONS statement using the addition ONLY INSTANCE FEATURES.

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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_3 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

For the above RAP behavior definition, one ABP is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following method is relevant in this example:

-   get\_instance\_features
    
    The dynamic form of GET PERMISSIONS used in the example requests the permissions for instance features. The method is implemented in a way that returns information on whether certain fields (data\_field3\_root and data\_field4\_root) are read-only or can be modified based on certain conditions. Additionally, information is returned if the creation of instances for an associated entity (\_child) is disabled or enabled.
    
    As a prerequisite in the BDEF, the two fields and the associated entity have the required notation:
    
       association \_child { create( features : instance ); }
       field ( features : instance ) data\_field3\_root, data\_field4\_root;
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_get\_perm\_dyn DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      request       TYPE STRUCTURE FOR
                      PERMISSIONS REQUEST demo\_managed\_root\_3,
      request\_child TYPE STRUCTURE FOR
                      PERMISSIONS REQUEST demo\_managed\_child\_3.
    METHODS:
      initialize\_dbtabs,
      fill\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_get\_perm\_dyn IMPLEMENTATION.
  METHOD main.
    fill\_dbtabs( ).
    "Setting permissions request parameters
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
    request\_child = VALUE #(
        %update                  = if\_abap\_behv=>mk-on
        %delete                  = if\_abap\_behv=>mk-on
        %field-key\_field         = if\_abap\_behv=>mk-on
        %field-data\_field1\_child = if\_abap\_behv=>mk-on
        %field-data\_field2\_child = if\_abap\_behv=>mk-on
        %field-data\_field3\_child = if\_abap\_behv=>mk-on
        %field-data\_field4\_child = if\_abap\_behv=>mk-on
                ).
    "Root entity components for perm\_tab.
    DATA: lt\_perm\_key\_root TYPE TABLE
            FOR PERMISSIONS KEY demo\_managed\_root\_3,
          ls\_perm\_req\_root TYPE STRUCTURE
            FOR PERMISSIONS REQUEST demo\_managed\_root\_3,
          ls\_perm\_res\_root TYPE STRUCTURE
            FOR PERMISSIONS RESULT demo\_managed\_root\_3.
    lt\_perm\_key\_root = VALUE #( ( %key-key\_field = 1 )
                                ( %key-key\_field = 2 ) ).
    ls\_perm\_res\_root = VALUE #( ).
    "Child entity components for perm\_tab.
    DATA: lt\_perm\_key\_child TYPE TABLE
            FOR PERMISSIONS KEY demo\_managed\_child\_3,
          ls\_perm\_req\_child TYPE STRUCTURE
            FOR PERMISSIONS REQUEST demo\_managed\_child\_3,
          ls\_perm\_res\_child TYPE STRUCTURE
            FOR PERMISSIONS RESULT demo\_managed\_child\_3.
    lt\_perm\_key\_child = VALUE #( ( %key-key\_field = 1 )
                                 ( %key-key\_field = 2 ) ).
    ls\_perm\_req\_child = VALUE #(
                        %field-data\_field1\_child = if\_abap\_behv=>mk-on
                        %field-data\_field2\_child = if\_abap\_behv=>mk-on
                               ).
    ls\_perm\_res\_child = VALUE #( ).
    DATA:
    perm\_tab TYPE abp\_behv\_permissions\_tab.
    perm\_tab = VALUE #( ( entity\_name = 'DEMO\_MANAGED\_ROOT\_3'
                          instances   = REF data( lt\_perm\_key\_root )
                          request     = REF data( request )
                          results     = REF data( ls\_perm\_res\_root ) )
                        ( entity\_name = 'DEMO\_MANAGED\_CHILD\_3'
                          instances   = REF data( lt\_perm\_key\_child )
                          request     = REF data( request\_child )
                          results     = REF data( ls\_perm\_res\_child ) )
                        ).
    GET PERMISSIONS ONLY INSTANCE FEATURES OPERATIONS perm\_tab
        FAILED FINAL(failed\_dyn)
        REPORTED FINAL(reported\_dyn).
    out->write( ls\_perm\_res\_root ).
    out->write( ls\_perm\_res\_child ).
    IF failed\_dyn IS NOT INITIAL.
      out->write( failed\_dyn ).
    ENDIF.
    IF reported\_dyn IS NOT INITIAL.
      out->write( reported\_dyn ).
    ENDIF.
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
       data\_field4\_root = 10 ) ) ).
    MODIFY demo\_tab\_child\_2 FROM TABLE @( VALUE #(
        ( key\_field = 1
          data\_field1\_child = 'ggg'
          data\_field2\_child = 'A'
          data\_field3\_child = 15
          data\_field4\_child = 3 )
        ( key\_field = 2
          data\_field1\_child = 'hhh'
          data\_field2\_child = 'B'
          data\_field3\_child = 5
          data\_field4\_child = 10 )
        ( key\_field = 3
          data\_field1\_child = 'iii'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ( key\_field = 4
          data\_field1\_child = 'jjj'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 ) ) ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_child\_2.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

Using the dynamic form of the GET PERMISSIONS statement, permissions are requested for specific instances of an entity. The addition ONLY INSTANCE FEATURES is used in the statement to get the permissions, as the name implies, for the instance feature controls only.

As a first step, the database tables that are used in the example are emptied and filled again with demo values as a basis for the example. Request parameters for the root and child entity are then specified. In this case, all fields, operations and one associated entity (the child entity) are enabled. These parameters are used in the GET PERMISSIONS statement.

Dynamic Form

-   The GET PERMISSIONS statement considers certain instances with keys that are specified after the keyword FROM. The request parameter has been specified before. The result parameter is of type TYPE STRUCTURE FOR PERMISSIONS RESULT and created inline. Response parameters are also specified, however, they are not used in the example.
-   The GET PERMISSIONS statement includes requests for the root entity and the child entity individually.
-   Notes on the result for the root entity, i. e. the content in the output tables:
    -   Entries in the instance table: The entries for the instance with key 1 show that the field assoc has the value 01. According to the implementation, a create-by-association operation is disabled in this case. The entries for both instances with the keys 1 and 2 show the value 02 (that is, read-only) for the data field data\_field1\_root since it was defined as readonly in the BDEF. It is a static feature control also displayed in this context (see the [Guidelines for the Permission Result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_permissions_rules.htm)). The entries for data\_field3\_root and data\_field4\_root are determined by the get\_instance\_features method. The value 00 is available if the permission is unrestricted, 02 if the permissions is read-only.
    -   Entries in the global structure: The result also contains static information (see the [Guidelines for the Permission Result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_permissions_rules.htm)). In this example, it is as follows: The key key\_field shows the value 20 (that is, readonly:update) and the field data\_field2\_root shows the value 01 (i. e. mandatory), the field data\_field1\_root shows the value 02 (i. e. readonly) as defined in the BDEF.
-   Notes on the result for the child entity:
    -   Similar to above, request parameters have been specified before, certain instances with specified keys are considered (following the keyword FROM) and the result parameter is declared inline. Response parameters are declared, too, but not relevant in the example.
    -   Entries in the instance table: The key field of the child entity has the value 02 (i. e. unauthorized) which means a create-by-association operations is disabled in the context of the particular instance.
    -   Entries in the global structure: The result also contains static information. Hence, the field for the key of the child entity shows the value 02 (i. e. read-only) as defined in the BDEF (readonly).