  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY ENTITIES OPERATIONS, Dynamic Form, ABAPMODIFY_ENTITIES_OPERATIONS_DYN, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

MODIFY ENTITIES OPERATIONS, Dynamic Form

Syntax

MODIFY ENTITIES *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_privileged.htm)*\]* OPERATIONS op\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE ...](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

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

It is a mandatory component specifying the instances in an internal table. The table is a reference variable with [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") DATA.

request

It is an optional component specifying an internal table for requests. The table is a reference variable with [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") DATA.

results

It is an optional component storing results of an action. The table is a reference variable with [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") DATA.

Hint

-   A [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must not use ABAP EML MODIFY statements in the [RAP saver methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [check\_before\_save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_check_before_save.htm), [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm), [save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_save.htm), [save\_modified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_saver_meth_save_modified.htm) and [cleanup](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_cleanup.htm). The statements can only be used in the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and in the [finalize](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_finalize.htm) saver method in the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). Furthermore, ABAP EML MODIFY statements are not allowed in read-only [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry").

Addition 1   

... IN LOCAL MODE

Effect

The addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapin_local_mode.htm) is used to exclude [feature controls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) and [authorization checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm). It can only be used within the RAP BO runtime implementation.

Addition 2   

... PRIVILEGED ...

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) represents the response parameters that can be specified. Used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

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
                %cid = 'cid\_cba1'
                %control-key\_field = if\_abap\_behv=>mk-off
                data\_field1\_child = 'iii'
                %control-data\_field1\_child = if\_abap\_behv=>mk-on
                data\_field2\_child = 'jjj'
                %control-data\_field2\_child = if\_abap\_behv=>mk-on
            ) ) )
            ( %cid\_ref = 'cid2'
              %target = VALUE #( (
                %cid = 'cid\_cba2'
                %control-key\_field = if\_abap\_behv=>mk-off
                data\_field1\_child = 'kkk'
                %control-data\_field1\_child = if\_abap\_behv=>mk-on
                data\_field2\_child = 'lll'
                %control-data\_field2\_child = if\_abap\_behv=>mk-on
            ) ) )
            ( %cid\_ref = 'cid3'
              %target = VALUE #( (
                %cid = 'cid\_cba3'
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

-   The example [ABAP EML - MODIFY, Variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_alternatives_abexa.htm) demonstrates this MODIFY variant with a simple managed RAP BO.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_modify_examples_abexas.htm).