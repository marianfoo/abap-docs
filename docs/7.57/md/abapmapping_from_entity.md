  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [Type Mapping](javascript:call_link\('abapeml_type_mapping.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL Statements with MAPPING FROM ENTITY, ABAPMAPPING_FROM_ENTITY, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL Statements with MAPPING FROM ENTITY

Syntax

  *{* [INSERT ...](javascript:call_link\('abapinsert_dbtab.htm'\)) *}*
*|* *{* [MODIFY ...](javascript:call_link\('abapmodify_dbtab.htm'\)) *}*
*|* *{* [UPDATE ...](javascript:call_link\('abapupdate.htm'\)) *}*
*|* *{* [DELETE ...](javascript:call_link\('abapdelete_dbtab.htm'\)) *}* MAPPING FROM ENTITY.

Variants:

[1\. INSERT ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_1@1@)
[2\. MODIFY ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_2@2@)
[3\. UPDATE ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_3@3@)
[4\. DELETE ... MAPPING FROM ENTITY.](#!ABAP_VARIANT_4@4@)

Effect

The addition MAPPING FROM ENTITY of the modifying ABAP SQL statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)) is used to handle structures and internal tables that are typed with [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

Hints

-   In case of a problematic type conversion when using these statements, for example INT4 to NUMC, a [... CORRESPONDING #( ... MAPPING FROM ENTITY ) ...](javascript:call_link\('abapeml_corresponding.htm'\)) is automatically carried out without an explicit programming.
-   The catchable exception CX\_SY\_CONVERSION\_ERROR occurs in case of type conversion errors.

Variant 1   

INSERT ... MAPPING FROM ENTITY.

Effect

Used to insert one or more rows from a [source](javascript:call_link\('abapinsert_source.htm'\)) into a [target](javascript:call_link\('abapiumd_target.htm'\)). See the detailed syntax options for INSERT in the [INSERT topic](javascript:call_link\('abapinsert_dbtab.htm'\)).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\)) and [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)) respectively. In this case, the types ... FOR UPDATE ..., ... FOR CREATE ..., ... FOR DELETE ..., and ... FOR CHANGE ... are possible.

Example

DATA: ins\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map,
      ins\_wa  TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
...
INSERT demo\_tab\_root\_3 FROM @ins\_wa MAPPING FROM ENTITY.
INSERT demo\_tab\_root\_3 FROM TABLE @ins\_tab MAPPING FROM ENTITY.

Variant 2   

MODIFY ... MAPPING FROM ENTITY.

Effect

Used to insert one or more rows into a [target](javascript:call_link\('abapiumd_target.htm'\)) or update existing rows based on the specification in a [source](javascript:call_link\('abapinsert_source.htm'\)). See the detailed syntax options for MODIFY in the [MODIFY topic](javascript:call_link\('abapmodify_dbtab.htm'\)).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\)) and [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)) respectively. In this case, the types ... FOR UPDATE ..., ... FOR CREATE ..., ... FOR DELETE ..., and ... FOR CHANGE ... are possible.

Example

DATA: mod\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map,
      mod\_wa  TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map.
...
MODIFY demo\_tab\_root\_3 FROM @mod\_wa MAPPING FROM ENTITY.
MODIFY demo\_tab\_root\_3 FROM TABLE @mod\_tab MAPPING FROM ENTITY.

Variant 3   

UPDATE ... MAPPING FROM ENTITY.

Effect

Used to change one or more rows in a [target](javascript:call_link\('abapiumd_target.htm'\)) based on specifications in a [source](javascript:call_link\('abapinsert_source.htm'\)). See the detailed syntax options for ... in the [UPDATE topic](javascript:call_link\('abapupdate.htm'\)).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\)) and [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)) respectively. In this case, the types ... FOR UPDATE ..., ... FOR CREATE ..., ... FOR DELETE ..., and ... FOR CHANGE ... are possible.

The UPDATE statement can also be used with the addition [INDICATORS SET STRUCTURE](javascript:call_link\('abapupdate_set_indicator.htm'\)) that includes the [%control](javascript:call_link\('abapderived_types_control.htm'\)) structure to determine which fields are to be changed.

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

Used to delete one or more rows in a [target](javascript:call_link\('abapiumd_target.htm'\)) based on the specification in a [source](javascript:call_link\('abapinsert_source.htm'\)). See the detailed syntax options for DELETE in the [DELETE topic](javascript:call_link\('abapdelete_dbtab.htm'\)).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\)) and [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)) respectively. In this case, the type ... FOR DELETE ... is possible.

Example

DATA: del\_tab TYPE TABLE FOR DELETE demo\_managed\_root\_map,
      del\_wa  TYPE STRUCTURE FOR DELETE demo\_managed\_root\_map.
...
DELETE demo\_tab\_root\_3 FROM @del\_wa MAPPING FROM ENTITY.
DELETE demo\_tab\_root\_3 FROM TABLE @del\_tab MAPPING FROM ENTITY.

Executable Example

The example [ABAP SQL Statements with the Addition MAPPING FROM ENTITY](javascript:call_link\('abensql_mapping_from_entity_abexa.htm'\)) demonstrates the different variants.

Continue
![Example](exa.gif "Example") [ABAP SQL Statements with the Addition MAPPING FROM ENTITY](javascript:call_link\('abensql_mapping_from_entity_abexa.htm'\))