  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm) → 

SUBMIT - job\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_shortref.htm)

Syntax

... *\[*USER user*\]* VIA JOB job NUMBER n *\[*LANGUAGElang*\]* ...

Extras:

[1\. ... USER user](#!ABAP_ADDITION_1@1@)
[2\. ... LANGUAGE lang](#!ABAP_ADDITION_2@2@)

Effect

This addition schedules the execution of the program accessed as a [background task](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbackround_task_glosry.htm "Glossary Entry") with the number n in the [background request](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbackround_request_glosry.htm "Glossary Entry") job. The number n for a background request job must be filled using the function module JOB\_OPEN from the function group BTCH. The full program is processed in a [background session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_session_glosry.htm "Glossary Entry") in accordance with the parameters of the background request and is not processed directly. The addition VIA JOB can only be used together with the addition AND RETURN.

The called program is scheduled and executed in three steps:

1.  The addition VIA JOB also first loads the program in question to a separate [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") when the statement SUBMIT is executed. Here, all steps located before [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm) are executed. This means the events [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) and [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm) are raised and [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") is performed. If the selection screen is not processed in the background when VIA SELECTION-SCREEN is specified, the user of the calling program can edit it and schedule the program accessed in the background request using the function Place in Job. If the user cancels selection screen processing, the program is not scheduled in the background job. In both cases, the internal session of the called program is exited after selection screen processing and the calling program is resumed due to AND RETURN.
    
2.  The program is then scheduled in the background task. Here, the selections specified by the user or in the additions for filling the selection screen are stored in an internal [selection screen variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariant_2_glosry.htm "Glossary Entry").
    
3.  The actual execution of the program then takes place in a separate [background session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_session_glosry.htm "Glossary Entry") as part of the background request. User and client match the current user and client of the current session. The user can be overwritten using the addition USER. The language of the background session is either the current [text environment language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_env_langu_glosry.htm "Glossary Entry") or can be set using the addition LANGUAGE. The program now runs in full. All events are raised, including those from selection screen processing (although these are processed in the background). The selection screen variant stored internally is passed to the selection screen between the events [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm) and [AT SELECTION SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm).
    

If a basic list is created in the program accessed, a [spool request](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspool_request_glosry.htm "Glossary Entry") should be created with explicit spool parameters by specifying [TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_list_options.htm). If this is not done, the addition VIA JOB creates a spool request implicitly that derives its spool parameters from standard values, some of which are taken from the user defaults, and which are not necessarily consistent.

System Fields

sy-subrc

Meaning

0

Background task scheduled successfully.

4

Scheduling terminated by the user on the selection screen.

8

Error in scheduling (in the internal call of JOB\_SUBMIT).

12

Error in internal number assignment.

Notes

-   Background jobs can be created and monitored by choosing the menu path System - Services - Jobs. Internally, the language elements shown here are used. In addition to JOB\_OPEN, the function modules JOB\_CLOSE and JOB\_SUBMIT can also be used in the ABAP program. JOB\_CLOSE completes the creation of a background request. Like the statement SUBMIT, JOB\_SUBMIT schedules an ABAP program as a background task in a background request. JOB\_SUBMIT provides more control options for [background processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbackround_processing_glosry.htm "Glossary Entry") but must be given the input values for the selection screen in an existing selection screen variant. The statement SUBMIT creates this variant and accesses JOB\_SUBMIT internally.
    
-   If a scheduling error occurs, the key of the last [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") sent can be read using the method GET\_ERROR\_MESSAGE of the class CL\_ABAP\_SUBMIT\_HANDLING.
    
-   A short lived [call sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_sequence_glosry.htm "Glossary Entry") is also produced when the addition VIA JOB is used. In the called program, the associated [ABAP memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_memory_glosry.htm "Glossary Entry") can be accessed in those processing blocks that are executed before actual background processing in the first step mentioned above (namely before the internal session is exited after selection screen processing). The actual background processing takes place in a separate [background session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_session_glosry.htm "Glossary Entry"), where neither the [ABAP memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_memory_glosry.htm "Glossary Entry") nor the [user memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_memory_glosry.htm "Glossary Entry") of the calling program can be accessed.
    

Example

Schedules a submitable program as a background task with the number number in a background request name. After scheduling, the background task is completed by the function module JOB\_CLOSE and released immediately, providing the user has the relevant authorization.

DATA: number           TYPE tbtcjob-jobcount,
      name             TYPE tbtcjob-jobname VALUE 'JOB\_TEST',
      print\_parameters TYPE pri\_params.
...
CALL FUNCTION 'JOB\_OPEN'
  EXPORTING
    jobname              = name
  IMPORTING
    jobcount             = number
  EXCEPTIONS
    cant\_create\_job  = 1
    invalid\_job\_data = 2
    jobname\_missing      = 3
    OTHERS           = 4.
IF sy-subrc = 0.
  SUBMIT submitable TO SAP-SPOOL
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
    IF sy-subrc <> 0.
      ...
    ENDIF.
  ELSE.
    DATA(msg) = cl\_abap\_submit\_handling=>get\_error\_message( ).
    MESSAGE ID msg-msgid
            TYPE 'I'
            NUMBER msg-msgno
            WITH msg-msgv1 msg-msgv2 msg-msgv3 msg-msgv4
            DISPLAY LIKE msg-msgty.
  ENDIF.
ENDIF.

Addition 1

... USER user

Effect

The optional addition USER can be used to specify a user name user of the type sy-uname. The name of this user is used to log on to the background session and its authorizations are used to execute the background task. If USER is not specified, the user name of the current user session is used.

Notes

-   The name specified after USER is checked using the [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_BTCH\_NAM. When the program is executed, only those names can be specified for which the current user has the correct authorization. The names permitted by the authorization object represent a type of whitelist of users whose logons allow the current user to execute a background task.
    
-   The current user should not be specified explicitly using USER sy-uname. Not only is this redundant, the system field is also at risk of being overwritten before the background task is scheduled, for example in ABAP Debugger.
    
-   See also [User-Specific Program Flow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_dependent_scrty.htm).
    

Addition 2

... LANGUAGE lang

Effect

This addition sets the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the [background session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_session_glosry.htm "Glossary Entry") in which the called program is executed. If the addition LANGUAGE is not specified, the [text environment language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is used.

lang expects a character-like data object. This must contain a language key with a length of one character in the first place and this value must be contained in the column SPRAS of the database table T002. If the data object lang contains a blank in its first place, the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current user is used.

Note

If the function module JOB\_SUBMIT is called internally, its optional parameter LANGUAGE is filled with the first place of lang.

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
    jobcount             = number
    jobname              = name
    language  = langu
    priparams = print\_parameters
    report    = 'SUBMITABLE'.