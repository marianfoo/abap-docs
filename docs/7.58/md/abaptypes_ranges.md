  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20RANGE%20OF%2C%20ABAPTYPES_RANGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, RANGE OF

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
            *\[*INITIAL SIZE n*\]*.

Effect

Derivation of a table type for a [ranges table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranges_table_glosry.htm "Glossary Entry"). A ranges table is a [standard table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") in which a [ranges condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranges_condition_glosry.htm "Glossary Entry") can be stored. It has a [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_key_glosry.htm "Glossary Entry") and a special structured line type whose internal definition can be represented as follows in ABAP syntax:

TYPES: BEGIN OF linetype,
         sign   TYPE c LENGTH 1,
         option TYPE c LENGTH 2,
         low    *{*TYPE type*}**|**{*LIKE dobj*}*,
         high   *{*TYPE type*}**|**{*LIKE dobj*}*,
       END OF linetype.

The additions TYPE and LIKE determine the data type of the components low and high:

-   type can be a non-generic data type from the ABAP Dictionary, a non-generic public data type of a global class, a non-generic data type local to a program, a [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry"), or any ABAP type from the [tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) of [built-in ABAP types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") from the [tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) of built-in ABAP types.
-   dobj can be a data object visible at this position, whose type is inherited for both components. Generically typed formal parameters cannot be specified for dobj within a [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry").

The addition INITIAL SIZE is equivalent to the definition of regular internal [table types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_itab.htm).

A ranges table can be used in a [relational expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelational_expression_glosry.htm "Glossary Entry") with the [comparison operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomp_operator_glosry.htm "Glossary Entry") [IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_select_option.htm) or in a [similar expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_seltab.htm) in a WHERE condition in ABAP SQL. It is also used for value passing to the [selection screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry") of an [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") called using [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm).

Hints

-   The sign and option columns of a ranges table declared using RANGE OF do not refer to data types in the ABAP Dictionary. For a ranges table defined in the ABAP Dictionary, these columns refer to the data elements DDSIGN and DDOPTION.
-   A [selection table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_table_glosry.htm "Glossary Entry") declared with [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect-options.htm) has the same structure as a ranges table.

Example

Definition of a table type for a ranges table and its use for an inline declaration of a ranges table on the left side of a constructor expression with the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm).

TYPES carrid\_range TYPE RANGE OF spfli-carrid.
FINAL(carrid\_range) = VALUE carrid\_range(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH' ) ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @FINAL(spfli\_tab).