  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Branches](javascript:call_link\('abenabap_branches.htm'\)) → 

IF

[Short Reference](javascript:call_link\('abapif_shortref.htm'\))

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

These statements define a control structure that can contain multiple statement blocks statement\_block of which a maximum of one is executed, depending on the logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

After IF and ELSEIF any logical expressions [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be listed, while the expressions statement\_block stand for any statement blocks.

The logical expressions, beginning with the IF statement, are checked from top to bottom and the statement block after the first real logical expression is executed. If none of the logical expressions are true, the statement block after the ELSE statement is executed.

If the end of the executed statement block is reached or if no statement block is to be executed, the processing is continued after ENDIF.

Hint

The [conditional operator](javascript:call_link\('abenconditional_operator_glosry.htm'\) "Glossary Entry") [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) can also be used to implement branches in operand positions that are based on logical expressions.

Example

Transformation of a time to the 12-hour format (see also [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\))).

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