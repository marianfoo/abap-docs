---
title: "Syntax"
description: |
  ... NOT log_exp ... Effect The negation of a logical expression log_exp(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) using NOT creates a new logical expression that is false if the logical expression log_exp is true and vice versa. Notes -   The operator NOT is a s
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_not.htm"
abapFile: "abenlogexp_not.htm"
keywords: ["select", "do", "if", "try", "abenlogexp", "not"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_boole.htm) → 

log\_exp - NOT

Syntax

... NOT log\_exp ...

Effect

The negation of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) using NOT creates a new logical expression that is false if the logical expression log\_exp is true and vice versa.

Notes

-   The operator NOT is a stronger join than AND, OR, and EQUIV.

-   The Boolean operator NOT must not be confused with the addition NOT of the [relational operators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_operator_glosry.htm "Glossary Entry") [BETWEEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_between.htm), [IN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_select_option.htm), and the [predicate operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") [IS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expressions.htm). The following syntax is one possible example:

... NOT operand NOT IN range\_tab ...

The first NOT is a Boolean operator that negates a comparison expression. The second NOT is a part of the comparison expression with‎ the relational operator IN. This is made clear using parentheses around the comparison expression:

... NOT ( operand NOT IN range\_tab ) ...

Example

Exit the current processing block if sy-subrc does not have the value 0.

IF NOT sy-subrc = 0.
  RETURN.
ENDIF.