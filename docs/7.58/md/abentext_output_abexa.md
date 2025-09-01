  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Elements](javascript:call_link\('abenabap_dynpro_elements.htm'\)) →  [dynpro - Screen Layout and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [dynpro - Examples of Screen Elements](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Text%20Output%2C%20ABENTEXT_OUTPUT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Text Output

This example demonstrates the output of unformatted text.

Source Code   

REPORT demo\_show\_text.
cl\_demo\_show\_text=>main( ).

Description   

The class CL\_DEMO\_SHOW\_TEXT uses the methods of the class CL\_DEMO\_TEXT, which was designed for this purpose. The class encapsulates the use of a text edit control in a dialog box.

Wrappers like this can replace the use of the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) for simple text output.