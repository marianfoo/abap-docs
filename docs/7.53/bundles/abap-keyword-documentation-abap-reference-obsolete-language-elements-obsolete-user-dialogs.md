# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete User Dialogs

Included pages: 9


### dynpselect.htm

---
title: "SELECT - Dynpro"
description: |
  Obsolete Syntax SELECT  FROM dbtab WHERE col1 = f1 AND col2 = f2 ... INTO wa WHENEVER NOT FOUND SEND  ERRORMESSAGE  WARNING  num WITH  p1 ... . Effect The use of the statement SELECT as a standalone statement in the dynpro flow logic is obsolete. The effect o
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpselect.htm"
abapFile: "dynpselect.htm"
keywords: ["select", "do", "if", "try", "dynpselect"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) → 

SELECT - Dynpro

Obsolete Syntax

SELECT \*
       FROM dbtab
       WHERE col1 = f1 AND col2 = f2 ...
       INTO wa
       WHENEVER *\[*NOT*\]* FOUND
         SEND *{* ERRORMESSAGE *|* WARNING *}* *\[*num *\[*WITH *{* p1 ... *}**\]**\]*.

Effect

The use of the statement SELECT as a standalone statement in the dynpro flow logic is obsolete. The effect of the statement is described in its (also obsolete) use as an addition of the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_value_select.htm) .

Note

If the SELECT statement is used in the dynpro flow logic, [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is applied, if activated.


### dynpfield_value_select.htm

---
title: "FIELD - VALUES, SELECT"
description: |
  Obsolete Syntax Variants: 1. FIELD f VALUES (NOT val1, NOT val2, ...(#!ABAP_VARIANT_1@1@) NOT BETWEEN vali AND valj, ...). 2. FIELD f SELECT (#!ABAP_VARIANT_2@2@) FROM dbtab WHERE col1 = f1 AND col2 = f2 ... INTO wa WHENEVER NOT
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_value_select.htm"
abapFile: "dynpfield_value_select.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "dynpfield", "value"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) → 

FIELD - VALUES, SELECT

Obsolete Syntax

Variants:

[1\. FIELD f VALUES (*\[**\[*NOT*\]* val1*\]*, *\[**\[*NOT*\]* val2*\]*, ...](#!ABAP_VARIANT_1@1@)
                  *\[**\[*NOT*\]* BETWEEN vali AND valj*\]*, ...).
[2\. FIELD f SELECT \*](#!ABAP_VARIANT_2@2@)
            FROM dbtab
            WHERE col1 = f1 AND col2 = f2 ...
            *\[*INTO wa*\]*
            WHENEVER *\[*NOT*\]* FOUND
               SEND *{*ERRORMESSAGE*|*WARNING*}* *\[*num *\[*WITH p1 ... p4*\]**\]*.

Effect

These variants of the statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) can be used in the event block at PAI in the dynpro flow logic. They compare the content of the dynpro field f either with entries from a value list or with the results of a database access.

These types of input checks in the dynpro flow logic are executed after the automatic input checks and before the self-defined input checks in the ABAP program. The specified value list or the results set from the database accesses overrule the automatic input helps from ABAP Dictionary. They are themselves overruled by the events POH and POV. The additions VALUES and SELECT do not modify the effect of the statement FIELDS on the data transport from the dynpro to the ABAP program.

Note

These variants are supported only for reasons of compatibility. You should replace them by checks within the ABAP program.

Variant 1

FIELD f VALUES (*\[**\[*NOT*\]* val1*\]*, *\[**\[*NOT*\]* val2*\]*, ...
                *\[**\[*NOT*\]* BETWEEN vali AND valj*\]*, ...).

Effect

A value list is specified by entries (in parentheses and separated by commas) after the addition VALUES.

The content of the dynpro field f can be compared with single values val1,val2 ... and with value ranges *\[*vali,valj*\]*. The result of each of the comparisons can be negated using the NOT operator. The comparison fields val must be placed in inverted commas and specified in uppercase letters. The content must be part of the value ranges of the data types CHAR or NUMC from ABAP Dictionary.

If a comparison is not true, an error message appears in the status bar of the current GUI window and the associated input field is made ready for input again.

Example

Checks the input field for an airline.

PROCESS AFTER INPUT.
  FIELD carrier
        VALUES ('AA', NOT 'BA', BETWEEN 'QF' AND 'UA').

Variant 2

FIELD f SELECT \*
          FROM dbtab
          WHERE col1 = f1 AND col2 = f2 ...
          *\[*INTO wa*\]*
          WHENEVER *\[*NOT*\]* FOUND
             SEND *{*ERRORMESSAGE*|*WARNING*}* *\[*num *\[*WITH p1 ... p4*\]**\]*.

Effect

When the statement FIELD is executed, the addition SELECT searches for a row of the database table dbtab whose primary key fields col1 col2 ... match the contents of the dynpro fields f1 f2 .... The database table dbtab must be defined in ABAP Dictionary. In the WHERE condition, all primary key fields of the database table that are specified in AND comparisons must be specified with an equal sign (\=).

Depending on whether the addition NOT is specified or not, an error or warning message is sent if no entries or only one entry was found in the database table. In both cases, the input field for dynpro field f is made ready for input again. The message class of the message to be sent must be two characters long and is taken from the first two places of the value specified after the addition MESSAGE-ID of the introductory statement of the associated ABAP program. If a message class is not specified there, a standard message is sent. The message number can be specified as a numeric literal num. If the message contains placeholders, they can be filled with up to four values p1 to p4 as in the ABAP statement MESSAGE with the addition WITH. The placeholders can be specified either as text literals or as dynpro fields.

If a row is found, its content can be assigned to a table work area wa whose structure must match the row type of dbtab. A table area like this is declared in the dynpro by adopting dynpro fields from ABAP Dictionary.

Notes

-   Without the addition INTO, the addition SELECT is similar to a subquery in ABAP SQL. If the addition INTO is used, the SELECT syntax above can be used as a standalone statement in the dynpro flow logic, that is, without the FIELD statement. However, the use of a dynpro statement SELECT is also obsolete. Replace it with the respective ABAP SQL statement in the ABAP program.
    
-   If the addition SELECT is used for the statement FIELD of the dynpro flow logic, [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is applied, if activated.
    
-   For the automatic input checks of dynpros using [check tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_table_glosry.htm "Glossary Entry"), relevant internal FIELD statements are generated with the addition SELECT. For this reason, [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is also applied, if activated, when check tables are accessed.
    

Example

Checks whether a row with the same primary key exists in the database table spfli for the dynpro fields carrier and connect . The associated ABAP program must contain an appropriate MESSAGE-ID addition in the introductory statement.

PROCESS AFTER INPUT.
  FIELD connect
    SELECT \*
           FROM spfli
           WHERE carrid = carrier AND connid = connect
           WHENEVER NOT FOUND SEND ERRORMESSAGE 107
             WITH carrier connect.


### dynpcall_customer_subscreen.htm

---
title: "CALL CUSTOMER SUBSCREEN"
description: |
  Obsolete Syntax CALL CUSTOMER SUBSCREEN sub_area INCLUDING prog dynnr. Effect Like the corresponding variant of CALL SUBSCREEN(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transactio
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpcall_customer_subscreen.htm"
abapFile: "dynpcall_customer_subscreen.htm"
keywords: ["do", "if", "try", "dynpcall", "customer", "subscreen"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) → 

CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresponding variant of [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function group beginning with "X").

Note

The execution of enhancements using transaction CMOD is now obsolete. Instead, the new [enhancement concept](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_concept_glosry.htm "Glossary Entry") should be used.


### abensteploop.htm

---
title: "Obsolete Processing of Step Loops"
description: |
  Step loops are the predecessors of table controls(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm 'Glossary Entry') and are defined without individual descriptions in Screen Painter(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_pain
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop.htm"
abapFile: "abensteploop.htm"
keywords: ["loop", "do", "if", "try", "data", "abensteploop"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) → 

Obsolete Processing of Step Loops

Step loops are the predecessors of [table controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") and are defined without individual descriptions in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). A step loop contains screen elements that, unlike table controls, can occupy multiple rows, grouped together in one group that can be repeated multiple times within the step loop on the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry"). The attributes of the screen elements of the first group define the attributes of the whole step loop. For this reason, the fields of a group can only be created once in the [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") and once in the ABAP program.

In Screen Painter, it is also possible to determine whether the size of the step loop is fixed or variable. For each screen, more than one fixed step loop can be defined, but only one variable step loop. If the user changes the vertical size of the GUI window, this also changes the vertical size of the variable step loop. This raises the event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry").

Processing of step loops and table controls is based on the step loop technique, whose main features are the statements LOOP ... ENDLOOP in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). These statements produce a loop pass across the step loop rows displayed on the screen and a data transport between the ABAP program and dynpro for all data objects with the same name.

Standalone step loops are obsolete and are replaced by table controls, which are based on step loops but encapsulate them too. Accordingly, the specified variants of the [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop_obsolete.htm) statement are obsolete in the dynpro flow logic. The LOOP statement of the dynpro flow logic should only be used with the [WITH CONTROL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop.htm) addition, which assigns a table control to the statement.

Continue
[LOOP - Step Loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop_obsolete.htm)
![Example](exa.gif "Example") [Step Loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop_abexa.htm)


### dynploop_obsolete.htm

---
title: "LOOP - Step Loop"
description: |
  Obsolete Syntax LOOP AT itab CURSOR top_line INTO wa FROM n1 TO n2. ... ENDLOOP. Variants: 1. LOOP.(#!ABAP_VARIANT_1@1@) 2. LOOP AT itab CURSOR top_line INTO wa FROM n1 TO n2.(#!ABAP_VARIANT_2@2@) Effect Defines a loop in the dynpro fl
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop_obsolete.htm"
abapFile: "dynploop_obsolete.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "internal-table", "dynploop", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) →  [Obsolete Processing of Step Loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop.htm) → 

LOOP - Step Loop

Obsolete Syntax

LOOP *\[*AT itab CURSOR top\_line *\[*INTO wa*\]* *\[*FROM n1*\]* *\[*TO n2*\]**\]*.
  ...
ENDLOOP.

Variants:

[1\. LOOP.](#!ABAP_VARIANT_1@1@)
[2\. LOOP AT itab CURSOR top\_line *\[*INTO wa*\]* *\[*FROM n1*\]* *\[*TO n2*\]*.](#!ABAP_VARIANT_2@2@)

Effect

Defines a loop in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") that is not associated with a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry"). The loop processes the groups specified for the corresponding [step loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstep_loop_glosry.htm "Glossary Entry") sequentially by executing a loop pass for each group. The statement block between LOOP and ENDLOOP can contain the keywords [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm), [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpmodule.htm), and [CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm) (as well as the obsolete [SELECT and VALUES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_value_select.htm)) of the flow logic. Nesting of loops is not possible. Loops can either be executed with or without reference to an internal table.

If step loops are defined in a dynpro, a loop must be defined for each step loop both in the the PBO processing block as well as in the PAI processing block. The assignment of loops to step loops is derived from the alignment of the step loops on the screen; the rows are valuated with primary priority, and the columns with secondary priority.

System Fields

Within a loop pass, the system field sy-stepl contains the row number of the displayed group, counted from the uppermost visible row. The system field sy-loopc contains the number of group rows displayed on a screen.

Note

This use of the statement LOOP in the dynpro flow logic is obsolete. It should only be used with the addition [WITH CONTROL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop.htm), where it is associated with a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry").

Variant 1

LOOP.
  ...
ENDLOOP.

Effect

If the addition AT itab is not specified, the contents of the dynpro fields belonging to the current group of the step loop are transported during a loop pass from (at event PBO) or to (at event PAI) data objects with the same name in the ABAP program.

Note

For step loop fields that are defined with reference to ABAP Dictionary, the data objects with the same name in the ABAP program must be declared using [TABLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm), as is the case with normal dynpro fields. Otherwise, no data transport takes place.

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

Loops are run on the step loop and, in the loops for PBO and PAI, the dialog modules tab\_out and tab\_in are called. The following program section shows how the respective ABAP program fills the step loop fields in the PBO module tab\_out from an internal table itab. It also shows how, in the PAI module tab\_in, it modifies the internal table in accordance with the user specifications in the step loop.

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

If the addition AT itab is specified, an internal table itab of the corresponding ABAP program is sequentially processed parallel to the processing of the step loop. For each group of the step loop, a row in the internal table is processed. The internal table itab must be an [index table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_table_glosry.htm "Glossary Entry").

A scroll bar continues to be generated for the display of the corresponding step loop. This bar makes it possible to scroll between the rows of the internal table itab and to display the corresponding rows in the step loop. Each scrolling action raises the event PAI. So that scrolling functions correctly, the addition AT itab must be specified both in the PBO as well as in the PAI processing block.

The additions CURSOR, INTO, TO, and FROM can only be specified in the PBO, not in the PAI processing block.

-   The addition CURSOR controls at which row of the internal table processing begins at PBO time, that is the content of which row is be displayed first in the step loop. For top\_line, a global data object of the ABAP program with the type i must be specified. If the content of the top\_line is less than 1 or the value of n1, it is implicitly set to 1 or to the value of n1. If it is larger than the number of rows in the internal table or larger than the value of n2, the step loop is not displayed. In each PAI event, top\_line is set to the index of the first displayed table row.
    
-   The addition INTO is used to specify a work area wa to which the current row of the internal table is assigned at PBO time. If the addition wa is not specified, an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") is used. This is then used implicitly instead of wa. The content of wa or of the header line is transported after the statement to the fields of the same name in the current group of the step loop. The work area wa must be a global data object of the ABAP program that matches the row type of the internal table. At PAI time, on the other hand, only the work area wa or the header line of the internal table is supplied through the contents of the step loop fields. The content of the internal table is not modified automatically.
    
-   The additions FROM and TO can be used to limit the internal table rows to be processed. Sequential editing of the table begins with the row whose index is contained in n1 and ends with the row whose index is contained in n2. If the additions are not specified, processing begins with the first row and ends with the last row. For n1 and n2, global data objects of the ABAP program with the type i must be specified. The value of n2 must be larger than the value of n1 and it must be within the number of rows in the internal table. If the value of n1 is less than or equal to 0, it is set to 1 implicitly.
    

Example

In the layout of the dynpro screen, there are two dynpro fields wa-col1 and wa-col2 that are grouped together to a group of a step loop. The dynpro flow logic contains the following statements:

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

Parallel loops are executed through the step loop and the internal itab table. At PBO time, no dialog module is called in the loop. Instead, the module tab\_init is called beforehand to edit the internal table itab. At PAI, the module tab\_in is called in the loop to modify the internal table in accordance with the user specifications in the step loop. Beforehand, the module get\_first\_line is called to store the index of the first displayed table row in the helper variable line. This is necessary since the content of top\_line is changed when the user scrolls further. The following program section shows the dialog modules of the corresponding ABAP program.

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


### abensteploop_abexa.htm

---
title: "Step Loop"
description: |
  This example demonstrates the obsolete direct use of step loops. Source Code REPORT demo_dynpro_step_loop. TYPES: BEGIN OF t_itab, col1 TYPE i, col2 TYPE i, END OF t_itab. DATA: itab TYPE STANDARD TABLE OF t_itab, wa   LIKE LINE OF itab, fill TYPE i. DATA: idx   TYPE i, line  TYPE i, lines TYP
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop_abexa.htm"
abapFile: "abensteploop_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "data", "types", "internal-table", "abensteploop", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) →  [Obsolete Processing of Step Loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop.htm) → 

Step Loop

This example demonstrates the obsolete direct use of step loops.

Source Code

REPORT demo\_dynpro\_step\_loop.
TYPES: BEGIN OF t\_itab,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_itab.
DATA: itab TYPE STANDARD TABLE OF t\_itab,
      wa   LIKE LINE OF itab,
      fill TYPE i.
DATA: idx   TYPE i,
      line  TYPE i,
      lines TYPE i,
      limit TYPE i,
      c     TYPE i,
      n1    TYPE i VALUE 5,
      n2    TYPE i VALUE 25.
DATA:  ok\_code TYPE sy-ucomm,
       save\_ok TYPE sy-ucomm.
START-OF-SELECTION.
  itab = VALUE #( FOR j = 1 UNTIL j > 40
                  ( col1 = j col2 = j \*\* 2 ) ).
  fill = lines( itab ).
  CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100' EXCLUDING 'PREVIOUS'.
ENDMODULE.
MODULE status\_0200 OUTPUT.
  SET PF-STATUS 'STATUS\_200' EXCLUDING 'NEXT'.
ENDMODULE.
MODULE transp\_itab\_out OUTPUT.
  idx = sy-stepl + line.
  wa = itab\[ idx \].
ENDMODULE.
MODULE transp\_itab\_in INPUT.
  lines = sy-loopc.
  idx = sy-stepl + line.
  MODIFY itab FROM wa INDEX idx.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'NEXT\_LINE'.
      line = line + 1.
      limit = fill - lines.
      IF line > limit.
        line = limit.
      ENDIF.
    WHEN 'PREV\_LINE'.
      line = line - 1.
      IF line < 0.
        line = 0.
      ENDIF.
    WHEN 'NEXT\_PAGE'.
      line = line + lines.
      limit = fill - lines.
      IF line > limit.
        line = limit.
      ENDIF.
    WHEN 'PREV\_PAGE'.
      line = line - lines.
      IF line < 0.
        line = 0.
      ENDIF.
    WHEN 'LAST\_PAGE'.
      line =  fill - lines.
    WHEN 'FIRST\_PAGE'.
      line = 0.
    WHEN 'NEXT'.
      c = line + 1.
      LEAVE TO SCREEN 200.
  ENDCASE.
ENDMODULE.
MODULE get\_first\_line INPUT.
  line = c - 1.
ENDMODULE.
MODULE user\_command\_0200 INPUT.
  save\_ok = ok\_code.
  CASE save\_ok.
    WHEN 'PREVIOUS'.
      LEAVE TO SCREEN 100.
  ENDCASE.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

In the layout of dynpro 100, a variable step loop is defined with 10 repeating groups. The fields of the repeating groups are the components col1 and col2 of the structure wa of the ABAP program.

In the status STATUS\_100, the function codes FIRST\_PAGE, PREV\_PAGE, PREV\_LINE, NEXT\_LINE, NEXT\_PAGE, LAST\_PAGE, and NEXT are set on pushbuttons of the application toolbar for dynpro 100.

The layout of dynpro 200 is the same as that of dynpro 100, except that the step loop is fixed here, not variable.

In the status STATUS\_200, the function code PREVIOUS is set on a pushbutton of the application toolbar for dynpro 200.

When the program is executed, a step loop is displayed on dynpro 100, whose row number has been adjusted to fit the height of the screen but has no vertical scroll bars. On dynpro 200, a step loop is displayed which has a fixed size of 10 rows; this loop has a vertical scroll bar.

At the time of PBO, both step loops are filled from the internal table itab. For screen 100 the loop is only through the step loop and for screen 200 it is parallel through the step loop and the internal table. The step loop on dynpro 200 is restricted to the rows 5 to 25 of the internal table. To fill the work area wa on dynpro 100, a PBO module is called. This is not necessary for dynpro 200.

At the time of PAI, a module is called in both screens within the loops. In this module, the system transfers possible user entries in the step loop rows to the corresponding rows of the internal table.

For dynpro 100, the scroll function for the step loop is programmed in the PAI module user\_command\_100. To do this, the number of rows of the step loop on the screen is buffered in the helper variable step, because sy-loopc is only filled within the loop. A scrolling function does not need to be programmed for dynpro 200, because it is automatically provided by the system in the form of the scroll bar.

The synchronization between the internal table and the step loop on dynpro 200 is handled by the variable c, which is used in the addition CURSOR of the statement LOOP. It is set before dynpro 200 is called, in correspondence with the display of the table on dynpro 100. This means that the step loops on both dynpros start with the same table row. At the time of PAI of screen 200, c is read to redefine first table row after any scrolling with the scroll bar.


### abensteploop.htm

---
title: "Obsolete Processing of Step Loops"
description: |
  Step loops are the predecessors of table controls(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm 'Glossary Entry') and are defined without individual descriptions in Screen Painter(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_pain
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop.htm"
abapFile: "abensteploop.htm"
keywords: ["loop", "do", "if", "try", "data", "abensteploop"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) → 

Obsolete Processing of Step Loops

Step loops are the predecessors of [table controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") and are defined without individual descriptions in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). A step loop contains screen elements that, unlike table controls, can occupy multiple rows, grouped together in one group that can be repeated multiple times within the step loop on the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry"). The attributes of the screen elements of the first group define the attributes of the whole step loop. For this reason, the fields of a group can only be created once in the [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") and once in the ABAP program.

In Screen Painter, it is also possible to determine whether the size of the step loop is fixed or variable. For each screen, more than one fixed step loop can be defined, but only one variable step loop. If the user changes the vertical size of the GUI window, this also changes the vertical size of the variable step loop. This raises the event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry").

Processing of step loops and table controls is based on the step loop technique, whose main features are the statements LOOP ... ENDLOOP in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). These statements produce a loop pass across the step loop rows displayed on the screen and a data transport between the ABAP program and dynpro for all data objects with the same name.

Standalone step loops are obsolete and are replaced by table controls, which are based on step loops but encapsulate them too. Accordingly, the specified variants of the [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop_obsolete.htm) statement are obsolete in the dynpro flow logic. The LOOP statement of the dynpro flow logic should only be used with the [WITH CONTROL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop.htm) addition, which assigns a table control to the statement.

Continue
[LOOP - Step Loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop_obsolete.htm)
![Example](exa.gif "Example") [Step Loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensteploop_abexa.htm)


### abentexteditor.htm

---
title: "Obsolete Editor Calls"
description: |
  The following statements affect calls of editors integrated into GUI windows(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_window_glosry.htm 'Glossary Entry'). -   EDITOR-CALL FOR itab.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentexteditor.htm"
abapFile: "abentexteditor.htm"
keywords: ["do", "try", "abentexteditor"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) → 

Obsolete Editor Calls

The following statements affect calls of editors integrated into [GUI windows](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_window_glosry.htm "Glossary Entry").

-   [EDITOR-CALL FOR itab.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)

-   [EDITOR-CALL FOR REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)

Continue
[EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)
[EDITOR-CALL FOR REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)


### abentexteditor.htm

---
title: "Obsolete Editor Calls"
description: |
  The following statements affect calls of editors integrated into GUI windows(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_window_glosry.htm 'Glossary Entry'). -   EDITOR-CALL FOR itab.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentexteditor.htm"
abapFile: "abentexteditor.htm"
keywords: ["do", "try", "abentexteditor"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) → 

Obsolete Editor Calls

The following statements affect calls of editors integrated into [GUI windows](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_window_glosry.htm "Glossary Entry").

-   [EDITOR-CALL FOR itab.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)

-   [EDITOR-CALL FOR REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)

Continue
[EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_itab.htm)
[EDITOR-CALL FOR REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapeditor-call_for_report.htm)
