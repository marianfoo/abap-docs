---
title: "Syntax"
description: |
  ...   FROM fields_tab(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm)    AUTO FILL CID WITH fields_tab(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm)    AUTO FILL CID FIELDS ( comp1 comp2 ... )
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_fields.htm"
abapFile: "abapmodify_entity_entities_fields.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "data", "types", "internal-table", "abapmodify", "entity", "entities", "fields"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm) →  [MODIFY ENTITY, ENTITIES, operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) → 

MODIFY ENTITY, ENTITIES, field\_spec

Syntax

...  *{* FROM [fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* AUTO FILL CID WITH [fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* *\[*AUTO FILL CID*\]* FIELDS ( comp1 comp2 ... ) WITH [fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm) *}*
   *|* *{* *\[*AUTO FILL CID*\]* SET FIELDS WITH [fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm) *}* ...

Variants:

[1\. ... FROM fields\_tab](#!ABAP_VARIANT_1@1@)
[2\. ... AUTO FILL CID WITH fields\_tab](#!ABAP_VARIANT_2@2@)
[3\. ... *\[*AUTO FILL CID*\]* FIELDS ( comp1 comp2 ... ) WITH fields\_tab](#!ABAP_VARIANT_3@3@)
[4\. ... *\[*AUTO FILL CID*\]* SET FIELDS WITH fields\_tab](#!ABAP_VARIANT_4@4@)

Addition:

[... AUTO FILL CID](#!ABAP_ONE_ADD@1@)

Effect

The field specification expressions are used to specify input parameters on whose basis modify operations can be performed on entity instances.

The variants FIELDS (...) WITH and SET FIELDS WITH can be used for the operations CREATE, CREATE BY and UPDATE. The variant FROM is the only option for DELETE and EXECUTE. The variants with AUTO FILL CID can be used for the operations CREATE and CREATE BY.

The parameters that are respected for modify operations must be specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm)). It is essential that the internal table is typed with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). Depending on the operation and the variant, the parameters of the internal table comprise [special components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm).

The following table provides an overview of the operations, which field specification expressions are possible for the operations, and which type and components of the required internal table are relevant. Depending on the context, the components listed in the Components column might cover more than mentioned. For example, the draft indicator %is\_draft is available in case of [draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm) scenarios only. %pid is only available in [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenarios.

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

bdef is the root entity name, \_assoc the name of the association defined in the underlying CDS view of the root entity, and action the name of an action specified in the BDEF. See the details on the components in the documentation for [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm).

Hints

-   In case of operations for which %cid\_ref can be specified in the internal table, the mandatory specification of the keys in the internal table can be omitted if a clear reference to the instance that is to be modified is given using %cid\_ref.
-   In case of create and create-by-association operations, %cid should be specified even if the [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") is not interested in %cid.

Variant 1   

... FROM fields\_tab

Effect

The modify operation respects input parameters specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm)). It can be used for all operations (CREATE, CREATE BY, UPDATE, DELETE, EXECUTE) and it is the only option for DELETE and EXECUTE. The [%control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) structure must be filled explicitly in the internal table fields\_tab for CREATE, CREATE BY and UPDATE.

Note:

-   Due to the explicit filling of the %control structure, more lines of code are necessary compared to the variants FIELDS (...) WITH and SET FIELDS WITH.
-   A syntax check on static read-only fields is not possible with this variant (in contrast to FIELDS (...) WITH).
-   Fields can be set to initial values.

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OPERATIONS demonstrates the keyword FROM within a MODIFY statement.

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
        FAILED  DATA(failed)
        REPORTED DATA(reported).

Variant 2   

... AUTO FILL CID WITH fields\_tab

Effect

It is basically the variant ... FROM fields\_tab using the addition AUTO FILL CID. In this case, the keyword WITH must be used before fields\_tab instead of FROM. The [%control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) structure must be filled explicitly in the internal table fields\_tab. The variant can be used for CREATE and CREATE BY. See the details on AUTO FILL CID further down.

Example

The following source code section taken from DEMO\_RAP\_EML\_AUTO\_FILL\_CID demonstrates the use of AUTO FILL CID WITH with a create operation as part of an ABAP EML MODIFY statement.

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
    MAPPED DATA(mapped\_auto\_cid\_root).

Variant 3   

... FIELDS ( comp1 comp2 ... ) WITH fields\_tab

Effect

Fields that are to be updated for an instance or required for creating an instance are specified in a field list in parentheses after the keyword FIELDS. The input parameters for the read operation are specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm)). The fields (comp1, comp2, etc.) can be any of the entity's fields. At least one field must be specified in the field list. The fields are not separated by a comma. The order of the fields provided in this list is irrelevant.

The variant is a convenience variant and a shortcut for FROM. It cannot be used for DELETE and EXECUTE. %control is filled implicitly in fields\_tab. If a field is specified within the brackets of FIELDS (...) WITH, it is set to 01 in the %control structure. Otherwise, it is set to 00.

Note:

-   A syntax check on static read-only fields is possible with this variant when specifying the fields within the brackets of FIELDS (...) WITH.
-   Fields can be set to initial values.

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OPERATIONS demonstrates the keywords FIELDS (...) WITH within a MODIFY statement.

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
      UPDATE FIELDS ( key\_field data\_field1\_root
                      data\_field2\_root )
        WITH VALUE #(
       ( %cid\_ref = 'cid7'
         data\_field1\_root = 'ooo'
         data\_field2\_root = 'ppp' )
         )
        FAILED   DATA(failed)
        REPORTED DATA(reported).

Variant 4   

... *\[*AUTO FILL CID*\]* SET FIELDS WITH fields\_tab

Effect

It is a convenience variant and shortcut for FROM. The modify operation respects input parameters specified in an internal table ([fields\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_fields_tab.htm)).

The variant cannot be used for DELETE and EXECUTE. %control is filled implicitly in fields\_tab. If a field is specified in fields\_tab, it is set to 01 in the %control structure. Otherwise, it is set to 00.

Note:

-   A syntax check on static read-only fields is not possible with this variant (in contrast to FIELDS (...) WITH).
-   Fields cannot be set to initial values.

Example

The following source code section taken from DEMO\_RAP\_EML\_MODIFY\_OPERATIONS demonstrates the keywords SET FIELDS WITH within an ABAP EML MODIFY statement.

MODIFY ENTITY demo\_managed\_root
      CREATE SET FIELDS WITH VALUE #(
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
        FAILED   DATA(failed)
        REPORTED DATA(reported).

Addition   

... AUTO FILL CID

Effect

The addition AUTO FILL CID is used for create and create-by-association operations as well as [factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) to create [%cid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) automatically to ensure that %cid is filled. Specifying %cid should be done even if the [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") is not interested. Especially in the context of [early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_early_numb.htm) and [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenarios, %cid must be specified to avoid issues.

If the addition is specified and %cid is initial, %cid gets automatically filled with dummy values that have the prefix %abap\_eml\_cid\_\_. This prefix is followed by numbers, for example, %abap\_eml\_cid\_\_1, %abap\_eml\_cid\_\_2, and so on. If the addition is specified and %cid is specified manually, too, only the manually specified value for %cid is valid.

If %cid\_ref is to be used, %cid must be specified manually since %cid\_ref cannot refer to an automatically created value.

Example

The following source code section taken from DEMO\_RAP\_EML\_AUTO\_FILL\_CID demonstrates the use of AUTO FILL CID and SET FIELDS WITH with a create-by-association operation as part of an ABAP EML MODIFY statement.

MODIFY ENTITY demo\_managed\_root\_4
     CREATE BY \\\_child AUTO FILL CID SET FIELDS WITH VALUE #(
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
          MAPPED DATA(mapped\_auto\_cid\_child).

Executable Example

-   The example [MODIFY: Field Specification Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_modify_op_fields_abexa.htm) demonstrates the variants of field selection when setting up internal tables for different modify statements and hence the manipulation of a simple managed RAP BO.
-   The program DEMO\_RAP\_EML\_AUTO\_FILL\_CID demonstrates create and create-by-association operations with manually specified %cid components and automatically created ones using AUTO FILL CID. The output shows the [MAPPED responses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) of the operations as well as the instances that are persisted to the database following [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm) statements.
-   For more examples on MODIFY operations in general, see [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_modify_examples.htm).