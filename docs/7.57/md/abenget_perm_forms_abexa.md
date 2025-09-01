  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) →  [Examples for ABAP EML GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenget_permissions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - GET PERMISSIONS, Variants, ABENGET_PERM_FORMS_ABEXA, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - GET PERMISSIONS, Variants

This example demonstrates the variants of the GET PERMISSIONS statement using the addition ONLY INSTANCE FEATURES:

-   GET PERMISSIONS ENTITY bdef (short form)
-   GET PERMISSIONS OF bdef (long form)
-   GET PERMISSIONS OPERATIONS (dynamic form)

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_3 is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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
  field ( mandatory ) key\_field, data\_field2\_root;
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

For the above CDS behavior definition, one ABP is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following method is relevant in this example:

-   get\_instance\_features
    
    All variants of GET PERMISSIONS used in the example request the permissions for instance features. The method is implemented in a way that returns information on whether certain fields (data\_field3\_root and data\_field4\_root) are read-only or can be modified based on certain conditions. Additionally, information is returned if the creation of instances for an associated entity (\_child) is disabled or enabled.
    
    As a prerequisite in the BDEF, the two fields and the associated entity have the required notation:
    
       association \_child { create( features : instance ); }
       field ( features : instance ) data\_field3\_root, data\_field4\_root;
    

Source Code   

REPORT demo\_rap\_eml\_get\_permissions.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES: BEGIN OF ls\_result\_inst,
             key\_field        TYPE i,
             update           TYPE abp\_behv\_flag,
             delete           TYPE abp\_behv\_flag,
             assoc            TYPE abp\_behv\_flag,
             \_key\_field       TYPE abp\_behv\_feature,
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
             \_key\_field       TYPE abp\_behv\_feature,
             data\_field1\_root TYPE abp\_behv\_feature,
             data\_field2\_root TYPE abp\_behv\_feature,
             data\_field3\_root TYPE abp\_behv\_feature,
             data\_field4\_root TYPE abp\_behv\_feature,
           END OF ls\_result\_global,
           BEGIN OF ls\_result\_inst\_child,
             key\_field         TYPE i,
             update            TYPE abp\_behv\_flag,
             delete            TYPE abp\_behv\_flag,
             \_key\_field        TYPE abp\_behv\_feature,
             data\_field1\_child TYPE abp\_behv\_feature,
             data\_field2\_child TYPE abp\_behv\_feature,
             data\_field3\_child TYPE abp\_behv\_feature,
             data\_field4\_child TYPE abp\_behv\_feature,
           END OF ls\_result\_inst\_child,
           BEGIN OF ls\_result\_global\_child,
             update            TYPE abp\_behv\_flag,
             delete            TYPE abp\_behv\_flag,
             \_key\_field        TYPE abp\_behv\_feature,
             data\_field1\_child TYPE abp\_behv\_feature,
             data\_field2\_child TYPE abp\_behv\_feature,
             data\_field3\_child TYPE abp\_behv\_feature,
             data\_field4\_child TYPE abp\_behv\_feature,
           END OF ls\_result\_global\_child,
           tt\_result\_inst         TYPE TABLE OF ls\_result\_inst,
           tt\_result\_global       TYPE TABLE OF ls\_result\_global,
           tt\_result\_inst\_child   TYPE TABLE OF ls\_result\_inst\_child,
           tt\_result\_global\_child TYPE TABLE OF ls\_result\_global\_child,
           str\_type               TYPE STRUCTURE FOR
                     PERMISSIONS RESULT demo\_managed\_root\_3,
           inst\_tab               TYPE str\_type-instances,
           global\_str             TYPE str\_type-global,
           str\_type\_child         TYPE STRUCTURE FOR
                     PERMISSIONS RESULT demo\_managed\_child\_3,
           inst\_tab\_child         TYPE str\_type\_child-instances,
           global\_str\_child       TYPE str\_type\_child-global.
    CLASS-DATA:
      out                    TYPE REF TO if\_demo\_output,
      lt\_result\_inst         TYPE tt\_result\_inst,
      lt\_result\_global       TYPE tt\_result\_global,
      lt\_result\_inst\_child   TYPE tt\_result\_inst\_child,
      lt\_result\_global\_child TYPE tt\_result\_global\_child,
      request                TYPE STRUCTURE FOR
                              PERMISSIONS REQUEST demo\_managed\_root\_3,
      request\_child          TYPE STRUCTURE FOR
                              PERMISSIONS REQUEST demo\_managed\_child\_3.
    CLASS-METHODS:
      initialize\_dbtabs,
      fill\_dbtabs,
      clear\_itabs,
      output\_tabs\_root IMPORTING i\_tab TYPE inst\_tab
                                 g\_str TYPE global\_str,
      output\_tabs\_child IMPORTING i\_tab\_child TYPE inst\_tab\_child
                                  g\_str\_child TYPE global\_str\_child.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    fill\_dbtabs( ).
    "Set permissions request parameters.
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
    out->begin\_section(
\`GET PERMISSIONS: Variants (using the addition ONLY INSTANCE FEATURES)\`
                       ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Short form
    out->next\_section(
                   \`GET PERMISSIONS: Short Form \`
                       ).
    GET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST  request
      RESULT   FINAL(result\_short)
      FAILED   FINAL(failed\_short)
      REPORTED FINAL(reported\_short).
    output\_tabs\_root( i\_tab = result\_short-instances
                      g\_str = result\_short-global ).
    clear\_itabs( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*    "Long form
    out->next\_section(
                   \`GET PERMISSIONS: Long Form \`
                       ).
    GET PERMISSIONS ONLY INSTANCE FEATURES OF demo\_managed\_root\_3
      ENTITY demo\_managed\_root\_3
        FROM VALUE #( ( %key-key\_field = 3 )
                      ( %key-key\_field = 4 ) )
        REQUEST request
        RESULT  FINAL(result\_long\_root)
      ENTITY child
        FROM VALUE #( ( %key-key\_field = 3 )
                      ( %key-key\_field = 4 ) )
        REQUEST request\_child
        RESULT  FINAL(result\_long\_child)
      FAILED   FINAL(failed\_long)
      REPORTED FINAL(reported\_long).
    output\_tabs\_root( i\_tab = result\_long\_root-instances
                      g\_str = result\_long\_root-global ).
    output\_tabs\_child( i\_tab\_child = result\_long\_child-instances
                       g\_str\_child = result\_long\_child-global ).
    clear\_itabs( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Dynamic form
    out->next\_section(
                   \`GET PERMISSIONS: Dynamic Form \`
                       ).
    "Root entity components for perm\_tab.
    DATA: lt\_perm\_key\_root TYPE TABLE
            FOR PERMISSIONS KEY demo\_managed\_root\_3,
          ls\_perm\_req\_root TYPE STRUCTURE
            FOR PERMISSIONS REQUEST demo\_managed\_root\_3,
          ls\_perm\_res\_root TYPE STRUCTURE
            FOR PERMISSIONS RESULT demo\_managed\_root\_3.
    lt\_perm\_key\_root = VALUE #( ( %key-key\_field = 5 )
                                ( %key-key\_field = 6 ) ).
    ls\_perm\_res\_root = VALUE #( ).
    "Child entity components for perm\_tab.
    DATA: lt\_perm\_key\_child TYPE TABLE
            FOR PERMISSIONS KEY demo\_managed\_child\_3,
          ls\_perm\_req\_child TYPE STRUCTURE
            FOR PERMISSIONS REQUEST demo\_managed\_child\_3,
          ls\_perm\_res\_child TYPE STRUCTURE
            FOR PERMISSIONS RESULT demo\_managed\_child\_3.
    lt\_perm\_key\_child = VALUE #( ( %key-key\_field = 5 )
                                 ( %key-key\_field = 6 ) ).
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
    output\_tabs\_root( i\_tab = ls\_perm\_res\_root-instances
                      g\_str = ls\_perm\_res\_root-global ).
    output\_tabs\_child( i\_tab\_child = ls\_perm\_res\_child-instances
                       g\_str\_child = ls\_perm\_res\_child-global ).
    clear\_itabs( ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_child\_2.
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
       data\_field2\_root = 'A'
       data\_field3\_root = 4
       data\_field4\_root = 16 )
     ( key\_field = 4
       data\_field1\_root = 'ddd'
       data\_field2\_root = 'B'
       data\_field3\_root = 20
       data\_field4\_root = 2 )
     ( key\_field = 5
       data\_field1\_root = 'eee'
       data\_field2\_root = 'A'
       data\_field3\_root = 1
       data\_field4\_root = 17 )
     ( key\_field = 6
       data\_field1\_root = 'fff'
       data\_field2\_root = 'B'
       data\_field3\_root = 21
       data\_field4\_root = 4 )
     ) ).
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
          data\_field4\_child = 2 )
        ( key\_field = 5
          data\_field1\_child = 'kkk'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ( key\_field = 6
          data\_field1\_child = 'lll'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ) ).
  ENDMETHOD.
  METHOD clear\_itabs.
    CLEAR lt\_result\_inst.
    CLEAR lt\_result\_global.
    CLEAR lt\_result\_inst\_child.
    CLEAR lt\_result\_global\_child.
  ENDMETHOD.
  METHOD output\_tabs\_root.
    out->write( \`Entries in INSTANCE table of root entity:\` ).
    LOOP AT i\_tab ASSIGNING FIELD-SYMBOL(<ls\_res\_inst>).
      APPEND VALUE #(
         key\_field        = <ls\_res\_inst>-key\_field
         update           = <ls\_res\_inst>-%update
         delete           = <ls\_res\_inst>-%delete
         assoc            = <ls\_res\_inst>-%assoc-\_child
         \_key\_field       = <ls\_res\_inst>-%field-key\_field
         data\_field1\_root = <ls\_res\_inst>-%field-data\_field1\_root
         data\_field2\_root = <ls\_res\_inst>-%field-data\_field2\_root
         data\_field3\_root = <ls\_res\_inst>-%field-data\_field3\_root
         data\_field4\_root = <ls\_res\_inst>-%field-data\_field4\_root
                    ) TO lt\_result\_inst.
    ENDLOOP.
    IF lt\_result\_inst IS INITIAL.
      out->write( \`No entries for INSTANCE table of root entity.\` ).
    ELSE.
      out->write( lt\_result\_inst ).
    ENDIF.
    out->write( \`Entries in GLOBAL structure of root entity:\` ).
    APPEND VALUE #(
         create           = g\_str-%create
         update           = g\_str-%update
         delete           = g\_str-%delete
         assoc            = g\_str-%assoc-\_child
         \_key\_field       = g\_str-%field-key\_field
         data\_field1\_root = g\_str-%field-data\_field1\_root
         data\_field2\_root = g\_str-%field-data\_field2\_root
         data\_field3\_root = g\_str-%field-data\_field3\_root
         data\_field4\_root = g\_str-%field-data\_field4\_root
                ) TO lt\_result\_global.
    out->write( lt\_result\_global ).
    CLEAR lt\_result\_inst.
    CLEAR lt\_result\_global.
  ENDMETHOD.
  METHOD output\_tabs\_child.
    out->write( \`Entries in INSTANCE table of child entity:\` ).
    LOOP AT i\_tab\_child ASSIGNING FIELD-SYMBOL(<ls\_res\_inst\_child>).
      APPEND VALUE #(
       key\_field         = <ls\_res\_inst\_child>-key\_field
       update            = <ls\_res\_inst\_child>-%update
       delete            = <ls\_res\_inst\_child>-%delete
       \_key\_field        = <ls\_res\_inst\_child>-%field-key\_field
       data\_field1\_child = <ls\_res\_inst\_child>-%field-data\_field1\_child
       data\_field2\_child = <ls\_res\_inst\_child>-%field-data\_field2\_child
       data\_field3\_child = <ls\_res\_inst\_child>-%field-data\_field3\_child
       data\_field4\_child = <ls\_res\_inst\_child>-%field-data\_field4\_child
                    ) TO lt\_result\_inst\_child.
    ENDLOOP.
    IF lt\_result\_inst\_child IS INITIAL.
      out->write( \`No entries for INSTANCE table of child entity.\` ).
    ELSE.
      out->write( lt\_result\_inst\_child ).
    ENDIF.
    out->write( \`Entries in GLOBAL structure of child entity:\` ).
    APPEND VALUE #(
         update            = g\_str\_child-%update
         delete            = g\_str\_child-%delete
         \_key\_field        = g\_str\_child-%field-key\_field
         data\_field1\_child = g\_str\_child-%field-data\_field1\_child
         data\_field2\_child = g\_str\_child-%field-data\_field2\_child
         data\_field3\_child = g\_str\_child-%field-data\_field3\_child
         data\_field4\_child = g\_str\_child-%field-data\_field4\_child
                ) TO lt\_result\_global\_child.
    out->write( lt\_result\_global\_child ).
    CLEAR lt\_result\_inst\_child.
    CLEAR lt\_result\_global\_child.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

Using the short, long and dynamic form of the GET PERMISSIONS statement, permissions are requested for specific instances of an entity. The addition ONLY INSTANCE FEATURES is used in each of the statements to get the permissions, as the name implies, for the instance feature controls only.

As a first step, the database tables that are used in the example are emptied and filled again with demo values as a basis for the example. Request parameters for the root and child entity are then specified. In this case, all fields, operations and one associated entity (the child entity) are enabled. These parameters are used in all GET PERMISSIONS statements.

Short form

-   The GET PERMISSIONS statement considers certain instances with keys that are specified after the keyword FROM. The request parameter has been specified before. The result parameter is of type TYPE STRUCTURE FOR PERMISSIONS RESULT and created inline. Response parameters are also specified, however, they are not used in the example.
-   To display the result of the permission request on the output screen, internal tables are created, one containing the entries of the instance table, the other containing the entries of the global structure. When executing the program and when the compiler reaches the GET PERMISSIONS statements, the method get\_instance\_features is called that fills the result accordingly.
-   Notes on the result, i. e. the content in the output tables:
    -   Entries in the instance table: The entries for the instance with key 1 show that the field assoc has the value 01. According to the implementation, a create-by-association operation is disabled in this case. The entries for both instances with the keys 1 and 2 show the value 02 (that is, read-only) for the data field data\_field1\_root since it was defined as readonly in the BDEF. It is a static feature control also displayed in this context (see the [Guidelines for the Permission Result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions_rules.htm)). The entries for data\_field3\_root and data\_field4\_root are determined by the get\_instance\_features method. The value 00 is available if the permission is unrestricted, 02 if the permissions is read-only.
    -   Entries in the global structure: The result also contains static information (see the [Guidelines for the Permission Result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions_rules.htm)). In this example, it is as follows: The key key\_field (in the output table it is named \_key\_field referring to the value in %fields to avoid having the same name as the actual instance key key\_field contained in the instance table) and the field data\_field2\_root show the value 01 (i. e. mandatory), the field data\_field1\_root shows the value 02 (i. e. readonly) as defined in the BDEF.

Long form

-   The GET PERMISSIONS statement includes requests for the root entity and the child entity individually.
-   Result for the root entity:
    
    It is the same request as in the short form on the root entity, yet using different keys. Consequently, the output is similar to the one of the short form. Since the values of the instances are different, the values of data\_field3\_root and data\_field4\_root are arranged differently in the result after calling the implemented method.
    
-   Result for the child entity:
    
    Similar to above, request parameters have been specified before, certain instances with specified keys are considered (following the keyword FROM) and the result parameter is declared inline. Response parameters are declared, too, but not relevant in the example. Additionally, internal tables for the child entity are set up to display the results in the output screen, too.
    
    Notes on the result, i. e. the content in the output tables for the child entity:
    
    -   Entries in the instance table: The key field of the child entity (in the table, it is \_key\_field) has the value 02 (i. e. unauthorized) which means a create-by-association operations is disabled in the context of the particular instance.
    -   Entries in the global structure: The result also contains static information. Hence, the field for the key of the child entity shows the value 02 (i. e. read-only) as defined in the BDEF (readonly).

Dynamic Form

The GET PERMISSIONS statement is basically set up similar to the long form example. The request is done with different keys but due to the individual values of the instances' fields, the results and, thus, the output tables show the same values for the root and child entity as in the long form example.