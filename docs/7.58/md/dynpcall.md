  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_dynpro_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20CALL%20SUBSCREEN%2C%20DYNPCALL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - CALL SUBSCREEN

Syntax

CALL SUBSCREEN sub\_area *\[*INCLUDING prog dynnr*\]*.

Variants:

[1\. CALL SUBSCREEN sub\_area INCLUDING prog dynnr.](#!ABAP_VARIANT_1@1@)
[2\. CALL SUBSCREEN sub\_area.](#!ABAP_VARIANT_2@2@)

Effect

Includes a [subscreen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_glosry.htm "Glossary Entry") in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"). There is one variant for the event [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") and one variant for the event [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry"). The statement CALL SUBSCREEN cannot be used between the statements LOOP and ENDLOOP or CHAIN and ENDCHAIN.

Hints

-   The statement CALL SUBSCREEN is required to [include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_subscreen.htm) subscreens directly and to include them using [tabstrips](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_tabstrip.htm) or [splitter controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_splitter_control_spcl.htm).
-   An obsolete variant of this statement is [CALL CUSTOMER SUBSCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpcall_customer_subscreen.htm).

Variant 1   

CALL SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

PBO

This statement is used to include the [subscreen dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") of the program defined in prog and the dynpro number defined in dynnr in the [subscreen area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_arrea_glosry.htm "Glossary Entry") sub\_area of the current dynpro, and processes its PBO flow logic at this point. After PBO processing of the subscreen dynpro, the flow logic of the current dynpro is continued after the CALL statement.

The area sub\_area must be specified directly. prog expects either a two-character data object from the current ABAP program or a text field literal. dynnr expects a data object of the type n and length 4 from the current ABAP program or a text field literal. An uncatchable exception is raised if the specified subscreen dynpro cannot be found. If no subscreen dynpro is included for PBO in a subscreen area, the area remains empty.

If the specified subscreen dynpro is not defined in the current ABAP program, the specified program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") and [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapload-of-program.htm) is raised. If the object is a [function pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), a new [additional program group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") is created. If the object is an [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") or a [module pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), the program is loaded to the [program group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_group_glosry.htm "Glossary Entry") of the current program.

The flow logic of the subscreen dynpro calls the dialog modules of its own ABAP program and the global fields of its own program are transported to the subscreen dynpro. When a subscreen is being processed, sy-dynnr contains the dynpro number of the subscreen.

The GUI status and the current next dynpro cannot be changed in the dialog modules of the subscreen, and the statements SET *{* TITLEBAR *|* PF-STATUS *}* and *{* LEAVE *|* SET *}* SCREEN raise an uncatchable exception there.

Variant 2   

CALL SUBSCREEN sub\_area.

Effect

PAI

The statement calls the PAI flow logic of the [subscreen dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") included in the sub\_area [subscreen area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_arrea_glosry.htm "Glossary Entry"). The subscreen dynpro must be included in the subscreen area for PBO (see variant 1). The same applies to the dialog modules called by the PAI flow logic as to the modules called by PBO. The data transport between the subscreen dynpro and its ABAP program is performed at the call, or is delayed when [FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpfield.htm) statements are executed in the PAI flow logic of the subscreen logic.

Hints

-   If the use of subscreens means that the names of the displayed screen elements are not unique, multiple dynpro fields can be assigned to a global data object of the ABAP program, and, accordingly, multiple transports can be performed for PBO and PAI.
-   Since function codes from the subscreen dynpro are moved to the OK field of the including dynpro, it is advisable to give these function codes unique names.
-   Since the dynpro fields of subscreen dynpros are transported to the global data objects of the program in which the subscreen dynpros are defined, it must be ensured that the calling program is provided with this data when called externally. If reusable subscreen dynpros are to be defined, it is advisable to encapsulate them in function pools and to use function modules to enable the caller to set and use the global data.

Example

If a tabstrip control with untyped tabstrips and a subscreen area called SUB is defined on a dynpro, the associated dynpro flow logic can appear as follows. The statement CALL SUBSCREEN includes the subscreen dynpro of the same ABAP program whose number is in the ABAP data object dynnr in the subscreen area SUB. The associated programming section of the ABAP program is in the example for [CONTROLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontrols_tabstrip.htm).

PROCESS BEFORE OUTPUT.
  MODULE prepare\_tabstrip.
  CALL SUBSCREEN sub INCLUDING sy-repid dynnr.
PROCESS AFTER INPUT.
  CALL SUBSCREEN sub.
  MODULE handle\_user\_command.