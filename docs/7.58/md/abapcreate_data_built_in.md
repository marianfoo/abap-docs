---
title: "Syntax"
description: |
  CREATE DATA dref area_handle(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_area_handle.htm) TYPE abap_type(name) LENGTH len DECIMALS dec. Effect Creation of a data object with an explicitly specified data type. For the data type, all
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_built_in.htm"
abapFile: "abapcreate_data_built_in.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abapcreate", "built"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CREATE%20DATA%2C%20TYPE%20abap_type%2C%20ABAPCREATE_DATA_BUILT_IN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CREATE DATA, TYPE abap\_type

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_area_handle.htm)*\]*
                 TYPE *{*abap\_type*|*(name)*}*
                      *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*.

Effect

Creation of a data object with an explicitly specified data type. For the data type, all [built-in data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry"), apart from b and s, can be used that are more specific than the static type of dref or are identical to it. The name of the type can be specified as follows:

-   abap\_type
    
    Direct static specification as abap\_type.
    
-   (name)
    
    Specification as the content of a character-like data object name without case-sensitivity. The following can be specified for name:
    
    -   Literal or constant
        
        If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified type is recognized as the used object.
        
    -   Variable
        
        If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.
        
    
    When the statement is executed, name is not evaluated until runtime (in both cases).
    

For the ABAP types c, n, p, and x, the length of the data type dtype can be determined by specifying a numeric data object len after the addition LENGTH, which, when the statement is executed, contains a value within the [length range](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) specified for the respective type. If the addition LENGTH is not specified, the standard length from the table is used. For all other ABAP types, the length is determined by the value in the table and the addition LENGTH cannot be specified.

For the ABAP type p, the number of [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") can be determined by specifying a numeric data object dec after the addition DECIMALS. If DECIMALS is specified, the same applies as to the statement [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm). If the addition DECIMALS is not specified, no decimal places are created. For the decimal separator to be respected in operations with packed numbers, the [program property](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") fixed point arithmetic must be set. Otherwise, the addition DECIMALS only affects the formatting of dynpros and the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm). For all other ABAP types and if name is specified dynamically, the addition DECIMALS is not allowed.

Hint

If a data type abap\_type is used, the [instance operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) acts like the statement CREATE DATA dref TYPE abap\_type and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The dynamic specification of name is not possible here.

Example

Creation of an anonymous data object of the type of a packed number with length specification and decimal places.

DATA dref TYPE REF TO data.
CREATE DATA dref TYPE p LENGTH 8 DECIMALS 3.
dref->\* = 1 / 3.
cl\_demo\_output=>display( dref->\* ).

Executable Example

[Creating Elementary Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_simple_data_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Elementary Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_simple_data_abexa.htm)