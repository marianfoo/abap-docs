# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Control Structures / Branches

Included pages: 15


### abenabap_branches.htm

---
title: "Branches"
description: |
  This section describes the branches defined using the following: -   IF - ENDIF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm) -   CASE - ENDCASE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) -   CASE TYPE OF - ENDCASE(https://help.sap.com/doc
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm"
abapFile: "abenabap_branches.htm"
keywords: ["do", "if", "case", "try", "types", "internal-table", "exception-handling", "abenabap", "branches"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) → 

Branches

This section describes the branches defined using the following:

-   [IF - ENDIF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)

-   [CASE - ENDCASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)

-   [CASE TYPE OF - ENDCASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)

Special types of branch are group level processing for [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_itab.htm) and [extracts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_extract.htm) and branches for [exception handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm).

Note

The [conditional operators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_switch.htm) can be used to implement branches in operand positions.

Continue
[IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)
[CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)
[CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)


### abapif.htm

---
title: "IF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm) Syntax IF log_exp1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm). statement_block1 ELSEIF log_exp2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm"
abapFile: "abapif.htm"
keywords: ["do", "while", "if", "try", "data", "abapif"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) → 

IF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm)

Syntax

IF [log\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

These statements define a control structure which can contain multiple statement blocks statement\_block of which a maximum of one will be executed in conjunction with logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).

After IF and ELSEIF any logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) can be executed while the expressions statement\_block stand for any statement blocks.

The logical expressions, beginning with the IFstatement, are checked from top to bottom and the statement block after the first is executed during the logical expression. If none of the logical expressions are true, the statement block after the ELSE statement is executed.

When the end of the statement block is reached or if no statement block is to be executed, the processing is continued after ENDIF.

Note

Furthermore, the [conditional operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm) can also be used to implement branches in operand positions that are based on logical expressions.

Example

Transforms a time to the 12-hour format (see also [Country-Specific Formats](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry_formats.htm)).

DATA time TYPE t.
time = sy-uzeit.
IF time < '120000'.
  cl\_demo\_output=>display(
    |{ time TIME = ISO } AM| ).
ELSEIF time > '120000' AND
       time < '240000'.
  cl\_demo\_output=>display(
    |{ CONV t( time - 12 \* 3600 ) TIME = ISO } PM| ).
ELSE.
  cl\_demo\_output=>display(
    |High Noon| ).
ENDIF.

See also the example for [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm).

Continue
[ELSEIF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelseif.htm)
[ELSE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelse.htm)
[ENDIF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendif.htm)


### abapelseif.htm

---
title: "ELSEIF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm) Syntax ELSEIF log_exp(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm). Effect See IF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm).
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelseif.htm"
abapFile: "abapelseif.htm"
keywords: ["do", "if", "abapelseif"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm) → 

ELSEIF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm)

Syntax

ELSEIF [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).

Effect

See [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm).


### abapelse.htm

---
title: "ELSE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm) Syntax ELSE. Effect See IF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm).
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelse.htm"
abapFile: "abapelse.htm"
keywords: ["do", "if", "abapelse"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm) → 

ELSE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm)

Syntax

ELSE.

Effect

See [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm).


### abapendif.htm

---
title: "ENDIF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm) Syntax ENDIF. Effect See IF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm).
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendif.htm"
abapFile: "abapendif.htm"
keywords: ["do", "if", "abapendif"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm) → 

ENDIF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm)

Syntax

ENDIF.

Effect

See [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm).


### abapif.htm

---
title: "IF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm) Syntax IF log_exp1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm). statement_block1 ELSEIF log_exp2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm"
abapFile: "abapif.htm"
keywords: ["do", "while", "if", "try", "data", "abapif"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) → 

IF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif_shortref.htm)

Syntax

IF [log\_exp1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

These statements define a control structure which can contain multiple statement blocks statement\_block of which a maximum of one will be executed in conjunction with logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm).

After IF and ELSEIF any logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) can be executed while the expressions statement\_block stand for any statement blocks.

The logical expressions, beginning with the IFstatement, are checked from top to bottom and the statement block after the first is executed during the logical expression. If none of the logical expressions are true, the statement block after the ELSE statement is executed.

When the end of the statement block is reached or if no statement block is to be executed, the processing is continued after ENDIF.

Note

Furthermore, the [conditional operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm) can also be used to implement branches in operand positions that are based on logical expressions.

Example

Transforms a time to the 12-hour format (see also [Country-Specific Formats](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencountry_formats.htm)).

DATA time TYPE t.
time = sy-uzeit.
IF time < '120000'.
  cl\_demo\_output=>display(
    |{ time TIME = ISO } AM| ).
ELSEIF time > '120000' AND
       time < '240000'.
  cl\_demo\_output=>display(
    |{ CONV t( time - 12 \* 3600 ) TIME = ISO } PM| ).
ELSE.
  cl\_demo\_output=>display(
    |High Noon| ).
ENDIF.

See also the example for [COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm).

Continue
[ELSEIF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelseif.htm)
[ELSE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelse.htm)
[ENDIF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendif.htm)


### abapcase.htm

---
title: "CASE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm) Syntax CASE operand. WHEN operand1 OR operand2 OR operand3 .... statement_block1 ... WHEN OTHERS. statement_blockn ENDCASE. Effect Case Distin
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm"
abapFile: "abapcase.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abapcase"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) → 

CASE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm)

Syntax

CASE operand.
  *\[*WHEN operand1 *\[*OR operand2 *\[*OR operand3 *\[*...*\]**\]**\]*.
    *\[*statement\_block1*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Case Distinction These statements define a control structure that can contain multiple statement blocks statement\_block1, ..., statement\_blockn, of which no more than one is executed depending on the value of the operand operand.

Starting with the first WHEN statement, the content of the operand in operand is compared with the content of one of the operands operand1, operand2, ... from the top down. The statement block is executed after the first identical instance is found. If no matches are found, the statement block is executed after the statement WHEN OTHERS.

-   The operand operand after CASE is a [general expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
    
-   The operands operand1, operand2, ... after WHEN are [extended functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_functional_positions.htm) in which, however, [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") cannot be specified. This property of operand positions is obsolete and should no longer be used.
    

If the end of the executed statement block is reached or no statement block is executed, processing continues after ENDCASE.

The contents are compared as illustrated in the following logical expression:

operand = operand1 *\[*OR operand = operand2
                   *\[*OR operand = operand3 *\[*...*\]**\]**\]*

The [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) for comparisons between any operands apply when this comparison is made, depending on the data types of the operands involved.

Notes

-   For operand, the current value is used in every comparison. This may differ from the starting value if operand is a variable that is changed in a [functional method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") specified after a WHEN statement.
    
-   A CASE control structure is somewhat faster than a semantically equivalent IF control structure.
    
-   Functional methods and certain built-in functions can be specified after WHEN, however this should be avoided. Constant values, for example, should be specified in the operand positions after WHEN.
    
-   In a special case, a control structure introduced using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) makes it possible for the type of object reference variables to be checked.
    
-   The [conditional operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_switch.htm) can also be used to make case distinctions in operand positions.
    
-   A statement cannot be placed between the statement CASE and the first statement WHEN. In classes, this produces a syntax error; outside classes, [obsolete syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_when_obsolete.htm) of this type produces a syntax warning.
    

Example

Branches the program flow depending on the function code in system field sy-ucomm.

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

This example demonstrates that the calculation type of an arithmetic expression after CASE is determined only by its operands. The calculation type after the first CASE statement is i and the result of the calculation is 0. The comparison with the value 0 after WHEN is true regardless of its data type. The calculation type of the comparison after IF is decfloat34, however, and the result is false. To force a specific calculation type after CASE, a further operand can be added as shown in the second CASE statement. This operand is not involved in the calculation.

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
[WHEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm)
[ENDCASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendcase.htm)


### abapwhen.htm

---
title: "WHEN"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm) Syntax WHEN  operand1  OR operand2 OR operand2 ...  OTHERS . Effect See CASE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm).
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm"
abapFile: "abapwhen.htm"
keywords: ["do", "case", "abapwhen"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) → 

WHEN

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm)

Syntax

WHEN *{* *{*operand1  *\[*OR operand2 *\[*OR operand2 *\[*...*\]**\]**\]**}*
     *|* *{*OTHERS*}* *}*.

Effect

See [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm).


### abapendcase.htm

---
title: "ENDCASE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm) Syntax ENDCASE. Effect The statement ENDCASE closes a case distinction(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_distinction_glosry.htm 'Glossary Entry') introduced using
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendcase.htm"
abapFile: "abapendcase.htm"
keywords: ["do", "case", "try", "abapendcase"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) → 

ENDCASE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm)

Syntax

ENDCASE.

Effect

The statement ENDCASE closes a [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_distinction_glosry.htm "Glossary Entry") introduced using [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) or [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm).


### abapcase.htm

---
title: "CASE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm) Syntax CASE operand. WHEN operand1 OR operand2 OR operand3 .... statement_block1 ... WHEN OTHERS. statement_blockn ENDCASE. Effect Case Distin
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm"
abapFile: "abapcase.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abapcase"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) → 

CASE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm)

Syntax

CASE operand.
  *\[*WHEN operand1 *\[*OR operand2 *\[*OR operand3 *\[*...*\]**\]**\]*.
    *\[*statement\_block1*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Case Distinction These statements define a control structure that can contain multiple statement blocks statement\_block1, ..., statement\_blockn, of which no more than one is executed depending on the value of the operand operand.

Starting with the first WHEN statement, the content of the operand in operand is compared with the content of one of the operands operand1, operand2, ... from the top down. The statement block is executed after the first identical instance is found. If no matches are found, the statement block is executed after the statement WHEN OTHERS.

-   The operand operand after CASE is a [general expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
    
-   The operands operand1, operand2, ... after WHEN are [extended functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_functional_positions.htm) in which, however, [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") cannot be specified. This property of operand positions is obsolete and should no longer be used.
    

If the end of the executed statement block is reached or no statement block is executed, processing continues after ENDCASE.

The contents are compared as illustrated in the following logical expression:

operand = operand1 *\[*OR operand = operand2
                   *\[*OR operand = operand3 *\[*...*\]**\]**\]*

The [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) for comparisons between any operands apply when this comparison is made, depending on the data types of the operands involved.

Notes

-   For operand, the current value is used in every comparison. This may differ from the starting value if operand is a variable that is changed in a [functional method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") specified after a WHEN statement.
    
-   A CASE control structure is somewhat faster than a semantically equivalent IF control structure.
    
-   Functional methods and certain built-in functions can be specified after WHEN, however this should be avoided. Constant values, for example, should be specified in the operand positions after WHEN.
    
-   In a special case, a control structure introduced using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) makes it possible for the type of object reference variables to be checked.
    
-   The [conditional operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_switch.htm) can also be used to make case distinctions in operand positions.
    
-   A statement cannot be placed between the statement CASE and the first statement WHEN. In classes, this produces a syntax error; outside classes, [obsolete syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_when_obsolete.htm) of this type produces a syntax warning.
    

Example

Branches the program flow depending on the function code in system field sy-ucomm.

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

This example demonstrates that the calculation type of an arithmetic expression after CASE is determined only by its operands. The calculation type after the first CASE statement is i and the result of the calculation is 0. The comparison with the value 0 after WHEN is true regardless of its data type. The calculation type of the comparison after IF is decfloat34, however, and the result is false. To force a specific calculation type after CASE, a further operand can be added as shown in the second CASE statement. This operand is not involved in the calculation.

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
[WHEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm)
[ENDCASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendcase.htm)


### abapcase_type.htm

---
title: "CASE TYPE OF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type_shortref.htm) Syntax CASE TYPE OF oref. WHEN TYPE classintf INTO target1. statement_block1 WHEN TYPE classintf INTO target2. statement_block2 ... WHE
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm"
abapFile: "abapcase_type.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abapcase", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) → 

CASE TYPE OF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type_shortref.htm)

Syntax

CASE TYPE OF oref.
  *\[*WHEN TYPE class*|*intf *\[*INTO target1*\]*.
    *\[*statement\_block1*\]**\]*
  *\[*WHEN TYPE class*|*intf *\[*INTO target2*\]*.
    *\[*statement\_block2*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Addition:

[... INTO target](#!ABAP_ONE_ADD@1@)

Effect

Special [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_distinction_glosry.htm "Glossary Entry") for [object reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). This form of a control structure introduced using [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) checks the [dynamic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_type_glosry.htm "Glossary Entry") of a non-initial object reference variable and the [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") of an initial object reference variable oref. oref expects an object reference variable with the static type of a class or of an interface. oref is a [general expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

A class class or an interface intf valid in this place must be specified after WHEN TYPE. The first statement block statement\_block is executed for which the class class or the interface intf is more general than or equal to the following:

-   A dynamic type of a non-initial object reference variable oref
    
-   A static type of an initial object reference variable oref
    

If this does not apply to any class class or interface intf, the statement block is executed after WHEN OTHERS. No object type class or intf can be specified if it is known statically that it does not meet the condition.

Notes

-   A case distinction using CASE TYPE OF is a different spelling of the following branch using [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm) and the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm) and the corresponding rules and notes apply:
    

IF oref [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm) class*|*intf.
  *\[*statement\_block1*\]*
ELSEIF oref [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm) class*|*intf.
  *\[*statement\_block2*\]*
...
ELSE.
  *\[*statement\_blockn*\]*
ENDIF.

-   The control structure must specify more specific classes class or interfaces intf before more general classes or interfaces to enable the associated statement block to be executed.
    

Example

Case distinction for the dynamic type of an object reference variable oref, from more specific to more general classes. In the case shown, c2 is the first class that meets the condition. oref can be assigned to ref2 with static type c2 without raising an exception.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2,
      ref3 TYPE REF TO c3.
oref = NEW c2( ).
CASE TYPE OF oref.
  WHEN TYPE c3.
    ref3 ?= oref.
  WHEN TYPE c2.
    ref2 ?= oref.
  WHEN TYPE c1.
    ref1 ?= oref.
  WHEN OTHERS.
    ...
ENDCASE.

Executable Example

[Case Distinction CASE TYPE OF for Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)

Addition

... INTO target

Effect

For every statement WHEN TYPE of a case distinction introduced using CASE TYPE OF, a target variable target can be specified after the optional addition INTO as follows:

-   An existing [object reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") ref whose [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") is more general or equal to the class class or interface intf specified in the statement.
    
-   An inline declaration [DATA(ref)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). In this case, an object reference variable with the static type of the class class or the interface intf is declared.
    

If the addition INTO is specified in the first WHEN statement that meets the condition, the reference oref is assigned to ref before the statement block is executed. Here, both [up casts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry") and [down casts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry") can be performed.

Note

The statement

WHEN TYPE class*|*intf INTO ref.

is a semantically identical short form of

WHEN TYPE class*|*intf.
  ref = oref.

The statement

WHEN TYPE class*|*intf INTO DATA(ref).

is a semantically identical short form of

WHEN TYPE class*|*intf.
  DATA(ref) = CAST class*|*intf( oref ).

Example

The following case distinction shows the short form of the case distinction of the preceding example.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2,
      ref3 TYPE REF TO c3.
oref = NEW c2( ).
CASE TYPE OF oref.
  WHEN TYPE c3 INTO ref3.
  WHEN TYPE c2 INTO ref2.
  WHEN TYPE c1 INTO ref1.
  WHEN OTHERS.
    ...
ENDCASE.

Executable Example

[Case Distinction CASE TYPE OF for RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)

Continue
[WHEN TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm)
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)


### abapwhen_type.htm

---
title: "WHEN TYPE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm) Syntax WHEN TYPE ... INTO target. Effect See CASE TYPE OF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm).
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm"
abapFile: "abapwhen_type.htm"
keywords: ["do", "case", "abapwhen", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) → 

WHEN TYPE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_shortref.htm)

Syntax

WHEN TYPE ... *\[*INTO target*\]*.

Effect

See [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm).


### abencase_type_of_exception_abexa.htm

---
title: "Case Distinction CASE TYPE OF for Exceptions"
description: |
  This example demonstrates the case distinction CASE TYPE OF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) for exception classes. Source Code REPORT demo_case_type_of_exception. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-DAT
version: "7.54"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm"
abapFile: "abencase_type_of_exception_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "abencase", "type", "exception", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) → 

Case Distinction CASE TYPE OF for Exceptions

This example demonstrates the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) for exception classes.

Source Code

REPORT demo\_case\_type\_of\_exception.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS my\_sqrt IMPORTING num TYPE any
                          RAISING   cx\_dynamic\_check.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA number TYPE string.
    out = cl\_demo\_output=>new( ).
    cl\_demo\_input=>request( CHANGING field = number ).
    TRY.
        my\_sqrt( number ).
      CATCH cx\_root INTO DATA(exc).
        CASE TYPE OF exc.
          WHEN TYPE cx\_sy\_arithmetic\_error.
            out->display( 'Arithmetic error' ).
          WHEN TYPE cx\_sy\_conversion\_error.
            out->display( 'Conversion error' ).
          WHEN OTHERS.
            out->display( 'Other error' ).
        ENDCASE.
    ENDTRY.  ENDMETHOD.
  METHOD my\_sqrt.
    DATA(sqrt) = sqrt( CONV decfloat34( num ) ).
    out->display( sqrt ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Non-specific exceptions of the superclass CX\_DYNAMIC\_CHECK can be propagated from a method my\_sqrt. The actual exception class is determined from the calling method using the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm).


### abencase_type_of_rtti_abexa.htm

---
title: "Case Distinction CASE TYPE OF for RTTI"
description: |
  This example demonstrates the case distinction CASE TYPE OF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) for type description classes. Source Code REPORT demo_case_type_of_rtti. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main IMPORTING param TYPE any.
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm"
abapFile: "abencase_type_of_rtti_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencase", "type", "rtti", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) →  [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) → 

Case Distinction CASE TYPE OF for RTTI

This example demonstrates the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) for type description classes.

Source Code

REPORT demo\_case\_type\_of\_rtti.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING param TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(typedescr) = cl\_abap\_typedescr=>describe\_by\_data( param ).
    CASE TYPE OF typedescr.
      WHEN TYPE cl\_abap\_elemdescr INTO DATA(elemdescr).
        cl\_demo\_output=>write( elemdescr->type\_kind ).
      WHEN TYPE cl\_abap\_structdescr INTO DATA(structdescr).
        cl\_demo\_output=>write( structdescr->components ).
      WHEN TYPE cl\_abap\_tabledescr INTO DATA(tabledescr).
        cl\_demo\_output=>write( tabledescr->table\_kind ).
      WHEN OTHERS.
        cl\_demo\_output=>write( 'Not supported' ).
    ENDCASE.  ENDMETHOD.
ENDCLASS.
DATA: elem TYPE i,
      BEGIN OF struct,
        comp1 TYPE i,
        comp2 TYPE i,
      END OF struct,
      itab LIKE STANDARD TABLE OF struc WITH EMPTY KEY,
      dref TYPE REF TO i.
START-OF-SELECTION.
  demo=>main( elem ).
  demo=>main( struct ).
  demo=>main( itab ).
  demo=>main( dref ).
  cl\_demo\_output=>display( ).

Description

Actual parameters of various types are passed to the generically typed parameter param of the method main and an [RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") [type description object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_object_glosry.htm "Glossary Entry") is created that points to the general object reference variable typedescr. The case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm) is used to define a more specific RTTI type description class that matches the type. An online declaration after the addition INTO of the statement WHEN TYPE is used to create an object reference variable of this static type and is assigned the reference to the type description object. Special attributes of the type description objects are accessed in the associated statement blocks.


### abapcase_type.htm

---
title: "CASE TYPE OF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type_shortref.htm) Syntax CASE TYPE OF oref. WHEN TYPE classintf INTO target1. statement_block1 WHEN TYPE classintf INTO target2. statement_block2 ... WHE
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm"
abapFile: "abapcase_type.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abapcase", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm) → 

CASE TYPE OF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type_shortref.htm)

Syntax

CASE TYPE OF oref.
  *\[*WHEN TYPE class*|*intf *\[*INTO target1*\]*.
    *\[*statement\_block1*\]**\]*
  *\[*WHEN TYPE class*|*intf *\[*INTO target2*\]*.
    *\[*statement\_block2*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Addition:

[... INTO target](#!ABAP_ONE_ADD@1@)

Effect

Special [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_distinction_glosry.htm "Glossary Entry") for [object reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). This form of a control structure introduced using [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm) checks the [dynamic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_type_glosry.htm "Glossary Entry") of a non-initial object reference variable and the [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") of an initial object reference variable oref. oref expects an object reference variable with the static type of a class or of an interface. oref is a [general expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

A class class or an interface intf valid in this place must be specified after WHEN TYPE. The first statement block statement\_block is executed for which the class class or the interface intf is more general than or equal to the following:

-   A dynamic type of a non-initial object reference variable oref
    
-   A static type of an initial object reference variable oref
    

If this does not apply to any class class or interface intf, the statement block is executed after WHEN OTHERS. No object type class or intf can be specified if it is known statically that it does not meet the condition.

Notes

-   A case distinction using CASE TYPE OF is a different spelling of the following branch using [IF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm) and the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm) and the corresponding rules and notes apply:
    

IF oref [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm) class*|*intf.
  *\[*statement\_block1*\]*
ELSEIF oref [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_instance_of.htm) class*|*intf.
  *\[*statement\_block2*\]*
...
ELSE.
  *\[*statement\_blockn*\]*
ENDIF.

-   The control structure must specify more specific classes class or interfaces intf before more general classes or interfaces to enable the associated statement block to be executed.
    

Example

Case distinction for the dynamic type of an object reference variable oref, from more specific to more general classes. In the case shown, c2 is the first class that meets the condition. oref can be assigned to ref2 with static type c2 without raising an exception.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2,
      ref3 TYPE REF TO c3.
oref = NEW c2( ).
CASE TYPE OF oref.
  WHEN TYPE c3.
    ref3 ?= oref.
  WHEN TYPE c2.
    ref2 ?= oref.
  WHEN TYPE c1.
    ref1 ?= oref.
  WHEN OTHERS.
    ...
ENDCASE.

Executable Example

[Case Distinction CASE TYPE OF for Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)

Addition

... INTO target

Effect

For every statement WHEN TYPE of a case distinction introduced using CASE TYPE OF, a target variable target can be specified after the optional addition INTO as follows:

-   An existing [object reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") ref whose [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry") is more general or equal to the class class or interface intf specified in the statement.
    
-   An inline declaration [DATA(ref)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). In this case, an object reference variable with the static type of the class class or the interface intf is declared.
    

If the addition INTO is specified in the first WHEN statement that meets the condition, the reference oref is assigned to ref before the statement block is executed. Here, both [up casts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry") and [down casts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry") can be performed.

Note

The statement

WHEN TYPE class*|*intf INTO ref.

is a semantically identical short form of

WHEN TYPE class*|*intf.
  ref = oref.

The statement

WHEN TYPE class*|*intf INTO DATA(ref).

is a semantically identical short form of

WHEN TYPE class*|*intf.
  DATA(ref) = CAST class*|*intf( oref ).

Example

The following case distinction shows the short form of the case distinction of the preceding example.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2,
      ref3 TYPE REF TO c3.
oref = NEW c2( ).
CASE TYPE OF oref.
  WHEN TYPE c3 INTO ref3.
  WHEN TYPE c2 INTO ref2.
  WHEN TYPE c1 INTO ref1.
  WHEN OTHERS.
    ...
ENDCASE.

Executable Example

[Case Distinction CASE TYPE OF for RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)

Continue
[WHEN TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm)
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)
