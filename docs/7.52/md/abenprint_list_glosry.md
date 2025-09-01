  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

spool list

Also called print list. [List](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry") not stored as a [screen list](javascript:call_link\('abenscreen_list_glosry.htm'\) "Glossary Entry") in the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry") but sent page by page to the [SAP spool system](javascript:call_link\('abensap_spool_system_glosry.htm'\) "Glossary Entry"). When it is created, a spool list is associated with one [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry") only. Spool lists can be stacked in [spool list levels](javascript:call_link\('abenprint_list_level_glosry.htm'\) "Glossary Entry"). No more than two spool requests can be open at any one time for a spool list level. The commands used to create a spool list are [NEW-PAGE PRINT ON*|*OFF](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)).

[→ More](javascript:call_link\('abenprint.htm'\))