  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SUBMIT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm)

Syntax

SUBMIT *{*rep*|*(name)*}*
  *\[*USING SELECTION-SCREEN dynnr*\]*
  *\[*VIA SELECTION-SCREEN*\]*
  *\[*USING SELECTION-SET variant*\]*
  *\[*USING SELECTION-SETS OF PROGRAM prog*\]*
  *\[*WITH SELECTION-TABLE rspar*\]*
*{* *\[*WITH sel1 *{* *{**{*EQ*|*NE*|*CP*|*NP*|*GE*|*LT*|*LE*|*GT*}* dobj *\[*SIGN sign*\]**}*
              *|* *{**\[*NOT*\]* BETWEEN dobj1 AND dobj2 *\[*SIGN sign*\]**}*
              *|* *{*IN rtab*}* *}**\]*
  *\[*WITH sel2 *{* *{**{*EQ*|*NE*|*CP*|*NP*|*GE*|*LT*|*LE*|*GT*}* dobj *\[*SIGN sign*\]**}*
              *|* *{**\[*NOT*\]* BETWEEN dobj1 AND dobj2 *\[*SIGN sign*\]**}*
              *|* *{*IN rtab*}* *}**\]*
   ... *}*
  *\[*WITH FREE SELECTIONS texpr*\]*
  *\[*LINE-SIZE width*\]*
  *\[*LINE-COUNT page\_lines*\]*
  *{* *\[*EXPORTING LIST TO MEMORY*\]*
  *|* *\[*TO SAP-SPOOL SPOOL PARAMETERS pri\_params
                  *\[*ARCHIVE PARAMETERS arc\_params*\]*
                  WITHOUT SPOOL DYNPRO*\]* *}*
  *\[**\[*USER user*\]* VIA JOB job NUMBER n *\[*LANGUAGE lang*\]**\]*
  *\[*AND RETURN*\]*.

Effect

Calls an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry").

Additions

-   [*{*rep*|*(name)*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm)
    Specifies the program statically as rep or dynamically in name.
    
-   [USING SELECTION-SCREEN dynnr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_interface.htm)
    Specifies the [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") dynnr to be accessed. If nothing is specified, the [standard selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") is called.
    
-   [VIA SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_interface.htm)
    Displays the selection screen called. If nothing is specified, [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") takes place in the background.
    
-   [USING SELECTION-SET variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)
    Supplies the selection screen with values for a [selection screen variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariant_2_glosry.htm "Glossary Entry") variant.
    
-   [USING SELECTION-SETS OF PROGRAM prog](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)
    Specifies a program prog whose [selection screen variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariant_2_glosry.htm "Glossary Entry") are used.
    
-   [WITH SELECTION-TABLE rspar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)
    Supplies the selection screen with values from an internal table rspar of the row type RSPARAMS or RSPARAMS\_255.
    
-   [WITH sel1 ... WITH sel2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)
    Supplies individual parameters and selection criteria sel1, sel2, ... on the selection screen:
    *{*EQ*|*NE*|*CP*|*NP*|*GE*|*LT*|*LE*|*GT*}* dobj *\[*SIGN sign*\]* - Passes a single value dobj with relational operators and a specification for the SIGN column in the [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry").
    *\[*NOT*\]* BETWEEN dobj1 AND dobj2 *\[*SIGN sign*\]* - Passes an interval from dobj1 to dobj2 with an optional operator NOT and a specification for the SIGN column in the selection table.
    IN rtab - Passes a [ranges table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry") rtab.
    
-   [WITH FREE SELECTIONS texpr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)
    Supplies the dynamic selection for the selection screen on a logical database with values from an internal table texpr of type RSDS\_TEXPR from [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") RSDS.
    
-   [LINE-SIZE width](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm)
    Defines the line width in the basic list for the program accessed to width characters.
    
-   [LINE-COUNT page\_lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm)
    Defines the page length in the basic list for the program accessed to page\_lines lines.
    
-   [EXPORTING LIST TO MEMORY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm)
    Saves the basic list for the program accessed as an internal table of the row type ABAPLIST in the [ABAP Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry"). Can only be used together with AND RETURN.
    
-   [TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm)
    Creates a [spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspool_request_glosry.htm "Glossary Entry") for the basic list in the program accessed with the following parameters:
    SPOOL PARAMETERS pri\_params - Spool parameters in a structure pri\_params of the type PRI\_PARAMS.
    ARCHIVE PARAMETERS arc\_params - Archiving parameters in a structure arc\_params of the type ARC\_PARAMS.
    WITHOUT SPOOL DYNPRO - Suppresses the spool dialog box.
    
-   [*\[*USER user*\]* VIA JOB job NUMBER n *\[*LANGUAGE lang*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_via_job.htm)
    Schedules execution of the program accessed as a [background task](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_task_glosry.htm "Glossary Entry") with the number n in the [background request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_request_glosry.htm "Glossary Entry") job. Can only be used together with AND RETURN. user can be used to specify a user name, and lang to specify the logon language of the background session.
    
-   [AND RETURN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm)
    Once the program call is finished, resumes execution of the program execution is continued after the statement SUBMIT. Otherwise, the calling program is terminated.