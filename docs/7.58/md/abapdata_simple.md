---
title: "Syntax"
description: |
  DATA  var(len) TYPE abap_type DECIMALS dec  var TYPE abap_type LENGTH len DECIMALS dec  VALUE valIS INITIAL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm) READ-ONLY(https://h
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_simple.htm"
abapFile: "abapdata_simple.htm"
keywords: ["do", "if", "try", "data", "types", "abapdata", "simple"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20TYPE%20abap_type%2C%20ABAPDATA_SIMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, TYPE abap\_type

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_shortref.htm)

Syntax

DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
     *|* *{*var *\[*TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**\]**}* *}*
     [*\[*VALUE val*|**{*IS INITIAL*}**\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm)
     [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm).

Effect

By specifying a [built-in data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry") abap\_type, an elementary variable var is defined. For abap\_type, all [built-in data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") can be used, except for the internal types b and s.

The syntax and meaning of LENGTH, len, DECIMALS, and dec are identical to the definition of elementary data types using [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm) and must be specified within the specified [areas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm). Here, however, they are used to create a bound data type. If len or dec are not specified for the ABAP types c, n, p, and x, the bound type is created using the [type-specific standard length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) and, for p, without decimal places.

Hints

-   For reasons of legibility, it is best to include all information and always use the addition LENGTH instead of parentheses to specify the length len.
-   The non-specifiable internal types b and s can be applied by referencing the built-in data types [INT1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) and [INT2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) from the ABAP Dictionary.
-   A data type that is constructed with the statement DATA is [bound data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbound_data_type_glosry.htm "Glossary Entry") that only exists as s property of the data object. It has a [technical type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_name_glosry.htm "Glossary Entry"), that can be retrieved as part of an [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") by [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").

Example

These statements declare three variables and set their start values.

DATA: text  TYPE string VALUE \`Text\`,
      count TYPE i VALUE 1,
      price TYPE p LENGTH 8 DECIMALS 2 VALUE '1.99'.