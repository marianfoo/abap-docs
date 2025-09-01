  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) → 

DATA, TYPE abap\_type

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_shortref.htm)

Syntax

DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
     *|* *{*var *\[*TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**\]**}* *}*
     [*\[*VALUE val*|**{*IS INITIAL*}**\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_options.htm)
     [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_options.htm).

Effect

By specifying a [built-in data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry") abap\_type, an elementary variable var is defined. For abap\_type, all [built-in data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") can be used, except for the internal types b and s.

The syntax and meaning of LENGTH, len, DECIMALS, and dec are identical to the definition of elementary data types using [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_simple.htm) and must be specified within the specified [areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_complete.htm). Here, however, they are used to create a bound data type. If len or dec are not specified for the ABAP types c, n, p, and x, the bound type is created using the [type-specific standard length](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_complete.htm) and, for p, without decimal places.

Hints

-   For reasons of legibility, it is best to include all information and always use the addition LENGTH instead of parentheses to specify the length len.
-   The non-specifiable internal types b and s can be applied by referencing the built-in data types [INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) and [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) from the ABAP Dictionary.

Example

These statements declare three variables and set their start values.

DATA: text  TYPE string VALUE \`Text\`,
      count TYPE i VALUE 1,
      price TYPE p LENGTH 8 DECIMALS 2 VALUE '1.99'.