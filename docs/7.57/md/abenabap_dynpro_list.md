  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Classic Lists, ABENABAP_DYNPRO_LIST, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

Classic Lists

A classic list or list for short is a medium used for the structured and formatted output of data. List output is either written to a [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry") as a [screen list](javascript:call_link\('abenscreen_list_glosry.htm'\) "Glossary Entry") and displayed on a [list dynpro](javascript:call_link\('abenlist_dynpro_glosry.htm'\) "Glossary Entry") or is sent to the [SAP spool system](javascript:call_link\('abensap_spool_system_glosry.htm'\) "Glossary Entry") as a [spool list](javascript:call_link\('abenspool_list_glosry.htm'\) "Glossary Entry").

-   [Lists - Overview](javascript:call_link\('abenlist_overview.htm'\))
-   [Lists - System Fields](javascript:call_link\('abenlist_systemfields.htm'\))
-   [Spooling Lists](javascript:call_link\('abenprint.htm'\))
-   [Creating Lists](javascript:call_link\('abenabap_lists.htm'\))
-   [Processing Lists in the List Buffer](javascript:call_link\('abenabap_lists_complex.htm'\))
-   [List Display](javascript:call_link\('abenlists_displayed.htm'\))
-   [Event Blocks for Lists](javascript:call_link\('abenabap_lists_interactive.htm'\))
-   [System Class for Classic Lists](javascript:call_link\('abencl_abap_list_utilities.htm'\))

Hint

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example CL\_SALV\_TABLE.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](javascript:call_link\('abentext_output_abexa.htm'\)) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class CL\_DEMO\_OUTPUT\_STREAM. The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](javascript:call_link\('abenabap_examples.htm'\)).

Continue
[Lists - Overview](javascript:call_link\('abenlist_overview.htm'\))
[Lists - System Fields](javascript:call_link\('abenlist_systemfields.htm'\))
[Lists - Create](javascript:call_link\('abenabap_lists.htm'\))
[Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\))
[Lists - Display](javascript:call_link\('abenlists_displayed.htm'\))
[Lists - Spool](javascript:call_link\('abenprint.htm'\))
[Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\))
[Lists - System Class](javascript:call_link\('abencl_abap_list_utilities.htm'\))