---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_html_input DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. METHODS handle_sapevent FOR EVENT sapevent OF cl_abap_browser IMPORTING action query_table. ENDCLASS.  Public c
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhtml_input_abexa.htm"
abapFile: "abenhtml_input_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenhtml", "input", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Input%20in%20HTML%20File%2C%20ABENHTML_INPUT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Input in HTML File

This example demonstrates how input in a HTML file can be processed.

Source Code   

\* Public class definition
CLASS cl\_demo\_html\_input DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS handle\_sapevent
      FOR EVENT sapevent
      OF cl\_abap\_browser
      IMPORTING action
                query\_table.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_html\_input IMPLEMENTATION.
  METHOD main.
    DATA error\_list TYPE cl\_abap\_browser=>html\_table.
    SET HANDLER handle\_sapevent.
    FINAL(html\_str) =
       \`<html>\`
    && \`  <head>\`
    && \`    <meta http-equiv="content-type" \`
    && \`          content="text/html; \`
    && \`          charset=utf-8">\`
    && \`    <script language="JavaScript">\`
    && \`      function sendInput(form) \`
    && \`          { fname=form.name;       \`
    && \`            document\[fname\].submit();} \`
    && \`      function InputKeyDown(form) {\`
    && \`        if(event.keyCode == 13) {\`
    && \`            fname=form.name;\`
    && \`            document\[fname\].submit();} }\`
    && \`    </script>\`
    && \`  </head>\`
    && \`  <body>\`
    && \`    <form name="INPUT" accept-charset="utf-8" \`
    && \`          method="post" action="SAPEVENT:INPUT"> \`
    && \`      <input type="text" id="in1" name="field1" \`
    && \`             size=30 maxlength=30 title="" value="aaa" \`
    && \`             onKeyDown="InputKeyDown(this.form);"><br>\`
    && \`      <input type="text" id="in2" name="field2" \`
    && \`             size=30 maxlength=30 title="" value="bbb" \`
    && \`             onKeyDown="InputKeyDown(this.form);"><br>\`
    && \`      <input type="text" id="in3" name="field3" \`
    && \`             size=30 maxlength=30 title="" value="ccc" \`
    && \`             onKeyDown="InputKeyDown(this.form);"><br><br>\`
    && \`     <button id="enterButton" type="button" \`
    && \`             title="Enter" onClick="sendInput(INPUT);" \`
    && \`             onKeypress="if(event.keycode=13) \`
    && \`             sendInput(INPUT);">\`
    && \`             Enter</button>\`
    && \`    </form>\`
    && \`  </body>\`
    && \`</html>\`.
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        title       = 'Input Demo'
      IMPORTING
         html\_errors = error\_list ).
    IF error\_list IS NOT INITIAL.
      MESSAGE 'Error in HTML' TYPE 'I' DISPLAY LIKE 'E'.
    ENDIF.
  ENDMETHOD.
  METHOD handle\_sapevent.
    FINAL(o) = cl\_demo\_output\_stream=>open( ).
    SET HANDLER cl\_demo\_output\_html=>handle\_output FOR o.
    o->write\_data( iv\_name = 'ACTION'      ia\_value = action ).
    o->write\_data( iv\_name = 'QUERY\_TABLE' ia\_value = query\_table ).
    o->close( ).
  ENDMETHOD.
ENDCLASS.

Description   

This example creates a HTML file containing multiple input fields, a pushbutton, and JavaScript functions for handling the input. The form INPUT uses method="post" to send the input data. The HTML control in CFW uses the parameter QUERY\_TABLE of the event SAPEVENT to pass this data to its handler. The class CL\_ABAP\_BROWSER (a wrapper for the class CL\_GUI\_HTML\_VIEWER also passes this parameter and the user input can be used in the ABAP class.

See also the corresponding executable example for [ICF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_post_service_abexa.htm).