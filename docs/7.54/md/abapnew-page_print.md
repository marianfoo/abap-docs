  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_lists.htm) →  [NEW-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page.htm) → 

NEW-PAGE - spool\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_shortref.htm)

Syntax

... *{* PRINT ON *\[*NEW-SECTION*\]* PARAMETERS pri\_params
                             *\[*ARCHIVE PARAMETERS arc\_params*\]*
                             NO DIALOG *}*
  *|* *{* PRINT OFF *}* ...

Extras:

[1\. ... PRINT ON *\[*NEW-SECTION*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... PARAMETERS pri\_params](#!ABAP_ADDITION_2@2@)
[3\. ... ARCHIVE PARAMETERS arc\_params](#!ABAP_ADDITION_3@3@)
[4\. ... NO DIALOG](#!ABAP_ADDITION_4@4@)
[5\. ... PRINT OFF](#!ABAP_ADDITION_5@5@)

Effect

The addition PRINT ON writes all subsequent output statements to a [spool list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm). The additions *\[*ARCHIVE*\]* PARAMETERS are used to define the spool parameters and the archiving parameters of the [spool request](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspool_request_glosry.htm "Glossary Entry"). The addition PRINT OFF closes a spool list that has been started with the addition PRINT ON.

Addition 1

... PRINT ON *\[*NEW-SECTION*\]*

Effect

The addition PRINT ON creates a new [spool list level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_list_level_glosry.htm "Glossary Entry"). The first output statement after NEW-PAGE PRINT ON opens a new [spool request](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspool_request_glosry.htm "Glossary Entry") and writes to a [spool list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_list_glosry.htm "Glossary Entry") in the [SAP spool system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_spool_system_glosry.htm "Glossary Entry"). The number of the spool request is passed to sy-spono by the first output statement. While it is being created, the spool list is sent page by page to the SAP spool system.

-   If the current list is a screen list, its creation is interrupted and the new spool list level is stacked in it.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) not created with NEW-PAGE PRINT ON, its creation is interrupted and the new spool list level is stacked in it.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) created using NEW-PAGE PRINT ON and the addition NEW-SECTION is not used, a handleable exception of the class CX\_SY\_NESTED\_PRINT\_ON is raised.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) created using NEW-PAGE PRINT ON, the addition NEW-SECTION is used, the specified spool parameters match those of the new list, and the spool parameter PRNEW in the structure pri\_params is initial, no new spool request is opened and the output is written to the current spool list. If the spool parameters define the output of a cover sheet, the cover sheet is printed again before the following output as a spacer sheet.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) created using NEW-PAGE PRINT ON, the addition NEW-SECTION is used, and the specified spool parameters do not match those of the new list or the spool parameter PRNEW in structure pri\_params is not initial, the current spool request is closed implicitly by NEW-PAGE PRINT OFF and a new spool request is created.
    

It is not possible to use NEW-PAGE PRINT ON to stack another spool list level directly on to a spool list level created using NEW-PAGE PRINT ON.

A spool list level created using NEW-PAGE PRINT ON can be closed by either NEW-PAGE PRINT OFF, NEW-PAGE PRINT ON NEW-SECTION, the end of the program, or by leaving a dynpro sequence.

Notes

-   Each statement NEW-PAGE PRINT ON should be closed explicitly using NEW-PAGE PRINT OFF before the program end or before leaving a dynpro sequence.
    
-   The addition NEW-SECTION can be used to avoid the exception CX\_SY\_NESTED\_PRINT\_ON. When using NEW-SECTION, the output can also be continued into the previous spool list, which is not possible when an exception is handled with CATCH.
    
-   As well as the addition NEW-SECTION, the obsolete statement [NEW-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-section.htm) can also be used outside of classes. However it does not enable spool parameters to be specified.
    

Executable Example

[Lists, Spooling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_list_abexa.htm).

Addition 2

... PARAMETERS pri\_params

Addition 3

... ARCHIVE PARAMETERS arc\_params

Addition 4

... NO DIALOG

Effect

These additions provide the spool request with [spool parameters and archiving parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters.htm). The latter are necessary if the spool list is archived using [ArchiveLink](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_archivelink_glosry.htm "Glossary Entry").

The addition PARAMETERS passes the spool parameters in a structure pri\_params of data type PRI\_PARAMS from ABAP Dictionary. If archiving is specified in pri\_params, archiving parameters must be passed using the addition ARCHIVE PARAMETERS in a structure arc\_params of data type ARC\_PARAMS from ABAP Dictionary.

Structures of data types PRI\_PARAMS and ARC\_PARAMS must be filled by the function module [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_function.htm). When the function module is called, either individual spool parameters or all spool parameters can be set in the program and/or a spool dialog window displayed. The function module creates a set of valid spool and archiving parameters for use as pri\_params and arc\_params and adds these to its output parameters.

If the structures pri\_params or arc\_params are initial, the spool parameters or archiving parameters created by a call of the function modules GET\_PRINT\_PARAMETERS with initial input values are used.

The addition NO DIALOG suppresses the spool dialog window that by default appears when using the addition PRINT ON.

Notes

-   These additions must always be used as indicated here. It is particularly important that the standard spool dialog box be suppressed. When using the default spool dialog window, the Back function is not available because the system cannot return to a point before a statement after spooling has been switched on by such a statement. Printing can only be exited using Exit, which ends the entire program. If the user exits the GUI window by choosing Cancel, inconsistent spool parameters can be produced. Instead, the spool dialog window can be displayed by calling the function module [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_function.htm). This function module has an output parameter VALID that indicates the consistency of the spool parameters created.
    
-   The use of the addition NO DIALOG without simultaneously passing spool parameters is allowed only outside of ABAP Objects and produces a warning in the syntax check. In other objects, the spool parameters are derived from the user master record, if possible.
    
-   As well as the additions shown here, there is a range of other additions for an [obsolete specification of spool parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_print_obsolete.htm), which should no longer be used.
    

Example

Creates spool lists during the list event [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_line-selection.htm). The spool parameters are defined by the function module GET\_PRINT\_PARAMETERS before the basic list is created.

REPORT demo NO STANDARD PAGE HEADING.
DATA: spfli\_wa TYPE spfli,
      sflight\_wa TYPE sflight.
DATA: print\_parameters TYPE pri\_params,
      valid\_flag       TYPE c LENGTH 1.
START-OF-SELECTION.
  CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
    IMPORTING
      out\_parameters       = print\_parameters
      valid                = valid\_flag
    EXCEPTIONS
      invalid\_print\_params = 2
      OTHERS               = 4.
  IF valid\_flag = 'X' AND sy-subrc = 0.
    SELECT carrid, connid
           FROM spfli
           INTO CORRESPONDING FIELDS OF @spfli\_wa.
      WRITE: / spfli\_wa-carrid, spfli\_wa-connid.
      HIDE:    spfli\_wa-carrid, spfli\_wa-connid.
    ENDSELECT.
  ELSE.
    ...
  ENDIF.
AT LINE-SELECTION.
  NEW-PAGE PRINT ON PARAMETERS print\_parameters
                    NO DIALOG.
  SELECT \*
         FROM sflight
         WHERE carrid = @spfli\_wa-carrid AND
               connid = @spfli\_wa-connid
         INTO @sflight\_wa.
    WRITE: / sflight\_wa-carrid, sflight\_wa-connid,
             sflight\_wa-fldate ...
  ENDSELECT.
  NEW-PAGE PRINT OFF.

Addition 5

... PRINT OFF

Effect

The addition PRINT OFF closes a [spool list level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_list_level_glosry.htm "Glossary Entry") created using NEW-PAGE PRINT ON, sends the current page to the SAP spool system, and releases the associated spool request. Output statements that follow NEW-PAGE PRINT OFF write to the screen list or spool list where the spool list level closed by PRINT OFF was [stacked](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_spool.htm). When the system returns to the print list, the system field sy-spono is switched to the number of the associated spool request directly when the statement NEW-PAGE PRINT OFF is executed.

NEW-PAGE PRINT OFF is ignored by spool list levels not been created using NEW-PAGE PRINT ON.

Note

At the end of the program and at every list event [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_line-selection.htm), [AT PFnn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_pfnn.htm), and [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_user-command.htm), the statement NEW-PAGE PRINT OFF is executed implicitly.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_NESTED\_PRINT\_ON

-   Cause: Stacked NEW-PAGE PRINT ON.
    Runtime error: NESTED\_PRINT\_ON