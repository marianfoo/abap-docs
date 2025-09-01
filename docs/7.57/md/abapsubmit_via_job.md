  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\)) →  [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SUBMIT, job_options, ABAPSUBMIT_VIA_JOB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

SUBMIT, job\_options

[Short Reference](javascript:call_link\('abapsubmit_shortref.htm'\))

Syntax

... *\[*USER user*\]* VIA JOB job NUMBER n *\[*LANGUAGE lang*\]* ...

Additions:

[1\. ... USER user](#!ABAP_ADDITION_1@1@)
[2\. ... LANGUAGE lang](#!ABAP_ADDITION_2@2@)

Effect

This addition schedules the execution of the called program as a [background task](javascript:call_link\('abenbackround_task_glosry.htm'\) "Glossary Entry") with the number n in the [background request](javascript:call_link\('abenbackround_request_glosry.htm'\) "Glossary Entry") job. The number n for a background request job must be obtained using the function module JOB\_OPEN from the function pool BTCH. The complete program is not processed directly but in a [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") in accordance with the parameters for the background request and is not processed directly. The addition VIA JOB can only be used together with the addition AND RETURN.

The called program is scheduled and executed in three steps:

1.  The addition VIA JOB also loads the called program in a separate [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") when the statement SUBMIT is executed, and all steps located before [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)) are executed. This means the events [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) are raised, and [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") is performed. If the selection screen is not processed in the background because VIA SELECTION-SCREEN is specified, the user of the calling program can edit it and schedule the called program in the background request using the function Place in Job. If the user cancels selection screen processing, the program is not scheduled in the background job. In both cases, the internal session of the called program is terminated after selection screen processing and the calling program is resumed due to AND RETURN.
2.  The program is then scheduled in the background task. After this, scheduling is carried out in the background task, where the selections specified by the user or by the additions for filling the selection screen are stored in an internal [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry").
3.  The actual execution of the program then takes place in a separate [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") as part of the background request. The current user and client of the current session correspond to the user and client of the background session. The user can be overwritten using the addition USER. The language of the background session is either the current [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") or can be set using the addition LANGUAGE. The program is now run completely. All events are raised, including those from selection screen processing, although the selection screen is processed in the background. The selection screen variant stored internally is passed to the selection screen between the events [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) and [AT SELECTION SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)).

If a basic list is created in the called program, a [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry") should be created with explicitly passed spool parameters by specifying [TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)) at the same time. Otherwise, the addition VIA JOB creates a spool request implicitly that derives its spool parameters from standard values, some of which are taken from the user defaults, and are not necessarily consistent.

System Fields

sy-subrc

Meaning

0

Background task was scheduled successfully.

4

Scheduling was terminated by the user on the selection screen.

8

Error during the scheduling, that is during the internal call of JOB\_SUBMIT.

12

Error during internal number assignment

Hints

-   Background jobs can usually be created and monitored via the menu path System - Services - Jobs. Internally, the language elements shown here are used. In addition to JOB\_OPEN, the function modules JOB\_CLOSE and JOB\_SUBMIT can also be used in the ABAP program. JOB\_CLOSE completes the creation of a background request. Like the SUBMIT statement, JOB\_SUBMIT schedules an ABAP program as a background task in a background request. JOB\_SUBMIT provides more control options for [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry") but the input values for the selection screen must be passed to an existing selection screen variant. The statement SUBMIT creates this variant and accesses JOB\_SUBMIT internally.
-   If a scheduling error occurs, the key of the last [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") sent can be read using the method GET\_ERROR\_MESSAGE of the class CL\_ABAP\_SUBMIT\_HANDLING.
-   Also when the addition VIA JOB is used, a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") is created for a short time. In the called program, the associated [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") can be accessed in the processing blocks that are executed before actual background processing in the first step above, that is, before the internal session is exited after selection screen processing. The actual background processing takes place in a separate [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry"), where neither the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") nor the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") of the calling program can be accessed.

Example

Scheduling of a program demo\_submitable as a background task with the number number in a background request name. After scheduling, the background task is completed by the function module JOB\_CLOSE and released immediately, providing the user has the relevant authorization.

DATA: number           TYPE tbtcjob-jobcount,
      name             TYPE tbtcjob-jobname VALUE 'JOB\_TEST',
      print\_parameters TYPE pri\_params.
...
CALL FUNCTION 'JOB\_OPEN'
  EXPORTING
    jobname          = name
  IMPORTING
    jobcount         = number
  EXCEPTIONS
    cant\_create\_job  = 1
    invalid\_job\_data = 2
    jobname\_missing  = 3
    OTHERS           = 4.
IF sy-subrc = 0.
  SUBMIT demo\_submitable TO SAP-SPOOL
                         SPOOL PARAMETERS print\_parameters
                         WITHOUT SPOOL DYNPRO
                         VIA JOB name NUMBER number
                         AND RETURN.
  IF sy-subrc = 0.
    CALL FUNCTION 'JOB\_CLOSE'
      EXPORTING
        jobcount             = number
        jobname              = name
        strtimmed            = 'X'
      EXCEPTIONS
        cant\_start\_immediate = 1
        invalid\_startdate    = 2
        jobname\_missing      = 3
        job\_close\_failed     = 4
        job\_nosteps          = 5
        job\_notex            = 6
        lock\_failed          = 7
        OTHERS               = 8.
    IF sy-subrc = 0.
      cl\_demo\_output=>display( \`Job \` && name &&
                               \` submitted with number \` && number ).
    ELSE.
      ...
    ENDIF.
  ELSE.
    FINAL(msg) = cl\_abap\_submit\_handling=>get\_error\_message( ).
    MESSAGE ID msg-msgid
            TYPE 'I'
            NUMBER msg-msgno
            WITH msg-msgv1 msg-msgv2 msg-msgv3 msg-msgv4
            DISPLAY LIKE msg-msgty.
  ENDIF.
ENDIF.

The following code snippet shows how the background task can be analyzed.

DATA:
  name   TYPE tbtcjob-jobname VALUE 'JOB\_TEST',
  number TYPE tbtcjob-jobcount.
cl\_demo\_input=>add\_field( CHANGING field = name ).
cl\_demo\_input=>request(   CHANGING field = number ).
DATA:
  BEGIN OF jobstate,
    aborted     TYPE c LENGTH 1,
    finished    TYPE c LENGTH 1,
    preliminary TYPE c LENGTH 1,
    ready       TYPE c LENGTH 1,
    running     TYPE c LENGTH 1,
    scheduled   TYPE c LENGTH 1,
    suspended   TYPE c LENGTH 1,
    other       TYPE c LENGTH 1,
  END OF jobstate.
CALL FUNCTION 'SHOW\_JOBSTATE'
  EXPORTING
    jobcount         = number
    jobname          = name
  IMPORTING
    aborted          = jobstate-aborted
    finished         = jobstate-finished
    preliminary      = jobstate-preliminary
    ready            = jobstate-ready
    running          = jobstate-running
    scheduled        = jobstate-scheduled
    suspended        = jobstate-suspended
    other            = jobstate-other
  EXCEPTIONS
    jobcount\_missing = 1
    jobname\_missing  = 2
    job\_notex        = 3
    OTHERS           = 4.
IF sy-subrc = 0.
  cl\_demo\_output=>write( jobstate ).
ELSE.
  cl\_demo\_output=>write( \`Exception in SHOW\_JOBSTATE\` ).
ENDIF.
DATA joblog TYPE TABLE OF tbtc5.
CALL FUNCTION 'BP\_JOBLOG\_READ'
  EXPORTING
    jobcount              = number
    jobname               = name
  TABLES
    joblogtbl             = joblog
  EXCEPTIONS
    cant\_read\_joblog      = 1
    jobcount\_missing      = 2
    joblog\_does\_not\_exist = 3
    joblog\_is\_empty       = 4
    joblog\_name\_missing   = 5
    jobname\_missing       = 6
    job\_does\_not\_exist    = 7
    OTHERS                = 8.
IF sy-subrc = 0.
  cl\_demo\_output=>write( joblog ).
ELSE.
  cl\_demo\_output=>write( \`Exception in BP\_JOBLOG\_READ\` ).
ENDIF.
cl\_demo\_output=>display( ).

Addition 1   

... USER user

Effect

The optional addition USER can be used to specify a user name user of the type sy-uname under whose name the logon to the background session takes place and whose authorizations are used to execute the background task. If USER is not specified, the user name of the current user session is used.

Hints

-   The name specified after USER is checked using the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_BTCH\_NAM. When the program is executed, only those names can be specified for which the current user has the appropriate authorization. The names allowed by the authorization object represent a type of include list of users whose logons allow the current user to execute a background task.
-   The current user should not be specified explicitly using USER sy-uname. This specification is redundant, and the system field is also at risk of being overwritten before the background task is scheduled, for example in the ABAP Debugger.
-   See also [User-Specific Program Flow](javascript:call_link\('abenuser_dependent_scrty.htm'\)).

Addition 2   

... LANGUAGE lang

Effect

This addition sets the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") in which the called program is executed. If the addition LANGUAGE is not specified, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is used.

lang expects a character-like data object that contains a language key with a length of one character in the first place and this value must be contained in the column SPRAS of the database table T002. If the data object lang contains a blank at the first position, the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current user is used.

Hint

If the function module JOB\_SUBMIT is called internally, its optional parameter LANGUAGE is passed the first position of lang.

Example

This statement

SUBMIT submitable TO SAP-SPOOL
                  SPOOL PARAMETERS print\_parameters
                  WITHOUT SPOOL DYNPRO
                  VIA JOB name NUMBER number
                  LANGUAGE langu
                  AND RETURN.

has the same effect as the following function module call:

CALL FUNCTION 'JOB\_SUBMIT'
  EXPORTING
    authcknam = sy-uname
    jobcount  = number
    jobname   = name
    language  = langu
    priparams = print\_parameters
    report    = 'SUBMITABLE'.