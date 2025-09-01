  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_other.htm) →  [Type Mapping for RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_type_mapping.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Statements%20with%20MAPPING%20FROM%20ENTITY%2C%20ABAPMAPPING_FROM_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

ABAP SQL Statements with MAPPING FROM ENTITY

Syntax

  *{* [INSERT ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_dbtab.htm) *}*
*|* *{* [MODIFY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm) *}*
*|* *{* [UPDATE ... *\[*INDICATORS SET STRUCTURE %control*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) *}*
*|* *{* [DELETE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) *}* MAPPING FROM ENTITY.

Variants:

[1\. INSERT ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_1@1@)
[2\. MODIFY ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_2@2@)
[3\. UPDATE ...  *\[*INDICATORS SET STRUCTURE %control*\]* MAPPING FROM ENTITY.](#!ABAP_VARIANT_3@3@)
[4\. DELETE ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_4@4@)

Effect

The addition MAPPING FROM ENTITY of the modifying ABAP SQL statements [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm), and [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) is used to handle structures and internal tables that are typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

Hints

-   In case of a problematic type conversion when using these statements, for example INT4 to NUMC, a [... CORRESPONDING #( ... MAPPING FROM ENTITY ) ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_corresponding.htm) is automatically carried out without an explicit programming.
-   The catchable exception CX\_SY\_CONVERSION\_ERROR occurs in case of type conversion errors.

Variant 1   

INSERT ... MAPPING FROM ENTITY.

Effect

Used to insert one or more rows from a [source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_source.htm) into a [target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm). See the detailed syntax options for INSERT in the [INSERT topic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_dbtab.htm).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm) and [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) respectively. In this case, the types ... FOR UPDATE ..., ... FOR CREATE ..., ... FOR DELETE ..., and ... FOR CHANGE ... are possible.

Example

DATA: ins\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map,
      ins\_wa  TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
...
INSERT demo\_tab\_root\_3 FROM @ins\_wa MAPPING FROM ENTITY.
INSERT demo\_tab\_root\_3 FROM TABLE @ins\_tab MAPPING FROM ENTITY.

Variant 2   

MODIFY ... MAPPING FROM ENTITY.

Effect

Used to insert one or more rows into a [target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm) or update existing rows based on the specification in a [source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_source.htm). See the detailed syntax options for MODIFY in the [MODIFY topic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm) and [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) respectively. In this case, the types ... FOR UPDATE ..., ... FOR CREATE ..., ... FOR DELETE ..., and ... FOR CHANGE ... are possible.

Example

DATA: mod\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map,
      mod\_wa  TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
...
MODIFY demo\_tab\_root\_3 FROM @mod\_wa MAPPING FROM ENTITY.
MODIFY demo\_tab\_root\_3 FROM TABLE @mod\_tab MAPPING FROM ENTITY.

Variant 3   

UPDATE ... *\[*INDICATORS SET STRUCTURE %control*\]* MAPPING FROM ENTITY.

Effect

Used to change one or more rows in a [target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm) based on specifications in a [source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_source.htm). See the detailed syntax options for ... in the [UPDATE topic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm) and [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) respectively. In this case, the types ... FOR UPDATE ..., ... FOR CREATE ..., ... FOR DELETE ..., and ... FOR CHANGE ... are possible.

The UPDATE statement can also be used with the addition [INDICATORS SET STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_indicator.htm) that includes the [%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_control.htm) structure to determine which fields are to be changed.

Currently, this variant is only possible in a context in which the related [RAP behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") includes the notation [persistent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_persistent_table.htm).

Example

DATA: up\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map,
      up\_wa  TYPE STRUCTURE FOR UPDATE demo\_managed\_root\_map.
...
UPDATE demo\_tab\_root\_3 FROM @up\_wa MAPPING FROM ENTITY.
UPDATE demo\_tab\_root\_3 FROM TABLE @up\_tab MAPPING FROM ENTITY.
UPDATE demo\_tab\_root\_3 FROM @up\_wa
   INDICATORS SET STRUCTURE %control MAPPING FROM ENTITY.
UPDATE demo\_tab\_root\_3 FROM TABLE @up\_tab
   INDICATORS SET STRUCTURE %control MAPPING FROM ENTITY.

Variant 4   

DELETE ... MAPPING FROM ENTITY.

Effect

Used to delete one or more rows in a [target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm) based on the specification in a [source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_source.htm). See the detailed syntax options for DELETE in the [DELETE topic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm) and [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm) respectively. In this case, the type ... FOR DELETE ... is possible.

Example

DATA: del\_tab TYPE TABLE FOR DELETE demo\_managed\_root\_map,
      del\_wa  TYPE STRUCTURE FOR DELETE demo\_managed\_root\_map.
...
DELETE demo\_tab\_root\_3 FROM @del\_wa MAPPING FROM ENTITY.
DELETE demo\_tab\_root\_3 FROM TABLE @del\_tab MAPPING FROM ENTITY.

Executable Example

The example [ABAP SQL Statements with the Addition MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_mapping_from_entity_abexa.htm) demonstrates the different variants.

Continue
![Example](exa.gif "Example") [ABAP SQL Statements with the Addition MAPPING FROM ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_mapping_from_entity_abexa.htm)