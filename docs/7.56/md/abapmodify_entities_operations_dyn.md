  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\)) → 

MODIFY ENTITIES OPERATIONS, Dynamic Form

Syntax

MODIFY ENTITIES *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* OPERATIONS op\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... response\_param.](#!ABAP_ADDITION_2@2@)

Effect

The dynamic version of the MODIFY ENTITIES statement executes multiple modify operations for multiple RAP BOs in one MODIFY statement.

op\_tab must be a table of type ABP\_BEHV\_CHANGES\_TAB. This table has specific components:

Component

Details

op

It is a mandatory component specifying the operation to be executed. It can be set with the defined constants, for example, op-m-create, of interface IF\_ABAP\_BEHV or just the predefined value for the operation in the interface, for example 'C' for a create operation (op = 'C').

entity\_name

It is a mandatory component and specifies the name of the BO entity for which the operation is executed. The name must be provided using capital letters.

sub\_name

Optional component. It is only relevant for specifying association names in case of create-by-association operations or for actions. The name must be provided using capital letters. In case of create-by-association operations, when using the constant if\_abap\_behv=>op-m-create\_ba, the alias name for the association must be provided in uppercase.

instances

It is a mandatory component specifying the instances in an internal table. The table is a reference variable with [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") DATA.

request

It is an optional component specifying an internal table for requests. The table is a reference variable with [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") DATA.

results

It is an optional component storing results of an action. The table is a reference variable with [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") DATA.

Addition 1   

... IN LOCAL MODE

Effect

The addition [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)) is used to exclude [feature controls](javascript:call_link\('abenbdl_actions_fc.htm'\)) and [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)). It can only be used within the RAP BO runtime implementation.

Addition 2   

... response\_param.

Effect

The addition [response\_param](javascript:call_link\('abapeml_response.htm'\)) represents the response parameters that can be specified. Used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY demonstrates an EML MODIFY ENTITIES OPERATIONS statement that includes CREATE, UPDATE and DELETE operations.

DATA: failed\_dyn       TYPE abp\_behv\_response\_tab,
      reported\_dyn     TYPE abp\_behv\_response\_tab,
      mapped\_dyn       TYPE abp\_behv\_response\_tab,
      op\_tab           TYPE abp\_behv\_changes\_tab,
      create\_root\_tab  TYPE TABLE FOR CREATE demo\_managed\_root,
      update\_root\_tab  TYPE TABLE FOR UPDATE demo\_managed\_root,
      delete\_root\_tab  TYPE TABLE FOR UPDATE demo\_managed\_root,
      cba              TYPE TABLE FOR CREATE demo\_managed\_root\\\_child,
      update\_child\_tab TYPE TABLE FOR UPDATE demo\_managed\_child,
      delete\_child\_tab TYPE TABLE FOR DELETE demo\_managed\_child.
create\_root\_tab = VALUE #(
            ( %cid = 'cid1'
              key\_field = 5
              %control-key\_field = if\_abap\_behv=>mk-on
              data\_field1\_root = 'aaa'
              %control-data\_field1\_root = if\_abap\_behv=>mk-on
              data\_field2\_root = 'bbb'
              %control-data\_field2\_root = if\_abap\_behv=>mk-on )
            ( %cid = 'cid2'
              key\_field = 6
              %control-key\_field = if\_abap\_behv=>mk-on
              data\_field1\_root = 'ccc'
              %control-data\_field1\_root = if\_abap\_behv=>mk-on
              data\_field2\_root = 'ddd'
              %control-data\_field2\_root = if\_abap\_behv=>mk-on )
            ( %cid = 'cid3'
              key\_field = 7
              %control-key\_field = if\_abap\_behv=>mk-on
              data\_field1\_root = 'eee'
              %control-data\_field1\_root = if\_abap\_behv=>mk-on
              data\_field2\_root = 'fff'
              %control-data\_field2\_root = if\_abap\_behv=>mk-on ) ).
update\_root\_tab = VALUE #(
          ( %cid\_ref = 'cid2'
            %control-key\_field = if\_abap\_behv=>mk-on
            data\_field1\_root = 'GGG'
            %control-data\_field1\_root = if\_abap\_behv=>mk-on
            data\_field2\_root = 'HHH'
            %control-data\_field2\_root = if\_abap\_behv=>mk-on ) ).
cba = VALUE #(
            ( %cid\_ref = 'cid1'
              %target = VALUE #( (
                %control-key\_field = if\_abap\_behv=>mk-off
                data\_field1\_child = 'iii'
                %control-data\_field1\_child = if\_abap\_behv=>mk-on
                data\_field2\_child = 'jjj'
                %control-data\_field2\_child = if\_abap\_behv=>mk-on
            ) ) )
            ( %cid\_ref = 'cid2'
              %target = VALUE #( (
                %control-key\_field = if\_abap\_behv=>mk-off
                data\_field1\_child = 'kkk'
                %control-data\_field1\_child = if\_abap\_behv=>mk-on
                data\_field2\_child = 'lll'
                %control-data\_field2\_child = if\_abap\_behv=>mk-on
            ) ) )
            ( %cid\_ref = 'cid3'
              %target = VALUE #( (
                %control-key\_field = if\_abap\_behv=>mk-off
                data\_field1\_child = 'mmm'
                %control-data\_field1\_child = if\_abap\_behv=>mk-on
                data\_field2\_child = 'nnn'
                %control-data\_field2\_child = if\_abap\_behv=>mk-on
            ) ) ) ).
update\_child\_tab = VALUE #(
           ( key\_field = 6
             %control-key\_field = if\_abap\_behv=>mk-off
             data\_field1\_child = 'OOO'
             %control-data\_field1\_child = if\_abap\_behv=>mk-on
             data\_field2\_child = 'PPP'
             %control-data\_field2\_child = if\_abap\_behv=>mk-on ) ).
delete\_root\_tab = VALUE #( ( key\_field = 7 ) ).
delete\_child\_tab = VALUE #( ( key\_field = 7 ) ).
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
         sub\_name    = '\_CHILD'
         instances   = REF #( cba ) )
       ( op = if\_abap\_behv=>op-m-update
         entity\_name = 'DEMO\_MANAGED\_CHILD'
         instances   = REF #( update\_child\_tab ) )
       ( op = if\_abap\_behv=>op-m-delete
         entity\_name = 'DEMO\_MANAGED\_CHILD'
         instances   = REF #( delete\_child\_tab ) )
       ).
MODIFY ENTITIES OPERATIONS op\_tab
  FAILED   failed\_dyn
  REPORTED reported\_dyn
  MAPPED   mapped\_dyn.

Executable Example

-   The example [ABAP EML - MODIFY, Variants](javascript:call_link\('abeneml_modify_alternatives_abexa.htm'\)) demonstrates this MODIFY variant with a simple managed RAP BO.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples.htm'\)).