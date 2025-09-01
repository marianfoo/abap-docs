---
title: "Syntax"
description: |
  ... NOT log_exp ... Effect The negation of a logical expression log_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) using NOT creates a new logical expression that is false if the logical expression log_exp is true and vice versa. Hints -   The operator NOT binds
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_not.htm"
abapFile: "abenlogexp_not.htm"
keywords: ["select", "do", "if", "try", "abenlogexp", "not"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [log\_exp - Boolean Operators and Parentheses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_boole.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: log_exp - NOT, ABENLOGEXP_NOT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

log\_exp - NOT

Syntax

... NOT log\_exp ...

Effect

The negation of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) using NOT creates a new logical expression that is false if the logical expression log\_exp is true and vice versa.

Hints

-   The operator NOT binds stronger than AND, OR, and EQUIV.
-   The Boolean operator NOT must not be confused with the addition NOT of the [comparison operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomp_operator_glosry.htm "Glossary Entry") [BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_between.htm), [IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_select_option.htm), and the [predicate operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") [IS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expressions.htm). The following syntax is possible:
    
    ... NOT operand NOT IN range\_tab ...
    
    The first NOT is a Boolean operator that negates a comparison expression. The second NOT is a part of the comparison expression with‎ the comparison operator IN. This is illustrated by parentheses around the comparison expression:
    
    ... NOT ( operand NOT IN range\_tab ) ...
    

Example

Exit the current processing block if sy-subrc does not have the value 0.

IF NOT sy-subrc = 0.
  RETURN.
ENDIF.