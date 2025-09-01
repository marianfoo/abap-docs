---
title: "TYPES - RANGE OF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm) Syntax TYPES dtype TYPE RANGE OF typeLIKE RANGE OF dobj INITIAL SIZE n. Effect Derives a table type for a ranges table(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_ranges.htm"
abapFile: "abaptypes_ranges.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abaptypes", "ranges"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) → 

TYPES - RANGE OF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
            *\[*INITIAL SIZE n*\]*.

Effect

Derives a table type for a [ranges table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranges_table_glosry.htm "Glossary Entry"). A ranges table is a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") in which a [ranges condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranges_condition_glosry.htm "Glossary Entry") can be saved. It has a [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry") and a special structured row type whose internal definition can be represented as follows in ABAP syntax:

TYPES: BEGIN OF linetype,
         sign   TYPE c LENGTH 1,
         option TYPE c LENGTH 2,
         low    *{*TYPE type*}**|**{*LIKE dobj*}*,
         high   *{*TYPE type*}**|**{*LIKE dobj*}*,
       END OF linetype.

The additions TYPE and LIKE determine the data type of the components low and high:

-   type can be a non-generic data type from ABAP Dictionary, a non-generic public data type of a public data type of a global class, a non-generic data type local to a program, or any ABAP type from the [tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) of [built-in ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry") from the [tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) of built-in ABAP types.
    
-   dobj can be a data object visible at this point, whose type is used for both components. Generically typed formal parameters cannot be specified for dobj within a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry").
    

The addition INITIAL SIZE is synonymous with the definition of normal internal [table types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_itab.htm).

A ranges table can be used in a [relational expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_expression_glosry.htm "Glossary Entry") with the [relational operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_operator_glosry.htm "Glossary Entry") [IN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_select_option.htm) or in a [similar expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_seltab.htm) in a WHERE condition in ABAP SQL. It is also used for value passing to the [selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") of an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") called using [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm).

Notes

-   A [selection table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_table_glosry.htm "Glossary Entry") declared with [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect-options.htm) has the same structure as a ranges table.
    
-   The sign and option columns of a ranges table declared using RANGE OF are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.
    

Example

Defines a table type for a ranges table and its use for an inline declaration of a ranges table on the left side of a constructor expression with the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm).

TYPES carrid\_range TYPE RANGE OF spfli-carrid.
DATA(carrid\_range) = VALUE carrid\_range(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH') ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @DATA(spfli\_tab).