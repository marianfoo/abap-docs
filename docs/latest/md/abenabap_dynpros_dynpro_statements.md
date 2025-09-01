  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Statements%20in%20the%20Dynpro%20Flow%20Logic%2C%20ABENABAP_DYNPROS_DYNPRO_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

dynpro - Statements in the Dynpro Flow Logic

The dynpro flow logic is the procedural part of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). It is created using an ABAP-like programming language in the [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") on the Flow Logic tab page. The syntax rules of the dynpro flow logic are largely like the rules for ABAP. In particular, statements are ended using a period, chained statements can be formed, and the same rules apply to comments. In suitable positions, literals can be used whose syntax matches that of ABAP [literals](javascript:call_link\('abenliteral.htm'\)) and whose value range is determined by the requirements of the current statement.

The dynpro flow logic, like ABAP programs, consists of processing blocks. Possible processing blocks are the four event blocks for the dynpro events [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry"), which all start with the key word [PROCESS](javascript:call_link\('dynpprocess.htm'\)). These event blocks contain a small set of statements that are described in the following sections, and which offer the following functions:

-   Call dialog modules of the ABAP program using [MODULE](javascript:call_link\('dynpmodule.htm'\))
-   Control data transports to the ABAP program and handle [error messages](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") using [FIELD](javascript:call_link\('dynpfield.htm'\)) and [CHAIN](javascript:call_link\('dynpchain.htm'\))
-   Execute loops using [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") with [LOOP](javascript:call_link\('dynploop.htm'\))
-   Call [subscreens](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") using [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\))

The statements in the event blocks of the dynpro flow logic are normally processed sequentially. Branches result from error handling following input checks in dialog modules. Screen elements in table form are processed in loops.

Hint

As well as the statements shown here, a range of [obsolete statements for dynpro flow logic](javascript:call_link\('abendynpro_obsolet.htm'\)) exists.

Continue
[dynpro - PROCESS](javascript:call_link\('dynpprocess.htm'\))
[dynpro - MODULE](javascript:call_link\('dynpmodule.htm'\))
[dynpro - FIELD](javascript:call_link\('dynpfield.htm'\))
[dynpro - CHAIN](javascript:call_link\('dynpchain.htm'\))
[dynpro - CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\))
[dynpro - LOOP, WITH CONTROL](javascript:call_link\('dynploop.htm'\))