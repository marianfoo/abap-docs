# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Dynpro Flow and Dynpro Sequences

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_processing.htm)
- [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.766Z

---

### abenabap_dynpros_processing.htm

> **📖 Official SAP Documentation**: [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_processing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

dynpro - Dynpro Flow and Dynpro Sequences

Dynpro Flow

[Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are called either using [transaction codes](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") or using the statement [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). The call raises the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and its event block is processed in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). Afterwards, the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the dynpro (dynamic program) is displayed in the current [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") or in a new level (in the case of modal dialog boxes). After a user action in the user interface of this GUI window, the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") (or [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") or [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry")) is raised and its event block is processed in the dynpro flow logic. In the event blocks of the dynpro flow logic, dialog modules of the associated ABAP program are called. When PAI processing is complete, the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the current dynpro is called.

The display language of a general dynpro is the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") and not the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which can be set with statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

Dynpro Sequence

Each dynpro has a next dynpro. In particular, a dynpro can also have its own special next dynpro. The next dynpro is either statically predefined or it is set in the ABAP program using the statements [SET SCREEN](javascript:call_link\('abapset_screen.htm'\)) or [LEAVE TO SCREEN](javascript:call_link\('abapleave_screen.htm'\)). In this way, a dynpro is automatically part of a dynpro sequence. Each next dynpro always belongs to a single popup level and is executed in a single GUI window. The number of the current dynpro can be taken from the system field sy-dynnr.

The flow of a dynpro sequence is determined by the respective next dynpro of the dynpro in question. During processing, a dynpro always has a next dynpro. At the start of processing, this is statically predefined, but it can be overwritten in the program. The first dynpro of a dynpro sequence is the initial dynpro. A dynpro sequence is ended by calling the next dynpro with the dynpro number 0.

If a dynpro sequence is embedded in another sequence, the calling dynpro sequence is continued after completion of a dynpro sequence. If the dynpro sequence is not embedded, the current program is ended.

Continue
![Example](exa.gif "Example") [dynpro - Dynpro Sequences](javascript:call_link\('abendynpro_flow_abexa.htm'\))



**📖 Source**: [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_processing.htm)

### abendynpro_flow_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_flow_abexa.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Dynpro Flow and Dynpro Sequences](javascript:call_link\('abenabap_dynpros_processing.htm'\)) → 

dynpro - Dynpro Sequences

This example demonstrates how dynpro sequences behave.

Source Code

PROGRAM sapmdemo\_screen\_flow MESSAGE-ID demo\_flight.
TABLES: spfli,
        sairport,
        scarr.
DATA: ok\_code   TYPE c LENGTH 4,
      rcode     TYPE c LENGTH 5,
      old\_spfli TYPE spfli.
\* PBO
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'TD0100'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE status\_0200 OUTPUT.
  SET PF-STATUS 'TD0200'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE status\_0210 OUTPUT.
  SET PF-STATUS 'POPUP'.
  SET TITLEBAR 'POP'.
ENDMODULE.
\* PAI
MODULE user\_command\_0100 INPUT.
  CASE ok\_code.
    WHEN space.
      SELECT SINGLE \*
             FROM  spfli
             WHERE carrid      = @spfli-carrid
             AND   connid      = @spfli-connid
             INTO  @spfli.
      IF sy-subrc NE 0.
        MESSAGE e005 WITH spfli-carrid spfli-connid.
      ENDIF.
      old\_spfli = spfli.
      CLEAR ok\_code.
    WHEN 'CANC'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'EXIT'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'BACK'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE user\_command\_0200 INPUT.
  CASE ok\_code.
    WHEN 'SAVE'.
      UPDATE spfli.
      IF sy-subrc = 0.
        MESSAGE s001 WITH spfli-carrid spfli-connid.
      ELSE.
        MESSAGE a002 WITH spfli-carrid spfli-connid.
      ENDIF.
      CLEAR ok\_code.
    WHEN 'EXIT'.
      CLEAR ok\_code.
      PERFORM safety\_check USING rcode.
      IF rcode = 'EXIT'. SET SCREEN 0. LEAVE SCREEN. ENDIF.
    WHEN 'BACK'.
      CLEAR ok\_code.
      PERFORM safety\_check USING rcode.
      IF rcode = 'EXIT'. SET SCREEN 100. LEAVE SCREEN. ENDIF.
    WHEN 'DELE'.
      MESSAGE w011.
      DELETE FROM spfli
        WHERE carrid = @spfli-carrid
        AND connid = @spfli-connid.
  ENDCASE.
ENDMODULE.
MODULE check\_fr\_airport INPUT.
  SELECT SINGLE \*
         FROM  sairport
         WHERE id = @spfli-airpfrom
         INTO  @sairport.
  IF sy-subrc <> 0.
    MESSAGE e003 WITH spfli-airpfrom.
  ENDIF.
ENDMODULE.
MODULE check\_to\_airport INPUT.
  SELECT SINGLE \*
         FROM  sairport
         WHERE id = @spfli-airpto
         INTO  @sairport.
  IF sy-subrc <> 0.
    MESSAGE e004 WITH spfli-airpto.
  ENDIF.
ENDMODULE.
MODULE exit\_0100 INPUT.
  CASE ok\_code.
    WHEN 'CANC'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'EXIT'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'BACK'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE exit\_0200 INPUT.
  CASE ok\_code.
    WHEN 'CANC'.
      CLEAR ok\_code.
      SET SCREEN 100. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE user\_command\_0210 INPUT.
  CASE ok\_code.
    WHEN 'SAVE'. SET SCREEN 0. LEAVE SCREEN.
    WHEN 'EXIT'. SET SCREEN 0. LEAVE SCREEN.
    WHEN 'CANC'. SET SCREEN 0. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE read\_text\_0100 INPUT.
  SELECT SINGLE \*
         FROM scarr
         WHERE carrid = @spfli-carrid
         INTO @scarr.
ENDMODULE.
\* Subroutine
FORM safety\_check USING rcode.
  LOCAL ok\_code.
  rcode = 'EXIT'.
  CHECK spfli NE old\_spfli.
  CLEAR ok\_code.
  CALL SCREEN 210 STARTING AT 10 5.
  CASE ok\_code.
    WHEN 'SAVE'. UPDATE spfli.
    WHEN 'EXIT'.
    WHEN 'CANC'. CLEAR spfli.
  ENDCASE.
ENDFORM.

Description

The transaction DEMO\_SCREEN\_FLOW uses three dynpros. The dynpros 100 and 200 form a sequence. Dynpro 210 is a modal dialog box and is only called under special circumstances.

-   Dynpro 100: The user enters flight data, chooses Continue to request a detailed display of this data, or ends the transaction.

-   Dynpro 200: The system displays complete details about the flight, in input fields. The user types over the display to enter the changes.

-   Dynpro 210: The modal dialog box appears only if the user attempts to quit dynpro 200 by choosing Back or Exit without saving the values modified. It enables the user to save changes or cancel the operation.

This transaction is a good example of how a dynpro sequence is implemented. A closer look at dynpro 200 shows how the modal dialog box is called. When processing the BACK or EXIT function codes, the PAI module must check if the flight data has been changed since it was last displayed or saved. If this is the case, dynpro 210 is called as a modal dialog box. The following parts of the flow logic of dynpro 200 are as follows:

PROCESS AFTER INPUT.
  MODULE exit\_0200 AT EXIT-COMMAND.
  ...
  MODULE user\_command\_0200.

The system calls two dialog modules at the PAI event. The user interface of transaction DEMO\_SCREEN\_FLOW offers the functions Back, Exit, and Cancel as return commands. On the screen of dynpro 200, the user should only be able to leave the screen directly to dynpro 100 using Cancel. The function code is processed in the module exit\_200. The next dynpro is set dynamically to 100, and dynpro 200 is terminated immediately using LEAVE SCREEN. All other function codes for the screen 200 are processed in the module user\_command\_200:

-   The Save function triggers a database update.

-   The Exit and Back functions call the subroutine safety\_check. This subroutine checks to see whether there is unsaved data on the screen, and, if required, calls dynpro 210.

If the Exit function is chosen (function code EXIT), the user leaves the transaction completely since the dynpro sequence is ended dynamically using SET SCREEN 0. If the user chooses Back (function code BACK), the next dynpro is changed dynamically to 100 using SET SCREEN 100.

The subroutine safety\_check first compares the current values of the dynpro fields with the values saved. If the values match, no save is needed, and the routine terminates. If the values differ, safety\_check calls the modal dialog box of dynpro 210. This asks the user if he or she wants to save, and returns the answer to the field ok\_code. The static next dynpro for dynpro 210 is 210. However, the processing logic (module user\_command\_210) always sets the next dynpro dynamically to 0, which returns control to the subroutine.

The following figure summarizes the flow of the dynpro sequences in the example:

![Figure](abdoc_dynpro_seq.gif)
