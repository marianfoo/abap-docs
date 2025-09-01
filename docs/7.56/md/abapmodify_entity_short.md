  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\)) → 

MODIFY ENTITY, Short Form

Syntax

MODIFY ENTITY *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* bdef [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The short form of the MODIFY statement is used to perform transactional modify [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) for a single RAP BO node.

bdef can be any node of the RAP BO when the statement is used within the implementation class. If the statement is used outside of the implementation class, bdef can only be the root entity. bdef must be the full entity name and cannot be an alias name. It is also possible to specify any node of the RAP BO following the root entity name and \\\\:

MODIFY ENTITY root\_entity\\\\bdef\_node1 ...
MODIFY ENTITY root\_entity\\\\bdef\_node2 ...
...

bdef\_node1, bdef\_node2, and so on, must be the alias names if provided in the BDEF. Otherwise, the full names must be inserted.

Multiple operations can be inserted for operations within a single MODIFY statement.

Addition 1   

... IN LOCAL MODE

Effect

The addition [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)) is used to exclude [feature controls](javascript:call_link\('abenbdl_actions_fc.htm'\)) and [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)). It can only be used within the RAP BO runtime implementation.

Addition 2   

... PRIVILEGED

Effect

The addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](javascript:call_link\('abapeml_response.htm'\)) represents the response parameters that can be specified.

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY demonstrates an EML MODIFY ENTITY statement that includes a CREATE and create-by-association operation.

MODIFY ENTITY demo\_managed\_root
      CREATE SET FIELDS WITH VALUE #(
        ( %cid = 'cid1' key\_field = 1
          data\_field1\_root = 'aaa' data\_field2\_root = 'bbb' )
        ( %cid = 'cid2' key\_field = 2
          data\_field1\_root = 'ccc' data\_field2\_root = 'ddd' ) )
      CREATE BY \\\_child SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #( ( %cid = 'cid3'
                               data\_field1\_child = 'eee'
                               data\_field2\_child = 'fff' )
                           ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #( ( %cid = 'cid4'
                               data\_field1\_child = 'ggg'
                               data\_field2\_child = 'hhh' )
                           ) )
        )
        FAILED   DATA(fail\_mod)
        REPORTED DATA(rep\_mod)
        MAPPED DATA(map\_mod).

Executable Example

-   The example [ABAP EML - MODIFY, Variants](javascript:call_link\('abeneml_modify_alternatives_abexa.htm'\)) demonstrates this MODIFY variant with a simple managed RAP BO.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples.htm'\)).