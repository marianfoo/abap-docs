  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm) →  [SUBMIT - selscreen\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_interface.htm) → 

SUBMIT - selscreen\_parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_shortref.htm)

Syntax

... *\[*USING SELECTION-SET variant*\]*
    *\[*USING SELECTION-SETS OF PROGRAM prog*\]*
    *\[*WITH SELECTION-TABLE rspar*\]*
    *\[*WITH expr\_syntax1 WITH expr\_syntax2 ...*\]*
    *\[*WITH FREE SELECTIONS texpr*\]* ...

Extras:

[1\. ... USING SELECTION-SET variant](#!ABAP_ADDITION_1@1@)
[2\. ... USING SELECTION-SETS OF PROGRAM prog](#!ABAP_ADDITION_2@2@)
[3\. ... WITH SELECTION-TABLE rspar](#!ABAP_ADDITION_3@3@)
[4\. ... WITH expr\_syntax1 WITH expr\_syntax2 ...](#!ABAP_ADDITION_4@4@)
[5\. ... WITH FREE SELECTIONS texpr](#!ABAP_ADDITION_5@5@)

Effect

USING SELECTION-SET fills all selection screen components using a [selection screen variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariant_2_glosry.htm "Glossary Entry") variant. If USING SELECTION-SETS OF PROGRAM is specified, a variant of a different program can be used. If WITH SELECTION-TABLE is specified, values for multiple selection screen components are passed as the content of an internal table rspar. WITH expr\_syntax fills individual selection screen components with values. The addition WITH FREE SELECTIONS makes it possible to pass dynamic selections to the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") of a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Addition 1

... USING SELECTION-SET variant

Effect

If this addition is specified, the parameters and selection criteria for the selection screen are filled with the values of a [selection screen variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariant_2_glosry.htm "Glossary Entry"). variant expects a character-like data object that contains the name of a selection screen variant for the program called when the statement is executed. If the variant does not exist, an [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") is sent. If the variant is part of a different selection screen, it is ignored.

Note

You can create and manage selection screen variants for every program in which selection screens are defined, either in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry") or during execution of the program by choosing Goto - Variants on a selection screen.

Addition 2

... USING SELECTION-SETS OF PROGRAM prog

Effect

If this addition is specified, the [selection screen variants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariant_2_glosry.htm "Glossary Entry") of the program prog are used in the called program. prog expects a character-like data object that contains the name of a program when the statement is executed. The addition has the following effects:

-   If a variant variant is specified with USING SELECTION-SET, a search is made for this variant in the program prog.
    
-   If the selection screen is displayed using VIA SELECTION-SCREEN, all functions accessed using the menu path Goto - Variants are applied to the selection screen variants of the program prog. These functions are only active, however, if prog is an [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry").
    

Note

The program prog should contain a selection screen that has the same parameters and selection criteria as the selection screen used in the called program.

Addition 3

... WITH SELECTION-TABLE rspar

Effect

If this addition is specified, parameters and selection criteria on the selection screen are filled from an internal table rspar. rspar expects a standard table with the row type RSPARAMS or RSPARAMSL\_255 and without [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The structured data types RSPARAMS and RSPARAMSL\_255 are defined in ABAP Dictionary and have the following components, all of which have the data type CHAR:

-   SELNAME (length 8)
    
-   KIND (length 1)
    
-   SIGN (length 1)
    
-   OPTION (length 2)
    
-   LOW (length 45 for RSPARAMS and 255 for RSPARAMSL\_255)
    
-   HIGH (length 45 for RSPARAMS and 255 for RSPARAMSL\_255)
    

Before parameters and selection criteria of the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") can be filled with specific values, the rows in the internal table rspar must contain the following values:

-   SELNAME must contain the name of a parameter or a [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") for the selection screen in uppercase.
    
-   KIND must contain the category of the selection screen component ("P" for parameters or "S" for selection criteria).
    
-   SIGN, OPTION, LOW, and HIGH must contain the values specified for the [ranges tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") columns that have the same names as the selection criteria. For parameters, the value must be specified in LOW and all other components are ignored.
    

If the name of a selection criterion is repeated in rspar, a ranges table containing multiple rows is defined and passed to the selection criterion. If parameter names occur multiple times, the last value is passed to the parameter.
The content of the parameters or ranges tables for the current program can be entered in the table using the function module RS\_REFRESH\_FROM\_SELECTOPTIONS.

Notes

-   Unlike in ranges tables, the data types of the components LOW and HIGH in table rspar are always of type CHAR and, if necessary, are converted to the type of the parameter or selection criterion when passed.
    
-   When entering values, you must ensure that these have the internal format of the ABAP values, and not the output format of the screen display.
    
-   The data type RSPARAMSL\_255 can be used instead of RSPARAMS from Release 7.2, if the length of 45 characters for components LOW and HIGH is no longer sufficient.
    

Addition 4

... WITH expr\_syntax1 WITH expr\_syntax2 ...

Effect

This addition fills individual parameters or selection criteria of the selection screen with values. Parameters are filled with single values and selection criteria are filled with ranges tables that overwrite values already specified in the called program. The passed [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") is compiled from all additions expr\_syntax that address the same selection criterion sel. The following statements can be specified for expr\_syntax, where the name of a parameter or a selection criterion must be specified directly for sel:

-   sel *{*EQ*|*NE*|*CP*|*NP*|*GT*|*GE*|*LT*|*LE*}* dobj *\[*SIGN sign*\]*
    Passes a single value.
    The operators in front of dobj match the values specified for the column OPTION in ranges tables. dobj expects a data object whose data type can be converted to the data type of the selection screen component sel. A character-like field containing 'I' or 'E' can be specified for sign. The default value is 'I'.
    If sel is a selection criterion, a row is appended to the passed ranges table. Here, the operator is placed in the column OPTION, the content of dobj is placed in the column LOW, and the content of sign is placed in the column SIGN.
    If sel is a parameter, it is set to the value of dobj in the called program. The operator and the value of sign are ignored.
    
-   sel *\[*NOT*\]* BETWEEN dobj1 AND dobj2 *\[*SIGN sign*\]*
    Passes an interval.
    In this case, sel must be a selection criterion. dobj expects data objects whose data type can be converted to that of the columns LOW and HIGH for the [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") sel. A character-like field containing 'I' or 'E' can be specified for sign. The default value is 'I'.
    A row is appended in the ranges table to be passed. If NOT is specified, the value 'NB' is placed in the column OPTION. If it is not specified, 'BT' is entered. The content of the data objects dobj and sign is placed in the columns LOW, HIGH, and SIGN.
    
-   sel IN rtab
    Passes a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry").
    In this case, sel must be a selection criterion. rtab expects a standard table without [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") that has the same structure as the selection table of the selection criterion sel. A table of this type can be created using the addition RANGE OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) and [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm).
    The rows in the table rtab are appended to the passed ranges table.
    

The addition expr\_syntax can be specified more than once and the same selection screen component can also be specified more than once.

Notes

-   \= or INCL can also be used instead of the operator EQ.
    
-   When entering values, you must ensure that these have the internal format of the ABAP values, and not the output format of the screen display.
    

Example

The program report1 has a standalone [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_number_glosry.htm "Glossary Entry") 1100. In the program report2, an internal table with row type RSPARAMS and a ranges table are filled for this selection screen. These are passed at SUBMIT time, together with a single condition.

Called Program

REPORT report1.
DATA text TYPE c LENGTH 10.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
  SELECT-OPTIONS: selcrit1 FOR text,
                  selcrit2 FOR text.
SELECTION-SCREEN END OF SCREEN 1100.
...

Calling Program

REPORT report2.
DATA: text       TYPE c LENGTH 10,
      rspar\_tab  TYPE TABLE OF rsparams,
      rspar\_line LIKE LINE OF rspar\_tab,
      range\_tab  LIKE RANGE OF text,
      range\_line LIKE LINE OF range\_tab.
...
rspar\_line-selname = 'SELCRIT1'.
rspar\_line-kind    = 'S'.
rspar\_line-sign    = 'I'.
rspar\_line-option  = 'EQ'.
rspar\_line-low     = 'ABAP'.
APPEND rspar\_line TO rspar\_tab.
range\_line-sign   = 'E'.
range\_line-option = 'EQ'.
range\_line-low    = 'H'.
APPEND range\_line TO range\_tab.
range\_line-sign   = 'E'.
range\_line-option = 'EQ'.
range\_line-low    = 'K'.
APPEND range\_line TO range\_tab.
SUBMIT report1 USING SELECTION-SCREEN '1100'
               WITH SELECTION-TABLE rspar\_tab
               WITH selcrit2 BETWEEN 'H' AND 'K'
               WITH selcrit2 IN range\_tab
               AND RETURN.

Result
After report1 is accessed by report2, the selection tables for the selection criteria selcrit1 and selcrit2 in the called program contain the following entries:

 

SIGN

OPTION

LOW

HIGH

selcrit1

I

EQ

ABAP

selcrit2

I

BT

H

K

selcrit2

E

EQ

H

selcrit2

E

EQ

K

Addition 5

... WITH FREE SELECTIONS texpr

Effect

This addition fills the [dynamic selections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_selection_glosry.htm "Glossary Entry") of the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") of a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") with values. The called program must be associated with a logical database that supports dynamic selections. texpr must be an internal table of the type RSDS\_TEXPR from [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") RSDS.
In texpr, the selections for the dynamic selections are specified in an internal format (known as Reverse Polish Notation). The function modules FREE\_SELECTIONS\_INIT, FREE\_SELECTIONS\_DIALOG and FREE\_SELECTIONS\_RANGE\_2\_EX from the function group SSEL can be used to fill texpr in the calling program. The first two function modules run a user dialog (see [Dynamic Selections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfree_selections.htm)). At the same time, however, [ranges tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") can be passed to FREE\_SELECTIONS\_RANGE\_2\_EX in an internal table of the type RSDS\_TRANGE for each node in the dynamic selection. These ranges tables are then converted to a table of the row type RSDS\_TEXPR. If the calling program contains a selection screen with the same dynamic selections, its content can first be passed to a table of the type RSDS\_TRANGE using the function module RS\_REFRESH\_FROM\_DYNAMICAL\_SEL.
The rows in the internal table type RSDS\_TRANGE contain a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") component TABLENAME for each node and a table-like component FRANGE\_T of the type RSDS\_FRANGE\_T for the fields in the node. The rows in RSDS\_FRANGE\_T contain a flat component FIELDNAME for each field and a table-like component SELOPT\_T of the row type RSDSSELOPT from ABAP Dictionary. RSDSSELOPT contains the four components SIGN, OPTION, LOW, and HIGH and can include the ranges table.

Example

The program report1 is associated with the logical database F1S, which supports dynamic selections for the node SPFLI. The program report2 enters conditions in a nested internal table of the type rsds\_trange with ranges conditions for field CONNID in node SPFLI. This table is then converted to a table of the type rsds\_texpr, which is passed at SUBMIT time.

Called Program

REPORT report1.
NODES: spfli, sflight, sbook.
...

Calling Program

REPORT report2.
DATA: trange TYPE rsds\_trange,
      trange\_line
        LIKE LINE OF trange,
      trange\_frange\_t\_line
        LIKE LINE OF trange\_line-frange\_t,
      trange\_frange\_t\_selopt\_t\_line
        LIKE LINE OF trange\_frange\_t\_line-selopt\_t,
      texpr TYPE rsds\_texpr.
trange\_line-tablename = 'SPFLI'.
trange\_frange\_t\_line-fieldname = 'CONNID'.
trange\_frange\_t\_selopt\_t\_line-sign   = 'I'.
trange\_frange\_t\_selopt\_t\_line-option = 'BT'.
trange\_frange\_t\_selopt\_t\_line-low    = '0200'.
trange\_frange\_t\_selopt\_t\_line-high   = '0800'.
APPEND trange\_frange\_t\_selopt\_t\_line
  TO trange\_frange\_t\_line-selopt\_t.
trange\_frange\_t\_selopt\_t\_line-sign   = 'I'.
trange\_frange\_t\_selopt\_t\_line-option = 'NE'.
trange\_frange\_t\_selopt\_t\_line-low    = '0400'.
APPEND trange\_frange\_t\_selopt\_t\_line
  TO trange\_frange\_t\_line-selopt\_t.
APPEND trange\_frange\_t\_line TO trange\_line-frange\_t.
APPEND trange\_line TO trange.
CALL FUNCTION 'FREE\_SELECTIONS\_RANGE\_2\_EX'
  EXPORTING
    field\_ranges = trange
  IMPORTING
    expressions  = texpr.
SUBMIT report1 VIA SELECTION-SCREEN
               WITH FREE SELECTIONS texpr.