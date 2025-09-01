  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

CALL SUBSCREEN

Syntax

CALL SUBSCREEN sub\_area *\[*INCLUDING prog dynnr*\]*.

Variants:

[1\. CALL SUBSCREEN sub\_area INCLUDING prog dynnr.](#!ABAP_VARIANT_1@1@)
[2\. CALL SUBSCREEN sub\_area.](#!ABAP_VARIANT_2@2@)

Effect

Includes a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). There is one variant for event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and one variant for event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"). The statement CALL SUBSCREEN cannot be used between the statements LOOP and ENDLOOP or CHAIN and ENDCHAIN.

Notes

-   The statement CALL SUBSCREEN is required for [directly including](javascript:call_link\('abendynp_subscreen.htm'\)) subscreens and for using [tabstrips](javascript:call_link\('abendynp_tabstrip.htm'\)) or [splitter controls](javascript:call_link\('abendynp_splitter_control_spcl.htm'\)) to include them.
    
-   An obsolete variant of this statement is [CALL CUSTOMER SUBSCREEN](javascript:call_link\('dynpcall_customer_subscreen.htm'\)).
    

Variant 1

CALL SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

PBO

This statement is used to include the [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") of the program defined in prog and the dynpro number defined in dynnr in the [subscreen area](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry") sub\_area of the current dynpro, and to process its PBO flow logic at this point. After PBO processing of the subscreen dynpro, the flow logic of the current dynpro is continued after the CALL statement.

The area sub\_area must be specified directly. prog expects either a two-character data object of the current ABAP program or a text field literal. dynnr expects a data object of the type n and length 4 from the current ABAP program or a text field literal. An exception that cannot be handled is raised if the specified subscreen dynpro cannot be found. If no subscreen dynpro is included for PBO in a subscreen area, the area remains empty.

If the specified subscreen dynpro is not defined in the current ABAP program, the specified program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised. If the object is a [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") is created. If the object is an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") or a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), the program is loaded to the [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") of the current program.

The flow logic of the subscreen dynpro calls the dialog modules of its own ABAP program and the global fields of its own program are transported to the subscreen dynpro . When a subscreen is being processed, sy-dynnr contains the dynpro number of the subscreen.

The GUI status and the current next dynpro cannot be changed in the dialog modules of the subscreen, and the statements SET *{* TITLEBAR *|* PF-STATUS *}* and *{* LEAVE *|* SET *}* SCREEN raise an exception there that cannot be handled.

Variant 2

CALL SUBSCREEN sub\_area.

Effect

PAI

The statement calls the PAI flow logic of the [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") bound in the sub\_area [subscreen area](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry"). The subscreen dynpro must be included in the subscreen area for PBO (see variant 1). The same applies to the dialog modules called by the PAI flow logic as to the modules called by PBO. The data transport between the subscreen dynpro and its ABAP program is performed at the call, or is delayed when [FIELD](javascript:call_link\('dynpfield.htm'\)) statements are executed in the PAI flow logic of the subscreen logic.

Notes

-   If the use of subscreens means that the names of the displayed screen elements are not unique, multiple dynpro fields can be assigned to a global data object of the ABAP program, and, accordingly, multiple transports can be performed for PBO and PAI.
    
-   Since function codes from the subscreen dynpro are moved to the OK field of the including dynpro, it is advisable to give these function codes unique names.
    
-   Since the dynpro fields of subscreen dynpros are transported to the global data objects of the program in which the subscreen dynpros are defined, it must be ensured that the calling program is provided with this data when called externally. If reusable subscreen dynpros are to be defined, it is advisable to encapsulate them in function groups and to use function modules to enable the caller to set and use the global data.
    

Example

If a tabstrip control with untyped tabstrips and a subscreen area called SUB is defined on a dynpro, the associated dynpro flow logic can appear as follows. The statement CALL SUBSCREEN includes the subscreen dynpro of the same ABAP program whose number is in the ABAP data object dynnr in the subscreen area SUB. The associated programming section of the ABAP program is in the example for [CONTROLS](javascript:call_link\('abapcontrols_tabstrip.htm'\)).

PROCESS BEFORE OUTPUT.
  MODULE prepare\_tabstrip.
  CALL SUBSCREEN sub INCLUDING sy-repid dynnr.
PROCESS AFTER INPUT.
  CALL SUBSCREEN sub.
  MODULE handle\_user\_command.