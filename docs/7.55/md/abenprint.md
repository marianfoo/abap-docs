  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Lists - Spool

The "spooling" of lists means the list output is not put in the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry") for [screen lists](javascript:call_link\('abenscreen_list_glosry.htm'\) "Glossary Entry"), instead it is passed, page by page, to the [SAP spool system](javascript:call_link\('abensap_spool_system_glosry.htm'\) "Glossary Entry"). After a page has been passed, it is deleted from the ABAP runtime environment and only exists in the SAP spool system.

The size of a spool list is therefore only limited by the intake capacity of the spool system, and can be very large. On the other hand, when spool lists are created, it is not possible to refer to previous pages.

Each spooling of list output is associated with a [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry"). The list pages that are passed to a spool request comprise a [spool list](javascript:call_link\('abenspool_list_glosry.htm'\) "Glossary Entry"). The spool list of a spool request can be

-   kept in the spool system,

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
[Lists - Spooling On and Off](javascript:call_link\('abenprint_on_off.htm'\))
[Lists - Spool List Levels and Spool Requests](javascript:call_link\('abenprint_spool.htm'\))
[Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\))
[Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\))
[Lists - Spooling Screen Lists](javascript:call_link\('abenprint_screen.htm'\))
![Example](exa.gif "Example") [Lists - Spool](javascript:call_link\('abenprint_list_abexa.htm'\))