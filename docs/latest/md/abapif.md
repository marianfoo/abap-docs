  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_branches.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IF%2C%20ABAPIF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IF

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapif_shortref.htm)

Syntax

IF [log\_exp1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

These statements define a control structure that can contain multiple statement blocks statement\_block of which a maximum of one is executed, depending on the logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).

After IF and ELSEIF any logical expressions [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) can be listed, while the expressions statement\_block stand for any statement blocks.

The logical expressions, beginning with the IF statement, are checked from top to bottom and the statement block after the first real logical expression is executed. If none of the logical expressions are true, the statement block after the ELSE statement is executed.

If the end of the executed statement block is reached or if no statement block is to be executed, the processing is continued after ENDIF.

Hint

The [conditional operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_operator_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm) can also be used to implement branches in operand positions that are based on logical expressions.

Example

Transformation of a time to the 12-hour format (see also [Country-Specific Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm)).

FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
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

See also the example for [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm).

Continue
[ELSEIF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapelseif.htm)
[ELSE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapelse.htm)
[ENDIF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendif.htm)