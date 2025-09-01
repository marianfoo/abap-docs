# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Control Structures / Branches

Included pages: 15



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_branches.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm)
- [abapif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)
- [abapelseif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelseif.htm)
- [abapelse.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelse.htm)
- [abapendif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendif.htm)
- [abapcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)
- [abapwhen.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm)
- [abapendcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendcase.htm)
- [abapcase_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)
- [abapwhen_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm)
- [abencase_type_of_exception_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)
- [abencase_type_of_rtti_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)

**Bundle Contains**: 12 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.981Z

---

### abenabap_branches.htm

> **📖 Official SAP Documentation**: [abenabap_branches.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) → 

Branches

This section describes the branches defined using the following:

-   [IF - ENDIF](javascript:call_link\('abapif.htm'\))

-   [CASE - ENDCASE](javascript:call_link\('abapcase.htm'\))

-   [CASE TYPE OF - ENDCASE](javascript:call_link\('abapcase_type.htm'\))

Special types of branch are group level processing for [internal tables](javascript:call_link\('abapat_itab.htm'\)) and [extracts](javascript:call_link\('abapat_extract.htm'\)) and branches for [exception handling](javascript:call_link\('abenabap_exceptions.htm'\)).

Note

The [conditional operators](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry") [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) and [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) can be used to implement branches in operand positions.

Continue
[IF](javascript:call_link\('abapif.htm'\))
[CASE](javascript:call_link\('abapcase.htm'\))
[CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\))



**📖 Source**: [abenabap_branches.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_branches.htm)

### abapif.htm

> **📖 Official SAP Documentation**: [abapif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

IF

[Quick Reference](javascript:call_link\('abapif_shortref.htm'\))

Syntax

IF [log\_exp1](javascript:call_link\('abenlogexp.htm'\)).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](javascript:call_link\('abenlogexp.htm'\)).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

These statements define a control structure which can contain multiple statement blocks statement\_block of which a maximum of one will be executed in conjunction with logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

After IF and ELSEIF any logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be executed while the expressions statement\_block stand for any statement blocks.

The logical expressions, beginning with the IFstatement, are checked from top to bottom and the statement block after the first is executed during the logical expression. If none of the logical expressions are true, the statement block after the ELSE statement is executed.

When the end of the statement block is reached or if no statement block is to be executed, the processing is continued after ENDIF.

Note

Furthermore, the [conditional operator](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry") [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) can also be used to implement branches in operand positions that are based on logical expressions.

Example

Transforms a time to the 12-hour format (see also [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\))).

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

See also the example for [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)).

Continue
[ELSEIF](javascript:call_link\('abapelseif.htm'\))
[ELSE](javascript:call_link\('abapelse.htm'\))
[ENDIF](javascript:call_link\('abapendif.htm'\))



**📖 Source**: [abapif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)

### abapelseif.htm

> **📖 Official SAP Documentation**: [abapelseif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelseif.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [IF](javascript:call_link\('abapif.htm'\)) → 

ELSEIF

[Quick Reference](javascript:call_link\('abapif_shortref.htm'\))

Syntax

ELSEIF [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Effect

See [IF](javascript:call_link\('abapif.htm'\)).



**📖 Source**: [abapelseif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelseif.htm)

### abapelse.htm

> **📖 Official SAP Documentation**: [abapelse.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelse.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [IF](javascript:call_link\('abapif.htm'\)) → 

ELSE

[Quick Reference](javascript:call_link\('abapif_shortref.htm'\))

Syntax

ELSE.

Effect

See [IF](javascript:call_link\('abapif.htm'\)).



**📖 Source**: [abapelse.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapelse.htm)

### abapendif.htm

> **📖 Official SAP Documentation**: [abapendif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendif.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [IF](javascript:call_link\('abapif.htm'\)) → 

ENDIF

[Quick Reference](javascript:call_link\('abapif_shortref.htm'\))

Syntax

ENDIF.

Effect

See [IF](javascript:call_link\('abapif.htm'\)).



**📖 Source**: [abapendif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendif.htm)

### abapif.htm

> **📖 Official SAP Documentation**: [abapif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

IF

[Quick Reference](javascript:call_link\('abapif_shortref.htm'\))

Syntax

IF [log\_exp1](javascript:call_link\('abenlogexp.htm'\)).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](javascript:call_link\('abenlogexp.htm'\)).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

These statements define a control structure which can contain multiple statement blocks statement\_block of which a maximum of one will be executed in conjunction with logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

After IF and ELSEIF any logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be executed while the expressions statement\_block stand for any statement blocks.

The logical expressions, beginning with the IFstatement, are checked from top to bottom and the statement block after the first is executed during the logical expression. If none of the logical expressions are true, the statement block after the ELSE statement is executed.

When the end of the statement block is reached or if no statement block is to be executed, the processing is continued after ENDIF.

Note

Furthermore, the [conditional operator](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry") [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) can also be used to implement branches in operand positions that are based on logical expressions.

Example

Transforms a time to the 12-hour format (see also [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\))).

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

See also the example for [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)).

Continue
[ELSEIF](javascript:call_link\('abapelseif.htm'\))
[ELSE](javascript:call_link\('abapelse.htm'\))
[ENDIF](javascript:call_link\('abapendif.htm'\))



**📖 Source**: [abapif.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapif.htm)

### abapcase.htm

> **📖 Official SAP Documentation**: [abapcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

CASE

[Quick Reference](javascript:call_link\('abapcase_shortref.htm'\))

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

-   The operand operand after CASE is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").
    
-   The operands operand1, operand2, ... after WHEN are [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)) in which, however, [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") cannot be specified. This property of operand positions is obsolete and should no longer be used.
    

If the end of the executed statement block is reached or no statement block is executed, processing continues after ENDCASE.

The contents are compared as illustrated in the following logical expression:

operand = operand1 *\[*OR operand = operand2
                   *\[*OR operand = operand3 *\[*...*\]**\]**\]*

The [comparison rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) for comparisons between any operands apply when this comparison is made, depending on the data types of the operands involved.

Notes

-   For operand, the current value is used in every comparison. This may differ from the starting value if operand is a variable that is changed in a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") specified after a WHEN statement.
    
-   A CASE control structure is somewhat faster than a semantically equivalent IF control structure.
    
-   Functional methods and certain built-in functions can be specified after WHEN, however this should be avoided. Constant values, for example, should be specified in the operand positions after WHEN.
    
-   In a special case, a control structure introduced using [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) makes it possible for the type of object reference variables to be checked.
    
-   The [conditional operator](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry") [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) can also be used to make case distinctions in operand positions.
    
-   A statement cannot be placed between the statement CASE and the first statement WHEN. In classes, this produces a syntax error; outside classes, [obsolete syntax](javascript:call_link\('abencase_when_obsolete.htm'\)) of this type produces a syntax warning.
    

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
[WHEN](javascript:call_link\('abapwhen.htm'\))
[ENDCASE](javascript:call_link\('abapendcase.htm'\))



**📖 Source**: [abapcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)

### abapwhen.htm

> **📖 Official SAP Documentation**: [abapwhen.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE](javascript:call_link\('abapcase.htm'\)) → 

WHEN

[Quick Reference](javascript:call_link\('abapcase_shortref.htm'\))

Syntax

WHEN *{* *{*operand1  *\[*OR operand2 *\[*OR operand2 *\[*...*\]**\]**\]**}*
     *|* *{*OTHERS*}* *}*.

Effect

See [CASE](javascript:call_link\('abapcase.htm'\)).



**📖 Source**: [abapwhen.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen.htm)

### abapendcase.htm

> **📖 Official SAP Documentation**: [abapendcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendcase.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE](javascript:call_link\('abapcase.htm'\)) → 

ENDCASE

[Quick Reference](javascript:call_link\('abapcase_shortref.htm'\))

Syntax

ENDCASE.

Effect

The statement ENDCASE closes a [case distinction](javascript:call_link\('abencase_distinction_glosry.htm'\) "Glossary Entry") introduced using [CASE](javascript:call_link\('abapcase.htm'\)) or [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)).



**📖 Source**: [abapendcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendcase.htm)

### abapcase.htm

> **📖 Official SAP Documentation**: [abapcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

CASE

[Quick Reference](javascript:call_link\('abapcase_shortref.htm'\))

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

-   The operand operand after CASE is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").
    
-   The operands operand1, operand2, ... after WHEN are [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)) in which, however, [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") cannot be specified. This property of operand positions is obsolete and should no longer be used.
    

If the end of the executed statement block is reached or no statement block is executed, processing continues after ENDCASE.

The contents are compared as illustrated in the following logical expression:

operand = operand1 *\[*OR operand = operand2
                   *\[*OR operand = operand3 *\[*...*\]**\]**\]*

The [comparison rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) for comparisons between any operands apply when this comparison is made, depending on the data types of the operands involved.

Notes

-   For operand, the current value is used in every comparison. This may differ from the starting value if operand is a variable that is changed in a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") specified after a WHEN statement.
    
-   A CASE control structure is somewhat faster than a semantically equivalent IF control structure.
    
-   Functional methods and certain built-in functions can be specified after WHEN, however this should be avoided. Constant values, for example, should be specified in the operand positions after WHEN.
    
-   In a special case, a control structure introduced using [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) makes it possible for the type of object reference variables to be checked.
    
-   The [conditional operator](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry") [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\)) can also be used to make case distinctions in operand positions.
    
-   A statement cannot be placed between the statement CASE and the first statement WHEN. In classes, this produces a syntax error; outside classes, [obsolete syntax](javascript:call_link\('abencase_when_obsolete.htm'\)) of this type produces a syntax warning.
    

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
[WHEN](javascript:call_link\('abapwhen.htm'\))
[ENDCASE](javascript:call_link\('abapendcase.htm'\))



**📖 Source**: [abapcase.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase.htm)

### abapcase_type.htm

> **📖 Official SAP Documentation**: [abapcase_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

CASE TYPE OF

[Quick Reference](javascript:call_link\('abapcase_type_shortref.htm'\))

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

Special [case distinction](javascript:call_link\('abencase_distinction_glosry.htm'\) "Glossary Entry") for [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"). This form of a control structure introduced using [CASE](javascript:call_link\('abapcase.htm'\)) checks the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of a non-initial object reference variable and the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of an initial object reference variable oref. oref expects an object reference variable with the static type of a class or of an interface. oref is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

A class class or an interface intf valid in this place must be specified after WHEN TYPE. The first statement block statement\_block is executed for which the class class or the interface intf is more general than or equal to the following:

-   A dynamic type of a non-initial object reference variable oref
    
-   A static type of an initial object reference variable oref
    

If this does not apply to any class class or interface intf, the statement block is executed after WHEN OTHERS. No object type class or intf can be specified if it is known statically that it does not meet the condition.

Notes

-   A case distinction using CASE TYPE OF is a different spelling of the following branch using [IF](javascript:call_link\('abapif.htm'\)) and the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) and the corresponding rules and notes apply:
    

IF oref [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) class*|*intf.
  *\[*statement\_block1*\]*
ELSEIF oref [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) class*|*intf.
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

[Case Distinction CASE TYPE OF for Exceptions](javascript:call_link\('abencase_type_of_exception_abexa.htm'\))

Addition

... INTO target

Effect

For every statement WHEN TYPE of a case distinction introduced using CASE TYPE OF, a target variable target can be specified after the optional addition INTO as follows:

-   An existing [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") ref whose [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") is more general or equal to the class class or interface intf specified in the statement.
    
-   An inline declaration [DATA(ref)](javascript:call_link\('abendata_inline.htm'\)). In this case, an object reference variable with the static type of the class class or the interface intf is declared.
    

If the addition INTO is specified in the first WHEN statement that meets the condition, the reference oref is assigned to ref before the statement block is executed. Here, both [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") and [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") can be performed.

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

[Case Distinction CASE TYPE OF for RTTI](javascript:call_link\('abencase_type_of_rtti_abexa.htm'\))

Continue
[WHEN TYPE](javascript:call_link\('abapwhen_type.htm'\))
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for Exceptions](javascript:call_link\('abencase_type_of_exception_abexa.htm'\))
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for RTTI](javascript:call_link\('abencase_type_of_rtti_abexa.htm'\))



**📖 Source**: [abapcase_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)

### abapwhen_type.htm

> **📖 Official SAP Documentation**: [abapwhen_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) → 

WHEN TYPE

[Quick Reference](javascript:call_link\('abapcase_shortref.htm'\))

Syntax

WHEN TYPE ... *\[*INTO target*\]*.

Effect

See [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)).



**📖 Source**: [abapwhen_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhen_type.htm)

### abencase_type_of_exception_abexa.htm

> **📖 Official SAP Documentation**: [abencase_type_of_exception_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) → 

Case Distinction CASE TYPE OF for Exceptions

This example demonstrates the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) for exception classes.

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

Non-specific exceptions of the superclass CX\_DYNAMIC\_CHECK can be propagated from a method my\_sqrt. The actual exception class is determined from the calling method using the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)).



**📖 Source**: [abencase_type_of_exception_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_exception_abexa.htm)

### abencase_type_of_rtti_abexa.htm

> **📖 Official SAP Documentation**: [abencase_type_of_rtti_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) →  [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) → 

Case Distinction CASE TYPE OF for RTTI

This example demonstrates the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) for type description classes.

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

Actual parameters of various types are passed to the generically typed parameter param of the method main and an [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") [type description object](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") is created that points to the general object reference variable typedescr. The case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) is used to define a more specific RTTI type description class that matches the type. An online declaration after the addition INTO of the statement WHEN TYPE is used to create an object reference variable of this static type and is assigned the reference to the type description object. Special attributes of the type description objects are accessed in the associated statement blocks.



**📖 Source**: [abencase_type_of_rtti_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencase_type_of_rtti_abexa.htm)

### abapcase_type.htm

> **📖 Official SAP Documentation**: [abapcase_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapcase_type.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcase_type.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

CASE TYPE OF

[Quick Reference](javascript:call_link\('abapcase_type_shortref.htm'\))

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

Special [case distinction](javascript:call_link\('abencase_distinction_glosry.htm'\) "Glossary Entry") for [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"). This form of a control structure introduced using [CASE](javascript:call_link\('abapcase.htm'\)) checks the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of a non-initial object reference variable and the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of an initial object reference variable oref. oref expects an object reference variable with the static type of a class or of an interface. oref is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

A class class or an interface intf valid in this place must be specified after WHEN TYPE. The first statement block statement\_block is executed for which the class class or the interface intf is more general than or equal to the following:

-   A dynamic type of a non-initial object reference variable oref
    
-   A static type of an initial object reference variable oref
    

If this does not apply to any class class or interface intf, the statement block is executed after WHEN OTHERS. No object type class or intf can be specified if it is known statically that it does not meet the condition.

Notes

-   A case distinction using CASE TYPE OF is a different spelling of the following branch using [IF](javascript:call_link\('abapif.htm'\)) and the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) and the corresponding rules and notes apply:
    

IF oref [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) class*|*intf.
  *\[*statement\_block1*\]*
ELSEIF oref [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) class*|*intf.
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

[Case Distinction CASE TYPE OF for Exceptions](javascript:call_link\('abencase_type_of_exception_abexa.htm'\))

Addition

... INTO target

Effect

For every statement WHEN TYPE of a case distinction introduced using CASE TYPE OF, a target variable target can be specified after the optional addition INTO as follows:

-   An existing [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") ref whose [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") is more general or equal to the class class or interface intf specified in the statement.
    
-   An inline declaration [DATA(ref)](javascript:call_link\('abendata_inline.htm'\)). In this case, an object reference variable with the static type of the class class or the interface intf is declared.
    

If the addition INTO is specified in the first WHEN statement that meets the condition, the reference oref is assigned to ref before the statement block is executed. Here, both [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") and [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") can be performed.

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

[Case Distinction CASE TYPE OF for RTTI](javascript:call_link\('abencase_type_of_rtti_abexa.htm'\))

Continue
[WHEN TYPE](javascript:call_link\('abapwhen_type.htm'\))
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for Exceptions](javascript:call_link\('abencase_type_of_exception_abexa.htm'\))
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for RTTI](javascript:call_link\('abencase_type_of_rtti_abexa.htm'\))
