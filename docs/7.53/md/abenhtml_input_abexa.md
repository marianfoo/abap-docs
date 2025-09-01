  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Dynpros, Input in HTML File

This example demonstrates how input in a HTML file can be processed.

Source Code

REPORT demo\_html\_input.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS handle\_sapevent
      FOR EVENT sapevent
                  OF cl\_abap\_browser
      IMPORTING action
                  query\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA error\_list TYPE cl\_abap\_browser=>html\_table.
    SET HANDLER handle\_sapevent.
    DATA(html\_str) =
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
    ENDIF.  ENDMETHOD.
  METHOD handle\_sapevent.
    DATA(out) = cl\_demo\_output\_stream=>open( ).
    SET HANDLER cl\_demo\_output\_html=>handle\_output FOR out.
    out->write\_data( iv\_name = 'ACTION'      ia\_value = action ).
    out->write\_data( iv\_name = 'QUERY\_TABLE' ia\_value = query\_table ).
    out->close( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example creates a HTML file containing multiple input fields, a pushbutton, and JavaScript functions for handling the input. The form INPUT uses method="post" to send the input data. The HTML control in CFW uses the parameter QUERY\_TABLE of the event SAPEVENT to pass this data to its handler. The class CL\_ABAP\_BROWSER (a wrapper for the class CL\_GUI\_HTML\_VIEWER also passes this parameter and the user input can be used in the ABAP program.

Also see the corresponding executable example for [ICF](javascript:call_link\('abenicf_post_service_abexa.htm'\)).