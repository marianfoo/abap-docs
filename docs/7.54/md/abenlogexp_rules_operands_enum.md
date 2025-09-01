---
title: "Note"
description: |
  An operand of an enumerated type cannot be compared directly with a character-like operand of the type c or string, even though there is a conversion rule(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_enumerated.htm) for this case. In this case, helper variables or the
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands_enum.htm"
abapFile: "abenlogexp_rules_operands_enum.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenlogexp", "rules", "operands", "enum"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) → 

rel\_exp - Comparison of Enumerated Types

An operand with an [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry") can only be compared with [enumerated objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry") of the same enumerated type. There is no implicit conversion. The values of the operands are compared according to the [rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) that apply to the elementary [base type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type.

Note

An operand of an enumerated type cannot be compared directly with a character-like operand of the type c or string, even though there is a [conversion rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_enumerated.htm) for this case. In this case, helper variables or the conversion operator [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) can be used to execute an explicit conversion.

Example

In the first two comparisons, [enumerated objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry") of the enumerated type number are compared with each other. The third comparison shows how an operand with an enumerated type can be converted so that it can be compared like a character.

TYPES:
  BEGIN OF ENUM number,
    n0, n1 , n2 , n3, n4, n5, n6, n7, n8, n9,
  END OF ENUM number.
DATA: num2 TYPE number VALUE n2,
      num5 TYPE number VALUE n5.
IF num2 < num5.
  cl\_demo\_output=>write( |num2 < num5| ).
ENDIF.
IF num2 > n0.
  cl\_demo\_output=>write( |num2 > n0| ).
ENDIF.
IF CONV string( n7 ) = \`N7\`.
  cl\_demo\_output=>write( |CONV string( n7 ) = \`N7\`| ).
ENDIF.
cl\_demo\_output=>display( ).