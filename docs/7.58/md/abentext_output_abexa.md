---
title: "Source Code"
description: |
  REPORT demo_show_text. cl_demo_show_text=>main( ). Description The class CL_DEMO_SHOW_TEXT uses the methods of the class CL_DEMO_TEXT, which was designed for this purpose. The class encapsulates the use of a text edit control in a dialog box. Wrappers like this can replace the use of the s
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_output_abexa.htm"
abapFile: "abentext_output_abexa.htm"
keywords: ["do", "if", "method", "class", "abentext", "output", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Text%20Output%2C%20ABENTEXT_OUTPUT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Text Output

This example demonstrates the output of unformatted text.

Source Code   

REPORT demo\_show\_text.
cl\_demo\_show\_text=>main( ).

Description   

The class CL\_DEMO\_SHOW\_TEXT uses the methods of the class CL\_DEMO\_TEXT, which was designed for this purpose. The class encapsulates the use of a text edit control in a dialog box.

Wrappers like this can replace the use of the statement [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) for simple text output.