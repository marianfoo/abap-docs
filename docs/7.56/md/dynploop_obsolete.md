  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_obsolet.htm) →  [dynpro - Obsolete Processing of Step Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensteploop.htm) → 

dynpro - LOOP, Step Loop

Obsolete Syntax

LOOP *\[*AT itab CURSOR top\_line *\[*INTO wa*\]* *\[*FROM n1*\]* *\[*TO n2*\]**\]*.
  ...
ENDLOOP.

Variants:

[1\. LOOP.](#!ABAP_VARIANT_1@1@)
[2\. LOOP AT itab CURSOR top\_line *\[*INTO wa*\]* *\[*FROM n1*\]* *\[*TO n2*\]*.](#!ABAP_VARIANT_2@2@)

Effect

Defines a loop in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") that is not linked with a [table control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_control_glosry.htm "Glossary Entry"). The loop processes the groups specified for the corresponding [step loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstep_loop_glosry.htm "Glossary Entry") sequentially by executing a loop pass for each group. The statement block between LOOP and ENDLOOP can contain the keywords [FIELD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpfield.htm), [MODULE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpmodule.htm), and [CHAIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpchain.htm) (as well as the obsolete [SELECT and VALUES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynpfield_value_select.htm)) of the flow logic. Loops cannot be nested. Loops can either be executed with or without reference to an internal table.

If step loops are defined in a dynpro, a loop must be defined for each step loop both in the PBO processing block as well as in the PAI processing block. The assignment of loops to step loops results from the alignment of the step loops on the screen. The lines are evaluated with primary priority, and the columns with secondary priority.

System Fields

Within a loop pass, the system field sy-stepl contains the line number of the displayed group, counted from the uppermost visible line. The system field sy-loopc contains the number of group lines displayed on a screen.

Hint

This use of the statement LOOP in the dynpro flow logic is obsolete. It should only be used with the addition [WITH CONTROL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/dynploop.htm), where it is linked with a [table control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_control_glosry.htm "Glossary Entry").

Variant 1   

LOOP.
  ...
ENDLOOP.

Effect

If the addition AT itab is not specified, the content of the dynpro fields of to the current group of the step loop is transported during a loop pass from (at event PBO) or to (at event PAI) identically named data objects in the ABAP program.

Hint

For step loop fields that are defined with reference to the ABAP Dictionary, the identically named data objects in the ABAP program must be declared using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm), as is the case with regular dynpro fields. Otherwise, no data transport takes place.

Example

In the layout of the dynpro screen, there are two dynpro fields wa-col1 and wa-col2 that are grouped together to a group of a step loop. The dynpro flow logic contains the following statements:

PROCESS BEFORE OUTPUT.
  ...
  LOOP.
    MODULE tab\_out.
  ENDLOOP.
  ...
PROCESS AFTER INPUT.
  ...
  LOOP.
    MODULE tab\_in.
  ENDLOOP.
  ...

Loops are executed on the step loop and, in the loops for PBO and PAI, the dialog modules tab\_out and tab\_in are called. The following program section shows how the associated ABAP program fills the step loop fields in the PBO module tab\_out from an internal table itab. It also shows how, in the PAI module tab\_in, it modifies the internal table in accordance with the user entries in the step loop.

DATA: BEGIN OF wa,
        col1 TYPE i,
        col2 TYPE i,
       END OF wa,
       itab LIKE STANDARD TABLE OF wa.
...
MODULE tab\_out OUTPUT.
  IF itab IS INITIAL.
    itab = VALUE #( FOR j = 1 UNTIL j > 40
                     ( col1 = j
                       col2 = j \*\* 2 ) ).
  ENDIF.
  wa = itab\[ sy-stepl \].
ENDMODULE.
...
MODULE tab\_in INPUT.
  MODIFY itab FROM wa INDEX sy-stepl.
ENDMODULE.

Variant 2   

LOOP AT itab CURSOR top\_line *\[*INTO wa*\]* *\[*FROM n1*\]* *\[*TO n2*\]*.
  ...
ENDLOOP.

Effect

If the addition AT itab is specified, an internal table itab of the corresponding ABAP program is sequentially processed parallel to the processing of the step loop. For each group of the step loop, a line in the internal table is processed. The internal table itab must be an [index table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry").

In addition, a scroll bar is generated for the display of the corresponding step loop. This bar makes it possible to scroll between the lines of the internal table itab and to display the corresponding lines in the step loop. Each scrolling action raises the event PAI. For scrolling to work correctly, the addition AT itab must be specified both in the PBO as well as in the PAI processing block.

The additions CURSOR, INTO, TO, and FROM can only be specified in the PBO, not in the PAI processing block.

-   The addition CURSOR controls at which line of the internal table processing begins at PBO time, that is, the content of which line is be displayed first in the step loop. For top\_line, a global data object of the ABAP program with the type i must be specified. If the content of the top\_line is less than 1 or the value of n1, it is implicitly set to 1 or to the value of n1. If it is larger than the number of lines in the internal table or larger than the value of n2, the step loop is not displayed. For each PAI event, top\_line is set to the index of the first displayed table line.
-   The addition INTO is used to specify a work area wa to which the current line of the internal table is assigned at PBO time. If the addition wa is not specified, an internal table with a [header line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry") must be used, which is then used implicitly instead of wa. The content of wa or of the header line is transported after the statement to the identically named fields in the current group of the step loop. The work area wa must be a global data object of the ABAP program that matches the line type of the internal table. At PAI time, on the other hand, only the work area wa or the header line of the internal table is supplied with the content of the step loop fields. The content of the internal table is not modified automatically.
-   The additions FROM and TO can be used to limit the internal table lines that can be processed. Sequential processing of the table begins with the line whose index is contained in n1 and ends with the line whose index is contained in n2. If the additions are not specified, processing begins with the first line and ends with the last line. For n1 and n2, global data objects of the ABAP program with the type i must be specified. The value of n2 must be larger than the value of n1 and it must be within the number of lines in the internal table. If the value of n1 is less than or equal to 0, it is set to 1 implicitly.

Example

In the layout of the dynpro screen, two dynpro fields wa-col1 and wa-col2 are grouped together to a group of a step loop. The dynpro flow logic contains the following statements:

PROCESS BEFORE OUTPUT.
  ...
  MODULE tab\_init.
  LOOP AT itab CURSOR top\_line INTO wa.
  ENDLOOP.
  ...
PROCESS AFTER INPUT.
  ...
  MODULE get\_first\_line.
  LOOP AT itab.
    MODULE tab\_in.
  ENDLOOP.
  ...

Parallel loops are executed through the step loop and the internal itab table. At PBO time, no dialog module is called in the loop. Instead, the module tab\_init is called beforehand to prepare the internal table itab. At PAI, the module tab\_in is called in the loop to modify the internal table in accordance with the user entries in the step loop. Beforehand, the module get\_first\_line is called to store the index of the first displayed table line in the helper variable line. This is necessary because the content of top\_line is changed when the user scrolls. The following program section shows the dialog modules of the corresponding ABAP program.

DATA: BEGIN OF wa,
        col1 TYPE i,
        col2 TYPE i,
       END OF wa,
       itab LIKE TABLE OF wa.
DATA: top\_line  TYPE i,
      line     TYPE i,
      idx  TYPE i.
...
MODULE tab\_init OUTPUT.
  IF itab IS INITIAL.
    itab = VALUE #( FOR j = 1 UNTIL j > 40
                     ( col1 = j
                       col2 = j \*\* 2 ) ).
  ENDIF.
ENDMODULE.
...
MODULE get\_first\_line INPUT.
  line = top\_line.
ENDMODULE.
MODULE tab\_in INPUT.
  idx = sy-stepl + line - 1.
  MODIFY itab FROM wa INDEX idx.
ENDMODULE.