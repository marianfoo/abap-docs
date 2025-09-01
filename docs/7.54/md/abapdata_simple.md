---
title: "Syntax"
description: |
  DATA  var(len) TYPE abap_type DECIMALS dec  var TYPE abap_type LENGTH len DECIMALS dec  VALUE valIS INITIAL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) READ-ONLY(https://h
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_simple.htm"
abapFile: "abapdata_simple.htm"
keywords: ["do", "if", "try", "data", "types", "abapdata", "simple"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm) → 

DATA - TYPE abap\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_shortref.htm)

Syntax

DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
     *|* *{*var *\[*TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**\]**}* *}*
     [*\[*VALUE val*|**{*IS INITIAL*}**\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm)
     [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm).

Effect

By specifying a [built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_data_type_glosry.htm "Glossary Entry") abap\_type, an elementary variable var is defined. For abap\_type, all [built-in data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry") can be used except the internal types b and s.

The syntax and meaning of LENGTH, len, DECIMALS, and dec are identical to the definition of elementary data types using [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_simple.htm) and must be specified within the defined [areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm). Here, however they are used to create a bound data type. If len or dec are not specified for the ABAP types c, n, p, and x, the bound type is created using the [type-friendly standard length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) and, for p, without decimal places.

Notes

-   For reasons of legibility, it is best to include all information and always use the addition LENGTH (and not parentheses) to specify the length len.
    
-   The non-specifiable internal types b and s can be applied by referencing the built-in data types [INT1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and [INT2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.
    

Example

These statements declare three variables and define their start values.

DATA: text  TYPE string VALUE \`Text\`,
      count TYPE i VALUE 1,
      price TYPE p LENGTH 8 DECIMALS 2 VALUE '1.99'.