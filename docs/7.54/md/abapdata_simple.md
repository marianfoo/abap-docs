  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA - TYPE abap\_type

[Quick Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
     *|* *{*var *\[*TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**\]**}* *}*
     [*\[*VALUE val*|**{*IS INITIAL*}**\]*](javascript:call_link\('abapdata_options.htm'\))
     [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

By specifying a [built-in data type](javascript:call_link\('abenpredefined_data_type_glosry.htm'\) "Glossary Entry") abap\_type, an elementary variable var is defined. For abap\_type, all [built-in data types](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry") can be used except the internal types b and s.

The syntax and meaning of LENGTH, len, DECIMALS, and dec are identical to the definition of elementary data types using [TYPES](javascript:call_link\('abaptypes_simple.htm'\)) and must be specified within the defined [areas](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). Here, however they are used to create a bound data type. If len or dec are not specified for the ABAP types c, n, p, and x, the bound type is created using the [type-friendly standard length](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) and, for p, without decimal places.

Notes

-   For reasons of legibility, it is best to include all information and always use the addition LENGTH (and not parentheses) to specify the length len.
    
-   The non-specifiable internal types b and s can be applied by referencing the built-in data types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) and [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary.
    

Example

These statements declare three variables and define their start values.

DATA: text  TYPE string VALUE \`Text\`,
      count TYPE i VALUE 1,
      price TYPE p LENGTH 8 DECIMALS 2 VALUE '1.99'.