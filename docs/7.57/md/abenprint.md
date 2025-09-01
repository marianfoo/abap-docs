  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool, ABENPRINT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

Lists - Spool

The "spooling" of lists means the list output is not passed to the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry") for [screen lists](javascript:call_link\('abenscreen_list_glosry.htm'\) "Glossary Entry") and it is passed page by page to the [SAP spool system](javascript:call_link\('abensap_spool_system_glosry.htm'\) "Glossary Entry") instead. After a page has been passed, it is deleted from the ABAP runtime framework and only exists in the SAP spool system.

The size of a spool list is therefore only limited by the intake capacity of the spool system and can become very large. On the other hand, when spool lists are created, it is not possible to refer to previous pages.

Each spooling of list output is linked to a [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry"). The list pages that are output for a spool request comprise a [spool list](javascript:call_link\('abenspool_list_glosry.htm'\) "Glossary Entry"). The spool list of a spool request can be

-   stored in the spool system,
-   printed on a printer, or
-   archived using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry").

For the spooling of lists, both the activation and deactivation of spooling and the association with spool requests are important.

-   [Switching Spooling On and Off](javascript:call_link\('abenprint_on_off.htm'\))
-   [Spool List Levels and Spool Requests](javascript:call_link\('abenprint_spool.htm'\))

The following topics also play a role in spooling lists:

-   [Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\))
-   [Spool Control](javascript:call_link\('abenprint_control.htm'\))
-   [Spooling Screen Lists](javascript:call_link\('abenprint_screen.htm'\))

Hint

Separate solutions are provided for form-based output of data, instead of spool lists.

Continue
[Lists - Switching Spooling On and Off](javascript:call_link\('abenprint_on_off.htm'\))
[Lists - Spool List Levels and Spool Requests](javascript:call_link\('abenprint_spool.htm'\))
[Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\))
[Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\))
[Lists - Spooling Screen Lists](javascript:call_link\('abenprint_screen.htm'\))
![Example](exa.gif "Example") [Lists - Spool](javascript:call_link\('abenprint_list_abexa.htm'\))