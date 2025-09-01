# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Dynpro Flow and Dynpro Sequences

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_processing.htm)
- [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:29.002Z

---

### abenabap_dynpros_processing.htm

> **📖 Official SAP Documentation**: [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_processing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_processing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Dynpro%20Flow%20and%20Dynpro%20Sequences%2C%20ABENABAP_DYNPROS_PROCESSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

dynpro - Dynpro Flow and Dynpro Sequences

Dynpro Flow

-   [Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are called either using [transaction codes](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") or using the statement [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). The call raises the event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and its event block is processed in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). Afterwards, the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the dynpro is displayed in the current [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") or in a new level (in the case of modal dialog boxes). After a user action in the user interface of this GUI window, the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") (or [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") or [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry")) is raised and its event block is processed in the dynpro flow logic. In the event blocks of the dynpro flow logic, dialog modules of the associated ABAP program are called. When PAI processing is complete, the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the current dynpro is called.
-   The display language of a general dynpro is the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") and not the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which can be set with statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

Dynpro Sequence

-   Each dynpro has a next dynpro. In particular, a dynpro can also be its own special next dynpro. The next dynpro is either statically predefined or it is set in the ABAP program using the statements [SET SCREEN](javascript:call_link\('abapset_screen.htm'\)) or [LEAVE TO SCREEN](javascript:call_link\('abapleave_screen.htm'\)). In this way, a dynpro is automatically part of a dynpro sequence. Each next dynpro always belongs to a single popup level and is executed in a single GUI window. The number of the current dynpro can be taken from the system field sy-dynnr.
-   The flow of a dynpro sequence is determined by the respective next dynpro of the dynpro involved. During processing, a dynpro always has a next dynpro. At the start of processing, this is statically predefined, but it can be overwritten in the program. The first dynpro of a dynpro sequence is the initial dynpro. A dynpro sequence is ended by calling the next dynpro with the dynpro number 0.
-   If a dynpro sequence is embedded in another sequence, the calling dynpro sequence is continued after completion of a dynpro sequence. If the dynpro sequence is not embedded, the current program is ended.

Dynpro Flow and Sequences in Detail

For the user, an application program consists of a series of dynpros that are displayed one after the other. The major difference between the program flow of an executable program and a dialog program is that, in a dialog program, dynpros can be programmed to appear in any sequence required. In executable programs, the dynpro sequence is controlled by events, which occur in a fixed order. In a dialog program, the programmer is free to program any sequence of dynpros, and the user can affect the program flow by his or her actions. However, it is still possible to call a freely defined dynpro sequence within an executable program and hence to branch into a form of dialog program.

Dynpros are always part of an ABAP program. The dialog modules in an ABAP program can only be called from the dynpros in the same program. The system field sy-dynnr always contains the number of the current dynpro. Any number of complex dynpro sequences can be called from the dynpros in a single program. For example, it is possible to navigate from one dynpro to any other dynpro in the same program, or repeat part of a sequence any number of times.

![Figure](dynpro_seq_static_next.png)

A dynpro sequence is started by calling its first dynpro. This is done either by starting a transaction where the first dynpro is defined or by using the statement CALL SCREEN in an ABAP program. When a dynpro sequence is called using the statement CALL SCREEN, it is always embedded in the dynpro sequence of the application program that is already running.

The actual sequence of dynpros is defined by setting the next dynpro for each dynpro in the chain. The dynpro attributes of every dynpro in Screen Painter contain a static next dynpro. This defines a static dynpro sequence. The value of the static next dynpro can be overwritten dynamically in the ABAP processing logic. This enables dynamic dynpro sequences to be defined that change according to user actions.

Dynpro sequences can also be executed without displaying all of the screens. The statement SUPPRESS DIALOG, used in a PBO module, prevents a dynpro from being displayed. In this case, the entire PBO and PAI logic is executed, but the dynpro is not displayed. It can be useful to suppress dynpros if lists are to be displayed in a dynpro sequence.

Dynpro sequences always end when they the number of the next dynpro is zero. For this reason, it is not possible to create dynpros with the number zero. The dynpro number zero is used only to end a dynpro sequence. When a dynpro sequence ends, the system returns to the point from which the first dynpro in the sequence was called. If a transaction code was called, this is the point where the transaction started. If CALL SCREEN was called, this is a point in the associated ABAP program.

The following sections describe in more detail how to define dynpro sequences.

Static Next Dynpro

In the Screen Painter tool, the dynpro attribute Next Dynpro is defined for every dynpro. This attribute contains the number of the dynpro that follows the current dynpro statically. However, the static attribute is always bypassed if the next dynpro is overwritten dynamically while the dynpro is being executed.

The default next dynpro in Screen Painter is always the number of the dynpro itself. If the default value is used and not overwritten dynamically, the dynpro calls itself recursively. In this case, the sequence consists of a single dynpro only.

If the next dynpro specified has the value zero (or no value at all) and it is not overridden dynamically, the current dynpro is the last in the dynpro sequence. After the dynpro has been processed, control returns to the point from which the dynpro sequence was called. If the dynpro sequence was embedded, the system returns to the calling dynpro sequence. If the dynpro sequence is not embedded, the application program terminates.

![Figure](dynpro_seq_static_next.png)

Dynamic Next Dynpro

Every dynpro has a static next dynpro that specifies the next dynpro to be called after the current one, as long as it is not overwritten dynamically. In the processing logic, that is, a dialog module called by the dynpro, you can use the SET SCREEN statement to overwrite the statically defined next dynpro dynamically:

SET SCREEN ....

This statement defines a new next dynpro for the current program run. You can also specify the number of the next dynpro as a field containing a dynpro number. The statically defined next dynpro is ignored. However, this only overrides the static dynpro sequence temporarily. The static value for the next dynpro, as defined in the Screen Painter, is always retained.

If you specify the value 0 for next dynpro, the current dynpro becomes the last in the dynpro chain. After the dynpro has been processed, control returns to the point from which the dynpro sequence was called. If the dynpro sequence was embedded, the system returns to the previous dynpro sequence containing the relevant CALL SCREEN statement. If the dynpro sequence was not embedded, the application program terminates.

The SET SCREEN statement does not interrupt the current dynpro processing. To leave a dynpro, use the ABAP statement LEAVE ....

![Figure](dynpro_seq_next_screen.png)

Leaving a Dynpro from a Program

In a program, you can use one of the two following ABAP statements to leave a dynpro:

LEAVE SCREEN. or LEAVE TO SCREEN ....

The LEAVE SCREEN statement ends the current dynpro and calls the subsequent dynpro. The next dynpro is either the static next dynpro or a dynamic next dynpro. In the second case, you must override the static next dynpro using the SET SCREEN statement before the LEAVE SCREEN statement. The LEAVE TO SCREEN statement exits the current dynpro and calls the dynamic next dynpro, which you specify as part of the statement.

The LEAVE TO SCREEN statement is nothing more than a contraction of the two statements SET SCREEN and LEAVE SCREEN. These statements do not end the entire dynpro sequence. They merely branch to another dynpro in the same sequence. The dynpro sequence only ends when you leave to next dynpro 0.

Calling Dynpro Sequences

There are two ways of calling a dynpro sequence. Starting a sequence from an ABAP program allows you to insert a sequence of dynpros into the existing program flow.

Using a Transaction Code

When you use a transaction code to start a dynpro sequence, the corresponding ABAP program is automatically loaded as well. The processing logic of the program is controlled by the dynpro flow logic. On reaching the end of the dynpro sequence (next dynpro 0), the entire application program terminates at the same time. Control returns to the point from which the transaction was called.

![Figure](dynpro_seq_call_scr_transaction.png)

From a program

You can start a dynpro sequence from an ABAP program using the CALL SCREEN .... statement. At the end of the dynpro sequence (next dynpro 0), the program continues processing directly after the CALL SCREEN statement.

![Figure](dynpro_seq_call_scr_prog.png)

Inserting sequences

If you use the CALL SCREEN statement within a dynpro sequence that is already running, the new dynpro sequence is inserted into the current sequence.

![Figure](dynpro_seq_call_scr_insert_seq.png)

This works as a kind of stack, since the CALL SCREEN statement interrupts the current dynpro sequence and starts a new one. When you start a dynpro sequence with a transaction code, you can stack up to 50 other dynpro sequences on top of it. However, you should not exceed 40 sequences, since help and error dialogs also use internally implemented dynpro sequences.

Since during an SAP Web AS ABAP session you are always in a dynpro sequence of some kind, each CALL SCREEN statement leads to one dynpro sequence being inserted into another. For example, if you use the statement in an executable program, the dynpro sequence is normally inserted into the normal dynpro sequence for executable programs, that is, the predetermined selection screen list.

Embedding Modal Dialog Boxes

Calling a single dynpro is a special case of embedding a dynpro sequence. If you want to prevent the called dynpro from covering the current dynpro completely, you can use the CALL SCREEN statement with the STARTING AT and ENDING AT options:

CALL SCREEN scrn
STARTING AT x1 y1
ENDING AT x2 y2.

This calls the dynpro number scrn as a modal dialog box. This means that during the dialog box display the dynpro behind it is visible but inactive. The options STARTING AT and ENDING AT define the start and end positions of the dialog box. In the dynpro attributes of dynpro scrn, you must set the modal dialog box attribute. This defines how the interface elements are positioned on the dynpro.

![Figure](dynpro_seq_call_scr_embed_modal.png)
Continue
![Example](exa.gif "Example") [dynpro - Dynpro Sequences](javascript:call_link\('abendynpro_flow_abexa.htm'\))



**📖 Source**: [abenabap_dynpros_processing.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_processing.htm)

### abendynpro_flow_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abendynpro_flow_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Dynpro Flow and Dynpro Sequences](javascript:call_link\('abenabap_dynpros_processing.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Dynpro%20Sequences%2C%20ABENDYNPRO_FLOW_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

-   Dynpro 100: The user enters flight data, chooses Continue to request a detailed display of the flight data, or ends the transaction.
-   Dynpro 200: The system displays complete details about the flight in input fields. The user overwrites the displayed data to enter the changes.
-   Dynpro 210: The modal dialog box is only displayed if the user attempts to exit dynpro 200 by choosing Back or Exit without saving the values modified. It enables the user to save changes or cancel the operation.

This transaction is a good example of how a dynpro sequence is implemented. A closer look at dynpro 200 shows how the modal dialog box is called. When processing the BACK or EXIT function codes, the PAI module must check if the flight data has been changed since it was last displayed or saved. If this is the case, dynpro 210 is to be called as a modal dialog box. The following parts of the flow logic of dynpro 200 are relevant here:

PROCESS AFTER INPUT.
  MODULE exit\_0200 AT EXIT-COMMAND.
  ...
  MODULE user\_command\_0200.

The system calls two dialog modules at the PAI event. The user interface of transaction DEMO\_SCREEN\_FLOW offers the functions Back, Exit, and Cancel as return commands. On the screen of dynpro 200, the user should only be able to leave the screen directly and return to dynpro 100 using Cancel. The function code is processed in the module exit\_200. The next dynpro is set dynamically to 100, and dynpro 200 is terminated immediately using LEAVE SCREEN. All other function codes for the screen 200 are processed in the module user\_command\_200:

-   The Save function triggers a database update.
-   The Exit and Back functions call the subroutine safety\_check. This subroutine checks to see whether there is unsaved data on the screen, and, if required, calls dynpro 210.

If the Exit function is chosen (function code EXIT), the user leaves the transaction completely since the dynpro sequence is ended dynamically using SET SCREEN 0. If the user chooses Back (function code BACK), the next dynpro is changed dynamically to 100 using SET SCREEN 100.

The subroutine safety\_check first compares the current values of the dynpro fields with the values saved. If the values match, the user does not have to save and the subroutine terminates. If the values differ, safety\_check calls the modal dialog box of dynpro 210. This asks the user whether they want to save and returns the answer to the field ok\_code. The static next dynpro for dynpro 210 is 210. However, the processing logic (module user\_command\_210) always sets the next dynpro dynamically to 0, which returns control to the subroutine.

The following figure summarizes the flow of the dynpro sequences in the example:

![Figure](abdoc_dynpro_seq.gif)
