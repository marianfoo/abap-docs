---
title: "CASE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_shortref.htm) Syntax CASE operand. WHEN operand1 OR operand2 OR operand3 .... statement_block1 ... WHEN OTHERS. statement_blockn ENDCASE. Effect Case Distin
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase.htm"
abapFile: "abapcase.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abapcase"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_branches.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CASE, ABAPCASE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improveme
nt:)

CASE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_shortref.htm)

Syntax

CASE operand.
  *\[*WHEN operand1 *\[*OR operand2 *\[*OR operand3 *\[*...*\]**\]**\]*.
    *\[*statement\_block1*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Case Distinction. These statements define a control structure that can contain multiple statement blocks statement\_block1, ..., statement\_blockn, of which a maximum of one is executed depending on the value of the operand operand.

Starting with the first WHEN statement, the system checks from top to bottom whether the content of the operand in operand matches the content of one of the operands operand1, operand2, .... The statement block is executed after the first match. If no matches are found, the statement block is executed after the statement WHEN OTHERS.

-   The operand operand after CASE is a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
-   The operands operand1, operand2, ... after WHEN are [extended functional operand positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_functional_positions.htm) in which, however, [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") cannot be specified. This property of operand positions is obsolete and should no longer be used.

If the end of the executed statement block is reached or no statement block is executed, processing continues after ENDCASE.

The content is compared as illustrated in the following logical expression:

operand = operand1 *\[*OR operand = operand2
                   *\[*OR operand = operand3 *\[*...*\]**\]**\]*

The [comparison rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands.htm) for comparisons between any operands apply to this comparison, depending on the data types of the operands involved.

Hints

-   For operand, the current value is used in every comparison. This may differ from the starting value if operand is a variable that is changed in a [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") specified after a WHEN statement.
-   A CASE control structure is somewhat faster than a semantically equivalent IF control structure.
-   Functional methods and certain built-in functions can be specified after WHEN, however this should be avoided. Constant values, for example, should be specified in the operand positions after WHEN.
-   A special control structure introduced using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type.htm) makes it possible for the type of object reference variables to be checked.
-   The [conditional operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [SWITCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_switch.htm) can also be used to make case distinctions in operand positions.
-   No statement can be placed between the statement CASE and the first statement WHEN. In classes, this produces a syntax error; outside classes, [obsolete syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_when_obsolete.htm) like this produces a syntax warning.

Example

Branching of the program flow depending on the function code in system field sy-ucomm.

CASE sy-ucomm.
  WHEN 'BACK'.
    LEAVE TO SCREEN 100.
  WHEN 'CANCEL'.
    LEAVE SCREEN.
  WHEN 'EXIT'.
    LEAVE PROGRAM.
  WHEN OTHERS.
    MESSAGE '...' TYPE 'E'.
ENDCASE.

Example

This example demonstrates that the calculation type of an arithmetic expression after CASE is determined only by its operands. The calculation type after the first CASE statement is i and the result of the calculation is 0. The comparison with the value 0 after WHEN is true regardless of its data type. The calculation type of the comparison after IF is decfloat34, however, and the result is false. To force a specific calculation type after CASE, an additional operand can be added as shown in the second CASE statement. This operand does not contribute to the calculation.

DATA:
  inum1 TYPE i VALUE 1,
  inum2 TYPE i VALUE 3,
  decf  TYPE decfloat34 VALUE 0.
CASE  inum1 / inum2.
  WHEN decf.
    cl\_demo\_output=>write\_text( 'In CASE equal' ).
ENDCASE.
IF decf <> inum1 / inum2.
  cl\_demo\_output=>write\_text( 'In IF not equal' ).
ENDIF.
CASE CONV decfloat34( inum1 / inum2 ).
  WHEN decf.
    cl\_demo\_output=>write\_text( 'In CASE equal' ).
  WHEN OTHERS.
    cl\_demo\_output=>write\_text( 'In CASE not equal' ).
ENDCASE.
cl\_demo\_output=>display( ).

Continue
[WHEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhen.htm)
[ENDCASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendcase.htm)