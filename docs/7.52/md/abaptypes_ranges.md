  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES - RANGE OF

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
            *\[*INITIAL SIZE n*\]*.

Effect

Derives a table type for a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). A ranges table is a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") and a specially structured row type whose internal definition can be displayed as follows in ABAP syntax:

TYPES: BEGIN OF linetype,
         sign   TYPE c LENGTH 1,
         option TYPE c LENGTH 2,
         low    *{*TYPE type*}**|**{*LIKE dobj*}*,
         high   *{*TYPE type*}**|**{*LIKE dobj*}*,
       END OF linetype.

The additions TYPE and LIKE determine the data type of the components low and high:

-   type can be a non-generic data type from ABAP Dictionary, a non-generic public data type of a public data type of a global class, a non-generic data type local to a program, or any ABAP type from the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of [built-in ABAP types](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") from the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of built-in ABAP types.
    
-   dobj can be a data object visible at this point, whose type is used for both components. Generically typed formal parameters cannot be specified for dobj within a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").
    

The addition INITIAL SIZE is synonymous with the definition of normal internal [table types](javascript:call_link\('abaptypes_itab.htm'\)).

Notes

-   A [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") has the same layout as a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") and can be used to pass values to the [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), in a [comparison expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") with the [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") [IN](javascript:call_link\('abenlogexp_select_option.htm'\)), or in a [similar expression](javascript:call_link\('abenwhere_logexp_seltab.htm'\)) in a WHERE condition in Open SQL.
    
-   The sign and option columns of a ranges table declared using RANGE OF are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.
    

Example

Defines a table type for a ranges table and its use for an inline declaration of a ranges table on the left side of a constructor expression with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

TYPES carrid\_range TYPE RANGE OF spfli-carrid.
DATA(carrid\_range) = VALUE carrid\_range(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH') ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @DATA(spfli\_tab).