  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

Lists - Spooling On and Off

As long as spooling is switched off, all list output is written to the list buffer for the current screen list. When spooling is switched on, a spool list is created. Spooling can be switched on as follows:

-   Use the statement [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)).

-   Choose the function Execute + Print on the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") of an executable program.

-   Call an executable program with the addition [TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

-   Schedule an executable program in a background job using the additions [VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)) and [TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

If NEW-PAGE PRINT ON is used, spooling is switched on explicitly in the program. With the other three options, spooling is switched on from the start of execution of an executable program. Switching on spooling opens a new [spool list level](javascript:call_link\('abenspool_list_level_glosry.htm'\) "Glossary Entry").

Only spooling switched on with NEW-PAGE PRINT ON can be switched off again using NEW-PAGE PRINT OFF. Spooling that is switched on at the start of a program cannot be switched off within this same program. In particular, spooling is always switched on when executing a program in [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry").

Examples

Switches on spooling explicitly

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / ...
  NEW-PAGE PRINT OFF.
ENDIF.

Switching optical archiving on explicitly

DATA: pri\_params TYPE pri\_params,
      arc\_params TYPE arc\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters         = pri\_params
            out\_archive\_parameters = arc\_params
            valid                 = valid.
IF valid <> space.
  NEW-PAGE PRINT ON PARAMETERS         pri\_params
                    ARCHIVE PARAMETERS arc\_params NO DIALOG.
  PRINT-CONTROL INDEX-LINE '   '.
  WRITE / ....
  NEW-PAGE PRINT OFF.
ENDIF.

Calling the program

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO
                  SPOOL PARAMETERS params.
ENDIF.

Scheduling a background job

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  EXPORTING mode                  = 'BATCH'
            report                = 'MYREPORT'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  CALL FUNCTION 'JOB\_OPEN' ....  EXPORTING jobcount ...
  SUBMIT myreport VIA JOB 'MY\_JOB' NUMBER jobcount
         TO SAP-SPOOL WITHOUT SPOOL DYNPRO
            SPOOL PARAMETERS params.
  CALL FUNCTION 'JOB\_CLOSE' ...
ENDIF.