  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Statements%20in%20the%20Dynpro%20Flow%20Logic%2C%20ABENABAP_DYNPROS_DYNPRO_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

dynpro - Statements in the Dynpro Flow Logic

The dynpro flow logic is the procedural part of a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"). It is created using an ABAP-like programming language in the [Screen Painter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_painter_glosry.htm "Glossary Entry") on the Flow Logic tab page. The syntax rules of the dynpro flow logic are largely like the rules for ABAP. In particular, statements are ended using a period, chained statements can be formed, and the same rules apply to comments. In suitable positions, literals can be used whose syntax matches that of ABAP [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm) and whose value range is determined by the requirements of the current statement.

The dynpro flow logic, like ABAP programs, consists of processing blocks. Possible processing blocks are the four event blocks for the dynpro events [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry"), [PAI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpai_glosry.htm "Glossary Entry"), [POH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpov_glosry.htm "Glossary Entry"), which all start with the key word [PROCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpprocess.htm). These event blocks contain a small set of statements that are described in the following sections, and which offer the following functions:

-   Call dialog modules of the ABAP program using [MODULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpmodule.htm)
-   Control data transports to the ABAP program and handle [error messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenerror_message_glosry.htm "Glossary Entry") using [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm) and [CHAIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpchain.htm)
-   Execute loops using [table controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_control_glosry.htm "Glossary Entry") with [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynploop.htm)
-   Call [subscreens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubscreen_glosry.htm "Glossary Entry") using [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpcall.htm)

The statements in the event blocks of the dynpro flow logic are normally processed sequentially. Branches result from error handling following input checks in dialog modules. Screen elements in table form are processed in loops.

Hint

As well as the statements shown here, a range of [obsolete statements for dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_obsolet.htm) exists.

Continue
[dynpro - PROCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpprocess.htm)
[dynpro - MODULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpmodule.htm)
[dynpro - FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm)
[dynpro - CHAIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpchain.htm)
[dynpro - CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpcall.htm)
[dynpro - LOOP, WITH CONTROL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynploop.htm)