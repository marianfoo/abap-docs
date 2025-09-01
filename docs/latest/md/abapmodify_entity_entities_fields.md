---
title: "Syntax"
description: |
  ...   FROM fields_tab(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm)    AUTO FILL CID WITH fields_tab(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm)    AUTO FILL CID FIELDS ( comp1 co
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_fields.htm"
abapFile: "abapmodify_entity_entities_fields.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapmodify", "entity", "entities", "fields"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) →  [MODIFY ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20ENTITY%2C%20ENTITIES%2C%20field_spec%2C%20ABAPMODIFY_ENTITY_ENTITIES_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

MODIFY ENTITY, ENTITIES, field\_spec

Syntax

...  *{* FROM [fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* AUTO FILL CID WITH [fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* *\[*AUTO FILL CID*\]* FIELDS ( comp1 comp2 ... ) WITH [fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* *\[*AUTO FILL CID*\]* SET FIELDS WITH [fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm) *}* ...

Variants:

[1\. ... FROM fields\_tab](#!ABAP_VARIANT_1@1@)
[2\. ... AUTO FILL CID WITH fields\_tab](#!ABAP_VARIANT_2@2@)
[3\. ... *\[*AUTO FILL CID*\]* FIELDS ( comp1 comp2 ... ) WITH fields\_tab](#!ABAP_VARIANT_3@3@)
[4\. ... *\[*AUTO FILL CID*\]* SET FIELDS WITH fields\_tab](#!ABAP_VARIANT_4@4@)

Addition:

[... AUTO FILL CID](#!ABAP_ONE_ADD@1@)

Effect

The field specification expressions are used to specify input parameters on whose basis modify operations can be performed on entity instances.

The variants FIELDS (...) WITH and SET FIELDS WITH can be used for the operations CREATE, CREATE BY and UPDATE. The variant FROM is the only option for DELETE and EXECUTE in most cases. The variants with AUTO FILL CID can be used for the operations CREATE and CREATE BY.

The parameters that are respected for modify operations must be specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm)). It is essential that the internal table is typed with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). Depending on the operation and the variant, the parameters of the internal table comprise [special components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm).

The following table provides an overview of the operations, which field specification expressions are possible for the operations, and which type and components of the required internal table are relevant. Depending on the context, the components listed in the Components column might cover more than mentioned. For example, the draft indicator %is\_draft is available in case of [draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) scenarios only. %pid is only available in [late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm) scenarios.

Operation

Field Specification Expression

Type of Internal Table fields\_tab

Components of Internal Table

CREATE

FROM
AUTO FILL CID WITH
FIELDS (...) WITH
SET FIELDS WITH

TABLE FOR CREATE bdef

%cid
%control
%data
%key
Note: In case of FROM and AUTO FILL CID WITH, %control must be filled explicitly.

CREATE BY \_assoc

FROM
AUTO FILL CID WITH
FIELDS (...) WITH
SET FIELDS WITH

TABLE FOR CREATE bdef\\\_assoc

%cid\_ref
%key
%pky
%target
%tky
Note: In case of FROM and AUTO FILL CID WITH, %control must be filled explicitly within %target.

UPDATE

FROM
FIELDS (...) WITH
SET FIELDS WITH

TABLE FOR UPDATE bdef

%cid\_ref
%control
%data
%key
%pky
%tky
Note: In case of FROM, %control must be filled explicitly.

DELETE

FROM

TABLE FOR DELETE bdef

%cid\_ref
%key
%pky
%tky

EXECUTE

FROM

TABLE FOR ACTION IMPORT bdef~action

%cid\_ref
%key
%param
%pky
%tky

bdef is the root entity name, \_assoc the name of the association defined in the underlying CDS view of the root entity, and action the name of an action specified in the BDEF. See the details on the components in the documentation for [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm).

Hints

-   In case of operations for which %cid\_ref can be specified in the internal table, the mandatory specification of the keys in the internal table can be omitted if a clear reference to the instance that is to be modified is given using %cid\_ref.
-   In case of create and create-by-association operations, %cid should be specified even if the [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") is not interested in %cid.
-   The additions FIELDS ( ... ) WITH and SET FIELDS WITH are only possible for modify operations executing actions (using EXECUTE) if the action is defined with [deep *\[*table*\]* parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) and without a [selective](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm) parameter in the BDEF.

Variant 1   

... FROM fields\_tab

Effect

The modify operation respects input parameters specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm)). It can be used for all operations (CREATE, CREATE BY, UPDATE, DELETE, EXECUTE) and it is the only option for DELETE and EXECUTE. The [%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) structure must be filled explicitly in the internal table fields\_tab for CREATE, CREATE BY and UPDATE.

Note:

-   Due to the explicit filling of the %control structure, more lines of code are necessary compared with the variants FIELDS (...) WITH and SET FIELDS WITH.
-   A syntax check on static read-only fields is not possible with this variant (in contrast to FIELDS (...) WITH).
-   Fields can be set to initial values.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_MODIFY\_OPRTNS demonstrates the keyword FROM within a MODIFY statement.

MODIFY ENTITY demo\_managed\_root
      CREATE FROM VALUE #(
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
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
        ( %cid = 'cid4'
          key\_field = 4
          %control-key\_field = if\_abap\_behv=>mk-on
          data\_field1\_root = 'ggg'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'hhh'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
         )
      CREATE BY \\\_child FROM  VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #(
                ( %cid = 'cid5'
                  data\_field1\_child = 'zzz'
                  %control-data\_field1\_child = if\_abap\_behv=>mk-on
                  data\_field2\_child = 'yyy'
                  %control-data\_field2\_child = if\_abap\_behv=>mk-on )
                 ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #(
               ( %cid = 'cid6'
                 data\_field1\_child = 'xxx'
                 %control-data\_field1\_child = if\_abap\_behv=>mk-on
                 data\_field2\_child = 'www'
                 %control-data\_field2\_child = if\_abap\_behv=>mk-on )
               ) )
        )
      UPDATE FROM VALUE #(
        ( %cid\_ref = 'cid3'
          data\_field1\_root = 'iii'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'jjj'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
         )
      DELETE FROM VALUE #( ( %cid\_ref = 'cid4' ) )
        FAILED  FINAL(failed)
        REPORTED FINAL(reported).

Variant 2   

... AUTO FILL CID WITH fields\_tab

Effect

It is basically the variant ... FROM fields\_tab using the addition AUTO FILL CID. In this case, the keyword WITH must be used before fields\_tab instead of FROM. The [%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) structure must be filled explicitly in the internal table fields\_tab. The variant can be used for CREATE and CREATE BY. See the details on AUTO FILL CID further down.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_AUTO\_FILL\_CID demonstrates the use of AUTO FILL CID WITH with a create operation as part of an ABAP EML MODIFY statement.

MODIFY ENTITY demo\_managed\_root\_4
CREATE AUTO FILL CID WITH VALUE #(
    ( key\_field = 3
      %control-key\_field = if\_abap\_behv=>mk-on
      field1 = 'create\_5'
      %control-field1 = if\_abap\_behv=>mk-on
      field2 = 'create\_6'
      %control-field2 = if\_abap\_behv=>mk-on
      field3 = 5
      %control-field3 = if\_abap\_behv=>mk-on
      field4 = 6
      %control-field4 = if\_abap\_behv=>mk-on )
    ( key\_field = 4
      %control-key\_field = if\_abap\_behv=>mk-on
      field1 = 'create\_7'
      %control-field1 = if\_abap\_behv=>mk-on
      field2 = 'create\_8'
      %control-field2 = if\_abap\_behv=>mk-on
      field3 = 7
      %control-field3 = if\_abap\_behv=>mk-on
      field4 = 8
      %control-field4 = if\_abap\_behv=>mk-on )
    )
    MAPPED FINAL(mapped\_auto\_cid\_root).

Variant 3   

... FIELDS ( comp1 comp2 ... ) WITH fields\_tab

Effect

Using this variant, you specify the fields that should be respected by a [RAP BO operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") in a field list in parentheses after the keyword FIELDS. For example, you specify the fields of [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") that should be updated. The input parameters are specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm)). The fields (comp1, comp2, etc.) can be any of the entity's fields. At least one field must be specified in the field list. The fields are not separated by a comma. The order of the fields provided in this list is irrelevant.

The variant is a convenience variant and a shortcut for FROM. It cannot be used for DELETE and EXECUTE. %control is filled implicitly in fields\_tab. If a field is specified within the brackets of FIELDS (...) WITH, it is set to the hexadecimal value 01 in the %control structure. Otherwise, it is set to the hexadecimal value 00.

Note:

-   A syntax check on static read-only fields is possible with this variant when specifying the fields within the parentheses of FIELDS (...) WITH.
-   Fields can be set to initial values.
-   If the key is not specified within the parentheses, the initial value for the key is used for the operation (even if a concrete value for the key is specified in the BDEF derived type). The initial value for the key is also used if the key is specified within the parentheses but a concrete value is not specified in the BDEF derived type.

Example

The following source code demonstrates the implicit setting of the %control structure component values using FIELDS (...) WITH within MODIFY statements.

First, an internal table typed with a [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") is created and filled. This table is used to create a [RAP BO instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") in the context of a [RAP create operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_create_operation_glosry.htm "Glossary Entry"). All data fields are specified within the parentheses of the FIELDS (...) WITH addition as part of an ABAP EML MODIFY statement. As a next step, the internal table is filled with other values followed by another ABAP EML MODIFY statement. Here, the fields specified within the parentheses of FIELDS (...) WITH purposely do not include all fields.

The outcome shows the effect of the field specification and the implicit setting of the %control structure. Before the ABAP EML modify request, all hexadecimal values of the input table are 00. For the first ABAP EML modify request in which all fields are specified, all values in the %control structure are set to 01. For the second ABAP EML modify request, only those components in the %control structure are set to the hexadecimal value 01 that are specified within the parentheses of the FIELDS (...) WITH addition. Consequently, despite specifying values in the input table, these fields have their initial value in the created instance.

DELETE FROM demo\_tab\_root\_3.
DATA input TYPE TABLE FOR CREATE demo\_managed\_root\_4.
input = VALUE #( ( key\_field = 1 field1 = 'a' field2 = 'a' field3 = 1
                   field4 = 1 ) ).
cl\_demo\_output=>write( input ).
MODIFY ENTITY demo\_managed\_root\_4
  CREATE FIELDS ( key\_field field1 field2 field3 field4 ) WITH input.
cl\_demo\_output=>write( input ).
input = VALUE #( ( key\_field = 2 field1 = 'b' field2 = 'b' field3 = 2
                   field4 = 2 ) ).
MODIFY ENTITY demo\_managed\_root\_4
  CREATE FIELDS ( key\_field field1 field4 ) WITH input.
cl\_demo\_output=>write( input ).
COMMIT ENTITIES.
SELECT \* FROM demo\_tab\_root\_3 INTO TABLE @FINAL(itab).
cl\_demo\_output=>display( itab ).

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_MODIFY\_OPRTNS demonstrates the keywords FIELDS (...) WITH within a MODIFY statement.

MODIFY ENTITY demo\_managed\_root
      CREATE FIELDS ( key\_field data\_field1\_root
                      data\_field2\_root )
        WITH VALUE #(
        ( %cid = 'cid7'
          key\_field = 5
          data\_field1\_root = 'kkk'
          data\_field2\_root = 'lll'  )
        ( %cid = 'cid8'
          key\_field = 6
          data\_field1\_root = 'mmm'
          data\_field2\_root = 'nnn'  )
        )
      CREATE BY \\\_child FIELDS ( data\_field1\_child
                                 data\_field2\_child )
        WITH VALUE #(
        ( %cid\_ref = 'cid8'
          %target = VALUE #( ( %cid = 'cid9'
                               data\_field1\_child = 'vvv'
                               data\_field2\_child = 'uuu' )
                           ) )
        )
      UPDATE FIELDS ( data\_field1\_root
                      data\_field2\_root )
        WITH VALUE #(
       ( %cid\_ref = 'cid7'
         data\_field1\_root = 'ooo'
         data\_field2\_root = 'ppp' )
         )
        FAILED   FINAL(failed)
        REPORTED FINAL(reported).

The FIELDS ( ... ) WITH addition supports the setting of %control regarding components in [deep input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm) in the context of deep [action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") and [function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry") parameters. In this context, setting values of the %control structure is only possible if the [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") for a [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") is defined with [with hierarchy;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_abstract_header.htm) and the behavior for one or more of the nodes of the [CDS composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") is defined with [define behavior for ... with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@).

With the following syntax options, the setting of %control values (in [%param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_param.htm)) can be more detailed out for components of associated entities, for example, if only subcomponents of associated abstract entities are to be flagged and not the whole abstract entity itself:

-   An additional pair of parentheses following an associated abstract entity \_ent containing components (e. g. comp1) denotes that \_ent is not flagged itself but the subcomponents specified: ... FIELDS ( ... \_ent ( comp1 comp2 ... ) ... ) WITH ...
-   + before the additional pair of parentheses following an associated abstract entity \_ent containing components (e. g. comp1) denotes that the specified subcomponents are flagged and the abstract entity \_ent itself, too: ... FIELDS ( ...   \_ent +( comp1 comp2 ... ) ... ) WITH ...

In the following code snippets, a represents a field of the parent abstract entity, \_ent represents an associated abstract entity. b represents a subcomponent contained in \_ent. The example demonstrates the effect on the %control structures contained in %param:

... FIELDS ( a \_ent ) WITH ...
"%param-%control-a: flagged
"%param-%control-\_ent: flagged
"%param-\_ent-%control-b: not flagged
... FIELDS ( a \_ent ( b ) ) WITH ...
"%param-%control-a: flagged
"%param-%control-\_ent: not flagged
"%param-\_ent-%control-b: flagged
... FIELDS ( a \_ent +( b ) ) WITH ...
"%param-%control-a: flagged
"%param-%control-\_ent: flagged
"%param-\_ent-%control-b: flagged

See the program DEMO\_RAP\_EML\_DEEP\_PARAM\_FIELDS that visualizes these syntax options using an action.

Variant 4   

... *\[*AUTO FILL CID*\]* SET FIELDS WITH fields\_tab

Effect

It is a convenience variant and shortcut for FROM. The modify operation respects input parameters specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_fields_tab.htm)).

Using this variant is not recommended for the following reasons:

-   The variant is very slow if the input is very large. Hence, using it leads to a syntax warning that can be removed by the pragma ##SETFIELDS\_OK. Note that the syntax warning does not come up if the internal table following SET FIELDS WITH is specified using a [constructor expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm).
-   A syntax check on static read-only fields is not possible with this variant (in contrast to FIELDS (...) WITH).
-   Fields cannot be set to initial values.

The variant cannot be used for DELETE and EXECUTE. %control is filled implicitly in fields\_tab. If a field is specified in fields\_tab, it is set to the hexadecimal value 01 in the %control structure. Otherwise, it is set to the hexadecimal value 00.

Note:

-   A syntax check on static read-only fields is not possible with this variant (in contrast to FIELDS (...) WITH).
-   Fields cannot be set to initial values.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_MODIFY\_OPRTNS demonstrates the keywords SET FIELDS WITH within an ABAP EML MODIFY statement.

MODIFY ENTITY demo\_managed\_root
      CREATE SET FIELDS ##SETFIELDS\_OK
      WITH VALUE #(
        ( %cid = 'cid10'
          key\_field = 7
          data\_field1\_root = 'qqq'
          data\_field2\_root = 'rrr'  )
        ( %cid = 'cid11'
          key\_field = 8
          data\_field1\_root = 'sss'
          data\_field2\_root = 'ttt'  )
        )
      CREATE BY \\\_child SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid10'
          %target = VALUE #( ( %cid = 'cid12'
                               data\_field1\_child = 'ttt'
                               data\_field2\_child = 'sss' )
                           ) )
        ( %cid\_ref = 'cid11'
          %target = VALUE #( ( %cid = 'cid13'
                               data\_field1\_child = 'rrr'
                               data\_field2\_child = 'qqq' )
                           ) )
        )
      UPDATE SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid11'
          data\_field1\_root = 'uuu'
          data\_field2\_root = 'vvv' )
         )
        FAILED   FINAL(failed)
        REPORTED FINAL(reported).

Addition   

... AUTO FILL CID ...

Effect

The addition AUTO FILL CID is used for create and create-by-association operations as well as [factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) and static actions to create [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) automatically to ensure that %cid is filled. Specifying %cid should be done even if the [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") is not interested. Especially in the context of [early numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_early_numb.htm) and [late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm) scenarios, %cid must be specified to avoid issues.

If the addition is specified and %cid is initial, %cid gets automatically filled with dummy values that have the prefix %abap\_eml\_cid\_\_. This prefix is followed by numbers, for example, %abap\_eml\_cid\_\_1, %abap\_eml\_cid\_\_2, and so on. If the addition is specified and %cid is specified manually, too, only the manually specified value for %cid is valid.

If %cid\_ref is to be used, %cid must be specified manually since %cid\_ref cannot refer to an automatically created value.

If AUTO FILL CID is not used, %cid must not be filled with a value prefixed by %abap\_eml\_cid\_\_. Otherwise, the runtime error BEHAVIOR\_RESERVED\_PREFIX occurs.

Example

The following source code (see more examples here: CL\_DEMO\_RAP\_EML\_AUTO\_FILL\_CID) demonstrates the use of AUTO FILL CID and FIELDS ( ... ) WITH with a create-by-association operation as part of an ABAP EML MODIFY statement.

MODIFY ENTITY demo\_managed\_root\_4
     CREATE BY \\\_child AUTO FILL CID
     FIELDS ( key\_field\_child field1 field2 field3 field4 )
     WITH VALUE #(
        ( key\_field = 3
          %target = VALUE #(
           ( key\_field\_child = 3
             field1 = 'cba\_5'
             field2 = 'cba\_6'
             field3 = 5
             field4 = 6 )
           ) )
         ( key\_field = 4
           %target = VALUE #(
           ( key\_field\_child = 4
             field1 = 'cba\_7'
             field2 = 'cba\_8'
             field3 = 7
             field4 = 8 )
            ) ) )
          MAPPED FINAL(mapped\_auto\_cid\_child).

Executable Example

-   The example [MODIFY: Field Specification Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_modify_op_fields_abexa.htm) demonstrates the variants of field selection when setting up internal tables for different modify statements and hence the manipulation of a simple managed RAP BO.
-   The class CL\_DEMO\_RAP\_EML\_AUTO\_FILL\_CID demonstrates create and create-by-association operations with manually specified %cid components and automatically created ones using AUTO FILL CID. The output shows the [MAPPED responses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) of the operations as well as the instances that are persisted to the database following [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statements.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_modify_examples_abexas.htm).