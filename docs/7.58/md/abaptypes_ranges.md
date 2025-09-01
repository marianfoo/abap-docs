  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20RANGE%20OF%2C%20ABAPTYPES_RANGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, RANGE OF

[Short Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
            *\[*INITIAL SIZE n*\]*.

Effect

Derivation of a table type for a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). A ranges table is a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") in which a [ranges condition](javascript:call_link\('abenranges_condition_glosry.htm'\) "Glossary Entry") can be stored. It has a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") and a special structured line type whose internal definition can be represented as follows in ABAP syntax:

TYPES: BEGIN OF linetype,
         sign   TYPE c LENGTH 1,
         option TYPE c LENGTH 2,
         low    *{*TYPE type*}**|**{*LIKE dobj*}*,
         high   *{*TYPE type*}**|**{*LIKE dobj*}*,
       END OF linetype.

The additions TYPE and LIKE determine the data type of the components low and high:

-   type can be a non-generic data type from the ABAP Dictionary, a non-generic public data type of a global class, a non-generic data type local to a program, a [CDS simple type](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry"), or any ABAP type from the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of [built-in ABAP types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry"). The generic ABAP types c, n, p, and x are extended implicitly to the standard length without [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") from the [tables](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of built-in ABAP types.
-   dobj can be a data object visible at this position, whose type is inherited for both components. Generically typed formal parameters cannot be specified for dobj within a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").

The addition INITIAL SIZE is equivalent to the definition of regular internal [table types](javascript:call_link\('abaptypes_itab.htm'\)).

A ranges table can be used in a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") with the [comparison operator](javascript:call_link\('abencomp_operator_glosry.htm'\) "Glossary Entry") [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) or in a [similar expression](javascript:call_link\('abenwhere_logexp_seltab.htm'\)) in a WHERE condition in ABAP SQL. It is also used for value passing to the [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

Hints

-   The sign and option columns of a ranges table declared using RANGE OF do not refer to data types in the ABAP Dictionary. For a ranges table defined in the ABAP Dictionary, these columns refer to the data elements DDSIGN and DDOPTION.
-   A [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") declared with [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) has the same structure as a ranges table.

Example

Definition of a table type for a ranges table and its use for an inline declaration of a ranges table on the left side of a constructor expression with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

TYPES carrid\_range TYPE RANGE OF spfli-carrid.
FINAL(carrid\_range) = VALUE carrid\_range(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH' ) ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @FINAL(spfli\_tab).