  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\)) → 

SET MARGIN

[Short Reference](javascript:call_link\('abapset_margin_shortref.htm'\))

Syntax

SET MARGIN macol *\[*marow*\]*.

Effect

This statement defines the left margin of a spool list as the columns specified in macol, and the upper margin as the rows specified in marow, and sets the system fields sy-macol and sy-marow to these values. macol and marow expect data objects with the type i, with values within the current page width and page length. If macol or marow contain invalid values, the associated operand is ignored.

The set values apply to the current page and all subsequent pages until the next SET MARGIN statement. If more than one SET MARGIN statement is specified on a page, the last one applies.

SET MARGIN is ignored when screen lists are displayed. The set margins are only inserted in the list as blanks or empty lines if a list page is sent to the SAP spool system. This applies to spool lists created using [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)), [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)), and by the selection of Execute and Print on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). SET MARGIN also applies if a screen list is spooled while it is being displayed, when Print (function code "PRI") is selected.

Hint

For printers with an active list driver, margins can be defined in millimeters in the spool dialog. When pages are sent from the spool system to the printer, the pages, including the margins set using SET MARGIN, are positioned within these margins.