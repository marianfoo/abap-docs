---
title: "DDIC - Predefined Types"
description: |
  The following predefined DDIC data types are delivered with an AS ABAP. They can be used in ABAP Dictionary, ABAP CDS, and ABAP programs. -   Data Elements for Built-in Dictionary Types(#abenddic-predef-types-1-------data-type-for-truth-values---@ITOC@@ABENDDIC_PREDEF_TYPES_2) -   Data Types for
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_predef_types.htm"
abapFile: "abenddic_predef_types.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abenddic", "predef"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Predefined%20Types%2C%20ABENDDIC_PREDEF_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Predefined Types

The following predefined DDIC data types are delivered with an AS ABAP. They can be used in ABAP Dictionary, ABAP CDS, and ABAP programs.

-   [Data Elements for Built-in Dictionary Types](#abenddic-predef-types-1-------data-type-for-truth-values---@ITOC@@ABENDDIC_PREDEF_TYPES_2)
-   [Data Types for Operand Positions and Parameter Passing](#abenddic-predef-types-3-----------types-for-operand-positions---@ITOC@@ABENDDIC_PREDEF_TYPES_4)
    -   [Types for Parameter Passing](#@@ITOC@@ABENDDIC_PREDEF_TYPES_5)

Data Elements for Built-in Dictionary Types   

The following data elements are available for [built-in DDIC types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) of the same name with fixed length.

-   INT1
-   INT2
-   INT4
-   D16N
-   D34N
-   DATN
-   TIMN
-   UTCL (for built-in type UTCLONG)
-   GEOM\_EWKB and GGM1 (for built-in type GEOM\_EWKB)

These data elements allow the built-in DDIC types to be referred by their name.

Hints

-   Note that the respective built-in types cannot be specified directly in an ABAP program. In ABAP CDS however, there is a syntax ABAP.type to refer to built-in DDIC types.
-   There is no data element INT8, since the respective built-in ABAP type has the same name int8 already.

Data Type for Truth Values   

There is no built-in ABAP type for the truth values true or false. Instead, it is common to use a character field of length 1 with the meaning that a non-initial value means true and an initial value means false. The following predefined data element can be used to define these fields:

-   ABAP\_BOOLEAN of type CHAR with length 1.

The [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP contains the following constants to be used as truth values.

-   abap\_true with value X
-   abap\_false with initial value

Hints

-   The type pool ABAP also contains a type abap\_bool of type c and length 1. But in new programs, the data element ABAP\_BOOLEAN should be used instead.
-   The disadvantage of using type abap\_bool and the associated constants abap\_true and abap\_false of type pool ABAP is that the entire type pool must be loaded, even if only a few types and constants are needed.
-   Type pool ABAP also contains a third constant abap\_undefined with value \-. However, this constant should not be used or in exceptional cases only.

Data Types for Operand Positions and Parameter Passing   

The following types are used for typing specific operand positions of ABAP statements or for special parameter passing.

Types for Operand Positions   

-   Structures MATCH\_RESULT, SUBMATCH\_RESULT, REPL\_RESULT and table types MATCH\_RESULT\_TAB, SUBMATCH\_RESULT\_TAB, REPL\_RESULT\_TAB for addition [RESULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_options.htm) of statements [FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm).
-   Table type ABAP\_SORTORDER\_TAB for dynamic specification of the sort order in statement [SORT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm).

Types for Parameter Passing   

-   abap\_parmbind\_tab and abap\_excbind\_tab of type pool ABAP for dynamic [parameter tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_parameter_tables.htm) in the [CALL METHOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_dynamic.htm) statement.
-   abap\_func\_parmbind\_tab and abap\_func\_excbind\_tab of type pool ABAP for dynamic [parameter tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_dynamic.htm) in the [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_general.htm) statement.