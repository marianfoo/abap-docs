  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Create%2C%20ABENABAP_LISTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists - Create

The following ABAP statements are used for creating classical lists:

-   [WRITE](javascript:call_link\('abapwrite-.htm'\))
-   [ULINE](javascript:call_link\('abapuline.htm'\))
-   [FORMAT](javascript:call_link\('abapformat.htm'\))
-   [SET BLANK LINES](javascript:call_link\('abapset_blank_lines.htm'\))
-   [SKIP](javascript:call_link\('abapskip.htm'\))
-   [NEW-LINE](javascript:call_link\('abapnew-line.htm'\))
-   [BACK](javascript:call_link\('abapback.htm'\))
-   [POSITION](javascript:call_link\('abapposition.htm'\))
-   [SET LEFT SCROLL-BOUNDARY](javascript:call_link\('abapset_scroll-boundary.htm'\))
-   [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\))
-   [RESERVE](javascript:call_link\('abapreserve.htm'\))
-   [HIDE](javascript:call_link\('abaphide.htm'\))
-   [SET MARGIN](javascript:call_link\('abapset_margin.htm'\))
-   [PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\))

Programming Guideline

[Use SAP List Viewer](javascript:call_link\('abenlist_guidl.htm'\) "Guideline")

Hint

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example CL\_SALV\_TABLE.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](javascript:call_link\('abentext_output_abexa.htm'\)) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class [CL\_DEMO\_OUTPUT\_STREAM](javascript:call_link\('abencl_demo_output.htm'\)). The program DEMO\_OUTPUT\_STREAM shows potential uses of this class. The class CL\_DEMO\_OUTPUT, which is based on CL\_DEMO\_OUTPUT\_STREAM, is used in programs from the [ABAP Example Library](javascript:call_link\('abenabap_examples.htm'\)).

Continue
[WRITE](javascript:call_link\('abapwrite-.htm'\))
[ULINE](javascript:call_link\('abapuline.htm'\))
[FORMAT](javascript:call_link\('abapformat.htm'\))
[SET BLANK LINES](javascript:call_link\('abapset_blank_lines.htm'\))
[SKIP](javascript:call_link\('abapskip.htm'\))
[NEW-LINE](javascript:call_link\('abapnew-line.htm'\))
[BACK](javascript:call_link\('abapback.htm'\))
[POSITION](javascript:call_link\('abapposition.htm'\))
[SET LEFT SCROLL-BOUNDARY](javascript:call_link\('abapset_scroll-boundary.htm'\))
[NEW-PAGE](javascript:call_link\('abapnew-page.htm'\))
[RESERVE](javascript:call_link\('abapreserve.htm'\))
[HIDE](javascript:call_link\('abaphide.htm'\))
![Example](exa.gif "Example") [Lists - Page Layout](javascript:call_link\('abenlist_pages_abexa.htm'\))