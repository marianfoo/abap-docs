---
title: "Hint"
description: |
  When converting between directly specified elementary data objects with different data types, all exceptions listed here(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) can be raised. In comparisons, these are either handled implicitly or produce a runtime
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_dobj.htm"
abapFile: "abenlogexp_rules_operands_dobj.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "abenlogexp", "rules", "operands", "dobj"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparison Type of Elementary Data Objects, ABENLOGEXP_RULES_OPERANDS_DOBJ,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Comparison Type of Elementary Data Objects

The following sections describe which [comparison types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_type_glosry.htm "Glossary Entry") results from the combinations of different elementary data objects. They also list the rules that determine the length in which the comparison is performed for comparison types with generic lengths.

-   [Comparison type of numeric data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_numeric.htm)
-   [Comparison type of character-like data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_character.htm)
-   [Comparison type of byte-like data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_byte.htm)
-   [Comparison Type of Date Fields, Time Fields, and Time Stamp Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_date_time.htm)

Hint

When converting between directly specified elementary data objects with different data types, all exceptions listed [here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) can be raised. In comparisons, these are either handled implicitly or produce a runtime error. They cannot, however, be handled using [CATCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_try.htm). In comparisons of expressions, it is possible to handle the exceptions partially.

Continue
[rel\_exp - Comparison Type of Numeric Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_numeric.htm)
[rel\_exp - Comparison Type of Character-Like Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_character.htm)
[rel\_exp - Comparison Type of Byte-Like Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_byte.htm)
[rel\_exp - Comparison Type of Date Fields, Time Fields, and Time Stamp Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_date_time.htm)