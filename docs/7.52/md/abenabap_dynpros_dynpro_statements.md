  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

Statements in the Screen Flow Logic

The screen flow logic is the procedural part of a [screen](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). It is created using an ABAP-like programming language in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") on the Flow Logic tab page. The syntax rules of the screen flow logic are largely similar to the rules for ABAP. In particular, statements are ended using a period, chained statements can be formed, and the same rules apply for comments. In suitable positions, literals can be used whose syntax matches that of ABAP [literals](javascript:call_link\('abenliteral.htm'\)) and whose value range is determined by the requirements of the current statement.

The screen flow logic, like ABAP programs, is structured from processing blocks. Possible processing blocks are the four event blocks for the screen events [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"), [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry"), and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry"), which all start with the key word [PROCESS](javascript:call_link\('dynpprocess.htm'\)). These event blocks contain a small set of statements that are described in the following sections, and which offer the the following functions:

-   Call dialog modules of the ABAP program using [MODULE](javascript:call_link\('dynpmodule.htm'\))

-   Control data transports to the ABAP program and handle [error messages](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") using [FIELD](javascript:call_link\('dynpfield.htm'\)) and [CHAIN](javascript:call_link\('dynpchain.htm'\))

-   Execute loops using [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") with [LOOP](javascript:call_link\('dynploop.htm'\))

-   Call [subscreens](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") using [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\))

The statements in the event blocks of the screen flow logic are normally processed sequentially. Branches result from error handling following input checks in dialog modules. Screen elements in table form are processed in loops.

Note

As well as the statements shown here, a range of [obsolete statements for dynpro flow logic](javascript:call_link\('abendynpro_obsolet.htm'\)) exists.

Continue
[PROCESS](javascript:call_link\('dynpprocess.htm'\))
[MODULE](javascript:call_link\('dynpmodule.htm'\))
[FIELD](javascript:call_link\('dynpfield.htm'\))
[CHAIN](javascript:call_link\('dynpchain.htm'\))
[Table Controls](javascript:call_link\('abendynp_table_controls.htm'\))
[Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\))