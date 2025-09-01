---
title: "Note"
description: |
  When converting between directly specified elementary data objects with different data types, any of the exceptions listed here(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) can be raised. In comparisons, these exceptions are either handled implicitly or
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules_operands_dobj.htm"
abapFile: "abenlogexp_rules_operands_dobj.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "abenlogexp", "rules", "operands", "dobj"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules_operands.htm) → 

rel\_exp - Comparison Type of Elementary Data Objects

The following sections describe which [comparison types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_type_glosry.htm "Glossary Entry") are produced by combining different elementary data objects. They also include the rules that determine the length in which the comparison is made when comparison types have generic lengths.

-   [Comparison type of numeric data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_numeric.htm)

-   [Comparison type of character-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_character.htm)

-   [Comparison type of byte-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_byte.htm)

-   [Comparison type of date fields and time fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_date_time.htm)

Note

When converting between directly specified elementary data objects with different data types, any of the exceptions listed [here](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) can be raised. In comparisons, these exceptions are either handled implicitly or produce a runtime error. They cannot, however, be handled using [CATCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcatch_try.htm). In comparisons of expressions, it is possible to handle some exceptions.

Continue
[rel\_exp - Comparison Type of Numeric Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_numeric.htm)
[rel\_exp - Comparison Type of Character-Like Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_character.htm)
[rel\_exp - Comparison Type of Byte-Like Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_byte.htm)
[rel\_exp - Comparison Type of Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_date_time.htm)