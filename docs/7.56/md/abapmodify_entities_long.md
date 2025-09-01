  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\)) → 

MODIFY ENTITIES, Long Form

Syntax

MODIFY ENTITIES OF bdef *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]*
           ENTITY bdef1 [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\))
          *\[*ENTITY bdef2 [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\))*\]*
          *\[*...*\]*
          *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The long form of the MODIFY statement is used for executing multiple modify [operations](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) on multiple entities of a RAP BO. However, it can also be used for a single operation on a single RAP BO.

bdef must be a root entity followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of the root entity bdef. If specified in the BDEF, alias names should be used for bdef1, bdef2, and so on. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/bdef1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once.

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

The following source code section taken from DEMO\_RAP\_EML\_MODIFY demonstrates an EML MODIFY ENTITIES OF statement that includes CREATE, UPDATE and create-by-association operations.

MODIFY ENTITIES OF demo\_managed\_root
    ENTITY demo\_managed\_root
        CREATE SET FIELDS WITH VALUE #(
          ( %cid = 'cid5'
            key\_field = 3
            data\_field1\_root = 'iii'
            data\_field2\_root = 'jjj')
          ( %cid = 'cid6'
            key\_field = 4
            data\_field1\_root = 'kkk'
            data\_field2\_root = 'lll') )
    ENTITY demo\_managed\_root
        UPDATE SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid6'
            data\_field1\_root = 'mmm'
            data\_field2\_root = 'nnn') )
    ENTITY demo\_managed\_root
        CREATE BY \\\_child SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid5'
            %target = VALUE #( ( %cid = 'cid7'
                                 data\_field1\_child = 'eee'
                                 data\_field2\_child = 'fff' )
                             ) )
          ( %cid\_ref = 'cid6'
            %target = VALUE #( ( %cid = 'cid8'
                                 data\_field1\_child = 'ggg'
                                 data\_field2\_child = 'hhh' )
                             ) ) )
    ENTITY child
        UPDATE SET FIELDS WITH VALUE #(
          ( %cid\_ref = 'cid8'
            data\_field1\_child = 'ooo'
            data\_field2\_child = 'ppp') )
        FAILED   DATA(fail\_mod)
        REPORTED DATA(rep\_mod)
        MAPPED   DATA(map\_mod).

Example

The root entity name in the position of the first statement, MODIFY ENTITIES OF bdef, must be the full entity name. bdef1, and so on, should be the entity alias names if provided in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

For example, an alias name is specified for root and child entity as in the BDEF DEMO\_RAP\_MANAGED\_GROUP. A statement with MODIFY ENTITIES OF could be as follows:

MODIFY ENTITIES OF demo\_rap\_managed\_group
  ENTITY RootEntity
    CREATE SET FIELDS WITH VALUE #(
        (  %cid = 'cid1' keyfieldroot = 1
           datafieldroot = 'aaa' charfieldroot = 'bbb' )
        (  %cid = 'cid2' keyfieldroot = 2
           datafieldroot = 'ccc' charfieldroot = 'ddd' )
              )
  ENTITY ChildEntity
    DELETE FROM VALUE #(
        ( keyfield = 3 keyfieldchild = 4 )
        ( keyfield = 5 keyfieldchild = 6 )
              ).

Executable Example

-   The example [ABAP EML - MODIFY, Variants](javascript:call_link\('abeneml_modify_alternatives_abexa.htm'\)) demonstrates this MODIFY variant with a simple managed RAP BO.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples.htm'\)).