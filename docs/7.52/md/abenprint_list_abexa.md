  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Spooling Lists](javascript:call_link\('abenprint.htm'\)) → 

Spooling Lists

The example demonstrates how to spool lists and how to stack spool list levels.

Source Code

REPORT demo\_list\_print LINE-COUNT 10 LINE-SIZE 50.
DATA params LIKE pri\_params.
DATA valid  TYPE c LENGTH 1.
PARAMETERS para TYPE c LENGTH 1.
CLASS print\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS print IMPORTING text TYPE string.
ENDCLASS.
INITIALIZATION.
  CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
    EXPORTING
      destination    = 'LOCL'
      immediately    = ' '
      no\_dialog      = 'X'
      line\_count     = 10
      line\_size      = 50
    IMPORTING
      out\_parameters = params
      valid          = valid.
  IF valid <> 'X'.
    LEAVE PROGRAM.
  ENDIF.
  params-prtxt = 'Parameter 1'.
  CALL FUNCTION 'SET\_PRINT\_PARAMETERS'
    EXPORTING
      in\_parameters = params.
START-OF-SELECTION.
  WRITE / 'AAAA'.
  params-prtxt = 'Parameter 2'.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / 'BBBB'.
  CALL SCREEN 100.
  WRITE / 'GGGG'.
  NEW-PAGE PRINT OFF.
  WRITE / 'HHHH'.
MODULE status\_0100 OUTPUT.
  SUPPRESS DIALOG.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
  WRITE / 'CCCC'.
  params-prtxt = 'Parameter 3'.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / 'DDDD'.
  print\_demo=>print( 'EEEE' ).
  NEW-PAGE PRINT OFF.
  WRITE / 'FFFF'.
ENDMODULE.
CLASS print\_demo IMPLEMENTATION.
  METHOD print.
    params-prtxt = 'Parameter 4'.
    TRY.
        NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
      CATCH cx\_sy\_nested\_print\_on.
        NEW-PAGE PRINT ON PARAMETERS params NO DIALOG NEW-SECTION.
    ENDTRY.
    WRITE / text.
    NEW-PAGE PRINT OFF.
  ENDMETHOD.
ENDCLASS.

Description

The program creates five lists. If the user chooses Execute on the selection screen, one screen list and four spool lists are created. If the user chooses Execute + Print on the selection screen, five spool lists are created.

In the event block INITIALIZATION, by calling function module GET\_PRINT\_PARAMETERS, the spool parameters are placed into the structure params. By passing the initial value to parameter IMMEDIATELY, the spool requests are stored in the spool system, but not spooled immediately. Function module SET\_PRINT\_PARAMETERS is used to pre-fill the input fields of the spool dialog window of the selection screen.

The spool requests created and the content of the spool lists can be displayed by choosing System → Own Spool Requests.

-   Depending on the user action, the first list on the selection screen is either a two-page screen list (basic list) or a two-page spool list with the title "Parameter 1". The first page contains a line "AAAA". The second page contains a line "HHHH".

-   The second list is a one-page spool list explicitly created with NEW-PAGE PRINT ON and carries the title "Parameter 2". It contains the lines "BBBB" and "GGGG". Its spool list level is stacked upon the screen list or upon the spool list level with the title "Parameter 1".

-   The third list is a two-page spool list implicitly created by the call of a screen sequence with CALL SCREEN and carries the title "Parameter 2". The first page contains a line "CCCC". The second page contains a line "FFFF". Its spool list level is stacked upon the spool list level of the previous spool list with the title "Parameter 2", from which the spool parameters are also taken.

-   The fourth list is a one-page spool list explicitly created with NEW-PAGE PRINT ON and carries the title "Parameter 3". It contains the line "DDDD". Its spool list level is stacked upon the spool list level of the previous spool list with the title "Parameter 2".

-   The fifth list is a one-page spool list explicitly created with NEW-PAGE PRINT ON and carries the title "Parameter 4". It contains the line "EEEE". Its spool list level is stacked upon the spool list level of the previous spool list with the title "Parameter 2".

The fifth list is created in the static method print of class print\_demo. The first attempt to create a new spool list with the title "Parameter 3" raises the exception CX\_SY\_NESTED\_PRINT\_ON, because the spool list created with NEW-PAGE PRINT ON and carrying the title "Parameter 2" is still open. When the exception is handled, a new spool list is opened using the addition NEW SECTION. Since the spool parameters used are different, the opened spool list is closed and a new spool list is opened, no longer raising an exception. If identical spool parameters are used, the output is appended to the existing spool list. Because the spool list opened using NEW-PAGE PRINT ON is closed already in the method, the statement NEW-PAGE PRINT OFF in the dialog module status\_0100 no longer has an effect.