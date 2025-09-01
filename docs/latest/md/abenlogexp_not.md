---
title: "Syntax"
description: |
  ... NOT log_exp ... Effect The negation of a logical expression log_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) using NOT creates a new logical expression that is false if the logical expression log_exp is true and vice versa. Hints -   The operator NOT b
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_not.htm"
abapFile: "abenlogexp_not.htm"
keywords: ["select", "do", "if", "try", "abenlogexp", "not"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20log_exp%20-%20NOT%2C%20ABENLOGEXP_NOT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

log\_exp - NOT

Syntax

... NOT log\_exp ...

Effect

The negation of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) using NOT creates a new logical expression that is false if the logical expression log\_exp is true and vice versa.

Hints

-   The operator NOT binds stronger than AND, OR, and EQUIV.
-   The Boolean operator NOT must not be confused with the addition NOT of the [comparison operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomp_operator_glosry.htm "Glossary Entry") [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm), [IN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm), and the [predicate operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") [IS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expressions.htm). The following syntax is possible:
    
    ... NOT operand NOT IN range\_tab ...
    
    The first NOT is a Boolean operator that negates a comparison expression. The second NOT is a part of the comparison expression with‎ the comparison operator IN. This is illustrated by parentheses around the comparison expression:
    
    ... NOT ( operand NOT IN range\_tab ) ...
    

Example

Exit the current processing block if sy-subrc does not have the value 0.

IF NOT sy-subrc = 0.
  RETURN.
ENDIF.