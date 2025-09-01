  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) →  [SUBMIT, selscreen\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_interface.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SUBMIT, selscreen_parameters, ABAPSUBMIT_SELSCREEN_PARAMETERS, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SUBMIT, selscreen\_parameters

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_shortref.htm)

Syntax

... *\[*USING SELECTION-SET variant*\]*
    *\[*USING SELECTION-SETS OF PROGRAM prog*\]*
    *\[*WITH SELECTION-TABLE rspar*\]*
    *\[*WITH expr\_syntax1 WITH expr\_syntax2 ...*\]*
    *\[*WITH FREE SELECTIONS texpr*\]* ...

Additions:

[1\. ... USING SELECTION-SET variant](#!ABAP_ADDITION_1@1@)
[2\. ... USING SELECTION-SETS OF PROGRAM prog](#!ABAP_ADDITION_2@2@)
[3\. ... WITH SELECTION-TABLE rspar](#!ABAP_ADDITION_3@3@)
[4\. ... WITH expr\_syntax1 WITH expr\_syntax2 ...](#!ABAP_ADDITION_4@4@)
[5\. ... WITH FREE SELECTIONS texpr](#!ABAP_ADDITION_5@5@)

Effect

USING SELECTION-SET supplies all selection screen components using a [selection screen variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariant_glosry.htm "Glossary Entry") variant. The specification USING SELECTION-SETS OF PROGRAM enables the use of a variant of a different program. WITH SELECTION-TABLE can be used to pass values for multiple selection screen components as the content of an internal table rspar. WITH expr\_syntax supplies individual selection screen components with values. The addition WITH FREE SELECTIONS enables the passing of dynamic selections to the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Addition 1   

... USING SELECTION-SET variant

Effect

If this addition is specified, the parameters and selection criteria of the selection screen are supplied with the values of a [selection screen variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariant_glosry.htm "Glossary Entry"). For variant, a character-like data object must be specified that contains the name of a selection screen variant of the program called when the statement is executed. If the variant does not exist, an [error message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenerror_message_glosry.htm "Glossary Entry") is sent. If the variant belongs to a different selection screen, it is ignored.

Hint

Selection screen variants can be created and managed for every program in which selection screens are defined, either in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry") or during program execution by choosing Goto - Variants on a selection screen.

Addition 2   

... USING SELECTION-SETS OF PROGRAM prog

Effect

If this addition is specified, the [selection screen variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariant_glosry.htm "Glossary Entry") of the program prog are used in the called program. prog expects a character-like data object that contains the name of a program when the statement is executed. The addition has the following effects:

-   If a variant variant is specified with USING SELECTION-SET, this variant is searched for in the program prog.
-   If the selection screen is displayed using VIA SELECTION-SCREEN, all functions accessible via the menu path Goto - Variants affect the selection screen variants of the program prog. These functions are only active, however, if prog is an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry").

Hint

The program prog should contain a selection screen with the same parameters and selection criteria as the selection screen used in the called program.

Addition 3   

... WITH SELECTION-TABLE rspar

Effect

If this addition is specified, parameters and selection criteria on the selection screen are supplied by an internal table rspar. rspar expects a standard table with the line type RSPARAMS or RSPARAMSL\_255 and without [secondary table keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The structured data types RSPARAMS and RSPARAMSL\_255 are defined in the ABAP Dictionary and have the following components, all of which have the data type CHAR:

-   SELNAME (length 8)
-   KIND (length 1)
-   SIGN (length 1)
-   OPTION (length 2)
-   LOW (length 45 for RSPARAMS and 255 for RSPARAMSL\_255)
-   HIGH (length 45 for RSPARAMS and 255 for RSPARAMSL\_255)

In order to supply parameters and selection criteria of the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") with specific values, the lines in the internal table rspar must contain the following values:

-   selname must contain the name of a parameter or a [selection criterion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_criterion_glosry.htm "Glossary Entry") for the selection screen in uppercase letters.
-   kind must contain the type of the selection screen component (P for parameters or S for selection criteria).
-   In sign, option, low, and high, the values specified for the identically named columns of the [ranges table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry") must be passed for the selection criteria. For parameters, the value must be passed in low and all other components are ignored.

If the name of a selection criterion occurs more than once in rspar, a ranges table containing multiple lines is defined and passed to the selection criterion. If parameter names occur multiple times, the last value is passed to the parameter.
The content of the parameters or ranges tables for the current program can be supplied in the table using the function module RS\_REFRESH\_FROM\_SELECTOPTIONS.

Hints

-   Unlike in ranges tables, the data types of the components low and high in table rspar are always of type c and, if necessary, are converted to the type of the parameter or selection criterion when passed.
-   When values are specified, these must have the internal format of the ABAP values, and not the output format of the screen display.
-   The data type RSPARAMSL\_255 can be used instead of RSPARAMS from Release 7.2, if the length of 45 characters for components low and high is no longer sufficient.

Addition 4   

... WITH expr\_syntax1 WITH expr\_syntax2 ...

Effect

This addition supplies individual parameters or selection criteria of the selection screen with values. Parameters are supplied with single values and selection criteria are filled with ranges tables that overwrite values already set in the called program. The [ranges table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry") that is to be passed is compiled from all additions expr\_syntax that address the same selection criterion sel. The following statements can be specified for expr\_syntax, where the name of a parameter or a selection criterion must be specified directly for sel:

-   sel *{*EQ*|*NE*|*CP*|*NP*|*GT*|*GE*|*LT*|*LE*}* dobj *\[*SIGN sign*\]*
    
    Passing of a single value.
    
    The operators in front of dobj match the values specified for the column option in ranges tables. dobj expects a data object whose data type can be converted to the data type of the selection screen component sel. No [enumerated object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified. A character-like field containing 'I' or 'E' can be specified for sign. The default value is 'I'.
    
    If sel is a selection criterion, a line is appended to the ranges table to be passed, whereby the specified operator is placed in the column option, the content of dobj is placed in the column low, and the content of sign is placed in the column sign.
    
    If sel is a parameter, it is set to the value of dobj in the called program. The operator and the value of sign are ignored.
    
-   sel *\[*NOT*\]* BETWEEN dobj1 AND dobj2 *\[*SIGN sign*\]*
    
    Passing of an interval.
    
    In this case, sel must be a selection criterion. dobj expects data objects whose data type can be converted to that of the columns low and high of the [selection criterion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_criterion_glosry.htm "Glossary Entry") sel. No [enumerated object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be specified. A character-like field containing 'I' or 'E' can be specified for sign. The default value is 'I'.
    
    A line is appended to the ranges table to be passed. If NOT is specified, the value 'NB' is placed in the column option, otherwise 'BT' is placed in the column. The content of the data objects dobj and sign is placed in the columns low, high, and sign.
    
-   sel IN range\_tab
    
    Passing of a [ranges table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry").
    
    In this case, sel must be a selection criterion. range\_tab expects a standard table without [secondary table keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") that has the structure of the selection table of the selection criterion sel. A table of this type can be created using the addition RANGE OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) and [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm).
    
    The lines of the table range\_tab are appended to the ranges table that is to be passed.
    

The addition expr\_syntax can be specified more than once, and the same selection screen component can also be specified more than once.

If a data object is passed that cannot be converted to the data type of the selection screen component, the runtime error SUBMIT\_PARAM\_NOT\_CONVERTIBLE occurs instead of a syntax error.

Hints

-   \= or INCL can also be used instead of the operator EQ.
-   When specifying values, they must be specified in the internal format for ABAP values rather than the output format of the screen display.
-   When passed to selection screens, [enumerated objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") cannot be converted implicitly to the types c or string.

Example

The program report1 has a standalone [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_number_glosry.htm "Glossary Entry") 1100. In the program report2, an internal table with line type RSPARAMS and a ranges table are filled for this selection screen. In the case of SUBMIT, these are passed together with a single condition.

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
After report1 is called by report2, the selection tables of the selection criteria selcrit1 and selcrit2 of the called program are filled as follows:

 

sign

option

low

high

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

This addition supplies the [dynamic selections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_selection_glosry.htm "Glossary Entry") of the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") with values. The called program must be linked to a logical database that supports dynamic selections. texpr must be an internal table of type rsds\_texpr from [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") RSDS.

In texpr, the selections for the dynamic selections are specified in an internal format (Reverse Polish Notation). The function modules FREE\_SELECTIONS\_INIT, FREE\_SELECTIONS\_DIALOG, and FREE\_SELECTIONS\_RANGE\_2\_EX from the function pool SSEL can be used to fill texpr in the calling program. Whereas the first two function modules run a user dialog (see [Dynamic Selections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfree_selections.htm)), [ranges tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry") can be passed to FREE\_SELECTIONS\_RANGE\_2\_EX in an internal table of the type rsds\_trange for each node of the dynamic selection and are then converted into a table of the line type rsds\_texpr. If the calling program contains a selection screen with the same dynamic selections, its content can be passed beforehand to a table of the type rsds\_trange using the function module RS\_REFRESH\_FROM\_DYNAMICAL\_SEL.
The lines of the internal table type rsds\_trange contain a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") component tablename for each node and a table-like component frange\_t of the type rsds\_frange\_t for the fields of the node. The lines in rsds\_frange\_r contain a flat component fieldname for each field and a table-like component selopt\_t of the line type RSDSSELOPT from the ABAP Dictionary. RSDSSELOPT contains the four components sign, option, low, and high and can include the ranges table.

Example

The program report1 is linked to the logical database F1S, which supports dynamic selections for the node SPFLI. The program report2 enters conditions in a nested internal table of the type rsds\_trange with ranges conditions for field CONNID of the node SPFLI. This table is then converted into a table of the type rsds\_texpr, which is passed at SUBMIT.

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